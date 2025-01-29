import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ITour } from "@/config/types";
import { Clock, Users } from "lucide-react";
import Link from "next/link";

export type Tour = {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  days: number;
  groupSize: string;
  image: string;
  destinations: string[];
};

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: { tour: ITour }) {
  const discount =
    tour.totalCost && tour.previousCost
      ? Math.round(((tour.totalCost - tour.previousCost) / tour.totalCost) * 100)
      : 0;

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <Link href={`/tours/${tour.id}`}>
        <div className="relative">
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-ef-orange text-white px-2 py-1 rounded-md text-sm font-medium">
              Save {discount}%
            </div>
          )}
          <div className="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200"
              alt={tour?.title || "Tour Image"}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            {/* {tour.destinations.flatMap((destination, index) => [
              index > 0 && <span key={`dot-${index}`}>•</span>,
              <span key={destination}>{destination}</span>,
            ])} */}
          </div>
          <h3 className="font-semibold mb-2 group-hover:text-ef-teal transition-colors line-clamp-2">
            {tour.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{tour.days} days</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{tour.groupSize}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <div>
              <div className="flex items-center mb-1">
                {/* <Star className="w-4 h-4 text-ef-orange mr-1" /> */}
                {/* <span className="text-sm">
                  {tour.rating} ({tour.reviews} reviews)
                </span> */}
              </div>
              <div>
                <span className="font-semibold text-lg">${tour.totalCost}</span>
                {discount > 0 && (
                  <span className="text-sm text-muted-foreground line-through ml-2">
                    ${tour.previousCost}
                  </span>
                )}
              </div>
            </div>
            <Button
              variant="outline"
              className="text-ef-teal border-ef-teal hover:bg-ef-teal hover:text-white"
            >
              View tour
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
}
