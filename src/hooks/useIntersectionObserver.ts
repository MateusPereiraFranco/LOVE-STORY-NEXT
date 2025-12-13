// src/hooks/useIntersectionObserver.ts
"use client";

import { useEffect, useRef, useState } from "react";

// Exportamos o tipo para garantir a compatibilidade com o TimelineItem
type ElementType = HTMLElement | HTMLDivElement;

/**
 * Hook customizado para observar se um elemento está na viewport.
 * @param options - Configurações para o Intersection Observer (ex: { threshold: 0.1 })
 * @returns [ref, isIntersecting] - Uma ref para anexar ao elemento e um booleano de estado.
 */
export const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const ref = useRef<ElementType>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Garante que o hook só corre no lado do cliente e que a ref existe
    if (typeof window === "undefined" || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Função de limpeza
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  // O 'as const' ajuda o TypeScript a inferir o array corretamente
  return [ref, isIntersecting] as const;
};
