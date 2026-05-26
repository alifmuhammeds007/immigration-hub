import React, { useState, useRef, useEffect } from 'react';
import { CalendarRange, Send, CheckCircle2, AlertTriangle, ShieldCheck, Loader2 } from 'lucide-react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = ReactPhoneInput.default || ReactPhoneInput;


export const FormsHub = () => {
  const [activeTab, setActiveTab] = useState('assessment');

  useEffect(() => {
    const handleSetTab = (e) => {
      if (e.detail === 'assessment' || e.detail === 'counselling') {
        setActiveTab(e.detail);
        setSuccess(null);
        setError(null);
      }
    };
    window.addEventListener('setFormsHubTab', handleSetTab);
    return () => window.removeEventListener('setFormsHubTab', handleSetTab);
  }, []);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Free Assessment State
  const [assessmentForm, setAssessmentForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    purpose: 'Study Abroad',
    destination: '',
    qualification: '',
    experience: '0',
    message: ''
  });


  // Counselling State
  const [counsellingForm, setCounsellingForm] = useState({
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
    city: '',
    qualification: '',
    experience: '0',
    degreeType: 'Diploma',
    courses: '',
    priorities: 'Good University',
    budget: '',
    queries: ''
  });

  const resetForms = () => {
    setAssessmentForm({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      purpose: 'Study Abroad',
      destination: '',
      qualification: '',
      experience: '0',
      message: ''
    });


    setCounsellingForm({
      firstName: '',
      secondName: '',
      phone: '',
      email: '',
      city: '',
      qualification: '',
      experience: '0',
      degreeType: 'Diploma',
      courses: '',
      priorities: 'Good University',
      budget: '',
      queries: ''
    });
  };

  const [lastSubmittedAssessment, setLastSubmittedAssessment] = useState(null);

  const getWhatsAppUrl = (details) => {
    if (!details) return '#';
    let waMsg = `Hello Immigration Hub,\n\nI have submitted a Detailed Visa Assessment Request:\n- Name: ${details.firstName} ${details.lastName}\n- Email: ${details.email}\n- Contact: ${details.contactNumber}\n- Purpose: ${details.purpose}\n- Preferred Country: ${details.destination}\n- Qualification: ${details.qualification}\n- Work Experience: ${details.experience} Years\n- Message: ${details.message}`;
    

    
    waMsg += `\n\nPlease evaluate my profile.`;
    return `https://wa.me/919633062888?text=${encodeURIComponent(waMsg)}`;
  };

  const getEmailUrl = (details) => {
    if (!details) return '#';
    const emailSubject = `Detailed Visa Assessment - ${details.firstName} ${details.lastName}`;
    let emailBody = `Hello Immigration Hub,\n\nI have submitted a Detailed Visa Assessment Request:\n- Name: ${details.firstName} ${details.lastName}\n- Email: ${details.email}\n- Contact: ${details.contactNumber}\n- Purpose: ${details.purpose}\n- Preferred Country: ${details.destination}\n- Qualification: ${details.qualification}\n- Work Experience: ${details.experience} Years\n- Message: ${details.message}`;
    

    
    emailBody += `\n\nPlease evaluate my profile.`;
    return `mailto:office@immigrationhub.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleAssessmentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const currentDetails = { 
      ...assessmentForm
    };

    try {
      const formData = new FormData();
      formData.append('first_name', assessmentForm.firstName);
      formData.append('last_name', assessmentForm.lastName);
      formData.append('email', assessmentForm.email);
      formData.append('contact_number', assessmentForm.contactNumber);
      formData.append('purpose', assessmentForm.purpose);
      formData.append('destination', assessmentForm.destination);
      formData.append('highest_qualification', assessmentForm.qualification);
      formData.append('work_experience', assessmentForm.experience);
      formData.append('message', assessmentForm.message);
      


      // Simulate API call since no backend is connected yet
      await new Promise(resolve => setTimeout(resolve, 800));

      setLastSubmittedAssessment(currentDetails);
      setSuccess('Your Free Detailed Visa Evaluation has been successfully drafted! We are redirecting you to WhatsApp to securely send your details to our advisors. If it does not open, please click the buttons below.');
      
      // Auto-redirect to WhatsApp
      let waMsg = `Hello Immigration Hub,\n\nI have submitted a Detailed Visa Assessment Request:\n- Name: ${currentDetails.firstName} ${currentDetails.lastName}\n- Email: ${currentDetails.email}\n- Contact: ${currentDetails.contactNumber}\n- Purpose: ${currentDetails.purpose}\n- Preferred Country: ${currentDetails.destination}\n- Qualification: ${currentDetails.qualification}\n- Work Experience: ${currentDetails.experience} Years\n- Message: ${currentDetails.message}`;
      

      
      waMsg += `\n\nPlease evaluate my profile.`;
      const waUrl = `https://api.whatsapp.com/send?phone=919633062888&text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');

      resetForms();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleCounsellingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      // Map frontend fields to backend schema
      const payload = {
        first_name: counsellingForm.firstName,
        last_name: counsellingForm.secondName,
        phone_number: counsellingForm.phone,
        email: counsellingForm.email,
        city: counsellingForm.city,
        highest_qualification: counsellingForm.qualification,
        work_experience: counsellingForm.experience,
        degree_type: counsellingForm.degreeType,
        interested_courses: counsellingForm.courses,
        priorities: counsellingForm.priorities,
        budget: counsellingForm.budget,
        queries: counsellingForm.queries
      };

      // Simulate API call since no backend is connected yet
      await new Promise(resolve => setTimeout(resolve, 800));

      setSuccess('1:1 Free Counselling booked successfully! Our Senior Counsellor will schedule a session with you and reach out via phone/email.');
      resetForms();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <section id="forms-hub" className="py-12 md:py-16 bg-transparent transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-accent border border-primary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarRange className="w-4 h-4" /> Gateway to your future
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            Consultation & <span className="text-gradient-brand">Assessment</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-brand mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-sm sm:text-base font-light">
            Take your first solid step. Fill out our detailed profile questionnaires, and receive a professional evaluation from our team completely free.
          </p>
        </div>

        {/* Form Selector Tab Buttons */}
        <div className="flex rounded-2xl bg-sky-50/70 dark:bg-dark-card border border-slate-100 dark:border-slate-800 p-2 max-w-lg mx-auto mb-8 shadow-sm">
          <button
            onClick={() => { setActiveTab('assessment'); setSuccess(null); setError(null); }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              activeTab === 'assessment'
                ? 'bg-gradient-brand text-white shadow-md shadow-primary/20'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            📋 Free Visa Assessment
          </button>
          <button
            onClick={() => { setActiveTab('counselling'); setSuccess(null); setError(null); }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              activeTab === 'counselling'
                ? 'bg-gradient-brand text-white shadow-md shadow-primary/20'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            🎓 Book 1:1 Counselling
          </button>
        </div>

        {/* Global Notifications */}
        {success && (
          <div className="mb-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-sm flex flex-col gap-4 text-left shadow-lg">
            <div className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5 animate-pulse" />
              <div className="space-y-1">
                <p className="font-extrabold text-slate-950 dark:text-white text-base">Submission Successful!</p>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{success}</p>
              </div>
            </div>
            {lastSubmittedAssessment && (
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={getWhatsAppUrl(lastSubmittedAssessment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#25D366]/20 flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
                >
                  <span>💬 Send details on WhatsApp</span>
                </a>
                <a
                  href={getEmailUrl(lastSubmittedAssessment)}
                  className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
                >
                  <span>✉ Send details via Email</span>
                </a>
              </div>
            )}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-950 dark:text-rose-400 text-sm flex gap-3 text-left font-semibold">
            <AlertTriangle className="w-5 h-5 shrink-0 text-rose-500" />
            <span className="font-light">{error}</span>
          </div>
        )}

        {/* Tab 1: Free Visa Assessment Form */}
        {activeTab === 'assessment' && (
          <form onSubmit={handleAssessmentSubmit} className="glassmorphism rounded-3xl border border-white/20 dark:border-white/5 bg-white/60 dark:bg-dark-card/65 p-6 sm:p-10 shadow-xl electric-glow text-left space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/80 pb-3 flex items-center justify-between">
              <span>Detailed Visa Evaluation Form</span>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Free</span>
            </h3>

            {/* Row 1: First/Last Names */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  value={assessmentForm.firstName}
                  onChange={(e) => setAssessmentForm({ ...assessmentForm, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  value={assessmentForm.lastName}
                  onChange={(e) => setAssessmentForm({ ...assessmentForm, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your Gmail ID"
                  value={assessmentForm.email}
                  onChange={(e) => setAssessmentForm({ ...assessmentForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Contact Number *</label>
                <PhoneInput
                  country={'in'}
                  countryCodeEditable={false}
                  value={assessmentForm.contactNumber}
                  onChange={phone => setAssessmentForm({ ...assessmentForm, contactNumber: phone })}
                  inputProps={{
                    name: 'phone',
                    required: true,
                  }}
                  containerClass="w-full"
                  inputClass="!w-full !px-4 !py-3 !pl-[48px] !rounded-xl !text-sm focus:!outline-none focus:!ring-2 focus:!ring-primary/50 transition-all"
                  buttonClass="!bg-transparent !border-0 !rounded-l-xl !pl-2"
                  dropdownClass="!bg-white dark:!bg-slate-900 !text-slate-800 dark:!text-white !border-slate-200 dark:!border-slate-800"
                />
              </div>
            </div>

            {/* Row 3: Inquiry Purpose & Destination */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Purpose of Inquiry *</label>
                <select
                  id="purpose-inquiry"
                  value={assessmentForm.purpose}
                  onChange={(e) => setAssessmentForm({ ...assessmentForm, purpose: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="Study Abroad">🎓 Study Abroad Opportunity</option>
                  <option value="Immigration Services to New Zealand">🇳🇿 New Zealand Visa/Immigration Pathway</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Preferred Destination Country *</label>
                <input
                  type="text"
                  required
                  id="preferred-country"
                  placeholder="Enter your preferred country"
                  value={assessmentForm.destination}
                  onChange={(e) => setAssessmentForm({ ...assessmentForm, destination: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Row 4: Qualification & Experience */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Highest Qualification *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your highest qualification"
                  value={assessmentForm.qualification}
                  onChange={(e) => setAssessmentForm({ ...assessmentForm, qualification: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Years of Work Experience *</label>
                <select
                  value={assessmentForm.experience}
                  onChange={(e) => setAssessmentForm({ ...assessmentForm, experience: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="0">Fresh Graduate / No Experience</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>
            </div>



            {/* Assisted Queries */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">How Can We Assist You?</label>
              <textarea
                rows={3}
                placeholder="Mention specific course preferences, immigration history, family companion needs, or custom constraints..."
                value={assessmentForm.message}
                onChange={(e) => setAssessmentForm({ ...assessmentForm, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>

            {/* Compliance Banner */}
            <div className="p-3.5 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight">
                <strong>LIA Privacy Pledge</strong>: All uploaded resumes and profiles are securely analyzed strictly under the privacy policy rules of the Immigration Advisers Authority (IAA).
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#E51937] hover:bg-[#b81026] text-white font-extrabold text-sm tracking-widest uppercase transition-all shadow-lg shadow-brand-red/20 hover:shadow-brand-red/30 hover:scale-101 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing Submission...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Assessment Request</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Tab 2: Book 1:1 Counselling Form */}
        {activeTab === 'counselling' && (
          <form onSubmit={handleCounsellingSubmit} className="glassmorphism rounded-3xl border border-white/20 dark:border-white/5 bg-white/60 dark:bg-dark-card/65 p-6 sm:p-10 shadow-xl electric-glow text-left space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/80 pb-3 flex items-center justify-between">
              <span>Book Your Free 1:1 Counselling Session</span>
              <span className="text-[10px] font-bold text-primary dark:text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">Senior Counsellor</span>
            </h3>

            {/* Row 1: Names */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul"
                  value={counsellingForm.firstName}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Second Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kurup"
                  value={counsellingForm.secondName}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, secondName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Phone & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Phone Number *</label>
                <PhoneInput
                  country={'in'}
                  countryCodeEditable={false}
                  value={counsellingForm.phone}
                  onChange={phone => setCounsellingForm({ ...counsellingForm, phone: phone })}
                  inputProps={{
                    name: 'counselling_phone',
                    required: true,
                  }}
                  containerClass="w-full"
                  inputClass="!w-full !px-4 !py-3 !pl-[48px] !rounded-xl !border !border-slate-200 dark:!border-slate-800 !bg-white/60 dark:!bg-slate-900/60 !text-slate-800 dark:!text-white !text-sm focus:!outline-none focus:!ring-2 focus:!ring-primary/50 transition-all"
                  buttonClass="!bg-transparent !border-0 !rounded-l-xl !pl-2"
                  dropdownClass="!bg-white dark:!bg-slate-900 !text-slate-800 dark:!text-white !border-slate-200 dark:!border-slate-800"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email ID *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@domain.com"
                  value={counsellingForm.email}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Row 3: City & Qualification */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">City of Living *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kochi, Kottayam, Trivandrum"
                  value={counsellingForm.city}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Highest Educational Qualification *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. B.Tech CS, MBA, Plus Two"
                  value={counsellingForm.qualification}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, qualification: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Row 4: Experience & Degree Level looking for */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Number of Years of Work Experience</label>
                <input
                  type="number"
                  min="0"
                  max="30"
                  required
                  placeholder="e.g. 2"
                  value={counsellingForm.experience}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, experience: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Looking for study level *</label>
                <select
                  value={counsellingForm.degreeType}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, degreeType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="Diploma">Diploma / Advanced Diploma</option>
                  <option value="PG Diploma">PG Diploma / Post Graduate Certificate</option>
                  <option value="Bachelors">Bachelors Degree</option>
                  <option value="Masters">Masters Degree / PhD</option>
                </select>
              </div>
            </div>

            {/* Row 5: Course interests & Priorities */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Interested Courses *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Information Technology, Hospitality, Nursing"
                  value={counsellingForm.courses}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, courses: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Top Priorities *</label>
                <select
                  value={counsellingForm.priorities}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, priorities: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="Good University">🏫 Good Tier-1 University ranking</option>
                  <option value="Specific Course">📖 Highly specific academic course matching</option>
                  <option value="Specific Country">🗺 Specific Country settlement options</option>
                  <option value="Within Budget">💰 Keeping costs low & within budget</option>
                </select>
              </div>
            </div>

            {/* Row 6: Budget & Queries */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Budget for Studying Abroad (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Under 15 Lakhs INR, 15-25 Lakhs, No bar"
                  value={counsellingForm.budget}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Additional Queries</label>
                <input
                  type="text"
                  placeholder="Spouse work visa options, post-study residency timeline..."
                  value={counsellingForm.queries}
                  onChange={(e) => setCounsellingForm({ ...counsellingForm, queries: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#E51937] hover:bg-[#b81026] text-white font-extrabold text-sm tracking-widest uppercase transition-all shadow-lg shadow-brand-red/20 hover:shadow-brand-red/30 hover:scale-101 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Booking Session...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Book Free 1:1 Session Now</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
