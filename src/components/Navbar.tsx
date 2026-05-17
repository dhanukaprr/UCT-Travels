import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/tours' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const bgColor = scrolled || location.pathname !== '/' ? 'bg-warm-white/95 backdrop-blur-md border-b border-ink/10 shadow-sm' : 'bg-transparent';
  const textColor = scrolled || location.pathname !== '/' ? 'text-ink' : 'text-white drop-shadow-md';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className={`font-serif text-2xl font-bold tracking-wider ${textColor}`}>
              UCT <span className="font-sans text-sm font-normal uppercase tracking-widest ml-1">Travels</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`uppercase tracking-widest text-xs font-semibold ${textColor} hover:text-accent transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`uppercase tracking-widest text-xs font-semibold border px-5 py-2 rounded-full transition-all ${
                scrolled || location.pathname !== '/' 
                  ? 'border-ink/30 hover:border-ink hover:bg-ink hover:text-warm-white' 
                  : 'border-white/50 text-white hover:bg-white hover:text-ink'
              }`}
            >
              Inquire Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} hover:text-accent focus:outline-none`}
            >
              {isOpen ? <X size={24} className={scrolled || location.pathname !== '/' ? 'text-ink' : 'text-white'} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-white border-b border-ink/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-ink uppercase tracking-widest text-xs font-semibold hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
