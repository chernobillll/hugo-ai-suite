import { Icon } from "@/features/dashboard/components/icon";
import { dashboardMockData } from "@/features/dashboard/data";

import styles from "./dashboard.module.css";

function CardHeader({
  eyebrow,
  title,
  icon,
  action,
}: {
  eyebrow: string;
  title: string;
  icon: "health" | "trading" | "calendar" | "projects";
  action: string;
}) {
  return (
    <header className={styles.domainCardHeader}>
      <div>
        <span className={styles.domainEyebrow}>{eyebrow}</span>
        <h2>
          <span aria-hidden="true" className={styles.domainIcon}>
            <Icon name={icon} />
          </span>
          {title}
        </h2>
      </div>
      <button aria-label={`${action}: ${title}`} className={styles.textButton} type="button">
        {action}
        <Icon name="chevron-right" />
      </button>
    </header>
  );
}

export function HealthCard() {
  const { health } = dashboardMockData;

  return (
    <article className={styles.domainCard} id="salud">
      <CardHeader action="Detalles" eyebrow="Bienestar diario" icon="health" title="Salud" />

      <div className={styles.healthGrid}>
        <div className={styles.healthMetric}>
          <span aria-hidden="true" className={`${styles.healthMetricIcon} ${styles.healthPink}`}>
            <Icon name="weight" />
          </span>
          <span>
            <small>Peso</small>
            <strong>{health.weight}</strong>
            <em className={styles.positiveText}>{health.weightTrend}</em>
          </span>
        </div>

        <div className={styles.healthMetric}>
          <span aria-hidden="true" className={`${styles.healthMetricIcon} ${styles.healthIndigo}`}>
            <Icon name="moon" />
          </span>
          <span>
            <small>Sueño</small>
            <strong>{health.sleep}</strong>
            <em>{health.sleepQuality}</em>
          </span>
        </div>

        <div className={styles.healthMetric}>
          <span aria-hidden="true" className={`${styles.healthMetricIcon} ${styles.healthBlue}`}>
            <Icon name="droplet" />
          </span>
          <span className={styles.waterMetric}>
            <small>Agua</small>
            <strong>{health.water}</strong>
            <span
              aria-label={`${health.waterProgress}% de la meta de agua`}
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={health.waterProgress}
              className={styles.miniProgress}
              role="progressbar"
            >
              <i style={{ width: `${health.waterProgress}%` }} />
            </span>
          </span>
        </div>

        <div className={styles.healthMetric}>
          <span aria-hidden="true" className={`${styles.healthMetricIcon} ${styles.healthOrange}`}>
            <Icon name="workout" />
          </span>
          <span>
            <small>Entrenamiento</small>
            <strong>{health.workout}</strong>
            <em>Hoy · {health.workoutTime}</em>
          </span>
        </div>
      </div>
    </article>
  );
}

export function TradingCard() {
  const { trading } = dashboardMockData;

  return (
    <article className={styles.domainCard} id="trading">
      <CardHeader action="Portafolio" eyebrow="Cuenta demo" icon="trading" title="Trading" />

      <div className={styles.tradingHero}>
        <div>
          <small>Equity</small>
          <strong>{trading.equity}</strong>
          <span className={styles.gainBadge}>{trading.equityTrend}</span>
        </div>
        <svg aria-label="Tendencia simulada de equity al alza" className={styles.tradingChart} role="img" viewBox="0 0 250 84">
          <defs>
            <linearGradient id="equity-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.24" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className={styles.chartArea} d="M2 68C23 70 31 48 51 53s31 14 49 3 28-28 47-21 29 26 49 13 29-31 52-38v72H2Z" />
          <path className={styles.chartLine} d="M2 68C23 70 31 48 51 53s31 14 49 3 28-28 47-21 29 26 49 13 29-31 52-38" />
        </svg>
      </div>

      <div className={styles.tradingMetrics}>
        <span>
          <small>Balance</small>
          <strong>{trading.balance}</strong>
        </span>
        <span>
          <small>Drawdown</small>
          <strong className={styles.warningText}>{trading.drawdown}</strong>
        </span>
        <span>
          <small>Operaciones abiertas</small>
          <strong>{trading.openTrades}</strong>
        </span>
      </div>
    </article>
  );
}

export function AgendaCard() {
  const { agenda } = dashboardMockData;
  const toneClasses = {
    violet: styles.eventViolet,
    blue: styles.eventBlue,
    green: styles.eventGreen,
  } as const;

  return (
    <article className={styles.domainCard} id="agenda">
      <CardHeader action="Calendario" eyebrow={agenda.nextLabel} icon="calendar" title="Agenda" />

      <div className={styles.agendaList}>
        {agenda.events.map((event, index) => (
          <div className={styles.agendaEvent} key={`${event.time}-${event.title}`}>
            <time dateTime={event.time}>{event.time}</time>
            <span className={`${styles.eventRail} ${toneClasses[event.tone]}`}>
              <i aria-hidden="true" />
              {index < agenda.events.length - 1 ? <b aria-hidden="true" /> : null}
            </span>
            <span className={styles.eventCopy}>
              <strong>{event.title}</strong>
              <small>
                {event.category} <i aria-hidden="true">·</i> {event.duration}
              </small>
            </span>
            {index === 0 ? <span className={styles.nextBadge}>Próximo</span> : null}
          </div>
        ))}
      </div>

      <div className={styles.agendaFooter}>
        <span>3 eventos hoy</span>
        <span>2 h 40 min reservados</span>
      </div>
    </article>
  );
}

export function ProjectsCard() {
  const { project } = dashboardMockData;

  return (
    <article className={styles.domainCard} id="proyectos">
      <CardHeader action="Proyectos" eyebrow="Prioridad de la semana" icon="projects" title="Proyectos" />

      <div className={styles.projectTop}>
        <span aria-hidden="true" className={styles.projectMark}>
          E
        </span>
        <span className={styles.projectCopy}>
          <span className={styles.focusBadge}>En foco</span>
          <strong>{project.name}</strong>
          <small>{project.description}</small>
        </span>
      </div>

      <div className={styles.projectProgressBlock}>
        <div>
          <span>Progreso general</span>
          <strong>{project.progress}%</strong>
        </div>
        <span
          aria-label={`${project.progress}% completado`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={project.progress}
          className={styles.projectProgress}
          role="progressbar"
        >
          <i style={{ width: `${project.progress}%` }} />
        </span>
        <small>{project.dueDate}</small>
      </div>

      <ul className={styles.milestones}>
        {project.milestones.map((milestone) => (
          <li className={milestone.complete ? styles.milestoneComplete : ""} key={milestone.label}>
            <span aria-hidden="true">{milestone.complete ? "✓" : ""}</span>
            {milestone.label}
          </li>
        ))}
      </ul>
    </article>
  );
}
