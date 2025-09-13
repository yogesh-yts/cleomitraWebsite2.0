import mongoose from 'mongoose';

export interface IContact {
  name: string;
  businessType: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  message: string;
  submittedAt: Date;
  emailSent: boolean;
}

const ContactSchema = new mongoose.Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  businessType: {
    type: String,
    required: [true, 'Business type is required'],
    enum: ['salon-spa', 'barber-shop', 'nail-studio', 'makeup-studio', 'wellness-center', 'independent-professional', 'others']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    trim: true,
    lowercase: true
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [15, 'Phone number cannot be more than 15 characters']
  },
  countryCode: {
    type: String,
    required: [true, 'Country code is required'],
    default: '+91'
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot be more than 1000 characters']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  emailSent: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Create indexes
ContactSchema.index({ email: 1 });
ContactSchema.index({ submittedAt: -1 });

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);