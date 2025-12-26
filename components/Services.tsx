
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-emerald-600 font-bold text-lg mb-4 tracking-wider uppercase">خدماتنا المتميزة</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">رعاية شاملة لكل احتياجاتك</h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
          نقدم مجموعة واسعة من الخدمات الطبية المتخصصة، مدعومة بأحدث التقنيات الطبية لضمان أفضل النتائج لمرضانا.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-2 transition-all duration-300 text-right"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {getIcon(service.iconName)}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
              <button className="text-emerald-600 font-bold hover:underline">
                اقرأ المزيد ←
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
