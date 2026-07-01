# Arquitectura

Hugo AI Suite usa Next.js App Router con una estrategia **server-first**. La base
separa las rutas, la interfaz compartida, las capacidades de producto y la
infraestructura para que cada nueva función tenga un lugar predecible.

## Mapa del proyecto

```text
src/
├── app/                    # Rutas, metadata y endpoints HTTP
│   ├── (marketing)/        # Páginas públicas sin modificar la URL
│   └── api/                # Route Handlers
├── components/
│   ├── marketing/          # Composicion de la pagina publica
│   └── ui/                 # Primitivas visuales reutilizables
├── config/                 # Identidad y enlaces del producto
├── features/               # Módulos de negocio independientes
└── lib/                    # Utilidades e infraestructura transversal
```

## Reglas de dependencia

1. `app` puede importar desde `components`, `features`, `config` y `lib`.
2. `components/ui` no conoce features ni rutas.
3. Cada feature mantiene sus tipos, datos, acciones y componentes especificos.
4. `lib` contiene código transversal, no reglas de negocio.
5. Los secretos solo se leen en modulos server-only; nunca usan el prefijo
   `NEXT_PUBLIC_`.

## Convenciones

- Componentes de servidor por defecto. Agregar `"use client"` solo en el límite
  interactivo más pequeño posible.
- Importaciones internas mediante el alias `@/*`.
- Tipos estrictos y sin `any` implícito.
- Un módulo de producto no importa otro directamente. La composición ocurre en
  una ruta o servicio de aplicación.
- Las integraciones externas futuras (LLM, base de datos, autenticación) deben
  encapsularse detras de adaptadores en la feature que las consume.

## Siguiente crecimiento recomendado

Cuando se implemente el primer flujo real, crear una carpeta bajo `src/features`
con sus contratos antes de elegir un proveedor. Por ejemplo:

```text
features/assistant/
├── actions/
├── components/
├── services/
└── types.ts
```

Esta frontera permite cambiar de proveedor de IA o persistencia sin reescribir
las páginas ni las primitivas visuales.
