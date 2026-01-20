
import { GoogleGenAI } from "@google/genai";

export async function generateHeroVisual(): Promise<string | null> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'Professional, elegant 3D visualization of data science and academic research. Abstract translucent holographic charts, glass spheres, and golden light rays representing statistical clarity. Royal blue and amber accents on a clean, bright minimalist laboratory background. High-end consultancy aesthetic, cinematic lighting, ultra-clear, symbolic of precision and insight.',
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
}
