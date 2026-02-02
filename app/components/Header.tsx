"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Características', href: '#estadisticas' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Casos de Estudio', href: '#casos' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
       {/* Logo */}
      <div className="flex items-center gap-3 shrink-0 cursor-pointer group">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300" 
            style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
          <Rocket size={25} className="text-white transition-transform group-hover:rotate-12 duration-300" />
        </div>
        
        <span className="text-3xl font-extrabold  italic tracking-[[-0.1em]] bg-clip-text text-transparent bg-linear-to-r from-[#81b3fb] to-[#205285] antialiased">
          Climp Up
        </span>
      </div>
        
        {/* Navegación Escritorio - Centrada */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative text-[15px] font-semibold text-[#424a6f] hover:text-[#205285] transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#81b3fb] to-[#205285] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Botón Escritorio - Redirige a Login */}
        <div className="hidden md:block">
          <Link href="/Login">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}
                className="text-white shadow-sm hover:shadow-md transition-all duration-300 rounded-full px-13 py-2 h-11 text-[14px] font-bold flex items-center gap-2 border-none cursor-pointer group"
              >
                Inicia Sesion
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Button>
            </motion.div>
          </Link>
        </div>
        
        {/* Menú Mobile */}
        <button className="md:hidden p-2 text-[#205285]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Desplegable Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-[#424a6f] w-full text-center border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Botón Mobile - Redirige a Login */}
              <Link href="/Login" className="w-full" onClick={() => setIsOpen(false)}>
                <Button 
                  style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}
                  className="w-full text-white rounded-xl py-7 text-lg font-bold flex items-center justify-center gap-2 shadow-sm group transition-all cursor-pointer"
                >
                  Inicia Sesion
                  <ArrowRight 
                    size={25} 
                    className="transition-transform duration-300 group-hover:translate-x-1.5" 
                  />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}