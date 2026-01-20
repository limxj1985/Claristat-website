
import { GoogleGenAI } from "@google/genai";
import { ResearchInsight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getMarketInsights(query: string): Promise<ResearchInsight> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a high-level strategic research analysis for the following query: "${query}". 
      Structure your response professionally as a ClariStat Research Consultant. 
      Focus on data-backed trends and strategic implications.`,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
    });

    const answer = response.text || "I was unable to retrieve a detailed analysis at this time.";
    const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const sources = rawChunks
      .filter((chunk: any) => chunk.web)
      .map((chunk: any) => ({
        title: chunk.web.title || "Reference",
        uri: chunk.web.uri
      }));

    return {
      query,
      answer,
      sources,
      timestamp: new Date()
    };
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    throw error;
  }
}
