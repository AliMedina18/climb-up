"use client";

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3 } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 px-6 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(129, 179, 251, 0.1)', color: '#205285' }}
            >
              <span className="text-sm font-semibold">🚀 Sistema de Gestión Empresarial</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span style={{ color: '#205285' }}>Maximiza la </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Productividad
              </span>
            </h1>

            <p className="text-xl mb-8" style={{ color: '#424a6f' }}>
              Gestiona tu empresa con Climp Up y lleva tu negocio al siguiente nivel. 
              Escalones pequeños, creaciones gigantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-white font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}
              >
                Comenzar Gratis
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold border-2 cursor-pointer"
                style={{ borderColor: '#81b3fb', color: '#205285' }}
              >
                Ver Demo
              </motion.button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold"
                    style={{ background: i % 2 === 0 ? '#81b3fb' : '#fd9683' }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold" style={{ color: '#205285' }}>+100 empresas</p>
                <p className="text-sm" style={{ color: '#424a6f' }}>Ya confían en nosotros</p>
              </div>
            </div>
          </motion.div>

          {/* Tarjetas flotantes del lado derecho */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-150"
          >
            {/* Tarjeta principal - Dashboard preview */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 right-0 bg-white rounded-3xl shadow-2xl p-6 z-10"
              style={{ maxWidth: '380px', margin: '0 auto' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold" style={{ color: '#205285' }}>Dashboard Principal</h3>
                  <p className="text-sm text-gray-500">Enero 2026</p>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(129, 179, 251, 0.2)' }}>
                  <BarChart3 style={{ color: '#205285' }} size={20} />
                </div>
              </div>
              
              <div className="rounded-2xl p-6 mb-4" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
                <p className="text-sm text-white/80 mb-1">Ingresos Mensuales</p>
                <h2 className="text-4xl font-bold text-white mb-2">$67,450</h2>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                    +12.5%
                  </span>
                  <span className="text-sm text-white/80">vs mes anterior</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Clientes</p>
                  <p className="text-xl font-bold" style={{ color: '#205285' }}>890</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Órdenes</p>
                  <p className="text-xl font-bold" style={{ color: '#fd9683' }}>1,234</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Productos</p>
                  <p className="text-xl font-bold" style={{ color: '#81b3fb' }}>8,456</p>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta flotante 1 - Estadísticas */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20"
              style={{ width: '180px' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(253, 150, 131, 0.2)' }}>
                  <TrendingUp size={16} style={{ color: '#fd9683' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Crecimiento</p>
                  <p className="font-bold" style={{ color: '#fd9683' }}>+45%</p>
                </div>
              </div>
              <div className="h-12 flex items-end gap-1">
                {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                  <div 
                    key={i}
                    className="flex-1 rounded-t"
                    style={{ height: `${height}%`, background: '#fd9683', opacity: 0.6 + (i * 0.05) }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tarjeta flotante 2 - Tareas completadas */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -left-8 bg-white rounded-2xl shadow-xl p-4 z-20"
              style={{ width: '200px' }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold" style={{ color: '#205285' }}>Eficiencia</p>
                <CheckCircle2 size={20} style={{ color: '#81b3fb' }} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Manufactura</span>
                  <span className="font-semibold" style={{ color: '#205285' }}>93%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: '93%', background: '#81b3fb' }} />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Ventas</span>
                  <span className="font-semibold" style={{ color: '#205285' }}>87%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: '87%', background: '#fd9683' }} />
                </div>
              </div>
            </motion.div>

            {/* Decoración de fondo */}
            <div className="absolute -z-10 top-1/4 right-0 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: '#81b3fb' }} />
            <div className="absolute -z-10 bottom-1/4 left-0 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: '#fd9683' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
