interface Cookie {
  name: string;
  key: string;
  description: string;
}
export const COOKIES: Record<string, Cookie> = {
  cookie_banner: {
    name: "Cookie Banner",
    key: "cookie_banner",
    description: "Stores information that Cookie Banner was closed",
  },
  theme: {
    name: "Theme",
    key: "theme",
    description:
      "Indicates wherever to use light/dark mode or system-preference",
  },
};
