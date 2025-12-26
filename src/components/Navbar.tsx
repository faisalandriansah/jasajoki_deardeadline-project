import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import logoImage from "../assets/logo.png";

const navLinks = [
  { label: "Beranda", id: "beranda" },
  { label: "Layanan", id: "layanan" },
  { label: "Harga", id: "harga" },
  { label: "Testimoni", id: "testimoni" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const handleNavClick = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px -50% 0px",
        threshold: 0.2,
      }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      if (window.scrollY <= 100) {
        setActiveSection("beranda");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // WhatsApp Configuration
  const whatsappNumber = "6285892182185";
  const whatsappMessage = encodeURIComponent(
    `Halo, terima kasih telah menghubungi DearDeadline 👋
Kami menyediakan beberapa paket layanan dengan estimasi waktu dan biaya yang disesuaikan dengan kebutuhan serta tingkat kesulitan tugas. Untuk informasi lebih lanjut, mohon sampaikan jenis layanan yang dibutuhkan, deadline, dan detail singkat tugas.
Terima kasih 🙏`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50"
            : "bg-white/90 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* LOGO */}
            <button
              onClick={() => handleNavClick("beranda")}
              className="flex items-center gap-3 group transition-all duration-300 hover:scale-[1.02]"
              aria-label="Kembali ke beranda"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <img
                  src={logoImage}
                  alt="Logo"
                  className="relative w-11 h-11 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
              </div>
              <div className="text-[22px] font-bold tracking-tight">
                <span className="text-slate-900 group-hover:text-slate-800 transition-colors">
                  Dear
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Deadline
                </span>
              </div>
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-5 py-2.5 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-blue-600 bg-blue-50/50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50/80"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeSection === link.id && (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-80" />
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm" />
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden lg:block">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 text-white rounded-xl px-7 py-2.5 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 font-semibold text-[15px] group">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <MessageCircle className="w-4 h-4 mr-2 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">Hubungi Kami</span>
                </Button>
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-2xl animate-in slide-in-from-right">
            <div className="flex flex-col h-full">
              {/* MOBILE HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <img
                    src={logoImage}
                    alt="Logo"
                    className="w-10 h-10 rounded-xl object-cover shadow-md"
                  />
                  <div className="text-xl font-bold">
                    <span className="text-slate-900">Dear</span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Deadline
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-6 h-6 text-slate-700" />
                </button>
              </div>

              {/* MOBILE NAV LINKS */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center w-full text-left px-4 py-3.5 rounded-xl font-medium transition-all ${
                        activeSection === link.id
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-sm"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* MOBILE CTA */}
              <div className="p-6 border-t border-slate-200">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 py-3.5 shadow-lg hover:shadow-xl transition-all font-medium">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Hubungi Kami
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;