import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Kontakt – Profi Čisto | Agencija za čišćenje Beograd",
  description:
    "Kontaktirajte Profi Čisto – profesionalnu agenciju za čišćenje u Beogradu. Pozovite 061 640 7717 ili pošaljite upit. Besplatna procena.",
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      {/* Page header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 pt-32 pb-16 text-center px-4">
        <span className="inline-block bg-white/15 border border-white/25 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          Stupite u kontakt
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Kako možemo da pomognemo?
        </h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">
          Odgovaramo u roku od par sati. Besplatna procena na licu mesta ili telefonom.
        </p>
      </div>
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}
