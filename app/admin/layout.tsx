import { redirect } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Compass, 
  Calendar, 
  BarChart, 
  Settings,
  MessageSquare,
  DollarSign,
  LogOut 
} from "lucide-react";
import Link from "next/link";

// This is a placeholder - in a real app, you'd check the admin session
const isAdmin = true;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <div className="mb-8">
            <Link href="/admin" className="text-2xl font-bold">EF Admin</Link>
          </div>
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
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium">Admin User</p>
                <p className="text-sm text-muted-foreground">admin@eftours.com</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-ef-orange text-white flex items-center justify-center">
                AD
              </div>
            </div>
          </header>
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}