// src/app/page.tsx
// ✅ Importação relativa corrigida para a estrutura de pastas atual
import Timeline from "../components/Timeline";
import React from "react";

// Este é um Server Component por padrão
export default function Home() {
  return (
    <div className="font-sans">
      {/* Cabeçalho */}
      <header className="py-10 text-center">
        <h1 className="text-5xl font-extrabold text-pink-400 tracking-wider">
          A Nossa História de Amor
        </h1>
        <p className="mt-2 text-xl text-gray-400">
          Desde o 'Sim' até aos dias de hoje.
        </p>
      </header>

      {/* Conteúdo Principal (Timeline) */}
      <main>
        {/* O Timeline é um Client Component */}
        <Timeline />
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm">
        Criado com ❤️ | Next.js, Tailwind CSS e Vercel
      </footer>
    </div>
  );
}
