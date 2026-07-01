# Guía de contribución

## Preparacion

Requisitos:

- Node.js 20.9 o superior.
- npm 10 o superior.

```bash
cp .env.example .env.local
npm ci
npm run dev
```

La aplicación queda disponible en `http://localhost:3000` y el endpoint de salud
en `http://localhost:3000/api/health`.

## Antes de abrir un pull request

Ejecutar el control completo:

```bash
npm run check
```

El comando valida ESLint, tipos y la build de producción. Todo cambio debe dejarlo
en verde.

## Flujo de ramas

- Partir desde `main` actualizada.
- Usar nombres descriptivos: `feat/...`, `fix/...`, `refactor/...`, `docs/...`.
- Mantener los commits enfocados en una sola intención.
- Documentar variables nuevas tanto en `.env.example` como en la guia de
  despliegue.

## Criterios para una nueva feature

1. La capacidad vive bajo `src/features/<nombre>`.
2. No se exponen secretos al cliente.
3. Los estados vacío, carga y error tienen una salida accesible.
4. Se actualiza la documentación cuando cambia una frontera de arquitectura.
5. `npm run check` termina correctamente.
