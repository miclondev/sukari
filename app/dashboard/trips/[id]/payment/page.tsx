"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, CreditCard, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tripDetails } from "../page";

// Add generateStaticParams function for static site generation
export async function generateStaticParams() {
  return Object.keys(tripDetails).map((id) => ({
    id,
  }));
}

export default function TripPaymentPage({ params }: { params: { id: string } }) {
  const trip = tripDetails[params.id as keyof typeof tripDetails];

  if (!trip) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Trip not found</h1>
        <p className="text-muted-foreground">The trip you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Make a Payment</h1>
        <p className="text-muted-foreground">Complete your payment for {trip.title}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Payment Schedule</h2>
          <div className="space-y-4">
            {trip.paymentSchedule.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
                <div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Due: {payment.dueDate}
                  </div>
                  <p className="font-medium mt-1">${payment.amount}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  payment.status === "Paid"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {payment.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Payment Amount</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Remaining Balance</p>
              <p className="text-2xl font-bold">${trip.remainingPayment}</p>
            </div>
            <Select defaultValue="full">
              <SelectTrigger>
                <SelectValue placeholder="Select payment amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full Balance (${trip.remainingPayment})</SelectItem>
                {trip.paymentSchedule
                  .filter(payment => payment.status === "Due")
                  .map((payment, index) => (
                    <SelectItem key={index} value={`payment-${index}`}>
                      Next Payment (${payment.amount})
                    </SelectItem>
                  ))}
                <SelectItem value="custom">Custom Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <Card className="p-6 md:col-span-2">
          <h2 className="font-semibold mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <div className="relative">
                  <Input placeholder="1234 5678 9012 3456" />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <Input placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <div className="relative">
                  <Input placeholder="123" />
                  <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                </div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Name on Card</label>
                <Input placeholder="John Doe" />
              </div>
            </div>

            <div className="pt-4 border-t mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Total Payment</span>
                <span className="text-xl font-bold">${trip.remainingPayment}</span>
              </div>
              <Button className="w-full">Complete Payment</Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Your payment is secured and encrypted. By proceeding, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}