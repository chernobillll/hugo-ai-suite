import { AgendaCard, HealthCard, ProjectsCard, TradingCard } from "@/features/dashboard/components/domain-cards";
import { BrainBriefing } from "@/features/dashboard/components/brain-briefing";
import { Icon } from "@/features/dashboard/components/icon";
import { Overview } from "@/features/dashboard/components/overview";
import { Sidebar } from "@/features/dashboard/components/sidebar";
import { ThemeToggle } from "@/features/dashboard/components/theme-toggle";

import styles from "./dashboard.module.css";

export function DashboardShell({ currentDate }: { currentDate: string }) {
  return (
    <div className={styles.shell} id="dashboard">
      <Sidebar />

      <main className={styles.main} id="contenido">
        <header className={styles.pageHeader}>
          <div>
            <p className={styles.currentDate}>{currentDate}</p>
            <h1>Buenos días, Hugo <span aria-hidden="true">👋</span></h1>
            <p className={styles.greetingCopy}>Todo está en orden. Este es tu espacio para avanzar con intención.</p>
          </div>

          <div className={styles.headerActions}>
            <button aria-label="Ver notificaciones" className={styles.iconButton} type="button">
              <Icon name="bell" />
              <span aria-hidden="true" className={styles.notificationDot} />
            </button>
            <ThemeToggle />
            <span aria-hidden="true" className={styles.headerAvatar}>H</span>
          </div>
        </header>

        <BrainBriefing />
        <Overview />

        <section aria-label="Módulos de tu día" className={styles.domainGrid}>
          <HealthCard />
          <TradingCard />
          <AgendaCard />
          <ProjectsCard />
        </section>

        <footer className={styles.dashboardFooter}>
          <span>Hugo AI Suite</span>
          <span>Diseñado para pensar con claridad.</span>
          <span>Vista demo · Sin datos reales</span>
        </footer>
      </main>
    </div>
  );
}
