"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-5 text-center">
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
          Algo salió mal
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">
          No pudimos completar esta accion.
        </h1>
        <p className="mt-4 leading-7 text-slate-400">
          Puedes volver a intentarlo. Si el problema continúa, revisa el estado del
          despliegue.
        </p>
        <button
          className="mt-8 min-h-11 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          onClick={reset}
          type="button"
        >
          Reintentar
        </button>
      </div>
    </main>
  );
}
