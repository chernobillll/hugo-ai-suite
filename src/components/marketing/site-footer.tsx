import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-5">
          <Link className="transition hover:text-white" href="/api/health">
            Estado
          </Link>
          <Link
            className="transition hover:text-white"
            href={siteConfig.links.github}
            rel="noreferrer"
            target="_blank"
          >
            Repositorio
          </Link>
        </div>
      </Container>
    </footer>
  );
}
