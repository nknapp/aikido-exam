import { dojoLazyData } from "../baseTypes";
import { kyu5 } from "./kyu5";
import { kyu4 } from "./kyu4";
import { kyu3 } from "./kyu3";
import { kyu2 } from "./kyu2";
import { kyu1 } from "./kyu1";
import { additional } from "./additional";
import { dan1 } from "./dan1";

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
    dan1: {
      labelKey: "chooser.button.dan1",
      table: dan1,
    },
    additional: {
      labelKey: "chooser.button.additional",
      table: additional,
    },
  },
  additionalText:
    "Die Techniken in der Gruppe 1.DAN sind Techniken, die im Programm der Aikido-Föderation vorkommen, aber nicht im Programm des Aikido-Dojo Darmstadt.",
  sourceLink: "http://aikidokompendium.de/#",
});
