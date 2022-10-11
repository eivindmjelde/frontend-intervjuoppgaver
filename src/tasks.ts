import { Task } from "./types";

export const tasks: Task[] = [
  {
    id: "1",
    title:
      'Merk oppgave som "ferdig" når den dras inn i den siste kolonnen. Oppgaven skal være "åpen" dersom den befinner seg i en annen kolonne',
  },
  {
    id: "2",
    title:
      "Gjør det mulig å manuelt sortere rekkefølgen av oppgavene i en kolonne",
  },
  {
    id: "3",
    title:
      "Legg til stiling som gjør at oppgavekortet roteres (15°) når det dras mellom kolonner",
  },
  {
    id: "4",
    title: "Utvid oppgavene med et kategori-felt",
  },
  {
    id: "5",
    title:
      "Sett scrolling inni kolonnene slik at brettet aldri blir høyere en skjermhøyden",
  },
  {
    id: "6",
    title:
      "Lagre plasseringen av kortene slik at den blir ivaretatt dersom siden lastes på nytt (bruk API eller localStorage?)",
  },
  {
    id: "7",
    title: "Gjør det mulig å legge til flere kolonner i brettet",
  },
];
