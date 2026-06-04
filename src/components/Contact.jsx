import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.message.trim() || !formData.service) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('loading');

    // Simulate Network Request (1.2 seconds)
    setTimeout(() => {
      setStatus('success');
      
      // WhatsApp Fallback Logic
      const phone = '27653620916';
      const text = encodeURIComponent(`Hi Sledge! My name is ${formData.name}. I'm interested in a ${formData.service} commission. ${formData.message}`);
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');

      // Reset form
      setFormData({ name: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-8 md:px-16 bg-ink-700">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="section-eyebrow">Commission a Piece</p>
        <h2 className="font-display text-6xl md:text-7xl text-cream leading-none">LET'S CREATE<br /><span className="text-red">SOMETHING</span></h2>
        <p className="mt-4 text-sm text-ink-100 font-light">Drop your details and I'll be in touch to discuss your commission.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-400 mb-12 max-w-2xl mx-auto">
        {/* Contact Info Cards (Unchanged) */}
        <div className="bg-ink-600 p-6 text-center">
          <div className="text-red text-2xl mb-3">📱</div>
          <p className="text-xs text-ink-100 tracking-widest uppercase mb-1">WhatsApp</p>
          <a href="https://wa.me/27653620916" className="text-sm text-cream font-medium hover:text-red transition-colors">065 362 0916</a>
        </div>
        <div className="bg-ink-600 p-6 text-center">
          <div className="text-amber text-2xl mb-3">📸</div>
          <p className="text-xs text-ink-100 tracking-widest uppercase mb-1">Instagram</p>
          <a href="https://instagram.com/sledgetheartist" target="_blank" rel="noreferrer" className="text-sm text-cream font-medium hover:text-amber transition-colors">@sledgetheartist</a>
        </div>
        <div className="bg-ink-600 p-6 text-center">
          <div className="text-blue text-2xl mb-3">📍</div>
          <p className="text-xs text-ink-100 tracking-widest uppercase mb-1">Based In</p>
          <p className="text-sm text-cream font-medium">Cape Town, ZA</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-3" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input id="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Your name" className="form-input" required />
          <input id="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="WhatsApp / phone" className="form-input" />
        </div>
        <select id="service" value={formData.service} onChange={handleInputChange} className="form-input w-full" required>
          <option value="" disabled>Select a service…</option>
          <option value="portrait">Portrait Drawing</option>
          <option value="mural">Wall Mural</option>
          <option value="clothing">Clothing Art</option>
          <option value="other">Other / Not Sure</option>
        </select>
        <textarea id="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Tell me about your vision — size, subject, occasion…" className="form-input w-full resize-none" required></textarea>
        
        <button type="submit" disabled={status === 'loading'} className="btn-red w-full py-4 text-sm tracking-widest uppercase font-medium disabled:opacity-50">
          {status === 'loading' ? 'Sending…' : 'Send Request →'}
        </button>

        {status === 'success' && <div className="text-center py-4 text-green text-sm tracking-wide">✓ Request sent! Opening WhatsApp...</div>}
        {status === 'error' && <div className="text-center py-4 text-red text-sm tracking-wide">Please fill in your name and tell me about your project.</div>}
      </form>
    </section>
  );
}