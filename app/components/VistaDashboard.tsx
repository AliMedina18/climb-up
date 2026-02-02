"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Corregido el import
import { 
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { TarjetaKPI } from './TarjetaKPI';

const COLORS = {
  primary: '#81b3fb',
  lightBg: '#cae2fe',
  darkBlue: '#205285',
  coralSoft: '#fd9683',
  coralAccent: '#fb7864',
  darkGray: '#424a6f',
};

const datosIngresos = [
  { mes: 'Ene', valor: 45000 },
  { mes: 'Feb', valor: 52000 },
  { mes: 'Mar', valor: 48000 },
  { mes: 'Abr', valor: 61000 },
  { mes: 'May', valor: 55000 },
  { mes: 'Jun', valor: 67000 },
];

const datosGastos = [
  { categoria: 'Nómina', valor: 45000, color: COLORS.primary },
  { categoria: 'Operación', valor: 28000, color: COLORS.coralAccent },
  { categoria: 'Marketing', valor: 18000, color: COLORS.darkBlue },
  { categoria: 'Otros', valor: 12000, color: COLORS.coralSoft },
];

export function VistaDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-[1600px] mx-auto" // Centra el contenido en pantallas ultra-wide
    >
      {/* Bienvenida */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-black mb-2 tracking-tighter" style={{ color: COLORS.darkBlue }}>
          Bienvenido, Juan Delgado
        </h2>
        <p className="text-sm md:text-base" style={{ color: COLORS.darkGray + '99' }}>
          Este es el estado actual de tu rendimiento financiero.
        </p>
      </div>

      {/* Tarjetas KPI - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
        <TarjetaKPI 
          etiqueta="Ingresos Totales"
          valor="$342,500"
          cambio="+12.5%"
          tendencia="up"
          color={COLORS.primary}
          retraso={0}
        />
        <TarjetaKPI 
          etiqueta="Gastos Operativos"
          valor="$156,200"
          cambio="+8.2%"
          tendencia="down"
          color={COLORS.coralAccent}
          retraso={0.1}
        />
        <div className="sm:col-span-2 lg:col-span-1"> {/* Hace que la 3ra tarjeta sea más ancha en tablet */}
          <TarjetaKPI 
            etiqueta="Balance Neto"
            valor="$186,300"
            cambio="+15.3%"
            tendencia="up"
            color={COLORS.darkBlue}
            retraso={0.2}
          />
        </div>
      </div>

      {/* Gráficas - Responsive Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10">
        
        {/* Gráfica de Ingresos */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#205285]">
                Ingresos Mensuales
              </h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Análisis 2026
              </p>
            </div>
            <div className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold">
              +24% vs año anterior
            </div>
          </div>
          
          <div className="h-[250px] md:h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={datosIngresos}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis 
                  dataKey="mes" 
                  stroke="#94a3b8" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '16px',
                    color: 'white',
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                  }}
                  itemStyle={{ color: '#81b3fb' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="valor" 
                  stroke={COLORS.primary} 
                  strokeWidth={4}
                  fill="url(#colorRevenue)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Gráfica de Gastos */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50"
        >
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#205285]">
              Distribución de Gastos
            </h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Gasto operativo por departamento
            </p>
          </div>
          
          <div className="h-[250px] md:h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datosGastos} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis 
                  dataKey="categoria" 
                  stroke="#94a3b8" 
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  cursor={{fill: '#f8fafb'}}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="valor" radius={[10, 10, 10, 10]} barSize={40}>
                  {datosGastos.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}