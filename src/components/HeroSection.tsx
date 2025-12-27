import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ChevronDown,
  Zap,
  Shield,
  Award,
  Sparkles,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [books, setBooks] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // --- LOGIC DROPDOWN ---
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tutup dropdown jika klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fungsi Scroll ke Harga
  const scrollToPricing = () => {
    const element = document.getElementById("harga");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsDropdownOpen(false);
    }
  };
  // -----------------------------

  // KATA-KATA BARU: Lebih persuasif & menjual benefit
  const words = [
    "Tanpa Pusing",
    "Bebas Plagiasi",
    "Tepat Waktu",
    "Privasi Aman",
    "Harga Pelajar",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

      const width = window.innerWidth;
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;
      // eslint-disable-next-line no-unused-vars
      const isDesktop = width >= 1024;

      const bookCount = isMobile ? 12 : isTablet ? 14 : 16;
      const minSize = isMobile ? 24 : isTablet ? 28 : 32;
      const maxSize = isMobile ? 16 : isTablet ? 20 : 24;

      const bookElements = [];
      for (let i = 0; i < bookCount; i++) {
        const topPosition = isMobile
          ? 10 + Math.random() * 85 // Spread evenly from top to bottom on mobile
          : 100 + Math.random() * 20;

        bookElements.push({
          id: i,
          left: 5 + Math.random() * 90,
          delay: Math.random() * 6,
          duration: isMobile ? 8 + Math.random() * 6 : 12 + Math.random() * 8,
          size: minSize + Math.random() * maxSize,
          rotateX: Math.random() * 30 - 15,
          rotateY: Math.random() * 30 - 15,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: isMobile
            ? 0.45 + Math.random() * 0.25
            : 0.4 + Math.random() * 0.25,
          initialTop: topPosition,
          zIndex: Math.floor(Math.random() * 3),
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

  // whatsapp configuration
  const whatsappNumber = "6285892182185";
  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan jasa tugas DearDeadline 👋\nBisa minta info lebih lanjut mengenai harga dan pengerjaannya?`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="beranda"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-4 py-20 sm:py-24 md:py-28 lg:py-32"
      style={{ touchAction: "pan-y" }}
    >
      {/* Enhanced animated background with floating books */}
      <div className="absolute inset-0">
        {/* Static decorative books (Background Items) */}
        <div className="absolute top-20 left-10 w-12 sm:w-14 md:w-16 h-16 sm:h-18 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-2xl animate-float-slow opacity-20 transform rotate-12 hidden md:block">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        <div className="absolute top-40 right-20 w-11 sm:w-12 md:w-14 h-14 sm:h-16 md:h-18 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-2xl animate-float-reverse opacity-20 transform -rotate-6 hidden md:block">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-10 sm:w-11 md:w-12 h-13 sm:h-14 md:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg shadow-2xl animate-float-slow opacity-20 transform rotate-45 hidden lg:block">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-l-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
        </div>
        {/* Subtle light gradient overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
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
            className="absolute will-change-transform"
            style={{
              left: `${book.left}%`,
              top: `${book.initialTop}%`,
              animation: `floatBook ${book.duration}s ease-in-out infinite`,
              animationDelay: `${book.delay}s`,
              opacity: book.opacity,
              zIndex: book.zIndex,
            }}
          >
            <div
              className={`relative bg-gradient-to-br ${book.color} rounded-lg shadow-2xl transform-gpu`}
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
              <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-black/20 rounded-l-lg" />
              <div
                className="absolute right-0 top-2 bottom-2 w-0.5 bg-white/40"
                style={{ right: "3px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg" />
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg"
                style={{
                  animation: `shine ${
                    book.duration * 1.5
                  }s ease-in-out infinite`,
                  animationDelay: `${book.delay}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* BADGE: Updated Text */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full bg-white/95 backdrop-blur-xl border border-blue-200 shadow-lg mb-6 sm:mb-7 md:mb-8 animate-fade-up hover:scale-105 transition-all duration-500 ease-out group">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solusi Deadline Mepet • Online 24 Jam
            </span>
          </div>

          {/* HEADLINE: Updated Text */}
          <h1
            className="text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl xl:text-[68px] font-bold mb-4 sm:mb-5 md:mb-6 leading-[1.1] sm:leading-[1.15] animate-fade-up [animation-delay:100ms] opacity-0 px-2"
            style={{
              fontFamily:
                '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-slate-900 block mb-2 sm:mb-2.5">
              Jasa Tugas Akademik
            </span>
            <span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block transition-all duration-500 ease-in-out pb-2"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade
                  ? "translateY(0) scale(1)"
                  : "translateY(-10px) scale(0.95)",
              }}
            >
              {words[currentWordIndex]}
            </span>
          </h1>

          {/* SUBHEADLINE: Updated Text (Lebih Nyambung & Flowy) */}
          <div
            className="text-[15px] sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-9 md:mb-10 animate-fade-up [animation-delay:200ms] opacity-0 leading-relaxed px-2 sm:px-4"
            style={{
              fontFamily:
                '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            <p className="font-medium text-slate-600">
              Solusi jitu tugas{" "}
              <span className="text-blue-600 font-semibold">Sekolah</span>{" "}
              hingga{" "}
              <span className="text-purple-600 font-semibold">Kuliah</span>.
              Pengerjaan cepat, hasil orisinal, dan{" "}
              <span className="text-slate-900 font-semibold">
                privasi terjamin
              </span>
              . Kamu tinggal terima beres!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-11 md:mb-12 animate-fade-up [animation-delay:300ms] opacity-0 px-2 sm:px-4 max-w-2xl mx-auto relative z-50">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] text-white px-6 sm:px-7 md:px-8 lg:px-10 py-3.5 sm:py-4 md:py-5 text-[15px] sm:text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-1 group w-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 before:ease-in-out active:scale-95"
                style={{
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                <MessageCircle className="w-[18px] sm:w-5 h-[18px] sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300 ease-out" />
                Tanya Admin / Konsultasi
              </Button>
            </a>

            {/* --- DROPDOWN LIHAT HARGA --- */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <Button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`bg-white/90 backdrop-blur-sm hover:bg-white text-slate-900 px-6 sm:px-7 md:px-8 lg:px-10 py-3.5 sm:py-4 md:py-5 text-[15px] sm:text-base md:text-lg font-semibold rounded-xl shadow-lg border-2 transition-all duration-500 ease-out w-full active:scale-95 group ${
                  isDropdownOpen
                    ? "border-blue-400"
                    : "border-slate-200 hover:border-blue-300"
                }`}
                style={{
                  fontFamily:
                    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                Lihat Harga
                <ChevronDown
                  className={`w-[18px] sm:w-5 h-[18px] sm:h-5 ml-2 transition-transform duration-300 ease-out ${
                    isDropdownOpen ? "rotate-180" : "group-hover:translate-y-1"
                  }`}
                />
              </Button>

              {/* Dropdown Menu Items (Teks original, tidak diubah) */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 sm:left-1/2 sm:-translate-x-1/2 mt-3 w-full sm:w-64 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-2xl p-2 animate-scale-in origin-top z-50 overflow-hidden ring-1 ring-black/5 text-left">
                  <div className="flex flex-col gap-1">
                    {/* Item 1: Pelajar */}
                    <button
                      onClick={scrollToPricing}
                      className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 group/item text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          Pelajar
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Tugas Harian & PR
                        </div>
                      </div>
                    </button>

                    {/* Item 2: Mahasiswa */}
                    <button
                      onClick={scrollToPricing}
                      className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-purple-50 transition-colors duration-200 group/item text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
                        <GraduationCap className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          Mahasiswa
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Makalah & Jurnal
                        </div>
                      </div>
                    </button>

                    {/* Item 3: Express */}
                    <button
                      onClick={scrollToPricing}
                      className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-orange-50 transition-colors duration-200 group/item text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover/item:bg-orange-200 transition-colors">
                        <Zap className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          Express
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Deadline &lt; 24 Jam
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* TRUST BADGES: Updated Text to Indonesian */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 animate-fade-up [animation-delay:400ms] opacity-0 px-2 sm:px-4 max-w-5xl mx-auto">
            {/* Badge 1 */}
            <div
              className="group bg-white/90 backdrop-blur-sm border border-slate-200 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out animate-scale-in active:scale-95"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0">
                <Zap className="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 text-white" />
              </div>
              <div className="text-left min-w-0">
                <div
                  className="font-bold text-[13px] sm:text-sm md:text-base text-slate-900 whitespace-nowrap"
                  style={{
                    fontFamily:
                      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  Pengerjaan Kilat
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 hidden sm:block whitespace-nowrap">
                  Siap bantu deadline hitungan jam
                </div>
              </div>
            </div>

            {/* Badge 2 */}
            <div
              className="group bg-white/90 backdrop-blur-sm border border-slate-200 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out animate-scale-in active:scale-95"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0">
                <Award className="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 text-white" />
              </div>
              <div className="text-left min-w-0">
                <div
                  className="font-bold text-[13px] sm:text-sm md:text-base text-slate-900 whitespace-nowrap"
                  style={{
                    fontFamily:
                      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  Kualitas Akademik
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 hidden sm:block whitespace-nowrap">
                  Sesuai standar guru & dosen
                </div>
              </div>
            </div>

            {/* Badge 3 */}
            <div
              className="group bg-white/90 backdrop-blur-sm border border-slate-200 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out animate-scale-in active:scale-95"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ease-out flex-shrink-0">
                <Shield className="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6 text-white" />
              </div>
              <div className="text-left min-w-0">
                <div
                  className="font-bold text-[13px] sm:text-sm md:text-base text-slate-900 whitespace-nowrap"
                  style={{
                    fontFamily:
                      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  Rahasia Terjamin
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 hidden sm:block whitespace-nowrap">
                  Identitas & data aman 100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block cursor-pointer hover:scale-110 transition-transform duration-500 ease-out">
        <div className="w-7 sm:w-8 h-11 sm:h-12 rounded-full border-2 border-slate-400 flex justify-center p-2 hover:border-blue-500 transition-colors duration-500">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatBook {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotateZ(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotateZ(3deg);
          }
          50% {
            transform: translateY(-50px) translateX(-10px) rotateZ(-2deg);
          }
          75% {
            transform: translateY(-35px) translateX(20px) rotateZ(4deg);
          }
        }

        @media (max-width: 639px) {
          @keyframes floatBook {
            0%,
            100% {
              transform: translateY(0) translateX(0) scale(1) rotateZ(0deg);
            }
            25% {
              transform: translateY(-35px) translateX(12px) scale(1.08)
                rotateZ(5deg);
            }
            50% {
              transform: translateY(-60px) translateX(-8px) scale(1.05)
                rotateZ(-3deg);
            }
            75% {
              transform: translateY(-40px) translateX(15px) scale(1.1)
                rotateZ(6deg);
            }
          }
        }

        @keyframes shine {
          0%,
          100% {
            opacity: 0.2;
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }
          50% {
            opacity: 0.6;
            transform: translateX(0%) translateY(0%) rotate(5deg);
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

        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in-word {
          animation: fade-in-word 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: top;
        }

        .animate-scroll {
          animation: scroll 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        button {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        /* Fix for full width layout */
        body {
          overflow-x: hidden;
        }

        /* Better mobile performance */
        @media (max-width: 639px) {
          [style*="animation"] {
            will-change: transform, opacity;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }

          .absolute {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            perspective: 1000px;
            -webkit-perspective: 1000px;
          }

          /* Optimize rendering */
          .transform-gpu {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
          }
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
