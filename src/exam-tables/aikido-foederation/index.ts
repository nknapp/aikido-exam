import { dojo } from "../baseTypes";

import logo from "./logo.svg";

export default dojo({
  name: "Aikido Föderation Darmstadt e.V.",
  logo: logo,
  lazyData: () => import("./lazyData"),
} as const);
