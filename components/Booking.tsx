
import React, { useState, useEffect } from 'react';
import { User, Phone, MessageSquare, ChevronDown, CheckCircle, Loader2 } from 'lucide-react';
import { DOCTORS } from '../constants';

interface BookingProps {
  initialDoctorId?: string;
}

const Booking: React.FC<BookingProps> = ({ initialDoctorId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctorId: '',
    date: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    if (initialDoctorId) {
      setFormData(prev => ({ ...prev, doctorId: initialDoctorId }));
    }
  }, [initialDoctorId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', doctorId: '', date: '', notes: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-100 via-emerald-500 to-emerald-100"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-20 flex flex-col lg:flex-row gap-20 items-stretch overflow-hidden relative shadow-2xl">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div className="flex-1 flex flex-col justify-center text-right relative z-10">
            <span className="text-emerald-400 font-black text-sm mb-6 uppercase tracking-widest block">نظام الحجز الذكي</span>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1]">
              خطوة واحدة تفصلك عن <span className="text-emerald-500">صحة أفضل</span>
            </h3>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed">
              احجز موعدك الآن بكل سهولة. سيقوم فريقنا بالتواصل معك في أقل من 15 دقيقة لتأكيد الموعد المناسب لك.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <p className="text-emerald-500 font-bold text-2xl mb-1">15 دقيقة</p>
                <p className="text-slate-400 text-sm">سرعة الاستجابة</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <p className="text-emerald-500 font-bold text-2xl mb-1">مجاني</p>
                <p className="text-slate-400 text-sm">الاستشارة الأولى</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative z-10">
            {status === 'success' ? (
              <div className="bg-white h-full p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="bg-emerald-100 p-6 rounded-full mb-8">
                  <CheckCircle className="w-16 h-16 text-emerald-600" />
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-4">تم الاستلام بنجاح!</h4>
                <p className="text-slate-500 text-lg mb-8">شكراً لثقتك بنا. سيتصل بك فريقنا قريباً جداً.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative">
                <div className="space-y-8">
                  <div className="relative">
                    <label className="block text-sm font-black text-slate-800 mb-3 mr-1">الاسم الكامل</label>
                    <div className="relative group">
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                      <input 
                        type="text" 
                        placeholder="الاسم الثلاثي.."
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pr-12 pl-4 focus:ring-0 focus:border-emerald-500 outline-none transition-all font-medium"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block text-sm font-black text-slate-800 mb-3 mr-1">رقم الجوال</label>
                      <div className="relative group">
                        <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                        <input 
                          type="tel" 
                          placeholder="05xxxxxxxx"
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pr-12 pl-4 focus:ring-0 focus:border-emerald-500 outline-none transition-all"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-black text-slate-800 mb-3 mr-1">اختيار الطبيب</label>
                      <div className="relative group">
                        <select 
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 appearance-none focus:ring-0 focus:border-emerald-500 outline-none transition-all cursor-pointer font-medium"
                          required
                          value={formData.doctorId}
                          onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
                        >
                          <option value="">اختر طبيبك المختص</option>
                          {DOCTORS.map(d => <option key={d.id} value={d.id}>{d.name} - {d.specialty}</option>)}
                        </select>
                        <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-black text-slate-800 mb-3 mr-1">توضيح بسيط للحالة (اختياري)</label>
                    <div className="relative group">
                      <MessageSquare className="absolute right-4 top-5 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                      <textarea 
                        rows={3}
                        placeholder="هل تعاني من أعراض معينة؟"
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pr-12 pl-4 focus:ring-0 focus:border-emerald-500 outline-none transition-all"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-200 transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        جاري المعالجة..
                      </>
                    ) : (
                      'تأكيد الموعد المجاني'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
