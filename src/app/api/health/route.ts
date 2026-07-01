import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    status: "ok",
    service: siteConfig.name,
    environment: env.vercelEnvironment,
  });
}
