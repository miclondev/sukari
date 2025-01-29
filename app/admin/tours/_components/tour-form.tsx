"use client";

import { Loader } from "@/components/common/loader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateTour, useTour, useUpdateTour } from "@/hooks/data/useTours";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { v4 as uuidv4 } from "uuid";
import { BasicInfoSection } from "../_components/basic-info-section";
import { GenerateTour } from "../_components/generate-ai";
import { HighlightsSection } from "../_components/highlights-section";
import { ImagesSection } from "../_components/images-section";
import { ItinerarySection } from "../_components/itinerary-section";
import { TourFormValues, tourSchema } from "./types";
import { WhatsIncludedSection } from "./whatsincluded-section";

const generateSlugId = (title: string) => {
  // Generate a unique slug id for the tour
  const id = uuidv4();
  const slug = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  return `${slug}-${id.slice(0, 10)}`;
};

export function SingleTourForm() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const createTour = useCreateTour();
  const updateTour = useUpdateTour();
  const { data } = useTour(id);
  const [loading, setLoading] = useState(false);

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const form = useForm<TourFormValues>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      originalPrice: "",
      days: "",
      groupSize: "",
      nextDeparture: "",
      highlights: [""],
      whatsIncluded: [""],
      itinerary: [
        {
          day: 1,
          title: "",
          description: "",
          activities: [""],
          meals: [""],
        },
      ],
    },
  });
  console.log({ errors: form.formState.errors });

  useEffect(() => {
    if (data) {
      form.reset({
        title: data.title || "",
        description: data.description || "",
        price: data?.totalCost ? data.totalCost.toString() : "",
        originalPrice: data?.previousCost ? data.previousCost.toString() : "",
        days: data?.days ? data.days.toString() : "",
        groupSize: data?.groupSize ? data.groupSize.toString() : "",
        nextDeparture: data.nextDeparture || "",
        highlights: (data.highlights as string[]) || [],
        whatsIncluded: (data.whatsIncluded as string[]) || [],
        itinerary: (data.tourItenerary as any[]) || [],
      });
      setSelectedImages((data.images as string[]) || []);
    }
  }, [data]);

  const onSubmit = async (values: TourFormValues) => {
    try {
      setLoading(true);

      if (id) {
        await updateTour.mutateAsync({
          id,
          title: values.title,
          description: values.description,
          totalCost: parseFloat(values.price),
          previousCost: parseFloat(values.originalPrice),
          days: parseInt(values.days),
          groupSize: parseInt(values.groupSize),
          nextDeparture: values.nextDeparture,
          images: selectedImages,
          highlights: values.highlights,
          whatsIncluded: values.whatsIncluded,
          tourItenerary: values.itinerary,
        });
        toast.success("Tour updated successfully");
      } else {
        const response = await createTour.mutateAsync({
          id: generateSlugId(values.title),
          title: values.title,
          orgId: "admin",
          description: values.description,
          status: "INACTIVE",
          totalCost: parseFloat(values.price),
          previousCost: parseFloat(values.originalPrice),
          days: parseInt(values.days),
          groupSize: parseInt(values.groupSize),
          nextDeparture: values.nextDeparture,
          images: selectedImages,
          highlights: values.highlights,
          whatsIncluded: values.whatsIncluded,
          tourItenerary: values.itinerary,
        });

        toast.success("Tour created successfully");
        router.push(`/admin/tours/${response?.id}`);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
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

  const addWhatsIncluded = () => {
    const currentWhatsIncluded = form.getValues("whatsIncluded");
    form.setValue("whatsIncluded", [...currentWhatsIncluded, ""]);
  };

  const removeWhatsIncluded = (index: number) => {
    const currentWhatsIncluded = form.getValues("whatsIncluded");
    form.setValue(
      "whatsIncluded",
      currentWhatsIncluded.filter((_, i) => i !== index)
    );
  };

  const addItineraryDay = () => {
    const currentItinerary = form.getValues("itinerary");
    form.setValue("itinerary", [
      ...currentItinerary,
      {
        day: currentItinerary.length + 1,
        title: "",
        description: "",
        activities: [""],
        meals: [""],
      },
    ]);
  };

  const removeItineraryDay = (index: number) => {
    const currentItinerary = form.getValues("itinerary");
    const updatedItinerary = currentItinerary
      .filter((_, i) => i !== index)
      .map((day, i) => ({ ...day, day: i + 1 }));
    form.setValue("itinerary", updatedItinerary);
  };

  const addActivity = (dayIndex: number) => {
    const currentItinerary = form.getValues("itinerary");
    const currentDay = currentItinerary[dayIndex];
    form.setValue(`itinerary.${dayIndex}.activities`, [...currentDay.activities, ""]);
  };

  const removeActivity = (dayIndex: number, activityIndex: number) => {
    const currentItinerary = form.getValues("itinerary");
    const currentDay = currentItinerary[dayIndex];
    form.setValue(
      `itinerary.${dayIndex}.activities`,
      currentDay.activities.filter((_, i) => i !== activityIndex)
    );
  };

  const addMeal = (dayIndex: number) => {
    const currentItinerary = form.getValues("itinerary");
    const currentDay = currentItinerary[dayIndex];
    form.setValue(`itinerary.${dayIndex}.meals`, [...currentDay.meals, ""]);
  };

  const removeMeal = (dayIndex: number, mealIndex: number) => {
    const currentItinerary = form.getValues("itinerary");
    const currentDay = currentItinerary[dayIndex];
    form.setValue(
      `itinerary.${dayIndex}.meals`,
      currentDay.meals.filter((_, i) => i !== mealIndex)
    );
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex justify-between items-center">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Add New Tour</h1>
          <p className="text-muted-foreground">Create a new tour package</p>
        </div>
        {!id && <GenerateTour form={form} />}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <BasicInfoSection control={form.control} />

          <ImagesSection setSelectedImages={setSelectedImages} selectedImages={selectedImages} />

          <HighlightsSection
            control={form.control}
            onAddHighlight={addHighlight}
            onRemoveHighlight={removeHighlight}
            highlights={form.watch("highlights")}
          />

          <WhatsIncludedSection
            control={form.control}
            onAddWhatsIncluded={addWhatsIncluded}
            onRemoveWhatsIncluded={removeWhatsIncluded}
            whatsIncluded={form.watch("whatsIncluded")}
          />

          <ItinerarySection
            control={form.control}
            onAddItineraryDay={addItineraryDay}
            onRemoveItineraryDay={removeItineraryDay}
            onAddActivity={addActivity}
            onRemoveActivity={removeActivity}
            onAddMeal={addMeal}
            onRemoveMeal={removeMeal}
            itinerary={form.watch("itinerary")}
          />

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/tours")}>
              Cancel
            </Button>
            <Button disabled={loading} type="submit">
              {loading && <Loader />}
              {loading ? "Creating..." : "Create Tour"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
