"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Starfield } from "./Starfield";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validaciones de JavaScript
    if (!email) {
      setError("El correo electrónico es obligatorio.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, ingresa un formato de correo válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres por seguridad.");
      return;
    }

    setLoading(true);
    // Simulación de petición al servidor
    setTimeout(() => {
      setLoading(false);
      // Aquí iría tu lógica de redirección o Auth
    }, 2000);
  };

  // Animación de sacudida para errores
  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <Starfield />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-[2rem] shadow-[0_20px_50px_rgba(32,82,133,0.3)] border border-white/50 z-10"
      >
        <div className="p-8 sm:p-10">
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              className="text-4xl font-black tracking-tight mb-2"
              style={{ color: "#205285" }}
            >
              Climp Up
            </motion.h1>
            <p className="text-[#424a6f] font-medium opacity-70">Gestiona tu éxito empresarial</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1" style={{ color: "#424a6f" }}>Correo Electrónico</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-[#81b3fb]" size={18} style={{ color: "#81b3fb" }} />
                <input
                  type="email"
                  placeholder="ejemplo@climpup.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent bg-gray-100/50 focus:bg-white focus:border-[#81b3fb] focus:ring-0 transition-all outline-none text-[#424a6f]"
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1" style={{ color: "#424a6f" }}>Contraseña</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-[#81b3fb]" size={18} style={{ color: "#81b3fb" }} />
                <input
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent bg-gray-100/50 focus:bg-white focus:border-[#81b3fb] focus:ring-0 transition-all outline-none text-[#424a6f]"
                />
              </div>
            </div>

            {/* Mensaje de Error Animado */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-[#fb7864] text-sm font-semibold bg-[#fb7864]/10 p-3 rounded-lg"
                >
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón Dinámico */}
            <motion.button
              disabled={loading}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(129,179,251,0.4)" }}
              whileTap={{ scale: 0.95 }}
              variants={shakeAnimation}
              animate={error ? "shake" : ""}
              className="w-full py-4 mt-4 rounded-2xl text-white font-bold flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-80"
              style={{ background: "linear-gradient(135deg, #81b3fb 0%, #205285 100%)" }}
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>
                  <span className="relative z-10">Iniciar Sesión</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
              {/* Efecto de brillo al pasar el mouse */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </motion.button>
          </form>

          <div className="mt-8 text-center text-sm font-medium text-[#424a6f]/60">
            ¿Problemas para entrar? <button className="text-[#81b3fb] hover:underline">Contactar soporte</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}