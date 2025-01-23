"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Search, 
  Plus, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toursData } from "@/app/tours/[slug]/page";

export default function AdminToursPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">Tours Management</h1>
            <p className="text-muted-foreground">Manage and organize your tour packages</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Tour
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input className="pl-10" placeholder="Search tours..." />
          </div>
          <Button variant="outline">Filters</Button>
        </div>
      </div>

      <Card>
        <div className="divide-y">
          {Object.entries(toursData).map(([slug, tour]) => (
            <div key={slug} className="p-6 flex items-center space-x-4">
              <div className="w-32 h-24 rounded-lg overflow-hidden">
                <img
                  src={tour.images[0]}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{tour.title}</h3>
                <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{tour.days} days</span>
                  </div>
                  <span>|</span>
                  <span>${tour.price}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}