import * as z from "zod";

export const tourSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  originalPrice: z.string().min(1, "Original price is required"),
  days: z.string().min(1, "Number of days is required"),
  groupSize: z.string().min(1, "Group size is required"),
  nextDeparture: z.string().min(1, "Next departure date is required"),
  highlights: z.array(z.string()),
  whatsIncluded: z.array(z.string()).min(1, "At least one item is required"),
  itinerary: z
    .array(
      z.object({
        day: z.number(),
        title: z.string().min(1, "Day title is required"),
        description: z.string().min(1, "Day description is required"),
        activities: z.array(z.string()),
        meals: z.array(z.string()),
      })
    )
    .min(1, "At least one day in the itinerary is required"),
});

export type TourFormValues = z.infer<typeof tourSchema>;
