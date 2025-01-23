"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Globe, Clock, Coffee, Utensils, Hotel } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// This would come from an API in a real application
export const tripDetails = {
  "1": {
    id: 1,
    title: "A Week in Greece: Athens, Mykonos & Santorini",
    date: "Apr 15, 2024",
    duration: "8 days",
    groupSize: "12-15 travelers",
    status: "Confirmed",
    amount: 2899,
    remainingPayment: 2000,
    paymentSchedule: [
      {
        dueDate: "Dec 15, 2023",
        amount: 899,
        status: "Paid"
      },
      {
        dueDate: "Feb 15, 2024",
        amount: 1000,
        status: "Due"
      },
      {
        dueDate: "Mar 15, 2024",
        amount: 1000,
        status: "Due"
      }
    ],
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Athens",
        description: "Welcome to Greece! Meet your Tour Director and fellow travelers at a welcome dinner.",
        activities: ["Airport transfer", "Hotel check-in", "Welcome dinner"],
        meals: ["Dinner"],
      },
      {
        day: 2,
        title: "Sightseeing in Athens",
        description: "Visit the ancient Acropolis and explore the modern city.",
        activities: ["Acropolis tour", "Plaka neighborhood walk", "Archaeological Museum visit"],
        meals: ["Breakfast", "Lunch"],
      },
      {
        day: 3,
        title: "Athens → Mykonos",
        description: "Travel by ferry to the island of Mykonos.",
        activities: ["Ferry to Mykonos", "Island orientation", "Free evening"],
        meals: ["Breakfast"],
      },
      {
        day: 4,
        title: "Mykonos",
        description: "Free day to explore the island's beaches and villages.",
        activities: ["Optional beach excursion", "Free time for shopping", "Optional cooking class"],
        meals: ["Breakfast"],
      },
      {
        day: 5,
        title: "Mykonos → Santorini",
        description: "Ferry to Santorini, evening wine tasting.",
        activities: ["Ferry to Santorini", "Hotel check-in", "Wine tasting experience"],
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 6,
        title: "Santorini",
        description: "Visit Oia and watch the famous sunset.",
        activities: ["Oia village tour", "Sunset viewing", "Group dinner"],
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 7,
        title: "Santorini",
        description: "Free day for optional activities or relaxation.",
        activities: ["Optional volcano tour", "Free time", "Farewell dinner"],
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to the airport for departure.",
        activities: ["Airport transfer"],
        meals: ["Breakfast"],
      },
    ],
    included: [
      "All accommodations",
      "All transportation within the tour",
      "Professional tour director",
      "Local guides",
      "Most meals",
      "Welcome and farewell dinners",
      "Wine tasting experience",
      "Entrance fees to all sites",
    ],
    notIncluded: [
      "Flights to/from Greece",
      "Travel insurance",
      "Optional activities",
      "Some meals",
      "Personal expenses",
      "Gratuities",
    ],
  },
  "2": {
    id: 2,
    title: "London, Paris & Rome",
    date: "Jun 1, 2024",
    duration: "10 days",
    groupSize: "12-15 travelers",
    status: "Pending",
    amount: 3239,
    remainingPayment: 3239,
    paymentSchedule: [
      {
        dueDate: "Mar 1, 2024",
        amount: 1000,
        status: "Due"
      },
      {
        dueDate: "Apr 1, 2024",
        amount: 1239,
        status: "Due"
      },
      {
        dueDate: "May 1, 2024",
        amount: 1000,
        status: "Due"
      }
    ],
    image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=1200",
    itinerary: [], // Add full itinerary details here
    included: [], // Add included items here
    notIncluded: [], // Add not included items here
  },
};

// Add generateStaticParams function for static site generation
export async function generateStaticParams() {
  return Object.keys(tripDetails).map((id) => ({
    id,
  }));
}

export default function TripDetailsPage({ params }: { params: { id: string } }) {
  const trip = tripDetails[params.id as keyof typeof tripDetails];

  if (!trip) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Trip not found</h1>
        <p className="text-muted-foreground">The trip you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">{trip.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Departure: {trip.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{trip.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{trip.groupSize}</span>
            </div>
          </div>
        </div>
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
            trip.status === "Confirmed" 
              ? "bg-green-100 text-green-800" 
              : "bg-yellow-100 text-yellow-800"
          }`}>
            {trip.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="itinerary" className="w-full">
            <TabsList>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="included">What's Included</TabsTrigger>
            </TabsList>

            <TabsContent value="itinerary">
              <Card className="p-6">
                <div className="space-y-8">
                  {trip.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-8 pb-8 border-l-2 border-ef-teal last:pb-0">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-ef-teal" />
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold">Day {day.day}: {day.title}</h3>
                        <p className="text-muted-foreground mt-1">{day.description}</p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Today's Activities</h4>
                          <ul className="space-y-2">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="flex items-center">
                                <Globe className="w-4 h-4 mr-2 text-ef-teal" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {day.meals && day.meals.length > 0 && (
                          <div>
                            <h4 className="font-medium mb-2">Included Meals</h4>
                            <div className="flex items-center gap-4">
                              {day.meals.map((meal, index) => (
                                <div key={index} className="flex items-center text-sm">
                                  <Utensils className="w-4 h-4 mr-1 text-ef-teal" />
                                  <span>{meal}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="included">
              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-ef-teal" />
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {trip.included.map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-ef-teal rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-ef-teal" />
                      Not Included
                    </h3>
                    <ul className="space-y-2">
                      {trip.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="p-6 sticky top-4">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground">Total Price</p>
                <p className="text-3xl font-bold">${trip.amount}</p>
              </div>
              {trip.remainingPayment > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground">Remaining Balance</p>
                  <p className="text-2xl font-bold text-ef-orange">${trip.remainingPayment}</p>
                </div>
              )}
              <div className="space-y-2">
                <Button className="w-full" asChild>
                  <Link href={`/dashboard/trips/${trip.id}/payment`}>Make Payment</Link>
                </Button>
                <Button variant="outline" className="w-full">Download Itinerary</Button>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Need Assistance?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our travel experts are here to help you with any questions about your trip.
                </p>
                <Button variant="outline" className="w-full">Contact Support</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}