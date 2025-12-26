import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Always use the process.env.API_KEY directly and use a named parameter for initialization.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthAssistantResponse = async (history: ChatMessage[], message: string) => {
  try {
    // Health-related reasoning is a complex task, so gemini-3-pro-preview is preferred.
    // Filter out the initial local welcome message to ensure a valid back-and-forth context.
    const contents = history
      .filter(m => m.role === 'user' || (m.role === 'model' && m.text !== 'أهلاً بك! أنا مساعدك الصحي الذكي. كيف يمكنني مساعدتك اليوم؟'))
      .map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
    
    // Add the current user prompt to the contents array.
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

    // Directly access the .text property from the GenerateContentResponse object.
    return response.text || "عذراً، لم أستطع معالجة طلبك حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، حدث خطأ أثناء الاتصال بالمساعد الذكي.";
  }
};