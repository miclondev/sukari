"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, MapPin, Users } from "lucide-react";

const upcomingTrip = {
  title: "A Week in Greece: Athens, Mykonos & Santorini",
  date: "Apr 15, 2024",
  image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200",
  status: "Confirmed",
  remainingPayment: 2000,
};

const recentBookings = [
  {
    id: 1,
    tour: "London, Paris & Rome",
    date: "Jun 1, 2024",
    amount: 3239,
    status: "Pending",
  },
  {
    id: 2,
    tour: "A Week in Italy",
    date: "May 1, 2024",
    amount: 2409,
    status: "Confirmed",
  },
];

const stats = [
  {
    label: "Total Trips",
    value: "3",
    icon: Compass,
  },
  {
    label: "Upcoming Tours",
    value: "2",
    icon: Calendar,
  },
  {
    label: "Travel Points",
    value: "2,450",
    icon: Star,
  },
  {
    label: "Countries Visited",
    value: "5",
    icon: Globe,
  },
];

import { Compass, Globe, Star } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-ef-teal/10 rounded-lg">
                  <Icon className="w-6 h-6 text-ef-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Upcoming Trip */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Trip</h2>
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden">
              <img
                src={upcomingTrip.image}
                alt={upcomingTrip.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{upcomingTrip.title}</h3>
                <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Departure: {upcomingTrip.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Multiple destinations</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Remaining Payment</p>
                  <p className="text-2xl font-bold">${upcomingTrip.remainingPayment}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline">View Details</Button>
                  <Button>Make Payment</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Bookings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <Card>
          <div className="divide-y">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{booking.tour}</h3>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{booking.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${booking.amount}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    booking.status === "Confirmed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recommended Tours */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recommended Tours</h2>
          <Link href="/tours" className="text-ef-teal hover:text-ef-teal/90">
            View all tours
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200"
                  alt="Tour"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Mediterranean Cruise</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    <span>12-15 travelers</span>
                  </div>
                  <div>
                    <span className="font-medium">From $2,999</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}