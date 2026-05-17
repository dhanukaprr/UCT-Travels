import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import { ArrowRight, PlaneTakeoff, ShieldCheck, Map, Star } from 'lucide-react';

export default function Home() {
  const featuredTours = tours.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-ink/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=2000" 
          alt="Sri Lanka landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-warm-white px-4 max-w-5xl mx-auto mt-20">
          <p className="uppercase tracking-[0.3em] text-sm md:text-md mb-6 font-semibold opacity-90 drop-shadow-md">
            EST. 2015 | Universal Ceylon Travels
          </p>
          <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-[0.9] drop-shadow-xl font-light">
            Discover Sri Lanka <br /> <span className="italic">from</span> Coast to Culture.
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
            From golden beaches and ancient kingdoms to wildlife safaris, hill country escapes, honeymoon journeys, family holidays, religious tours and corporate travel, UCT Travels helps you experience Sri Lanka your way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/tours" 
              className="bg-accent text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-accent/90 transition-colors w-full sm:w-auto"
            >
              Explore Tours
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-ink transition-colors w-full sm:w-auto"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome & About Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif text-4xl md:text-4xl mb-6">Welcome to <br /><span className="italic text-olive">UCT Travels</span></h2>
          <p className="text-ink/70 leading-relaxed mb-6 font-light">
            Universal Ceylon Travels (Pvt) Ltd, operating as UCT Travels, is a Sri Lanka-based travel agency specialising in inbound and outbound tourism. Established in 2015, we create seamless, high-quality travel experiences for international travellers visiting Sri Lanka and for local travellers exploring the world.
          </p>
          <p className="text-ink/70 leading-relaxed mb-8 font-light">
            Our mission is simple: to connect people, cultures and destinations through carefully planned travel experiences. Whether you are travelling from Australia for a relaxing beach holiday, a private family tour, a romantic honeymoon, an adventure-filled escape or a meaningful spiritual journey, our team is ready to design a tour that suits your travel style, schedule and budget.
          </p>
          <img src="https://images.unsplash.com/photo-1549474149-16aebb265692?auto=format&fit=crop&w=600&h=400" alt="Elephants" className="w-full h-64 object-cover rounded-3xl" />
        </div>
        <div>
          <h2 className="font-serif text-4xl md:text-4xl mb-6 border-t border-ink/10 pt-8 md:border-none md:pt-0">About <br /><span className="italic text-olive">Universal Ceylon Travels</span></h2>
          <p className="text-ink/70 leading-relaxed mb-6 font-light">
            UCT Travels brings together local Sri Lankan destination knowledge and international travel support. With offices connected to both Sri Lanka and Australia, we are well placed to support Australian travellers looking for reliable Sri Lanka tour packages, customised itineraries and end-to-end travel arrangements.
          </p>
          <p className="text-ink/70 leading-relaxed mb-6 font-light">
            We specialise in a wide range of travel experiences, including luxury travel, budget tours, private customised tours, wildlife tours and cultural tours. Our goal is to make your journey smooth from the first inquiry to the final airport transfer.
          </p>
          <p className="text-ink/70 leading-relaxed mb-8 font-light">
            From choosing the right itinerary to arranging hotels, flights, transfers, travel insurance and visa assistance, UCT Travels gives you the guidance and support needed to travel with confidence.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm flex flex-col items-center text-center border border-ink/5">
              <Star className="text-accent mb-3" size={24} />
              <h3 className="font-serif text-lg mb-1">Luxury Options</h3>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm flex flex-col items-center text-center border border-ink/5">
              <Map className="text-accent mb-3" size={24} />
              <h3 className="font-serif text-lg mb-1">Custom Itineraries</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-warm-gray px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold text-accent mb-2">Curated Journeys</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Explore Our Curated Tour Packages</h2>
              <p className="text-ink/70 font-light max-w-3xl">Choose from carefully planned Sri Lanka tour packages designed for different interests, travel styles and timeframes. Each tour can be customised based on your arrival date, preferred hotel category, travel pace, group size and budget.</p>
            </div>
            <Link to="/tours" className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold hover:text-accent transition-colors mt-6 md:mt-0 shrink-0">
              Explore Tour Packages <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredTours.map((tour) => (
              <Link key={tour.id} to={`/tours/${tour.id}`} className="group block">
                <div className="bg-warm-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold">
                      {tour.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4 text-xs font-medium text-ink/50 uppercase tracking-widest">
                      <span>{tour.duration}</span>
                    </div>
                    <h3 className="font-serif text-2xl mb-3 group-hover:text-accent transition-colors">{tour.title}</h3>
                    <p className="text-ink/60 text-sm line-clamp-2 mb-6 font-light">{tour.overview}</p>
                    <div className="flex justify-between items-center border-t border-ink/10 pt-4">
                      <span className="font-serif font-bold text-lg">{tour.price}</span>
                      <span className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose UCT */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl mb-12 text-center">Why Choose <span className="italic text-olive">UCT Travels?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-ink/5 rounded-3xl shadow-sm">
            <h3 className="font-serif text-xl mb-3">Sri Lanka and Australia Travel Support</h3>
            <p className="text-ink/70 font-light text-sm leading-relaxed">UCT Travels supports travellers through both Sri Lanka and Australia contact points, making it easier for Australian travellers to plan, inquire and coordinate their Sri Lanka holiday with confidence.</p>
          </div>
          <div className="p-8 bg-white border border-ink/5 rounded-3xl shadow-sm">
            <h3 className="font-serif text-xl mb-3">Customised Sri Lanka Tour Packages</h3>
            <p className="text-ink/70 font-light text-sm leading-relaxed">Every traveller is different. That is why our tour packages can be customised based on your travel dates, number of travellers, hotel preferences, budget, preferred experiences and pace of travel.</p>
          </div>
          <div className="p-8 bg-white border border-ink/5 rounded-3xl shadow-sm">
            <h3 className="font-serif text-xl mb-3">Private and Guided Travel Experiences</h3>
            <p className="text-ink/70 font-light text-sm leading-relaxed">From private chauffeur-guided tours to special interest journeys, we arrange travel experiences that help you explore Sri Lanka comfortably, safely and meaningfully.</p>
          </div>
          <div className="p-8 bg-white border border-ink/5 rounded-3xl shadow-sm">
            <h3 className="font-serif text-xl mb-3">Luxury and Budget Options</h3>
            <p className="text-ink/70 font-light text-sm leading-relaxed">Whether you are looking for a luxury honeymoon, a family-friendly holiday, a budget beach escape or a premium golf tour, we can help shape the package around your expectations.</p>
          </div>
          <div className="p-8 bg-white border border-ink/5 rounded-3xl shadow-sm lg:col-span-2">
            <h3 className="font-serif text-xl mb-3">Complete Travel Planning</h3>
            <p className="text-ink/70 font-light text-sm leading-relaxed">In addition to tour packages, UCT Travels can assist with hotel bookings, airport transfers, ticket bookings, travel insurance, visa assistance and event or wedding travel planning.</p>
          </div>
        </div>
      </section>

      {/* Travel Styles & Services */}
      <section className="py-24 bg-ink text-warm-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-4xl mb-6">Sri Lanka Tours for Every Travel Style</h2>
            <p className="text-warm-white/70 font-light mb-8 leading-relaxed">
              Whether you are visiting Sri Lanka for the first time or returning to discover more of the island, UCT Travels offers tour options for a wide range of travellers.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Solo traveller tours', 'Couple and honeymoon tours', 'Family tour packages', 'Luxury holidays', 'Adventure tours', 'Backpacker-friendly tours', 'Group tours', 'Corporate tours', 'Beach holidays', 'Cultural tours', 'Wildlife tours', 'Ayurvedic wellness tours', 'Hill country tours', 'Golf tours', 'Ramayana religious tours'].map((tag) => (
                <span key={tag} className="border border-warm-white/20 bg-warm-white/5 px-4 py-2 rounded-full text-xs uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-4xl mb-6">Complete Travel Services</h2>
            <p className="text-warm-white/70 font-light mb-8 leading-relaxed">
              Planning a trip involves more than selecting destinations. UCT Travels provides end-to-end travel support to make your journey easier from the beginning.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">✓</span>
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-1">Hotel Bookings & Airport Transfers</h4>
                  <p className="text-warm-white/60 text-sm font-light">Select suitable hotels, resorts and boutique stays. Start and end smoothly with private airport transfers arranged to your times.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">✓</span>
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-1">Ticket Bookings & Travel Insurance</h4>
                  <p className="text-warm-white/60 text-sm font-light">Assistance with ticket bookings and travel insurance options so you can travel with greater peace of mind.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">✓</span>
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-1">Visa Assistance & Event Planning</h4>
                  <p className="text-warm-white/60 text-sm font-light">Guidance with visa-related support. Organise event-based travel experiences like destination weddings in Sri Lanka.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-warm-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center">Frequently Asked <span className="italic text-olive">Questions</span></h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">Do I need a tourist visa to visit Sri Lanka?</h3>
              <p className="text-ink/70 font-light text-sm">Most international travellers, including Australian travellers, generally need the relevant entry approval or visa before travelling to Sri Lanka. UCT Travels can guide you with the visa assistance process as part of your travel planning.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">Can I customise my Sri Lanka tour package?</h3>
              <p className="text-ink/70 font-light text-sm">Yes. UCT Travels offers customised Sri Lanka tour packages. You can adjust your itinerary based on your travel dates, budget, hotel preferences, destinations, tour duration and preferred experiences.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">Do you arrange flights and hotels?</h3>
              <p className="text-ink/70 font-light text-sm">Yes. UCT Travels can assist with hotel bookings, ticket bookings, airport transfers and complete travel planning support.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">Are airport transfers included?</h3>
              <p className="text-ink/70 font-light text-sm">Airport transfers can be arranged as part of your tour package. The details can be confirmed based on your arrival time, departure time and itinerary.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">What types of Sri Lanka tours do you offer?</h3>
              <p className="text-ink/70 font-light text-sm">UCT Travels offers beach tours, cultural tours, adventure tours, wildlife tours, Ayurvedic tours, hill country tours, honeymoon tours, family tours, golf tours, Ramayana tours, religious tours and MICE travel packages.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">Is Sri Lanka suitable for family holidays?</h3>
              <p className="text-ink/70 font-light text-sm">Yes. Sri Lanka is suitable for family holidays because it offers a mix of wildlife, beaches, cultural sites, scenic train rides, village experiences, soft adventure and family-friendly accommodation options. UCT Travels offers dedicated Sri Lanka family tour packages.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">What is the best time to visit Sri Lanka?</h3>
              <p className="text-ink/70 font-light text-sm">The best time depends on the region and the type of tour. For example, southern beach and adventure routes are commonly positioned around the November to April period, while some East Coast beach itineraries are designed around the May to September period.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
              <h3 className="font-serif text-xl mb-2">How do I inquire about a tour package?</h3>
              <p className="text-ink/70 font-light text-sm">You can contact UCT Travels through the website inquiry form, phone, email or WhatsApp. Share your preferred travel dates, number of travellers, package interest and budget, and the team will guide you from there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-6">Ready to Plan Your <br /><span className="italic text-olive">Sri Lanka Holiday?</span></h2>
        <p className="text-lg font-light text-ink/70 mb-10 max-w-2xl mx-auto">
          From private Sri Lanka tour packages and family holidays to romantic honeymoons, wildlife safaris, spiritual journeys, corporate travel and customised itineraries, UCT Travels is ready to help you discover the best of Sri Lanka.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/tours" 
            className="bg-ink text-white px-10 py-5 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-olive transition-colors inline-block w-full sm:w-auto"
          >
            Explore Tour Packages
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent text-ink border border-ink/20 px-10 py-5 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-ink hover:text-white transition-colors inline-block w-full sm:w-auto"
          >
            Contact UCT Travels
          </Link>
        </div>
      </section>
    </div>
  );
}
