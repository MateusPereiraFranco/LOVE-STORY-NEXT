// src/components/BackgroundMusic.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

// URL do arquivo de áudio (caminho relativo à pasta public/)
const AUDIO_URL = "/audio/nossa_musica.mp3";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🚨 SOLUÇÃO PARA O AUTOPLAY BLOQUEADO PELOS NAVEGADORES 🚨
  // Os navegadores modernos (Chrome, Safari, etc.) BLOQUEIAM o autoplay
  // a menos que o utilizador tenha interagido com a página.
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.01; // Ajustar o volume (0.0 a 1.0)

        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            // Se falhar (bloqueado), o utilizador precisará de um botão
            console.log("Autoplay bloqueado. Erro:", error);
          });
      }
    };

    // Tenta tocar imediatamente
    playAudio();

    // Adiciona um listener para tentar tocar após a primeira interação do utilizador
    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("keydown", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("keydown", playAudio);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        loop // 🔄 Para tocar a música continuamente
        preload="auto"
      />

      {/* Botão para controle manual se o autoplay falhar */}
      {!isPlaying && (
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.play();
              setIsPlaying(true);
            }
          }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          title="Tocar Música"
        >
          ▶️ Tocar Música
        </button>
      )}
    </div>
  );
};

export default BackgroundMusic;
