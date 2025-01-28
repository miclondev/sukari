"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import { Control } from "react-hook-form";
import { TourFormValues } from "./types";

interface WhatsIncludedSectionProps {
  control: Control<TourFormValues>;
  onAddWhatsIncluded: () => void;
  onRemoveWhatsIncluded: (index: number) => void;
  whatsIncluded: string[];
}

export function WhatsIncludedSection({
  control,
  onAddWhatsIncluded,
  onRemoveWhatsIncluded,
  whatsIncluded,
}: WhatsIncludedSectionProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Whats Included </h2>
          <Button type="button" variant="outline" onClick={onAddWhatsIncluded}>
            <Plus className="w-4 h-4 mr-2" />
            Add Whats Included
          </Button>
        </div>

        {whatsIncluded.map((_, index) => (
          <FormField
            key={index}
            control={control}
            name={`whatsIncluded.${index}`}
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
                      onClick={() => onRemoveWhatsIncluded(index)}
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
