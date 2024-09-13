import { kyu5 } from "./exams/kyu5";
import { kyu4 } from "./exams/kyu4";
import { kyu3 } from "./exams/kyu3";
import { kyu2 } from "./exams/kyu2";
import { kyu1 } from "./exams/kyu1";
import type { DojoDetails } from "$core/model/Dojo";

export default {
  exams: [kyu5, kyu4, kyu3, kyu2, kyu1],
  sourceLink: "https://www.kenkokan.de/",
  additionalText: {
    en: "The exam tables have not been verified by the dojo yet.",
    de: "The Prüfungsordnung wurde noch nicht vom Dojo geprüft und kann Fehler enthalten",
  },
} satisfies DojoDetails;
