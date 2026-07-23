import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users,
  Search,
  ClipboardCheck,
  Handshake,
  BarChart3,
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
  Sparkles,
  Building,
} from "lucide-react";

import logo from "@/assets/tsi-logo.png.asset.json";
import heroImg from "@/assets/tsi-hero.jpg";
import processImg from "@/assets/process-image.jpg";
import industriesBand from "@/assets/industries-band.jpg";
import specSistemas from "@/assets/spec-sistemas.jpg";
import specIndustrial from "@/assets/spec-industrial.jpg";
import specContaduria from "@/assets/spec-contaduria.jpg";
import specAdmin from "@/assets/spec-admin.jpg";
import specMarketing from "@/assets/spec-marketing.jpg";
import specDiseno from "@/assets/spec-diseno.jpg";
import specDerecho from "@/assets/spec-derecho.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proceso", href: "#nosotros" },
  { label: "Especialistas", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Contacto", href: "#contacto" },
];

const stats = [
  { kpi: "+500", label: "Profesionales disponibles" },
  { kpi: "+100", label: "Empresas confían en nosotros" },
  { kpi: "98%", label: "Satisfacción de clientes" },
  { kpi: "24h", label: "Respuesta promedio" },
];

const process = [
  {
    icon: Users,
    title: "Entendemos tus necesidades",
    desc: "Analizamos tu cultura, objetivos y el perfil exacto que requieres.",
  },
  {
    icon: Search,
    title: "Buscamos y seleccionamos",
    desc: "Filtro riguroso dentro de nuestra red de más de 500 profesionales.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluamos y garantizamos",
    desc: "Verificamos competencias, referencias y habilidades técnicas.",
  },
  {
    icon: Handshake,
    title: "Integramos al talento",
    desc: "Acompañamos el proceso de vinculación de principio a fin.",
  },
  {
    icon: BarChart3,
    title: "Hacemos seguimiento",
    desc: "Medimos resultados y aseguramos continuidad a largo plazo.",
  },
];

