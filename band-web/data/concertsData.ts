export interface Concert {
  id: number;
  name: string;
  time: string;
  date: string;
  location: string;
}

export const concerts: Concert[] = [
  {
    id: 1,
    name: "Rock Café Night",
    time: "20:00",
    date: "2024-12-20",
    location: "Praha, Rock Café",
  },
  {
    id: 2,
    name: "Fléda Rock Show",
    time: "19:30",
    date: "2024-12-25",
    location: "Brno, Fléda",
  },
  {
    id: 3,
    name: "Barrák Party",
    time: "21:00",
    date: "2024-12-30",
    location: "Ostrava, Klub Barrák",
  },
  {
    id: 4,
    name: "Barrák Christmas Bash",
    time: "21:00",
    date: "2023-12-30",
    location: "Ostrava, Klub Barrák",
  },
];
