"use client";

import { useEffect } from "react";

import { Icon } from "@/features/dashboard/components/icon";

import styles from "./dashboard.module.css";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  const savedTheme = window.localStorage.getItem("hugo-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme ?? getPreferredTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("hugo-theme", nextTheme);
  }

  return (
    <button
      aria-label="Cambiar tema de color"
      className={styles.iconButton}
      onClick={toggleTheme}
      title="Cambiar tema de color"
      type="button"
    >
      <Icon className={styles.themeSun} name="sun" />
      <Icon className={styles.themeMoon} name="moon" />
    </button>
  );
}
