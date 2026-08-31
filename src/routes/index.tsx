import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users,
  Search,
  ClipboardCheck,
  Handshake,
  BarChart3,
  Network,
  Building2,
  Package,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Check,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Leaf,
  ChevronDown,
  Quote,
} from "lucide-react";

import logo from "@/assets/tsi-logo.png.asset.json";
import heroTeam from "@/assets/hero-tsi.jpg.asset.json";
import operacion from "@/assets/operacion.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "TSI | Talento y servicios integrales para tu operación" },
      {
        name: "description",
        content:
          "Aseo, mantenimiento, talento humano, tecnología y suministros. Soluciones integrales que mantienen tu operación funcionando en Colombia.",
      },
      { property: "og:title", content: "TSI | Soluciones que impulsan tu operación" },
      {
        property: "og:description",
        content:
          "Operación y mantenimiento, gestión de talento, soluciones tecnológicas y suministros para empresas de todos los sectores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sectores", href: "#sectores" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const pillars = [
  { icon: ShieldCheck, title: "Confianza y transparencia" },
  { icon: BadgeCheck, title: "Calidad garantizada" },
  { icon: Clock, title: "Respuesta inmediata" },
  { icon: Leaf, title: "Compromiso sostenible" },
];

const stats = [
  { kpi: "+500", label: "Personas en operación" },
  { kpi: "+100", label: "Empresas atendidas" },
  { kpi: "98%", label: "Satisfacción" },
  { kpi: "24 h", label: "Tiempo de respuesta" },
];

type Solution = {
  icon: typeof Users;
  eyebrow: string;
  title: string;
  desc: string;
  main: string[];
  all: string[];
  featured?: boolean;
};

const solutions: Solution[] = [
  {
    icon: Building2,
    eyebrow: "Línea principal",
    title: "Operación y mantenimiento",
    desc: "Mantenemos limpios, seguros y operativos tus espacios, todos los días.",
    main: ["Aseo empresarial y de oficinas", "Aseo en PH y centros comerciales", "Mantenimiento locativo"],
    all: [
      "Aseo residencial, empresarial y de oficinas",
      "Propiedad horizontal y centros comerciales",
      "Limpieza post-obra",
      "Desinfección de áreas",
      "Tratamiento y brillado de pisos",
      "Lavado de vidrios y fachadas",
      "Lavado de tanques",
      "Aseo de parqueaderos",
      "Mantenimiento locativo",
      "Jardinería y zonas verdes",
      "Manejo de residuos",
      "Toderos, portería y recepción",
    ],
    featured: true,
  },
  {
    icon: Users,
    eyebrow: "Talento",
    title: "Gestión de talento",
    desc: "Personal calificado y especializado, profesional y operativo, listo para sumarse.",
    main: ["Selección y administración de personal", "Personal operativo y de servicios", "Capacitación y desarrollo"],
    all: [
      "Selección y administración de personal",
      "Perfiles profesionales y técnicos",
      "Personal de aseo y servicios generales",
      "Toderos y mantenimiento",
      "Jardinería",
      "Portería y recepción",
      "Nómina, afiliaciones y cumplimiento",
      "Capacitación y desarrollo",
      "Supervisión y seguimiento en sitio",
    ],
  },
  {
    icon: Package,
    eyebrow: "Abastecimiento",
    title: "Suministros y abastecimiento",
    desc: "Insumos y materiales oportunos para que la operación nunca se detenga.",
    main: ["Insumos y productos de aseo", "Dotación y elementos de protección", "Gestión de inventarios"],
    all: [
      "Insumos y productos de aseo",
      "Materiales para la operación",
      "Dotación y elementos de protección",
      "Maquinaria y equipos de limpieza",
      "Gestión de inventarios",
      "Abastecimiento programado",
    ],
  },
  {
    icon: Network,
    eyebrow: "Tecnología",
    title: "Soluciones tecnológicas",
    desc: "Apoyo tecnológico para conectar, proteger y optimizar tus procesos.",
    main: ["Soporte técnico y redes", "Bases de datos y desarrollo", "Ciberseguridad"],
    all: [
      "Soporte técnico y mesa de ayuda",
      "Redes y conectividad",
      "Desarrollo de software",
      "Bases de datos",
      "Ciberseguridad",
      "Transformación digital",
    ],
  },
];

const process = [
  { icon: Search, title: "Entendemos", desc: "Analizamos tu operación y lo que realmente necesitas." },
  { icon: ClipboardCheck, title: "Diseñamos", desc: "Armamos una solución a la medida, con alcance claro." },
  { icon: Users, title: "Seleccionamos", desc: "Verificamos personal, competencias y antecedentes." },
  { icon: Handshake, title: "Implementamos", desc: "Ponemos en marcha con supervisión desde el día uno." },
  { icon: BarChart3, title: "Acompañamos", desc: "Medimos, reportamos y ajustamos de forma continua." },
];

const sectors = [
  "Industria",
  "Oficinas y empresas",
  "Propiedad horizontal",
  "Centros comerciales",
  "Hoteles",
  "Restaurantes",
  "Clínicas y salud",
  "Educación",
  "Sector financiero",
  "Logística y transporte",
  "Entidades públicas",
  "Startups y tecnología",
];

const testimonials = [
  {
    initials: "MG",
    name: "María Gómez",
    role: "Gerente Administrativa, salud",
    quote: "El aseo y la desinfección se estandarizaron por completo. Hoy todo funciona sin que tengamos que estar encima.",
  },
  {
    initials: "JR",
    name: "Julián Ramírez",
    role: "Jefe de Operaciones, industria",
    quote: "Supervisión real en campo y reemplazos el mismo día. Eso marcó la diferencia frente a otros proveedores.",
  },
  {
    initials: "CL",
    name: "Carolina López",
    role: "Directora de Talento, retail",
    quote: "Delegamos personal operativo y nómina. Nos liberó tiempo sin perder control de la operación.",
  },
];

const clients = [
  "Colsubsidio",
  "SURA",
  "Compensar",
  "Davivienda",
  "Bavaria",
  "Grupo Éxito",
  "Bancolombia",
  "Claro",
  "EPM",
  "Postobón",
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Operacion />
        <Process />
        <Sectors />
        <Trust />
        <Clients />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <img src={logo.url} alt="Talento y Servicios Integrales" className="h-11 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-primary/80 transition hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110 sm:inline-flex"
          >
            Solicitar cotización <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Abrir menú"
            className="rounded-md p-2 text-primary md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-primary/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              Solicitar cotización <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[color:var(--cream)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-[560px] w-[560px] rounded-full opacity-50 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--sky) 55%, transparent)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Eyebrow>Soluciones que impulsan tu operación</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] text-primary sm:text-5xl md:text-[3.3rem]">
            Talento y servicios integrales para que tu operación{" "}
            <span className="text-[color:var(--orange)]">nunca se detenga</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary/70">
            Aseo y mantenimiento, personal calificado, suministros y tecnología. Un solo aliado que
            responde con eficiencia, seguridad y calidad.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
            >
              Solicitar cotización <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#soluciones"
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
            >
              Ver soluciones
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-primary">{s.kpi}</div>
                <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-x-6 -top-6 bottom-10 rounded-[3rem] rounded-bl-[8rem]"
            style={{ background: "color-mix(in oklab, var(--orange) 12%, transparent)" }}
          />
          <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[6rem] shadow-[var(--shadow-soft)]">
            <img
              src={heroTeam.url}
              alt="Equipo uniformado de Talento y Servicios Integrales en una oficina moderna"
              width={1200}
              height={1200}
              className="h-[440px] w-full object-cover object-top sm:h-[520px]"
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-primary/10 bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 lg:grid-cols-4 lg:px-8">
          {pillars.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 text-[color:var(--orange)]" strokeWidth={1.6} />
              <span className="text-xs font-semibold leading-snug text-primary">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Soluciones ---------------- */

function Solutions() {
  return (
    <section id="soluciones" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl md:text-[2.75rem]">
            Nuestras <span className="text-[color:var(--orange)]">soluciones integrales</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Cuatro líneas que se complementan. Empezamos por lo que hoy necesitas y crecemos
            contigo.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((s) => (
            <SolutionCard key={s.title} solution={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  const [open, setOpen] = useState(false);
  const { icon: Icon, eyebrow, title, desc, main, all, featured } = solution;
  return (
    <article
      className={`flex flex-col rounded-3xl border bg-card p-7 transition hover:-translate-y-1 ${
        featured
          ? "border-[color:var(--orange)]/35 shadow-[var(--shadow-soft)]"
          : "border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`grid h-12 w-12 place-items-center rounded-full ${
            featured
              ? "bg-[color:var(--orange)] text-accent-foreground"
              : "bg-[color:var(--sky-soft)] text-primary"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
            featured ? "text-[color:var(--orange)]" : "text-muted-foreground"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold leading-snug text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>

      <ul className="mt-5 space-y-2.5 text-[13px] text-primary/80">
        {main.map((m) => (
          <li key={m} className="flex items-start gap-2.5">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--orange)]"
              strokeWidth={2.4}
            />
            {m}
          </li>
        ))}
      </ul>

      {open && (
        <ul className="mt-4 space-y-2 border-t border-border pt-4 text-[13px] text-primary/70">
          {all
            .filter((a) => !main.includes(a))
            .map((a) => (
              <li key={a} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--sky)]" />
                {a}
              </li>
            ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--orange)] transition hover:brightness-90"
        >
          {open ? "Ver menos" : "Ver todos los servicios"}
          <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
    </article>
  );
}

/* ---------------- Operación destacada ---------------- */

function Operacion() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-0 overflow-hidden rounded-[2rem] border border-border bg-[color:var(--cream)] lg:grid-cols-2">
          <img
            src={operacion.url}
            alt="Supervisor coordinando al personal operativo de servicios generales"
            loading="lazy"
            width={1200}
            height={912}
            className="h-full max-h-[380px] w-full object-cover"
          />
          <div className="p-8 lg:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
              Operación y mantenimiento
            </span>
            <h3 className="mt-3 text-2xl font-extrabold leading-snug text-primary sm:text-3xl">
              Nuestra línea principal, respaldada en campo.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-primary/70">
              Supervisión permanente, protocolos documentados y reemplazos garantizados para que tus
              instalaciones estén siempre impecables y funcionando.
            </p>
            <a
              href="#contacto"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
            >
              Agendar una visita <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Proceso ---------------- */

function Process() {
  return (
    <section id="proceso" className="relative bg-[color:var(--cream)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Cómo <span className="text-[color:var(--orange)]">trabajamos</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Un método claro en cinco pasos, sin improvisación.
          </p>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[color:var(--sky)] lg:block"
          />
          {process.map((p, i) => (
            <li key={p.title} className="relative text-center">
              <span className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border border-[color:var(--sky)] bg-white text-primary">
                <p.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div className="mt-4 text-[11px] font-bold tracking-[0.2em] text-[color:var(--orange)]">
                0{i + 1}
              </div>
              <h3 className="mt-1 text-base font-bold text-primary">{p.title}</h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Sectores (dinámico) ---------------- */

function Sectors() {
  const rowA = sectors.slice(0, 6);
  const rowB = sectors.slice(6);
  return (
    <section id="sectores" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Acompañamos a empresas de{" "}
            <span className="text-[color:var(--orange)]">todos los sectores</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Adaptamos el equipo, los protocolos y los insumos al ritmo de cada industria.
          </p>
        </div>
      </div>

      <div className="relative mt-14 space-y-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        />
        <SectorRow items={rowA} />
        <SectorRow items={rowB} reverse />
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 text-center lg:px-8">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange)]"
        >
          ¿No ves tu sector? Hablemos <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function SectorRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const track = [...items, ...items, ...items, ...items];
  return (
    <div
      className={`flex w-max items-center gap-4 px-4 ${
        reverse ? "marquee-track-reverse" : "marquee-track"
      }`}
    >
      {track.map((name, i) => {
        const variant = i % 3;
        const style =
          variant === 0
            ? "bg-[color:var(--navy)] text-white"
            : variant === 1
              ? "bg-[color:var(--sky-soft)] text-primary"
              : "border border-[color:var(--orange)]/40 bg-white text-primary";
        return (
          <span
            key={`${name}-${i}`}
            className={`whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-card)] ${style}`}
          >
            {name}
          </span>
        );
      })}
    </div>
  );
}

/* ---------------- Confianza ---------------- */

function Trust() {
  return (
    <section id="confianza" className="relative bg-[color:var(--cream)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Lo que dicen <span className="text-[color:var(--orange)]">nuestros clientes</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <Quote className="h-6 w-6 text-[color:var(--orange)]" strokeWidth={1.6} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--sky-soft)] text-sm font-bold text-primary">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-primary">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Clientes ---------------- */

function Clients() {
  const track = [...clients, ...clients];
  return (
    <section id="clientes" className="relative overflow-hidden border-y border-border py-16">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Empresas que confían en nosotros
        </span>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        />
        <div className="marquee-track flex w-max items-center gap-14 px-6">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-primary/45 transition hover:text-primary sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CtaBanner() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:p-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Diseñemos la solución que tu operación necesita.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Cuéntanos qué necesitas y armamos una propuesta a la medida, con alcance, equipo y
                tiempos claros.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
              >
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/573219631010"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hablar con un asesor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contacto ---------------- */

function Contact() {
  return (
    <section id="contacto" className="relative pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>Contáctanos</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
            Cuéntanos qué necesitas y te enviamos una propuesta a medida.
          </h2>
          <p className="mt-5 max-w-md text-primary/70">
            Respondemos en menos de 24 horas hábiles. Atendemos empresas de todos los sectores en
            Colombia.
          </p>

          <ul className="mt-10 space-y-4">
            <ContactRow icon={Phone} label="321 963 1010" href="tel:+573219631010" />
            <ContactRow
              icon={Mail}
              label="comercial@tsintegrales.com"
              href="mailto:comercial@tsintegrales.com"
            />
            <ContactRow icon={MapPin} label="Bogotá, Colombia" />
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const body = `Hola TSI, soy ${data.get("nombre")}. Necesito: ${data.get("mensaje")}`;
            window.location.href = `mailto:comercial@tsintegrales.com?subject=Solicitud TSI&body=${encodeURIComponent(body)}`;
          }}
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="nombre" placeholder="Tu nombre" required />
            <Field label="Empresa" name="empresa" placeholder="Nombre de tu empresa" />
            <Field
              label="Correo"
              name="correo"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="sm:col-span-2"
              required
            />
            <Field
              label="Teléfono"
              name="telefono"
              placeholder="Celular"
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">
                ¿Qué necesitas?
              </label>
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos brevemente el servicio que buscas"
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
          >
            Enviar solicitud <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Al enviar aceptas ser contactado por nuestro equipo comercial.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Phone;
  label: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color:var(--orange)] text-accent-foreground">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <span className="text-base font-medium">{label}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 text-primary transition hover:text-[color:var(--orange)]"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4 text-primary">{inner}</div>
      )}
    </li>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--navy-deep)] text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img
            src={logo.url}
            alt="Talento y Servicios Integrales"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-md text-sm text-white/60">
            Soluciones que impulsan tu operación. Aseo y mantenimiento, talento humano, tecnología y
            suministros para empresas de todos los sectores.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Navegación</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-[color:var(--orange-soft)]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Contacto</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>321 963 1010</li>
            <li>comercial@tsintegrales.com</li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
          <span>
            © {new Date().getFullYear()} Talento y Servicios Integrales S.A.S. Todos los derechos
            reservados.
          </span>
          <span>Soluciones que impulsan tu operación.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--orange)]/30 bg-[color:var(--orange)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}
