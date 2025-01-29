"use client";

import { ToursGridSkeleton } from "@/components/skeletons/tours-grid-skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTourByStatus } from "@/hooks/data/useTours";
import {
  Calendar,
  CreditCard,
  HeadphonesIcon,
  Leaf,
  Lock,
  MapPin,
  Shield,
  Users,
  Users2,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { TourCard } from "./tours/_components/tour-card";

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

const whyTravelersLoveUs = [
  {
    icon: Utensils,
    title: "Authentic Experiences",
    description:
      "Cook with Maasai families, track wildlife with Samburu guides, or drum at a Swahili village festival – no tourist traps, just real connections.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Users2,
    title: "Travel with a Squad",
    description:
      "Join existing groups or start your own. Solo travelers welcome! Meet people who love adventure as much as you do.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Shield,
    title: "Local Expertise, Global Standards",
    description:
      "Every host is vetted. Every trip gives back to communities. Experience authentic travel with peace of mind.",
    image:
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=1200",
  },
];

const trustAndSafety = [
  {
    icon: Lock,
    label: "Verified hosts",
  },
  {
    icon: HeadphonesIcon,
    label: "24/7 support",
  },
  {
    icon: CreditCard,
    label: "Secure payments",
  },
  {
    icon: Leaf,
    label: "Sustainable travel pledge",
  },
];
export default function Home() {
  const { data, isLoading } = useTourByStatus("ACTIVE", 3);
  return (
    <div className="min-h-screen">
      {/* Promo Banner */}
      <div className="bg-ef-teal text-white text-center py-1 text-sm">
        New Year Sale: Save up to $400 & lock in last year&apos;s prices before they increase!
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* <h1 className="text-2xl font-semibold mb-2">
          Immersive guided tours, all around the globe
        </h1>
        <p className="text-muted-foreground mb-8">
          Follow with a friend, the whole family, or solo. However—and whenever—you want to go, our
          expert-planned group travel experiences make it easy to see the world.
        </p> */}

        <div className="grid md:grid-cols-1 gap-6 mb-12">
          <Card className="relative overflow-hidden h-[400px] group">
            <img
              src="/images/arusha.jpg"
              alt="Greece Tours"
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end text-white">
              <h2 className="text-3xl font-bold mb-4">Discover, Travel, Together.</h2>
              <p className="font-semibold ">
                Join small-group trips led by local experts, forge friendships, and explore hidden
                gems{" "}
              </p>

              <p className="font-semibold mb-4">
                from sunrise safaris to cultural exchanges in vibrant communities.
              </p>

              <div className="flex gap-6">
                <Button className="w-fit bg-white text-ef-dark hover:bg-white/90" asChild>
                  <Link href="/tours">Browse all tours</Link>
                </Button>
                <Button className="w-fit bg-white text-ef-dark hover:bg-white/90" asChild>
                  <Link href="/organize">Create a Private Group</Link>
                </Button>
              </div>
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
            Choose from one-of-a-kind group travel experiences.
          </p>

          <div className="max-w-7xl mx-auto px-4 py-8">
            {" "}
            {isLoading ? (
              <ToursGridSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(data || []).map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Why Travelers Love Us Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Travelers Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyTravelersLoveUs.map((item, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-ef-teal" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
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

        {/* Trust & Safety Section */}
        <div className="mb-12 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Trust & Safety</h2>
            <p className="text-muted-foreground">Your peace of mind is our top priority</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustAndSafety.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-ef-teal/10 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-ef-teal" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
