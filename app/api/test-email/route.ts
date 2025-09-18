import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export async function POST() {
  try {
    console.log('Testing email configuration...');
    console.log('Environment variables:');
    console.log('EMAIL_SERVICE:', process.env.EMAIL_SERVICE);
    console.log('SMTP_FROM:', process.env.SMTP_FROM);
    console.log('SMTP_TO:', process.env.SMTP_TO);

    const usesSES = process.env.EMAIL_SERVICE === 'ses';

    if (usesSES) {
      console.log('Using Amazon SES');
      console.log('SES_REGION:', process.env.SES_REGION);
      console.log('AWS_REGION (deprecated):', process.env.AWS_REGION);
      console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID ? 'Set' : 'Not set');
      console.log('AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY ? 'Set' : 'Not set');
    } else {
      console.log('Using SMTP');
      console.log('SMTP_HOST:', process.env.SMTP_HOST);
      console.log('SMTP_PORT:', process.env.SMTP_PORT);
      console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set');
      console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Not set');
    }

    if (usesSES) {
      // Test Amazon SES
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
      if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
        config.credentials = {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        };
      }

      const sesClient = new SESClient(config);

      const sesCommand = new SendEmailCommand({
        Source: process.env.SMTP_FROM!,
        Destination: {
          ToAddresses: [process.env.SMTP_TO!],
        },
        Message: {
          Subject: {
            Data: '🧪 Test Email from Cleomitra (SES)',
            Charset: 'UTF-8',
          },
          Body: {
            Html: {
              Data: `
                <h1>SES Email Test Successful! 🎉</h1>
                <p>This is a test email to verify your Amazon SES configuration is working.</p>
                <p>Sent at: ${new Date().toLocaleString()}</p>
                <p>Region: ${process.env.SES_REGION}</p>
              `,
              Charset: 'UTF-8',
            },
            Text: {
              Data: `SES Email Test Successful! This is a test email sent at ${new Date().toLocaleString()}`,
              Charset: 'UTF-8',
            },
          },
        },
      });

      console.log('Sending test email via SES...');
      const result = await sesClient.send(sesCommand);
      console.log('SES email sent successfully:', result.MessageId);

      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully via Amazon SES!',
        messageId: result.MessageId,
        service: 'Amazon SES',
        config: {
          region: process.env.SES_REGION,
          hasCredentials: !!(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY)
        }
      });
    } else {
      // Test SMTP
      const config: Record<string, unknown> = {
        host: process.env.SMTP_HOST || 'smtp-relay.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        tls: {
          rejectUnauthorized: process.env.SMTP_TLS === 'false' ? false : true
        }
      };

      // Only add auth if username/password are provided
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        config.auth = {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        };
      }

      console.log('Transporter config:', { ...config, auth: config.auth ? 'Set' : 'Not set' });

      const transporter = nodemailer.createTransport(config);

      // Verify connection
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully!');

      // Send test email
      const mailOptions = {
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        subject: '🧪 Test Email from Cleomitra (SMTP)',
        html: `
          <h1>SMTP Email Test Successful! 🎉</h1>
          <p>This is a test email to verify your SMTP configuration is working.</p>
          <p>Sent at: ${new Date().toLocaleString()}</p>
          <p>Configuration: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}</p>
        `,
        text: `SMTP Email Test Successful! This is a test email sent at ${new Date().toLocaleString()}`
      };

      console.log('Sending test email...');
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);

      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully via SMTP!',
        messageId: result.messageId,
        service: 'SMTP',
        config: {
          host: config.host,
          port: config.port,
          secure: config.secure,
          hasAuth: !!config.auth
        }
      });
    }

  } catch (error) {
    console.error('Email test failed:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorCode = (error as { code?: string })?.code || 'Unknown error';
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      details: errorCode
    }, { status: 500 });
  }
}