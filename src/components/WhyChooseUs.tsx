import { Zap, PenTool, BookOpen, Lock, Users, Moon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pengerjaan Cepat",
    description: "Deadline ketat? Kami siap membantu dengan pengerjaan super cepat."
  },
  {
    icon: PenTool,
    title: "Kualitas Rapih",
    description: "Hasil kerja profesional dengan format dan struktur yang sempurna."
  },
  {
    icon: BookOpen,
    title: "Semua Mata Pelajaran",
    description: "Dari matematika hingga bahasa, semua mata pelajaran kami kuasai."
  },
  {
    icon: Lock,
    title: "Privasi Aman",
    description: "Data dan identitas Anda terjaga kerahasiaannya 100%."
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description: "Dikerjakan oleh para ahli dengan pengalaman bertahun-tahun."
  },
  {
    icon: Moon,
    title: "Layanan 24/7",
    description: "Kapanpun Anda butuh, kami selalu siap melayani."
  }
];

const WhyChooseUs = () => {
  return (
    <section
      id="layanan"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-slate-50/30"
    >
      {/* Background elements - Adjusted for visual balance */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-40 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/10 rounded-full blur-[80px] sm:blur-[100px]" />
      <div className="absolute -bottom-40 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 shadow-sm">
            Mengapa Kami?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Keunggulan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Layanan Kami</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Kami berkomitmen memberikan layanan terbaik untuk membantu kesuksesan akademik Anda.
          </p>
        </div>
        
        {/* Features grid - Responsive Breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl border border-white/50 p-6 sm:p-8 rounded-[2rem] hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed group-hover:text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;