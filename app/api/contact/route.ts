import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '@/models/Contact';
import { sendContactNotification, sendAutoReply } from '@/lib/email';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    
    // Validate required fields
    const { name, businessType, email, phoneNumber, countryCode, message } = body;
    
    if (!name || !businessType || !email || !phoneNumber || !countryCode || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Validate business type
    const validBusinessTypes = [
      'salon-spa', 'barber-shop', 'nail-studio', 'makeup-studio', 
      'wellness-center', 'independent-professional', 'others'
    ];
    if (!validBusinessTypes.includes(businessType)) {
      return NextResponse.json(
        { success: false, error: 'Invalid business type' },
        { status: 400 }
      );
    }

    // Create new contact document
    const contactData = {
      name: name.trim(),
      businessType,
      email: email.trim().toLowerCase(),
      phoneNumber: phoneNumber.trim(),
      countryCode,
      message: message.trim(),
      submittedAt: new Date(),
      emailSent: false
    };

    // Save to database
    const contact = new Contact(contactData);
    await contact.save();

    // Send notification email to admin
    let emailResults = { notification: null, autoReply: null };
    
    try {
      const notificationResult = await sendContactNotification(contactData);
      emailResults.notification = notificationResult;
      
      // Wait 2 seconds before sending auto-reply to reduce server load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Send auto-reply to customer
      const autoReplyResult = await sendAutoReply(contactData);
      emailResults.autoReply = autoReplyResult;
      
      // Update emailSent status if at least one email was sent successfully
      if (notificationResult.success || autoReplyResult.success) {
        await Contact.findByIdAndUpdate(contact._id, { emailSent: true });
      }
      
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue execution even if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      contactId: contact._id,
      emailResults
    }, { status: 201 });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { success: false, error: validationErrors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Get contacts with pagination
    const contacts = await Contact.find({})
      .sort({ submittedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Contact.countDocuments();
    
    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}