
import React from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { DOCTORS } from '../constants';

interface DoctorsProps {
  onBook: (doctorId: string) => void;
}

const Doctors: React.FC<DoctorsProps> = ({ onBook }) => {
  return (
    <section id="doctors" className="py-32 bg-[#F9FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-right">
            <h2 className="text-emerald-600 font-black text-sm mb-6 tracking-[0.3em] uppercase">نخبة الخبراء لدينا</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">كفاءة طبية <br /> تضعك في أمان</h3>
            <p className="text-slate-500 max-w-2xl text-xl leading-relaxed font-medium">نختار أطباؤنا بعناية فائقة لضمان حصولك على رعاية طبية تضاهي المعايير العالمية.</p>
          </div>
          <button className="group flex items-center gap-3 bg-white border border-slate-200 text-slate-900 font-black px-10 py-5 rounded-3xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-xl shadow-slate-200/40">
            تصفح جميع التخصصات
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-emerald-200/40 transition-all duration-700 group flex flex-col h-full">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl border border-white/40 backdrop-blur-md">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-black text-slate-900">{doctor.rating}</span>
                </div>
              </div>
              <div className="p-10 relative flex-grow flex flex-col">
                <div className="absolute -top-14 left-10 bg-emerald-600 text-white px-6 py-2.5 rounded-2xl shadow-2xl shadow-emerald-500/30">
                  <span className="text-xs font-black uppercase tracking-widest">متاح اليوم</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">{doctor.name}</h4>
                <p className="text-emerald-600 font-black mb-6 text-lg tracking-tight">{doctor.specialty}</p>
                <p className="text-slate-500 text-sm mb-10 line-clamp-3 leading-relaxed font-medium">
                  {doctor.description}
                </p>
                
                <div className="mt-auto">
                  <button 
                    onClick={() => onBook(doctor.id)}
                    className="w-full bg-slate-900 text-white font-black py-6 rounded-[2rem] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-emerald-500/40 flex items-center justify-center gap-3 group/btn"
                  >
                    حجز موعد الآن
                    <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
