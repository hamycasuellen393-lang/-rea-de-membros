/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Gamepad2, 
  Heart, 
  CheckSquare, 
  Lock, 
  Unlock, 
  ChevronRight, 
  Star,
  Flame,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Module {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  link?: string;
  isLocked: boolean;
  isBonus: boolean;
  icon: React.ReactNode;
  isUpsell?: boolean;
  image?: string;
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    setIsLoaded(true);
  }, []);

  const modules: Module[] = [
    {
      id: 1,
      title: "Livro Digital: 52 Semanas com Jesus",
      subtitle: "O guia completo para sua jornada espiritual",
      buttonText: "Acessar Material",
      link: "https://drive.google.com/drive/folders/15eZkzgpehtvv4hzaJqJjkONVey_BCtf9",
      isLocked: false,
      isBonus: false,
      icon: <BookOpen className="w-6 h-6 text-brand-blue-dark" />,
      image: "https://res.cloudinary.com/drth8olcl/image/upload/v1772044324/Capa_52_semanas_com_cristo_nyltxh.jpg",
    },
    {
      id: 2,
      title: "BÔNUS: Uno Bíblico",
      subtitle: "Diversão e aprendizado em família",
      buttonText: "Acessar Bônus",
      link: "https://drive.google.com/drive/folders/1vnqkmuU_snMcOtuH4IrNmhBx2BEr5Vus",
      isLocked: false,
      isBonus: true,
      icon: <Gamepad2 className="w-6 h-6 text-brand-blue-dark" />,
      image: "https://res.cloudinary.com/drth8olcl/image/upload/v1772044324/Capa_uno_biblico_a4qdpf.jpg",
    },
    {
      id: 3,
      title: "BÔNUS: Potinho da Oração",
      subtitle: "Cultivando o hábito de falar com Deus",
      buttonText: "Acessar Bônus",
      link: "https://drive.google.com/drive/folders/1ZoIYhngu144sr_rLDfH_sr_UW7EEjRHg",
      isLocked: false,
      isBonus: true,
      icon: <Heart className="w-6 h-6 text-brand-blue-dark" />,
      image: "https://res.cloudinary.com/drth8olcl/image/upload/v1772044324/Capa_potinho_da_ora%C3%A7%C3%A3o_ccohiq.jpg",
    },
    {
      id: 4,
      title: "BÔNUS: Checklist Minha Semana com Jesus",
      subtitle: "Organização e compromisso diário",
      buttonText: "Acessar Bônus",
      link: "https://drive.google.com/drive/folders/1L-AaSXzxaTcoqDRZSid2nbZ7Z5D8Is-S",
      isLocked: false,
      isBonus: true,
      icon: <CheckSquare className="w-6 h-6 text-brand-blue-dark" />,
      image: "https://res.cloudinary.com/drth8olcl/image/upload/v1772044324/Capa_checklist_minha_semana_com_Jesus_t7qzcp.jpg",
    },
    {
      id: 5,
      title: "Meu Pequeno Pregador",
      subtitle: "Capacitando crianças para compartilhar a Palavra",
      buttonText: "Desbloquear Agora",
      isLocked: true,
      isBonus: false,
      isUpsell: true,
      icon: <Flame className="w-6 h-6 text-orange-500" />,
      image: "https://res.cloudinary.com/drth8olcl/image/upload/v1772044324/Capa_meu_pequeno_pregador_jcxw4h.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-brand-beige font-sans pb-12">
      {/* Header Section */}
      <header className="bg-white border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Área de Membros
            </h1>
            <span className="text-lg font-bold text-slate-800">52 Semanas com Jesus</span>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 pt-8 space-y-8">
        {/* Welcome Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">Bem-vindo à sua jornada!</h2>
            <p className="text-slate-500 text-sm">Que alegria ter você aqui conosco.</p>
          </div>
        </motion.section>

        {/* Modules Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Conteúdo do Curso</h3>
            <span className="text-xs text-slate-400">{modules.length} Módulos</span>
          </div>

          <div className="grid gap-4">
            {modules.map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 text-center space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-brand-gold/40" />
            <div className="w-2 h-2 rounded-full bg-brand-gold/40" />
            <div className="w-2 h-2 rounded-full bg-brand-gold/40" />
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
            © 2026 52 Semanas com Jesus • Todos os direitos reservados
          </p>
        </footer>
      </main>
    </div>
  );
}

interface ModuleCardProps {
  module: Module;
  index: number;
  key?: React.Key;
}

function ModuleCard({ module, index }: ModuleCardProps) {
  const isLocked = module.isLocked;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
        isLocked 
          ? 'bg-slate-50 border-slate-200 grayscale-[0.8]' 
          : 'bg-white border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1'
      }`}
    >
      {/* Module Image Cover */}
      {module.image && (
        <div className="w-full overflow-hidden relative">
          <img 
            src={module.image} 
            alt={module.title}
            className={`w-full h-auto block transition-all duration-500 ${isLocked ? 'grayscale brightness-50' : ''}`}
            referrerPolicy="no-referrer"
          />
          {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl">
                <Lock className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bonus Badge */}
      {module.isBonus && !isLocked && (
        <div className="absolute top-4 right-4 bg-brand-gold/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 fill-white" />
          Bônus
        </div>
      )}

      {/* Locked Badge */}
      {isLocked && (
        <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg">
          <Lock className="w-3 h-3" />
          Premium
        </div>
      )}

      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-2xl ${isLocked ? 'bg-slate-200' : 'bg-brand-blue/50'}`}>
            {module.icon}
          </div>
          <div className="space-y-1 pr-8">
            <h4 className={`font-bold leading-tight ${isLocked ? 'text-slate-500' : 'text-slate-900'}`}>
              {module.title}
            </h4>
            <p className="text-xs text-slate-400 line-clamp-2">
              {module.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {isLocked ? (
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Lock className="w-3 h-3" /> Conteúdo Bloqueado
              </span>
            ) : (
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                <Unlock className="w-3 h-3" /> Acesso Liberado
              </span>
            )}
          </div>
          
          {module.link ? (
            <a 
              href={module.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue-dark text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-transform active:scale-95 shadow-lg shadow-brand-blue-dark/20"
            >
              {module.buttonText}
              <ArrowRight className="w-3 h-3" />
            </a>
          ) : (
            <button 
              className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl transition-all ${
                isLocked 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-brand-blue-dark text-white'
              }`}
            >
              {module.buttonText}
              {isLocked ? <Flame className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
            </button>
          )}
        </div>
      </div>

      {/* Decorative background element */}
      <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-3xl opacity-20 ${
        isLocked ? 'bg-slate-400' : 'bg-brand-blue-dark'
      }`} />
    </motion.div>
  );
}
