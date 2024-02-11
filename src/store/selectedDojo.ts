import { useStore } from "@nanostores/react";
import { DojoLazyData } from "../exam-tables/baseTypes";
import { atom } from "nanostores";
import { dojos } from "../exam-tables";
import { useMemo } from "react";

type ShortDojo = {
  id: string;
  name: string;
  logo?: string;
};

const searchParams = new URLSearchParams(window.location.search);
const currentDojo = atom<string>(searchParams.get("dojo") ?? "aikido-foederation-deutschland");
const currentDojoLazyData = atom<DojoLazyData>({ exams: {} });

export function useSelectedDojo(): {
  selectedDojo: ShortDojo;
  selectedDojoLazyData: DojoLazyData;
  selectDojo: (id: string) => void;
} {
  const currentId = useStore(currentDojo);
  const lazyData = useStore(currentDojoLazyData);
  const selectedDojo = useMemo(() => {
    return {
      id: currentId,
      logo: dojos[currentId].logo,
      name: dojos[currentId].name,
    };
  }, [currentId]);
  return {
    selectedDojo,
    selectedDojoLazyData: lazyData,
    selectDojo: currentDojo.set.bind(currentDojo),
  };
}

currentDojo.subscribe((value) =>
  window.history.pushState(null, "", "?dojo=" + encodeURIComponent(value) + document.location.hash),
);

currentDojo.subscribe(async (value) => {
  const dojoRules = await dojos[value].lazyData();
  currentDojoLazyData.set(dojoRules.default);
});
