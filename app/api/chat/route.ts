import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message, history, voice = "Puck" } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { response: "Please set GEMINI_API_KEY in your environment variables." },
        { status: 500 }
      );
    }

    // Using Gemini 2.0 Flash for premium multimodal output
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      systemInstruction: "You are Finn, a calm, empathetic, and smart AI assistant for a mental wellness app. Your goal is to listen to users, provide support, and offer guidance through natural language processing. You should be multi-lingual and speak the same language as the user. Keep your responses concise, soothing, and helpful. Use a gentle tone. Respond with both text and audio."
    });

    const chat = model.startChat({
      history: history.map((msg: any) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      })),
    });

    // Configure for Multimodal Speech-to-Speech feel
    const result = await chat.sendMessage(message, {
      generationConfig: {
        responseModalities: ["audio", "text"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voice, // Puck, Charon, Kore, Fenrir, Aoede
            },
          },
        },
      },
    } as any);

    const response = await result.response;
    const text = response.text();
    
    // Extract audio data if available
    // @ts-ignore
    const audioContent = response.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData)?.inlineData?.data;

    return NextResponse.json({ 
      response: text,
      audio: audioContent // Base64 encoded WAV/MP3
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { response: "I'm having trouble thinking right now. Please try again later." },
      { status: 500 }
    );
  }
}
