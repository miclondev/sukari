"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Filter, MoreVertical, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const bookings = [
  {
    id: "BOK001",
    user: "Sarah Johnson",
    tour: "Greece Explorer",
    date: "2024-06-15",
    amount: 2899,
    status: "Confirmed",
    paymentStatus: "Paid",
    travelers: 2,
  },
  {
    id: "BOK002",
    user: "Michael Chen",
    tour: "Italian Adventure",
    date: "2024-07-01",
    amount: 3199,
    status: "Pending",
    paymentStatus: "Partial",
    travelers: 4,
  },
  {
    id: "BOK003",
    user: "Emma Davis",
    tour: "Paris & London",
    date: "2024-06-20",
    amount: 2799,
    status: "Confirmed",
    paymentStatus: "Paid",
    travelers: 1,
  },
  {
    id: "BOK004",
    user: "James Wilson",
    tour: "Spanish Delight",
    date: "2024-08-05",
    amount: 3099,
    status: "Cancelled",
    paymentStatus: "Refunded",
    travelers: 2,
  },
  {
    id: "BOK005",
    user: "Lisa Anderson",
    tour: "Tokyo Express",
    date: "2024-09-10",
    amount: 4299,
    status: "Confirmed",
    paymentStatus: "Pending",
    travelers: 3,
  },
];

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Bookings</h1>
          <p className="text-muted-foreground">Manage and track all tour bookings</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>Add Booking</Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input className="pl-10" placeholder="Search bookings..." />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Booking ID</th>
                <th className="text-left p-4 font-medium">Customer</th>
                <th className="text-left p-4 font-medium">Tour</th>
                <th className="text-left p-4 font-medium">Date</th>
                <th className="text-left p-4 font-medium">Amount</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Payment</th>
                <th className="text-left p-4 font-medium">Travelers</th>
                <th className="p-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-muted/5">
                  <td className="p-4">{booking.id}</td>
                  <td className="p-4">{booking.user}</td>
                  <td className="p-4">{booking.tour}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                      {booking.date}
                    </div>
                  </td>
                  <td className="p-4">${booking.amount}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      booking.status === "Confirmed" 
                        ? "bg-green-100 text-green-800"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      booking.paymentStatus === "Paid" 
                        ? "bg-green-100 text-green-800"
                        : booking.paymentStatus === "Partial"
                        ? "bg-blue-100 text-blue-800"
                        : booking.paymentStatus === "Refunded"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="p-4">{booking.travelers}</td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                        <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Cancel Booking</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}