export type TarotCard = { id: number; name: string; imageUrl: string };

export const tarotDeck: TarotCard[] = [
  // Старшие Арканы (0-23)
  { id: 0, name: "Шут", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/00_fool.png" },
  { id: 1, name: "Маг", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/01_magician.png" },
  // ... (здесь будут все 22 Старших Аркана)
  { id: 22, name: "Герой", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/22_hero.png" },
  { id: 23, name: "Белая Карта", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/23_white_card.png" },

  // Жезлы
  { id: 24, name: "Туз Жезлов", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_01_ace.png" },
  { id: 25, name: "Двойка Жезлов", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_02_two.png" },
  // ... (здесь будут все 13 Жезлов)
  { id: 37, name: "Король Жезлов", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_14_king.png" },

  // Кубки
  { id: 38, name: "Туз Кубков", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_01_ace.png" },
  // ... (здесь будут все 13 Кубков)
  { id: 51, name: "Король Кубков", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_14_king.png" },

  // Мечи
  { id: 52, name: "Туз Мечей", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_01_ace.png" },
  // ... (здесь будут все 13 Мечей)
  { id: 65, name: "Король Мечей", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_14_king.png" },

  // Пентакли
  { id: 66, name: "Туз Пентаклей", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_01_ace.png" },
  // ... (здесь будут все 13 Пентаклей)
  { id: 79, name: "Король Пентаклей", imageUrl: "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_14_king.png" }
];
