import { Icon } from "@/features/dashboard/components/icon";
import { dashboardMockData } from "@/features/dashboard/data";

import styles from "./dashboard.module.css";

export function BrainBriefing() {
  const { brain } = dashboardMockData;

  return (
    <section aria-labelledby="brain-title" className={styles.brainCard} id="hugo-brain">
      <div aria-hidden="true" className={styles.brainGlowOne} />
      <div aria-hidden="true" className={styles.brainGlowTwo} />

      <div className={styles.brainContent}>
        <div className={styles.brainHeading}>
          <span aria-hidden="true" className={styles.brainIcon}>
            <Icon name="sparkles" />
          </span>
          <span>
            <span className={styles.brainEyebrow}>Hugo Brain</span>
            <span className={styles.brainLive}>
              <i aria-hidden="true" /> Recomendación diaria
            </span>
          </span>
        </div>

        <div className={styles.brainMessage}>
          <p id="brain-title">“{brain.recommendation}”</p>
          <span>{brain.context}</span>
        </div>

        <div className={styles.brainFooter}>
          <a className={styles.brainAction} href="#proyectos">
            Ver proyecto prioritario
            <Icon name="arrow-right" />
          </a>

          <div className={styles.brainStats}>
            <span>
              <small>Ventana de foco</small>
              <strong>{brain.focusWindow}</strong>
            </span>
            <i aria-hidden="true" />
            <span>
              <small>Prioridades</small>
              <strong>{brain.priorities}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
