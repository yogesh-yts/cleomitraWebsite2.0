import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('Testing email configuration...');
    console.log('Environment variables:');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_FROM:', process.env.SMTP_FROM);
    console.log('SMTP_TO:', process.env.SMTP_TO);
    console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set');
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Not set');

    const config: any = {
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
      subject: '🧪 Test Email from Cleomitra',
      html: `
        <h1>Email Test Successful! 🎉</h1>
        <p>This is a test email to verify your SMTP configuration is working.</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
        <p>Configuration: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}</p>
      `,
      text: `Email Test Successful! This is a test email sent at ${new Date().toLocaleString()}`
    };

    console.log('Sending test email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      messageId: result.messageId,
      config: {
        host: config.host,
        port: config.port,
        secure: config.secure,
        hasAuth: !!config.auth
      }
    });

  } catch (error) {
    console.error('Email test failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      details: error.code || 'Unknown error'
    }, { status: 500 });
  }
}