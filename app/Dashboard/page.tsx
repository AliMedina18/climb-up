"use client"; // <--- ESTA LÍNEA ES LA QUE FALTA

import React, { useState } from 'react';
import { MenuLateral } from '@/app/components/MenuLateral';
import { BarraSuperior } from '@/app/components/BarraSuperior';
import { PanelIA } from '@/app/components/PanelIA';
import { VistaDashboard } from '@/app/components/VistaDashboard';
import { VistaTablas } from '@/app/components/VistaTablas';
import { VistaFinanzas } from '@/app/components/VistaFinanzas';
import { VistaInformes } from '@/app/components/VistaInformes';

export default function Dashboard() {
  const [vistaActiva, setVistaActiva] = useState('dashboard');
  const [menuColapsado, setMenuColapsado] = useState(false);
  const [panelIAAbierto, setPanelIAAbierto] = useState(false);

  const renderizarVista = () => {
    switch (vistaActiva) {
      case 'dashboard': return <VistaDashboard />;
      case 'tablas': return <VistaTablas />;
      case 'finanzas': return <VistaFinanzas />;
      case 'informes': return <VistaInformes />;
      default: return <VistaDashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafb]">
      <MenuLateral 
        vistaActiva={vistaActiva}
        onCambiarVista={setVistaActiva}
        colapsado={menuColapsado}
        onToggleColapsar={() => setMenuColapsado(!menuColapsado)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <BarraSuperior onAbrirIA={() => setPanelIAAbierto(true)} />

        <div className="flex-1 overflow-y-auto">
          {/* Padding ajustado para mobile y desktop */}
          <div className="p-4 sm:p-10">
            {renderizarVista()}
          </div>
        </div>
      </div>

      <PanelIA 
        estaAbierto={panelIAAbierto}
        onCerrar={() => setPanelIAAbierto(false)}
      />
    </div>
  );
}