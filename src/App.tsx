import { RouterProvider, createHashRouter } from "react-router-dom";
import "src/assets/styles/styles.scss";

export const router = createHashRouter([
  {
    path: "/",
    lazy: () => import("src/pages"),
  },
  {
    path: "/chooser",
    lazy: () => import("src/pages/chooser"),
  },
  {
    path: "/test/player",
    lazy: () => import("./pages/test/player"),
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
