"use client";

import { motion } from 'motion/react';
import { Menu, Rocket } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
            <Rocket size={20} className="text-white" />
          </div>
          <span className="text-2xl font-bold" style={{ color: '#205285' }}>
            Climp Up
          </span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#424a6f' }}>Inicio</a>
          <a href="#estadisticas" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#424a6f' }}>Características</a>
          <a href="#dashboard" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#424a6f' }}>Dashboard</a>
          <a href="#casos" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#424a6f' }}>Casos de Estudio</a>
          <Button 
            style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}
            className="text-white hover:opacity-90 rounded-full px-6"
          >
            Comenzar Ahora
          </Button>
        </nav>
        
        <button className="md:hidden" style={{ color: '#205285' }}>
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  );
}