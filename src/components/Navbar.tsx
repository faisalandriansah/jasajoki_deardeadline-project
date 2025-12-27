import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Pastikan install framer-motion
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

  // WhatsApp Config
  const whatsappNumber = "6285892182185";
  const whatsappMessage = encodeURIComponent(
    `Halo, terima kasih telah menghubungi DearDeadline 👋
Kami menyediakan beberapa paket layanan dengan estimasi waktu dan biaya yang disesuaikan dengan kebutuhan serta tingkat kesulitan tugas. Untuk informasi lebih lanjut, mohon sampaikan jenis layanan yang dibutuhkan, deadline, dan detail singkat tugas.
Terima kasih 🙏`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer untuk update active section saat scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0.2 }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-slate-200/60 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* LOGO AREA */}
            <button
              onClick={() => handleNavClick("beranda")}
              className="flex items-center gap-3 group relative z-50"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <img
                  src={logoImage}
                  alt="DearDeadline Logo"
                  className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover shadow-sm ring-1 ring-slate-900/5"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-none">
                  Dear<span className="text-blue-600">Deadline</span>
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wide">
                  Partner Tugasmu
                </span>
              </div>
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-full shadow-sm ring-1 ring-slate-200"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            {/* RIGHT ACTION */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-slate-900 hover:bg-blue-600 text-white rounded-full px-6 py-5 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/20 transition-all duration-300 group">
                  <span className="mr-2">Hubungi Kami</span>
                  <MessageCircle className="w-4 h-4 group-hover:hidden transition-all" />
                  <ArrowRight className="w-4 h-4 hidden group-hover:block transition-all" />
                </Button>
              </motion.a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-xs bg-white z-50 lg:hidden shadow-2xl border-l border-slate-100"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-6">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-left text-lg font-medium py-3 border-b border-slate-50 transition-colors ${
                        activeSection === link.id
                          ? "text-blue-600"
                          : "text-slate-600"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-auto">
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 text-base shadow-lg shadow-blue-600/25">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat WhatsApp
                    </Button>
                  </motion.a>

                  <p className="text-center text-xs text-slate-400 mt-6">
                    © 2024 DearDeadline. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
