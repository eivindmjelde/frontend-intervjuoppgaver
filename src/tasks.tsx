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
      "Legg til stiling som gjør at oppgavekortet roteres (15°) når de dras mellom kolonner",
  },
  {
    id: "4",
    title: "Utvid oppgavene med et kategori-felt",
  },
  {
    id: "5",
    title:
      "Gjør slik at scrolling skjer inni kolonnene, slik at selve brettet aldri blir høyere en skjermhøyden",
  },
  {
    id: "6",
    title: (
      <span>
        Lagre rekkefølgen dersom kortene sorteres manuelt, slik at den blir
        ivaretatt om siden lastes på nytt (bruk API eller localStorage? for
        persistence). <a href="#task-2">Gjøres etter denne oppgaven</a>
      </span>
    ),
  },
  {
    id: "7",
    title: "Gjør det mulig å legge til flere kolonner i brettet",
  },
  {
    id: "8",
    title:
      "Utvid oppgavene slik at de kan inneholde en mer utfyllende beskrivelse i tillegg til tittel",
  },
  {
    id: "9",
    title: "Kan vi gjøre denne brettet brukervennlig på mobil? Hvordan? Hjelp!",
  },
];
