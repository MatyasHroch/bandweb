// /data/recordsData.js
export interface Record {
  id: number;
  name: string;
  album: string;
  releaseDate: string;
  mp3Link: string;
}

export const records: Record[] = [
  {
    name: "Naivní malíř",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/NaivniMalir.mp3",
  },
  {
    name: "Knoflík",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/Knoflik.mp3",
  },
  {
    name: "Zikmund",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/Zikmund.mp3",
  },
  {
    name: "Nahoru dolů",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/NahoruDolu.mp3",
  },
  {
    name: "Svatební kar",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/SvatebniKar.mp3",
  },
  {
    name: "Modlitba do skal",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/ModlitbaDoSkal.mp3",
  },
  {
    name: "O podzimu",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/OPodzimu.mp3",
  },
  {
    name: "Stříbrostín",
    releaseDate: "2024",
    album: "Lesanten",
    mp3Link: "/audio/Lesanten/Stribrostin.mp3",
  },
  {
    name: "Přípitek",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/Pripitek.mp3",
  },
  {
    name: "Na Jabloni",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/NaJabloni.mp3",
  },
  {
    name: "Netopýr",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/Netopyr.mp3",
  },
  {
    name: "Samotářská",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/Samotarska.mp3",
  },
  {
    name: "Tulipán",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/Tulipan.mp3",
  },
  {
    name: "Přetichá",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/Preticha.mp3",
  },
  {
    name: "Pro rudu",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/ProRudu.mp3",
  },
  {
    name: "Joj Mamo",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/JojMamo.mp3",
  },
  {
    name: "Procházky",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/Prochazky.mp3",
  },
  {
    name: "U kašky",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/UKasky.mp3",
  },
  {
    name: "Lesanten",
    album: "Na Jabloni",
    releaseDate: "2003",
    mp3Link: "/audio/NaJabloni/Lesanten.mp3",
  },
].map((record, index) => ({ ...record, id: index + 1 }));
