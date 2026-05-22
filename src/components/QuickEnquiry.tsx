import React, { useState } from 'react';
import { Mail, Phone, X, Loader2, Send, CheckCircle2, Zap } from 'lucide-react';

export const QuickEnquiry: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    country: 'New Zealand'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        name: form.name,
        phone_number: form.phone,
        email: form.email,
        city: form.city,
        country: form.country
      };

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSuccess(true);
        setForm({
          name: '',
          phone: '',
          email: '',
          city: '',
          country: 'New Zealand'
        });
      } else {
        throw new Error(resData.detail || 'Submission failed.');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button (visible when drawer is closed) */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); setSuccess(false); setError(null); }}
          className="fixed right-0 top-[40%] z-40 bg-primary hover:bg-primary-dark text-white py-3.5 px-3 rounded-l-2xl shadow-2xl flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:pr-4 group animate-float border-y border-l border-white/20"
        >
          <Zap className="w-5 h-5 animate-pulse text-accent" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
            Quick Enquiry
          </span>
        </button>
      )}

      {/* Expanded Sliding Drawer Overlay */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[380px] bg-white dark:bg-dark-card shadow-2xl z-50 transition-all duration-300 border-l border-slate-100 dark:border-slate-800 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
              <div className="flex items-center gap-1.5 text-primary dark:text-accent font-heading font-extrabold text-base">
                <Zap className="w-5 h-5" />
                <span>Quick Enquiry</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-light leading-normal">
              Have a quick question? Leave your details below, and an Immigration Hub advisor will call you back within 2 business hours.
            </p>
          </div>

          {/* Form Content */}
          <div className="flex-grow my-6 overflow-y-auto">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Enquiry Received!</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal font-light">
                  Thank you! An expert study/immigration consultant will reach out shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-2 text-xs font-bold text-primary dark:text-accent hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {error && (
                  <div className="p-3 text-[11px] rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-400">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sneha Joseph"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 96330 62888"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Email ID *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sneha@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* City of Living */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">City of Living *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Trivandrum"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Country Interested */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Country Interested *</label>
                  <select
                    id="enquiry-country"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="Dubai">🇦🇪 Dubai (UAE)</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="Malta">🇲🇹 Malta</option>
                    <option value="Spain">🇪🇸 Spain</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Footer Contact Details */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 text-left space-y-2">
            <a
              href="tel:+919633062888"
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>+91 96330 62888</span>
            </a>
            <a
              href="mailto:office@immigrationhub.in"
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>office@immigrationhub.in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
