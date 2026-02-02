import { RegisterForm } from "@/app/components/RegisterForm";
import { Starfield } from "@/app/components/Starfield";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <Starfield />

      {/* Botón Regresar Superior */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <div className="flex items-center gap-2 text-white/70 hover:text-white cursor-pointer group transition-colors">
            <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium">Regresar</span>
          </div>
        </Link>
      </div>

      <RegisterForm />
    </main>
  );
}