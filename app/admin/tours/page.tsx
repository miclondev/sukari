"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDeleteTour, useOrgTours } from "@/hooks/data/useTours";
import { Calendar, Eye, Pen, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminToursPage() {
  const { data } = useOrgTours("admin");
  const deleteTour = useDeleteTour();

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this tour?");
    if (confirm) {
      await deleteTour.mutateAsync(id);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">Tours Management</h1>
            <p className="text-muted-foreground">Manage and organize your tour packages</p>
          </div>
          <Button asChild>
            <Link href="/admin/tours/new">
              <Plus className="w-4 h-4 mr-2" />
              Add New Tour
            </Link>
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
          {(data || []).map((tour) => (
            <div key={tour.id} className="p-6 flex items-center space-x-4">
              <div className="w-32 h-24 rounded-lg overflow-hidden">
                <img
                  src={
                    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200"
                  }
                  alt={tour?.title || "Tour Image"}
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
                  <span>${tour.totalCost}</span>
                  <span>|</span>
                  <span>Active</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/tours/${tour.id}`} target="_blank">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/tours/${tour.id}`}>
                    <Pen className="w-4 h-4 mr-2" />
                    Edit
                  </Link>
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDelete(tour.id as string)}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
