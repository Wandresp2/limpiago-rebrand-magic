# Talento y Servicios Integrales (TSI) — Sitio Web

Sitio web corporativo (landing page) de **Talento y Servicios Integrales (TSI)**: empresa que ofrece soluciones integrales para empresas — talento humano especializado, aseo y limpieza, operación y mantenimiento, servicios generales y outsourcing.

El sitio presenta el proceso de trabajo (5 pasos), las líneas de negocio, los perfiles de talento especializado, los sectores de la industria atendidos, testimonios y un formulario de contacto, todo con una identidad visual propia basada en los colores de marca (azul marino `#0A2540`, naranja `#F58220`, azul claro `#BFDDEF`) y tipografía **Poppins**.

## Demo en vivo

- **Producción**: https://limpiago-rebrand-magic.lovable.app
- **Vista previa**: https://id-preview--6a95adb1-6bdc-4831-a604-ccf02a2fe2cd.lovable.app

## Tecnologías

| Herramienta | Uso |
| --- | --- |
| [TanStack Start v1](https://tanstack.com/start) | Framework full-stack (React 19, SSR) |
| [TanStack Router](https://tanstack.com/router) | Enrutamiento basado en archivos |
| [Vite 7](https://vite.dev) | Build tool y servidor de desarrollo |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos con tokens de diseño semánticos |
| [shadcn/ui](https://ui.shadcn.com) + Radix UI | Componentes de interfaz accesibles |
| [lucide-react](https://lucide.dev) | Iconografía |
| TypeScript | Tipado estático |

## Requisitos previos

- **Node.js 20 o superior** (se recomienda instalarlo con [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)):
  ```sh
  nvm install 20
  nvm use 20
  ```
- **npm** (viene con Node) o [bun](https://bun.sh) como alternativa.

## Inicialización en desarrollo

```sh
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd <nombre-del-repositorio>

# 2. Instalar dependencias
npm install        # o: bun install

# 3. Levantar el servidor de desarrollo
npm run dev        # o: bun run dev
```

La aplicación estará disponible en **http://localhost:8080**. Los cambios en el código se reflejan automáticamente (hot reload).

### Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción |
| `npm run build:dev` | Build en modo desarrollo (incluye prerender) |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Análisis estático con ESLint |
| `npm run format` | Formatea el código con Prettier |

## Estructura del proyecto

```
├── public/                  # Archivos estáticos servidos tal cual
├── src/
│   ├── assets/              # Imágenes de marca (logo, hero, fotos de operación)
│   ├── components/          # Componentes reutilizables (shadcn/ui)
│   ├── hooks/               # Hooks de React personalizados
│   ├── lib/                 # Utilidades compartidas
│   ├── routes/
│   │   ├── __root.tsx       # Layout raíz, fuentes, metadatos globales y SEO
│   │   └── index.tsx        # Landing page (secciones principales del sitio)
│   ├── routeTree.gen.ts     # Generado automáticamente — NO editar
│   ├── router.tsx           # Configuración del router
│   ├── start.ts             # Bootstrap de TanStack Start
│   └── styles.css           # Design system: tokens de color, tipografía, animaciones
├── vite.config.ts           # Configuración de Vite
└── package.json
```

## Secciones del sitio

La landing (`src/routes/index.tsx`) incluye:

1. **Hero** — mensaje principal, fotografía del equipo y métricas de la empresa.
2. **Proceso de trabajo** — los 5 pasos del servicio (entender, buscar, evaluar, integrar, seguimiento).
3. **Líneas de negocio** — talento humano, aseo y limpieza, servicios generales y outsourcing.
4. **Perfiles de talento** — familias de especialidades con listado expandible.
5. **Sectores de industria** — carruseles en doble fila con desplazamiento automático (marquee).
6. **Confianza** — testimonios y sellos de cumplimiento.
7. **Contacto** — formulario y datos de contacto.

## Design system

Los colores, gradientes y sombras están definidos como **tokens semánticos** en `src/styles.css` vía `@theme` de Tailwind v4. No se usan colores hardcodeados en los componentes, lo que garantiza consistencia visual.

Paleta de marca:

- Azul marino: `#0A2540`
- Naranja: `#F58220`
- Azul claro: `#BFDDEF`
- Tipografía: **Poppins** (importada en `src/routes/__root.tsx` mediante `<link>`, nunca con `@import` remoto en CSS)

## Despliegue

El proyecto se despliega automáticamente desde [Lovable](https://lovable.dev): cada cambio sincronizado al repositorio queda disponible en la URL de producción. Para desplegar desde el editor, usa el botón **Publish**.

## Desarrollo con Lovable

Este proyecto fue construido con [Lovable](https://lovable.dev). Puedes continuar el desarrollo desde el [editor de Lovable](https://lovable.dev/projects/6a95adb1-6bdc-4831-a604-ccf02a2fe2cd) describiendo los cambios que quieres, o editar el código directamente — todo se sincroniza con el repositorio.
