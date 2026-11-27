import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "./login-form";
import { LogoMark } from "@/components/shell/logo";

export const metadata: Metadata = { title: "Sign in", robots: { index: false, follow: false } };

export default function LoginPage() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-bg px-5">
      <div className="w-full max-w-[380px] py-16">
        <span className="grid size-11 place-items-center overflow-hidden rounded-[12px] bg-night text-white">
          <LogoMark className="size-11" />
        </span>
        <h1 className="t-h2 mt-8">The Value</h1>
        <p className="t-b1 mt-2 text-ink-2">This site is private. Enter the password to continue.</p>
        <Suspense fallback={<div className="mt-8 h-[124px]" />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
