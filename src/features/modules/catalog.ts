export type SuiteModule = {
  id: "assistant" | "knowledge" | "workflows";
  eyebrow: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  status: "base" | "next";
};

export const suiteModules: readonly SuiteModule[] = [
  {
    id: "assistant",
    eyebrow: "01 / Conversación",
    title: "Hugo Assistant",
    description:
      "Un punto de entrada simple para convertir preguntas e ideas en decisiones accionables.",
    capabilities: ["Contexto personal", "Respuestas útiles", "Acciones sugeridas"],
    status: "next",
  },
  {
    id: "knowledge",
    eyebrow: "02 / Memoria",
    title: "Hugo Knowledge",
    description:
      "Una capa de conocimiento organizada para recuperar lo importante cuando hace falta.",
    capabilities: ["Fuentes conectadas", "Búsqueda semántica", "Memoria controlada"],
    status: "next",
  },
  {
    id: "workflows",
    eyebrow: "03 / Ejecución",
    title: "Hugo Workflows",
    description:
      "Flujos modulares para pasar de una intención a una tarea completada con trazabilidad.",
    capabilities: ["Rutinas", "Aprobaciones", "Historial de actividad"],
    status: "next",
  },
] as const;
