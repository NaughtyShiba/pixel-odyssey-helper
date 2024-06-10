import { COOKIES } from "@/core/cookies.mjs";
import { createCookie } from "@remix-run/node";

export const themeCookie = createCookie(COOKIES.theme.key, {});
