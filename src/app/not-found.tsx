import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 py-24 text-center">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
          Error 404
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">
          Esta ruta aún no existe.
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-400">
          La suite está creciendo por módulos. Vuelve al inicio para continuar.
        </p>
        <ButtonLink className="mt-8" href="/">
          Volver al inicio
        </ButtonLink>
      </Container>
    </main>
  );
}
