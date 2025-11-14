'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Store, ArrowRight } from 'lucide-react';

export default function MerchantSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: '',
    store_url: '',
    website: '',
    region: '',
    contact_email: '',
    contact_phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://web-production-fedb.up.railway.app/merchant/onboarding/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        alert(`✅ Registration successful! Your Merchant ID: ${data.merchant_id}\n\nPlease check your email for next steps.`);
        router.push('/');
      } else {
        alert(`❌ Registration failed: ${data.detail || data.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      alert(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Join Pivota as a Merchant
          </h1>
          <p className="text-lg text-gray-600">
            Connect your store and start selling with AI agents
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Business Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.business_name}
                  onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Acme Corporation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Store URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={formData.store_url}
                  onChange={(e) => setFormData({ ...formData, store_url: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://mystore.myshopify.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Your Shopify, Wix, or WooCommerce store URL
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://acme.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Region</option>
                  <option value="US">United States</option>
                  <option value="EU">Europe</option>
                  <option value="APAC">Asia Pacific</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-6 border-t">
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.contact_email}
                  onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="contact@acme.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.contact_phone}
                  onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Registration</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center">
              By registering, you agree to Pivota's{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </form>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}







