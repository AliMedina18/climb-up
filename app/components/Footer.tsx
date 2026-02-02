"use client";

import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
                <Rocket size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#205285' }}>
                Climp Up
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sistema de gestión empresarial completo que te ayuda a escalar tu negocio de manera inteligente. 
              Escalones pequeños, creaciones gigantes.
            </p>
            <div className="flex gap-3">
              <a 
                aria-label='link-Linkedin'
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(129, 179, 251, 0.1)' }}
              >
                <Linkedin size={18} style={{ color: '#205285' }} />
              </a>
              <a 
                aria-label='link-Twitter'
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(129, 179, 251, 0.1)' }}
              >
                <Twitter size={18} style={{ color: '#205285' }} />
              </a>
              <a 
                aria-label='link-Facebook'
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(129, 179, 251, 0.1)' }}
              >
                <Facebook size={18} style={{ color: '#205285' }} />
              </a>
              <a
                aria-label='link-Instagram'
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(129, 179, 251, 0.1)' }}
              >
                <Instagram size={18} style={{ color: '#205285' }} />
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#205285' }}>
              Producto
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Características</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Precios</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Seguridad</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Actualizaciones</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#205285' }}>
              Empresa
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Acerca de</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Carreras</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#205285' }}>
              Recursos
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentación</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tutoriales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Soporte</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">API</a></li>
            </ul>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(129, 179, 251, 0.1)' }}>
              <Mail size={18} style={{ color: '#205285' }} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-semibold" style={{ color: '#205285' }}>info@climpup.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(129, 179, 251, 0.1)' }}>
              <Phone size={18} style={{ color: '#205285' }} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Teléfono</p>
              <p className="text-sm font-semibold" style={{ color: '#205285' }}>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(129, 179, 251, 0.1)' }}>
              <MapPin size={18} style={{ color: '#205285' }} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Ubicación</p>
              <p className="text-sm font-semibold" style={{ color: '#205285' }}>Ciudad, País</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Climp Up. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacidad</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Términos</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
