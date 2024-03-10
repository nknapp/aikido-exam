import { RouterProvider, createHashRouter } from "react-router-dom";
import "src/assets/styles/styles.scss";

export const router = createHashRouter([
  {
    path: "/",
    lazy: () => import("@/pages"),
  },
  {
    path: "/chooser",
    lazy: () => import("@/pages/chooser"),
  },
  {
    path: "/test/player",
    lazy: () => import("@/pages/test/player/PlayerTestPage"),
  },
  {
    path: "/manual-tests",
    lazy: () => import("@/pages/test/manual"),
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
