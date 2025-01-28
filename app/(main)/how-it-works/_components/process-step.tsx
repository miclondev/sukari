import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export function ProcessStep({ icon: Icon, title, description, step }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-ef-teal/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-ef-teal" />
      </div>
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-ef-orange text-white rounded-full flex items-center justify-center font-bold">
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
