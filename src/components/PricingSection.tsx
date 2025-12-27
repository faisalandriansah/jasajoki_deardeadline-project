import { Button } from "@/components/ui/button";
import { Check, Star, Zap, MessageCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Pelajar",
    subtitle: "SMP / SMA",
    price: "30K",
    period: "mulai dari",
    description: "Ringkas & cepat untuk tugas harian.",
    features: [
      "Tugas harian & PR",
      "Pengerjaan 1-3 hari",
      "Revisi 1x gratis",
      "Format rapi & standar",
      "Support via chat"
    ],
    popular: false,
    waMessage: "Halo kak, saya ingin memesan Paket Pelajar (SMP/SMA). Apakah bisa dibantu untuk pengerjaan tugas saya?"
  },
  {
    name: "Mahasiswa",
    subtitle: "Universitas / Umum",
    price: "50K",
    period: "mulai dari",
    description: "Essay, makalah, jurnal, & laporan.",
    features: [
      "Makalah, Essay & Jurnal",
      "Laporan Praktikum",
      "Pengerjaan 2-5 hari",
      "Revisi 2x gratis",
      "Cek Plagiasi (Turnitin)",
      "Prioritas Support"
    ],
    popular: true, // Ini yang akan jadi Gradient Card
    waMessage: "Halo, saya mau pesan paket Mahasiswa. Bisa bantu untuk pengerjaan tugas saya?"
  },
  {
    name: "Express",
    subtitle: "Deadline < 24 Jam",
    price: "100K",
    period: "mulai dari",
    description: "Jalur VIP untuk deadline mepet.",
    features: [
      "Semua jenis tugas",
      "Selesai hitungan jam",
      "Revisi Unlimited",
      "Tim Khusus Dedicated",
      "Support 24 Jam Non-stop",
      "Garansi Tepat Waktu"
    ],
    popular: false,
    badge: "Fastest",
    waMessage: "URGENT! Halo, saya butuh paket Express (Deadline <24 Jam). Mohon bantuannya segera ya."
  }
];

const PricingSection = () => {
  const whatsappNumber = "6285892182185"; 

  return (
    <section 
      id="harga"
      className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/50"
    >
      {/* Background Decor (Matching Hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400/10 rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute bottom-20 right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-400/10 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-blue-600" />
            Daftar Harga
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Pilih Paket <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed px-2">
            Harga transparan tanpa biaya tersembunyi. Mulai dari tugas ringan hingga skripsi.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[2rem] p-6 sm:p-8 transition-all duration-500 flex flex-col h-full ${
                plan.popular 
                  /* Card Populer: Gradient Background */
                  ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl shadow-blue-900/20 scale-100 md:scale-110 z-10 ring-1 ring-white/20' 
                  /* Card Biasa: Glass/White Effect */
                  : 'bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              {/* Badge Most Popular */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max">
                  <div className="flex items-center gap-1.5 px-6 py-2 rounded-full bg-white text-blue-600 text-sm font-bold shadow-xl ring-4 ring-white/20">
                    <Star className="w-4 h-4 fill-blue-600" />
                    Paling Laris
                  </div>
                </div>
              )}

              {/* Badge Express/Urgent */}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-max">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              {/* Konten Card */}
              <div className="text-center mb-8 pt-2">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium mb-6 px-3 py-1 rounded-full inline-block ${
                  plan.popular ? 'bg-white/20 text-white/90' : 'bg-slate-100 text-slate-600'
                }`}>
                  {plan.subtitle}
                </p>
                
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className={`text-sm mb-1.5 ${plan.popular ? 'text-white/80' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                  <div className="flex items-baseline">
                     <span className={`text-lg font-semibold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>Rp</span>
                     <span className={`text-4xl sm:text-5xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>
                <p className={`text-sm mt-4 leading-relaxed ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>
              
              {/* Garis Pemisah */}
              <div className={`h-px w-full mb-8 ${plan.popular ? 'bg-white/20' : 'bg-slate-100'}`} />
              
              {/* List Fitur */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-white/20' : 'bg-blue-50'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <span className={`text-[15px] text-left ${plan.popular ? 'text-white/90' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Tombol CTA */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block mt-auto"
              >
                <Button 
                  className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular 
                      /* Button di Card Popular (White Button) */
                      ? "bg-white text-blue-600 hover:bg-slate-50 shadow-lg border-0" 
                      /* Button di Card Biasa (Outline/Glass) */
                      : `bg-transparent border-2 shadow-sm ${
                          plan.name === 'Express'
                            ? 'border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300'
                            : 'border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300'
                        }`
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pilih Paket
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;