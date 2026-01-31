'use client'

import { motion } from 'framer-motion'; // Ajustado a framer-motion
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3 } from 'lucide-react';

export function HeroSection() {
  const router = useRouter(); // Hook para la navegación

  return (
    <section id="inicio" className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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

            {/* BOTÓN CON REDIRECCIÓN */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={() => router.push('./Login')} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-white font-semibold shadow-lg flex items-center justify-center gap-2 transition-shadow hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}
              >
                Comenzar Gratis
                <ArrowRight size={20} />
              </motion.button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold shadow-sm"
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

          {/* Tarjetas flotantes del lado derecho (Visual Dashboard) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] hidden lg:block"
          >
            {/* Tarjeta Principal */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 right-0 bg-white rounded-3xl shadow-2xl p-6 z-10 border border-gray-100"
              style={{ maxWidth: '380px', margin: '0 auto' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-[#205285]">Dashboard Principal</h3>
                  <p className="text-xs text-gray-400">Datos en tiempo real</p>
                </div>
                <BarChart3 className="text-[#81b3fb]" size={24} />
              </div>
              
              <div className="rounded-2xl p-6 mb-4" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
                <p className="text-sm text-white/80 mb-1">Ingresos Mensuales</p>
                <h2 className="text-3xl font-bold text-white mb-2">$67,450.00</h2>
                <div className="inline-block px-2 py-1 rounded-lg bg-white/20 text-xs text-white">
                  +12.5% crec.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[{l: 'Clientes', v: '890', c: '#205285'}, {l: 'Ventas', v: '1.2k', c: '#fd9683'}, {l: 'Stock', v: '8.4k', c: '#81b3fb'}].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-2 text-center">
                    <p className="text-[10px] text-gray-500">{stat.l}</p>
                    <p className="text-sm font-bold" style={{ color: stat.c }}>{stat.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tarjeta Crecimiento */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 bg-white rounded-2xl shadow-xl p-4 z-20 border border-gray-100 w-44"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-[#fd9683]" />
                <span className="text-xs font-bold text-[#424a6f]">Crecimiento</span>
              </div>
              <div className="h-10 flex items-end gap-1">
                {[30, 50, 40, 70, 60].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: '#fd9683' }} />
                ))}
              </div>
            </motion.div>

            {/* Decoración */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] opacity-20" style={{ background: '#81b3fb' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}