const specialties = [
  { title: "Ingeniería de Sistemas", img: specSistemas, tone: "sky" },
  { title: "Ingeniería Industrial", img: specIndustrial, tone: "orange" },
  { title: "Contaduría Pública", img: specContaduria, tone: "sky" },
  { title: "Administración de Empresas", img: specAdmin, tone: "orange" },
  { title: "Marketing", img: specMarketing, tone: "sky" },
  { title: "Diseño Gráfico", img: specDiseno, tone: "orange" },
  { title: "Derecho y Asesoría Jurídica", img: specDerecho, tone: "sky" },
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
  { icon: Building, title: "Entidades públicas" },
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
        <Process />
        <Specialties />
        <Industries />
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
        className="pointer-events-none absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full opacity-50 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--sky) 55%, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl"
        style={{ background: "color-mix(in oklab, var(--orange) 45%, transparent)" }}
      />
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-y-0 right-1/2 hidden w-1/2 opacity-40 md:block"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--orange)]/30 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]">
            <Sparkles className="h-3.5 w-3.5" /> Gestión de talento
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl md:text-6xl">
            Conectamos tu empresa con el{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[color:var(--orange)]">talento ideal</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded bg-[color:var(--orange)]/20" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary/75">
            Profesionales calificados, procesos ágiles y cobertura nacional para fortalecer tu
            operación desde el primer día.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
            >
              Solicitar talento <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/573219631010"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
            >
              Hablar con un asesor
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-primary sm:text-3xl">{s.kpi}</div>
                <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo composition */}
        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 blob-1 bg-gradient-to-br from-[color:var(--orange)]/30 via-[color:var(--sky)]/30 to-transparent blur-2xl"
          />
          <div className="blob-1 relative overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-white/60">
            <img
              src={heroImg}
              alt="Equipo profesional colaborando"
              className="h-[520px] w-full object-cover"
              width={1400}
              height={1600}
            />
          </div>

          {/* floating chips */}
          <div className="float-slow absolute -left-6 top-10 hidden rounded-2xl bg-white p-3 pr-4 shadow-[var(--shadow-card)] sm:flex sm:items-center sm:gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--orange)]/15 text-[color:var(--orange)]">
              <Users className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-primary">+500 talentos</div>
              <div className="text-[11px] text-muted-foreground">Listos para tu empresa</div>
            </div>
          </div>
          <div className="float-slow absolute -bottom-4 -right-2 hidden rounded-2xl bg-primary p-3 pr-4 text-white shadow-[var(--shadow-soft)] sm:flex sm:items-center sm:gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[color:var(--orange)]">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-bold">98% satisfacción</div>
              <div className="text-[11px] text-white/70">Clientes recurrentes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Left: image */}
        <div className="relative lg:sticky lg:top-28">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 blob-2 bg-[color:var(--sky)]/40 blur-2xl"
          />
          <div className="blob-2 relative overflow-hidden shadow-[var(--shadow-soft)]">
            <img
              src={processImg}
              alt="Selección de talento"
              className="h-[520px] w-full object-cover"
              loading="lazy"
              width={1200}
              height={1400}
            />
          </div>
          <div className="absolute -bottom-4 left-6 rounded-2xl bg-white px-5 py-4 shadow-[var(--shadow-card)]">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--orange)]">
              Método probado
            </div>
            <div className="mt-1 text-lg font-extrabold text-primary">5 pasos, cero improvisación</div>
          </div>
        </div>

        {/* Right: vertical timeline */}
        <div>
          <Eyebrow>Nuestro proceso</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Así encontramos el talento ideal para tu empresa.
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Un flujo claro y humano que acompaña cada etapa: desde entender qué necesitas hasta medir
            los resultados una vez el profesional está integrado.
          </p>

          <ol className="relative mt-12 space-y-8 border-l-2 border-dashed border-[color:var(--orange)]/40 pl-8">
            {process.map((p, i) => (
              <li key={p.title} className="relative">
                <span className="absolute -left-[43px] top-0 grid h-10 w-10 place-items-center rounded-full bg-[color:var(--orange)] text-sm font-bold text-accent-foreground shadow-[var(--shadow-orange)]">
                  {i + 1}
                </span>
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[color:var(--sky-soft)] text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Empezar mi proceso <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Specialties ---------------- */

function Specialties() {
  return (
    <section id="servicios" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-sky)" }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Especialistas a tu disposición</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Talento especializado para cada necesidad.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Profesionales verificados en las áreas que impulsan tu operación.
          </p>
        </div>

        {/* Organic masonry-ish layout */}
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {specialties.map((s, i) => (
            <SpecialtyCard key={s.title} {...s} index={i} />
          ))}
          {/* CTA card fills the 8th cell */}
          <a
            href="#contacto"
            className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] bg-primary p-6 text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--orange-soft)]">
                <Sparkles className="h-3 w-3" /> A la medida
              </span>
              <h3 className="mt-4 text-lg font-bold leading-tight">
                ¿Necesitas otro perfil?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Tenemos una red mucho más amplia. Cuéntanos qué buscas.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--orange-soft)]">
              Solicitar perfil <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
            <div
              aria-hidden
              className="absolute -bottom-16 -right-16 h-44 w-44 blob-3 bg-[color:var(--orange)]/30 blur-2xl"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function SpecialtyCard({
  title,
  img,
  index,
}: {
  title: string;
  img: string;
  tone: string;
  index: number;
}) {
  // Alternate blob shape + slight vertical offset for organic rhythm
  const shape = index % 3 === 0 ? "blob-1" : index % 3 === 1 ? "blob-2" : "blob-3";
  const offset = index % 2 === 0 ? "md:mt-0" : "md:mt-10";
  return (
    <article
      className={`group relative flex flex-col items-center text-center ${offset}`}
    >
      <div className="relative w-full">
        <div
          aria-hidden
          className={`absolute -inset-2 -z-10 ${shape} bg-gradient-to-br from-[color:var(--orange)]/25 to-[color:var(--sky)]/40 blur-xl transition group-hover:opacity-80`}
        />
        <div
          className={`${shape} relative overflow-hidden ring-1 ring-white/60 shadow-[var(--shadow-card)] transition group-hover:-translate-y-1`}
        >
          <img
            src={img}
            alt={title}
            className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="mt-5 max-w-[16ch] text-sm font-bold leading-snug text-primary sm:text-base">
        {title}
      </h3>
      <span className="mt-1 h-1 w-8 rounded-full bg-[color:var(--orange)]" />
    </article>
  );
}

/* ---------------- Industries ---------------- */

function Industries() {
  return (
    <section id="industrias" className="relative overflow-hidden py-24">
      {/* Image band as background */}
      <div className="absolute inset-x-0 top-0 -z-10 h-72">
        <img
          src={industriesBand}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--navy) 70%, transparent) 0%, var(--background) 90%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <Eyebrow tone="light">Trabajamos con</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Empresas de todos los sectores.
          </h2>
          <p className="mt-4 text-base text-white/80">
            Diseñamos soluciones a la medida sin importar la industria.
          </p>
        </div>

        {/* Pill chips — no boxy grid */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
          {industries.map(({ icon: Icon, title }, i) => (
            <span
              key={title}
              className="group inline-flex items-center gap-2.5 rounded-full border border-primary/10 bg-white/95 px-4 py-2.5 text-sm font-semibold text-primary shadow-[var(--shadow-card)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:var(--orange)]/40 hover:text-[color:var(--orange)] sm:px-5 sm:py-3"
              style={{ transform: `translateY(${(i % 3) * 4}px)` }}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--sky-soft)] text-primary transition group-hover:bg-[color:var(--orange)] group-hover:text-accent-foreground">
                <Icon className="h-3.5 w-3.5" />
              </span>
              {title}
            </span>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
          >
            ¿Tu sector no está en la lista? <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Clients ---------------- */

function Clients() {
  const track = [...clients, ...clients];
  return (
    <section
      id="clientes"
      className="relative overflow-hidden border-y border-border bg-[color:var(--cream)] py-16"
    >
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
                Seleccionamos el talento adecuado para que tu empresa continúe creciendo sin
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

function Eyebrow({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "light";
}) {
  const light = tone === "light";
  return (
    <span
      className={
        light
          ? "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur"
          : "inline-flex items-center gap-2 rounded-full border border-[color:var(--orange)]/30 bg-[color:var(--orange)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--orange)]"
      }
    >
      {children}
    </span>
  );
}
