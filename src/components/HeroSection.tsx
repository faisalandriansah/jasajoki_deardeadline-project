import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown, Zap, Shield, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
      
      {/* Floating 3D objects */}
      <div className="absolute top-32 left-[15%] animate-float opacity-60">
        <div className="w-16 h-20 bg-gradient-to-br from-primary to-accent rounded-lg shadow-glow transform rotate-12" />
      </div>
      <div className="absolute top-40 right-[20%] animate-float-slow opacity-50">
        <div className="w-12 h-12 bg-white/80 backdrop-blur rounded-xl shadow-card transform -rotate-6" />
      </div>
      <div className="absolute bottom-40 left-[25%] animate-float-reverse opacity-40">
        <div className="w-20 h-14 bg-gradient-to-br from-accent/80 to-primary/80 rounded-2xl shadow-glow-accent transform rotate-6" />
      </div>
      <div className="absolute bottom-32 right-[15%] animate-float opacity-50">
        <div className="w-10 h-10 bg-white/70 backdrop-blur rounded-full shadow-lg" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,108,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,108,247,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-glass mb-8 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">Online 24/7 • Siap Membantu</span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up [animation-delay:100ms] opacity-0">
            <span className="text-foreground">Joki Tugas Profesional</span>
            <br />
            <span className="gradient-text">Cepat, Rapi, Terjamin.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:200ms] opacity-0">
            Asistensi akademik untuk SMP, SMA, hingga Mahasiswa. 
            Pengerjaan cepat, kualitas premium, dan privasi aman.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up [animation-delay:300ms] opacity-0">
            <Button variant="hero" size="xl" className="group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Hubungi WhatsApp
            </Button>
            <Button variant="glass" size="xl">
              Lihat Harga
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:400ms] opacity-0">
            <div className="glass-card px-5 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-foreground/90">Fast Delivery</span>
            </div>
            <div className="glass-card px-5 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-foreground/90">Premium Quality</span>
            </div>
            <div className="glass-card px-5 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-foreground/90">100% Confidential</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
