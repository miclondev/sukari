import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AdminToursSkeleton() {
  return (
    <Card>
      <div className="divide-y">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-6 flex items-center space-x-4">
            <Skeleton className="w-32 h-24 rounded-lg" />
            <div className="flex-1">
              <Skeleton className="h-6 w-64 mb-2" />
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Skeleton className="h-4 w-4 mr-1" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-4 w-px" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-9" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}