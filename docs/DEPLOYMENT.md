# Despliegue en Vercel

El proyecto usa la integracion nativa de Next.js en Vercel. No requiere servidor
personalizado ni una carpeta de salida configurada manualmente.

## Configuración

1. Importar `chernobillll/hugo-ai-suite` en Vercel.
2. Mantener el framework detectado como **Next.js**.
3. Usar `npm run build` como build command.
4. Definir las variables por entorno.

| Variable | Obligatoria | Uso |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Recomendada en producción | URL canónica para metadata, sitemap y robots |

Ejemplo:

```text
NEXT_PUBLIC_APP_URL=https://tu-dominio.cl
```

## Verificación posterior

- La pagina principal responde con estado 200.
- `/api/health` devuelve `{ "status": "ok" }`.
- `/robots.txt` y `/sitemap.xml` usan el dominio de produccion.
- No existen secretos con prefijo `NEXT_PUBLIC_`.

## Rollback

Vercel conserva despliegues anteriores. Si una entrega falla, promover el último
deployment estable desde el panel mientras se corrige la rama. Evitar cambios
manuales en producción que no estén representados en Git.
