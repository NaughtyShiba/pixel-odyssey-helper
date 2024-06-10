import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import appStylesHref from "./style.css?url";
import { LinksFunction } from "@remix-run/node";
// import { ThemeProvider } from "./features/theme/context";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body className="max-w-screen-xl mx-auto">
        <Outlet />

        <Scripts />
      </body>
    </html>
    // </ThemeProvider>
  );
}
