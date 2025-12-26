
import React from 'react';
import { Stethoscope, Activity, Heart, Eye, Brain, Baby, Microscope, ShieldCheck } from 'lucide-react';
import { Doctor, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'طب الأسرة',
    description: 'رعاية شاملة لجميع أفراد الأسرة مع التركيز على الوقاية الدائمة والتشخيص المبكر.',
    iconName: 'Stethoscope'
  },
  {
    id: 's2',
    title: 'أمراض القلب',
    description: 'تشخيص وعلاج متقدم لمشاكل القلب والأوعية الدموية بأحدث التقنيات العالمية.',
    iconName: 'Heart'
  },
  {
    id: 's3',
    title: 'طب الأطفال',
    description: 'عناية خاصة ونمو صحي لأطفالك منذ الولادة مع نخبة من أفضل الاستشاريين.',
    iconName: 'Baby'
  },
  {
    id: 's4',
    title: 'الأعصاب',
    description: 'علاجات مبتكرة للاضطرابات العصبية والدماغية باستخدام تكنولوجيا المسح الذكي.',
    iconName: 'Brain'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'د. سارة الأحمد',
    specialty: 'استشاري جراحة القلب',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    availability: ['الاثنين 10:00', 'الأربعاء 14:00'],
    description: 'رائدة في تقنيات جراحة القلب الدقيقة مع أكثر من 1500 عملية ناجحة عالمياً.'
  },
  {
    id: 'd2',
    name: 'د. خالد العمري',
    specialty: 'استشاري طب الأطفال',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    availability: ['الأحد 08:00', 'الثلاثاء 11:00'],
    description: 'متخصص في رعاية المواليد والنمو الصحي المبكر، حاصل على زمالة جامعة ستانفورد.'
  },
  {
    id: 'd3',
    name: 'د. ليلى حسن',
    specialty: 'أخصائية الأمراض الباطنية',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800',
    availability: ['الاثنين 12:00', 'الخميس 09:00'],
    description: 'خبيرة في إدارة الأمراض المزمنة والوقاية الصحية، تتبنى نهج الرعاية المتكاملة.'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Stethoscope': return <Stethoscope className="w-8 h-8 text-emerald-500" />;
    case 'Heart': return <Heart className="w-8 h-8 text-red-500" />;
    case 'Baby': return <Baby className="w-8 h-8 text-blue-500" />;
    case 'Brain': return <Brain className="w-8 h-8 text-purple-500" />;
    default: return <Activity className="w-8 h-8 text-slate-500" />;
  }
};
