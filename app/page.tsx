"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";

const featuredTours = [
  {
    id: 1,
    slug: "greece-athens-mykonos-santorini",
    title: "A Week in Greece: Athens, Mykonos & Santorini",
    price: 2899,
    originalPrice: 3299,
    rating: 4.8,
    days: "8 days",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    slug: "italy-venice-florence-rome",
    title: "A Week in Italy: Venice, Florence & Rome",
    price: 2409,
    originalPrice: 2899,
    rating: 4.9,
    days: "7 days",
    image:
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    slug: "london-paris-rome",
    title: "London, Paris & Rome",
    price: 3239,
    originalPrice: 3599,
    rating: 4.7,
    days: "10 days",
    image:
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Promo Banner */}
      <div className="bg-ef-teal text-white text-center py-1 text-sm">
        New Year Sale: Save up to $400 & lock in last year&apos;s prices before they increase!
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">
          Immersive guided tours, all around the globe
        </h1>
        <p className="text-muted-foreground mb-8">
          Follow with a friend, the whole family, or solo. However—and whenever—you want to go, our
          expert-planned group travel experiences make it easy to see the world.
        </p>

        <div className="grid md:grid-cols-1 gap-6 mb-12">
          <Card className="relative overflow-hidden h-[400px] group">
            <img
              src="/images/arusha.jpg"
              alt="Greece Tours"
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end text-white">
              <h2 className="text-3xl font-bold mb-4">
                Choose from our curated selection of tours
              </h2>
              <Button className="w-fit bg-white text-ef-dark hover:bg-white/90">
                Browse all tours
              </Button>
            </div>
          </Card>

          {/* <Card className="bg-ef-teal text-white p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">THE NEW YEAR SALE</h3>
              <h2 className="text-3xl font-bold">Save up to $400 & lock in your lowest price</h2>
              <p className="text-white/80">Taking a dream trip is a resolution worth making—and with us, it&apos;s easy to keep. Book by 1/31 to save. Plus, beat the price increase!*</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-ef-teal">
                Shop the sale
              </Button>
            </div>
          </Card> */}
        </div>

        {/* Planning Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-ef-teal text-white p-6">
            <h3 className="text-xl font-bold mb-2">Experiential travel made easy</h3>
            <p className="text-white/80 mb-4">
              You dream it. We&apos;ll take care of every last detail.
            </p>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-ef-teal"
            >
              Find out how
            </Button>
          </Card>

          {[
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Pick your perfect trip",
              description: "Choose from 200+ tours around the globe",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Put just $99 down",
              description: "That's all it takes to secure your spot on one of our group tours",
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Prep your packing list",
              description:
                "While you're deciding what to take, we'll be busy planning every detail",
            },
          ].map((step, index) => (
            <Card key={index} className="p-6 border-ef-light">
              <div className="mb-4 text-ef-orange">{step.icon}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Featured Tours */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ready to start traveling?</h2>
          <p className="text-muted-foreground mb-8">
            Choose from more than 200 one-of-a-kind group travel experiences, carefully designed by
            experts, led by locals, and made for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden border-ef-light group">
                <Link href={`/tours/${tour.slug}`}>
                  <div className="relative h-48">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-ef-orange transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-ef-orange mr-1" />
                      <span className="text-sm text-muted-foreground">{tour.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">From</p>
                        <p className="font-semibold">${tour.price}</p>
                        <p className="text-sm line-through text-muted-foreground">
                          ${tour.originalPrice}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="text-sm border-ef-orange text-ef-orange hover:bg-ef-orange hover:text-white"
                      >
                        View tour
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <Card className="p-8 text-center mb-12 border-ef-light">
          <h2 className="text-2xl font-bold mb-4">Get travel deals and news right to your inbox</h2>
          <div className="max-w-md mx-auto flex gap-2">
            <Input type="email" placeholder="Email address" className="flex-1" />
            <Button className="bg-ef-orange hover:bg-ef-slate text-white">Submit</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
