import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Mahasiswa Teknik",
    avatar: "AP",
    rating: 5,
    comment: "Luar biasa! Laporan praktikum saya dikerjakan dengan sangat detail dan tepat waktu. Sangat recommended!"
  },
  {
    name: "Sarah Wijaya",
    role: "Siswa SMA",
    avatar: "SW",
    rating: 5,
    comment: "Tugas matematika yang tadinya bikin pusing, sekarang jadi mudah dipahami. Penjelasannya juga lengkap!"
  },
  {
    name: "Budi Santoso",
    role: "Mahasiswa Ekonomi",
    avatar: "BS",
    rating: 5,
    comment: "Makalah saya dapat nilai A! Kualitasnya benar-benar premium dan plagiarism free."
  },
  {
    name: "Dewi Lestari",
    role: "Siswa SMP",
    avatar: "DL",
    rating: 5,
    comment: "PR bahasa Inggris jadi gampang! Responnya cepat dan hasilnya bagus banget."
  },
  {
    name: "Rizky Fadillah",
    role: "Mahasiswa IT",
    avatar: "RF",
    rating: 5,
    comment: "Coding assignment selesai dalam 24 jam. Clean code dan well documented. Top!"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section 
    id="testimoni"
    className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kata Mereka <span className="gradient-text">Tentang Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ribuan siswa dan mahasiswa sudah terbantu. Lihat apa kata mereka.
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="glass-card rounded-3xl p-10 md:p-12 relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-24 h-24 text-primary" />
              </div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].comment}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:shadow-card-hover hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button 
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:shadow-card-hover hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
          
          {/* Dots pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-primary to-accent' 
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
