import { TourCardSkeleton } from "./tour-card-skeleton";

export function ToursGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <TourCardSkeleton key={i} />
      ))}
    </div>
  );
}