"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/features/dashboard/components/icon";
import { dashboardNavigation } from "@/features/dashboard/data";

import styles from "./dashboard.module.css";

function Brand() {
  return (
    <a aria-label="Ir al dashboard" className={styles.brand} href="#dashboard">
      <span aria-hidden="true" className={styles.brandMark}>
        H
      </span>
      <span className={styles.brandCopy}>
        <strong>Hugo</strong>
        <small>AI Suite</small>
      </span>
    </a>
  );
}

function Navigation({ onNavigate, tabIndex }: { onNavigate?: () => void; tabIndex?: number }) {
  return (
    <nav aria-label="Navegación principal" className={styles.navigation}>
      <span className={styles.navigationLabel}>Espacio personal</span>
      <ul>
        {dashboardNavigation.map((item) => (
          <li key={item.label}>
            <a
              aria-current={item.active ? "page" : undefined}
              className={item.active ? styles.navLinkActive : styles.navLink}
              href={item.href}
              onClick={onNavigate}
              tabIndex={tabIndex}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.active ? <span className={styles.activeDot} /> : null}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Profile() {
  return (
    <div className={styles.profile} id="configuracion">
      <span aria-hidden="true" className={styles.avatar}>
        H
      </span>
      <span className={styles.profileCopy}>
        <strong>Hugo</strong>
        <small>Espacio personal</small>
      </span>
      <Icon name="chevron-right" />
    </div>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <aside className={styles.sidebar}>
        <Brand />
        <Navigation />

        <div className={styles.sidebarFooter}>
          <div className={styles.brainStatus}>
            <span aria-hidden="true" className={styles.statusIcon}>
              <Icon name="sparkles" />
            </span>
            <span>
              <strong>Hugo Brain</strong>
              <small>
                <i aria-hidden="true" /> Listo para ayudarte
              </small>
            </span>
          </div>
          <Profile />
        </div>
      </aside>

      <header className={styles.mobileTopbar}>
        <Brand />
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar navegación" : "Abrir navegación"}
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <Icon name={isOpen ? "x" : "menu"} />
        </button>
      </header>

      <button
        aria-hidden={!isOpen}
        aria-label="Cerrar navegación"
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayVisible : ""}`}
        onClick={() => setIsOpen(false)}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <aside
        aria-hidden={!isOpen}
        className={`${styles.mobileSidebar} ${isOpen ? styles.mobileSidebarOpen : ""}`}
        id="mobile-navigation"
      >
        <Navigation onNavigate={() => setIsOpen(false)} tabIndex={isOpen ? undefined : -1} />
        <Profile />
      </aside>
    </>
  );
}
