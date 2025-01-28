"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { href: "/tours", label: "Browse Tours" },
  { href: "/organize", label: "Organize Group" },
  { href: "/company-retreats", label: "Company Retreats" },
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
];

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={cn("space-y-1 md:space-y-0 md:space-x-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block md:inline-block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-gray-50 md:hover:bg-transparent transition-colors rounded-md"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
