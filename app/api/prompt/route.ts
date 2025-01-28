import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Type for the expected request body
interface RequestBody {
  prompt: string;
}

// Type for API response
interface ApiResponse {
  summary: string;
  error?: string;
}

// d OpenAI client
const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

const openai = new OpenAI();

// Helper function to handle prompt processing
const promptDeepseek = async (prompt: string) => {
  try {
    const completion = await deepseek.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful travel assistant",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "deepseek-chat",
      response_format: { type: "json_object" },
      temperature: 0.8,
    });

    return completion?.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error processing prompt:", error);
    throw new Error("Failed to process prompt");
  }
};

const promptOpenAi = async (prompt: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful travel assistant",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "chatgpt-4o-latest",
      //   response_format: { type: "json_object" },
      temperature: 0.8,
    });

    return completion?.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error processing prompt:", error);
    throw new Error("Failed to process prompt");
  }
};
// API Route handler
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: RequestBody = await request.json();
    console.log({ body });
    // Validate request body
    if (!body.prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Process the prompt
    const summary = await promptOpenAi(body.prompt);
    console.log({ summary });
    // Return the response
    const response: ApiResponse = { summary };
    return NextResponse.json(response);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
