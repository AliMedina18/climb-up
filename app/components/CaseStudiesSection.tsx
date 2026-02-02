"use client";

import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Quote } from 'lucide-react';

const financialData = [
  { month: 'Jul', ingreso: 52000, gasto: 38000, objetivo: 50000 },
  { month: 'Ago', ingreso: 61000, gasto: 42000, objetivo: 55000 },
  { month: 'Sep', ingreso: 58000, gasto: 39000, objetivo: 57000 },
  { month: 'Oct', ingreso: 73000, gasto: 45000, objetivo: 65000 },
  { month: 'Nov', ingreso: 68000, gasto: 41000, objetivo: 67000 },
  { month: 'Dic', ingreso: 82000, gasto: 48000, objetivo: 75000 },
];

const salesByCategory = [
  { category: 'Electrónica', Q1: 4200, Q2: 4800, Q3: 5100, Q4: 5600 },
  { category: 'Textiles', Q1: 3100, Q2: 3400, Q3: 3800, Q4: 4100 },
  { category: 'Alimentos', Q1: 2800, Q2: 3200, Q3: 3500, Q4: 3900 },
  { category: 'Servicios', Q1: 2100, Q2: 2400, Q3: 2900, Q4: 3300 },
];

const operationalMetrics = [
  { month: 'Ene', eficiencia: 78, calidad: 85, tiempo: 72 },
  { month: 'Feb', eficiencia: 82, calidad: 88, tiempo: 76 },
  { month: 'Mar', eficiencia: 85, calidad: 90, tiempo: 80 },
  { month: 'Abr', eficiencia: 88, calidad: 92, tiempo: 83 },
  { month: 'May', eficiencia: 87, calidad: 91, tiempo: 85 },
  { month: 'Jun', eficiencia: 92, calidad: 95, tiempo: 88 },
];

const testimonials = [
  {
    name: 'María González',
    role: 'CEO, TechCorp',
    comment: 'Climp Up transformó completamente nuestra gestión operativa. Ahora tenemos visibilidad total de nuestros procesos.',
    avatar: '#81b3fb'
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director de Operaciones, IndustrialMax',
    comment: 'La integración de todos los módulos nos permitió reducir costos en un 30% y mejorar nuestra eficiencia notablemente.',
    avatar: '#fd9683'
  },
  {
    name: 'Ana Martínez',
    role: 'CFO, Global Ventures',
    comment: 'Los reportes financieros en tiempo real nos dan la agilidad que necesitamos para tomar decisiones estratégicas.',
    avatar: '#fb7864'
  },
];

export function CaseStudiesSection() {
  return (
    <section id="casos" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(129, 179, 251, 0.1)' }}>
            <span className="text-sm font-semibold" style={{ color: '#205285' }}>Casos de Éxito</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#205285' }}>
            Datos que impulsan decisiones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Análisis completo de todas las áreas críticas de tu negocio
          </p>
        </motion.div>

        {/* Análisis Financiero - Card grande */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8"
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-3" style={{ color: '#205285' }}>
                Análisis Financiero Completo
              </h3>
              <p className="text-gray-600 text-lg">
                Monitoreo de ingresos, gastos y objetivos en tiempo real
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Crecimiento Anual</p>
                <p className="text-2xl font-bold" style={{ color: '#81b3fb' }}>+58%</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Margen Neto</p>
                <p className="text-2xl font-bold" style={{ color: '#fd9683' }}>42%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={financialData}>
                <defs>
                  <linearGradient id="colorIngreso" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#81b3fb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#81b3fb" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorGasto" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fd9683" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#fd9683" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area type="monotone" dataKey="ingreso" stroke="#81b3fb" strokeWidth={3} fillOpacity={1} fill="url(#colorIngreso)" name="Ingresos" />
                <Area type="monotone" dataKey="gasto" stroke="#fd9683" strokeWidth={3} fillOpacity={1} fill="url(#colorGasto)" name="Gastos" />
                <Line type="monotone" dataKey="objetivo" stroke="#205285" strokeWidth={2} strokeDasharray="5 5" name="Objetivo" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Grid de 2 columnas - Ventas y Operaciones */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Ventas por Categoría */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#205285' }}>
                Ventas por Categoría
              </h3>
              <p className="text-gray-600">
                Rendimiento trimestral comparativo
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesByCategory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="category" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'white', 
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Bar dataKey="Q4" fill="#81b3fb" radius={[8, 8, 0, 0]} name="Q4 2025" />
                  <Bar dataKey="Q3" fill="#cae2fe" radius={[8, 8, 0, 0]} name="Q3 2025" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Indicadores Operacionales */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#205285' }}>
                Indicadores Operacionales
              </h3>
              <p className="text-gray-600">
                KPIs clave de rendimiento mensual
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={operationalMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'white', 
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    formatter={(value) => `${value}%`}
                  />
                  <Line type="monotone" dataKey="eficiencia" stroke="#81b3fb" strokeWidth={3} name="Eficiencia" dot={{ fill: '#81b3fb', r: 5 }} />
                  <Line type="monotone" dataKey="calidad" stroke="#fd9683" strokeWidth={3} name="Calidad" dot={{ fill: '#fd9683', r: 5 }} />
                  <Line type="monotone" dataKey="tiempo" stroke="#fb7864" strokeWidth={3} name="Tiempo" dot={{ fill: '#fb7864', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#205285' }}>
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <Quote size={32} style={{ color: testimonial.avatar, opacity: 0.3 }} className="mb-4" />
               <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: testimonial.avatar }}
                  >
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#205285' }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div 
            className="rounded-3xl p-12 md:p-16 text-center shadow-xl relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #205285 0%, #424a6f 100%)' }}
          >
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: '#81b3fb' }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: '#fd9683' }} />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#cae2fe' }}>
                ¿Listo para transformar tu empresa?
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Únete a más de 100 empresas que ya están escalando con Climp Up. Escalones pequeños, creaciones gigantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <motion.button
                  whileTap={{ scale: 0.98 }} 
                  className="px-8 py-4 rounded-full font-semibold text-white cursor-pointer transition-all duration-200 hover:opacity-90 active:opacity-100 shadow-sm"
                  style={{ background: '#fd9683' }}
                >
                  Solicita una Demo Gratuita
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full font-semibold bg-white border border-gray-200 text-[#205285] cursor-pointer transition-all duration-200 hover:bg-gray-50 shadow-sm"
                >
                  Hablar con Ventas
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
