import { persistentAtom } from "@nanostores/persistent";
import { TechniqueList } from "../model/TechniqueList";
import { useStore } from "@nanostores/react";

const techniqueList = persistentAtom<TechniqueList>("aikido-exam-techniques", new TechniqueList(), {
  encode: (techniqueList) => {
    return JSON.stringify(techniqueList.toJson());
  },
  decode: (string) => {
    return TechniqueList.fromJson(JSON.parse(string));
  },
});

export function useTechniqueList(): [techniques: TechniqueList, setTechniques: (techniques: TechniqueList) => void] {
  return [useStore(techniqueList), techniqueList.set.bind(techniqueList)];
}
