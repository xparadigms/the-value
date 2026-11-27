"use client";

import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

/** A plain form post, so signing in works even before JavaScript loads. */
export function LoginForm() {
  const params = useSearchParams();
  const [sending, setSending] = useState(false);
  const error = params.get("error");

  return (
    <form method="post" action="/api/site-login" onSubmit={() => setSending(true)} className="mt-8">
      <input type="hidden" name="next" value={params.get("next") ?? "/"} />
      <label htmlFor="password" className="t-eyebrow text-ink-3">
        Password
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          aria-invalid={!!error}
          aria-describedby={error ? "login-error" : undefined}
          className="h-12 min-w-0 flex-1 rounded-[14px] bg-surface px-4 text-[16px] shadow-[0_0_0_1px_var(--tds-line)] outline-none focus:shadow-[0_0_0_2px_var(--tds-ink)]"
        />
        <button
          type="submit"
          disabled={sending}
          aria-label="Continue"
          className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-ink text-bg transition-opacity disabled:opacity-50"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
      {error && (
        <p id="login-error" role="alert" className="t-b2 mt-3 text-[#d14343]">
          {"That password isn't right."}
        </p>
      )}
    </form>
  );
}
