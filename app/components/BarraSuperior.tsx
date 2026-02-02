"use client";

import React, { useState } from 'react';
import { Search, Bell, Brain, LogOut, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuNotificaciones } from './MenuNotificaciones';
import { useRouter } from 'next/navigation';

const COLORS = {
  primary: '#81b3fb',
  darkBlue: '#205285',
  darkGray: '#424a6f',
  coralAccent: '#fb7864',
};

interface BarraSuperiorProps {
  onAbrirIA: () => void;
}

export function BarraSuperior({ onAbrirIA }: BarraSuperiorProps) {
  const [notificacionesAbiertas, setNotificacionesAbiertas] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/Login');
  };

  return (
    <>
      <header className="h-20 flex items-center justify-between px-4 sm:px-10 bg-white border-b border-gray-100 sticky top-0 z-30">
        
        {/* IZQUIERDA: BUSCADOR */}
        <div className="flex items-center w-full max-w-60 sm:max-w-[320px]">
          <div className="relative w-full group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#81b3fb] transition-colors" />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl outline-none transition-all text-sm bg-gray-50 border-2 border-transparent focus:border-[#81b3fb]/20 focus:bg-white"
            />
          </div>
        </div>

        {/* DERECHA: ACCIONES */}
        <div className="flex items-center gap-3 sm:gap-6"> {/* Aumentamos el gap general */}
          
          {/* BOTÓN IA */}
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onAbrirIA}
            className="p-2.5 sm:px-5 sm:py-2.5 rounded-2xl flex items-center gap-2 text-white shadow-md shadow-[#81b3fb]/20 transition-all"
            style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.darkBlue} 100%)` }}
          >
            <Brain className="w-5 h-5 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-tight hidden md:inline">Asistente IA</span>
          </motion.button>

          {/* NOTIFICACIONES */}
          <div className="relative">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#f1f5f9' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setNotificacionesAbiertas(!notificacionesAbiertas)}
              className="p-2.5 sm:p-3 rounded-2xl bg-gray-50 transition-colors relative"
            >
              <Bell className="w-5 h-5 text-[#424a6f]" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border-2 border-white" style={{ backgroundColor: COLORS.coralAccent }} />
            </motion.button>
            <MenuNotificaciones estaAbierto={notificacionesAbiertas} onCerrar={() => setNotificacionesAbiertas(false)} />
          </div>

          {/* SEPARADOR SUTIL */}
          <div className="w-px h-8 bg-gray-100 mx-1 hidden sm:block" />

          {/* PERFIL CON MÁS ESPACIADO */}
          <div className="flex items-center gap-6 sm:ml-2"> {/* gap-6 y margen izquierdo extra */}
            <div className="text-right hidden lg:block leading-tight">
              <p className="text-[11px] font-black text-[#205285] uppercase tracking-tighter">Juan Delgado</p>
              <div className="flex items-center justify-end gap-2 mt-0.5"> {/* gap-2 para separar el punto verde */}
                <span className="text-[9px] font-bold text-[#424a6f]/50 uppercase tracking-wide">Project Manager</span>
                <div className="flex items-center">
                   <Circle size={6} fill="#10b981" className="text-[#10b981] animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* BOTÓN CERRAR SESIÓN (Visualmente más alejado) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="p-3 rounded-2xl text-red-400 hover:text-white hover:bg-red-500 transition-all group shadow-sm bg-red-50/50 border border-red-100/50"
              title="Cerrar Sesión"
            >
              <LogOut size={18} className="group-hover:rotate-12 transition-transform" />
            </motion.button>
          </div>

        </div>
      </header>

      <AnimatePresence>
        {notificacionesAbiertas && (
          <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setNotificacionesAbiertas(false)} />
        )}
      </AnimatePresence>
    </>
  );
}