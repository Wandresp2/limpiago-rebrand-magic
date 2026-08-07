import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users,
  Search,
  ClipboardCheck,
  Handshake,
  BarChart3,
  Code2,
  Factory,
  Calculator,
  Briefcase,
  Megaphone,
  Palette,
  Scale,
  Building2,
  HardHat,
  ShoppingBag,
  Home as HomeIcon,
  Stethoscope,
  GraduationCap,
  Landmark,
  Truck,
  Hotel,
  UtensilsCrossed,
  Rocket,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import logo from "@/assets/tsi-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const stats = [
  { icon: Users, kpi: "+500", label: "Profesionales disponibles" },
  { icon: Building2, kpi: "+100", label: "Empresas confían en nosotros" },
  { icon: Sparkles, kpi: "98%", label: "Satisfacción de clientes" },
  { icon: MapPin, kpi: "Nacional", label: "Cobertura eficiente y oportuna" },
];

const process = [
  {
    n: "01",
    icon: Users,
    title: "Entendemos tus necesidades",
    desc: "Analizamos tu cultura, objetivos y perfil requerido.",
  },
  {
    n: "02",
    icon: Search,
    title: "Buscamos y seleccionamos",
    desc: "Realizamos un filtro riguroso de candidatos.",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "Evaluamos y garantizamos",
    desc: "Verificamos competencias, referencias y habilidades.",
  },
  {
    n: "04",
    icon: Handshake,
    title: "Integramos al talento",
    desc: "Acompañamos el proceso de vinculación completo.",
  },
  {
    n: "05",
    icon: BarChart3,
    title: "Hacemos seguimiento",
    desc: "Medimos resultados y aseguramos continuidad.",
  },
];

const businessLines = [
  {
    icon: Users,
    title: "Talento humano",
    desc: "Reclutamiento, selección y vinculación de personal calificado.",
    bullets: ["Perfiles profesionales y técnicos", "Selección validada", "Garantía de reemplazo"],
  },
  {
    icon: Brush,
    title: "Aseo y limpieza",
    desc: "Servicios de aseo profesional para todo tipo de instalaciones.",
    bullets: ["Aseo corporativo y hospitalario", "Limpieza post-obra", "Insumos y maquinaria"],
  },
  {
    icon: Wrench,
    title: "Servicios generales",
    desc: "Mantenimiento y apoyo operativo para tu infraestructura.",
    bullets: ["Mantenimiento locativo", "Jardinería y zonas comunes", "Personal de apoyo"],
  },
  {
    icon: PackageCheck,
    title: "Outsourcing",
    desc: "Tercerizamos procesos completos y asumimos la administración.",
    bullets: ["Nómina y afiliaciones", "Supervisión en sitio", "Reportes de gestión"],
  },
];

const profileFamilies = [
  {
    icon: Code2,
    title: "Tecnología e ingeniería",
    desc: "Perfiles técnicos para proyectos y operación.",
    roles: ["Ing. de Sistemas", "Ing. Industrial", "Soporte TI"],
  },
  {
    icon: Calculator,
    title: "Administración y finanzas",
    desc: "Gestión contable y administrativa confiable.",
    roles: ["Contaduría", "Administración", "Auxiliares"],
  },
  {
    icon: Megaphone,
    title: "Comercial y marketing",
    desc: "Equipos que impulsan tus ventas y tu marca.",
    roles: ["Marketing", "Diseño gráfico", "Comercial"],
  },
  {
    icon: Scale,
    title: "Legal y cumplimiento",
    desc: "Acompañamiento jurídico y normativo.",
    roles: ["Derecho", "Asesoría jurídica", "SST"],
  },
];

const allProfiles = [
  "Ingeniería de Sistemas",
  "Ingeniería Industrial",
  "Soporte y mesa de ayuda TI",
  "Contaduría Pública",
  "Administración de Empresas",
  "Auxiliares administrativos",
  "Marketing y comunicaciones",
  "Diseño Gráfico",
  "Asesores comerciales",
  "Derecho y asesoría jurídica",
  "Seguridad y Salud en el Trabajo",
  "Talento humano y nómina",
  "Operarios y personal de aseo",
  "Mantenimiento locativo",
  "Logística y almacén",
];

