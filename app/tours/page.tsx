"use client";

import { ToursGridSkeleton } from "@/components/skeletons/tours-grid-skeleton";
import { useTourByStatus } from "@/hooks/data/useTours";
import { TourCard } from "./_components/tour-card";

export default function ToursPage() {
  const { data, isLoading } = useTourByStatus("ACTIVE");
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-ef-teal text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Tours</h1>
          <p className="text-white/90 max-w-2xl">
            Choose from carefully crafted itineraries. Each tour is designed to immerse you in the
            local culture and create unforgettable memories.
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
        {" "}
        {isLoading ? (
          <ToursGridSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data || []).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
