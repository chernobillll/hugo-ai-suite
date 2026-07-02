export type DashboardIconName =
  | "agenda"
  | "arrow-right"
  | "bell"
  | "brain"
  | "briefcase"
  | "calendar"
  | "chevron-right"
  | "dashboard"
  | "droplet"
  | "health"
  | "menu"
  | "moon"
  | "projects"
  | "settings"
  | "sparkles"
  | "sun"
  | "trading"
  | "trend-up"
  | "weight"
  | "workout"
  | "x";

export type DashboardNavigationItem = {
  label: string;
  href: string;
  icon: DashboardIconName;
  active?: boolean;
};

export type AgendaEvent = {
  time: string;
  title: string;
  category: string;
  duration: string;
  tone: "violet" | "blue" | "green";
};

export type ProjectMilestone = {
  label: string;
  complete: boolean;
};
