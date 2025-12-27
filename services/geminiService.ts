
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

export const getHealthAssistantResponse = async (history: ChatMessage[], message: string) => {
  try {
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (!apiKey) {
      return "عذراً، خدمة المساعد الذكي غير مهيأة حالياً بمفتاح التشغيل.";
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
        systemInstruction: "أنت مساعد طبي محترف. أجب باللغة العربية بأسلوب ودود ومختصر.",
      },
    });

    return response.text || "لم أتمكن من الحصول على إجابة، حاول مرة أخرى.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "حدث خطأ فني أثناء محاولة معالجة طلبك.";
  }
};
