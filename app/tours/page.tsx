"use client";

import { TourCard, type Tour } from "./_components/tour-card";

// This would typically come from an API
const tours: Tour[] = [
  {
    id: 1,
    slug: "greece-athens-mykonos-santorini",
    title: "A Week in Greece: Athens, Mykonos & Santorini",
    description: "Experience the best of Greece on this carefully crafted tour.",
    price: 2899,
    originalPrice: 3299,
    rating: 4.8,
    reviews: 245,
    days: 8,
    groupSize: "12-15 travelers",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200",
    destinations: ["Athens", "Mykonos", "Santorini"],
  },
  {
    id: 2,
    slug: "italy-venice-florence-rome",
    title: "A Week in Italy: Venice, Florence & Rome",
    description: "Discover the magic of Italy's most iconic cities.",
    price: 2409,
    originalPrice: 2899,
    rating: 4.9,
    reviews: 312,
    days: 7,
    groupSize: "12-15 travelers",
    image:
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&q=80&w=1200",
    destinations: ["Venice", "Florence", "Rome"],
  },
  {
    id: 3,
    slug: "london-paris-rome",
    title: "London, Paris & Rome",
    description: "Experience three of Europe's most iconic capitals.",
    price: 3239,
    originalPrice: 3599,
    rating: 4.7,
    reviews: 189,
    days: 10,
    groupSize: "12-15 travelers",
    image:
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=1200",
    destinations: ["London", "Paris", "Rome"],
  },
  {
    id: 4,
    slug: "spain-barcelona-madrid",
    title: "Spanish Highlights: Barcelona & Madrid",
    description: "Immerse yourself in Spanish culture and history.",
    price: 2199,
    originalPrice: 2499,
    rating: 4.6,
    reviews: 156,
    days: 6,
    groupSize: "12-15 travelers",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=1200",
    destinations: ["Barcelona", "Madrid"],
  },
  {
    id: 5,
    slug: "japan-tokyo-kyoto",
    title: "Japan Essentials: Tokyo & Kyoto",
    description: "Experience the perfect blend of modern and traditional Japan.",
    price: 3899,
    originalPrice: 4299,
    rating: 4.9,
    reviews: 203,
    days: 9,
    groupSize: "10-12 travelers",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
    destinations: ["Tokyo", "Kyoto"],
  },
  {
    id: 6,
    slug: "france-paris-loire-valley",
    title: "French Charm: Paris & Loire Valley",
    description: "Discover the romance of Paris and the beauty of Loire Valley.",
    price: 2799,
    originalPrice: 3099,
    rating: 4.7,
    reviews: 167,
    days: 7,
    groupSize: "12-15 travelers",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    destinations: ["Paris", "Loire Valley"],
  },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-ef-teal text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Tours</h1>
          <p className="text-white/90 max-w-2xl">
            Choose from more than 200 carefully crafted itineraries across the globe. Each tour is
            designed to immerse you in the local culture and create unforgettable memories.
          </p>
        </div>
      </div>
      {/* 
      <TourFilters
        onSearch={(value) => console.log("Search:", value)}
        onSort={(value) => console.log("Sort:", value)}
        onFilter={(type, value) => console.log("Filter:", type, value)}
      /> */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
