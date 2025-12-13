// src/components/LightBox.tsx
"use client";

import React from "react";
import { TimelineEvent } from "@/data/timelineEvents";
import MediaRenderer from "./MediaRenderer";

interface LightBoxProps {
  event: TimelineEvent | null;
  onClose: () => void;
}

const LightBox: React.FC<LightBoxProps> = ({ event, onClose }) => {
  if (!event) return null;

  // Fundo fixo, ocupa 100% da tela e centraliza o modal
  const backdropClasses =
    "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4";

  return (
    <div className={backdropClasses} onClick={onClose}>
      {/* 🌟 Container Principal: Máximo de 95% da tela, com layout flexível */}
      <div
        className="relative bg-gray-900 rounded-lg shadow-2xl max-w-7xl w-full h-full md:h-[95vh] md:max-h-[95vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Área de Mídia (Ocupa a maior parte e Centraliza) */}
        {/* A div mãe já tem 'flex items-center justify-center' */}
        <div className="md:w-3/4 w-full h-2/3 md:h-full flex items-center justify-center bg-black">
          {/* 🌟 CORREÇÃO DE CENTRALIZAÇÃO: Esta div precisa ser flexível e centralizar o conteúdo. */}
          <div className="w-full h-full relative flex items-center justify-center p-4">
            <MediaRenderer
              url={event.mediaUrl}
              type={event.mediaType}
              title={event.title}
              ratio={event.aspectRatio}
            />
          </div>
        </div>

        {/* 2. Área de Texto/Detalhes (Barra lateral) */}
        {/* Mantive as classes limpas e o scroll para o texto */}
        <div className="md:w-1/4 w-full p-6 text-white overflow-y-auto border-l border-gray-700 bg-gray-800 flex flex-col">
          <h2 className="text-2xl font-bold text-pink-400 mb-2">
            {event.title}
          </h2>
          <p className="text-sm text-gray-400 mb-4">{event.date}</p>
          <p className="text-gray-300 whitespace-pre-wrap flex-grow">
            {event.description}
          </p>
        </div>

        {/* Botão de Fechar (Top-Right) */}
        {/* CORREÇÃO DO POSICIONAMENTO: Posiciona-se sobre a barra lateral ou no canto. */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-3xl hover:text-pink-400 transition z-50"
          aria-label="Fechar"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LightBox;
