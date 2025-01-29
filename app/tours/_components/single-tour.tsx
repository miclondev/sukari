"use client";
import { TourCardSkeleton } from "@/components/skeletons/tour-card-skeleton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTour } from "@/hooks/data/useTours";
import { Calendar, Clock, Globe, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export function SingleTour() {
  const params = useParams();
  const id = params?.slug as string;
  const { data, isLoading } = useTour(id);

  if (isLoading) {
    return <TourCardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[25vh] min-h-[200px]">
        <Image
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200"
          alt={data?.title || "Tour Image"}
          width={1920}
          height={200}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data?.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{data?.days} days</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{data?.groupSize} travelers</span>
              </div>
              {/* <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-ef-orange" />
                <span>
                  {data?.rating} ({data?.reviews} reviews)
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2">
            <div className="space-y-8 mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                <p className="text-muted-foreground">{data?.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Trip Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(data?.highlights || []).map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Globe className="w-5 h-5 mr-2 mt-1 text-ef-teal" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 mb-6">
              {" "}
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              {(data?.tourItenerary || []).map((day, index) => (
                <div key={index} className="border-l-2 border-ef-teal pl-4">
                  <h3 className="font-bold">
                    Day {day?.day}: {day?.title}
                  </h3>
                  <p className="text-muted-foreground">{day?.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {" "}
              <h2 className="text-2xl font-bold mb-4">What&apos;s Included</h2>
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
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <Card className="p-6 sticky top-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${data?.totalCost}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ${data?.previousCost}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Next departure: {data?.nextDeparture}</span>
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
