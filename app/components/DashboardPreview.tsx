'use client'
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Smartphone, Laptop, Tablet, CheckCircle2 } from 'lucide-react';

const revenueData = [
  { month: 'Ene', value: 45000, target: 40000 },
  { month: 'Feb', value: 52000, target: 45000 },
  { month: 'Mar', value: 48000, target: 47000 },
  { month: 'Abr', value: 61000, target: 52000 },
  { month: 'May', value: 55000, target: 54000 },
  { month: 'Jun', value: 67000, target: 58000 },
];

const platformFeatures = [
  'Acceso desde cualquier dispositivo',
  'Sincronización en tiempo real',
  'Interfaz intuitiva y fácil de usar',
  'Reportes personalizables',
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup del teléfono con perspectiva */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-[380px] mx-auto">
              {/* Teléfono con efecto 3D */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Marco del teléfono */}
                <div 
                  className="relative rounded-[48px] p-3 shadow-2xl"
                  style={{ background: 'linear-gradient(145deg, #424a6f, #205285)' }}
                >
                  <div className="bg-white rounded-[40px] overflow-hidden">
                    {/* Notch superior */}
                    <div className="h-8 flex justify-center items-center bg-white relative">
                      <div className="absolute top-0 w-40 h-6 rounded-b-3xl" style={{ background: '#424a6f' }}>
                        <div className="flex items-center justify-center gap-2 h-full">
                          <div className="w-12 h-1 rounded-full" style={{ background: '#205285', opacity: 0.3 }} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenido del dashboard */}
                    <div className="p-6 pb-8 space-y-4" style={{ background: '#f8fafc' }}>
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold" style={{ color: '#205285' }}>Dashboard</h3>
                          <p className="text-xs text-gray-500">Visión General</p>
                        </div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #81b3fb, #205285)' }}>
                          <span className="text-white font-bold text-sm">CU</span>
                        </div>
                      </div>

                      {/* Tarjeta principal con gradiente */}
                      <div className="rounded-2xl p-5 shadow-lg" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
                        <p className="text-xs text-white/80 mb-1">Balance Total</p>
                        <h2 className="text-3xl font-bold text-white mb-3">$328,450</h2>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                            +18.2%
                          </span>
                          <span className="text-xs text-white/80">Este mes</span>
                        </div>
                        
                        {/* Mini gráfica dentro de la tarjeta */}
                        <div className="h-16 -mx-5 -mb-5">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                              <defs>
                                <linearGradient id="miniGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="white" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="white" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="white" 
                                strokeWidth={2} 
                                fill="url(#miniGradient)" 
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Grid de métricas */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(253, 150, 131, 0.15)' }}>
                              <div className="w-3 h-3 rounded-full" style={{ background: '#fd9683' }} />
                            </div>
                            <span className="text-xs font-semibold" style={{ color: '#fd9683' }}>+12%</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-1">Ventas</p>
                          <p className="text-lg font-bold" style={{ color: '#205285' }}>1,234</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(129, 179, 251, 0.15)' }}>
                              <div className="w-3 h-3 rounded-full" style={{ background: '#81b3fb' }} />
                            </div>
                            <span className="text-xs font-semibold" style={{ color: '#81b3fb' }}>+8%</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-1">Clientes</p>
                          <p className="text-lg font-bold" style={{ color: '#205285' }}>890</p>
                        </div>
                      </div>

                      {/* Lista de actividades */}
                      <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
                        <p className="text-xs font-semibold" style={{ color: '#205285' }}>Actividad Reciente</p>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ background: i === 1 ? '#81b3fb' : i === 2 ? '#fd9683' : '#fb7864' }} />
                            <div className="flex-1 h-2 rounded-full bg-gray-100" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div 
                  className="absolute -inset-4 -z-10 rounded-[60px] blur-2xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, #81b3fb, #205285)' }}
                />
              </motion.div>

              {/* Elementos decorativos flotantes */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20"
                style={{ width: '160px' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(253, 150, 131, 0.15)' }}>
                    <CheckCircle2 size={16} style={{ color: '#fd9683' }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Órdenes</p>
                    <p className="text-sm font-bold" style={{ color: '#205285' }}>98% Complete</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-4 bg-white rounded-2xl shadow-xl p-4 z-20"
                style={{ width: '180px' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold" style={{ color: '#205285' }}>Producción Hoy</p>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(129, 179, 251, 0.15)', color: '#205285' }}>Live</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[65, 78, 45, 92, 70, 85, 60].map((height, i) => (
                    <div 
                      key={i}
                      className="flex-1 rounded-t transition-all"
                      style={{ 
                        height: `${height}%`, 
                        background: i === 3 ? '#81b3fb' : 'rgba(129, 179, 251, 0.3)'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(129, 179, 251, 0.1)' }}>
              <span className="text-sm font-semibold" style={{ color: '#205285' }}>Dashboard Móvil</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#205285' }}>
              Gestiona tu empresa desde cualquier lugar
            </h2>
            
            <p className="text-xl mb-8 text-gray-600">
              Accede a información financiera, operacional, manufactura, compras y ventas en tiempo real. 
              Todo desde tu dispositivo móvil.
            </p>

            <div className="space-y-4 mb-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(129, 179, 251, 0.2)' }}>
                    <CheckCircle2 size={16} style={{ color: '#205285' }} />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Smartphone style={{ color: '#81b3fb' }} size={24} />
                <span className="text-sm text-gray-600">iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop style={{ color: '#fd9683' }} size={24} />
                <span className="text-sm text-gray-600">Web App</span>
              </div>
              <div className="flex items-center gap-2">
                <Tablet style={{ color: '#fb7864' }} size={24} />
                <span className="text-sm text-gray-600">Tablet</span>
              </div>
            </div>

            <button
              className="px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}
            >
              Probar Dashboard Ahora
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
