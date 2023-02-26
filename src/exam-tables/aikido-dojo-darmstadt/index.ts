import { dojo } from "../baseTypes";
import logo from "./logo.png";

export default dojo({
  name: "Aikido Dojo Darmstadt",
  logo: logo,
  lazyData: () => import("./lazyData"),
});
