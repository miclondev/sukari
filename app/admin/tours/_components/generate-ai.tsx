import { Loader } from "@/components/common/loader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const initPrompt = (descripition: string) => {
  return `You are a JSON parser AI. Your task is to Generate JSON objects for travel itenerary
    - Return results strictly in JavaScript JSON format.
    - Do not include any additional text, context, or notes in the output.
    - If a field is not available, it should be returned as null or an empty array as appropriate.
    - Do not add comments or annotations within the JSON object. Return only the raw JSON object of the fields.

    Expected JSON structure:
   {
      title: "",
      description: "", // a detailed description of the tour
      price: "", // the discounted price of the tour in USD
      originalPrice: "", // the original price of the tour in USD
      days: "",
      groupSize: "",
      highlights: [""], // array of highlights
      whatsIncluded: [""], // array of items included in the tour
      itinerary: [
        {
          day: 1,
          title: "",
          description: "",
          activities: [""], // array of activities
          meals: [""], // array of meals
        },
      ],
    }

    Here is the descripition:
  ${descripition}`;
};

export function GenerateTour({ form }: { form: any }) {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const makeRequest = async () => {
    setLoading(true);
    const formattedPrompt = initPrompt(prompt);
    try {
      const response = await axios.post(
        "/api/prompt",
        {
          prompt: formattedPrompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const parsed = JSON.parse(response.data.summary);
      console.log({ parsed });
      form.reset(parsed);
    } catch (error) {
      console.error("Failed to generate tour with AI:", error);
      toast.error("Failed to generate with AI try agian later");
    }
    setLoading(false);
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="default" onClick={() => setIsOpen(!isOpen)}>
          Generate Tour with AI
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Explain the tour details and we will generate the itinerary for you.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type tour brief here"
          />
        </div>
        <DialogFooter>
          <Button disabled={loading} onClick={makeRequest} type="submit">
            {loading && <Loader />}
            {loading ? "Generating..." : "Generate"}
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
