"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, CreditCard, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const paymentPlans = [
  {
    id: "full",
    title: "Pay in Full",
    description: "Pay the entire amount now",
    amount: 5798,
    installments: null,
  },
  {
    id: "three",
    title: "3 Monthly Installments",
    description: "Split your payment into 3 monthly payments",
    amount: 1933,
    installments: [
      { date: "Today", amount: 1933 },
      { date: "Mar 15, 2024", amount: 1933 },
      { date: "Apr 15, 2024", amount: 1932 },
    ],
  },
  {
    id: "six",
    title: "6 Monthly Installments",
    description: "Split your payment into 6 monthly payments",
    amount: 967,
    installments: [
      { date: "Today", amount: 967 },
      { date: "Mar 15, 2024", amount: 967 },
      { date: "Apr 15, 2024", amount: 967 },
      { date: "May 15, 2024", amount: 967 },
      { date: "Jun 15, 2024", amount: 967 },
      { date: "Jul 15, 2024", amount: 963 },
    ],
  },
  {
    id: "deposit",
    title: "Pay Deposit Only",
    description: "Pay $198 deposit now and the rest later",
    amount: 198,
    installments: [
      { date: "Today (Deposit)", amount: 198 },
      { date: "Feb 15, 2024 (Remaining Balance)", amount: 5600 },
    ],
  },
];

export default function PaymentPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("deposit");

  const currentPlan = paymentPlans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Payment Information</h1>
        <p className="text-muted-foreground">Choose your payment plan and complete your booking</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="space-y-6">
            {/* Payment Plans */}
            <div>
              <h2 className="font-semibold mb-4">Select Payment Plan</h2>
              <div className="space-y-4">
                {paymentPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedPlan === plan.id
                        ? "border-ef-teal bg-ef-teal/5"
                        : "hover:border-ef-teal/50"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="flex items-start">
                      <input
                        type="radio"
                        name="paymentPlan"
                        value={plan.id}
                        checked={selectedPlan === plan.id}
                        onChange={() => setSelectedPlan(plan.id)}
                        className="mt-1 mr-3"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{plan.title}</h3>
                          <span className="font-medium">${plan.amount}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                        {plan.installments && (
                          <div className="mt-3 space-y-2">
                            {plan.installments.map((installment, index) => (
                              <div
                                key={index}
                                className="flex items-center text-sm text-muted-foreground"
                              >
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="flex-1">{installment.date}</span>
                                <span>${installment.amount}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="font-semibold mb-4">Payment Method</h2>
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
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="font-semibold mb-4">Billing Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">Street Address</label>
                  <Input placeholder="Enter street address" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <Input placeholder="Enter city" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <Input placeholder="Enter state" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ZIP Code</label>
                  <Input placeholder="Enter ZIP code" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <Input placeholder="Enter country" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-4 h-fit sticky top-4">
          <h3 className="font-semibold mb-4">Payment Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Tour Price</span>
              <span>$5,798</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t">
              <span>Due Today</span>
              <span>${currentPlan?.amount}</span>
            </div>
            {currentPlan?.id !== "full" && (
              <div className="flex justify-between text-muted-foreground">
                <span>Remaining Balance</span>
                <span>${5798 - (currentPlan?.amount || 0)}</span>
              </div>
            )}
          </div>
          <div className="border-t mt-4 pt-4">
            <Button className="w-full" onClick={() => router.push("/checkout/confirmation")}>
              Pay ${currentPlan?.amount}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Your payment is secured and encrypted
            </p>
          </div>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => router.push("/checkout/traveler-info")}>
          Back
        </Button>
      </div>
    </div>
  );
}
