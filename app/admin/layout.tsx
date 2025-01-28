import {
  BarChart,
  Calendar,
  Compass,
  DollarSign,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

// This is a placeholder - in a real app, you'd check the admin session
const isAdmin = true;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!isAdmin) {
    redirect("/login");
  }

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

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-ef-dark text-white p-6">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors w-full mt-8 text-left">
              <LogOut className="w-5 h-5" />
              <span>Log out</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="h-16 border-b bg-white flex items-center px-8">
            <div className="flex-1">
              <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            </div>
          </header>
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
