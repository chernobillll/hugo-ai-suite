import { Container } from "@/components/ui/container";

const principles = [
  {
    number: "01",
    title: "Server-first",
    description:
      "Componentes de servidor por defecto; JavaScript en cliente solo cuando aporta interacción real.",
  },
  {
    number: "02",
    title: "Modular",
    description:
      "Producto, UI, configuración e infraestructura separados por límites fáciles de entender.",
  },
  {
    number: "03",
    title: "Verificable",
    description:
      "Lint, TypeScript estricto y build de producción reunidos en un único comando de control.",
  },
  {
    number: "04",
    title: "Vercel-native",
    description:
      "Configuración mínima y estable, sin servidores personalizados ni pasos de despliegue frágiles.",
  },
];

export function Foundation() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              Fundación técnica
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Construida para evolucionar, no para impresionar una sola vez.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Esta primera entrega prioriza decisiones aburridas y confiables: límites
              claros, pocas dependencias y documentación cerca del código.
            </p>
          </div>

          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {principles.map((principle) => (
              <li className="border-t border-white/10 pt-5" key={principle.number}>
                <span className="font-mono text-xs text-violet-300">
                  {principle.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
