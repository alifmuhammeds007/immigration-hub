import React, { useState } from 'react';
import { Mail, Phone, X, Loader2, Send, CheckCircle2, Zap } from 'lucide-react';

export const QuickEnquiry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [lastSubmitted, setLastSubmitted] = useState(null);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    country: 'New Zealand'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const submittedDetails = { ...form };

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

      let resData;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        resData = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || `Server responded with status ${response.status}`);
      }

      if (response.ok && resData.success) {
        setSuccess(true);
        setLastSubmitted(submittedDetails);

        // Auto-redirect to WhatsApp
        const waMsg = `Hello Immigration Hub,\n\nI have submitted a Quick Enquiry:\n- Name: ${submittedDetails.name}\n- Phone: ${submittedDetails.phone}\n- Email: ${submittedDetails.email}\n- City: ${submittedDetails.city}\n- Country Interested: ${submittedDetails.country}\n\nPlease advise me.`;
        const waUrl = `https://api.whatsapp.com/send?phone=919633062888&text=${encodeURIComponent(waMsg)}`;
        window.open(waUrl, '_blank');

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
    } catch (err) {
      setError(err.message || 'Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const triggerWhatsAppManual = () => {
    if (!lastSubmitted) return;
    const waMsg = `Hello Immigration Hub,\n\nI have submitted a Quick Enquiry:\n- Name: ${lastSubmitted.name}\n- Phone: ${lastSubmitted.phone}\n- Email: ${lastSubmitted.email}\n- City: ${lastSubmitted.city}\n- Country Interested: ${lastSubmitted.country}\n\nPlease advise me.`;
    const waUrl = `https://api.whatsapp.com/send?phone=919633062888&text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, '_blank');
  };

  const triggerEmailManual = () => {
    if (!lastSubmitted) return;
    const emailSubject = `Quick Enquiry - ${lastSubmitted.name}`;
    const emailBody = `Hello Immigration Hub,\n\nI have submitted a Quick Enquiry:\n- Name: ${lastSubmitted.name}\n- Phone: ${lastSubmitted.phone}\n- Email: ${lastSubmitted.email}\n- City: ${lastSubmitted.city}\n- Country Interested: ${lastSubmitted.country}\n\nPlease advise me.`;
    const mailUrl = `mailto:office@immigrationhub.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailUrl, '_blank');
  };

  return (
    <>
      {/* Floating Toggle Button (visible when drawer is closed) */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); setSuccess(false); setError(null); }}
          className="fixed right-0 top-[40%] z-40 bg-[#E51937] hover:bg-[#b81026] text-white py-3.5 px-3 rounded-l-2xl shadow-2xl flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:pr-4 group animate-float border-y border-l border-white/20"
        >
          <Zap className="w-5 h-5 animate-pulse text-yellow-300" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
            Quick Enquiry
          </span>
        </button>
      )}

      {/* Expanded Sliding Drawer Overlay */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[380px] bg-[#EAF5FC] dark:bg-dark-card shadow-2xl z-50 transition-all duration-300 border-l border-slate-300 dark:border-slate-800 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-300 dark:border-slate-800/80 pb-3">
              <div className="flex items-center gap-1.5 text-slate-950 dark:text-accent font-heading font-black text-base uppercase tracking-tight">
                <Zap className="w-5 h-5 text-[#E51937]" />
                <span>Quick Enquiry</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors border border-slate-300 dark:border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-900 dark:text-slate-200 font-bold leading-normal">
              Have a quick question? Leave your details below, and an Immigration Hub advisor will call you back within 2 business hours.
            </p>
          </div>

          {/* Form Content */}
          <div className="flex-grow my-6 overflow-y-auto pr-1">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-4 bg-white/70 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-black text-base text-slate-950 dark:text-white">Enquiry Saved Successfully!</h4>
                <p className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-semibold">
                  We've successfully stored your request. The WhatsApp draft has been generated automatically to transmit details to our advisors.
                </p>

                <div className="space-y-2.5 w-full pt-2">
                  <button
                    onClick={triggerWhatsAppManual}
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    <span>💬 Send on WhatsApp</span>
                  </button>
                  <button
                    onClick={triggerEmailManual}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    <span>✉ Send via Email</span>
                  </button>
                </div>

                <button
                  onClick={() => setSuccess(false)}
                  className="pt-2 text-xs font-black text-primary hover:text-accent dark:text-accent dark:hover:text-white transition-colors underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5 text-left">
                {error && (
                  <div className="p-3 text-[11px] rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-950 dark:text-rose-400 font-bold">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-950 dark:text-slate-200 uppercase tracking-wide">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-950 dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-950 dark:text-slate-200 uppercase tracking-wide">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-950 dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-950 dark:text-slate-200 uppercase tracking-wide">Email ID *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your Gmail ID"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-950 dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                  />
                </div>

                {/* City of Living */}
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-950 dark:text-slate-200 uppercase tracking-wide">City of Living *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your place"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-950 dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                  />
                </div>

                {/* Country Interested */}
                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-slate-950 dark:text-slate-200 uppercase tracking-wide">Country Interested *</label>
                  <select
                    id="enquiry-country"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-950 dark:text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
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
                  className="w-full py-3.5 rounded-xl bg-[#E51937] hover:bg-[#b81026] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-brand-red/10 hover:shadow-brand-red/20 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-4 hover:scale-[1.02] active:scale-[0.98]"
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
          <div className="border-t border-slate-350 dark:border-slate-800/80 pt-4 text-left space-y-2">
            <a
              href="tel:+919633062888"
              className="flex items-center gap-2 text-xs text-slate-950 dark:text-slate-200 font-bold hover:text-[#E51937] dark:hover:text-[#E51937] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E51937] shrink-0" />
              <span>+91 96330 62888</span>
            </a>
            <a
              href="mailto:office@immigrationhub.in"
              className="flex items-center gap-2 text-xs text-slate-950 dark:text-slate-200 font-bold hover:text-[#E51937] dark:hover:text-[#E51937] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E51937] shrink-0" />
              <span>office@immigrationhub.in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
