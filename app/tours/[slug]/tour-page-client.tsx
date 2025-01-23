"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Globe, MapPin, Star, Users } from "lucide-react";

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

export default function TourPageClient({ tour }: { tour: Tour }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img
          src={tour.images[0]}
          alt={tour.title}
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
                <span>{tour.rating} ({tour.reviews} reviews)</span>
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
                      <h3 className="font-bold">Day {day.day}: {day.title}</h3>
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