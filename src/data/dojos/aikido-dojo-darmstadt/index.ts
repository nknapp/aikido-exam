import logo from "./logo.png?url";
import type { Dojo } from "$core/model/Dojo";

export default {
  info: {
    id: "aikido-dojo-darmstadt",
    name: "Aikido Dojo Darmstadt",
    logo: logo,
  },
  details: () => import("./details"),
} as Dojo;
