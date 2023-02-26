import { dojoLazyData } from "../baseTypes";
import { kyu5 } from "./kyu5";
import { kyu4 } from "./kyu4";
import { kyu3 } from "./kyu3";
import { kyu2 } from "./kyu2";
import { kyu1 } from "./kyu1";

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
  },
  additionalText: "Diese Prüfungsordnung ist noch in Arbeit",
});
