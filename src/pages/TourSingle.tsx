import { useParams, Link } from 'react-router-dom';
import { tours } from '../data/tours';
import { Clock, Check, X, MapPin } from 'lucide-react';
import { useEffect } from 'react';

export default function TourSingle() {
  const { id } = useParams();
  const tour = tours.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="font-serif text-4xl mb-4">Tour Not Found</h1>
        <Link to="/tours" className="text-accent underline uppercase tracking-widest text-xs font-bold">Return to tours</Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/61412445588?text=${encodeURIComponent(`Hi, I'm interested in the "${tour.title}" package.`)}`;

  return (
    <div className="pt-20 bg-warm-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <div className="absolute inset-0 bg-ink/30 z-10" />
        <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <span className="uppercase tracking-[0.2em] text-xs font-bold mb-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            {tour.category} Tour
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-4 max-w-4xl drop-shadow-xl">{tour.title}</h1>
          <div className="flex items-center gap-6 font-sans text-sm uppercase tracking-widest mt-6 drop-shadow-md font-semibold">
            <span className="flex items-center gap-2"><Clock size={16} /> {tour.duration}</span>
            <span className="bg-accent px-4 py-1.5 rounded-full">{tour.price}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="font-serif text-3xl mb-6">Overview</h2>
            <p className="text-ink/80 text-lg font-light leading-relaxed">
              {tour.overview}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl mb-8">Itinerary</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-6 md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-ink/10 before:to-transparent">
              {tour.itinerary.map((day, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-ink/20 bg-warm-white text-ink z-10 font-serif font-bold shrink-0 shadow-sm">
                    {day.day}
                  </div>
                  <div className="pt-2 md:pt-3">
                    <h3 className="font-serif text-xl md:text-2xl mb-2 flex items-center gap-2">
                      {day.title}
                    </h3>
                    <p className="text-ink/70 font-light leading-tight">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-[2rem] shadow-sm">
            <div>
              <h3 className="font-serif text-2xl mb-6">Inclusions</h3>
              <ul className="space-y-4">
                {tour.inclusions.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-ink/80 font-light text-sm">
                    <Check size={18} className="text-olive shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-6">Exclusions</h3>
              <ul className="space-y-4">
                {tour.exclusions.map((exc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-ink/80 font-light text-sm">
                    <X size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white p-8 rounded-[2rem] shadow-sm border border-ink/5">
            <h3 className="font-serif text-2xl mb-2">Book this Tour</h3>
            <p className="text-ink/60 text-sm font-light mb-6">Rates vary based on season and group size. Contact us for a precise quote.</p>
            
            <div className="font-serif text-3xl font-bold mb-8 pb-8 border-b border-ink/10 text-accent">
              {tour.price}
            </div>

            <div className="space-y-4">
              <Link 
                to="/contact" 
                state={{ tourId: tour.id, tourTitle: tour.title }}
                className="w-full block text-center bg-ink text-white px-6 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-olive transition-colors"
              >
                Inquire via Email
              </Link>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-center bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle size={18} /> Quick WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-ink/10 flex items-start gap-4">
               <MapPin className="text-ink/40 shrink-0 mt-1" size={20} />
               <p className="text-xs text-ink/60 font-light leading-relaxed">
                 Sri Lanka & Australia based agency. All packages are customizable to suit your exact needs.
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Ensure MessageCircle is imported
import { MessageCircle } from 'lucide-react';
