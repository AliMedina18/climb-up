"use client";

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: '#81b3fb',
  lightBg: '#cae2fe',
  darkBlue: '#205285',
  darkGray: '#424a6f',
};

const notificaciones = [
  { id: 1, titulo: 'Nueva venta registrada', descripcion: 'Ana García - $12,500', tiempo: '5 min', noLeida: true },
  { id: 2, titulo: 'Gasto aprobado', descripcion: 'Carlos Ruiz - $3,200', tiempo: '15 min', noLeida: true },
  { id: 3, titulo: 'Informe mensual listo', descripcion: 'Resumen de enero disponible', tiempo: '1 hora', noLeida: false },
];

interface MenuNotificacionesProps {
  estaAbierto: boolean;
  onCerrar: () => void;
}

export function MenuNotificaciones({ estaAbierto }: MenuNotificacionesProps) {
  return (
    <AnimatePresence>
      {estaAbierto && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ zIndex: 50 }}
        >
          <div className="p-4 border-b" style={{ backgroundColor: COLORS.lightBg }}>
            <h3 className="font-semibold" style={{ color: COLORS.darkBlue }}>Notificaciones</h3>
            <p className="text-xs mt-1" style={{ color: COLORS.darkGray }}>Tienes 2 nuevas notificaciones</p>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notificaciones.map((notif) => (
              <motion.div
                key={notif.id}
                whileHover={{ backgroundColor: '#f8fafb' }}
                className="p-4 border-b border-gray-100 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div 
                    className={`w-2 h-2 rounded-full mt-2 ${notif.noLeida ? '' : 'opacity-0'}`}
                    style={{ backgroundColor: COLORS.primary }}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1" style={{ color: COLORS.darkBlue }}>
                      {notif.titulo}
                    </p>
                    <p className="text-sm mb-2" style={{ color: COLORS.darkGray }}>
                      {notif.descripcion}
                    </p>
                    <p className="text-xs" style={{ color: COLORS.darkGray + '80' }}>
                      Hace {notif.tiempo}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="p-4 border-t">
            <button className="w-full text-center text-sm font-medium" style={{ color: COLORS.primary }}>
              Ver todas las notificaciones
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
