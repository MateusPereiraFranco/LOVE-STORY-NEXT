// src/components/Timeline.tsx
"use client";

import React, { useState } from "react";
import { timelineEvents, TimelineEvent } from "@/data/timelineEvents";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import MediaRenderer from "./MediaRenderer";
import LightBox from "./LightBox";

// Componente de Item da Timeline (Com classes responsivas)
const TimelineItem = ({
  event,
  onClick,
}: {
  event: TimelineEvent;
  onClick: (event: TimelineEvent) => void;
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.05 });
  const baseClasses =
    "opacity-0 transition-all duration-700 ease-out transform";
  const visibleClasses = "opacity-100 translate-x-0";
  const hiddenClasses =
    event.side === "right" ? "translate-x-1/4" : "-translate-x-1/4";
  const animationClasses = isIntersecting ? visibleClasses : hiddenClasses;

  return (
    // 🌟 MUDANÇA: flex-col (mobile) -> md:flex-row (desktop)
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      // Em mobile, itens-start (sem alinhamento central vertical)
      className={`mb-8 flex flex-col items-start w-full 
        md:flex-row md:justify-between md:items-center 
        ${event.side === "right" ? "md:flex-row-reverse" : "md:flex-row"}
        ${baseClasses} ${animationClasses}
      `}
    >
      {/* Conteúdo: Texto e Mídia */}
      {/* 🌟 MUDANÇA: w-full (mobile) -> md:w-5/12 (desktop) */}
      <div
        className={`order-1 w-full md:w-5/12 ${
          event.side === "right"
            ? "md:pr-4 md:text-right"
            : "md:pl-4 md:text-left"
        }`}
      >
        <div
          // Em mobile, reduzi o padding para p-4 (mais apertado, estilo feed)
          className="bg-white/10 p-4 rounded-lg shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:bg-white/20 cursor-pointer"
          onClick={() => onClick(event)}
        >
          <h3 className="mb-2 font-bold text-xl text-pink-400">
            {event.title}
          </h3>
          <p className="text-gray-200 text-sm mb-4">{event.description}</p>

          <MediaRenderer
            url={event.mediaUrl}
            type={event.mediaType}
            title={event.title}
            ratio={event.aspectRatio}
            isThumbnail={true} // Nova prop para ajudar o MediaRenderer
          />
        </div>
      </div>

      {/* Ponto Central (O 'Dot') - ESCONDIDO EM MOBILE */}
      <div className="hidden md:flex z-10 items-center order-1 bg-pink-500 shadow-xl w-6 h-6 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">❤️</h1>
      </div>

      {/* Espaço Vazio - ESCONDIDO EM MOBILE */}
      <div className="order-1 w-5/12 hidden md:block"></div>
    </div>
  );
};

// Componente Principal da Timeline
const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );

  return (
    // Em mobile, padding reduzido para p-4
    <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
      {/* A Linha Vertical Mágica - ESCONDIDA EM MOBILE */}
      <div
        className="hidden md:block border-2-2 absolute h-full border border-pink-500/50 border-dotted"
        style={{ left: "50%" }}
      ></div>

      {timelineEvents.map((event) => (
        <TimelineItem key={event.id} event={event} onClick={setSelectedEvent} />
      ))}

      <LightBox event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default Timeline;
