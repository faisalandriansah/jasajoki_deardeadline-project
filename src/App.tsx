import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"; // 1. Tambah ini bro
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 2. Import komponen Modal yang tadi kita buat
// Pastikan path-nya sesuai tempat lu simpan file WelcomeModal.tsx
import WelcomeModal from "./components/WelcomeModal"; 

const queryClient = new QueryClient();

const App = () => {
  // 3. Masukkan Logic State di sini
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // Cek apakah user sudah pernah lihat modal di sesi ini
    const hasSeen = sessionStorage.getItem("seenDearDeadlineModal");

    if (!hasSeen) {
      // Delay dikit (1.5 detik) biar website load dulu baru muncul
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    sessionStorage.setItem("seenDearDeadlineModal", "true");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* 4. Pasang Modalnya di sini (sejajar sama Toaster aman bro) */}
        <WelcomeModal isOpen={showModal} onClose={handleClose} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;