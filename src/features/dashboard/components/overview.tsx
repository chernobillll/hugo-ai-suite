import type { CSSProperties } from "react";

import { Icon } from "@/features/dashboard/components/icon";
import { dashboardMockData } from "@/features/dashboard/data";
import type { DashboardIconName } from "@/features/dashboard/types";

import styles from "./dashboard.module.css";

type OverviewCardProps = {
  eyebrow: string;
  title: string;
  detail: string;
  meta: string;
  icon: DashboardIconName;
  tone: "blue" | "green" | "orange";
  href: string;
};

function OverviewCard({ eyebrow, title, detail, meta, icon, tone, href }: OverviewCardProps) {
  return (
    <a className={styles.overviewCard} href={href}>
      <div className={styles.overviewCardTop}>
        <span className={`${styles.metricIcon} ${styles[`metricIcon${tone}`]}`}>
          <Icon name={icon} />
        </span>
        <Icon className={styles.cardChevron} name="chevron-right" />
      </div>
      <span className={styles.metricEyebrow}>{eyebrow}</span>
      <strong className={styles.metricTitle}>{title}</strong>
      <span className={styles.metricDetail}>{detail}</span>
      <small className={styles.metricMeta}>{meta}</small>
    </a>
  );
}

export function Overview() {
  const { overview } = dashboardMockData;
  const scoreStyle = { "--score": `${overview.lifeScore * 3.6}deg` } as CSSProperties;

  return (
    <section aria-labelledby="overview-title" className={styles.overviewSection}>
      <div className={styles.sectionHeading}>
        <div>
          <span className={styles.sectionEyebrow}>Tu mañana, de un vistazo</span>
          <h2 id="overview-title">Resumen del día</h2>
        </div>
        <span className={styles.mockBadge}>Datos simulados</span>
      </div>

      <div className={styles.overviewGrid}>
        <article className={`${styles.overviewCard} ${styles.scoreCard}`}>
          <div className={styles.scoreRing} style={scoreStyle}>
            <span>
              <strong>{overview.lifeScore}</strong>
              <small>/ 100</small>
            </span>
          </div>
          <div className={styles.scoreCopy}>
            <span className={styles.metricEyebrow}>Life Score</span>
            <strong className={styles.metricTitle}>Excelente ritmo</strong>
            <span className={styles.metricDetail}>Salud, foco y agenda están en equilibrio.</span>
            <small className={styles.scoreTrend}>
              <Icon name="trend-up" /> +4 puntos esta semana
            </small>
          </div>
        </article>

        <OverviewCard
          detail={overview.nextEvent.detail}
          eyebrow="Próximo evento"
          href="#agenda"
          icon="calendar"
          meta={overview.nextEvent.title}
          title={overview.nextEvent.time}
          tone="blue"
        />
        <OverviewCard
          detail={`${overview.priorityProject.progress}% completado`}
          eyebrow="Proyecto prioritario"
          href="#proyectos"
          icon="briefcase"
          meta={overview.priorityProject.detail}
          title={overview.priorityProject.title}
          tone="orange"
        />
        <OverviewCard
          detail={overview.daySummary.label}
          eyebrow="Progreso de hoy"
          href="#agenda"
          icon="dashboard"
          meta={overview.daySummary.detail}
          title={overview.daySummary.value}
          tone="green"
        />
      </div>
    </section>
  );
}
