// src/data/timelineEvents.ts

// Define a estrutura explícita de um evento da timeline
export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  aspectRatio: "square" | "wide" | "video";
  // Garante que 'side' só pode ser 'left' ou 'right'
  side: "left" | "right";
}

// Matriz (Array) com os dados da sua história
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "14 de Fevereiro de 2020",
    title: "O Primeiro Olhar (First Glance)",
    description:
      "Tudo começou naquele evento inesperado. O coração acelerou e o universo conspirou para este primeiro encontro.",
    mediaUrl: "1-14-12confra.jpg",
    mediaType: "image",
    aspectRatio: "wide",
    side: "left",
  },
  {
    id: 2,
    date: "10 de Março de 2020",
    title: "O Primeiro Café (First Coffee Date)",
    description:
      "Conversas que fluem facilmente e a descoberta de paixões em comum. O tempo voou e sabíamos que era só o começo.",
    mediaUrl: "2-15-12-anel-att.jpg",
    mediaType: "image",
    aspectRatio: "wide",
    side: "right",
  },
  {
    id: 3,
    date: "25 de Dezembro de 2021",
    title: "A Grande Viagem (The Big Trip)",
    description:
      "Uma aventura inesquecível que solidificou nosso laço. Vimos o mundo juntos, um passo de cada vez.",
    mediaUrl: "3-15-12-quadro-att.jpg",
    mediaType: "image",
    aspectRatio: "wide",
    side: "left",
  },
  {
    id: 4,
    date: "01 de Janeiro de 2023",
    title: "O Sim (The Engagement)",
    description: "O dia em que prometemos o futuro. Um momento inesquecível.",
    mediaUrl: "4-15-12-aceito.jpg",
    mediaType: "image",
    aspectRatio: "wide",
    side: "right",
  },
  {
    id: 5,
    date: "01 de Janeiro de 2023",
    title: "O Sim (The Engagement)",
    description: "O dia em que prometemos o futuro. Um momento inesquecível.",
    mediaUrl: "13-27-05-neko-chegando-att2.mp4",
    mediaType: "video",
    aspectRatio: "video",
    side: "right",
  },
];
