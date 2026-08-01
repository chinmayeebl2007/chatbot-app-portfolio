import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askGemini(systemPrompt, userMessage) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${systemPrompt}

User Question:
${userMessage}`,
    });

    return response.text;
  } catch (error) {
    console.error("===== GEMINI ERROR =====");
    console.error(error);

    throw error;
  }
}