"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Loader2, Rocket, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Starfield } from "./Starfield";
import Link from "next/link";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para el ojito
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Faltan campos");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email inválido");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/Dashboard"); 
    }, 1500);
  };

  const inputStyle = (hasError: boolean) => `
    w-full pl-10 pr-10 py-2.5 rounded-xl bg-gray-100/50 transition-all outline-none text-sm border-2 
    ${hasError 
      ? 'border-red-200 bg-red-50/40 focus:border-red-400' 
      : 'border-transparent focus:border-[#81b3fb]/30 focus:bg-white'
    }
  `;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <Starfield />

      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <motion.div whileHover={{ x: -4 }} className="flex items-center gap-2 text-white/70 hover:text-white cursor-pointer group transition-colors">
            <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium">Regresar</span>
          </motion.div>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-90 bg-white/90 backdrop-blur-xl rounded-4xl shadow-2xl border border-white/50 z-10 overflow-hidden"
      >
        <div className="p-6 sm:p-8">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
                <Rocket size={16} className="text-white" />
              </div>
              <h1 className="text-2xl font-black italic tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-[#81b3fb] to-[#205285] px-1">
                Climp Up
              </h1>
            </div>
            <p className="text-[#424a6f] text-[10px] opacity-60 font-black uppercase tracking-widest">Bienvenido</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Input Correo */}
            <div className="space-y-0.5">
              <label className={`text-[9px] font-black uppercase tracking-widest ml-1 ${error && !email ? 'text-red-500' : 'text-[#205285]'}`}>
                Correo
              </label>
              <div className="relative">
                <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${error && !email ? 'text-red-400' : 'text-[#81b3fb]'}`} size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputStyle(!!error && !email)}
                  placeholder="admin@climpup.com"
                />
              </div>
            </div>

            {/* Input Contraseña con Ojito */}
            <div className="space-y-0.5">
              <label className={`text-[9px] font-black uppercase tracking-widest ml-1 ${error && !password ? 'text-red-500' : 'text-[#205285]'}`}>
                Contraseña
              </label>
              <div className="relative">
                <Lock className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${error && !password ? 'text-red-400' : 'text-[#81b3fb]'}`} size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputStyle(!!error && !password)}
                  placeholder="••••••••"
                />
                {/* Botón del ojito */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#81b3fb] hover:text-[#205285] transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="h-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="text-[9px] text-red-500 font-bold uppercase tracking-tighter"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              disabled={loading}
              whileTap={{ scale: 0.97 }}
              animate={error ? { x: [0, -4, 4, -4, 4, 0] } : {}}
              className="w-full py-3 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              style={{ background: "linear-gradient(135deg, #81b3fb 0%, #205285 100%)" }}
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <><span>Entrar</span><ArrowRight size={16} /></>}
            </motion.button>

            <div className="text-center">
              <p className="text-[10px] text-[#424a6f] opacity-70 font-medium">
                ¿No tienes cuenta?{" "}
                <Link href="/Register" className="text-[#205285] font-bold hover:underline">Regístrate</Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}