import { useState } from "react";
import "./WelcomeModal.css";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- DATA LAYANAN DISESUAIKAN ---
// Saya mapping icon Lucide (dari snippet kamu) ke Emoji yang sesuai
// agar modal tetap ringan dan desainnya tidak pecah.
const services = [
  { id: "harian", label: "Tugas Harian", icon: "📝" }, // Icon: FileText
  { id: "makalah", label: "Makalah / Essay", icon: "📚" }, // Icon: BookText
  { id: "ppt", label: "PPT Presentasi", icon: "📊" }, // Icon: Presentation
  { id: "laporan", label: "Laporan Praktikum", icon: "🧪" }, // Icon: FlaskConical
  { id: "ringkasan", label: "Ringkasan Materi", icon: "✍️" }, // Icon: NotebookPen
  { id: "desain", label: "Desain Kreatif", icon: "🎨" }, // Icon: Palette
];

const WelcomeModal = ({ isOpen, onClose }: WelcomeModalProps) => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleWhatsAppClick = () => {
    const phoneNumber = "6285892182185";

    const service = selectedService || "Konsultasi Tugas";

    // --- PERBAIKAN DISINI ---
    // Menggunakan kode unicode "\uD83D\uDC4B" sebagai pengganti emoji 👋
    // Ini menjamin emoji muncul benar di Laptop/PC & HP
    const message = `Halo Admin *DearDeadline*! \uD83D\uDC4B\n\nSaya mau minta bantuan untuk: *${service}*.\nBisa tolong dibantu cek harganya? Terima kasih!`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="purple-glow"></div>

        <button className="close-btn" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header animate-stagger-1">
          <div className="logo-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span>DearDeadline</span>
          </div>
          <h2 className="headline">
            Tugas numpuk, <br />
            <span className="highlight-text">Deadline mepet?</span> ⏳
          </h2>
          <p className="subheadline">
            Kami bantu kerjakan tugasmu dengan <strong>Cepat</strong>,{" "}
            <strong>Aman</strong>, dan <strong>Berkualitas</strong>.
          </p>
        </div>

        <div className="service-section animate-stagger-2">
          <p className="label">Pilih layanan yang kamu butuhkan:</p>
          <div className="service-grid">
            {services.map((service) => (
              <button
                key={service.id}
                className={`service-card ${
                  selectedService === service.label ? "selected" : ""
                }`}
                onClick={() => setSelectedService(service.label)}
              >
                <span className="icon">{service.icon}</span>
                <span className="text">{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="modal-footer animate-stagger-3">
          <button className="cta-button" onClick={handleWhatsAppClick}>
            Hubungi WhatsApp Sekarang
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
          <p className="privacy-text">
            🔒 100% Confidential & Privasi Terjamin
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
