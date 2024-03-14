import logo from "./logo.svg?url";
import type { Dojo } from "$core/model/Dojo";

export default {
  info: {
    id: "aifd",
    name: "Aikido Föderation Darmstadt e.V.",
    logo: logo,
  },
  details: () => import("./details"),
} satisfies Dojo;
