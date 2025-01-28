"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { Control } from "react-hook-form";
import { TourFormValues } from "./types";

interface ItinerarySectionProps {
  control: Control<TourFormValues>;
  onAddItineraryDay: () => void;
  onRemoveItineraryDay: (index: number) => void;
  onAddActivity: (dayIndex: number) => void;
  onRemoveActivity: (dayIndex: number, activityIndex: number) => void;
  onAddMeal: (dayIndex: number) => void;
  onRemoveMeal: (dayIndex: number, mealIndex: number) => void;
  itinerary: TourFormValues["itinerary"];
}

export function ItinerarySection({
  control,
  onAddItineraryDay,
  onRemoveItineraryDay,
  onAddActivity,
  onRemoveActivity,
  onAddMeal,
  onRemoveMeal,
  itinerary,
}: ItinerarySectionProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Itinerary</h2>
        </div>

        {itinerary.map((day, dayIndex) => (
          <div key={dayIndex} className="space-y-4 pt-4 border-t first:pt-0 first:border-t-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Day {day.day}</h3>
              {dayIndex > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveItineraryDay(dayIndex)}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>

            <FormField
              control={control}
              name={`itinerary.${dayIndex}.title`}
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
              control={control}
              name={`itinerary.${dayIndex}.description`}
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

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <FormLabel>Activities</FormLabel>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onAddActivity(dayIndex)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Activity
                  </Button>
                </div>
                {day.activities.map((_, activityIndex) => (
                  <FormField
                    key={activityIndex}
                    control={control}
                    name={`itinerary.${dayIndex}.activities.${activityIndex}`}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2 mb-2">
                          <FormControl>
                            <Input placeholder="Enter activity" {...field} />
                          </FormControl>
                          {activityIndex > 0 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => onRemoveActivity(dayIndex, activityIndex)}
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

              <div>
                <div className="flex items-center justify-between mb-2">
                  <FormLabel>Included Meals</FormLabel>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onAddMeal(dayIndex)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Meal
                  </Button>
                </div>
                {day.meals.map((_, mealIndex) => (
                  <FormField
                    key={mealIndex}
                    control={control}
                    name={`itinerary.${dayIndex}.meals.${mealIndex}`}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2 mb-2">
                          <FormControl>
                            <Input placeholder="Enter meal (e.g., Breakfast, Lunch)" {...field} />
                          </FormControl>
                          {mealIndex > 0 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => onRemoveMeal(dayIndex, mealIndex)}
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
            </div>
          </div>
        ))}

        <Button type="button" variant="outline" className="w-full" onClick={onAddItineraryDay}>
          <Plus className="w-4 h-4 mr-2" />
          Add Day {itinerary.length + 1}
        </Button>
      </div>
    </Card>
  );
}
