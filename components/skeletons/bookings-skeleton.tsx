import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BookingsSkeleton() {
  return (
    <Card>
      <div className="divide-y">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Skeleton className="h-6 w-64 mb-2" />
                <div className="flex items-center mt-2">
                  <Skeleton className="h-4 w-4 mr-1" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <Skeleton className="h-4 w-24" />
              <div className="space-x-2">
                <Skeleton className="h-9 w-32 inline-block" />
                <Skeleton className="h-9 w-32 inline-block" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}