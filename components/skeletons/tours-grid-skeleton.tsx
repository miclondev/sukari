import { TourCardSkeleton } from "./tour-card-skeleton";

export function ToursGridSkeleton({ length = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length }).map((_, i) => (
        <TourCardSkeleton key={i} />
      ))}
    </div>
  );
}
