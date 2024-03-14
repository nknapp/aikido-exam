import { kyu5 } from "./exams/kyu5";
import { kyu4 } from "./exams/kyu4";
import { kyu3 } from "./exams/kyu3";
import { kyu2 } from "./exams/kyu2";
import { kyu1 } from "./exams/kyu1";
import { additional } from "./exams/additional";
import { dan1 } from "./exams/dan1";
import { dan2 } from "./exams/dan2";
import { dan3 } from "./exams/dan3";
import type { DojoDetails } from "$core/model/Dojo";

export default {
  exams: {
    kyu5,
    kyu4,
    kyu3,
    kyu2,
    kyu1,
    additional,
    dan1,
    dan2,
    dan3,
  },
  additionalText:
    "+X sind Techniken, an die ich (Nils) mich erinnere, die aber nicht im Program der Aikido Föderation vorkommen.",
  sourceLink: "https://www.aikido-foederation.de/wp-content/uploads/AFD-Pruefungsordnung-052014.pdf",
} satisfies DojoDetails;
