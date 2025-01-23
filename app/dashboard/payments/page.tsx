"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const payments = {
  upcoming: [
    {
      id: 1,
      tour: "A Week in Greece: Athens, Mykonos & Santorini",
      dueDate: "Mar 15, 2024",
      amount: 1000,
      type: "Installment Payment",
    },
    {
      id: 2,
      tour: "London, Paris & Rome",
      dueDate: "Apr 1, 2024",
      amount: 899,
      type: "Final Payment",
    },
  ],
  completed: [
    {
      id: 3,
      tour: "A Week in Greece: Athens, Mykonos & Santorini",
      date: "Feb 15, 2024",
      amount: 1000,
      type: "Deposit",
      transactionId: "TRX-123456",
    },
    {
      id: 4,
      tour: "A Week in Italy: Venice, Florence & Rome",
      date: "Jan 15, 2024",
      amount: 2409,
      type: "Full Payment",
      transactionId: "TRX-123457",
    },
  ],
};

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Payments</h1>
        <p className="text-muted-foreground">View and manage your tour payments</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
          <TabsTrigger value="completed">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <div className="divide-y">
              {payments.upcoming.map((payment) => (
                <div key={payment.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{payment.tour}</h3>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Due: {payment.dueDate}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{payment.type}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">${payment.amount}</p>
                      </div>
                      <Button>Make Payment</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <div className="divide-y">
              {payments.completed.map((payment) => (
                <div key={payment.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{payment.tour}</h3>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Paid: {payment.date}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-muted-foreground">
                        <CreditCard className="w-4 h-4 mr-1" />
                        <span>Transaction ID: {payment.transactionId}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">${payment.amount}</p>
                        <p className="text-sm text-muted-foreground">{payment.type}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Receipt
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}