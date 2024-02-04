import React from "react";
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
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
