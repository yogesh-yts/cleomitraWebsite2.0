"use client";
import React, { useState, useEffect } from "react";
import Seo from "@/components/Seo";

// Snackbar Component
interface SnackbarProps {
  message: string;
  type: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto dismiss after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = {
    success: "bg-primary",
    error: "bg-primary",
    info: "bg-primary",
  }[type];

  const icon = {
    success: "✓",
    error: "✕",
    info: "ℹ",
  }[type];

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3 max-w-md animate-slide-up`}
    >
      <span className="text-lg font-bold">{icon}</span>
      <div className="flex-1">
        <p className="font-medium text-sm leading-tight">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white text-lg font-bold leading-none"
      >
        ×
      </button>
    </div>
  );
};

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    reason: "",
    confirmText: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    isVisible: boolean;
    message: string;
    type: "success" | "error" | "info";
  }>({
    isVisible: false,
    message: "",
    type: "info",
  });

  const showSnackbar = (
    message: string,
    type: "success" | "error" | "info"
  ) => {
    setSnackbar({
      isVisible: true,
      message,
      type,
    });
  };

  const hideSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, isVisible: false }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.email.trim()) {
      showSnackbar("Please enter your registered email address.", "error");
      return;
    }

    if (!formData.reason) {
      showSnackbar("Please select a reason for deletion.", "error");
      return;
    }

    if (formData.confirmText.trim() !== "DELETE MY ACCOUNT") {
      showSnackbar(
        "Please type 'DELETE MY ACCOUNT' exactly to confirm deletion.",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const googleFormUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd6q3Kybxp7hig6Sp1GmAZf65ea5ee7xDtAefvxwhT7kae9Fg/formResponse";

      const nameFieldId = "entry.1421833200"; // For "Name" (we'll use email as name)
      const phoneFieldId = "entry.720959911"; // For "Phone"
      const messageFieldId = "entry.836436747"; // For "Message" (will include extra data)

      // Format the message to include all extra fields
      const fullMessage = `
**Reason for Deletion:** ${formData.reason}
**Confirmation:** ${formData.confirmText}
**Additional Info:** ${formData.additionalInfo || "None"}
**Submitted At:** ${new Date().toISOString()}
      `.trim();

      const formDataToSubmit = new FormData();
      formDataToSubmit.append(nameFieldId, formData.email); // Using email as "Name"
      formDataToSubmit.append(phoneFieldId, formData.phone || "Not provided");
      formDataToSubmit.append(messageFieldId, fullMessage);

      await fetch(googleFormUrl, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors", // Required for Google Forms
      });

      showSnackbar(
        "✅ Request submitted successfully! We'll process it within 7 business days and send you a confirmation email.",
        "success"
      );

      // Reset form
      setFormData({
        email: "",
        phone: "",
        reason: "",
        confirmText: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      let errorMessage = "There was a problem submitting your request. ";

      if (error instanceof TypeError && error.message.includes("fetch")) {
        errorMessage += "Please check your internet connection and try again.";
      } else {
        errorMessage +=
          "Please try again or contact support at support@yakriatech.com.";
      }

      showSnackbar(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form is valid for button state
  const isFormValid =
    formData.email.trim() !== "" &&
    formData.reason !== "" &&
    formData.confirmText === "DELETE MY ACCOUNT";

  return (
    <>
      <Seo
        title="Delete Account - Cleomitra CRM Data Removal Request"
        description="Request account deletion and data removal from Cleomitra CRM. Secure data deletion process, GDPR compliance. Remove your salon business data safely."
        keywords="delete cleomitra account, remove crm data, account deletion request, data privacy cleomitra, gdpr data removal, delete salon crm account"
        url="https://www.cleomitra.com/delete-account"
        siteName="Cleomitra"
      />
      {/* Add custom CSS for animation */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>

      <main className="bg-white pt-30 pb-20 px-3 md:px-10 lg:px-20 2xl:px-33">
        <div className="max-w-6xl mx-auto pt-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black1 mb-4 font-primary">
              Request Account & Data Deletion
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto font-primary">
              We respect your privacy. Use the form below to request deletion of
              your Cleomitra account and all associated data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Information Section */}
            <div className="bg-gray-400 rounded-lg p-6 border border-black/10">
              <h2 className="text-xl font-semibold text-black mb-4 font-primary">
                What Will Be Deleted
              </h2>
              <ul className="space-y-2 text-black/70 font-primary ">
                <li className="flex items-start text-sm">
                  <span className="text-black mr-2 ">•</span>
                  Account credentials (name, email, phone)
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-black mr-2">•</span>
                  Customer or booking data linked to your profile
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-black mr-2">•</span>
                  App usage history linked to your account
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-black mr-2">•</span>
                  Personal preferences and settings
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-black mt-6 mb-3 font-primary">
                Data We May Retain
              </h3>
              <ul className="space-y-2 text-black/70 font-primary">
                <li className="flex items-start text-sm">
                  <span className="text-black mr-2 ">•</span>
                  Billing/transactional data (for compliance, up to 180 days)
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-black mr-2">•</span>
                  Aggregated, anonymous data (not linked to your identity)
                </li>
              </ul>

              <div className="mt-15 p-4 bg-black/10 rounded-lg border border-black/20">
                <p className="text-sm text-black font-medium font-primary">
                  <strong>Processing Time:</strong> Your request will be
                  processed within 7 business days after verification.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-lg p-6 border border-black/20 shadow-sm">
              <h2 className="text-xl font-semibold text-black1 mb-6 font-primary">
                Account Deletion Request Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-labelledby="delete-form-title">
                <h2 id="delete-form-title" className="sr-only">Account deletion request form</h2>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black1 mb-2 font-primary"
                  >
                    Registered Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-lg  text-black text-sm font-primary transition-all duration-200"
                    placeholder="your-email@example.com"
                    aria-describedby="email-help"
                  />
                  <div id="email-help" className="sr-only">Enter the email address associated with your account</div>
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black1 mb-2 font-primary"
                  >
                    Registered Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-black/20 rounded-lg  text-black text-sm font-primary transition-all duration-200"
                    placeholder="+91 978720***9"
                  />
                </div>

                {/* Reason Field */}
                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-black1 mb-2 font-primary"
                  >
                    Reason for Deletion *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-lg  text-black text-sm font-primary transition-all duration-200 bg-white"
                  >
                    <option value="">Select a reason</option>
                    <option value="no-longer-needed">
                      No longer need the service
                    </option>
                    <option value="privacy-concerns">Privacy concerns</option>
                    <option value="switching-provider">
                      Switching to another provider
                    </option>
                    <option value="technical-issues">Technical issues</option>
                    <option value="business-closure">Business closure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Additional Info */}
                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-black1 mb-2 font-primary"
                  >
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-black/20 rounded-lg  text-black text-sm font-primary transition-all duration-200 resize-none"
                    placeholder="Any additional details you'd like to share..."
                  />
                </div>

                {/* Confirmation Field */}
                <div>
                  <label
                    htmlFor="confirmText"
                    className="block text-sm font-medium text-black1 mb-2 font-primary"
                  >
                    Type &quot;DELETE MY ACCOUNT&quot; to confirm *
                  </label>
                  <input
                    type="text"
                    id="confirmText"
                    name="confirmText"
                    value={formData.confirmText}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-lg  text-black text-sm font-primary transition-all duration-200"
                    placeholder="DELETE MY ACCOUNT"
                  />
                  <p className="text-xs text-black/60 mt-1 font-primary">
                    This confirms that you understand this action cannot be
                    undone.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className={`w-full font-medium font-primary py-3 px-6 rounded-lg transition-all duration-200 ${
                      isSubmitting || !isFormValid
                        ? "bg-gray-300 text-white cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90 text-white"
                    }`}
                  >
                    {isSubmitting
                      ? "Processing Request..."
                      : "Submit Deletion Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center bg-gray-400 rounded-lg p-6 border border-black/10">
            <h3 className="text-lg font-semibold text-black1 mb-2 font-primary">
              Need Help?
            </h3>
            <p className="text-black/70 font-primary">
              You can also email us directly at{" "}
              <a
                href="mailto:support@yakriatech.com"
                className="text-black hover:text-black/80 underline font-medium"
              >
                support@yakriatech.com
              </a>{" "}
              with your deletion request.
            </p>
          </div>
        </div>
      </main>

      {/* Snackbar */}
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isVisible={snackbar.isVisible}
        onClose={hideSnackbar}
      />
    </>
  );
}
