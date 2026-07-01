import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { suiteModules } from "@/features/modules/catalog";

export function SuiteOverview() {
  return (
    <section className="border-y border-white/8 bg-white/[0.015] py-24 sm:py-32" id="suite">
      <Container>
        <SectionHeading
          description="Cada capacidad vive en su propio módulo y comparte solo la infraestructura necesaria. La suite puede crecer sin convertirse en una pieza monolítica."
          eyebrow="Arquitectura de producto"
          title="Una suite. Módulos independientes."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {suiteModules.map((module) => (
            <article
              className="group flex min-h-96 flex-col rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:bg-slate-900/80 sm:p-8"
              key={module.id}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                  {module.eyebrow}
                </p>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">
                  Próximo
                </span>
              </div>
              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-white">
                {module.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">{module.description}</p>
              <ul className="mt-auto space-y-3 border-t border-white/8 pt-7">
                {module.capabilities.map((capability) => (
                  <li
                    className="flex items-center gap-3 text-sm text-slate-300"
                    key={capability}
                  >
                    <span className="size-1.5 rounded-full bg-violet-300/80" />
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
