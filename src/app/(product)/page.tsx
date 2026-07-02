import type { Metadata } from "next";

import { DashboardShell } from "@/features/dashboard/components/dashboard-shell";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Tu centro de control personal en Hugo AI Suite.",
};

export const dynamic = "force-dynamic";

function getCurrentDate() {
  const date = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return date.charAt(0).toUpperCase() + date.slice(1);
}

export default function DashboardPage() {
  return <DashboardShell currentDate={getCurrentDate()} />;
}
