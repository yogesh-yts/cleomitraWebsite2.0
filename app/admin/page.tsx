"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Contact {
  _id: string;
  name: string;
  businessType: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  message: string;
  submittedAt: string;
  emailSent: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ContactsResponse {
  success: boolean;
  data: Contact[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

const AdminContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    pages: 0
  });
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const fetchContacts = async (page: number = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/contact?page=${page}&limit=10`);
      const result: ContactsResponse = await response.json();
      
      if (result.success) {
        setContacts(result.data);
        setPagination(result.pagination);
        setCurrentPage(page);
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatBusinessType = (type: string) => {
    return type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const handlePageChange = (page: number) => {
    fetchContacts(page);
  };

  if (loading && contacts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => fetchContacts()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-responsive py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
          <p className="text-gray-600">
            Total: {pagination.total} submissions
          </p>
        </div>

        {/* Contacts List */}
        {contacts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No contact submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedContact(contact)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                  {/* Contact Info */}
                  <div className="lg:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{formatBusinessType(contact.businessType)}</p>
                    <div className="flex items-center space-x-2">
                      {contact.emailSent ? (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Email Sent
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Email Failed
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="lg:col-span-1">
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Email:</span> {contact.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Phone:</span> {contact.countryCode} {contact.phoneNumber}
                    </p>
                  </div>
                  
                  {/* Message */}
                  <div className="lg:col-span-1">
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {contact.message}
                    </p>
                  </div>
                  
                  {/* Date */}
                  <div className="lg:col-span-1 text-right">
                    <p className="text-xs text-gray-500">
                      {formatDate(contact.submittedAt)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 text-sm border rounded-md ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.pages}
                className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedContact.name}</h2>
                  <p className="text-gray-600">{formatBusinessType(selectedContact.businessType)}</p>
                </div>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-gray-900">{selectedContact.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-gray-900">{selectedContact.countryCode} {selectedContact.phoneNumber}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <p className="text-gray-900 whitespace-pre-wrap bg-gray-50 p-3 rounded-md">
                    {selectedContact.message}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Submitted</label>
                    <p className="text-gray-900">{formatDate(selectedContact.submittedAt)}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Status</label>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedContact.emailSent 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedContact.emailSent ? 'Sent' : 'Failed'}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${selectedContact.email}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Reply via Email
                    </a>
                    <a
                      href={`tel:${selectedContact.countryCode}${selectedContact.phoneNumber}`}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminContactsPage;