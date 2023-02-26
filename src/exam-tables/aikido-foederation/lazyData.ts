import { dojoLazyData } from "../baseTypes";
import { kyu5 } from "./kyu5";
import { kyu4 } from "./kyu4";
import { kyu3 } from "./kyu3";
import { kyu2 } from "./kyu2";
import { kyu1 } from "./kyu1";
import { additional } from "./additional";
import { dan1 } from "./dan1";
import { dan2 } from "./dan2";
import { dan3 } from "./dan3";

export default dojoLazyData({
  exams: {
    kyu5: {
      labelKey: "chooser.button.kyu5",
      table: kyu5,
    },
    kyu4: {
      labelKey: "chooser.button.kyu4",
      table: kyu4,
    },
    kyu3: {
      labelKey: "chooser.button.kyu3",
      table: kyu3,
    },
    kyu2: {
      labelKey: "chooser.button.kyu2",
      table: kyu2,
    },
    kyu1: {
      labelKey: "chooser.button.kyu1",
      table: kyu1,
    },
    additional: {
      labelKey: "chooser.button.additional",
      table: additional,
    },
    dan1: {
      labelKey: "chooser.button.dan1",
      table: dan1,
    },
    dan2: {
      labelKey: "chooser.button.dan2",
      table: dan2,
    },
    dan3: {
      labelKey: "chooser.button.dan3",
      table: dan3,
    },
  },
  additionalText:
    "+X sind Techniken, an die ich (Nils) mich erinnere, die aber nicht im Program der Aikido Föderation vorkommen.",
  sourceLink: "https://www.aikido-foederation.de/wp-content/uploads/AFD-Pruefungsordnung-052014.pdf",
});
