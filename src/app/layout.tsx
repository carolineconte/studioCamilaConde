import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"

import WhatsBtn from "@/components/WhatsBtn"
import InstaBtn from "@/components/InstaBtn"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Studio Camila Conde",
  description: "especialista em maquiagem e fotografia, maquiagem embelezadora, Penteado, cursos de maquiagem",
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
