import { FileText, BookText, Presentation, FlaskConical, NotebookPen, Palette } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Tugas Harian",
    description: "PR, latihan soal, dan tugas harian lainnya.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookText,
    title: "Makalah / Essay",
    description: "Penulisan makalah dan essay dengan format akademis.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Presentation,
    title: "PPT Presentasi",
    description: "Slide presentasi profesional dan menarik.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: FlaskConical,
    title: "Laporan Praktikum",
    description: "Laporan praktikum lengkap dengan analisis.",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: NotebookPen,
    title: "Ringkasan Materi",
    description: "Rangkuman materi untuk belajar lebih efektif.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Palette,
    title: "Desain Kreatif",
    description: "Poster, Infografis, Feed Instagram, atau desain tugas lainnya.",
    color: "from-indigo-500 to-blue-500"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-radial from-blue-50 to-transparent rounded-full opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs sm:text-sm font-medium mb-4 shadow-sm">
            Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Apa yang Bisa <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Kami Bantu?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Berbagai jenis tugas akademik dari berbagai jenjang pendidikan.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-[2px] transition-all duration-500 hover:-translate-y-2"
            >
              {/* 1. Gradient Border Effect (Muncul saat hover) */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              
              {/* 2. Container Border yang Solid */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* 3. Inner Card Content (White background) */}
              <div className="relative h-full bg-slate-50 group-hover:bg-white rounded-[22px] p-6 sm:p-8 transition-colors duration-300 overflow-hidden">
                
                {/* Icon Wrapper */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed group-hover:text-slate-600">
                  {service.description}
                </p>

                {/* Decorative Blur Inside Card */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;