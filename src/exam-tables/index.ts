import { atom } from "nanostores";
import { DojoLazyData, Dojo } from "./baseTypes";
import aifd from "./aikido-foederation";
import darmstadt from "./aikido-dojo-darmstadt";

export const currentDojoLazyData = atom<DojoLazyData>({ exams: {} });

export const currentDojo = atom<Pick<Dojo, "name" | "logo">>({ name: "loading dojos" });

export const dojos: Record<string, Dojo> = {
  "aikido-foederation-deutschland": aifd,
  "aikido-dojo-darmstadt": darmstadt,
};

export async function initCurrentDojo(): Promise<void> {
  const searchParams = new URLSearchParams(window.location.search);
  const dojoId = searchParams.get("dojo") ?? "aikido-foederation-deutschland";
  currentDojo.set(dojos[dojoId]);
  const dojoRules = await dojos[dojoId].lazyData();
  currentDojoLazyData.set(dojoRules.default);
}

export async function selectDojo(dojo: string): Promise<void> {
  window.history.pushState(null, "", "?dojo=" + encodeURIComponent(dojo));
  await initCurrentDojo();
}
