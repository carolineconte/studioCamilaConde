import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"

import WhatsBtn from "@/components/WhatsBtn"
import InstaBtn from "@/components/InstaBtn"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Studio Camila Conde",
  description: "Maquiadora profissional capacitada para atender maquiagens sociais e artísticas, como para eventos gerais diurnos e noturnos, casamentos (convidadas, madrinhas, noivas), debutantes e ensaios fotográficos., Penteado, cursos de maquiagem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="bg-primaryWhite">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <WhatsBtn />
        <InstaBtn />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
