"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MoreVertical, 
  Mail,
  Phone,
  MapPin,
  Shield,
  ShieldAlert,
  UserX
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    status: "Active",
    role: "Customer",
    joinDate: "2023-12-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@example.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, USA",
    status: "Active",
    role: "Customer",
    joinDate: "2024-01-10",
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma.d@example.com",
    phone: "+1 (555) 345-6789",
    location: "London, UK",
    status: "Suspended",
    role: "Customer",
    joinDate: "2023-11-20",
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@eftours.com",
    phone: "+1 (555) 987-6543",
    location: "Boston, USA",
    status: "Active",
    role: "Admin",
    joinDate: "2023-01-01",
  },
];

export default function AdminUsersPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">User Management</h1>
            <p className="text-muted-foreground">Manage user accounts and permissions</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input className="pl-10" placeholder="Search users..." />
          </div>
          <Button variant="outline">Filters</Button>
        </div>
      </div>

      <Card>
        <div className="divide-y">
          {users.map((user) => (
            <div key={user.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-ef-teal/10 text-ef-teal flex items-center justify-center font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      {user.name}
                      {user.role === "Admin" && (
                        <Shield className="w-4 h-4 ml-2 text-ef-teal" />
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">Joined {user.joinDate}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Mail className="w-4 h-4 mr-2" />
                      Email User
                    </DropdownMenuItem>
                    {user.role !== "Admin" && (
                      <>
                        <DropdownMenuItem>
                          <Shield className="w-4 h-4 mr-2" />
                          Make Admin
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ShieldAlert className="w-4 h-4 mr-2" />
                          Suspend Account
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <UserX className="w-4 h-4 mr-2" />
                          Delete Account
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  {user.email}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  {user.phone}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {user.location}
                </div>
              </div>
              <div className="mt-4">
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}>
                  {user.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}