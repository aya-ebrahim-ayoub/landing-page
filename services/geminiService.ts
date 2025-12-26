
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getHealthAssistantResponse = async (history: ChatMessage[], message: string) => {
  try {
    // فحص أمان للوصول لمفتاح API
    const env = typeof process !== 'undefined' ? process.env : {};
    const apiKey = env.API_KEY;
    
    if (!apiKey) {
      console.warn("API Key is missing, AI Assistant features will be disabled.");
      return "عذراً، المساعد الذكي غير متاح حالياً لعدم توفر مفتاح الوصول.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const contents = history
      .filter(m => m.role === 'user' || (m.role === 'model' && m.text !== 'أهلاً بك! أنا مساعدك الصحي الذكي المدعوم بالذكاء الاصطناعي. كيف يمكنني خدمتك اليوم؟'))
      .map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
    
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents,
      config: {
        systemInstruction: `أنت مساعد صحي ذكي واحترافي. قدم نصائح صحية عامة ومعلومات طبية موثوقة باللغة العربية. 
        تذكر دائماً أن تنصح المستخدم باستشارة طبيب مختص قبل اتخاذ أي قرار طبي. 
        اجعل إجاباتك ودودة، مختصرة، ومركزة على التثقيف الصحي.`,
      },
    });

    return response.text || "عذراً، لم أستطع معالجة طلبك حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، حدث خطأ أثناء الاتصال بالمساعد الذكي.";
  }
};
