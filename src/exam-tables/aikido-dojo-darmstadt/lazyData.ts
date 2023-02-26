import { dojoLazyData } from "../baseTypes";
import { kyu5 } from "./kyu5";
import { kyu4 } from "./kyu4";

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
  },
  additionalText: "Diese Prüfungsordnung ist noch in Arbeit",
});
