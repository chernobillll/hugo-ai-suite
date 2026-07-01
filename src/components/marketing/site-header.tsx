import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Container } from "../ui/container";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-white/8">
      <Container className="flex h-20 items-center justify-between">
        <Link
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          href="/"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-sm font-bold text-violet-200 transition group-hover:bg-violet-400/20">
            H
          </span>
          <span className="text-sm font-semibold tracking-[-0.01em] text-white">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="flex items-center gap-5">
          <Link
            className="hidden text-sm text-slate-400 transition hover:text-white sm:block"
            href="#suite"
          >
            Suite
          </Link>
          <Link
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
            href={siteConfig.links.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
        </nav>
      </Container>
    </header>
  );
}
