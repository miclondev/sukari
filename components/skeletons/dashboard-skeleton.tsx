import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-lg" />
              <div>
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upcoming Trip */}
      <div>
        <Skeleton className="h-8 w-48 mb-4" />
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Skeleton className="w-full md:w-64 h-48 rounded-lg" />
            <div className="flex-1 space-y-4">
              <div>
                <Skeleton className="h-8 w-3/4 mb-2" />
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Skeleton className="h-4 w-32 mb-1" />
                  <Skeleton className="h-8 w-24" />
                </div>
                <div className="space-x-2">
                  <Skeleton className="h-9 w-32 inline-block" />
                  <Skeleton className="h-9 w-32 inline-block" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Bookings */}
      <div>
        <Skeleton className="h-8 w-48 mb-4" />
        <Card>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-6 border-b last:border-b-0">
              <div className="flex items-center justify-between">
                <div>
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="text-right">
                  <Skeleton className="h-6 w-24 mb-2" />
                  <Skeleton className="h-5 w-20 inline-block" />
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}