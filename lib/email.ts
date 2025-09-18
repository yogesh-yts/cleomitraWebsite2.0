import nodemailer from 'nodemailer';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { IContact } from '@/models/Contact';

// Create reusable transporter object using SMTP (supports Amazon SES SMTP, Gmail, etc.)
const createEmailTransporter = () => {
  const config: Record<string, unknown> = {
    host: process.env.SMTP_HOST || 'smtp-relay.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    pool: true, // Enable connection pooling
    maxConnections: 3, // Limit concurrent connections
    maxMessages: 100, // Max messages per connection
    rateLimit: 14, // Max emails per second
    tls: {
      rejectUnauthorized: process.env.SMTP_TLS === 'false' ? false : true
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 60000, // 60 seconds
  };

  // Only add auth if username/password are provided (for non-relay setups)
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    config.auth = {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    };
  }

  return nodemailer.createTransport(config);
};

// Initialize SES client
const createSESClient = () => {
  const config: {
    region: string;
    credentials?: {
      accessKeyId: string;
      secretAccessKey: string;
    };
  } = {
    region: process.env.SES_REGION || 'us-east-1',
  };

  // Only add explicit credentials if provided (for local development)
  // In production (Amplify), IAM role will be used automatically
  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };
  }

  return new SESClient(config);
};

