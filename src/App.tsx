import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CraftInfoRoute from "./routes/index/route";
import RootLayout from "./routes/root/route";
import RefineInfoRoute from "./routes/refine/route";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: CraftInfoRoute,
        },
      ],
    },
    {
      path: "/refine",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: RefineInfoRoute,
        },
      ],
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
