import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, BookOpen } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Beranda", href: "#" },
    { label: "Layanan", href: "#layanan" },
    { label: "Harga", href: "#harga" },
    { label: "Testimoni", href: "#testimoni" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 py-3"
            : "bg-white/80 backdrop-blur-md py-3 md:bg-transparent md:py-4 md:backdrop-blur-none"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* === MULAI BAGIAN LOGO YANG DIPERBAIKI === */}
            <a
              href="#"
              className="flex items-center gap-2 group transition-all duration-300 hover:scale-105 relative z-10"
            >
              {/* PERHATIKAN: Tidak ada lagi <div> pembungkus bg-gradient di sini */}

              {/* Gambar Logo langsung dikasih style kotak */}
              <img
                src={logoImage}
                alt="DearDeadline Logo"
                // Class w-9 h-9, rounded, shadow, dll dipindah langsung ke sini
                // Pakai 'object-cover' biar gambarnya full memenuhi kotak w-9 h-9
                className={`w-9 h-9 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6 flex-shrink-0 ${
                  isScrolled ? "shadow-blue-500/20" : "shadow-blue-600/30"
                }`}
              />

              {/* Bagian Teks (Tidak ada perubahan) */}
              <div className="font-display text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
                <span className="text-slate-900 transition-colors duration-300">
                  Dear
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Deadline
                </span>
              </div>
            </a>
            {/* === AKHIR BAGIAN LOGO YANG DIPERBAIKI === */}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100 ${
                    isScrolled
                      ? "text-slate-700 hover:text-slate-900"
                      : "text-slate-700 hover:text-slate-900"
                  } ${index === 0 ? "text-blue-600 bg-blue-50" : ""}`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300 active:scale-95 flex-shrink-0 relative z-10"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 text-slate-900 absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-6 h-6 text-slate-900 absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-40 lg:hidden shadow-2xl transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="font-display text-xl font-bold">
                <span className="text-slate-900">Dear</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Deadline
                </span>
              </div>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6 text-slate-900" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 font-medium group flex items-center justify-between ${
                    index === 0 ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  style={{
                    animation: isMobileMenuOpen
                      ? `slideInRight 0.3s ease-out ${index * 50}ms both`
                      : "none",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer CTA */}
          <div className="p-6 border-t border-slate-200">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Hubungi Kami
            </Button>
            <p className="text-center text-sm text-slate-500 mt-4">
              Siap membantu 24/7
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
