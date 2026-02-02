"use client";
import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

const COLORS = {
  primary: '#81b3fb',
  darkBlue: '#205285',
  darkGray: '#424a6f',
};

export function VistaInformes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
          Informes
        </h2>
        <p style={{ color: COLORS.darkGray + 'bb' }}>
          Reportes y análisis detallados
        </p>
      </div>
      <div className="bg-white p-20 rounded-3xl shadow-sm text-center">
        <FileText className="w-16 h-16 mx-auto mb-4" style={{ color: COLORS.primary }} />
        <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.darkBlue }}>
          Módulo de Informes
        </h3>
        <p style={{ color: COLORS.darkGray }}>Contenido próximamente</p>
      </div>
    </motion.div>
  );
}
