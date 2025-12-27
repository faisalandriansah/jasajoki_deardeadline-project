import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight, BookOpen, Laptop, Coffee, CheckCircle2, PenTool } from "lucide-react";

const CTASection = () => {
  // Konfigurasi WhatsApp
  const whatsappNumber = "6285892182185";
  const message = encodeURIComponent("Halo, saya tertarik untuk menggunakan layanan DearDeadline. Bisa bantu saya dengan informasi lebih lanjut?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* 1. Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
      
      {/* 2. Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-black/5" />
      
      {/* 3. Glow Effects */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* --- KOLOM KIRI: TEKS --- */}
          <div className="flex-1 text-center lg:text-left w-full max-w-2xl lg:max-w-none mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 hover:bg-white/20 transition-colors cursor-default shadow-lg">
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-semibold text-white tracking-wide">Online 24/7</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
              Tugas Numpuk? <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">
                Kami Bantu Bereskan!
              </span>
            </h2>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg text-blue-50/90 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Biarkan kami yang menangani tugas akademikmu. Hasil rapi, tepat waktu, dan privasi aman. Kamu tinggal terima beres!
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 sm:h-14 px-8 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group rounded-xl text-lg font-bold"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Chat WhatsApp
                </Button>
              </a>
              
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 sm:h-14 px-8 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white rounded-xl text-lg font-medium backdrop-blur-sm"
                onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Layanan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-white/40 text-xs sm:text-sm mt-6 font-medium">
              *Gratis konsultasi & tanya harga dulu.
            </p>
          </div>

          {/* --- KOLOM KANAN: ILUSTRASI VISUAL CODING (100% Works) --- */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-10 lg:mt-0">
             <div className="relative w-[300px] sm:w-[400px] aspect-square flex items-center justify-center">
                
                {/* 1. Background Glow Center */}
                <div className="absolute inset-0 bg-white/10 blur-[80px] rounded-full animate-pulse-slow" />

                {/* === START: VISUAL COMPOSITION === */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  
                  {/* LAPTOP BASE (CSS Shape) */}
                  <div className="relative w-64 sm:w-80 h-40 sm:h-48 bg-slate-900 rounded-2xl border-4 border-slate-700 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out group/laptop overflow-hidden animate-float">
                    {/* Screen Header */}
                    <div className="h-6 bg-slate-800 w-full flex items-center gap-2 px-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    {/* Screen Content (Code Lines Animation) */}
                    <div className="p-4 space-y-3">
                       <div className="h-2 w-3/4 bg-slate-700 rounded-full animate-pulse" />
                       <div className="h-2 w-1/2 bg-slate-700 rounded-full animate-pulse delay-75" />
                       <div className="h-2 w-full bg-slate-700 rounded-full animate-pulse delay-150" />
                       <div className="h-2 w-5/6 bg-slate-700 rounded-full animate-pulse delay-300" />
                       
                       {/* Success Dialog Popup inside Laptop */}
                       <div className="mt-4 bg-green-500/20 border border-green-500/50 p-3 rounded-lg flex items-center gap-3 animate-fade-in-up">
                         <CheckCircle2 className="w-5 h-5 text-green-400" />
                         <span className="text-xs text-green-100 font-mono">Tugas_Selesai.docx</span>
                       </div>
                    </div>
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </div>

                  {/* FLOATING ICONS (CSS 3D Elements) */}
                  
                  {/* 1. Book (Kiri Atas) */}
                  <div className="absolute -top-6 -left-4 sm:-left-8 bg-white p-3 rounded-2xl shadow-xl animate-float-slow transform -rotate-12 z-20">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* 2. Coffee (Kanan Bawah) */}
                  <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-white p-3 rounded-2xl shadow-xl animate-float-reverse transform rotate-12 z-20">
                    <Coffee className="w-8 h-8 text-amber-600" />
                  </div>

                  {/* 3. Pen/Stationery (Kiri Bawah) */}
                  <div className="absolute bottom-10 -left-8 sm:-left-12 bg-white/90 backdrop-blur p-2.5 rounded-xl shadow-lg animate-float transform rotate-45 z-10 hidden sm:block">
                    <PenTool className="w-6 h-6 text-purple-600" />
                  </div>

                  {/* 4. Score Badge (Kanan Atas) */}
                   <div className="absolute top-0 right-0 sm:-right-4 bg-white/95 backdrop-blur-xl px-4 py-2 rounded-xl shadow-2xl border-2 border-green-100 animate-float-slow z-30 transform rotate-6 hover:rotate-0 transition-transform">
                      <div className="text-center">
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Nilai</p>
                        <p className="text-xl text-green-600 font-black">A+</p>
                      </div>
                   </div>

                </div>
                {/* === END: VISUAL COMPOSITION === */}

             </div>
          </div>

        </div>
      </div>

      {/* Style Animasi CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(0.9); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; animation-delay: 0.5s; opacity: 0; }
        
        .rotate-y-12 { transform: rotateY(-12deg) rotateX(5deg); }
      `}</style>
    </section>
  );
};

export default CTASection;