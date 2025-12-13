// src/components/MediaRenderer.tsx
"use client";

import Image from "next/image";
import React from "react";

interface MediaRendererProps {
  url: string;
  type: "image" | "video";
  title: string;
  ratio: "square" | "wide" | "video";
  // Nova prop para diferenciar entre thumbnail e lightbox, para controle de padding/margin
  isThumbnail?: boolean;
}

// Helper para mapear string para classes do Tailwind
const getAspectRatioClass = (ratio: "square" | "wide" | "video") => {
  switch (ratio) {
    // Escolhi aspect-square para mobile (mais parecido com Instagram)
    case "square":
    case "wide":
    case "video":
    default:
      return "aspect-square md:aspect-video"; // Mobile: 1:1, Desktop: 16:9
  }
};

const MediaRenderer: React.FC<MediaRendererProps> = ({
  url,
  type,
  title,
  ratio,
  isThumbnail = false,
}) => {
  const publicPath = `/img/${url}`;

  // Se for thumbnail, aplicamos a proporção dinâmica/responsiva.
  const aspectRatioClass = isThumbnail ? getAspectRatioClass(ratio) : "h-full";

  return (
    // 🌟 CORREÇÃO: Removi altura fixa, agora é baseada no aspect-ratio
    <div
      className={`w-full ${aspectRatioClass} rounded-md overflow-hidden bg-gray-700/50 flex items-center justify-center relative`}
    >
      {type === "image" ? (
        <Image
          src={publicPath}
          alt={`Evento: ${title}`}
          fill
          // object-cover para o thumbnail (parecido com feed)
          className={`w-full h-full transition duration-300 hover:scale-105 ${
            isThumbnail ? "object-cover" : "object-contain"
          }`}
          priority
        />
      ) : (
        <video
          src={publicPath}
          controls
          loop
          muted
          playsInline
          className={`w-full h-full ${
            isThumbnail ? "object-cover" : "object-contain"
          }`}
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
      )}
    </div>
  );
};

export default MediaRenderer;
