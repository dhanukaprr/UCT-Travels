export interface Tour {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; description: string }[];
}

export const tourCategories = [
  "All",
  "Luxury",
  "Budget",
  "Wildlife",
  "Cultural",
  "Adventure",
  "Honeymoon",
  "Ayurvedic",
];

export const tours: Tour[] = [
  {
    id: "luxury-escape-10-days",
    title: "10-Day Luxury Sri Lanka Escape",
    category: "Luxury",
    duration: "10 Days",
    price: "From $2,499 AUD",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=1200",
    overview: "Experience the ultimate luxury in Sri Lanka. Tailor-made for Australian travelers seeking a premium, seamless journey through the Pearl of the Indian Ocean. Enjoy boutique stays, private chauffeurs, and exclusive access to cultural sites.",
    inclusions: [
      "Luxury 5-star & boutique accommodation",
      "Private air-conditioned vehicle with English-speaking chauffeur guide",
      "Daily breakfast & selected premium dinners",
      "Entrance fees to Sigiriya, Temple of the Tooth, and Yala National Park",
      "Scenic train journey (1st class) to Ella",
    ],
    exclusions: [
      "International flights (e.g., direct flights from Melbourne to Colombo)",
      "Travel insurance",
      "Personal expenses & tips",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Colombo", description: "Welcome to Sri Lanka. Meet your private chauffeur at Bandaranaike International Airport (BIA) and transfer to your luxury hotel in Colombo." },
      { day: 2, title: "Colombo to Cultural Triangle", description: "Journey into the heart of the island. Arrive in Sigiriya and relax at your boutique resort." },
      { day: 3, title: "Sigiriya Rock Fortress & Minneriya", description: "Climb the majestic Sigiriya Rock at dawn. In the afternoon, enjoy a private jeep safari in Minneriya National Park." },
      { day: 4, title: "Kandy – The Cultural Capital", description: "Travel to Kandy via the Dambulla Cave Temple. Witness a cultural show and visit the sacred Temple of the Tooth Relic." },
      { day: 5, title: "Nuwara Eliya – Little England", description: "Ascend into the mist-wrapped tea country. Visit a working tea plantation and sample world-renowned Ceylon tea." },
      { day: 6, title: "Scenic Train to Ella", description: "Embark on one of the world's most beautiful train journeys to the charming hill-country village of Ella." },
      { day: 7, title: "Yala National Park Safari", description: "Descend to the southern plains. Experience a thrilling afternoon safari in Yala National Park, home to leopards and elephants." },
      { day: 8, title: "Galle Fort & Southern Coast", description: "Travel along the palm-fringed southern coast. Explore the UNESCO-listed Galle Fort." },
      { day: 9, title: "Beach Leisure", description: "A full day at leisure at your beachfront luxury resort to relax and unwind." },
      { day: 10, title: "Departure", description: "Private transfer to the airport for your flight home." },
    ]
  },
  {
    id: "wildlife-adventure-7-days",
    title: "Leopards & Elephants Wildlife Safari",
    category: "Wildlife",
    duration: "7 Days",
    price: "From $1,299 AUD",
    image: "https://images.unsplash.com/photo-1549474149-16aebb265692?auto=format&fit=crop&q=80&w=1200",
    overview: "For nature enthusiasts and wildlife photographers. Get up close with Sri Lanka's incredible biodiversity, from massive elephant herds to elusive leopards across multiple national parks.",
    inclusions: [
      "Comfortable eco-lodges & safari camps",
      "Private driver and 4x4 safari jeeps",
      "All national park entrance fees",
      "Breakfast and dinner",
    ],
    exclusions: [
      "International flights",
      "Camera & video permits at parks",
      "Lunches & beverages",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Transfer to Negombo", description: "Rest and recover from your flight in the coastal town of Negombo." },
      { day: 2, title: "Wilpattu National Park", description: "Head north to Wilpattu, known for its dense forests and leopard sightings. Afternoon safari." },
      { day: 3, title: "Habarana & Minneriya Safari", description: "Travel to Habarana. Experience the great elephant gathering at Minneriya." },
      { day: 4, title: "Udawalawe Elephant Transit Home", description: "Journey south to Udawalawe. Visit the elephant transit home for orphaned calves." },
      { day: 5, title: "Yala Wilderness", description: "Morning safari in Udawalawe, afternoon transfer to Yala." },
      { day: 6, title: "Full Day Yala Safari", description: "Dawn to dusk exploring Yala National Park for maximum wildlife viewing." },
      { day: 7, title: "Transfer to Airport", description: "Scenic drive back up the coast to the airport." },
    ]
  },
  {
    id: "classic-culture-budget",
    title: "Classic Sri Lanka on a Budget",
    category: "Budget",
    duration: "8 Days",
    price: "From $850 AUD",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200",
    overview: "Discover the essential highlights of Sri Lanka without breaking the bank. Ideal for backpackers and budget-conscious travelers wanting authentic experiences and local charm.",
    inclusions: [
      "Comfortable 3-star guesthouses & hotels",
      "Transport by air-conditioned car/van",
      "Daily breakfast",
      "Driver guide fees",
    ],
    exclusions: [
      "Entrance fees to monuments",
      "Lunches & Dinners",
      "International flights",
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Colombo and transfer to your budget-friendly hotel." },
      { day: 2, title: "Dambulla", description: "Take the scenic route to Dambulla. Explore the ancient cave temples." },
      { day: 3, title: "Polonnaruwa Cycling", description: "Rent a bike and ride through the ancient ruins of Polonnaruwa." },
      { day: 4, title: "Kandy Explore", description: "Head to Kandy, walk around the lake, and explore the local markets." },
      { day: 5, title: "Train to Nuwara Eliya", description: "Take the train into the misty tea country." },
      { day: 6, title: "Ella Hike", description: "Hike Little Adam's Peak and visit the Nine Arch Bridge." },
      { day: 7, title: "South Coast Beach", description: "Bus down to Mirissa or Unawatuna for a beach evening." },
      { day: 8, title: "Departure", description: "Return to Colombo for your departure flight." },
    ]
  },
  {
    id: "ramayana-spiritual-tour",
    title: "Ramayana Spiritual Journey",
    category: "Cultural",
    duration: "6 Days",
    price: "From $990 AUD",
    image: "https://images.unsplash.com/photo-1625736300976-b3e34b9d5cbf?auto=format&fit=crop&q=80&w=1200",
    overview: "Trace the epic of the Ramayana. Visit sacred sites, ancient temples, and mystical locations deeply connected to the legendary tale. A perfect blend of devotion and tourism.",
    inclusions: [
      "Accommodation in culturally significant locations",
      "Knowledgeable guide specializing in religious history",
      "Breakfast and Dinners",
      "Temple entrance fees",
    ],
    exclusions: [
      "Pooja items",
      "International flights",
      "Personal tips",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Negombo", description: "Welcome to Sri Lanka." },
      { day: 2, title: "Munneswaram & Chilaw", description: "Visit the Munneswaram temple where Lord Rama prayed to Shiva." },
      { day: 3, title: "Trincomalee & Koneswaram", description: "Drive to the east coast to visit the grand Koneswaram Temple." },
      { day: 4, title: "Seetha Eliya", description: "Travel to the hill country. Visit the Seetha Amman Temple where Sita was held captive." },
      { day: 5, title: "Divurumpola & Ella", description: "Visit the site where Sita underwent the fire test (Agni Pariksha)." },
      { day: 6, title: "Colombo Departure", description: "Travel back to Colombo. Visit the Kelaniya Vibhishana temple before departure." },
    ]
  },
  {
    id: "romantic-honeymoon",
    title: "Tropical Honeymoon Bliss",
    category: "Honeymoon",
    duration: "12 Days",
    price: "From $2,800 AUD",
    image: "https://images.unsplash.com/photo-1544325785-cfdbcd2ec230?auto=format&fit=crop&q=80&w=1200",
    overview: "Celebrate your love with a perfect mix of adventure, culture, and ultimate relaxation. Indulge in private romantic dinners, spa treatments, and secluded beach resorts.",
    inclusions: [
      "Luxury resorts & private villas",
      "Romantic candlelit dinner on the beach",
      "Couples Ayurvedic spa treatment",
      "Private luxury vehicle",
    ],
    exclusions: [
      "Flights",
      "Alcoholic beverages",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Negombo", description: "Relax at a coastal resort after your flight." },
      { day: 2, title: "Cultural Triangle", description: "Transfer to a boutique eco-lodge surrounded by nature." },
      { day: 3, title: "Sigiriya & Romantic Sunset", description: "Climb the fortress and enjoy a private champagne sunset." },
      { day: 4, title: "Kandy", description: "Visit the cultural capital." },
      { day: 5, title: "Tea Country Retreat", description: "Cozy up in a colonial-style bungalow in the hills." },
      { day: 6, title: "Train to Ella & Glamping", description: "Scenic train ride followed by luxury glamping." },
      { day: 7, title: "Ella Nature", description: "Enjoy waterfalls and stunning vistas together." },
      { day: 8, title: "Yala Safari", description: "A touch of wild romance with a private jeep safari." },
      { day: 9, title: "South Coast Beach", description: "Arrive at your premium beach resort." },
      { day: 10, title: "Beach & Spa", description: "Couples spa day and private beach dinner." },
      { day: 11, title: "Galle Fort", description: "Wander hand-in-hand through the cobbled streets of the fort." },
      { day: 12, title: "Departure", description: "Farewell Sri Lanka." },
    ]
  }
];
