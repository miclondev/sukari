"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const tourSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  originalPrice: z.string().min(1, "Original price is required"),
  days: z.string().min(1, "Number of days is required"),
  groupSize: z.string().min(1, "Group size is required"),
  nextDeparture: z.string().min(1, "Next departure date is required"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  highlights: z.array(z.string()).min(1, "At least one highlight is required"),
  itinerary: z
    .array(
      z.object({
        day: z.number(),
        title: z.string().min(1, "Day title is required"),
        description: z.string().min(1, "Day description is required"),
      })
    )
    .min(1, "At least one day in the itinerary is required"),
});

type TourForm = z.infer<typeof tourSchema>;

export default function NewTourPage() {
  const router = useRouter();
  const form = useForm<TourForm>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      originalPrice: "",
      days: "",
      groupSize: "",
      nextDeparture: "",
      images: [""],
      highlights: [""],
      itinerary: [{ day: 1, title: "", description: "" }],
    },
  });

  const onSubmit = (values: TourForm) => {
    // Mock creating a new tour
    console.log("New tour values:", values);
    router.push("/admin/tours");
  };

  const addImage = () => {
    const currentImages = form.getValues("images");
    form.setValue("images", [...currentImages, ""]);
  };

  const removeImage = (index: number) => {
    const currentImages = form.getValues("images");
    form.setValue(
      "images",
      currentImages.filter((_, i) => i !== index)
    );
  };

  const addHighlight = () => {
    const currentHighlights = form.getValues("highlights");
    form.setValue("highlights", [...currentHighlights, ""]);
  };

  const removeHighlight = (index: number) => {
    const currentHighlights = form.getValues("highlights");
    form.setValue(
      "highlights",
      currentHighlights.filter((_, i) => i !== index)
    );
  };

  const addItineraryDay = () => {
    const currentItinerary = form.getValues("itinerary");
    form.setValue("itinerary", [
      ...currentItinerary,
      { day: currentItinerary.length + 1, title: "", description: "" },
    ]);
  };

  const removeItineraryDay = (index: number) => {
    const currentItinerary = form.getValues("itinerary");
    const updatedItinerary = currentItinerary
      .filter((_, i) => i !== index)
      .map((day, i) => ({ ...day, day: i + 1 }));
    form.setValue("itinerary", updatedItinerary);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Add New Tour</h1>
        <p className="text-muted-foreground">Create a new tour package</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="p-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Basic Information</h2>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter tour title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter tour description"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price ($)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="originalPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Original Price ($)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter original price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="days"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (days)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter number of days" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="groupSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Group Size</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 12-15 travelers" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="nextDeparture"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Next Departure</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Tour Images</h2>
                <Button type="button" variant="outline" onClick={addImage}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Image
                </Button>
              </div>

              {form.watch("images").map((_, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={`images.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <Input placeholder="Enter image URL" {...field} />
                        </FormControl>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeImage(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Tour Highlights</h2>
                <Button type="button" variant="outline" onClick={addHighlight}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Highlight
                </Button>
              </div>

              {form.watch("highlights").map((_, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={`highlights.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <Input placeholder="Enter highlight" {...field} />
                        </FormControl>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeHighlight(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Itinerary</h2>
                <Button type="button" variant="outline" onClick={addItineraryDay}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Day
                </Button>
              </div>

              {form.watch("itinerary").map((_, index) => (
                <div key={index} className="space-y-4 pt-4 border-t first:pt-0 first:border-t-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Day {index + 1}</h3>
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItineraryDay(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name={`itinerary.${index}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter day title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`itinerary.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter day description"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/tours")}>
              Cancel
            </Button>
            <Button type="submit">Create Tour</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
