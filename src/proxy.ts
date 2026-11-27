import { NextResponse, type NextRequest } from "next/server";
import { SITE_COOKIE, sitePassword, siteToken } from "@/lib/site-auth";

// Password-protects every page. Visitors without the cookie go to /login.
const OPEN = new Set(["/login", "/api/site-login"]);

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (OPEN.has(pathname)) return NextResponse.next();
  if (request.cookies.get(SITE_COOKIE)?.value === (await siteToken(sitePassword()))) return NextResponse.next();

  const login = new URL("/login", request.url);
  if (pathname !== "/") login.searchParams.set("next", pathname + search);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)"],
};
