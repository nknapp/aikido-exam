import type { Dojo } from "$core/model/Dojo";

export default {
  draft: true,
  info: {
    id: "goerlitz",
    name: "Görlitz",
  },
  details: () => import("./details"),
} satisfies Dojo;
