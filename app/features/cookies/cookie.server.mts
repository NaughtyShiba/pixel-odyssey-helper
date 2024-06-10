import { COOKIES } from "@/core/cookies.mjs";
import { createCookie } from "@remix-run/node";

export const cookieBannerCookie = createCookie(COOKIES.cookie_banner.key, {});
