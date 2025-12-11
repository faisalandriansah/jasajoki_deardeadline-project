import { FileText, BookText, Presentation, FlaskConical, NotebookPen, Code } from "lucide-react";

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
    icon: Code,
    title: "Coding Assignment",
    description: "Tugas pemrograman berbagai bahasa.",
    color: "from-indigo-500 to-blue-500"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Layanan
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Apa yang Bisa <span className="gradient-text">Kami Bantu?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Berbagai jenis tugas akademik dari berbagai jenjang pendidikan.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 overflow-hidden hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-[2px] bg-card rounded-[22px]" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
              
              {/* Hover glow */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
