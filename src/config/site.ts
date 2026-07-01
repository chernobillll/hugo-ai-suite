import { env } from "@/lib/env";

export const siteConfig = {
  name: "Hugo AI Suite",
  shortName: "Hugo",
  description:
    "Un sistema personal de inteligencia artificial para pensar, organizar y ejecutar mejor.",
  url: env.appUrl,
  links: {
    github: "https://github.com/chernobillll/hugo-ai-suite",
  },
} as const;
