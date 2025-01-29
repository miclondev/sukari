"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Globe, Heart, Linkedin, Mail, MapPin, Twitter, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    value: "50+",
    label: "Years of Experience",
    description: "Leading educational travel since 1970",
  },
  {
    value: "80+",
    label: "Countries",
    description: "Destinations across all continents",
  },
  {
    value: "1M+",
    label: "Travelers",
    description: "Students and adults who've traveled with us",
  },
  {
    value: "2000+",
    label: "Local Guides",
    description: "Expert guides around the world",
  },
];

const values = [
  {
    icon: Globe,
    title: "Cultural Understanding",
    description: "We believe travel breaks down barriers and fosters global citizenship",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections between travelers and local communities",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Commitment to quality and safety in everything we do",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to creating transformative travel experiences",
  },
];

const team = [
  {
    name: "Sarah Anderson",
    role: "Chief Executive Officer",
    location: "Boston, MA",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
    bio: "20+ years of experience in educational travel. Previously led international education initiatives.",
    social: {
      email: "sarah.a@eftours.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
    bio: "Expert in global operations and logistics. Passionate about sustainable travel practices.",
    social: {
      email: "michael.c@eftours.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emma Davis",
    role: "Director of Tour Development",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500",
    bio: "15+ years crafting immersive educational experiences across Europe and Asia.",
    social: {
      email: "emma.d@eftours.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Wilson",
    role: "Head of Customer Experience",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500",
    bio: "Dedicated to ensuring every traveler has an exceptional journey from start to finish.",
    social: {
      email: "james.w@eftours.com",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
          alt="Team Meeting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Lives Through Travel
            </h1>
            <p className="text-xl max-w-2xl text-white/90">
              For over 50 years, we&apos;ve been helping students and adults discover the world
              through immersive cultural experiences and educational travel.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <p className="text-4xl font-bold text-ef-teal mb-2">{stat.value}</p>
                <p className="font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-ef-teal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 mb-8">
              To empower educators, students, and curious travelers to become true global citizens
              through cultural exchange and immersive experiences that go beyond traditional
              tourism.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-ef-teal"
              asChild
            >
              <Link href="/how-it-works">Learn How We Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-ef-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-ef-teal" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of travel and education experts is dedicated to creating
              meaningful experiences that last a lifetime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-ef-teal mb-2">{member.role}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{member.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`mailto:${member.social.email}`}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ef-orange text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Community</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Start your journey with Sukari and become part of a worldwide network of travelers,
            educators, and cultural enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ef-orange hover:bg-white/90" asChild>
              <Link href="/tours">Browse Tours</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
