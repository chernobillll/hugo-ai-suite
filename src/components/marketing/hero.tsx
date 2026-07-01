import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const signals = [
  { label: "Contexto", value: "Activo" },
  { label: "Privacidad", value: "Primero" },
  { label: "Módulos", value: "03" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[36rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2),rgba(15,23,42,0)_68%)] blur-2xl"
      />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
              <span className="size-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.9)]" />
              Base de producto / Sprint 1
            </div>
            <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Tu inteligencia,
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-300 bg-clip-text text-transparent">
                mejor organizada.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-slate-400">
              {siteConfig.description} Una base limpia para construir herramientas
              que compartan contexto sin perder claridad ni control.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#suite">Explorar la suite</ButtonLink>
              <ButtonLink href={siteConfig.links.github} variant="secondary">
                Ver el codigo
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[3rem] bg-violet-500/10 blur-3xl"
            />
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/70 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.4rem] border border-white/8 bg-slate-900/70 p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/8 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-xl bg-violet-400/15 text-violet-200">
                      ✦
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Hugo Core</p>
                      <p className="text-xs text-slate-500">Sistema preparado</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-300/15 bg-emerald-300/8 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-emerald-200">
                    Online
                  </span>
                </div>

                <div className="py-8">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Buenas tardes
                  </p>
                  <p className="mt-3 max-w-sm text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                    ¿Qué quieres convertir en progreso hoy?
                  </p>
                  <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-400">
                    <span className="text-slate-200">Escribe una idea,</span> conecta
                    conocimiento o inicia un flujo…
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {signals.map((signal) => (
                    <div
                      className="rounded-xl border border-white/8 bg-white/[0.025] px-3 py-3"
                      key={signal.label}
                    >
                      <p className="truncate text-[0.65rem] uppercase tracking-wider text-slate-600">
                        {signal.label}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-200 sm:text-sm">
                        {signal.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
