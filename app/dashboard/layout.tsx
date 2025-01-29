import { Calendar, Compass, CreditCard, LayoutDashboard, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

// This is a placeholder - in a real app, you'd check the session
const isAuthenticated = true;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated) {
    redirect("/login");
  }

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/trips", label: "My Trips", icon: Compass },
    { href: "/dashboard/bookings", label: "Bookings", icon: Calendar },
    { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-ef-teal text-white p-6">
          <div className="mb-8">
            <Link href="/" className="text-2xl font-bold">
              Sukari
            </Link>
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
              <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>
          </header>
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
