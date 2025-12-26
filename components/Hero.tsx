
import React from 'react';
import { Calendar, ShieldCheck, Clock, Activity, Play, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-[#FDFDFF]">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-emerald-50/60 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-blue-50/60 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative z-10 text-right">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-slate-100 text-emerald-700 text-sm font-black mb-12 shadow-xl shadow-slate-200/40">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            رعاية صحية بمعايير عالمية
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-[1000] text-slate-900 leading-[1.05] mb-10 tracking-tight">
            عناية طبية <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 via-emerald-500 to-blue-600">
              تستحق ثقتك
            </span>
          </h1>
          
          <p className="text-2xl text-slate-500 mb-14 leading-relaxed max-w-xl font-medium">
            نحن هنا لنقدم لك الحلول الطبية الأكثر تطوراً، مع نخبة من الأطباء المتخصصين لنضمن لك ولعائلتك حياة صحية مليئة بالحيوية.
          </p>
          
          <div className="flex flex-wrap gap-8 mb-16">
            <button 
              onClick={scrollToBooking}
              className="bg-slate-900 hover:bg-emerald-600 text-white text-xl font-black px-12 py-6 rounded-3xl shadow-2xl shadow-slate-900/20 transition-all hover:-translate-y-2 flex items-center gap-4 group"
            >
              احجز موعدك الآن
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={onStart}
              className="bg-white border-2 border-slate-100 text-slate-900 text-xl font-black px-12 py-6 rounded-3xl hover:border-emerald-500 transition-all flex items-center gap-4 shadow-xl shadow-slate-200/50 group"
            >
              اكتشف خدماتنا
              <div className="bg-emerald-50 p-2 rounded-full group-hover:bg-emerald-500 transition-colors">
                <Play className="w-5 h-5 text-emerald-600 fill-emerald-600 group-hover:text-white group-hover:fill-white" />
              </div>
            </button>
          </div>

          <div className="flex items-center gap-12 pt-8 border-t border-slate-100">
            <div className="flex -space-x-4 space-x-reverse">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://images.unsplash.com/photo-${i === 1 ? '1535713875002-d1d0cf377fde' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1527980965255-d3b416303d12' : '1580489944761-15a19d654956'}?auto=format&fit=crop&q=80&w=100`} className="w-14 h-14 rounded-full border-4 border-white shadow-xl object-cover" />
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-white text-xs font-black shadow-xl">
                +10k
              </div>
            </div>
            <div className="text-slate-400 text-sm font-bold leading-relaxed">
              <span className="text-slate-900 block text-lg font-black tracking-tight">4.9 / 5 تقييم المرضى</span>
              أكثر من 20,000 حالة تم علاجها بنجاح
            </div>
          </div>
        </div>

        <div className="relative lg:h-[800px] flex items-center justify-center">
          <div className="relative z-10 w-full max-w-lg aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,0,0,0.2)] border-[16px] border-white ring-1 ring-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical Center" 
              className="w-full h-full object-cover shadow-inner"
            />
            {/* Monitor Overlay */}
            <div className="absolute top-10 right-[-40px] bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 animate-bounce delay-1000 hidden xl:block">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-emerald-50 p-3 rounded-2xl">
                  <Activity className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-2xl font-black text-slate-900">100%</p>
                <p className="text-[10px] text-slate-400 font-black uppercase">دقة التشخيص</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
