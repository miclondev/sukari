"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import { Control } from "react-hook-form";
import { TourFormValues } from "./types";

interface HighlightsSectionProps {
  control: Control<TourFormValues>;
  onAddHighlight: () => void;
  onRemoveHighlight: (index: number) => void;
  highlights: string[];
}

export function HighlightsSection({
  control,
  onAddHighlight,
  onRemoveHighlight,
  highlights,
}: HighlightsSectionProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Tour Highlights</h2>
          <Button type="button" variant="outline" onClick={onAddHighlight}>
            <Plus className="w-4 h-4 mr-2" />
            Add Highlight
          </Button>
        </div>

        {highlights.map((_, index) => (
          <FormField
            key={index}
            control={control}
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
                      onClick={() => onRemoveHighlight(index)}
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
  );
}
