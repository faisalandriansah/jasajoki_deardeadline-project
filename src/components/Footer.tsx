import { MessageCircle, Mail, Instagram, Send, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-gray-300 py-16 border-t border-slate-800 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-300 hover:scale-105 inline-block">
              Dear<span className="text-blue-500">Deadline</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Layanan asistensi akademik profesional untuk siswa dan mahasiswa
              Indonesia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/6289505903765"
                target="_blank"
                className="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-600/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                className="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-600/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* TikTok (Custom SVG agar style match dengan Lucide) */}
              <a
                href="#"
                target="_blank"
                className="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center hover:bg-black hover:border hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              {/* Telegram (Menggunakan icon Send) */}
              <a
                href="https://t.me/kikieuu"
                target="_blank"
                className="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center hover:bg-sky-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 -ml-0.5 mt-0.5" />
              </a>

              {/* Email */}
              <a
                href="biansastro460@gmail.com"
                className="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  Tugas Harian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  Makalah & Essay
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  PPT Presentasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  Laporan Praktikum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  Desain Kreatif
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Dukungan
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  Cara Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-all duration-200 hover:pl-2 inline-block"
                >
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
                <div>
                  <div className="text-sm font-medium text-white">
                    Layanan 24/7
                  </div>
                  <div className="text-xs text-gray-400">
                    Selalu online untuk Anda
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MessageCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Admin 1</div>
                  <div className="text-sm">+62 858-9218-2185</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MessageCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Admin 2</div>
                  <div className="text-sm">+62 895-0590-3765</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-sm break-all">biansastro460@gmail.com</div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-sm">Indonesia</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p className="transition-colors duration-300 hover:text-gray-300">
              © 2025 DearDeadline. All rights reserved.
            </p>
            <p className="transition-colors duration-300 hover:text-gray-300">
              Layanan asistensi akademik profesional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
