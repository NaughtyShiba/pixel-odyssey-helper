interface Cookie {
  name: string;
  key: string;
  description: string;
}
export const COOKIES: Record<string, Cookie> = {
  cookie_banner: {
    name: "Cookie Banner",
    key: "cookie_banner",
    description: "Stores wherever Cookie Banner was closed",
  },
};
