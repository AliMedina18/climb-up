"use client";
import React from 'react';
import { motion } from 'motion/react';
import { DollarSign } from 'lucide-react';

const COLORS = {
  primary: '#81b3fb',
  darkBlue: '#205285',
  darkGray: '#424a6f',
};

export function VistaFinanzas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
          Finanzas
        </h2>
        <p style={{ color: COLORS.darkGray + 'bb' }}>
          Análisis financiero y métricas clave
        </p>
      </div>
      <div className="bg-white p-20 rounded-3xl shadow-sm text-center">
        <DollarSign className="w-16 h-16 mx-auto mb-4" style={{ color: COLORS.primary }} />
        <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.darkBlue }}>
          Módulo de Finanzas
        </h3>
        <p style={{ color: COLORS.darkGray }}>Contenido próximamente</p>
      </div>
    </motion.div>
  );
}
