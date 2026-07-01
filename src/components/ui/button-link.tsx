import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  const externalProps = href.startsWith("http")
    ? { rel: "noreferrer", target: "_blank" }
    : {};

  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400",
        variant === "primary" &&
          "bg-white text-slate-950 shadow-[0_12px_35px_rgba(255,255,255,0.13)] hover:-translate-y-0.5 hover:bg-violet-100",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10",
        className,
      )}
      href={href}
      {...externalProps}
    >
      {children}
    </Link>
  );
}
