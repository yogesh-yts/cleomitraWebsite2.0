import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Detailed environment variable debugging
    const envDebug = {
      // Email service configuration
      EMAIL_SERVICE: process.env.EMAIL_SERVICE,

      // SMTP Configuration
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_SECURE: process.env.SMTP_SECURE,
      SMTP_TLS: process.env.SMTP_TLS,
      SMTP_USER: process.env.SMTP_USER ? `Set (${process.env.SMTP_USER.substring(0, 4)}...)` : 'Not set',
      SMTP_PASS: process.env.SMTP_PASS ? `Set (${process.env.SMTP_PASS.length} chars)` : 'Not set',

      // Email addresses
      SMTP_FROM: process.env.SMTP_FROM,
      SMTP_TO: process.env.SMTP_TO,

      // AWS/SES Configuration (for comparison)
      SES_REGION: process.env.SES_REGION,
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID ? `Set (${process.env.AWS_ACCESS_KEY_ID.substring(0, 4)}...)` : 'Not set',
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY ? `Set (${process.env.AWS_SECRET_ACCESS_KEY.length} chars)` : 'Not set',

      // Runtime environment
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: process.env.VERCEL,
      AWS_REGION: process.env.AWS_REGION,
      AWS_LAMBDA_FUNCTION_NAME: process.env.AWS_LAMBDA_FUNCTION_NAME,

      // MongoDB
      MONGODB_URI: process.env.MONGODB_URI ? `Set (mongodb+srv://...)` : 'Not set',
    };

    // Skip network tests to avoid timeout issues in some environments
    const networkTest = {
      note: 'Network tests skipped - check manually if needed',
    };

    // Configuration validation
    const validation = {
      hasEmailService: !!process.env.EMAIL_SERVICE,
      emailServiceValue: process.env.EMAIL_SERVICE,
      isSmtpMode: process.env.EMAIL_SERVICE === 'smtp',
      hasSMTPCredentials: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
      hasFromEmail: !!process.env.SMTP_FROM,
      hasToEmail: !!process.env.SMTP_TO,
      smtpHostSet: !!process.env.SMTP_HOST,
      smtpPortSet: !!process.env.SMTP_PORT,
    };

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      environment: envDebug,
      networkConnectivity: networkTest,
      validation: validation,
      potentialIssues: [
        !validation.hasEmailService && 'EMAIL_SERVICE not set',
        !validation.hasSMTPCredentials && validation.isSmtpMode && 'SMTP credentials missing in SMTP mode',
        !validation.hasFromEmail && 'SMTP_FROM email not set',
        !validation.hasToEmail && 'SMTP_TO email not set',
        !validation.smtpHostSet && validation.isSmtpMode && 'SMTP_HOST not set in SMTP mode',
      ].filter(Boolean)
    });

  } catch (error) {
    console.error('Debug endpoint error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json({
      success: false,
      error: errorMessage,
      stack: error instanceof Error ? error.stack : 'No stack trace',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}