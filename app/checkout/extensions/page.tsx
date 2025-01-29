"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const extensions = [
  {
    id: 1,
    title: "3 Days in Crete",
    description:
      "Explore the largest Greek island's ancient ruins, beautiful beaches, and mountain villages.",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=1200",
    duration: "3 days",
    price: 899,
    rating: 4.8,
    reviews: 124,
    highlights: [
      "Visit the Palace of Knossos",
      "Explore Heraklion's Old Town",
      "Relax on Elafonisi Beach",
      "Traditional cooking class",
    ],
  },
  {
    id: 2,
    title: "2 Days in Ancient Delphi",
    description:
      "Visit the ancient sanctuary of Apollo and explore the mountainous heart of Greece.",
    image:
      "https://images.unsplash.com/photo-1602525666213-4e0495b91b52?auto=format&fit=crop&q=80&w=1200",
    duration: "2 days",
    price: 599,
    rating: 4.9,
    reviews: 89,
    highlights: [
      "Tour the Temple of Apollo",
      "Visit the Delphi Museum",
      "Explore Arachova village",
      "Mountain hiking experience",
    ],
  },
  {
    id: 3,
    title: "2 Days in Meteora",
    description: "Discover the remarkable monasteries built atop natural sandstone pillars.",
    image:
      "https://images.unsplash.com/photo-1586714641877-6e5b6f0a63ae?auto=format&fit=crop&q=80&w=1200",
    duration: "2 days",
    price: 649,
    rating: 4.9,
    reviews: 156,
    highlights: [
      "Visit 3 historic monasteries",
      "Sunset photography tour",
      "Rock climbing experience",
      "Traditional Greek dinner",
    ],
  },
];

export default function ExtensionsPage() {
  const router = useRouter();
  const [selectedExtensions, setSelectedExtensions] = useState<number[]>([]);

  const toggleExtension = (id: number) => {
    setSelectedExtensions((prev) =>
      prev.includes(id) ? prev.filter((extId) => extId !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return extensions
      .filter((ext) => selectedExtensions.includes(ext.id))
      .reduce((total, ext) => total + ext.price, 0);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Optional Extensions</h1>
        <p className="text-muted-foreground">
          Enhance your trip with these carefully curated extensions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="space-y-6">
            {extensions.map((extension) => (
              <Card key={extension.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={extension.image}
                    alt={extension.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{extension.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-ef-orange mr-1" />
                      <span className="text-sm">
                        {extension.rating} ({extension.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{extension.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{extension.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>${extension.price} per person</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {extension.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-ef-teal rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`extension-${extension.id}`}
                        checked={selectedExtensions.includes(extension.id)}
                        onChange={() => toggleExtension(extension.id)}
                        className="rounded mr-2"
                      />
                      <label htmlFor={`extension-${extension.id}`}>Add this extension</label>
                    </div>
                    <span className="font-semibold">${extension.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-4 h-fit sticky top-4">
          <h3 className="font-semibold mb-4">Selected Extensions</h3>
          <div className="space-y-2 text-sm">
            {selectedExtensions.length === 0 ? (
              <p className="text-muted-foreground">No extensions selected</p>
            ) : (
              extensions
                .filter((ext) => selectedExtensions.includes(ext.id))
                .map((ext) => (
                  <div key={ext.id} className="flex justify-between">
                    <span>{ext.title}</span>
                    <span>${ext.price}</span>
                  </div>
                ))
            )}
            {selectedExtensions.length > 0 && (
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Total Extensions</span>
                <span>${calculateTotal()}</span>
              </div>
            )}
          </div>
          <div className="border-t mt-4 pt-4">
            <Button className="w-full" onClick={() => router.push("/checkout/traveler-info")}>
              Continue to Traveler Info
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              You can always skip extensions
            </p>
          </div>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => router.push("/checkout")}>
          Back
        </Button>
      </div>
    </div>
  );
}
