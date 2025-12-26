
import React, { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenAssistant: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'الخدمات', id: 'services' },
    { name: 'أطباؤنا', id: 'doctors' },
    { name: 'حجز موعد', id: 'booking' },
    { name: 'المساعد الذكي', id: 'ai-assistant', action: onOpenAssistant },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-xl shadow-slate-200/20' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => scrollToSection('top')}
        >
          <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            هيث-فلو
          </span>
        </button>
        
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => {
                if (link.action) {
                  link.action();
                } else {
                  scrollToSection(link.id);
                }
              }}
              className="text-slate-600 hover:text-emerald-600 font-bold text-sm tracking-wide transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('booking')}
            className="hidden md:block bg-slate-900 hover:bg-emerald-600 text-white px-7 py-3 rounded-2xl font-black shadow-xl shadow-slate-900/10 transition-all hover:-translate-y-1 active:scale-95"
          >
            ابدأ رحلتك الآن
          </button>
          
          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => {
                if (link.action) {
                  link.action();
                } else {
                  scrollToSection(link.id);
                }
              }}
              className="text-slate-900 font-bold text-lg border-b border-slate-50 pb-2 text-right"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
