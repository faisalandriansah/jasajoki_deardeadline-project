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
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Mengapa Kami?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Keunggulan <span className="gradient-text">Layanan Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik untuk membantu kesuksesan akademik Anda.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-8 rounded-3xl hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
