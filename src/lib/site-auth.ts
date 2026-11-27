// Site-wide password gate. The cookie holds a hash of the password, so
// changing SITE_PASSWORD signs everyone out. Fails closed: without the env var
// the default password still applies.

export const SITE_COOKIE = "tv_site";
export const SITE_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export const sitePassword = () => process.env.SITE_PASSWORD || "heechang";

export async function siteToken(password: string) {
  const bytes = new TextEncoder().encode(`the-value:v1:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

/** Only same-site paths, so the login form can't be turned into an open redirect. */
export function safeNext(value: unknown) {
  const s = typeof value === "string" ? value : "";
  return s.startsWith("/") && !s.startsWith("//") && !s.startsWith("/\\") ? s : "/";
}
