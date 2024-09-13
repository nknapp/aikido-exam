import type { Dojo } from "$core/model/Dojo";
import logo from "./logo_150.png?url";

export default {
  info: {
    id: "kenkokan",
    name: "Kenkokan Görlitz",
    logo,
  },
  details: () => import("./details"),
} satisfies Dojo;
