import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Compass,
  HeartHandshake,
  MapPin,
  Mountain,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    name: "Serengeti, Tanzania",
    description: "Team building amidst the Great Migration",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Cape Town, South Africa",
    description: "Blend of urban innovation and natural beauty",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Masai Mara, Kenya",
    description: "Leadership lessons from the African savanna",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Combine business strategy sessions with inspiring African landscapes",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Strengthen bonds through shared adventures and cultural experiences",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Spark creativity in unique and inspiring environments",
  },
  {
    icon: HeartHandshake,
    title: "Cultural Exchange",
    description: "Learn from local communities and gain global perspective",
  },
];

export default function CompanyRetreatsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1486804062127-81e0c39d4ac6?auto=format&fit=crop&q=80&w=1200"
          alt="African Safari Corporate Retreat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Team in Africa</h1>
            <p className="text-xl max-w-2xl mb-8">
              Combine strategic planning with unforgettable experiences in Africa&apos;s most
              inspiring locations. Create lasting impact through immersive corporate retreats.
            </p>
            <Button size="lg" className="bg-ef-orange hover:bg-ef-orange/90">
              Plan Your Retreat
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Africa Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Africa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Africa offers unique opportunities for corporate teams to grow, learn, and bond in
              extraordinary settings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-ef-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-ef-teal" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully selected locations that combine luxury accommodations,
              meeting facilities, and extraordinary experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-ef-teal mr-2" />
                    <h3 className="font-semibold">{destination.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{destination.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Retreat Planning</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building2 className="w-5 h-5 text-ef-teal mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Luxury Accommodations</h3>
                    <p className="text-muted-foreground">
                      Hand-picked lodges and hotels that combine comfort with authenticity
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Compass className="w-5 h-5 text-ef-teal mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Curated Activities</h3>
                    <p className="text-muted-foreground">
                      From safari adventures to cultural exchanges and team challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mountain className="w-5 h-5 text-ef-teal mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1">Leadership Development</h3>
                    <p className="text-muted-foreground">
                      Structured programs that align with your company&apos;s goals
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" asChild>
                <Link href="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200"
                alt="Team Building Activities"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ef-teal text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Corporate Retreat?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our team of experts will help you create a customized experience that meets your
            objectives and exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ef-teal hover:bg-white/90">
              Request Proposal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
