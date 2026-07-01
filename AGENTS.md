# Guía de trabajo para agentes

Este repositorio implementa Hugo AI Suite como un monolito modular, server-first y con integraciones externas aisladas detrás de adaptadores. Antes de modificar arquitectura, límites de dominio o contratos compartidos, lee íntegramente `docs/HUGO_OS_BLUEPRINT.md` y respeta sus decisiones.

## Cómo trabajar en este repositorio

1. Confirma el issue, sus criterios de aceptación y el alcance autorizado.
2. Actualiza las referencias de `origin/main` y crea una rama de trabajo desde esa referencia.
3. Revisa `README.md`, `docs/HUGO_OS_BLUEPRINT.md` y la documentación relacionada con el cambio.
4. Mantén la lógica de negocio dentro de su dominio y evita acoplar el Core o la UI a proveedores externos.
5. Usa componentes server-first; expón al cliente únicamente los datos necesarios.
6. No agregues dependencias, abstracciones o código sin un caso de uso aprobado.
7. Antes del push, ejecuta `npm run check`, `npm audit` y `npm run build`.

Nunca trabajes ni hagas commits directamente sobre `main`. No uses `main` como rama de desarrollo, no hagas force push sobre ramas compartidas y no hagas merge sin aprobación humana.

## Convención de ramas

Usa nombres en minúsculas y kebab-case con el formato `<tipo>/<descripcion-breve>`:
Si el issue prescribe un nombre exacto de rama, ese nombre prevalece para ese trabajo.

- `feat/...` para nuevas capacidades.
- `fix/...` para correcciones.
- `docs/...` para documentación.
- `refactor/...` para cambios internos sin nueva funcionalidad.
- `chore/...` para mantenimiento.

## Convención de commits

Usa Conventional Commits: `<tipo>(alcance-opcional): descripcion`. La descripción debe estar en imperativo, ser concisa y representar un único propósito. No mezcles cambios no relacionados en el mismo commit.

Ejemplos:

- `feat: create project foundation`
- `fix(calendar): handle empty event state`
- `docs: clarify local setup`

## Flujo de Pull Requests

1. Sincroniza tu rama con `origin/main` sin alterar `main` localmente.
2. Implementa solo el alcance del issue y mantén commits enfocados.
3. Revisa el diff y confirma que no contiene secretos ni archivos generados.
4. Ejecuta las validaciones requeridas y documenta sus resultados.
5. Haz push de la rama y abre un PR hacia `main`.
6. Explica qué cambia, por qué, cómo se validó y qué queda fuera del alcance.
7. Espera revisión y checks en verde. Un agente no debe hacer merge.

## Reglas para Codex

- Lee siempre `docs/HUGO_OS_BLUEPRINT.md` antes de modificar la arquitectura.
- No trabajes directamente sobre `main`; crea o usa la rama indicada por el issue.
- No amplíes el alcance ni cambies el Blueprint por iniciativa propia.
- No conectes cuentas, servicios o APIs reales sin aprobación explícita.
- Nunca escribas secretos, tokens, credenciales ni datos personales en código, fixtures, logs o documentación.
- Mantén proveedores externos detrás de contratos y adaptadores reemplazables.
- No instales dependencias salvo que sean imprescindibles para un caso de uso aprobado.
- Preserva cambios ajenos y detente si existe un conflicto que no pueda resolverse sin alterar su intención.
- Verifica lint, tipos, pruebas aplicables, auditoría y build antes de entregar.
- Crea el PR con evidencia de validación y déjalo sin merge para revisión humana.
