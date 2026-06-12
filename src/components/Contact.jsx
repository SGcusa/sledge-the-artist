import { useState } from 'react';

export default function Contact() {
  // Pre-filled phone with +27
  const [formData, setFormData] = useState({ name: '', email: '', phone: '+27 ', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  
  // Track specific input errors
  const [errors, setErrors] = useState({ email: '', phone: '' });

  // Handle standard inputs
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear error for the specific field as the user types
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  // Special handler for the phone to strictly maintain the +27 prefix
  const handlePhoneChange = (e) => {
    let val = e.target.value;
    // Prevent the user from deleting the "+27" completely
    if (!val.startsWith('+27')) {
      val = '+27 ';
    }
    setFormData({ ...formData, phone: val });
    if (errors.phone) setErrors({ ...errors, phone: '' });
  };

  // Validation Logic triggered when clicking away (onBlur)
  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email (e.g., name@example.com).';
    return '';
  };

  const validatePhone = (phone) => {
    const stripped = phone.replace(/\s+/g, ''); // Remove spaces to check length
    // Allow it to be empty (just the prefix) if you want it optional, 
    // BUT if they add numbers, it must be exactly 9 digits after +27.
    if (stripped === '+27') return 'Phone number is required.'; 
    
    // RSA numbers must be +27 followed by exactly 9 digits
    const rsaRegex = /^\+27\d{9}$/;
    if (!rsaRegex.test(stripped)) {
      return 'Must be a valid RSA number (e.g., +27 65 362 0916).';
    }
    return '';
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (id === 'email') {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
    if (id === 'phone') {
      setErrors(prev => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Force validation on all fields before submitting
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    
    if (emailError || phoneError) {
      setErrors({ email: emailError, phone: phoneError });
      setStatus('error');
      setErrorMessage('Please fix the highlighted errors before submitting.');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    if (!formData.name.trim() || !formData.message.trim() || !formData.service) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/gcusaaa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `🎨 New Commission Request from ${formData.name}`,
          _replyto: formData.email, 
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Service: formData.service,
          Message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        
        // Reset form fields after showing success for 5 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '+27 ', service: '', message: '' });
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage('Server error. Please try again later.');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error("FormSubmit Submission Error:", error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-20 px-4 md:px-16 bg-ink-700">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="section-eyebrow">Commission a Piece</p>
        <h2 className="font-display text-6xl md:text-7xl text-cream leading-none">LET'S CREATE<br /><span className="text-red">SOMETHING</span></h2>
        <p className="mt-4 text-sm text-ink-100 font-light">Drop your details and <br className="md:hidden"></br>I'll be in touch to discuss your commission.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-400 mb-12 max-w-2xl mx-auto">
        {/* Contact Cards omitted for brevity - Keep your existing WhatsApp/LinkedIn/Location cards here */}
      </div>

      {/* Relative container so the success popup can overlay the form */}
      <div className="max-w-2xl mx-auto relative">
        
        {/* Success Popup Overlay */}
        {status === 'success' && (
          <div className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300">
            <div className="bg-ink-600 p-8 rounded-lg border border-green/50 shadow-2xl text-center max-w-sm w-full mx-4">
              <div className="text-green text-4xl mb-3">✓</div>
              <h3 className="text-xl text-cream font-medium mb-2">Request Sent!</h3>
              <p className="text-sm text-ink-100">
                Your message has been successfully delivered. I'll review your project and email you back soon.
              </p>
            </div>
          </div>
        )}

        {/* The Form - Blurs out when success is triggered */}
        <form 
          onSubmit={handleSubmit} 
          className={`space-y-4 transition-all duration-300 ${status === 'success' ? 'blur-md opacity-40 pointer-events-none select-none' : ''}`} 
          noValidate
        >
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input id="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Your name" className="form-input w-full" required />
            </div>
            
            {/* Email Field with validation */}
            <div>
              <input 
                id="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                onBlur={handleBlur} 
                type="email" 
                placeholder="Email address" 
                className={`form-input w-full transition-colors ${errors.email ? '!border-amber !text-[#F4F4F4] focus:!border-amber focus:!ring-amber' : ''}`} 
                required 
              />
              {errors.email && <p className="text-amber text-xs mt-1.5 ml-1">{errors.email}</p>}
            </div>
          </div>
          
          {/* Row 2: Phone/WhatsApp with validation */}
          <div>
            <input 
              id="phone" 
              value={formData.phone} 
              onChange={handlePhoneChange} 
              onBlur={handleBlur}
              type="tel" 
              placeholder="+27 Phone / WhatsApp" 
              className={`form-input w-full transition-colors ${errors.phone ? '!border-amber !text-[#F4F4F4] focus:!border-amber focus:!ring-amber' : ''}`} 
            />
            {errors.phone && <p className="text-amber text-xs mt-1.5 ml-1">{errors.phone}</p>}
          </div>

          <select id="service" value={formData.service} onChange={handleInputChange} className="form-input w-full" required>
            <option value="" disabled>Select a service…</option>
            <option value="portrait">Portrait Drawing</option>
            <option value="mural">Wall Mural</option>
            <option value="clothing">Clothing Art</option>
            <option value="other">Other / Not Sure</option>
          </select>
          
          <textarea id="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Tell me about your vision — size, subject, occasion…" className="form-input w-full resize-none" required></textarea>
          
          <button type="submit" disabled={status === 'loading'} className="btn-red w-full py-4 text-sm tracking-widest uppercase font-medium disabled:opacity-50 transition-opacity">
            {status === 'loading' ? 'Sending Request…' : 'Send Request →'}
          </button>

          {/* General Error Message */}
          {status === 'error' && (
            <div className="text-center py-2 text-red text-sm tracking-wide mt-2">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}