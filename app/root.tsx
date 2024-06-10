import {
  Links,
  Meta,
  Outlet,
  Scripts,
  json,
  useLoaderData,
} from "@remix-run/react";
import appStylesHref from "./style.css?url";
import {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { CookiesToast } from "./features/cookies/components/toast";
import { cookieBannerCookie } from "./features/cookies/cookie.server.mts";
import { ThemeProvider, useTheme } from "./features/theme/context";
import { themeCookie } from "./features/theme/cookie.server.mts";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookieBanner = (await cookieBannerCookie.parse(cookieHeader)) ?? {};
  const theme = (await themeCookie.parse(cookieHeader)) ?? {};
  return {
    cookieBannerHasBeenClosed: cookieBanner.hasBeenClosed,
    theme: theme.theme ?? "dark",
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const bodyParams = await request.formData();

  if (bodyParams.get("intent") === "close_cookie_banner") {
    const cookieBanner = (await cookieBannerCookie.parse(cookieHeader)) ?? {};
    cookieBanner.hasBeenClosed = true;
    return json(
      {},
      {
        headers: {
          "Set-Cookie": await cookieBannerCookie.serialize(cookieBanner),
        },
      },
    );
  }

  if (bodyParams.get("intent") === "set_theme") {
    const theme = (await themeCookie.parse(cookieHeader)) ?? {};
    theme.theme = bodyParams.get("theme") ?? "dark";
    return json(
      {},
      {
        headers: {
          "Set-Cookie": await themeCookie.serialize(theme),
        },
      },
    );
  }
}

export default function AppWithTheme() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <ThemeProvider theme={loaderData.theme ?? "dark"}>
      <App />
    </ThemeProvider>
  );
}

function App() {
  const loaderData = useLoaderData<typeof loader>();
  const theme = useTheme();
  return (
    <html className={theme}>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="max-w-screen-xl mx-auto">
        <Outlet />
        <CookiesToast visible={!loaderData.cookieBannerHasBeenClosed} />
        <Scripts />
      </body>
    </html>
  );
}
