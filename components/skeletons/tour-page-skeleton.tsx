import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TourPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Skeleton className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-8">
              <Skeleton className="h-8 w-48 mb-6" />
              <Skeleton className="h-24 w-full mb-8" />
              <Skeleton className="h-8 w-48 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-start">
                    <Skeleton className="h-5 w-5 mr-2 mt-1" />
                    <Skeleton className="h-5 flex-1" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <Skeleton className="h-8 w-48 mb-6" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="mb-8 last:mb-0">
                  <div className="flex items-center mb-4">
                    <Skeleton className="h-6 w-32 mr-4" />
                    <Skeleton className="h-6 flex-1" />
                  </div>
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <Card className="p-6 sticky top-4">
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-8 w-32" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-4 w-40 mx-auto" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}