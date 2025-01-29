"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function TravelerInfoPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Traveler Information</h1>
        <p className="text-muted-foreground">Please provide details for all travelers</p>
      </div>

      <div className="space-y-8">
        {/* Primary Traveler */}
        <div>
          <h2 className="font-semibold mb-4">Primary Traveler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input placeholder="Enter first name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input placeholder="Enter last name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" placeholder="Enter email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input type="tel" placeholder="Enter phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Second Traveler */}
        <div>
          <h2 className="font-semibold mb-4">Second Traveler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input placeholder="Enter first name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input placeholder="Enter last name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" placeholder="Enter email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input type="tel" placeholder="Enter phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={() => router.push("/checkout")}>
            Back
          </Button>
          <Button onClick={() => router.push("/checkout/payment")}>Continue to Payment</Button>
        </div>
      </div>
    </div>
  );
}
