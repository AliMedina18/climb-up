"use client";

import React, { useState } from 'react';
import { Brain, X, Upload, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: '#81b3fb',
  lightBg: '#cae2fe',
  darkBlue: '#205285',
  darkGray: '#424a6f',
};

interface PanelIAProps {
  estaAbierto: boolean;
  onCerrar: () => void;
}

export function PanelIA({ estaAbierto, onCerrar }: PanelIAProps) {
  const [mensajeChat, setMensajeChat] = useState('');

  return (
    <AnimatePresence>
      {estaAbierto && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCerrar}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            style={{ zIndex: 100 }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-120 bg-white shadow-2xl overflow-y-auto"
            style={{ zIndex: 101 }}
          >
            {/* Cabecera */}
            <div className="p-8 border-b flex items-center justify-between" style={{ backgroundColor: COLORS.lightBg }}>
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: COLORS.darkBlue }}>
                    Asistente IA
                  </h3>
                  <p className="text-xs" style={{ color: COLORS.darkGray }}>
                    Análisis inteligente
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onCerrar}
                className="p-2 rounded-xl hover:bg-white/50"
              >
                <X className="w-6 h-6" style={{ color: COLORS.darkGray }} />
              </motion.button>
            </div>

            {/* Contenido */}
            <div className="p-8">
              {/* Área de Carga */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer mb-8"
                style={{ borderColor: COLORS.primary + '40', backgroundColor: COLORS.lightBg + '30' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium mb-2" style={{ color: COLORS.darkBlue }}>
                  Arrastra tus archivos aquí
                </p>
                <p className="text-sm mb-4" style={{ color: COLORS.darkGray }}>
                  PDF, Excel, Word
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl text-white font-medium"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Seleccionar archivo
                </motion.button>
              </motion.div>

              {/* Chat */}
              <div>
                <h4 className="font-semibold mb-4" style={{ color: COLORS.darkBlue }}>
                  Pregunta a la IA
                </h4>
                
                {/* Mensajes */}
                <div className="space-y-4 mb-6">
                  <div 
                    className="p-4 rounded-2xl rounded-bl-sm"
                    style={{ backgroundColor: COLORS.lightBg + '40' }}
                  >
                    <p className="text-sm" style={{ color: COLORS.darkGray }}>
                      ¿Cuáles son mis principales gastos este mes?
                    </p>
                  </div>
                  <div 
                    className="p-4 rounded-2xl rounded-br-sm ml-8"
                    style={{ backgroundColor: COLORS.primary, color: 'white' }}
                  >
                    <p className="text-sm">
                      Tus principales gastos son: Nómina (45%), Operación (25%) y Marketing (20%). La nómina ha aumentado un 5% respecto al mes anterior.
                    </p>
                  </div>
                </div>

                {/* Campo de entrada */}
                <div className="relative">
                  <input
                    type="text"
                    value={mensajeChat}
                    onChange={(e) => setMensajeChat(e.target.value)}
                    placeholder="Escribe tu pregunta..."
                    className="w-full px-5 py-4 pr-14 rounded-2xl outline-none transition-all focus:ring-2"
                    style={{ 
                      backgroundColor: COLORS.lightBg + '30',
                      border: 'none',
                      color: COLORS.darkBlue
                    }}
                  />
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.button>
                </div>

                {/* Acciones Rápidas */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Analizar datos', 'Comparar períodos', 'Detectar tendencias'].map((accion, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl text-sm font-medium"
                      style={{ 
                        backgroundColor: COLORS.lightBg + '50',
                        color: COLORS.darkBlue
                      }}
                    >
                      {accion}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
