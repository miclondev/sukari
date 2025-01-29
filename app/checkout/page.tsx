"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Minus, Plus, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const [travelers, setTravelers] = useState(2);
  const [roomType, setRoomType] = useState("double");
  const [flightOption, setFlightOption] = useState("own");

  // Mock tour data - in a real app, this would come from your cart or context
  const tour = {
    title: "A Week in Greece: Athens, Mykonos & Santorini",
    date: "Apr 15, 2024",
    duration: "8 days",
    basePrice: 2899,
    deposit: 99,
    roomPrices: {
      single: 600,
      double: 0,
      triple: -200,
    },
  };

  const handleTravelersChange = (action: "increase" | "decrease") => {
    if (action === "increase" && travelers < 10) {
      setTravelers((prev) => prev + 1);
    } else if (action === "decrease" && travelers > 1) {
      setTravelers((prev) => prev - 1);
    }
  };

  const calculateTotal = () => {
    const baseCost = tour.basePrice * travelers;
    const roomCost = tour.roomPrices[roomType as keyof typeof tour.roomPrices] * travelers;
    return baseCost + roomCost;
  };

  const totalPrice = calculateTotal();
  const depositDue = tour.deposit * travelers;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Review Tour Details</h1>
        <p className="text-muted-foreground">Please review and customize your tour selection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Tour Overview */}
          <div>
            <h2 className="font-semibold mb-4">{tour.title}</h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Departure: {tour.date}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{travelers} travelers</span>
              </div>
            </div>
          </div>

          {/* Number of Travelers */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Number of Travelers</h3>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleTravelersChange("decrease")}
                disabled={travelers <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-xl font-medium w-8 text-center">{travelers}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleTravelersChange("increase")}
                disabled={travelers >= 10}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* Room Selection */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Room Preference</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="roomType"
                      value="double"
                      checked={roomType === "double"}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="rounded-full"
                    />
                    <span>Double Room</span>
                  </label>
                  <p className="text-sm text-muted-foreground mt-1 ml-6">
                    Shared room for two (included in base price)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="roomType"
                      value="single"
                      checked={roomType === "single"}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="rounded-full"
                    />
                    <span>Single Room</span>
                  </label>
                  <p className="text-sm text-muted-foreground mt-1 ml-6">
                    Private room for one (+$600 per person)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="roomType"
                      value="triple"
                      checked={roomType === "triple"}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="rounded-full"
                    />
                    <span>Triple Room</span>
                  </label>
                  <p className="text-sm text-muted-foreground mt-1 ml-6">
                    Shared room for three (-$200 per person)
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Flight Options */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Flight Options</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="flightOption"
                      value="own"
                      checked={flightOption === "own"}
                      onChange={(e) => setFlightOption(e.target.value)}
                      className="rounded-full"
                    />
                    <span>I&apos;ll book my own flights</span>
                  </label>
                  <p className="text-sm text-muted-foreground mt-1 ml-6">
                    Book your own flights and meet the group at the hotel
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="flightOption"
                      value="contact"
                      checked={flightOption === "contact"}
                      onChange={(e) => setFlightOption(e.target.value)}
                      className="rounded-full"
                    />
                    <span>Contact me about flights</span>
                  </label>
                  <p className="text-sm text-muted-foreground mt-1 ml-6">
                    Our team will contact you to discuss flight options
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Price Summary */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Price Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Base Tour ({travelers} travelers)</span>
              <span>${tour.basePrice * travelers}</span>
            </div>
            {roomType !== "double" && (
              <div className="flex justify-between">
                <span>Room Preference</span>
                <span>{tour.roomPrices[roomType as keyof typeof tour.roomPrices] * travelers}</span>
              </div>
            )}
            <div className="flex justify-between font-medium pt-2 border-t">
              <span>Total Price</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-ef-teal">
              <span>Deposit Due Today</span>
              <span>${depositDue}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Remaining Balance</span>
              <span>${totalPrice - depositDue}</span>
            </div>
          </div>
          <div className="border-t mt-4 pt-4">
            <Button className="w-full" onClick={() => router.push("/checkout/extensions")}>
              Continue to Extensions
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              You won&apos;t be charged yet
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
