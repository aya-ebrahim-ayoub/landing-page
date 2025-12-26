
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';
import { getHealthAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

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
      {/* Floating Action Button */}
      {!isOpen && (
        <button 
          onClick={() => onToggle(true)}
          className="fixed bottom-10 left-10 z-[60] bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(16,185,129,0.4)] transition-all hover:scale-110 flex items-center gap-3 group animate-in fade-in zoom-in duration-500"
        >
          <div className="relative">
            <Bot className="w-8 h-8" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-emerald-600 rounded-full"></span>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-black text-lg">
            اسأل المساعد الذكي
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div id="ai-assistant" className="fixed bottom-10 left-10 z-[100] w-[450px] h-[700px] bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-20 zoom-in duration-500">
          <div className="bg-slate-900 p-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-500 p-3 rounded-2xl shadow-lg shadow-emerald-500/20">
                <Bot className="text-white w-7 h-7" />
              </div>
              <div>
                <h4 className="text-white font-black text-lg leading-none mb-1.5">المساعد الذكي</h4>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                  <span className="text-emerald-400/80 text-xs font-bold tracking-widest uppercase">متصل وفعال</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => onToggle(false)} 
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50 scrollbar-thin scrollbar-thumb-slate-200">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed font-medium shadow-sm border ${
                  msg.role === 'user' 
                  ? 'bg-emerald-600 text-white border-emerald-500 rounded-tr-none shadow-emerald-200/40' 
                  : 'bg-white text-slate-700 border-slate-100 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-[2rem] border border-slate-100 rounded-tl-none flex gap-1.5 shadow-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-8 bg-white border-t border-slate-100">
            <div className="relative group">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اسأل عن أي عرض صحي أو نصيحة.."
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pr-6 pl-16 outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm font-bold"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:bg-slate-300 shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-5 font-black uppercase tracking-widest">
              هذا المساعد يقدم معلومات عامة وليس بديلاً عن الطبيب
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HealthAssistant;
