import { kyu5 } from "./exams/kyu5";
import { kyu4 } from "./exams/kyu4";
import { kyu3 } from "./exams/kyu3";
import { kyu2 } from "./exams/kyu2";
import { kyu1 } from "./exams/kyu1";
import { additional } from "./exams/additional";
import { dan1 } from "./exams/dan1";
import { DojoDetails } from "$core/model/Dojo";

export default {
  exams: {
    kyu5,
    kyu4,
    kyu3,
    kyu2,
    kyu1,
    dan1,
    additional,
  },
  additionalText:
    "Die Techniken in der Gruppe 1.DAN sind Techniken, die im Programm der Aikido-Föderation vorkommen, aber nicht im Programm des Aikido-Dojo Darmstadt.",
  sourceLink: "http://aikidokompendium.de/#",
} satisfies DojoDetails;
