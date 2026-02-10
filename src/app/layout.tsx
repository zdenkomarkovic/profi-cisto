import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profi Čisto – Agencija za čišćenje | Beograd",
  description:
    "Profesionalna agencija za čišćenje u Beogradu. Pranje stakala, mašinsko pranje, dubinsko čišćenje, pranje garaža, pranje tepiha, održavanje stambenih zgrada. Pozovite 061 640 7717.",
  keywords:
    "agencija za čišćenje Beograd, pranje stakala, mašinsko pranje, dubinsko čišćenje, pranje tepiha, održavanje zgrada",
  openGraph: {
    title: "Profi Čisto – Agencija za čišćenje | Beograd",
    description: "Profesionalna agencija za čišćenje u Beogradu. Pozovite 061 640 7717.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
