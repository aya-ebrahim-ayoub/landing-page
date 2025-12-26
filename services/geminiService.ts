
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

export const getHealthAssistantResponse = async (history: ChatMessage[], message: string) => {
  try {
    // التأكد من وجود المفتاح في بيئة التشغيل
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (!apiKey) {
      return "المساعد الذكي غير مفعل حالياً. يرجى مراجعة إعدادات المفتاح.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const contents = history
      .filter(m => m.role === 'user' || m.role === 'model')
      .map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
    
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents,
      config: {
        systemInstruction: "أنت مساعد طبي محترف. أجب باختصار وباللغة العربية.",
      },
    });

    return response.text || "عذراً، لم أستطع الرد.";
  } catch (error) {
    console.error("AI Error:", error);
    return "حدث خطأ في الاتصال بالذكاء الاصطناعي.";
  }
};
