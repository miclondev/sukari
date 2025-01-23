import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const trips = {
  upcoming: [
    {
      id: 1,
      title: "A Week in Greece: Athens, Mykonos & Santorini",
      date: "Apr 15, 2024",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200",
      status: "Confirmed",
      remainingPayment: 2000,
    },
    {
      id: 2,
      title: "London, Paris & Rome",
      date: "Jun 1, 2024",
      image:
        "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=1200",
      status: "Pending",
      remainingPayment: 3239,
    },
  ],
  past: [
    {
      id: 3,
      title: "A Week in Italy: Venice, Florence & Rome",
      date: "Jan 15, 2024",
      image:
        "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&q=80&w=1200",
      status: "Completed",
    },
  ],
};

export default function TripsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">My Trips</h1>
        <p className="text-muted-foreground">View and manage your upcoming and past trips.</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
          <TabsTrigger value="past">Past Trips</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="space-y-6">
            {trips.upcoming.map((trip) => (
              <Card key={trip.id} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden">
                    <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{trip.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            trip.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {trip.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Departure: {trip.date}</span>
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
                        <p className="text-2xl font-bold">${trip.remainingPayment}</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" asChild>
                          <Link href={`/dashboard/trips/${trip.id}`}>View Itinerary</Link>
                        </Button>
                        <Button asChild>
                          <Link href={`/dashboard/trips/${trip.id}/payment`}>Make Payment</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="space-y-6">
            {trips.past.map((trip) => (
              <Card key={trip.id} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden">
                    <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{trip.title}</h3>
                        <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                          {trip.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Departure: {trip.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Multiple destinations</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" asChild>
                        <Link href={`/dashboard/trips/${trip.id}`}>View Itinerary</Link>
                      </Button>
                      <Button variant="outline">Write Review</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
