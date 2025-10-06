import { useState } from 'react';
import { CheckCircle2, Loader2, Mail, Phone } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    state: '',
    city: '',
    fullAddress: '',
    pinCode: '',
    collegeName: '',
    courseName: '',
    educationLevel: '',
    domainName: '',
    preferredContact: '',
    cvUrl: '',
    duration: '',
    tpoName: '',
    tpoEmail: '',
    tpoMobile: '',
    previousInternship: '',
    internshipDescription: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Please provide your mobile number';
    else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) newErrors.mobileNumber = 'Please provide a valid 10-digit mobile number';
    if (!formData.email.trim()) newErrors.email = 'Please provide your email address';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please provide a valid email address';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Please provide your date of birth';
    if (!formData.gender) newErrors.gender = 'Please select your gender';
    if (!formData.state.trim()) newErrors.state = 'Please provide your state';
    if (!formData.city.trim()) newErrors.city = 'Please provide your city';
    if (!formData.fullAddress.trim()) newErrors.fullAddress = 'Please provide your full address';
    if (!formData.pinCode.trim()) newErrors.pinCode = 'Please provide your pin code';
    if (!formData.collegeName.trim()) newErrors.collegeName = 'Please provide your college/university name';
    if (!formData.courseName.trim()) newErrors.courseName = 'Please provide your course name';
    if (!formData.educationLevel.trim()) newErrors.educationLevel = 'Please provide your education level';
    if (!formData.domainName.trim()) newErrors.domainName = 'Please provide your preferred domain';
    if (!formData.preferredContact) newErrors.preferredContact = 'Please select your preferred contact method';
    if (!formData.cvUrl.trim()) newErrors.cvUrl = 'Please provide your CV/Resume URL';
    if (!formData.duration.trim()) newErrors.duration = 'Please provide your preferred duration';
    if (!formData.tpoName.trim()) newErrors.tpoName = 'Please provide TPO name';
    if (!formData.tpoEmail.trim()) newErrors.tpoEmail = 'Please provide TPO email';
    if (!formData.tpoMobile.trim()) newErrors.tpoMobile = 'Please provide TPO mobile number';
    if (!formData.previousInternship) newErrors.previousInternship = 'Please select if you have previous internship experience';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        state: '',
        city: '',
        fullAddress: '',
        pinCode: '',
        collegeName: '',
        courseName: '',
        educationLevel: '',
        domainName: '',
        preferredContact: '',
        cvUrl: '',
        duration: '',
        tpoName: '',
        tpoEmail: '',
        tpoMobile: '',
        previousInternship: '',
        internshipDescription: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Application Submitted!
          </h2>
          <p className="text-gray-600">Thank you for your interest. We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-4">
            <span className="text-2xl font-bold text-white">G</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Application Form
          </h1>
          <p className="text-gray-600 mb-4">Join our team - Fill out all required fields to submit your application</p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <a href="mailto:hr@graphura.in" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Mail className="w-4 h-4" />
              hr@graphura.in
            </a>
            <a href="tel:+917378021327" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Phone className="w-4 h-4" />
              +91 7378021327
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border-2 border-emerald-100 p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-emerald-500">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.fullName ? 'border-red-500' : formData.fullName ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                {formData.fullName && !errors.fullName && <p className="mt-1 text-sm text-emerald-600">Looks good!</p>}
              </div>

              <div>
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.mobileNumber ? 'border-red-500' : formData.mobileNumber ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="1234567890"
                />
                {errors.mobileNumber && <p className="mt-1 text-sm text-red-500">{errors.mobileNumber}</p>}
                {formData.mobileNumber && !errors.mobileNumber && <p className="mt-1 text-sm text-emerald-600">Looks good!</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.email ? 'border-red-500' : formData.email ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                {formData.email && !errors.email && <p className="mt-1 text-sm text-emerald-600">Looks good!</p>}
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.dateOfBirth ? 'border-red-500' : formData.dateOfBirth ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                />
                {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
                {formData.dateOfBirth && !errors.dateOfBirth && <p className="mt-1 text-sm text-emerald-600">Confirmed!</p>}
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.gender ? 'border-red-500' : formData.gender ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
                {formData.gender && !errors.gender && <p className="mt-1 text-sm text-emerald-600">Confirmed!</p>}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-emerald-500">
              Address Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.state ? 'border-red-500' : formData.state ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="State"
                />
                {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.city ? 'border-red-500' : formData.city ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="City"
                />
                {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="fullAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address *
                </label>
                <input
                  type="text"
                  id="fullAddress"
                  name="fullAddress"
                  value={formData.fullAddress}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.fullAddress ? 'border-red-500' : formData.fullAddress ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="Full address"
                />
                {errors.fullAddress && <p className="mt-1 text-sm text-red-500">{errors.fullAddress}</p>}
              </div>

              <div>
                <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Pin Code *
                </label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.pinCode ? 'border-red-500' : formData.pinCode ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="123456"
                />
                {errors.pinCode && <p className="mt-1 text-sm text-red-500">{errors.pinCode}</p>}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-emerald-500">
              Educational Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-2">
                  College/University Name *
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.collegeName ? 'border-red-500' : formData.collegeName ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="University or College name"
                />
                {errors.collegeName && <p className="mt-1 text-sm text-red-500">{errors.collegeName}</p>}
              </div>

              <div>
                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name *
                </label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.courseName ? 'border-red-500' : formData.courseName ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="e.g., Computer Science"
                />
                {errors.courseName && <p className="mt-1 text-sm text-red-500">{errors.courseName}</p>}
              </div>

              <div>
                <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-2">
                  Education Level *
                </label>
                <input
                  type="text"
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.educationLevel ? 'border-red-500' : formData.educationLevel ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="e.g., B.Tech, B.Sc, MBA"
                />
                {errors.educationLevel && <p className="mt-1 text-sm text-red-500">{errors.educationLevel}</p>}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-emerald-500">
              Internship Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="domainName" className="block text-sm font-medium text-gray-700 mb-2">
                  Domain Name *
                </label>
                <input
                  type="text"
                  id="domainName"
                  name="domainName"
                  value={formData.domainName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.domainName ? 'border-red-500' : formData.domainName ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="e.g., Software Development, Marketing, Design"
                />
                {errors.domainName && <p className="mt-1 text-sm text-red-500">{errors.domainName}</p>}
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method *
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.preferredContact ? 'border-red-500' : formData.preferredContact ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                >
                  <option value="">Select method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                {errors.preferredContact && <p className="mt-1 text-sm text-red-500">{errors.preferredContact}</p>}
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                  Duration *
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.duration ? 'border-red-500' : formData.duration ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="e.g., 3 months, 6 months"
                />
                {errors.duration && <p className="mt-1 text-sm text-red-500">{errors.duration}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="cvUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  CV/Resume URL *
                </label>
                <input
                  type="url"
                  id="cvUrl"
                  name="cvUrl"
                  value={formData.cvUrl}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.cvUrl ? 'border-red-500' : formData.cvUrl ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="https://drive.google.com/..."
                />
                {errors.cvUrl && <p className="mt-1 text-sm text-red-500">{errors.cvUrl}</p>}
              </div>

              <div>
                <label htmlFor="tpoName" className="block text-sm font-medium text-gray-700 mb-2">
                  TPO Name *
                </label>
                <input
                  type="text"
                  id="tpoName"
                  name="tpoName"
                  value={formData.tpoName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.tpoName ? 'border-red-500' : formData.tpoName ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="Training & Placement Officer name"
                />
                {errors.tpoName && <p className="mt-1 text-sm text-red-500">{errors.tpoName}</p>}
              </div>

              <div>
                <label htmlFor="tpoEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  TPO Email *
                </label>
                <input
                  type="email"
                  id="tpoEmail"
                  name="tpoEmail"
                  value={formData.tpoEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.tpoEmail ? 'border-red-500' : formData.tpoEmail ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="tpo@college.edu"
                />
                {errors.tpoEmail && <p className="mt-1 text-sm text-red-500">{errors.tpoEmail}</p>}
              </div>

              <div>
                <label htmlFor="tpoMobile" className="block text-sm font-medium text-gray-700 mb-2">
                  TPO Mobile Number *
                </label>
                <input
                  type="tel"
                  id="tpoMobile"
                  name="tpoMobile"
                  value={formData.tpoMobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.tpoMobile ? 'border-red-500' : formData.tpoMobile ? 'border-emerald-500' : 'border-gray-200'
                  } focus:border-emerald-500 focus:outline-none transition-colors`}
                  placeholder="1234567890"
                />
                {errors.tpoMobile && <p className="mt-1 text-sm text-red-500">{errors.tpoMobile}</p>}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-emerald-500">
              Previous Internship Experience
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Have you completed any previous internship? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="previousInternship"
                      value="yes"
                      checked={formData.previousInternship === 'yes'}
                      onChange={handleChange}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="previousInternship"
                      value="no"
                      checked={formData.previousInternship === 'no'}
                      onChange={handleChange}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
                {errors.previousInternship && <p className="mt-1 text-sm text-red-500">{errors.previousInternship}</p>}
              </div>

              {formData.previousInternship === 'yes' && (
                <div>
                  <label htmlFor="internshipDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your internship responsibilities
                  </label>
                  <textarea
                    id="internshipDescription"
                    name="internshipDescription"
                    value={formData.internshipDescription}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Describe your previous internship experience, responsibilities, and what you learned..."
                  />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting Application...
              </span>
            ) : (
              'Submit Application'
            )}
          </button>
        </form>

        <footer className="text-center text-sm text-gray-500 mt-8">
          <p>Copyright - 2025 | Graphura India Private Limited | All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
