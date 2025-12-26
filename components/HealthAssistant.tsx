
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, X } from 'lucide-react';
import { getHealthAssistantResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

interface HealthAssistantProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const HealthAssistant: React.FC<HealthAssistantProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'أهلاً بك! أنا مساعدك الصحي الذكي المدعوم بالذكاء الاصطناعي. كيف يمكنني خدمتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getHealthAssistantResponse(messages, input);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {!isOpen && (
        <button 
          onClick={() => onToggle(true)}
          className="fixed bottom-10 left-10 z-[60] bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-[2rem] shadow-2xl transition-all hover:scale-110 flex items-center gap-3 group"
        >
          <Bot className="w-8 h-8" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-black text-lg">
            اسأل المساعد الذكي
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-10 left-10 z-[100] w-[400px] h-[600px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10">
          <div className="bg-slate-900 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="text-emerald-500 w-6 h-6" />
              <h4 className="text-white font-black">المساعد الذكي</h4>
            </div>
            <button onClick={() => onToggle(false)} className="text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-slate-400 text-xs animate-pulse">جاري التفكير...</div>}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اسأل هنا..."
                className="w-full bg-slate-100 rounded-xl py-3 pr-4 pl-12 outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button onClick={handleSend} className="absolute left-2 top-1/2 -translate-y-1/2 text-emerald-600 p-2">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HealthAssistant;
