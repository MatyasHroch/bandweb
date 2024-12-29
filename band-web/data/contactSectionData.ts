export interface Contact {
  id: number;
  name: string;
  type: string;
  value: string;
}

export const contactSectionData: Contact[] = [
  {
    id: 1,
    name: "Josef Žerdík",
    type: "email",
    value: "zerdik.josef@seznam.cz",
  },
  { id: 3, name: "Josef Žerdík", type: "phone", value: "+420 603 523 847" },
  {
    id: 2,
    name: "Zuzana Teichmannová",
    type: "email",
    value: "z.tei@seznam.cz",
  },
];
