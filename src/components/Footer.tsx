import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Joki<span className="gradient-text">Tugas</span>
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Layanan asistensi akademik profesional untuk siswa dan mahasiswa Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Tugas Harian</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Makalah & Essay</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PPT Presentasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laporan Praktikum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coding Assignment</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Dukungan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cara Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>24/7 Online</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>+62 812-XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>help@jokitugas.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 JokiTugas. Layanan asistensi akademik.
            </p>
            <p className="text-white/40 text-sm">
              Dibuat dengan ❤️ untuk pelajar Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
