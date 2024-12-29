export interface Contact {
  id: number;
  name: string;
  type: string;
  value: string;
}

export const contactSectionData: Contact[] = [
  { id: 1, name: "Jan Novák", type: "email", value: "jan.novak@example.com" },
  {
    id: 2,
    name: "Petr Svoboda",
    type: "email",
    value: "petr.svoboda@example.com",
  },
  { id: 3, name: "Marie Dvořáková", type: "phone", value: "+420 123 456 789" },
];
