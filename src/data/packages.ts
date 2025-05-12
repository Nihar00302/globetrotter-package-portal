
import { PackageType } from "@/types";

const packages: PackageType[] = [
  // Indian Packages
  {
    id: "in-001",
    name: "Kerala Backwaters",
    destination: "Kerala, India",
    description: "Experience the serene backwaters of Kerala on a traditional houseboat. Visit spice plantations, enjoy Kathakali performances, and relax on beautiful beaches during this comprehensive Kerala tour.",
    price: 45000,
    days: 6,
    imageUrl: "https://images.unsplash.com/photo-1602215500620-19d6c9d9e91e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    category: "india",
    season: "monsoon",
    highlights: [
      "Houseboat cruise through backwaters",
      "Spice plantation tour",
      "Traditional Kathakali dance show",
      "Beaches of Kovalam",
      "Tea plantations of Munnar"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description: "Airport pickup and transfer to hotel. Evening leisure time to explore Fort Kochi area."
      },
      {
        day: 2,
        title: "Cochin to Munnar",
        description: "Drive to Munnar, visiting waterfalls en route. Check-in at resort and relax amidst tea plantations."
      },
      {
        day: 3,
        title: "Munnar Exploration",
        description: "Visit tea plantations, spice gardens, and enjoy the hill station views."
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description: "Travel to Alleppey and board your private houseboat for an overnight backwater cruise."
      },
      {
        day: 5,
        title: "Alleppey to Kovalam",
        description: "Disembark and drive to Kovalam Beach. Evening leisure time at the beach."
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to Trivandrum airport for departure."
      }
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast, lunch and dinner",
      "Private AC vehicle for transfers",
      "Houseboat cruise with meals",
      "English-speaking guide",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Personal expenses",
      "Camera fees at monuments",
      "Travel insurance",
      "Any activities not mentioned in inclusions"
    ]
  },
  {
    id: "in-002",
    name: "Golden Triangle Tour",
    destination: "Delhi-Agra-Jaipur, India",
    description: "Discover India's iconic Golden Triangle covering Delhi, Agra, and Jaipur. Explore ancient monuments, vibrant bazaars, and experience the rich cultural heritage of North India.",
    price: 35000,
    days: 6,
    imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "india",
    season: "winter",
    highlights: [
      "Taj Mahal at sunrise",
      "Amber Fort elephant ride",
      "Old Delhi rickshaw tour",
      "City Palace in Jaipur",
      "Qutub Minar complex"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Welcome at airport and transfer to hotel. Brief orientation of the tour."
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description: "Visit Jama Masjid, Red Fort, Chandni Chowk, Raj Ghat, Humayun's Tomb, and Qutub Minar."
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description: "Drive to Agra. Visit Agra Fort and enjoy sunset view of Taj Mahal from Mehtab Bagh."
      },
      {
        day: 4,
        title: "Agra to Jaipur",
        description: "Sunrise visit to Taj Mahal. Drive to Jaipur, stopping at Fatehpur Sikri en route."
      },
      {
        day: 5,
        title: "Jaipur Sightseeing",
        description: "Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Evening shopping in local markets."
      },
      {
        day: 6,
        title: "Jaipur to Delhi & Departure",
        description: "Drive back to Delhi for departure with memories of the Golden Triangle."
      }
    ],
    inclusions: [
      "5 nights accommodation in 4-star hotels",
      "Daily breakfast",
      "Private AC car for sightseeing and transfers",
      "Professional English-speaking guide",
      "Monument entrance fees",
      "Elephant ride at Amber Fort",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Personal expenses and tips",
      "Camera fees",
      "Travel insurance"
    ]
  },
  {
    id: "in-003",
    name: "Goa Beach Vacation",
    destination: "Goa, India",
    description: "Relax on the beautiful beaches of Goa, enjoy water sports, explore Portuguese heritage sites, and experience the vibrant nightlife in this perfect beach getaway.",
    price: 25000,
    days: 4,
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "india",
    season: "winter",
    highlights: [
      "Beautiful beaches like Calangute and Baga",
      "Water sports activities",
      "Old Goa churches",
      "Spice plantation visit",
      "Vibrant nightlife"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description: "Airport pickup and transfer to beach resort. Evening leisure at the beach."
      },
      {
        day: 2,
        title: "North Goa Tour",
        description: "Visit Calangute, Baga, and Anjuna beaches. Enjoy water sports and beach activities."
      },
      {
        day: 3,
        title: "Cultural Tour",
        description: "Visit Old Goa churches, spice plantation, and Panjim city. Evening cruise on Mandovi River."
      },
      {
        day: 4,
        title: "Departure",
        description: "Free time until departure. Transfer to airport."
      }
    ],
    inclusions: [
      "3 nights accommodation in beach resort",
      "Daily breakfast",
      "Airport transfers",
      "North Goa sightseeing tour",
      "Old Goa and spice plantation tour",
      "Sunset cruise on Mandovi River",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Personal expenses",
      "Water sports charges",
      "Travel insurance",
      "Any activities not mentioned in inclusions"
    ]
  },
  {
    id: "in-004",
    name: "Himalayan Adventure",
    destination: "Himachal Pradesh, India",
    description: "Embark on an adventure in the Himalayas with trekking, camping, and exploring picturesque hill stations. Experience the beauty of snow-capped mountains and lush valleys.",
    price: 40000,
    days: 7,
    imageUrl: "https://images.unsplash.com/photo-1626621331169-3f1970ff9a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "india",
    season: "summer",
    highlights: [
      "Trekking in Himalayan trails",
      "Camping under stars",
      "Manali adventure activities",
      "Solang Valley exploration",
      "Visit to hot springs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Overnight Journey",
        description: "Arrive in Delhi and board overnight Volvo bus to Manali."
      },
      {
        day: 2,
        title: "Arrival in Manali",
        description: "Check-in at hotel and relax. Evening exploration of Mall Road."
      },
      {
        day: 3,
        title: "Manali Local Sightseeing",
        description: "Visit Hadimba Temple, Vashisht Hot Springs, and Old Manali."
      },
      {
        day: 4,
        title: "Solang Valley Adventure",
        description: "Full day at Solang Valley with optional adventure activities like paragliding and zorbing."
      },
      {
        day: 5,
        title: "Trekking Day",
        description: "Trek to nearby mountain trails and camp overnight under the stars."
      },
      {
        day: 6,
        title: "Camping to Manali",
        description: "Return from camp to Manali. Evening leisure time."
      },
      {
        day: 7,
        title: "Departure",
        description: "Board bus back to Delhi for departure."
      }
    ],
    inclusions: [
      "5 nights accommodation in hotel",
      "1 night camping",
      "Daily breakfast and dinner",
      "Transportation for sightseeing",
      "Trekking guide",
      "Camping equipment",
      "Volvo bus tickets Delhi-Manali-Delhi",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare to/from Delhi",
      "Lunch",
      "Personal expenses",
      "Adventure activity charges",
      "Travel insurance",
      "Anything not mentioned in inclusions"
    ]
  },
  {
    id: "in-005",
    name: "Rajasthan Heritage Tour",
    destination: "Rajasthan, India",
    description: "Immerse yourself in the royal heritage of Rajasthan. Explore magnificent forts and palaces, experience desert safaris, and enjoy cultural performances in the land of maharajas.",
    price: 55000,
    days: 8,
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "india",
    season: "winter",
    highlights: [
      "Majestic forts and palaces",
      "Camel safari in Thar Desert",
      "Cultural folk performances",
      "Lake City of Udaipur",
      "Blue City of Jodhpur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Welcome at airport and transfer to hotel. Evening visit to Chokhi Dhani for cultural experience."
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal."
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description: "Drive to Jodhpur. Evening walk around the clock tower market."
      },
      {
        day: 4,
        title: "Jodhpur Sightseeing",
        description: "Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace."
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer",
        description: "Drive to Jaisalmer, the golden city. Evening leisure."
      },
      {
        day: 6,
        title: "Jaisalmer Exploration & Desert Safari",
        description: "Visit Jaisalmer Fort and havelis. Evening camel safari and cultural program in desert camp."
      },
      {
        day: 7,
        title: "Jaisalmer to Udaipur",
        description: "Long drive to Udaipur, the lake city. Evening leisure."
      },
      {
        day: 8,
        title: "Udaipur & Departure",
        description: "Visit City Palace, Lake Pichola, and Saheliyon ki Bari. Transfer to airport for departure."
      }
    ],
    inclusions: [
      "7 nights accommodation in heritage hotels",
      "Daily breakfast",
      "Private AC vehicle for entire tour",
      "English-speaking guide",
      "Monument entrance fees",
      "Desert camp stay with cultural program",
      "Camel safari",
      "Boat ride on Lake Pichola",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner (except in desert camp)",
      "Personal expenses and tips",
      "Camera fees",
      "Travel insurance"
    ]
  },
  {
    id: "in-006",
    name: "Andaman Island Paradise",
    destination: "Andaman Islands, India",
    description: "Discover the pristine beaches and clear waters of Andaman Islands. Enjoy water sports, island hopping, and explore the rich marine life in this tropical paradise.",
    price: 60000,
    days: 6,
    imageUrl: "https://images.unsplash.com/photo-1586500036346-5d9704af1393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "india",
    season: "winter",
    highlights: [
      "Radhanagar Beach",
      "Snorkeling at Elephant Beach",
      "Light and Sound show at Cellular Jail",
      "Glass-bottom boat ride",
      "Island hopping"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        description: "Airport pickup and transfer to hotel. Visit Cellular Jail and attend Light & Sound show."
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island",
        description: "Ferry to Havelock Island. Visit Radhanagar Beach. Overnight at Havelock."
      },
      {
        day: 3,
        title: "Havelock Island Activities",
        description: "Visit Elephant Beach for snorkeling. Leisure time at Kalapathar Beach."
      },
      {
        day: 4,
        title: "Havelock to Neil Island",
        description: "Ferry to Neil Island. Visit Bharatpur Beach, Natural Bridge, and Laxmanpur Beach."
      },
      {
        day: 5,
        title: "Neil Island to Port Blair",
        description: "Return to Port Blair. Visit Chidiya Tapu for sunset view."
      },
      {
        day: 6,
        title: "Departure",
        description: "Visit local market for shopping. Transfer to airport for departure."
      }
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast",
      "All transfers by AC vehicle",
      "Ferry tickets",
      "Entry permits",
      "Snorkeling equipment",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Personal expenses",
      "Advanced water sports",
      "Travel insurance",
      "Anything not mentioned in inclusions"
    ]
  },

  // International Packages
  {
    id: "int-001",
    name: "Thailand Discovery",
    destination: "Bangkok & Phuket, Thailand",
    description: "Experience the perfect blend of culture and beach relaxation in Thailand. Explore the vibrant city of Bangkok and relax on the beautiful beaches of Phuket.",
    price: 75000,
    days: 6,
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&q=80",
    category: "international",
    season: "winter",
    highlights: [
      "Grand Palace and temples in Bangkok",
      "Floating markets",
      "Phi Phi Islands tour",
      "Thai cooking class",
      "Thai massage experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        description: "Airport pickup and transfer to hotel. Evening Chao Phraya dinner cruise."
      },
      {
        day: 2,
        title: "Bangkok City Tour",
        description: "Visit Grand Palace, Wat Pho, and Wat Arun. Evening free for shopping at markets."
      },
      {
        day: 3,
        title: "Bangkok to Phuket",
        description: "Fly to Phuket. Transfer to beach resort. Evening leisure."
      },
      {
        day: 4,
        title: "Phi Phi Islands Tour",
        description: "Full-day speedboat tour to Phi Phi Islands with lunch."
      },
      {
        day: 5,
        title: "Phuket Free Day",
        description: "Day at leisure for beach activities or optional Phuket city tour."
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to airport for departure flight."
      }
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast",
      "All transfers by AC vehicle",
      "Bangkok city tour",
      "Phi Phi Islands tour with lunch",
      "Domestic flight Bangkok-Phuket",
      "English-speaking guide",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Lunch and dinner (except where mentioned)",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
      "Thailand visa fee"
    ]
  },
  {
    id: "int-002",
    name: "European Delight",
    destination: "Paris-Switzerland-Venice-Rome",
    description: "Explore the best of Europe with this comprehensive tour covering iconic cities and breathtaking landscapes across France, Switzerland, and Italy.",
    price: 180000,
    days: 10,
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9088d4687d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
    category: "international",
    season: "summer",
    highlights: [
      "Eiffel Tower in Paris",
      "Swiss Alps experience",
      "Gondola ride in Venice",
      "Vatican City tour",
      "Roman Colosseum"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        description: "Welcome at airport and transfer to hotel. Evening orientation tour."
      },
      {
        day: 2,
        title: "Paris City Tour",
        description: "Visit Eiffel Tower, Louvre Museum, and Seine River cruise."
      },
      {
        day: 3,
        title: "Paris to Switzerland",
        description: "Travel to Switzerland by train. Check in at hotel in Interlaken/Lucerne region."
      },
      {
        day: 4,
        title: "Swiss Alps Day",
        description: "Excursion to Jungfraujoch/Mt. Titlis. Experience snow and stunning views."
      },
      {
        day: 5,
        title: "Switzerland to Venice",
        description: "Travel to Venice by train. Evening leisure in Venice."
      },
      {
        day: 6,
        title: "Venice Exploration",
        description: "Visit St. Mark's Square, Doge's Palace, and enjoy gondola ride."
      },
      {
        day: 7,
        title: "Venice to Florence",
        description: "Travel to Florence. Evening walk in historic center."
      },
      {
        day: 8,
        title: "Florence to Rome",
        description: "Morning tour of Florence. Afternoon travel to Rome."
      },
      {
        day: 9,
        title: "Rome and Vatican Tour",
        description: "Visit Vatican City, Colosseum, and Roman Forum."
      },
      {
        day: 10,
        title: "Departure",
        description: "Transfer to airport for departure flight."
      }
    ],
    inclusions: [
      "9 nights accommodation in 4-star hotels",
      "Daily breakfast",
      "Train passes between cities",
      "City tours with local guides",
      "Jungfraujoch/Mt. Titlis excursion",
      "Gondola ride in Venice",
      "Skip-the-line entry to major attractions",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Lunch and dinner",
      "City tourist taxes (payable locally)",
      "Personal expenses",
      "Travel insurance",
      "Schengen visa fee"
    ]
  },
  {
    id: "int-003",
    name: "Dubai Extravaganza",
    destination: "Dubai, UAE",
    description: "Experience the luxurious and ultramodern city of Dubai. Enjoy desert safaris, shopping festivals, and visit the world's tallest building in this Middle Eastern gem.",
    price: 85000,
    days: 5,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "international",
    season: "winter",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari with BBQ dinner",
      "Dubai Mall and fountain show",
      "Palm Jumeirah and Atlantis",
      "Dubai Marina cruise"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        description: "Airport pickup and transfer to hotel. Evening Dhow cruise dinner in Dubai Marina."
      },
      {
        day: 2,
        title: "Dubai City Tour",
        description: "Visit Burj Khalifa, Dubai Mall, Jumeirah Mosque, and Jumeirah Beach."
      },
      {
        day: 3,
        title: "Desert Safari",
        description: "Morning leisure. Afternoon desert safari with dune bashing, camel riding, and BBQ dinner with entertainment."
      },
      {
        day: 4,
        title: "Abu Dhabi Day Trip",
        description: "Full-day excursion to Abu Dhabi. Visit Sheikh Zayed Grand Mosque, Ferrari World (optional), and Corniche."
      },
      {
        day: 5,
        title: "Departure",
        description: "Last-minute shopping. Transfer to airport for departure."
      }
    ],
    inclusions: [
      "4 nights accommodation in 4-star hotel",
      "Daily breakfast",
      "All transfers in AC vehicle",
      "Dubai city tour",
      "Desert safari with BBQ dinner",
      "Dhow cruise dinner",
      "Abu Dhabi day trip",
      "Burj Khalifa entry ticket (non-prime hours)",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Lunch (except where mentioned)",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
      "UAE visa fee"
    ]
  },
  {
    id: "int-004",
    name: "Bali Paradise",
    destination: "Bali, Indonesia",
    description: "Discover the Island of Gods with its beautiful beaches, lush rice terraces, and rich cultural heritage. Experience the perfect blend of relaxation and adventure in Bali.",
    price: 70000,
    days: 6,
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1938&q=80",
    category: "international",
    season: "summer",
    highlights: [
      "Ubud rice terraces",
      "Tanah Lot Temple sunset",
      "Uluwatu Temple and Kecak dance",
      "Water sports at Nusa Dua",
      "Balinese spa treatment"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description: "Airport pickup and transfer to hotel in Kuta/Seminyak. Evening leisure."
      },
      {
        day: 2,
        title: "Ubud Art Villages",
        description: "Visit Ubud Monkey Forest, rice terraces, art villages, and Ubud Market."
      },
      {
        day: 3,
        title: "North Bali Tour",
        description: "Visit Ulun Danu Temple, Gitgit Waterfall, and Lovina Beach area."
      },
      {
        day: 4,
        title: "Nusa Dua Beach Day",
        description: "Day at Nusa Dua beach with optional water sports. Evening Uluwatu Temple and Kecak dance."
      },
      {
        day: 5,
        title: "Tanah Lot & Spa",
        description: "Morning leisure. Afternoon visit to Tanah Lot Temple for sunset. Evening Balinese spa treatment."
      },
      {
        day: 6,
        title: "Departure",
        description: "Free time until airport transfer for departure."
      }
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast",
      "All transfers and tours with AC vehicle",
      "English-speaking guide",
      "Entrance fees to attractions",
      "Kecak dance performance",
      "Balinese spa treatment",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Lunch and dinner",
      "Personal expenses",
      "Optional activities and water sports",
      "Travel insurance",
      "Indonesia visa fee (if applicable)"
    ]
  },
  {
    id: "int-005",
    name: "Singapore & Malaysia Tour",
    destination: "Singapore & Kuala Lumpur",
    description: "Experience the best of Singapore and Malaysia in this exciting tour. Visit modern attractions, cultural sites, and enjoy the diverse culinary delights of these Southeast Asian nations.",
    price: 90000,
    days: 7,
    imageUrl: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "international",
    season: "summer",
    highlights: [
      "Gardens by the Bay",
      "Universal Studios Singapore",
      "Petronas Twin Towers",
      "Batu Caves",
      "Sentosa Island"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore",
        description: "Airport pickup and transfer to hotel. Evening visit to Gardens by the Bay light show."
      },
      {
        day: 2,
        title: "Singapore City Tour",
        description: "Visit Merlion Park, Marina Bay Sands, Chinatown, and Little India."
      },
      {
        day: 3,
        title: "Sentosa Island",
        description: "Full day at Sentosa Island. Visit SEA Aquarium, S.E.A. Aquarium, and Wings of Time show."
      },
      {
        day: 4,
        title: "Singapore to Kuala Lumpur",
        description: "Morning at leisure or optional Universal Studios visit. Afternoon flight to Kuala Lumpur."
      },
      {
        day: 5,
        title: "Kuala Lumpur City Tour",
        description: "Visit Petronas Twin Towers, KL Tower, National Monument, and Central Market."
      },
      {
        day: 6,
        title: "Batu Caves & Genting",
        description: "Visit Batu Caves and Genting Highlands (with optional cable car ride)."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to airport for departure flight."
      }
    ],
    inclusions: [
      "6 nights accommodation in 4-star hotels",
      "Daily breakfast",
      "All transfers by AC vehicle",
      "Singapore city tour",
      "Sentosa Island tour",
      "Kuala Lumpur city tour",
      "Batu Caves and Genting Highlands excursion",
      "English-speaking guide",
      "Flight from Singapore to Kuala Lumpur",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Lunch and dinner",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
      "Visa fees (if applicable)"
    ]
  },
  {
    id: "int-006",
    name: "Egyptian Wonders",
    destination: "Cairo & Nile Cruise, Egypt",
    description: "Discover the ancient wonders of Egypt with visits to the Pyramids, Sphinx, and a luxurious cruise along the Nile River exploring temples and tombs of pharaohs.",
    price: 150000,
    days: 8,
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "international",
    season: "winter",
    highlights: [
      "Great Pyramids of Giza and Sphinx",
      "Egyptian Museum",
      "Luxurious Nile cruise",
      "Valley of the Kings",
      "Abu Simbel temples"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description: "Airport pickup and transfer to hotel. Evening orientation."
      },
      {
        day: 2,
        title: "Pyramids and Sphinx",
        description: "Visit the Great Pyramids of Giza, Sphinx, and Solar Boat Museum."
      },
      {
        day: 3,
        title: "Cairo to Luxor",
        description: "Fly to Luxor. Board Nile cruise ship. Visit Karnak and Luxor Temples."
      },
      {
        day: 4,
        title: "Luxor West Bank",
        description: "Visit Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon. Sail to Edfu."
      },
      {
        day: 5,
        title: "Edfu to Kom Ombo",
        description: "Visit Edfu Temple. Sail to Kom Ombo and visit the temple. Continue to Aswan."
      },
      {
        day: 6,
        title: "Aswan Highlights",
        description: "Visit High Dam, Unfinished Obelisk, and Philae Temple. Optional Nubian village visit."
      },
      {
        day: 7,
        title: "Abu Simbel & Cairo",
        description: "Optional early morning trip to Abu Simbel temples. Fly back to Cairo. Evening at leisure."
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to airport for departure flight."
      }
    ],
    inclusions: [
      "3 nights in Cairo 5-star hotel",
      "4 nights on 5-star Nile cruise",
      "Daily breakfast in Cairo, full board on cruise",
      "All transfers by AC vehicle",
      "Domestic flights Cairo-Luxor and Aswan-Cairo",
      "Qualified Egyptologist guide",
      "Entrance fees to attractions",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Lunch and dinner in Cairo",
      "Abu Simbel excursion",
      "Entry visa to Egypt",
      "Personal expenses",
      "Travel insurance",
      "Any optional tours"
    ]
  }
];

export default packages;
