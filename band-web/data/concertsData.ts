export interface Concert {
  id: number;
  name: string;
  time: string;
  date: string;
  location: string;
  mapSrc?: string;
  eventUrl?: string;
}

export const concerts: Concert[] = [
  {
    id: 1,
    name: "Koncert v klubu Parník",
    time: "19:00",
    date: "2025-05-19",
    location: "Sokolská třída 26/175 702 00 Ostrava",
    mapSrc: "https://mapy.cz/s/behenasagu",
    eventUrl: "https://www.klub-parnik.cz/program/2025/lesanten/",
  },
];
