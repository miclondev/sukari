"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2, CircleDashed } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const steps = [
  { id: 1, title: "Tour Details", path: "/checkout" },
  { id: 2, title: "Traveler Info", path: "/checkout/traveler-info" },
  { id: 3, title: "Payment", path: "/checkout/payment" },
  { id: 4, title: "Confirmation", path: "/checkout/confirmation" },
];

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const currentStepIndex = steps.findIndex((step) => step.path === pathname);
  const isConfirmation = pathname === "/checkout/confirmation";

  const handleStepClick = (stepPath: string, stepIndex: number) => {
    if (!isConfirmation && stepIndex <= currentStepIndex) {
      router.push(stepPath);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isActive = index === currentStepIndex;
              const isCompleted = index < currentStepIndex;
              const isClickable = !isConfirmation && index <= currentStepIndex;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div
                    className={`flex flex-col items-center flex-1 ${
                      isClickable ? "cursor-pointer" : ""
                    }`}
                    onClick={() => handleStepClick(step.path, index)}
                  >
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full mb-2 transition-colors ${
                        isActive
                          ? "bg-ef-teal text-white"
                          : isCompleted
                          ? "bg-white border border-ef-teal text-ef-teal"
                          : "bg-white border border-gray-200 text-gray-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <CircleDashed className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isActive
                          ? "text-ef-teal"
                          : isCompleted
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-px ${
                        index < currentStepIndex ? "bg-ef-teal" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <Card className="p-6">{children}</Card>
      </div>
    </div>
  );
}
