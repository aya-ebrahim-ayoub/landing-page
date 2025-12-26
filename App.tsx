
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Booking from './components/Booking';
import HealthAssistant from './components/HealthAssistant';
import { Activity, Instagram, Twitter, Linkedin, Shield, Award, Users } from 'lucide-react';

const App: React.FC = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleBookDoctor = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAssistant = () => setIsAssistantOpen(!isAssistantOpen);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      <main className="flex-grow">
        <Hero onStart={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} />
        
        {/* Trust Logos / Partners */}
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

        {/* Dynamic Statistics Section */}
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
              <div className="flex gap-5">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-black mb-8 text-xl text-emerald-500">استكشف</h5>
              <ul className="space-y-5 text-slate-400 text-lg">
                <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2"><span>•</span> الخدمات</a></li>
                <li><a href="#doctors" className="hover:text-white transition-colors flex items-center gap-2"><span>•</span> أطباؤنا</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors flex items-center gap-2"><span>•</span> المواعيد</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsAssistantOpen(true); }} className="hover:text-white transition-colors flex items-center gap-2"><span>•</span> المساعد الذكي</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black mb-8 text-xl text-emerald-500">الدعم</h5>
              <ul className="space-y-5 text-slate-400 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h5 className="font-black mb-6 text-xl">النشرة الصحية</h5>
              <p className="text-slate-400 mb-8 leading-relaxed">كن أول من يحصل على آخر الأبحاث والنصائح الطبية الموثقة.</p>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="bg-emerald-600 text-white px-6 py-4 rounded-2xl font-black hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20">
                  اشتراك الآن
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10 text-sm text-slate-500 font-bold">
            <p>© 2024 هيث-فلو العالمية. جميع الحقوق محفوظة.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white">الأحكام والشروط</a>
              <a href="#" className="hover:text-white">إخلاء المسؤولية</a>
            </div>
          </div>
        </div>
      </footer>

      <HealthAssistant isOpen={isAssistantOpen} onToggle={setIsAssistantOpen} />
    </div>
  );
};

export default App;
