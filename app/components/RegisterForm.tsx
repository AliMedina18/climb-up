"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, ArrowRight, Loader2, Rocket, CheckCircle2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export function RegisterForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // BLOQUEO EN TIEMPO REAL: Solo letras y espacios
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const cleanVal = val.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); 
    setFormData({ ...formData, name: cleanVal });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirm) {
      setError("Faltan campos");
      return;
    }
    if (formData.password.length < 6) {
      setError("Clave min. 6 caracteres");
      return;
    }
    if (formData.password !== formData.confirm) {
      setError("No coinciden");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1800);
  };

  const inputStyle = (hasError: boolean) => `
    w-full pl-10 pr-10 py-2.5 rounded-xl bg-gray-100/50 transition-all outline-none text-sm border-2 
    ${hasError ? 'border-red-200 bg-red-50/40 focus:border-red-400' : 'border-transparent focus:border-[#81b3fb]/30 focus:bg-white'}
  `;

  return (
    <motion.div layout className="w-full max-w-90 bg-white/90 backdrop-blur-xl rounded-4xl shadow-2xl border border-white/50 z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div key="form" exit={{ y: -40, opacity: 0 }} className="p-6 sm:p-8">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
                  <Rocket size={16} className="text-white" />
                </div>
                <h1 className="text-2xl font-black italic tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-[#81b3fb] to-[#205285] px-1">Climp Up</h1>
              </div>
              <p className="text-[#424a6f] text-[10px] opacity-60 font-black uppercase tracking-widest">Nombre Completo</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* NOMBRE COMPLETO*/}
              <div className="space-y-0.5">
                <label className={`text-[9px] font-black uppercase tracking-widest ml-1 ${error && !formData.name ? 'text-red-500' : 'text-[#205285]'}`}>Nombre Completo</label>
                <div className="relative">
                  <User className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${error && !formData.name ? 'text-red-400' : 'text-[#81b3fb]'}`} size={16} />
                  <input 
                    type="text" 
                    placeholder="Ana Medina Oquendo" 
                    value={formData.name} 
                    onChange={handleNameChange} 
                    className={inputStyle(!!error && !formData.name)} 
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="space-y-0.5">
                <label className={`text-[9px] font-black uppercase tracking-widest ml-1 ${error && !formData.email ? 'text-red-500' : 'text-[#205285]'}`}>Email</label>
                <div className="relative">
                  <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${error && !formData.email ? 'text-red-400' : 'text-[#81b3fb]'}`} size={16} />
                  <input type="email" placeholder="admin@climpup.com" onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputStyle(!!error && !formData.email)} />
                </div>
              </div>

              {/* CLAVES CON OJITO */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-0.5">
                  <label className={`text-[9px] font-black uppercase tracking-widest ml-1 ${error && (error.includes("Clave") || error === "No coinciden") ? 'text-red-500' : 'text-[#205285]'}`}>Clave</label>
                  <div className="relative">
                    <input 
                      type={showPass ? "text" : "password"} 
                      placeholder="••••" 
                      onChange={(e) => setFormData({...formData, password: e.target.value})} 
                      className={inputStyle(!!error && (error.includes("Clave") || error === "No coinciden"))} 
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#81b3fb] hover:text-[#205285]">
                      {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>
                <div className="space-y-0.5">
                  <label className={`text-[9px] font-black uppercase tracking-widest ml-1 ${error && error === "No coinciden" ? 'text-red-500' : 'text-[#205285]'}`}>Repetir</label>
                  <div className="relative">
                    <input 
                      type={showConfirm ? "text" : "password"} 
                      placeholder="••••" 
                      onChange={(e) => setFormData({...formData, confirm: e.target.value})} 
                      className={inputStyle(!!error && error === "No coinciden")} 
                    />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#81b3fb] hover:text-[#205285]">
                      {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-4 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-[9px] text-red-500 font-bold uppercase tracking-tighter text-center">
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                animate={error ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                className="w-full py-3 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                style={{ background: "linear-gradient(135deg, #81b3fb 0%, #205285 100%)" }}
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <><span>Crear Cuenta</span><ArrowRight size={16} /></>}
              </motion.button>

              <div className="text-center pt-1">
                <p className="text-[10px] text-[#424a6f] opacity-70 font-medium">¿Ya tienes cuenta? <Link href="/Login" className="text-[#205285] font-bold">Loguéate</Link></p>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center">
            <motion.div animate={{ y: -400, opacity: 0 }} transition={{ duration: 1, ease: "easeIn" }} className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl" style={{ background: 'linear-gradient(135deg, #81b3fb 0%, #205285 100%)' }}>
              <Rocket size={24} className="text-white" />
            </motion.div>
            <CheckCircle2 size={32} className="text-green-500 mx-auto mb-3" />
            <h2 className="text-xl font-black text-[#205285] uppercase italic tracking-tighter">¡Listo!</h2>
            <p className="text-[10px] text-[#424a6f] mb-4">Código enviado a <br/><b>{formData.email}</b></p>
            <Link href="/Login" className="text-[10px] font-black text-[#81b3fb] uppercase">Volver al Login</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}