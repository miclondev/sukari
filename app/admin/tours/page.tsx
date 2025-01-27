"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Eye, Pen, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";

const toursData = {
  "greece-athens-mykonos-santorini": {
    id: 1,
    title: "A Week in Greece: Athens, Mykonos & Santorini",
    description:
      "Experience the best of Greece on this carefully crafted tour. From the ancient wonders of Athens to the stunning sunsets of Santorini, every moment is designed to immerse you in Greek culture and beauty.",
    price: 2899,
    originalPrice: 3299,
    rating: 4.8,
    reviews: 245,
    days: 8,
    groupSize: "12-15",
    nextDeparture: "Apr 15, 2024",
    images: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200",
    ],
    highlights: [
      "Explore the ancient Acropolis in Athens",
      "Visit the charming neighborhoods of Plaka and Monastiraki",
      "Ferry ride through the Cyclades islands",
      "Discover the white-washed beauty of Mykonos",
      "Watch the famous Santorini sunset",
      "Wine tasting at a local vineyard",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Athens",
        description:
          "Welcome to Greece! Meet your Tour Director and fellow travelers at a welcome dinner.",
      },
      {
        day: 2,
        title: "Sightseeing in Athens",
        description: "Visit the ancient Acropolis and explore the modern city.",
      },
      {
        day: 3,
        title: "Athens → Mykonos",
        description: "Travel by ferry to the island of Mykonos.",
      },
      {
        day: 4,
        title: "Mykonos",
        description: "Free day to explore the island's beaches and villages.",
      },
      {
        day: 5,
        title: "Mykonos → Santorini",
        description: "Ferry to Santorini, evening wine tasting.",
      },
      {
        day: 6,
        title: "Santorini",
        description: "Visit Oia and watch the famous sunset.",
      },
      {
        day: 7,
        title: "Santorini",
        description: "Free day for optional activities or relaxation.",
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to the airport for departure.",
      },
    ],
  },
  "italy-venice-florence-rome": {
    id: 2,
    title: "A Week in Italy: Venice, Florence & Rome",
    description:
      "Discover the magic of Italy's most iconic cities. From the canals of Venice to the art of Florence and the history of Rome, experience the best of Italian culture, cuisine, and architecture.",
    price: 2409,
    originalPrice: 2899,
    rating: 4.9,
    reviews: 312,
    days: 7,
    groupSize: "12-15",
    nextDeparture: "May 1, 2024",
    images: [
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1543429258-c5ca3cb8a0cb?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200",
    ],
    highlights: [
      "Gondola ride through Venice's canals",
      "Visit St. Mark's Basilica",
      "Tour the Uffizi Gallery in Florence",
      "See Michelangelo's David",
      "Explore the Colosseum in Rome",
      "Visit the Vatican Museums",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Venice",
        description: "Welcome dinner and evening gondola ride.",
      },
      {
        day: 2,
        title: "Venice Exploration",
        description: "Tour St. Mark's Square and the Doge's Palace.",
      },
      {
        day: 3,
        title: "Venice → Florence",
        description: "High-speed train to Florence, afternoon city walk.",
      },
      {
        day: 4,
        title: "Florence Art Tour",
        description: "Visit the Uffizi and Accademia galleries.",
      },
      {
        day: 5,
        title: "Florence → Rome",
        description: "Train to Rome, evening walking tour.",
      },
      {
        day: 6,
        title: "Ancient Rome",
        description: "Explore the Colosseum and Roman Forum.",
      },
      {
        day: 7,
        title: "Vatican & Departure",
        description: "Morning Vatican tour, afternoon departure.",
      },
    ],
  },
  "london-paris-rome": {
    id: 3,
    title: "London, Paris & Rome",
    description:
      "Experience three of Europe's most iconic capitals. From British charm to French sophistication and Italian passion, this tour combines the best of European culture, history, and cuisine.",
    price: 3239,
    originalPrice: 3599,
    rating: 4.7,
    reviews: 189,
    days: 10,
    groupSize: "12-15",
    nextDeparture: "Jun 1, 2024",
    images: [
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200",
    ],
    highlights: [
      "Tour the Tower of London",
      "See Big Ben and Westminster Abbey",
      "Visit the Louvre Museum",
      "Climb the Eiffel Tower",
      "Explore the Colosseum",
      "Visit St. Peter's Basilica",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in London",
        description: "Welcome dinner and Thames River cruise.",
      },
      {
        day: 2,
        title: "London Landmarks",
        description: "Visit the Tower of London and Westminster Abbey.",
      },
      {
        day: 3,
        title: "London Free Day",
        description: "Optional excursions or independent exploration.",
      },
      {
        day: 4,
        title: "London → Paris",
        description: "Eurostar train to Paris, evening Seine cruise.",
      },
      {
        day: 5,
        title: "Paris Highlights",
        description: "Visit the Louvre and Eiffel Tower.",
      },
      {
        day: 6,
        title: "Versailles Excursion",
        description: "Day trip to the Palace of Versailles.",
      },
      {
        day: 7,
        title: "Paris → Rome",
        description: "Flight to Rome, evening walking tour.",
      },
      {
        day: 8,
        title: "Ancient Rome",
        description: "Explore the Colosseum and Roman Forum.",
      },
      {
        day: 9,
        title: "Vatican City",
        description: "Tour the Vatican Museums and Sistine Chapel.",
      },
      {
        day: 10,
        title: "Departure",
        description: "Transfer to Rome airport for departure.",
      },
    ],
  },
};

export default function AdminToursPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">Tours Management</h1>
            <p className="text-muted-foreground">Manage and organize your tour packages</p>
          </div>
          <Button asChild>
            <Link href="/admin/tours/new">
              <Plus className="w-4 h-4 mr-2" />
              Add New Tour
            </Link>
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input className="pl-10" placeholder="Search tours..." />
          </div>
          <Button variant="outline">Filters</Button>
        </div>
      </div>

      <Card>
        <div className="divide-y">
          {Object.entries(toursData).map(([slug, tour]) => (
            <div key={slug} className="p-6 flex items-center space-x-4">
              <div className="w-32 h-24 rounded-lg overflow-hidden">
                <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{tour.title}</h3>
                <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{tour.days} days</span>
                  </div>
                  <span>|</span>
                  <span>${tour.price}</span>
                  <span>|</span>
                  <span>Active</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Pen className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
