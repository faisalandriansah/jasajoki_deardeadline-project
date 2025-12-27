import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Achmad Faisal Andriansah",
    role: "Mahasiswa ",
    avatar: "FA",
    rating: 5,
    comment: "Luar biasa! Laporan praktikum saya dikerjakan dengan sangat detail dan tepat waktu. Sangat recommended!"
  },
  {
    name: "Fiko Febrianto",
    role: "Mahasiswa",
    avatar: "FF",
    rating: 5,
    comment: "Tugas matematika yang tadinya bikin pusing, sekarang jadi mudah dipahami. Penjelasannya juga lengkap!"
  },
  {
    name: "Bunga Sari",
    role: "Siswi SMA",
    avatar: "BS",
    rating: 5,
    comment: "tugas essay saya selesai dengan hasil yang memuaskan. Terima kasih DearDeadline!"
  },
  {
    name: "Aina Nurul",
    role: "Siswi SMP",
    avatar: "AN",
    rating: 5,
    comment: "PR bahasa Inggris jadi gampang dikerjakan. Penulisannya rapi dan sesuai dengan kaidah yang benar."
  },
  {
    name: "Lionel Suhud",
    role: "Siswa SMK",
    avatar: "LS",
    rating: 5,
    comment: "Tugas presentasi saya dibuat dengan desain yang menarik dan informatif. Sangat membantu!"
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

  const goTo = (index) => {
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
      className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/30"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-blue-400/10 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-purple-400/10 rounded-full blur-[80px] sm:blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 shadow-sm">
            <MessageSquareQuote className="w-3.5 h-3.5 fill-blue-600" />
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Kata Mereka <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tentang Kami</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Ribuan siswa dan mahasiswa sudah terbantu. Lihat apa kata mereka.
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          <div className="relative">
            
            {/* Main testimonial card */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl shadow-blue-900/5 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden transition-all duration-500">
              {/* Quote icon bg */}
              <div className="absolute top-6 right-6 opacity-5">
                <Quote className="w-20 h-20 sm:w-24 sm:h-24 text-blue-600 fill-blue-600" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-current drop-shadow-sm" />
                  ))}
                </div>
                
                {/* Comment */}
                <p 
                  key={currentIndex} // Key change triggers animation
                  className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium animate-fade-up"
                >
                  "{testimonials[currentIndex].comment}"
                </p>
                
                {/* Author */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 ring-4 ring-white">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-slate-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows (Hidden on Mobile, Visible on Desktop) */}
            <button 
              onClick={prev}
              className="hidden md:flex absolute -left-5 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg items-center justify-center hover:scale-110 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 z-20 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-blue-600" />
            </button>
            <button 
              onClick={next}
              className="hidden md:flex absolute -right-5 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg items-center justify-center hover:scale-110 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 z-20 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600" />
            </button>
          </div>
          
          {/* Dots pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;