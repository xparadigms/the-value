"use client";

import clsx from "clsx";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Choice = "light" | "dark" | "system";

const KEY = "theme";
const EVENT = "themechange";
const media = () => window.matchMedia("(prefers-color-scheme: dark)");

function read(): Choice {
  const t = localStorage.getItem(KEY);
  return t === "light" || t === "dark" ? t : "system";
}

function apply(choice: Choice) {
  const dark = choice === "dark" || (choice === "system" && media().matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

const OPTIONS: { value: Choice; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export function ThemeToggle({ className }: { className?: string }) {
  const choice = useSyncExternalStore(subscribe, read, () => "system" as Choice);

  // Follow the OS setting while on "system".
  useEffect(() => {
    if (choice !== "system") return;
    const mq = media();
    const on = () => apply("system");
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [choice]);

  const set = (c: Choice) => {
    localStorage.setItem(KEY, c);
    apply(c);
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <div role="radiogroup" aria-label="Theme" className={clsx("flex items-center gap-0.5 rounded-full bg-control p-0.5", className)}>
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={choice === value}
          aria-label={label}
          title={label}
          onClick={() => set(value)}
          className={clsx(
            "grid size-7 place-items-center rounded-full transition-colors",
            choice === value ? "bg-surface text-ink shadow-[0_0_0_1px_var(--tds-line)]" : "text-ink-3 hover:text-ink",
          )}
        >
          <Icon className="size-3.5" strokeWidth={1.8} />
        </button>
      ))}
    </div>
  );
}
