import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Pelajar",
    subtitle: "SMP / SMA",
    price: "25K",
    period: "mulai dari",
    description: "Ringkas & cepat untuk tugas sehari-hari",
    features: [
      "Tugas harian & PR",
      "Pengerjaan 1-3 hari",
      "Revisi 1x gratis",
      "Format rapi",
      "Support via chat"
    ],
    popular: false,
    buttonVariant: "glass" as const
  },
  {
    name: "Mahasiswa",
    subtitle: "Universitas",
    price: "50K",
    period: "mulai dari",
    description: "Essay, makalah, dan laporan detail",
    features: [
      "Makalah & essay",
      "Laporan praktikum",
      "Pengerjaan 2-5 hari",
      "Revisi 2x gratis",
      "Plagiarism check",
      "Priority support"
    ],
    popular: true,
    buttonVariant: "hero" as const
  },
  {
    name: "Express",
    subtitle: "2-24 Jam",
    price: "100K",
    period: "mulai dari",
    description: "Prioritas tertinggi untuk deadline ketat",
    features: [
      "Semua jenis tugas",
      "Pengerjaan super cepat",
      "Revisi unlimited",
      "Tim dedicated",
      "24/7 support",
      "Garansi on-time"
    ],
    popular: false,
    badge: "Fastest",
    buttonVariant: "gradient" as const
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Harga
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pilih Paket <span className="gradient-text">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Harga transparan tanpa biaya tersembunyi. Kualitas premium, harga terjangkau.
          </p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary to-accent text-white shadow-glow-lg scale-105' 
                  : 'glass-card hover:shadow-card-hover'
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-white text-primary text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold shadow-lg">
                    <Zap className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              {/* Plan info */}
              <div className="text-center mb-8">
                <h3 className={`font-display text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.subtitle}
                </p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-sm ${plan.popular ? 'text-white' : 'text-foreground'}`}>Rp</span>
                  <span className={`font-display text-5xl font-bold ${plan.popular ? 'text-white' : 'gradient-text'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm mt-3 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-foreground/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                variant={plan.popular ? "glass-primary" : plan.buttonVariant}
                size="lg" 
                className="w-full"
              >
                Pilih Paket
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
