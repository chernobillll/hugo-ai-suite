import type {
  AgendaEvent,
  DashboardNavigationItem,
  ProjectMilestone,
} from "@/features/dashboard/types";

export const dashboardNavigation: readonly DashboardNavigationItem[] = [
  { label: "Dashboard", href: "#dashboard", icon: "dashboard", active: true },
  { label: "Salud", href: "#salud", icon: "health" },
  { label: "Agenda", href: "#agenda", icon: "calendar" },
  { label: "Trading", href: "#trading", icon: "trading" },
  { label: "Proyectos", href: "#proyectos", icon: "projects" },
  { label: "IA", href: "#hugo-brain", icon: "brain" },
  { label: "Configuración", href: "#configuracion", icon: "settings" },
] as const;

export const dashboardMockData = {
  brain: {
    recommendation:
      "Hoy deberías terminar Exitoweb antes de comenzar otro proyecto.",
    context:
      "Tienes una ventana de foco amplia antes de tu entrenamiento. Es el mejor momento para cerrar la propuesta visual.",
    focusWindow: "2 h 30 min",
    priorities: "3 tareas",
  },
  overview: {
    lifeScore: 86,
    nextEvent: {
      time: "10:30",
      title: "Revisión Exitoweb",
      detail: "Videollamada · 45 min",
    },
    priorityProject: {
      title: "Exitoweb",
      progress: 78,
      detail: "Entrega este viernes",
    },
    daySummary: {
      value: "6 de 8",
      label: "Objetivos del día",
      detail: "Tu mañana está bien encaminada",
    },
  },
  health: {
    weight: "78,4 kg",
    weightTrend: "−0,3 kg esta semana",
    sleep: "7 h 42 min",
    sleepQuality: "Sueño reparador",
    water: "1,8 / 2,5 L",
    waterProgress: 72,
    workout: "Fuerza · Torso",
    workoutTime: "18:30",
  },
  trading: {
    balance: "US$ 24.850",
    equity: "US$ 25.123",
    equityTrend: "+1,1% hoy",
    drawdown: "−2,4%",
    openTrades: "3",
  },
  agenda: {
    nextLabel: "Próximo en 40 min",
    events: [
      {
        time: "10:30",
        title: "Revisión Exitoweb",
        category: "Proyectos",
        duration: "45 min",
        tone: "violet",
      },
      {
        time: "13:00",
        title: "Almuerzo y pausa",
        category: "Personal",
        duration: "60 min",
        tone: "green",
      },
      {
        time: "18:30",
        title: "Entrenamiento de fuerza",
        category: "Salud",
        duration: "75 min",
        tone: "blue",
      },
    ] satisfies AgendaEvent[],
  },
  project: {
    name: "Exitoweb",
    description: "Nueva experiencia web para convertir visitas en clientes.",
    progress: 78,
    dueDate: "Entrega · viernes",
    milestones: [
      { label: "Arquitectura visual", complete: true },
      { label: "Dashboard responsive", complete: true },
      { label: "Revisión final", complete: false },
    ] satisfies ProjectMilestone[],
  },
} as const;
