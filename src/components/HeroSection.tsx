import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ChevronDown,
  Zap,
  Shield,
  Award,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [books, setBooks] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterText, setTypewriterText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Cepat", "Rapi", "Terjamin", "Profesional", "Terpercaya"];

  useEffect(() => {
    // Typewriter effect with smooth transitions
    const typeSpeed = isDeleting ? 60 : 120;
    const pauseTime = isDeleting ? 1200 : 2500;
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentWord.length) {
          setTypewriterText(
            currentWord.substring(0, typewriterText.length + 1)
          );
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(
            typewriterText.substring(0, typewriterText.length - 1)
          );
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentWordIndex]);

  useEffect(() => {
    // Generate floating books with 3D properties
    const generateBooks = () => {
      const colors = [
        "from-blue-500 to-blue-600",
        "from-purple-500 to-purple-600",
        "from-indigo-500 to-indigo-600",
        "from-violet-500 to-violet-600",
        "from-cyan-500 to-cyan-600",
      ];

      const isMobile = window.innerWidth < 768;
      const bookCount = isMobile ? 6 : 12;
      const minSize = isMobile ? 20 : 35;
      const maxSize = isMobile ? 15 : 25;

      const bookElements = [];
      for (let i = 0; i < bookCount; i++) {
        bookElements.push({
          id: i,
          left: 5 + Math.random() * 90,
          delay: Math.random() * 8,
          duration: 12 + Math.random() * 8,
          size: minSize + Math.random() * maxSize,
          rotateX: Math.random() * 30 - 15,
          rotateY: Math.random() * 30 - 15,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: isMobile
            ? 0.3 + Math.random() * 0.2
            : 0.5 + Math.random() * 0.3,
          initialTop: 100 + Math.random() * 20,
        });
      }
      setBooks(bookElements);
    };

    generateBooks();
    window.addEventListener("resize", generateBooks);

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", generateBooks);
    };
  }, []);

  return (
    <section 
    id="beranda"
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-4 py-20 md:py-0">
      {/* Enhanced animated background with floating books */}
      <div className="absolute inset-0">
        {/* Replace gradient orbs with floating book shapes */}
        <div className="absolute top-20 left-10 w-16 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-2xl animate-float-slow opacity-20 transform rotate-12">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        <div className="absolute top-40 right-20 w-14 h-18 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-2xl animate-float-reverse opacity-20 transform -rotate-6">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-12 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg shadow-2xl animate-float-slow opacity-20 transform rotate-45">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        <div className="absolute bottom-40 right-1/3 w-10 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg shadow-2xl animate-float-reverse opacity-20 transform -rotate-12">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        <div className="absolute top-1/3 right-10 w-14 h-18 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg shadow-2xl animate-float-slow opacity-20 transform rotate-6">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        <div className="absolute top-1/2 left-20 w-11 h-15 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow-2xl animate-float-reverse opacity-20 transform -rotate-45">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>

        {/* Subtle light gradient overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 3D Floating Books with parallax */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${
            mousePosition.y * 0.5
          }px)`,
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="absolute"
            style={{
              left: `${book.left}%`,
              top: `${book.initialTop}%`,
              animation: `floatBook ${book.duration}s ease-in-out infinite`,
              animationDelay: `${book.delay}s`,
              opacity: book.opacity,
            }}
          >
            <div
              className={`relative bg-gradient-to-br ${book.color} rounded-lg shadow-2xl`}
              style={{
                width: `${book.size}px`,
                height: `${book.size * 1.3}px`,
                transform: `perspective(1000px) rotateX(${book.rotateX}deg) rotateY(${book.rotateY}deg)`,
                animation: `rotate3D ${
                  book.duration * 0.7
                }s ease-in-out infinite`,
                animationDelay: `${book.delay}s`,
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black/20 rounded-l-lg" />
              <div
                className="absolute right-0 top-2 bottom-2 w-0.5 bg-white/40"
                style={{ right: "3px" }}
              />
              <div
                className="absolute right-0 top-2 bottom-2 w-0.5 bg-white/30"
                style={{ right: "5px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Particles with different sizes - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(window.innerWidth < 768 ? 15 : 30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? "w-2 h-2" : "w-1 h-1"
            } bg-blue-400/30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${
                3 + Math.random() * 2
              }s ease-in-out infinite, float ${
                6 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge with icon */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-white/95 backdrop-blur-xl border border-blue-200 shadow-lg mb-6 md:mb-8 animate-fade-up hover:scale-105 transition-all duration-500 ease-out group">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
            <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Online 24/7 • Siap Membantu
            </span>
          </div>

          {/* Main headline with typewriter effect */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-up [animation-delay:100ms] opacity-0">
            <span className="text-slate-900 block mb-2">
              Joki Tugas Profesional
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-flex items-center gap-1 md:gap-2 flex-wrap justify-center">
              <span className="animate-gradient transition-all duration-300 ease-in-out">
                {typewriterText}
              </span>
              <span className="inline-block w-0.5 md:w-1 h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-r from-blue-600 to-purple-600 animate-blink"></span>
            </span>
          </h1>

          {/* Simplified subheadline for mobile */}
          <div className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up [animation-delay:200ms] opacity-0 leading-relaxed px-4">
            <p className="block md:hidden">
              Asistensi akademik untuk SMP, SMA, hingga Mahasiswa. Pengerjaan
              cepat, kualitas premium, dan privasi aman.
            </p>
            <p className="hidden md:block">
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "0.3s" }}
              >
                Asistensi
              </span>{" "}
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "0.4s" }}
              >
                akademik
              </span>{" "}
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "0.5s" }}
              >
                untuk
              </span>{" "}
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "0.6s" }}
              >
                SMP,
              </span>{" "}
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "0.7s" }}
              >
                SMA,
              </span>{" "}
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "0.8s" }}
              >
                hingga
              </span>{" "}
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "0.9s" }}
              >
                Mahasiswa.
              </span>
            </p>
          </div>

          {/* CTA Buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-12 animate-fade-up [animation-delay:300ms] opacity-0 px-4">
            <Button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-1 group w-full sm:w-auto before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 before:ease-in-out active:scale-95">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300 ease-out" />
              Hubungi WhatsApp
            </Button>
            <Button className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-900 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-xl shadow-lg border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 w-full sm:w-auto group active:scale-95">
              Lihat Harga
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300 ease-out" />
            </Button>
          </div>

          {/* Trust badges with stagger animation */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 animate-fade-up [animation-delay:400ms] opacity-0 px-4">
            <div
              className="group bg-white/90 backdrop-blur-sm border border-slate-200 px-4 md:px-6 py-3 md:py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out animate-scale-in active:scale-95"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0">
                <Zap className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm md:text-base text-slate-900">
                  Fast Delivery
                </div>
                <div className="text-xs text-slate-500 hidden sm:block">
                  Tepat waktu
                </div>
              </div>
            </div>
            <div
              className="group bg-white/90 backdrop-blur-sm border border-slate-200 px-4 md:px-6 py-3 md:py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out animate-scale-in active:scale-95"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0">
                <Award className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm md:text-base text-slate-900">
                  Premium Quality
                </div>
                <div className="text-xs text-slate-500 hidden sm:block">
                  Berkualitas tinggi
                </div>
              </div>
            </div>
            <div
              className="group bg-white/90 backdrop-blur-sm border border-slate-200 px-4 md:px-6 py-3 md:py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out animate-scale-in active:scale-95"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0">
                <Shield className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm md:text-base text-slate-900">
                  100% Confidential
                </div>
                <div className="text-xs text-slate-500 hidden sm:block">
                  Privasi terjamin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block cursor-pointer hover:scale-110 transition-transform duration-500 ease-out">
        <div className="w-8 h-12 rounded-full border-2 border-slate-400 flex justify-center p-2 hover:border-blue-500 transition-colors duration-500">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatBook {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-40px) translateX(-8px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(15px);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-15px);
          }
        }

        @keyframes rotate3D {
          0%,
          100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: perspective(1000px) rotateX(5deg) rotateY(10deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            transform: translateY(14px);
            opacity: 0;
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-word {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in-word {
          animation: fade-in-word 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-scroll {
          animation: scroll 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Smooth transitions for all interactive elements */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
