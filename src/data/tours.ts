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
  "Beach",
  "Cultural",
  "Adventure",
  "Wildlife",
  "Ayurvedic",
  "Hill Country",
  "Honeymoon",
  "Family",
  "Golf",
  "Ramayana",
  "Religious",
  "MICE"
];

const stdInclusions = [
  "Accommodation in chosen category (Boutique, Luxury, etc.)",
  "Private air-conditioned vehicle with English-speaking chauffeur guide",
  "Daily breakfast",
  "Guidance and 24/7 support from UCT Travels Australian and Sri Lankan offices",
];

const stdExclusions = [
  "International flights (e.g., direct flights from Australia)",
  "Sri Lanka ETA / Tourist Visa",
  "Travel insurance",
  "Personal expenses & tips",
  "Lunch and dinner (unless explicitly stated)"
];

const priceNotice = "Tailored quote based on travel dates & group size";

export const tours: Tour[] = [
  {
    id: "great-island-safari-17-days",
    title: "The Great Island Safari",
    category: "Wildlife",
    duration: "17 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1585675100414-22cb9922e96d?auto=format&fit=crop&q=80&w=1200",
    overview: "Immersive, expert-led, and rich in biodiversity. For the Australian traveler seeking space, restorative nature, and deep immersion, this 17-day expedition is the ultimate escape. Features the endemic 'Big Three': the Sri Lankan Leopard, Asian Elephant, and Sloth Bear.",
    inclusions: [
      ...stdInclusions,
      "All national park safari jeep and entrance fees (Wilpattu, Minneriya, Horton Plains, Yala)",
      "Guided rainforest trek in Sinharaja",
      "Scenic train journey tickets"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Coastal Recovery (Negombo)", description: "Receive a warm Ayubowan welcome at the airport and transfer to Negombo. Shake off the flight with a stroll." },
      { day: 2, title: "Days 02 & 03: Wilpattu | The Pristine Wilderness", description: "Journey to Wilpattu National Park. Spend a full day on safari tracking leopards and sloth bears away from the crowds." },
      { day: 4, title: "Days 04 & 05: The Cultural Triangle & Elephant Gatherings", description: "Explore Anuradhapura, the island's first capital. Witness the 'Great Gathering' of elephants at Minneriya." },
      { day: 6, title: "Days 06 & 07: Nuwara Eliya | Peaks & Plantations", description: "Ascend to 'Little England'. Tour a tea factory and hike Horton Plains National Park to World's End." },
      { day: 8, title: "Ella | The Iconic Rail Journey", description: "Board the world’s most beautiful train ride, winding through emerald tea estates to the mountain village of Ella." },
      { day: 9, title: "Days 09 & 10: Arugam Bay & Kumana Birdlife", description: "Head to the east coast's surf mecca, Arugam Bay. Explore Kumana National Park, a world-class birdwatching hotspot." },
      { day: 11, title: "Days 11 & 12: Udawalawe & Yala | Safari Heartlands", description: "Visit Udawalawe's Elephant Transit Home. Continue to Yala for a late-afternoon leopard safari." },
      { day: 13, title: "Days 13 & 14: Sinharaja | The Tropical Ark", description: "Enter the Sinharaja Rainforest, a UNESCO World Heritage Site. Trek the lush canopy with an expert naturalist." },
      { day: 15, title: "Days 15 & 16: Bentota | River Safaris & Gold Sands", description: "Enjoy a peaceful boat safari through the Madu River mangroves. Relax on palm-fringed beaches." },
      { day: 17, title: "Final Departure", description: "After a meaningful 17-day reset, transfer to the airport for your flight home." }
    ]
  },
  {
    id: "ancient-echoes-9-days",
    title: "Ancient Echoes & Emerald Highlands",
    category: "Cultural",
    duration: "9 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1587595431973-3f10d68f00eb?auto=format&fit=crop&q=80&w=1200",
    overview: "A curated journey through Sri Lanka’s 'Cultural Triangle' and into the misty tea country. Designed to balance grand UNESCO monuments with quiet, authentic moments in nature.",
    inclusions: [
      ...stdInclusions,
      "Entrance to Dambulla, Sigiriya, Polonnaruwa, Anuradhapura, and Temple of the Tooth",
      "Traditional village trek and lunch in Hiriwadunna",
      "Iconic blue train tickets"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival in Negombo", description: "Ease into your holiday with a stay in the vibrant fishing town of Negombo." },
      { day: 2, title: "Golden Caves & The Lion Rock", description: "Explore the Dambulla Cave Temple and conquer the Sigiriya Rock Fortress at sunset." },
      { day: 3, title: "Village Life & Medieval Ruins", description: "Trek through Hiriwadunna for a traditional meal. Cycle the medieval capital of Polonnaruwa." },
      { day: 4, title: "First Kingdom & Forest Monasteries", description: "Discover Anuradhapura's stupas. Find peace in the Ritigala forest monastery." },
      { day: 5, title: "The Spiritual Capital (Kandy)", description: "Journey to Kandy. Witness the evening Pooja at the Temple of the Sacred Tooth Relic." },
      { day: 6, title: "The Hidden Temple Trail", description: "Explore the 'Three Temple Loop' – 14th-century architectural gems away from the crowds." },
      { day: 7, title: "The Famous Blue Train", description: "Wind past waterfalls holding emerald estates to 'Little England' (Nuwara Eliya)." },
      { day: 8, title: "Colombo: High Tea & Heritage", description: "Explore Colombo’s chic boutiques, Dutch-era hospitals turned cafes, and street markets." },
      { day: 9, title: "Farewell", description: "Enjoy a final Ceylon tea breakfast before your private transfer to the airport." }
    ]
  },
  {
    id: "eastern-blues-12-days",
    title: "Eastern Blues Tour",
    category: "Beach",
    duration: "12 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
    overview: "Off-the-beaten-track pristine beaches and cultural immersion. Perfect for the Australian winter (May-September), journey from the historic harbors of Trincomalee to the surf breaks of Arugam Bay.",
    inclusions: [
      ...stdInclusions,
      "Pigeon Island snorkeling excursion",
      "Guided tour of Galle Dutch Fort",
      "Yala National Park afternoon safari"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Coastal Chill in Negombo", description: "Touch down and head straight to Negombo. Sunset boat ride through Muthurajawela." },
      { day: 2, title: "Into the Cultural Triangle", description: "Journey inland to conquer the Sigiriya Rock Fortress for a 360-degree jungle sunset." },
      { day: 3, title: "Days 03 & 04: Marine Wonders of Trincomalee", description: "Head to the East Coast. Snorkel Pigeon Island's reefs and visit Koneswaram Temple." },
      { day: 5, title: "Days 05 & 06: Serenity at Pasikudah", description: "Trade the surf for the world’s longest shallow coastline. 'Pool-like' ocean conditions." },
      { day: 7, title: "Days 07 & 08: Surfer’s Soul in Arugam Bay", description: "Laid-back surf culture. Enjoy world-class breaks, beach cafes, and barefoot nightlife." },
      { day: 9, title: "Wild Encounters in Yala", description: "Afternoon 4x4 safari in Yala National Park tracking leopards and elephants." },
      { day: 10, title: "Colonial Charm in Galle", description: "Walk the ramparts of the 16th-century Galle Fort, a maze of boutique shops and history." },
      { day: 11, title: "Colombo City Lights", description: "Visit a turtle hatchery en route. Explore Colombo's rooftop bars and shopping districts." },
      { day: 12, title: "Farewell & Departure", description: "A final tropical breakfast before your private transfer to the airport." }
    ]
  },
  {
    id: "beyond-boundaries-15-days",
    title: "Beyond Boundaries: Adventure Odyssey",
    category: "Adventure",
    duration: "15 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1546313175-926af1172eb6?auto=format&fit=crop&q=80&w=1200",
    overview: "High-octane, untamed, and physically demanding. Designed for outdoor enthusiasts, pushing your limits across Sri Lanka’s most remote and rugged landscapes.",
    inclusions: [
      ...stdInclusions,
      "Hanthana Mountain Range trekking",
      "White-water rafting in Kitulgala",
      "Flying Ravana Zip Line and Rope Jumping",
      "Scuba diving and kayaking sessions"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Tropical Basecamp", description: "Transfer to Negombo. Prep your gear and enjoy a final sunset on the beach." },
      { day: 2, title: "Days 02 & 03: The Hanthana Summit", description: "Grueling trek across the five peaks of Hanthana. Visit Kandy's Temple of the Tooth." },
      { day: 4, title: "Days 04 & 05: White Water & Waterfall Drops", description: "Class II-III rafting in Kitulgala. Rope jumping down the vertical cliff of Laxapana Falls." },
      { day: 6, title: "Into the Wild (Horton Plains)", description: "9km wilderness trek to World's End in Nuwara Eliya." },
      { day: 7, title: "Days 07 & 08: Ella Highs & Zip Lines", description: "Train to Ella. Hike Mini Adam's Peak at dawn, fly 500m across the valley on a zip line." },
      { day: 9, title: "Leopard Territory (Yala)", description: "Descend for an evening safari in Yala targeting the apex predator." },
      { day: 10, title: "Days 10 & 11: Southern Swell (Mirissa)", description: "Catch southern swells or track Blue Whales and Dolphins across the Indian Ocean." },
      { day: 12, title: "Days 12 & 13: Reefs, Ruins & Kayaks", description: "Scuba diving coral reefs, kayaking mangroves, dropping by the historic Galle Fort." },
      { day: 14, title: "Colombo: The Urban Hub", description: "City tour of the commercial capital for last-minute gear and souvenir street markets." },
      { day: 15, title: "Final Departure", description: "Say goodbye after an adrenaline-fueled 15 days." }
    ]
  },
  {
    id: "wellness-retreat-10-days",
    title: "The Wellness Retreat",
    category: "Ayurvedic",
    duration: "10 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1515238152737-222536e2430c?auto=format&fit=crop&q=80&w=1200",
    overview: "Restorative, personalized, and spiritually grounding. 5,000-year-old system of natural medicine built on biological balance through diet, lifestyle, and herbal therapy.",
    inclusions: [
      ...stdInclusions,
      "Daily Ayurvedic treatments and herbal therapy",
      "Consultations with a licensed Ayurveda practitioner",
      "Specialized nutritional healing meals",
      "Yoga and mindfulness sessions"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Coastal Welcome", description: "Transfer to a serene west coast wellness resort in Beruwala." },
      { day: 2, title: "Days 02-09: The Path to Balance", description: "Expert consultation, daily oil massages (Abhyanga), specialized diet, and local excursions." },
      { day: 10, title: "Final Departure", description: "Fly home after a soothing 10-day physical and mental reset." }
    ]
  },
  {
    id: "highland-wonders-7-days",
    title: "Highland Wonders & Tea Trails",
    category: "Hill Country",
    duration: "7 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1586611360050-8de6f1e31af8?auto=format&fit=crop&q=80&w=1200",
    overview: "Sophisticated, scenic, and restorative. Escape into the emerald heart of Sri Lanka where the air is crisp, draped in world-famous tea estates.",
    inclusions: [
      ...stdInclusions,
      "Scenic train from Peradeniya to Nanu Oya",
      "Heritage Tea Factory & Plantation tour",
      "Highland farm and botanical garden visits"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Coastal Recovery", description: "Transfer to Negombo for an evening of leisure by the pool." },
      { day: 2, title: "The Royal Hill Capital", description: "Ascend to Kandy. Experience a vibrant Kandyan Cultural Dance Performance." },
      { day: 3, title: "Sacred Temples & Botanical Wonders", description: "Visit the Temple of the Tooth and Peradeniya Royal Botanical Gardens." },
      { day: 4, title: "The Iconic Blue Train", description: "Train ride to Nuwara Eliya. Tour a heritage tea factory from pluck to pot." },
      { day: 5, title: "Misty Peaks & Highland Farms", description: "Explore 'Little England', Hakgala Gardens, and Ambewela Farm rolling pastures." },
      { day: 6, title: "Urban Pulse & Boutique Shopping", description: "Descend to Colombo. Explore chic cafes and high-end boutiques." },
      { day: 7, title: "Final Departure", description: "Private transfer to the airport." }
    ]
  },
  {
    id: "enchanting-sri-lanka-17-days",
    title: "Enchanting Sri Lanka Honeymoon",
    category: "Honeymoon",
    duration: "17 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1522748906645-95d8eb84dbf7?auto=format&fit=crop&q=80&w=1200",
    overview: "Celebrate your new chapter designed for intimacy and wonder. Drift over emerald jungles in a hot air balloon, track leopards, and share candlelit dinners in the rainforest.",
    inclusions: [
      ...stdInclusions,
      "Sunrise hot air balloon ride",
      "Couples Ayurvedic spa treatment",
      "Private romantic candlelit dinner",
      "Sunset river boat safari"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Coastal Recovery", description: "Arrive in Negombo to shake off the flight and ease into romantic rhythms." },
      { day: 2, title: "Days 02 & 03: Wildlife & Spas", description: "Minneriya elephant safari, climb Sigiriya, and enjoy a couples spa treatment." },
      { day: 4, title: "Days 04 & 05: Sunrise Heights", description: "Sunrise hot air balloon ride, Anuradhapura ruins, and Hiriwadunna village trek." },
      { day: 6, title: "Days 06 & 07: Kandy’s Charms", description: "Temple of the Tooth, Dambulla Caves, Ambuluwawa Tower, and Botanical Gardens." },
      { day: 8, title: "Days 08 & 09: Little England Waterfalls", description: "Ramboda Falls, berry picking at a strawberry farm, and Gregory Lake." },
      { day: 10, title: "Most Romantic Train Ride", description: "Wind through emerald tea estates to Ella on the legendary blue train." },
      { day: 11, title: "Yala | Safari & Starlight", description: "4x4 sunset leopard safari followed by an intimate candlelit dinner under the stars." },
      { day: 12, title: "Days 12 & 13: Mirissa Barefoot Bliss", description: "Two days of pure relaxation on the golden sands of Mirissa." },
      { day: 14, title: "Days 14 & 15: Galle & River Safaris", description: "Cobblestone streets of Galle Fort. Sunset boat safari along Bentota's mangroves." },
      { day: 16, title: "Colombo | Street Flavours", description: "City tour, street food exploration, and sunset drinks on a rooftop." },
      { day: 17, title: "Final Departure", description: "Fly home with cherished memories." }
    ]
  },
  {
    id: "ultimate-family-escapade-19-days",
    title: "The Ultimate Family Escapade",
    category: "Family",
    duration: "19 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200",
    overview: "19 Days of Culture, Coast, and Conservation. Designed for families wanting authentic safaris, breathtaking trails, kite surfing, and beachside fun.",
    inclusions: [
      ...stdInclusions,
      "Family surf/kite surfing introductory lessons",
      "Safari drives in Wilpattu, Minneriya, and Yala",
      "Sea Turtle Hatchery & conservation visit",
      "Zip-lining experience in Ella"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Coastal Calm", description: "Negombo arrival, stroll along the shore." },
      { day: 2, title: "Days 02-04: Dolphins & Dunes", description: "Kalpitiya kite surfing, dolphin watching, and Wilpattu leopard safari." },
      { day: 5, title: "Days 05-06: The Cultural Heart", description: "Sigiriya Rock, Minneriya elephants, and an authentic mud-hut village lunch." },
      { day: 7, title: "Days 07-08: The Royal Kingdom", description: "Kandy temples, Ambuluwawa tower, and cultural dance." },
      { day: 9, title: "Days 09-10: Into the Clouds", description: "Nuwara Eliya tea factories, Horton Plains family trek, and strawberries." },
      { day: 11, title: "Days 11-12: Mountain Adventure", description: "Blue train to Ella, hike Mini Adam's Peak, Flying Ravana Zip Line." },
      { day: 13, title: "The Big Game (Yala)", description: "Evening safari tracking the highest density populations of leopards." },
      { day: 14, title: "Days 14-15: Surf & Sunsets", description: "Weligama surfing lessons, beach cricket, relaxing by the Indian Ocean." },
      { day: 16, title: "Days 16-17: River Safaris", description: "Galle Fort, Turtle Hatchery conservation, Madu River mangrove boat safari." },
      { day: 18, title: "City Vibes (Colombo)", description: "City exploration and modern cafes in Colombo." },
      { day: 19, title: "Departure", description: "Transfer to airport." }
    ]
  },
  {
    id: "sri-lankan-golf-escape-11-days",
    title: "The Ultimate Sri Lankan Golf Escape",
    category: "Golf",
    duration: "11 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1535136195217-18f1ee4bb2a6?auto=format&fit=crop&q=80&w=1200",
    overview: "A golfing experience like no other. Discover the colonial charm of Royal Colombo, the mist-covered greens of Nuwara Eliya, and the stunning Victoria Golf Resort.",
    inclusions: [
      ...stdInclusions,
      "Green Fees for Royal Colombo, Victoria Resort, Nuwara Eliya, and Shangri-La",
      "Caddy and Golf Cart rentals as applicable",
      "Kandy and Colombo cultural sightseeing"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Island Welcome", description: "Transfer to luxury Colombo hotel to relax." },
      { day: 2, title: "Heritage Greens (Colombo)", description: "Royal Colombo Golf Club session. Evening city tour of landmarks." },
      { day: 3, title: "The Hill Capital (Kandy)", description: "Royal Botanical Gardens and Temple of the Tooth." },
      { day: 4, title: "Golf Above the Clouds", description: "Tee off at Victoria Golf & Country Resort in Digana. Lakeside vistas." },
      { day: 5, title: "Days 05 & 06: The Highland Classic", description: "Nuwara Eliya Golf Club play, misty mountains, and premium tea touring." },
      { day: 7, title: "Days 07 & 08: Coastal Fairways", description: "Links-style golf at Shangri-La Hambantota along the pristine southern coast." },
      { day: 9, title: "Safari & Sunsets", description: "Optional Yala safari or relaxation by the sea." },
      { day: 10, title: "Coastal Return", description: "Farewell dinner in seaside Negombo." },
      { day: 11, title: "Departure", description: "Transfer to airport." }
    ]
  },
  {
    id: "ramayana-trail-7-days",
    title: "The Ramayana Trail",
    category: "Ramayana",
    duration: "7 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1604711929420-bfcc99edaba0?auto=format&fit=crop&q=80&w=1200",
    overview: "Step into the pages of the great Indian epic. From the mountains where Hanuman left footprints to the serene gardens where Sita was held, connecting to ancient devotion.",
    inclusions: [
      ...stdInclusions,
      "Guided spiritual tours mapping Ramayana mythology",
      "Entrance to Munneswaram, Sita Amman, Divurumpola, and Kataragama"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & North-West Coast", description: "Visit Munneswaram and Manavari Temples in Chilaw. Travel to Kandy." },
      { day: 2, title: "Devotion in the Highlands", description: "Temple of the Tooth, Sri Baktha Hanuman Temple in Ramboda." },
      { day: 3, title: "The Path of Sita", description: "Explore Sita Amman Temple and Divurumpola Temple (Agni Pariksha)." },
      { day: 4, title: "Morning Blessings & Coast", description: "Kataragama early Pooja. Journey to Rumassala Hill in Unawatuna." },
      { day: 5, title: "Reflection & Leisure", description: "Relax natively on the golden sands of Bentota." },
      { day: 6, title: "The Capital’s Temples", description: "Panchamuga Anjaneyar Temple in Colombo, sightseeing." },
      { day: 7, title: "The Final Blessing", description: "Visit Kelaniya Raja Maha Viharaya before heading to the airport." }
    ]
  },
  {
    id: "miracle-dome-5-days",
    title: "The Miracle Dome Spiritual Encounter",
    category: "Religious",
    duration: "5 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1574620864390-41ebd9395f13?auto=format&fit=crop&q=80&w=1200",
    overview: "Designed for believers seeking a profound encounter under the ministry of Prophet Jerome Fernando. VIP seating for Forensic Prophecy and Sunday services.",
    inclusions: [
      ...stdInclusions,
      "VIP reserved seating at the Miracle Dome",
      "Transfers to events and Sunday celebration",
      "Cultural tour of Dambulla, Sigiriya, and Kandy"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Welcome", description: "Wednesday evening arrival. Transfer to Katunayake/Colombo hotel." },
      { day: 2, title: "The Forensic Night Service", description: "Thursday night service at the Miracle Dome with VIP access." },
      { day: 3, title: "The Cultural Triangle", description: "Visit Dambulla Cave Temple and conquer Sigiriya Rock Fortress." },
      { day: 4, title: "The Royal City of Kandy", description: "Temple of the Tooth, returned to Katunayake for Sunday." },
      { day: 5, title: "Sunday Celebration", description: "Prestigious Sunday Service at the Miracle Dome. Late night departure flight." }
    ]
  },
  {
    id: "mice-island-pulse-7-days",
    title: "The Island Pulse: Corporate Tour",
    category: "MICE",
    duration: "7 Days",
    price: priceNotice,
    image: "https://images.unsplash.com/photo-1505373877841-8eb1b6baec05?auto=format&fit=crop&q=80&w=1200",
    overview: "Elevate your corporate gathering with a world-class event hosting leading into Sri Lankan adventure, culture, and nightlife for team-building.",
    inclusions: [
      ...stdInclusions,
      "Venues and AV support for corporate events",
      "Gala dinners and themed cocktail receptions",
      "Team building activities (Zip-lining, safaris, beach networking)"
    ],
    exclusions: stdExclusions,
    itinerary: [
      { day: 1, title: "Arrival & Executive Welcome", description: "VIP pick-up. Settle in and prepare for the event." },
      { day: 2, title: "Event & Colombo 'After Dark'", description: "Full-day conference/event. Evening street-food tour and modern mixology." },
      { day: 3, title: "Heart of the Island", description: "Depart for Dambulla Caves, stay in a boutique eco-resort in Sigiriya." },
      { day: 4, title: "Lion Rock & Royal Capital", description: "Sunrise climb at Sigiriya. Temple of the Tooth in Kandy." },
      { day: 5, title: "Ella Adventure High", description: "Highland route to Ella. Mega Zip Line and laid-back team activities." },
      { day: 6, title: "Mountains to the Surf", description: "Descend to Hikkaduwa. Legendary beach parties and oceanside networking." },
      { day: 7, title: "Colombo Shopping", description: "High-end boutique shopping. Departure flight." }
    ]
  }
];
