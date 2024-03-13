import logo from "./logo.png";
import { Dojo } from "$core/model/Dojo";

export default {
  info: {
    id: "aikido-dojo-darmstadt",
    name: "Aikido Dojo Darmstadt",
    logo: logo,
  },
  details: () => import("./details"),
} as Dojo;
