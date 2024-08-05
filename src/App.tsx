import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuilderRoute from "./routes/builder/route";
import EnemiesRoute from "./routes/enemies/route";
import ObolsRoute from "./routes/obols/route";
import IndexRoute from "./routes/index/route";
import RootLayout, { RootErrorBoundary } from "./routes/root/route";
import "./style.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: IndexRoute,
        },
        {
          path: "/builder",
          Component: BuilderRoute,
        },
        {
          path: "/enemies",
          Component: EnemiesRoute,
        },
        {
          path: "/obols",
          Component: ObolsRoute,
        },
      ],
      ErrorBoundary: RootErrorBoundary,
    },
  ],
  { basename: "/" },
);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
