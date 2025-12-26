
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Doctors from './components/Doctors.tsx';
import Booking from './components/Booking.tsx';
import HealthAssistant from './components/HealthAssistant.tsx';
import { Activity, Instagram, Twitter, Linkedin, Shield, Award, Users } from 'lucide-react';

const App: React.FC = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDoctor = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      <main className="flex-grow">
        <Hero onStart={() => scrollToSection('services')} />
        
        <section className="bg-white py-12 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-slate-400 text-sm font-bold mb-10 uppercase tracking-[0.2em]">شركاء الثقة والرعاية العالمية</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-3xl font-black tracking-tighter">BUPA</span>
              <span className="text-3xl font-black tracking-tighter">TAWUNIYA</span>
              <span className="text-3xl font-black tracking-tighter">AL-RAJHI</span>
              <span className="text-3xl font-black tracking-tighter">MEDGULF</span>
              <span className="text-3xl font-black tracking-tighter">GLOBEMED</span>
            </div>
          </div>
        </section>

        <Services />

        <section className="bg-slate-900 py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { icon: Users, val: '150k+', label: 'مريض سعيد', color: 'text-emerald-500' },
              { icon: Award, val: '25+', label: 'جائزة عالمية', color: 'text-blue-500' },
              { icon: Shield, val: '100%', label: 'أمان وخصوصية', color: 'text-purple-500' },
              { icon: Activity, val: '500+', label: 'طبيب مختص', color: 'text-red-500' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <stat.icon className={`w-10 h-10 mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                <p className="text-5xl font-black text-white mb-2">{stat.val}</p>
                <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Doctors onBook={handleBookDoctor} />
        <Booking initialDoctorId={selectedDoctorId} />
      </main>

      <footer className="bg-slate-950 pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-emerald-500 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
                  <Activity className="text-white w-7 h-7" />
                </div>
                <span className="text-3xl font-black tracking-tight">هيث-فلو</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                نحن نبني مستقبل الرعاية الصحية الرقمية، حيث تلتقي التكنولوجيا بالرحمة الإنسانية لتقديم أفضل تجربة علاجية.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <HealthAssistant isOpen={isAssistantOpen} onToggle={setIsAssistantOpen} />
    </div>
  );
};

export default App;
