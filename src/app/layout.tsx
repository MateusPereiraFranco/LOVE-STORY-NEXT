// src/app/layout.tsx
import BackgroundMusic from "@/components/BackgroundMusic";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nossa História de Amor",
  description: "Uma timeline da nossa jornada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      {/* 🌟 CLASSES DE ESTILO GLOBAL: Fundo Preto e Texto Branco 🌟 */}
      <body className={`${inter.className} bg-gray-900 text-white font-sans`}>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