// Send email using Amazon SES
const sendEmailWithSES = async (params: {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> => {
  try {
    const sesClient = createSESClient();

    const command = new SendEmailCommand({
      Source: params.from,
      Destination: {
        ToAddresses: [params.to],
      },
      Message: {
        Subject: {
          Data: params.subject,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: params.html,
            Charset: 'UTF-8',
          },
          Text: {
            Data: params.text,
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: params.replyTo ? [params.replyTo] : undefined,
    });

    const result = await sesClient.send(command);
    console.log('Email sent successfully via SES:', result.MessageId);
    return { success: true, messageId: result.MessageId };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown SES error';
    console.error('SES email error:', errorMessage);
    return { success: false, error: errorMessage };
  }
};

// Retry function for failed email attempts
const retryEmailSend = async (transporter: nodemailer.Transporter, mailOptions: nodemailer.SendMailOptions, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully on attempt ${attempt}:`, result.messageId);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Email attempt ${attempt} failed:`, errorMessage);
      
      if (attempt === maxRetries) {
        return { success: false, error: errorMessage };
      }
      
      // Wait before retry (exponential backoff)
      const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
      console.log(`Retrying in ${delay/1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

export const sendContactNotification = async (contactData: IContact) => {
  try {
    // Email template for notification
    const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - Cleomitra</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .field strong { display: inline-block; width: 140px; color: #555; }
    .footer { background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
    .highlight { background: #e7f3ff; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Contact Form Submission</h1>
    <p>Someone is interested in Cleomitra!</p>
  </div>
  
  <div class="content">
    <div class="field">
      <strong>Name:</strong> <span class="highlight">${contactData.name}</span>
    </div>
    
    <div class="field">
      <strong>Email:</strong> <span class="highlight">${contactData.email}</span>
    </div>
    
    <div class="field">
      <strong>Phone:</strong> <span class="highlight">${contactData.countryCode} ${contactData.phoneNumber}</span>
    </div>
    
    <div class="field">
      <strong>Business Type:</strong> <span class="highlight">${contactData.businessType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
    </div>
    
    <div class="field">
      <strong>Message:</strong>
      <div style="background: white; padding: 15px; border-left: 4px solid #007cba; margin-top: 5px; border-radius: 4px;">
        ${contactData.message.replace(/\n/g, '<br>')}
      </div>
    </div>
    
    <div class="field">
      <strong>Submitted:</strong> ${new Date(contactData.submittedAt).toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium'
      })}
    </div>
  </div>
  
  <div class="footer">
    <p>This email was automatically generated from the Cleomitra contact form.</p>
    <p>Please respond to the customer at: <strong>${contactData.email}</strong></p>
  </div>
</body>
</html>`;

    const textTemplate = `
NEW CONTACT FORM SUBMISSION - CLEOMITRA

Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.countryCode} ${contactData.phoneNumber}
Business Type: ${contactData.businessType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}

Message:
${contactData.message}

Submitted: ${new Date(contactData.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

---
This email was automatically generated from the Cleomitra contact form.
Please respond to the customer at: ${contactData.email}
`;

    // Check if using SES or SMTP
    const usesSES = process.env.EMAIL_SERVICE === 'ses';

    if (usesSES) {
      const result = await sendEmailWithSES({
        from: `"Cleomitra Website" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO!,
        subject: `New Contact: ${contactData.name} - ${contactData.businessType}`,
        text: textTemplate,
        html: htmlTemplate,
        replyTo: contactData.email,
      });
      return result;
    } else {
      const transporter = createEmailTransporter();
      const mailOptions = {
        from: `"Cleomitra Website" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO,
        subject: `New Contact: ${contactData.name} - ${contactData.businessType}`,
        text: textTemplate,
        html: htmlTemplate,
        replyTo: contactData.email,
      };

      const result = await retryEmailSend(transporter, mailOptions);
      return result;
    }
    
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: errorMessage };
  }
};

export const sendAutoReply = async (contactData: IContact) => {
  try {
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting Cleomitra</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .footer { background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
    .cta { background: #007cba; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Thank You, ${contactData.name}!</h1>
    <p>We've received your message</p>
  </div>
  
  <div class="content">
    <p>Hi ${contactData.name},</p>
    
    <p>Thank you for your interest in Cleomitra! We've successfully received your message and our team will review it shortly.</p>
    
    <p><strong>What happens next?</strong></p>
    <ul>
      <li>Our sales team will review your inquiry within 24 hours</li>
      <li>We'll reach out to you at <strong>${contactData.email}</strong> or <strong>${contactData.countryCode} ${contactData.phoneNumber}</strong></li>
      <li>We'll schedule a personalized demo based on your business needs</li>
    </ul>
    
    <p><strong>Quick Question?</strong><br>
    You can also reach us directly at <a href="mailto:support@cleomitra.com">support@cleomitra.com</a></p>
    
    <p>Best regards,<br>
    <strong>The Cleomitra Team</strong></p>
  </div>
  
  <div class="footer">
    <p>Cleomitra - Empowering businesses with smart CRM solutions</p>
    <p>Visit us at <a href="https://www.cleomitra.com">www.cleomitra.com</a></p>
  </div>
</body>
</html>`;

    const autoReplyText = `
Hi ${contactData.name},

Thank you for your interest in Cleomitra! We've successfully received your message and our team will review it shortly.

What happens next?
- Our sales team will review your inquiry within 24 hours
- We'll reach out to you at ${contactData.email} or ${contactData.countryCode} ${contactData.phoneNumber}
- We'll schedule a personalized demo based on your business needs

Quick Question?
You can also reach us directly at support@cleomitra.com

Best regards,
The Cleomitra Team

---
Cleomitra - Empowering businesses with smart CRM solutions
Visit us at www.cleomitra.com
`;

    // Check if using SES or SMTP
    const usesSES = process.env.EMAIL_SERVICE === 'ses';

    if (usesSES) {
      const result = await sendEmailWithSES({
        from: `"Cleomitra Team" <${process.env.SMTP_FROM}>`,
        to: contactData.email,
        subject: `Thank you for contacting Cleomitra, ${contactData.name}!`,
        text: autoReplyText,
        html: autoReplyHtml,
      });
      return result;
    } else {
      const transporter = createEmailTransporter();
      const autoReplyOptions = {
        from: `"Cleomitra Team" <${process.env.SMTP_FROM}>`,
        to: contactData.email,
        subject: `Thank you for contacting Cleomitra, ${contactData.name}!`,
        text: autoReplyText,
        html: autoReplyHtml,
      };

      const result = await retryEmailSend(transporter, autoReplyOptions);
      return result;
    }
    
  } catch (error) {
    console.error('Error sending auto-reply:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: errorMessage };
  }
};