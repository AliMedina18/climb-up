"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  Table2, 
  DollarSign, 
  FileText,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Settings,
  HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = {
  primary: '#81b3fb',
  lightBg: '#cae2fe',
  darkBlue: '#205285',
};

interface MenuLateralProps {
  vistaActiva: string;
  onCambiarVista: (vista: string) => void;
  colapsado: boolean;
  onToggleColapsar: () => void;
}

export function MenuLateral({ vistaActiva, onCambiarVista, colapsado, onToggleColapsar }: MenuLateralProps) {
  const opcionesMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tablas', label: 'Tablas', icon: Table2 },
    { id: 'finanzas', label: 'Finanzas', icon: DollarSign },
    { id: 'informes', label: 'Informes', icon: FileText },
  ];

  return (
    <motion.aside 
      animate={{ width: colapsado ? 88 : 260 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="flex flex-col relative z-40 h-screen"
      style={{ backgroundColor: COLORS.darkBlue }}
    >
      {/* Botón Flotante para Colapsar (Más elegante) */}
      <button
        onClick={onToggleColapsar}
        className="absolute -right-3 top-10 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110 z-50"
        style={{ backgroundColor: COLORS.darkBlue }}
      >
        {colapsado ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo Area */}
      <div className={`h-24 flex items-center ${colapsado ? 'justify-center' : 'px-8'}`}>
        <motion.div 
          layout
          className="flex items-center gap-3"
        >
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0"
            style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #5a91e0 100%)` }}
          >
            <Rocket className="w-5 h-5 text-white" />
          </div>
          {!colapsado && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <h1 className="text-white text-lg font-black italic tracking-tighter">CLIMP UP</h1>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#81b3fb]/60">Elevate Business</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Navegación Principal */}
      <nav className="flex-1 px-4 space-y-2">
        {opcionesMenu.map((item) => {
          const Icon = item.icon;
          const estaActivo = vistaActiva === item.id;
          
          return (
            <div key={item.id} className="relative group">
              <motion.button
                onClick={() => onCambiarVista(item.id)}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center rounded-xl py-3.5 transition-all duration-200 ${
                  colapsado ? 'justify-center' : 'px-4 gap-4'
                }`}
                style={{
                  backgroundColor: estaActivo ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: estaActivo ? 'white' : '#cae2fe99',
                }}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${estaActivo ? 'scale-110 text-[#81b3fb]' : 'group-hover:scale-110'}`} />
                  {estaActivo && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -left-6 w-1.5 h-6 bg-[#81b3fb] rounded-r-full"
                    />
                  )}
                </div>
                {!colapsado && (
                  <span className={`text-sm font-bold tracking-tight ${estaActivo ? 'text-white' : ''}`}>
                    {item.label}
                  </span>
                )}
              </motion.button>
              
              {/* Tooltip cuando está colapsado */}
              {colapsado && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-white text-[#205285] text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl z-50 whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer del Menú: Ajustes y Ayuda */}
      <div className="p-4 border-t border-white/5 space-y-1">
        <button className={`w-full flex items-center py-3 rounded-xl text-[#cae2fe66] hover:text-white transition-colors ${colapsado ? 'justify-center' : 'px-4 gap-4'}`}>
          <Settings size={20} />
          {!colapsado && <span className="text-xs font-bold uppercase tracking-widest">Ajustes</span>}
        </button>
        <button className={`w-full flex items-center py-3 rounded-xl text-[#cae2fe66] hover:text-white transition-colors ${colapsado ? 'justify-center' : 'px-4 gap-4'}`}>
          <HelpCircle size={20} />
          {!colapsado && <span className="text-xs font-bold uppercase tracking-widest">Soporte</span>}
        </button>
      </div>
    </motion.aside>
  );
}