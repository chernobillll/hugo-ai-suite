import { Foundation } from "@/components/marketing/foundation";
import { Hero } from "@/components/marketing/hero";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { SuiteOverview } from "@/components/marketing/suite-overview";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950">
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <SuiteOverview />
        <Foundation />
      </main>
      <SiteFooter />
    </div>
  );
}
