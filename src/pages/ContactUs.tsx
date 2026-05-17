import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function ContactUs() {
  const location = useLocation();
  const prefilledTourInfo = location.state as { tourId?: string; tourTitle?: string } | null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledTourInfo?.tourTitle ? `Inquiry regarding: ${prefilledTourInfo.tourTitle}` : '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your inquiry. Our team will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      {/* Header */}
      <div className="bg-ink text-warm-white py-24 px-4 text-center">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Get in Touch</h1>
        <p className="text-warm-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Planning your dream trip to Sri Lanka? Whether you're in Australia or anywhere else in the world, our dedicated team is here to help craft your perfect itinerary.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="flex-1 space-y-12">
          <div>
            <h2 className="font-serif text-3xl mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Australia Office */}
              <div className="bg-white p-8 rounded-[2rem] border border-ink/5 shadow-sm">
                <h3 className="font-serif text-xl mb-4 font-bold">Australia Office</h3>
                <ul className="space-y-4 text-sm font-light text-ink/80">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>No: 1/77, Waverley Road, <br/>Chadstone, VIC 3148<br/>Australia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-accent shrink-0" />
                    <span>+61 412 445 588</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-accent shrink-0" />
                    <a href="mailto:info@uct.com.au" className="hover:text-accent">info@uct.com.au</a>
                  </li>
                </ul>
              </div>

              {/* Sri Lanka Office */}
              <div className="bg-white p-8 rounded-[2rem] border border-ink/5 shadow-sm">
                <h3 className="font-serif text-xl mb-4 font-bold">Sri Lanka Office</h3>
                <ul className="space-y-4 text-sm font-light text-ink/80">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-olive shrink-0 mt-0.5" />
                    <span>No. 114/A, Attanayake Mawatha, <br/>Nugegoda<br/>Sri Lanka</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-olive shrink-0" />
                    <span>+94 778 648 652</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-olive shrink-0" />
                    <a href="mailto:info@uct.com.au" className="hover:text-accent">info@uct.com.au</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div className="bg-warm-gray p-8 rounded-[2rem]">
            <h3 className="font-serif text-lg mb-4 flex items-center gap-2"><Clock className="text-olive" size={20} /> Additional Services</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm font-light text-ink/80">
              <li>• Hotel bookings</li>
              <li>• Airport transfers</li>
              <li>• Ticket bookings</li>
              <li>• Travel insurance</li>
              <li>• Visa assistance</li>
              <li>• Event/wedding planning</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1">
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-ink/5">
            <h2 className="font-serif text-3xl mb-2">Send an Inquiry</h2>
            <p className="text-ink/60 text-sm font-light mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-xs font-bold text-ink/60">Your Name *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-warm-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-olive transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-xs font-bold text-ink/60">Your Email *</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-warm-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-olive transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="uppercase tracking-widest text-xs font-bold text-ink/60">Subject</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-warm-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-olive transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="uppercase tracking-widest text-xs font-bold text-ink/60">Message *</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-warm-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-olive transition-colors resize-none"
                  placeholder="Tell us about your travel plans, dates, number of people..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-ink text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-olive transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
            <h3 className="font-serif text-xl mb-2">Do I need a tourist visa for Sri Lanka?</h3>
            <p className="text-ink/70 font-light text-sm">Yes, most nationalities including Australians need an Electronic Travel Authorization (ETA) before arriving. We offer visa assistance to make this process seamless.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
            <h3 className="font-serif text-xl mb-2">What is the best time to visit?</h3>
            <p className="text-ink/70 font-light text-sm">Sri Lanka is a year-round destination. The west and south coasts are best from December to March, while the east coast shines from May to September.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
            <h3 className="font-serif text-xl mb-2">Can I customize the tour?</h3>
            <p className="text-ink/70 font-light text-sm">Absolutely! All our packages are fully fully customizable. Tell us your preferences, and we will tailor the itinerary just for you.</p>
          </div>
        </div>
      </div>

      {/* Embedded Map placeholder */}
      <div className="w-full h-[400px] bg-warm-gray mt-10 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.60467554904!2d79.88219488732943!3d6.872476566606019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a4eb923fc81%3A0xe54e3579b19fe0dd!2sNugegoda%2C%20Sri%20Lanka!5e0!3m2!1sen!2sae!4v1714555543884!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
}
