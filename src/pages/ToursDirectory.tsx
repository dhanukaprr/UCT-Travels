import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tours, tourCategories } from '../data/tours';
import { ArrowRight, Filter } from 'lucide-react';

export default function ToursDirectory() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTours = activeCategory === "All" 
    ? tours 
    : tours.filter(t => t.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-ink text-warm-white py-24 px-4 text-center">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Journeys</h1>
        <p className="text-warm-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Explore our curated selection of tour packages. Whether you're seeking a lavish luxury escape, a budget-friendly adventure, or a profound cultural immersion, UCT Travels has the perfect itinerary for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-2 text-ink/60 uppercase tracking-widest text-xs font-bold">
            <Filter size={16} /> Filter by Style
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {tourCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full uppercase tracking-widest text-xs font-semibold border transition-all ${
                  activeCategory === category 
                    ? 'border-ink bg-ink text-warm-white' 
                    : 'border-ink/20 text-ink/60 hover:border-ink hover:text-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Link key={tour.id} to={`/tours/${tour.id}`} className="group block">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold text-ink">
                    {tour.category}
                  </div>
                </div>
                <div className="p-8 bg-warm-white h-full group-hover:bg-white transition-colors duration-500">
                  <div className="flex justify-between items-center mb-4 text-xs font-medium text-ink/50 uppercase tracking-widest">
                    <span>{tour.duration}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3 group-hover:text-accent transition-colors">{tour.title}</h3>
                  <p className="text-ink/60 text-sm line-clamp-2 mb-6 font-light">{tour.overview}</p>
                  <div className="flex justify-between items-center border-t border-ink/10 pt-4">
                    <span className="font-serif font-bold text-lg">{tour.price}</span>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-accent group-hover:-translate-x-2 transition-transform">
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-20 text-ink/50 font-serif text-2xl italic">
            No tours found for this category. Please check back later or contact us for a custom itinerary.
          </div>
        )}
      </div>
    </div>
  );
}
