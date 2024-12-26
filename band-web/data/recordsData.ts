// /data/recordsData.js
interface Record {
  id: number;
  name: string;
  releaseDate: string;
  mp3Link: string;
}

export const records: Record[] = [
  {
    id: 1,
    name: "Knoflík",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/Knoflik.mp3",
  },
  {
    id: 2,
    name: "Modlitba do skal",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/ModlitbaDoSkal.mp3",
  },
];
