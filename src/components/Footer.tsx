import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl mb-4">UCT Travels</h3>
            <p className="text-warm-white/70 text-sm leading-relaxed mb-6">
              Bridging cultures by providing seamless, high-quality travel experiences for international travelers eager to discover the Pearl of the Indian Ocean.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-white hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-warm-white hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-warm-white hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-warm-white/50">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/tours" className="hover:text-accent transition-colors">Tour Packages</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-warm-white/50">Target Markets</h4>
            <ul className="space-y-3 text-sm text-warm-white/80">
              <li>Australia (All states)</li>
              <li>Solo Travelers</li>
              <li>Couples & Honeymooners</li>
              <li>Luxury & Corporate</li>
              <li>Group & Adventure</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-warm-white/50">Contact</h4>
            <ul className="space-y-4 text-sm text-warm-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-accent mt-0.5" />
                <span><strong>Sri Lanka:</strong> No. 114/A, Attanayake Mawatha, Nugegoda.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-accent mt-0.5" />
                <span><strong>Australia:</strong> No: 1/77, Waverley Road, Chadstone, VIC 3148.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>+61 412 445 588 (AU)<br/>+94 778 648 652 (LK)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>info@uct.com.au</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-warm-white/10 mt-16 pt-12">
          <p className="text-xs text-warm-white/40 leading-relaxed font-light mb-8 max-w-4xl">
            UCT Travels, operated by Universal Ceylon Travels (Pvt) Ltd, provides Sri Lanka tour packages, customised holidays, private tours, flight and hotel support, airport transfers, visa assistance, travel insurance guidance and corporate travel solutions for Australian and international travellers. Established in 2015, UCT Travels helps travellers experience Sri Lanka through beach tours, cultural tours, adventure tours, wildlife safaris, Ayurvedic retreats, hill country escapes, honeymoon tours, family holidays, golf tours, Ramayana tours, religious tours and MICE travel packages.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-warm-white/50 uppercase tracking-widest pt-8 border-t border-warm-white/5">
            <p>&copy; {new Date().getFullYear()} Universal Ceylon Travels (Pvt) Ltd.</p>
            <p className="mt-4 md:mt-0">EST. 2015</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
