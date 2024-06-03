import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexRoute from "./routes/index/route";
import RootLayout, { RootErrorBoundary } from "./routes/root/route";

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
