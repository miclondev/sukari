import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  Calendar,
  Clock,
  CreditCard,
  HeartHandshake,
  Map,
  Phone,
  Plane,
  Search,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "./_components/feature-card";
import { ProcessStep } from "./_components/process-step";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-ef-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Sukari Works</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Planning your dream trip is easy with Sukari. We handle all the details so you can focus
            on creating unforgettable memories.
          </p>
          <Button asChild size="lg" className="bg-white text-ef-teal hover:bg-white/90">
            <Link href="/tours">Browse Tours</Link>
          </Button>
        </div>
      </div>

      {/* Booking Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Your Tour in 4 Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              icon={Search}
              title="Choose Your Tour"
              description="Browse our collection of carefully crafted tours and find your perfect match."
              step={1}
            />
            <ProcessStep
              icon={Calendar}
              title="Pick Your Dates"
              description="Select from available departure dates that work best with your schedule."
              step={2}
            />
            <ProcessStep
              icon={CreditCard}
              title="Secure Your Spot"
              description="Reserve your place with just $99 down and flexible payment options."
              step={3}
            />
            <ProcessStep
              icon={Plane}
              title="Get Ready to Travel"
              description="Receive your detailed itinerary and prepare for your adventure."
              step={4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Travel with Sukari</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve been creating unforgettable travel experiences for over 50 years.
              Here&apos;s what makes us different.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Shield}
              title="Peace of Mind"
              description="Travel confidently with 24/7 support, comprehensive insurance options, and flexible booking policies."
            />
            <FeatureCard
              icon={Clock}
              title="Save Time"
              description="We handle all the planning, logistics, and reservations so you don't have to."
            />
            <FeatureCard
              icon={Users}
              title="Expert Tour Directors"
              description="Travel with knowledgeable local guides who bring each destination to life."
            />
            <FeatureCard
              icon={HeartHandshake}
              title="Quality & Value"
              description="Get the best experience for your money with our carefully selected accommodations and activities."
            />
            <FeatureCard
              icon={Map}
              title="Curated Itineraries"
              description="Experience the perfect blend of must-see highlights and off-the-beaten-path discoveries."
            />
            <FeatureCard
              icon={Sparkles}
              title="Authentic Experiences"
              description="Immerse yourself in local culture with unique experiences and insider access."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ef-teal text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our travel experts are here to help you plan your perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-ef-teal hover:bg-white/90">
              <Link href="/tours">Explore Tours</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">We&apos;re Here to Help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? Our team of travel experts is ready to assist you at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 text-ef-teal mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak with a travel expert</p>
              <p className="font-semibold">1-800-500-100</p>
            </Card>
            <Card className="p-6 text-center">
              <BadgeCheck className="w-8 h-8 text-ef-teal mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Chat Online</h3>
              <p className="text-muted-foreground mb-4">Live chat with our support team</p>
              <Button variant="outline">Start Chat</Button>
            </Card>
            <Card className="p-6 text-center">
              <Map className="w-8 h-8 text-ef-teal mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Resource Center</h3>
              <p className="text-muted-foreground mb-4">Find answers to common questions</p>
              <Button variant="outline">Visit Help Center</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
