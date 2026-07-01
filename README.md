# Hugo AI Suite

Personal AI Life OS by Hugo: una base modular para construir herramientas de IA
que compartan contexto, conocimiento y flujos de trabajo sin acoplar la interfaz
a un proveedor concreto.

## Estado

Sprint 1 establece una fundación profesional y desplegable:

- Next.js App Router, React y TypeScript estricto.
- Tailwind CSS con una primera interfaz responsive y accesible.
- Arquitectura por features y componentes server-first.
- Endpoint `/api/health`, metadata, sitemap y robots.
- Validación automática con ESLint, TypeScript, build y GitHub Actions.
- Configuración nativa para Vercel y documentación operativa.

## Inicio rapido

```bash
cp .env.example .env.local
npm ci
npm run dev
```

Abre `http://localhost:3000`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor local de desarrollo |
| `npm run lint` | Análisis estático con ESLint |
| `npm run typecheck` | Validación estricta de TypeScript |
| `npm run build` | Build de produccion usada por Vercel |
| `npm run check` | Ejecuta todas las validaciones |

## Estructura del proyecto

```text
src/
├── app/                  # Rutas, layouts y endpoints de Next.js
├── components/           # Componentes compartidos de UI y marketing
├── config/               # Configuracion transversal de la aplicacion
├── domains/              # Capacidades de negocio aisladas por dominio
│   ├── core/
│   ├── identity/
│   ├── dashboard/
│   ├── calendar/
│   ├── mail/
│   ├── health/
│   ├── trading/
│   ├── ai/
│   └── settings/
└── lib/                  # Utilidades e infraestructura compartida
    └── supabase/         # Base reservada; sin cliente ni conexion real
```

Cada directorio de `src/domains` contiene `components`, `services`, `types` y
`hooks`. Esta separacion establece los limites de cada capacidad sin introducir
logica prematura. `src/lib/supabase` reserva el punto de infraestructura para una
futura decision de persistencia y autenticacion; todavia no configura un proyecto,
cliente ni SDK.

Las variables previstas para Supabase, Google, OpenAI y MT5 estan documentadas con
valores ficticios en `.env.example`. Copia ese archivo a `.env.local` cuando un
entorno haya sido aprobado y nunca versiones credenciales reales.

## Documentación

- [Hugo OS Blueprint](docs/HUGO_OS_BLUEPRINT.md)
- [Arquitectura](docs/ARCHITECTURE.md)
- [Contribución](docs/CONTRIBUTING.md)
- [Despliegue en Vercel](docs/DEPLOYMENT.md)

## Principio de producto

La base no instala SDKs de IA, autenticación ni persistencia antes de que exista
un caso de uso que defina sus contratos. Esto mantiene el núcleo pequeño y deja
que cada integración futura sea reemplazable.
