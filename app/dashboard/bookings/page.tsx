"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Filter, Eye } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const bookings = {
  upcoming: [
    {
      id: 1,
      tour: "A Week in Greece: Athens, Mykonos & Santorini",
      date: "Apr 15, 2024",
      amount: 2899,
      status: "Confirmed",
      paymentStatus: "Paid in Full",
      travelers: 2,
    },
    {
      id: 2,
      tour: "London, Paris & Rome",
      date: "Jun 1, 2024",
      amount: 3239,
      status: "Pending",
      paymentStatus: "Deposit Paid",
      travelers: 2,
    },
  ],
  past: [
    {
      id: 3,
      tour: "A Week in Italy: Venice, Florence & Rome",
      date: "Jan 15, 2024",
      amount: 2409,
      status: "Completed",
      paymentStatus: "Paid in Full",
      travelers: 2,
    },
  ],
  cancelled: [
    {
      id: 4,
      tour: "Spanish Delight: Madrid & Barcelona",
      date: "Mar 1, 2024",
      amount: 2199,
      status: "Cancelled",
      paymentStatus: "Refunded",
      travelers: 1,
    },
  ],
};

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">My Bookings</h1>
        <p className="text-muted-foreground">View and manage your tour bookings</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input className="pl-10" placeholder="Search bookings..." />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({bookings.upcoming.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({bookings.past.length})</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled ({bookings.cancelled.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <div className="divide-y">
              {bookings.upcoming.map((booking) => (
                <div key={booking.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{booking.tour}</h3>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Departure: {booking.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <p className="font-medium">${booking.amount}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                          booking.status === "Confirmed" 
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {booking.status}
                        </span>
                        <span className="inline-block px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                          {booking.paymentStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {booking.travelers} {booking.travelers === 1 ? 'traveler' : 'travelers'}
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {booking.status === "Pending" && (
                        <Button size="sm">Complete Payment</Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card>
            <div className="divide-y">
              {bookings.past.map((booking) => (
                <div key={booking.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{booking.tour}</h3>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Departure: {booking.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <p className="font-medium">${booking.amount}</p>
                      <span className="inline-block px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {booking.travelers} {booking.travelers === 1 ? 'traveler' : 'travelers'}
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">Write Review</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled">
          <Card>
            <div className="divide-y">
              {bookings.cancelled.map((booking) => (
                <div key={booking.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{booking.tour}</h3>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Departure: {booking.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <p className="font-medium">${booking.amount}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                          {booking.status}
                        </span>
                        <span className="inline-block px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                          {booking.paymentStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {booking.travelers} {booking.travelers === 1 ? 'traveler' : 'travelers'}
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}