const testimonials = [
  {
    initials: "MG",
    name: "María Gómez",
    role: "Gerente Administrativa, sector salud",
    quote:
      "Cubrieron cinco vacantes críticas en menos de dos semanas. La rotación bajó y el acompañamiento fue constante.",
  },
  {
    initials: "JR",
    name: "Julián Ramírez",
    role: "Jefe de Operaciones, industria",
    quote:
      "El servicio de aseo y mantenimiento se estandarizó por completo. Hoy recibimos reportes mensuales y todo funciona.",
  },
  {
    initials: "CL",
    name: "Carolina López",
    role: "Directora de Talento Humano, retail",
    quote:
      "Delegamos la nómina y las afiliaciones. Nos liberó tiempo para enfocarnos en el negocio sin perder control.",
  },
];

const certifications = [
  { icon: ShieldCheck, title: "Personal verificado", desc: "Referencias y antecedentes validados." },
  { icon: Award, title: "Calidad en procesos", desc: "Protocolos y estándares documentados." },
  { icon: FileCheck, title: "Cumplimiento legal", desc: "Afiliaciones y nómina al día." },
  { icon: Clock, title: "Respuesta 24 horas", desc: "Reemplazos y soporte oportuno." },
];


const industries = [
  { icon: Building2, title: "Empresas privadas" },
  { icon: HardHat, title: "Industria" },
  { icon: ShoppingBag, title: "Centros comerciales" },
  { icon: HomeIcon, title: "Propiedad horizontal" },
  { icon: Stethoscope, title: "Clínicas y hospitales" },
  { icon: GraduationCap, title: "Instituciones educativas" },
  { icon: Landmark, title: "Sector financiero" },
  { icon: Truck, title: "Logística y transporte" },
  { icon: Hotel, title: "Hoteles" },
  { icon: UtensilsCrossed, title: "Restaurantes" },
  { icon: Landmark, title: "Entidades públicas" },
  { icon: Rocket, title: "Startups y tecnológicas" },
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
        <BusinessLines />
        <Process />
        <Specialties />
        <Industries />
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
            href="tel:+573219631010"
            className="hidden items-center gap-2 rounded-full border border-primary/15 px-4 py-2 text-sm font-medium text-primary transition hover:border-accent hover:text-accent lg:inline-flex"
          >
            <Phone className="h-4 w-4" /> 321 963 1010
          </a>
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
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--sky) 55%, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--orange) 45%, transparent)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--orange)]/30 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
            <Sparkles className="h-3.5 w-3.5" /> Talento y servicios integrales
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl md:text-[3.4rem]">
            Encontramos el talento adecuado para que tu empresa sea{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[color:var(--orange)]">más productiva</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded bg-[color:var(--orange)]/20" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary/75">
            Menos tiempo reclutando, menos rotación y una operación que no se detiene: talento
            humano, servicios generales, aseo y outsourcing en un solo aliado.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
            >
              Solicitar talento <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#lineas"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
            >
              Ver nuestros servicios
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src={heroTeam.url}
              alt="Equipo de profesionales de Talento y Servicios Integrales en oficina"
              width={1200}
              height={1408}
              className="h-[420px] w-full object-cover object-top sm:h-[500px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--navy) 75%, transparent) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--orange)] text-accent-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium leading-snug text-primary">
                Personal verificado, afiliado y con acompañamiento permanente.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-primary/10 bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 lg:grid-cols-4 lg:px-8">
          {stats.map(({ icon: Icon, kpi, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--orange)]/10 text-[color:var(--orange)]">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xl font-extrabold text-primary">{kpi}</span>
                <span className="block text-[11px] leading-snug text-muted-foreground">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Líneas de negocio ---------------- */

function BusinessLines() {
  return (
    <section id="lineas" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Nuestras líneas de negocio</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Mucho más que talento humano.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Cuatro líneas complementarias para que tu empresa opere sin interrupciones.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {businessLines.map(({ icon: Icon, title, desc, bullets }) => (
            <article
              key={title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-[color:var(--orange)]/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--sky-soft)] text-primary transition group-hover:bg-[color:var(--orange)] group-hover:text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-4 flex-1 space-y-2 text-xs text-primary/75">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--orange)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange)]"
              >
                Cotizar <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-[color:var(--cream)] lg:grid-cols-2">
          <img
            src={operacion.url}
            alt="Supervisor coordinando al personal operativo de servicios generales"
            loading="lazy"
            width={1200}
            height={912}
            className="h-full max-h-[360px] w-full object-cover"
          />
          <div className="p-8 lg:p-10">
            <h3 className="text-2xl font-extrabold text-primary sm:text-3xl">
              Un aliado que responde en campo, no solo en papel.
            </h3>
            <p className="mt-4 text-sm text-primary/75">
              Supervisión permanente, reemplazos garantizados y reportes de gestión para que siempre
              sepas cómo va tu operación.
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
            >
              Agendar una visita <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Process ---------------- */

function Process() {
  return (
    <section id="nosotros" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Nuestro proceso</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Así encontramos el talento ideal para tu empresa.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Un método probado, 5 pasos, cero improvisación.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <li
              key={p.n}
              className="group relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--sky-soft)] text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--orange)] text-xs font-bold text-accent-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-base font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Specialties ---------------- */

function Specialties() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="perfiles" className="relative overflow-hidden bg-[color:var(--sky-soft)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Perfiles que impulsan tu negocio</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Talento especializado, agrupado por área.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Cuatro grandes familias de perfiles que cubren la mayoría de las necesidades de nuestros
            clientes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profileFamilies.map(({ icon: Icon, title, desc, roles }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--orange)] text-accent-foreground shadow-[var(--shadow-orange)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {roles.map((r) => (
                  <li
                    key={r}
                    className="rounded-full bg-[color:var(--sky-soft)] px-3 py-1 text-[11px] font-medium text-primary/80"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
          >
            {showAll ? "Ocultar perfiles" : "Ver todos los perfiles"}
            <ChevronDown className={`h-4 w-4 transition ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>

        {showAll && (
          <div className="mt-8 rounded-3xl border border-white/60 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {allProfiles.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-primary/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[color:var(--orange)]" />
                  {p}
                </div>
              ))}
            </div>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
            >
              Solicitar un perfil <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Trust: testimonios y certificaciones ---------------- */

function Trust() {
  return (
    <section id="confianza" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Confianza respaldada</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Empresas reales, resultados reales.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <Quote className="h-7 w-7 text-[color:var(--orange)]" />
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

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-[color:var(--cream)] p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[color:var(--orange)]">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-primary">{title}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Industries ---------------- */

function Industries() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Trabajamos con</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Empresas de todos los sectores.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Diseñamos soluciones a la medida sin importar la industria.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {industries.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-[color:var(--orange)]/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--sky-soft)] text-primary transition group-hover:bg-[color:var(--orange)] group-hover:text-accent-foreground">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="text-sm font-semibold leading-snug text-primary">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Clients (auto-slide marquee) ---------------- */

function Clients() {
  const track = [...clients, ...clients];
  return (
    <section id="clientes" className="relative overflow-hidden border-y border-border bg-[color:var(--cream)] py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Empresas que confían en nosotros</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold text-primary sm:text-3xl">
            +100 empresas han fortalecido su operación con nuestro talento.
          </h2>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--cream)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--cream)] to-transparent"
        />
        <div className="marquee-track flex w-max items-center gap-14 px-6">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-primary/60 transition hover:text-primary sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA Banner ---------------- */

function CtaBanner() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:p-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="brand-swoosh opacity-70" />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                ¿Buscas personal confiable y listo para trabajar?
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                Selecciónamos el talento adecuado para que tu empresa continúe creciendo sin
                preocuparte por los procesos de reclutamiento.
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

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <section id="contacto" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>Contáctanos</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Cuéntanos qué necesitas y te enviamos una propuesta a medida.
          </h2>
          <p className="mt-5 max-w-md text-primary/75">
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
            <Field label="Teléfono" name="telefono" placeholder="Celular" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">
                ¿Qué necesitas?
              </label>
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos brevemente el perfil o servicio que buscas"
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
            Al enviar aceptas ser contactado por Talento y Servicios Integrales.
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
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-base font-medium">{label}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 text-primary transition hover:text-[color:var(--orange)]">
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
            Soluciones que impulsan tu operación. Conectamos empresas con el talento y los servicios
            profesionales que necesitan para crecer.
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
      {children}
    </span>
  );
}
