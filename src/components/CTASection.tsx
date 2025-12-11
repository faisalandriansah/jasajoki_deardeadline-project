import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-4 h-4 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-white/30 rounded-full animate-float-reverse" />
        <div className="absolute bottom-20 left-[20%] w-2 h-2 bg-white/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-40 right-[25%] w-5 h-5 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-white/20 rounded-full animate-float-reverse" />
        <div className="absolute top-1/3 right-[8%] w-4 h-4 bg-white/15 rounded-full animate-float-slow" />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/90">Online 24/7</span>
          </div>
          
          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Siap dibantu sekarang?
            <br />
            <span className="text-white/80">Kami online 24/7!</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Jangan biarkan deadline menumpuk. Hubungi kami sekarang dan selesaikan tugasmu dengan mudah!
          </p>
          
          {/* CTA Button */}
          <Button 
            size="xl" 
            className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Chat via WhatsApp
          </Button>
          
          {/* Trust text */}
          <p className="text-white/50 text-sm mt-8">
            Gratis konsultasi • Respons cepat • Tanpa komitmen
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
