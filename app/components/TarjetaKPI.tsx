"use client";

import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';

const COLORS = {
  darkBlue: '#205285',
  darkGray: '#424a6f',
};

interface TarjetaKPIProps {
  etiqueta: string;
  valor: string;
  cambio: string;
  tendencia: 'up' | 'down';
  color: string;
  retraso?: number;
}

export function TarjetaKPI({ etiqueta, valor, cambio, tendencia, color, retraso = 0 }: TarjetaKPIProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: retraso }}
      whileHover={{ y: -4 }}
      className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-6">
        <div 
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: color + '20' }}
        >
          {tendencia === 'up' ? (
            <ArrowUpRight className="w-6 h-6" style={{ color }} />
          ) : (
            <ArrowDownRight className="w-6 h-6" style={{ color }} />
          )}
        </div>
        <span 
          className="px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ 
            backgroundColor: color + '15',
            color: color
          }}
        >
          {cambio}
        </span>
      </div>
      <p className="text-sm mb-2" style={{ color: COLORS.darkGray + 'aa' }}>
        {etiqueta}
      </p>
      <h3 className="text-3xl font-bold" style={{ color: COLORS.darkBlue }}>
        {valor}
      </h3>
    </motion.div>
  );
}
