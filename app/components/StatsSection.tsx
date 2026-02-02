"use client";

import { motion } from 'motion/react';
import { TrendingUp, Users, Building2, Package, ShoppingCart, DollarSign } from 'lucide-react';

const stats = [
  { label: 'Clientes Activos', value: '890+', color: '#81b3fb' },
  { label: 'Proyectos Completados', value: '156+', color: '#205285' },
  { label: 'Productos Gestionados', value: '8,456+', color: '#fd9683' },
  { label: 'Tasa de Satisfacción', value: '98%', color: '#fb7864' },
];

const features = [
  {
    icon: DollarSign,
    title: 'Gestión Financiera',
    description: 'Control completo de ingresos, gastos y flujo de caja en tiempo real',
    color: '#81b3fb'
  },
  {
    icon: ShoppingCart,
    title: 'Control de Ventas',
    description: 'Seguimiento de órdenes, análisis de rendimiento y proyecciones',
    color: '#fd9683'
  },
  {
    icon: Package,
    title: 'Manufactura Inteligente',
    description: 'Optimiza tu producción con métricas detalladas y alertas',
    color: '#fb7864'
  },
  {
    icon: TrendingUp,
    title: 'Análisis Operacional',
    description: 'KPIs en tiempo real para tomar decisiones informadas',
    color: '#205285'
  },
  {
    icon: Building2,
    title: 'Gestión de Compras',
    description: 'Automatiza órdenes de compra y controla tu inventario',
    color: '#cae2fe'
  },
  {
    icon: Users,
    title: 'CRM Integrado',
    description: 'Gestiona relaciones con clientes y proveedores en un solo lugar',
    color: '#81b3fb'
  },
];

export function StatsSection() {
  return (
    <section id="estadisticas" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Números destacados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(129, 179, 251, 0.1)' }}>
            <span className="text-sm font-semibold" style={{ color: '#205285' }}>Resultados Comprobados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#205285' }}>
            Empresas que crecen con Climp Up
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya transformaron su gestión empresarial
          </p>
        </motion.div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#205285' }}>
            Todo lo que necesitas en un solo lugar
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${feature.color}15` }}
              >
                <feature.icon size={28} style={{ color: feature.color }} />
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ color: '#205285' }}>
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
