import aifd from "./aikido-foederation";
import darmstadt from "./aikido-dojo-darmstadt";
import { Dojo } from "./baseTypes";

export const dojos: Record<string, Dojo> = {
  "aikido-foederation-deutschland": aifd,
  "aikido-dojo-darmstadt": darmstadt,
};
