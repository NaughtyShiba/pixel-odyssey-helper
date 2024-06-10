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
// import { ThemeProvider } from "./features/theme/context";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookieBanner = (await cookieBannerCookie.parse(cookieHeader)) ?? {};
  return {
    cookieBannerHasBeenClosed: cookieBanner.hasBeenClosed,
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookieBanner = (await cookieBannerCookie.parse(cookieHeader)) ?? {};
  const bodyParams = await request.formData();

  if (bodyParams.get("intent") === "close_cookie_banner") {
    cookieBanner.hasBeenClosed = true;
  }

  return json(
    {},
    {
      headers: {
        "Set-Cookie": await cookieBannerCookie.serialize(cookieBanner),
      },
    },
  );
}

export default function App() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
    <html>
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
    // </ThemeProvider>
  );
}
