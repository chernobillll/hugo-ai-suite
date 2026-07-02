import type { ComponentPropsWithoutRef } from "react";

import type { DashboardIconName } from "@/features/dashboard/types";

type IconProps = ComponentPropsWithoutRef<"svg"> & {
  name: DashboardIconName;
};

export function Icon({ name, className, ...props }: IconProps) {
  const paths: Record<DashboardIconName, React.ReactNode> = {
    agenda: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18M8 14h3M8 17h6" />
      </>
    ),
    "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    brain: (
      <>
        <path d="M9.5 4.5A3 3 0 0 0 4 6v.5A3.5 3.5 0 0 0 3 13a3.5 3.5 0 0 0 4 5.5A3 3 0 0 0 12 20V4a3 3 0 0 0-2.5.5Z" />
        <path d="M14.5 4.5A3 3 0 0 1 20 6v.5a3.5 3.5 0 0 1 1 6.5 3.5 3.5 0 0 1-4 5.5A3 3 0 0 1 12 20V4a3 3 0 0 1 2.5.5ZM8 9H4.5M15.5 8.5H20M8 15.5H5.5M16 14h4.5M12 8h3.5M8.5 13H12" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
      </>
    ),
    "chevron-right": <path d="m9 18 6-6-6-6" />,
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    droplet: <path d="M12 2.7S5.5 9.4 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 9.4 12 2.7 12 2.7Z" />,
    health: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    projects: (
      <>
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2h7.5A2.5 2.5 0 0 1 21 9.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-10Z" />
        <path d="M3 10h18" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3-1.2 3.3a2.8 2.8 0 0 1-1.7 1.7L6 9.2l3.1 1.1a2.8 2.8 0 0 1 1.7 1.7l1.2 3.3 1.2-3.3a2.8 2.8 0 0 1 1.7-1.7L18 9.2 14.9 8a2.8 2.8 0 0 1-1.7-1.7L12 3Z" />
        <path d="m5 15-.6 1.7a1.5 1.5 0 0 1-.9.9l-1.7.6 1.7.6a1.5 1.5 0 0 1 .9.9L5 22.4l.6-1.7a1.5 1.5 0 0 1 .9-.9l1.7-.6-1.7-.6a1.5 1.5 0 0 1-.9-.9L5 15Z" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    trading: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
        <path d="m3 13 6-5 6 3 7-7" />
      </>
    ),
    "trend-up": <path d="m3 17 6-6 4 4 8-9M15 6h6v6" />,
    weight: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="4" />
        <path d="M8 9a4 4 0 0 1 8 0M12 9l2-2" />
      </>
    ),
    workout: (
      <>
        <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />
      </>
    ),
    x: <path d="M18 6 6 18M6 6l12 12" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
