"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Users, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-muted-foreground">
          Your tour has been successfully booked. Check your email for details.
        </p>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-4">Booking Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">A Week in Greece: Athens, Mykonos & Santorini</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Apr 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>2 travelers</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Payment Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Deposit Paid</span>
                    <span>$198</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Remaining Balance (due by Feb 15, 2024)</span>
                    <span>$5,600</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Itinerary
            </Button>
            <Button className="flex-1" variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Email Confirmation
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex justify-center space-x-4">
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}