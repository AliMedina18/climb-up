"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; // Importante para la navegación
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Starfield } from "./Starfield";

export function LoginForm() {
  const router = useRouter(); // Inicializamos el router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 1. Validaciones de JavaScript
    if (!email || !password) {
      setError("Ambos campos son obligatorios.");
      return;
    }

    if (!email.includes("@")) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // 2. Inicia Proceso de Login y Redirección
    setLoading(true);

    // Simulamos una respuesta del servidor de 1.5 segundos
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard"); 
    }, 1500);
  };

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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 z-10"
      >
        <div className="p-8 sm:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-[#205285] mb-2 tracking-tight">Climp Up</h1>
            <p className="text-[#424a6f] opacity-60">Ingresa tus credenciales</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[#424a6f] ml-1">Correo</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#81b3fb]" size={18} />
                <input
                  type="email"
                  placeholder="admin@climpup.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100/50 focus:bg-white border-2 border-transparent focus:border-[#81b3fb] transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[#424a6f] ml-1">Contraseña</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#81b3fb]" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100/50 focus:bg-white border-2 border-transparent focus:border-[#81b3fb] transition-all outline-none"
                />
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center gap-2 text-[#fb7864] text-xs font-bold bg-[#fb7864]/10 p-4 rounded-xl border border-[#fb7864]/20"
                >
                  <AlertCircle size={16} />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={shakeAnimation}
              animate={error ? "shake" : ""}
              className="w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-3 relative overflow-hidden group shadow-lg"
              style={{ background: "linear-gradient(135deg, #81b3fb 0%, #205285 100%)" }}
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>
                  <span className="relative z-10">Inicia Sesión</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}