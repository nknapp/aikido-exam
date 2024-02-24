import { TechniqueList } from "../model/TechniqueList";
import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

const techniqueList = atom<TechniqueList>(new TechniqueList());

export function useTechniqueList(): [techniques: TechniqueList, setTechniques: (techniques: TechniqueList) => void] {
  return [useStore(techniqueList), techniqueList.set.bind(techniqueList)];
}
