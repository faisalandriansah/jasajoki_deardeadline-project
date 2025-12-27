import { useState } from 'react';
import './WelcomeModal.css';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 'tulis', label: 'Tulis Makalah/Essay', icon: '✍️' },
  { id: 'skripsi', label: 'Bimbingan Skripsi', icon: '🎓' },
  { id: 'ppt', label: 'Desain PPT', icon: '📊' },
  { id: 'coding', label: 'Joki Coding/IT', icon: '💻' },
  { id: 'hitung', label: 'Tugas Hitungan', icon: '🧮' },
  { id: 'translate', label: 'Translate Jurnal', icon: '🌐' },
];

const WelcomeModal = ({ isOpen, onClose }: WelcomeModalProps) => {
  const [selectedService, setSelectedService] = useState<string>('');

  // --- 1. LOGIC WHATSAPP DISINI BRO ---
  const handleWhatsAppClick = () => {
    // GANTI NOMOR INI (Wajib pakai kode negara 62, jangan 08)
    const phoneNumber = "6285892182185"; 
    
    // Pesan default kalau user gak milih apa-apa
    const service = selectedService || "Konsultasi Umum";

    // Format pesan biar rapi (pakai \n buat baris baru)
    const message = `Halo Admin *DearDeadline*! 👋\n\nSaya mau minta bantuan untuk tugas: *${service}*.\nBisa tolong dibantu cek harganya? Terima kasih!`;

    // Encode pesan supaya spasi & enter kebaca browser
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Buka di tab baru
    window.open(url, '_blank');
    
    // Opsional: Tutup modal setelah klik
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        
        <div className="purple-glow"></div>

        <button className="close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="modal-header animate-stagger-1">
          <div className="logo-badge">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
             <span>DearDeadline</span>
          </div>
          <h2 className="headline">Tugas numpuk, <br/><span className="highlight-text">Deadline mepet?</span> ⏳</h2>
          <p className="subheadline">Kami bantu kerjakan tugasmu dengan <strong>Cepat</strong>, <strong>Aman</strong>, dan <strong>Berkualitas</strong>.</p>
        </div>

        <div className="service-section animate-stagger-2">
          <p className="label">Mau dibantu tugas apa?</p>
          <div className="service-grid">
            {services.map((service) => (
              <button 
                key={service.id}
                className={`service-card ${selectedService === service.label ? 'selected' : ''}`}
                onClick={() => setSelectedService(service.label)}
              >
                <span className="icon">{service.icon}</span>
                <span className="text">{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="modal-footer animate-stagger-3">
          {/* --- 2. PASANG FUNCTION DI TOMBOL INI --- */}
          <button 
            className="cta-button"
            onClick={handleWhatsAppClick} 
          >
            Hubungi WhatsApp Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </button>
          <p className="privacy-text">🔒 100% Confidential & Privasi Terjamin</p>
        </div>

      </div>
    </div>
  );
};

export default WelcomeModal;