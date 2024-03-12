import { createHashRouter, RouterProvider, useRouteError } from "react-router-dom";
import "src/assets/styles/styles.scss";
import React from "react";

const ErrorElement: React.FC = () => {
  // Delegate to error handler
  throw useRouteError();
};

export const router = createHashRouter([
  {
    path: "/",
    lazy: () => import("src/pages"),
    errorElement: <ErrorElement />,
  },
  {
    path: "/chooser",
    lazy: () => import("src/pages/chooser"),
    errorElement: <ErrorElement />,
  },
  {
    path: "/provoke-error",
    lazy: async () => {
      throw new Error("Test-Error");
    },
    errorElement: <ErrorElement />,
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
