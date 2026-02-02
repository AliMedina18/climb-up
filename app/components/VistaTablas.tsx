"use client";

import React from 'react';
import { motion } from 'motion/react';

const COLORS = {
  primary: '#81b3fb',
  lightBg: '#cae2fe',
  darkBlue: '#205285',
  coralAccent: '#fb7864',
  darkGray: '#424a6f',
};

const datosTabla = [
  { id: 'TRX-001', fecha: '2026-01-28', concepto: 'Venta producto A', monto: '$12,500', estado: 'Aprobado' },
  { id: 'TRX-002', fecha: '2026-01-29', concepto: 'Mantenimiento equipos', monto: '$3,200', estado: 'Pendiente' },
  { id: 'TRX-003', fecha: '2026-01-30', concepto: 'Materia prima Q1', monto: '$28,900', estado: 'Aprobado' },
  { id: 'TRX-004', fecha: '2026-01-30', concepto: 'Inversión digital', monto: '$15,000', estado: 'Aprobado' },
  { id: 'TRX-005', fecha: '2026-01-31', concepto: 'Producción lote 045', monto: '$42,300', estado: 'Pendiente' },
  { id: 'TRX-006', fecha: '2026-02-01', concepto: 'Publicidad online', monto: '$8,750', estado: 'Aprobado' },
  { id: 'TRX-007', fecha: '2026-02-01', concepto: 'Pago proveedores', monto: '$19,400', estado: 'Pendiente' },
];

export function VistaTablas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color: COLORS.darkBlue }}>
          Tablas de Datos
        </h2>
        <p style={{ color: COLORS.darkGray + 'bb' }}>
          Gestiona y visualiza tus transacciones
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between" style={{ backgroundColor: COLORS.lightBg + '30' }}>
          <h3 className="text-lg font-semibold" style={{ color: COLORS.darkBlue }}>
            Transacciones Recientes
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-xl text-white font-medium"
            style={{ backgroundColor: COLORS.primary }}
          >
            Exportar
          </motion.button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: '#f8fafb' }}>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: COLORS.darkGray }}>ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: COLORS.darkGray }}>Fecha</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: COLORS.darkGray }}>Concepto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: COLORS.darkGray }}>Monto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: COLORS.darkGray }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {datosTabla.map((fila, index) => (
                <motion.tr
                  key={fila.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ backgroundColor: '#f8fafb' }}
                  className="border-b border-gray-100 cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: COLORS.primary }}>
                    {fila.id}
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: COLORS.darkGray }}>
                    {fila.fecha}
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: COLORS.darkGray }}>
                    {fila.concepto}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold" style={{ color: COLORS.darkBlue }}>
                    {fila.monto}
                  </td>
                  <td className="px-6 py-4">
                    <span 
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: fila.estado === 'Aprobado' ? COLORS.primary + '20' : COLORS.coralAccent + '20',
                        color: fila.estado === 'Aprobado' ? COLORS.primary : COLORS.coralAccent
                      }}
                    >
                      {fila.estado}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
