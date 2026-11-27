import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { SITE_COOKIE, SITE_COOKIE_MAX_AGE, safeNext, sitePassword, siteToken } from "@/lib/site-auth";

// Checks the site password and sets the session cookie. The form posts here
// directly, so signing in works before JavaScript loads.
const sha = (s: string) => createHash("sha256").update(s).digest();

export async function POST(req: Request) {
  let password = "";
  let next = "/";
  try {
    const form = await req.formData();
    password = String(form.get("password") ?? "");
    next = safeNext(form.get("next"));
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const expected = sitePassword();
  if (!timingSafeEqual(sha(password), sha(expected))) {
    const back = new URL("/login", req.url);
    back.searchParams.set("error", "1");
    if (next !== "/") back.searchParams.set("next", next);
    return NextResponse.redirect(back, 303);
  }

  const res = NextResponse.redirect(new URL(next, req.url), 303);
  res.cookies.set(SITE_COOKIE, await siteToken(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SITE_COOKIE_MAX_AGE,
  });
  return res;
}
