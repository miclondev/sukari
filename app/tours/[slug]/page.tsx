import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Globe, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";

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

type Tour = {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  days: number;
  groupSize: string;
  nextDeparture: string;
  images: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
};

export function generateStaticParams() {
  return Object.keys(toursData).map((slug) => ({
    slug,
  }));
}

export default function TourPage() {
  const tour: Tour = toursData["greece-athens-mykonos-santorini"];
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src={tour.images[0]}
          alt={tour.title}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{tour.days} days</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{tour.groupSize} travelers</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-ef-orange" />
                <span>
                  {tour.rating} ({tour.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                    <p className="text-muted-foreground">{tour.description}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Trip Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <Globe className="w-5 h-5 mr-2 mt-1 text-ef-teal" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="itinerary">
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="border-l-2 border-ef-teal pl-4">
                      <h3 className="font-bold">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-muted-foreground">{day.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="details">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">What&apos;s Included</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-ef-teal rounded-full mr-2"></span>
                        All accommodations
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-ef-teal rounded-full mr-2"></span>
                        All transportation within the tour
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-ef-teal rounded-full mr-2"></span>
                        Professional tour director
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-ef-teal rounded-full mr-2"></span>
                        Local guides
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <Card className="p-6 sticky top-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${tour.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ${tour.originalPrice}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Next departure: {tour.nextDeparture}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Multiple destinations</span>
                  </div>
                </div>
                <Button className="w-full bg-ef-orange hover:bg-ef-orange/90 text-white">
                  Book Now
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Reserve now with $99 deposit
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
