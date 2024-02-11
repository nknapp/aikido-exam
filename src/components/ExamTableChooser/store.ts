import { persistentAtom } from "@nanostores/persistent";

export const chosenExams = persistentAtom<Record<string, boolean>>(
  "aikido-exam-chosen",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export function chooseExam(name: string, choose: boolean) {
  chosenExams.set({ ...chosenExams.get(), [name]: choose });
}
