"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, DollarSign, Users, Globe, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Revenue",
    value: "$124,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Active Users",
    value: "2,450",
    change: "+18.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Total Bookings",
    value: "185",
    change: "-8.1%",
    trend: "down",
    icon: Calendar,
  },
  {
    label: "Active Tours",
    value: "24",
    change: "+4.3%",
    trend: "up",
    icon: Globe,
  },
];

const revenueData = [
  { month: "Jan", revenue: 65000 },
  { month: "Feb", revenue: 72000 },
  { month: "Mar", revenue: 85000 },
  { month: "Apr", revenue: 95000 },
  { month: "May", revenue: 102000 },
  { month: "Jun", revenue: 124500 },
];

const recentBookings = [
  {
    id: 1,
    user: "Sarah Johnson",
    tour: "Greece Explorer",
    date: "2024-06-15",
    amount: 2899,
    status: "Confirmed",
  },
  {
    id: 2,
    user: "Michael Chen",
    tour: "Italian Adventure",
    date: "2024-07-01",
    amount: 3199,
    status: "Pending",
  },
  {
    id: 3,
    user: "Emma Davis",
    tour: "Paris & London",
    date: "2024-06-20",
    amount: 2799,
    status: "Confirmed",
  },
];

const CustomBarChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#E7E5DF" />
      <XAxis
        dataKey="month"
        stroke="#596475"
        fontSize={12}
        tickLine={false}
        axisLine={{ stroke: '#E7E5DF' }}
      />
      <YAxis
        stroke="#596475"
        fontSize={12}
        tickLine={false}
        axisLine={{ stroke: '#E7E5DF' }}
        tickFormatter={(value) => `$${value.toLocaleString()}`}
      />
      <Tooltip
        cursor={{ fill: 'rgba(8, 103, 136, 0.1)' }}
        contentStyle={{
          backgroundColor: '#fff',
          border: '1px solid #E7E5DF',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
      />
      <Bar
        dataKey="revenue"
        fill="#086788"
        radius={[4, 4, 0, 0]}
        maxBarSize={50}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-ef-teal/10 rounded-lg">
                  <Icon className="w-6 h-6 text-ef-teal" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Revenue Chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
            <p className="text-sm text-muted-foreground">Monthly revenue for the current year</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Monthly</Button>
            <Button variant="outline" size="sm">Quarterly</Button>
            <Button variant="outline" size="sm">Yearly</Button>
          </div>
        </div>
        <div className="h-[400px]">
          <CustomBarChart />
        </div>
      </Card>

      {/* Recent Bookings */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Recent Bookings</h2>
            <p className="text-sm text-muted-foreground">Latest tour bookings and their status</p>
          </div>
          <Link href="/admin/bookings">
            <Button variant="outline">View All Bookings</Button>
          </Link>
        </div>
        <Card>
          <div className="divide-y">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="p-6 flex items-center justify-between hover:bg-muted/5 transition-colors">
                <div>
                  <h3 className="font-medium">{booking.user}</h3>
                  <p className="text-sm text-muted-foreground">{booking.tour}</p>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{booking.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${booking.amount.toLocaleString()}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${
                    booking.status === "Confirmed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}