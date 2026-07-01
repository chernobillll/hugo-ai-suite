const LOCAL_APP_URL = "http://localhost:3000";

function normalizeUrl(value: string): string {
  return value.replace(/\/$/, "");
}

export const env = {
  appUrl: normalizeUrl(process.env.NEXT_PUBLIC_APP_URL ?? LOCAL_APP_URL),
  vercelEnvironment: process.env.VERCEL_ENV ?? "development",
} as const;
