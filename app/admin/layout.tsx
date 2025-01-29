"use client";

import { cn } from "@/lib/utils";
import {
  BarChart,
  Calendar,
  Compass,
  DollarSign,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

// This is a placeholder - in a real app, you'd check the admin session
const isAdmin = true;

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/tours", label: "Tours", icon: Compass },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin/reviews", label: "Reviews", icon: MessageSquare },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart },
  { href: "/admin/finances", label: "Finances", icon: DollarSign },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isAdmin) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside
          className={cn(
            "bg-ef-dark text-white w-64 min-h-screen fixed left-0 top-0 z-30 transition-transform duration-300 md:translate-x-0",
            !isMobileMenuOpen && "-translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-4 space-y-2 mt-20">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 mt-auto">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors w-full">
                <LogOut className="w-5 h-5" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          <header className="h-16 border-b bg-white sticky top-0 z-10">
            <div className="flex items-center px-4 h-full">
              <button
                className="md:hidden mr-4"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex-1">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="font-medium">Admin User</p>
                  <p className="text-sm text-muted-foreground">admin@eftours.com</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-ef-orange text-white flex items-center justify-center">
                  AD
                </div>
              </div>
            </div>
          </header>
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
