import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  // Konfigurasi WhatsApp
  const whatsappNumber = "6285892182185";
  const message = encodeURIComponent("Halo, saya mau konsultasi tugas dong...");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* 1. Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
      
      {/* 2. Overlay Pattern (Vignette & Texture) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-black/10" />
      
      {/* 3. Floating Particles (Static decoration to avoid config dependency) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-white/30 rounded-full blur-[2px]" />
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-white/40 rounded-full blur-[1px]" />
        <div className="absolute bottom-20 left-[20%] w-4 h-4 bg-white/20 rounded-full blur-[3px]" />
        <div className="absolute top-1/2 right-[5%] w-2 h-2 bg-white/30 rounded-full" />
      </div>
      
      {/* 4. Glow Effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[128px] opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-colors cursor-default shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-semibold text-white tracking-wide">Online 24/7 • Fast Response</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
            Siap dibantu sekarang?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">
              Deadline Bukan Masalah!
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Jangan biarkan tugas menumpuk menghambat aktivitasmu. 
            Hubungi kami sekarang, kirim detail tugas, dan terima hasil yang memuaskan.
          </p>
          
          {/* CTA Button Wrapper */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group rounded-xl text-lg font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Chat via WhatsApp
              </Button>
            </a>
            
            {/* Secondary Button (Optional - e.g. Scroll to services) */}
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-8 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white rounded-xl text-lg font-medium backdrop-blur-sm"
              onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Layanan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* Trust text */}
          <p className="text-white/40 text-xs sm:text-sm mt-8 font-medium">
            Gratis konsultasi • Privasi Terjamin • Tanpa Biaya Tersembunyi
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;