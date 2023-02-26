import { dojoLazyData } from "../baseTypes";
import { kyu5 } from "./kyu5";

export default dojoLazyData({
  exams: {
    kyu5: {
      labelKey: "chooser.button.kyu5",
      table: kyu5,
    },
  },
  additionalText: "Diese Prüfungsordnung ist noch in Arbeit",
});
