import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Building2,
  Home as HomeIcon,
  Hammer,
  Briefcase,
  ShieldCheck,
  Eye,
  Zap,
  Scale,
  Layers,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
  Leaf,
  BarChart3,
  Menu,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import serviceOffice from "@/assets/service-office.jpg.asset.json";
import serviceHome from "@/assets/service-home.jpg.asset.json";
import servicePostobra from "@/assets/service-postobra.jpg.asset.json";
import serviceEmpresa from "@/assets/service-empresa.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    title: "Limpieza para Hogares",
    desc: "Mantenimiento regular, limpieza profunda y atención por horas, días o meses.",
    img: serviceHome.url,
    icon: HomeIcon,
    tag: "Hogares",
  },
  {
    title: "Oficinas y Coworks",
    desc: "Espacios de trabajo impecables con horarios flexibles adaptados a tu operación.",
    img: serviceOffice.url,
    icon: Building2,
    tag: "Oficinas",
  },
  {
    title: "Aseo Post-Obra y Especializado",
    desc: "Desinfección, vidrios, fachadas, pisos, lavado de muebles y alfombras.",
    img: servicePostobra.url,
    icon: Hammer,
    tag: "Especializado",
  },
  {
    title: "Empresas, PH y Centros Comerciales",
    desc: "Gestión integral, talento outsourcing y manejo de residuos para copropiedades.",
    img: serviceEmpresa.url,
    icon: Briefcase,
    tag: "Empresas",
  },
];

const process = [
  {
    n: "01",
    title: "Diagnóstico de necesidades",
    desc: "Evaluamos tu espacio y diseñamos un esquema operativo personalizado.",
    color: "sky",
  },
  {
    n: "02",
    title: "Programación y asignación",
    desc: "Asignamos el personal idóneo y definimos cronogramas y protocolos a medida.",
    color: "orange",
  },
  {
    n: "03",
    title: "Ejecución y protocolos",
    desc: "Estándares técnicos, imagen profesional y normas de bioseguridad.",
    color: "sky",
  },
  {
    n: "04",
    title: "Seguimiento y control",
    desc: "Supervisión constante, reportes periódicos y canal directo para novedades.",
    color: "orange",
  },
];

const reasons = [
  { icon: UserCheck, title: "Talento humano verificado", desc: "Personal capacitado con filtros de seguridad." },
  { icon: Eye, title: "Supervisión activa", desc: "Monitoreo constante y estándares impecables." },
  { icon: Zap, title: "Respuesta inmediata", desc: "Estructura diseñada para actuar con rapidez." },
  { icon: Scale, title: "Cumplimiento legal", desc: "Normativas laborales, bioseguridad y ambientales." },
  { icon: Layers, title: "Cobertura integral", desc: "Adaptados a cualquier espacio y necesidad." },
  { icon: ShieldCheck, title: "Imagen profesional", desc: "Personal uniformado que representa tu marca." },
];

const values = [
  { icon: ShieldCheck, title: "Confianza", desc: "Procesos seguros y certificados." },
  { icon: Leaf, title: "Compromiso", desc: "Con el bienestar y el entorno." },
  { icon: Check, title: "Calidad", desc: "Estándares altos en cada servicio." },
  { icon: BarChart3, title: "Eficiencia", desc: "Soluciones que optimizan tu operación." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ValuesStrip />
        <Services />
        <Process />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo.url} alt="LimpiaGo+" className="h-9 w-auto" />
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
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
          >
            Solicitar cotización <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Abrir menú"
            className="rounded-md p-2 text-primary md:hidden"
            onClick={(e) => {
              const menu = (e.currentTarget.nextElementSibling as HTMLElement) ?? null;
              if (menu) menu.classList.toggle("hidden");
            }}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="absolute left-0 right-0 top-full hidden border-b border-border bg-background px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm font-medium text-primary/80">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="brand-swoosh" />
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--orange)]" />
            Espacios que inspiran
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Aseo, mantenimiento y{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[color:var(--orange)]">talento humano</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded bg-[color:var(--orange)]/25" />
            </span>{" "}
            a la medida de tu operación.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Somos LimpiaGo+, tu aliado estratégico en Bogotá para hogares, oficinas y empresas.
            Respuesta inmediata, personal certificado y procesos que transforman tus espacios en
            ventaja competitiva.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-orange)] transition hover:brightness-110"
            >
              Solicitar cotización <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            <Stat kpi="+500" label="Espacios transformados" />
            <Stat kpi="7/7" label="Días de operación" />
            <Stat kpi="10+" label="Años de experiencia" />
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img
              src={hero.url}
              alt="Equipo profesional LimpiaGo+ en un lobby corporativo"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          {/* Floating orange badge, echoes brochure */}
          <div className="absolute -left-4 -top-4 hidden rounded-full bg-accent px-5 py-4 text-center text-accent-foreground shadow-[var(--shadow-orange)] sm:block">
            <div className="text-2xl font-extrabold leading-none">+500</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider">
              Espacios<br />transformados
            </div>
          </div>

          {/* Floating chip */}
          <div className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-card)]">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--sky-soft)]">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-primary">Talento verificado</div>
              <div className="text-[11px] text-muted-foreground">Filtros de seguridad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <dt className="text-3xl font-extrabold text-[color:var(--orange)]">{kpi}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">{label}</dd>
    </div>
  );
}

/* ---------------- Values strip ---------------- */

function ValuesStrip() {
  return (
    <section className="border-b border-border bg-[color:var(--cream)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 lg:px-8">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary">{title}</div>
              <div className="text-xs text-muted-foreground">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionEyebrow>Nuestros servicios</SectionEyebrow>
        <div className="mt-3 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Soluciones integrales para cada espacio.
          </h2>
          <p className="max-w-md text-base text-muted-foreground">
            Incluye suministro de insumos y maquinaria especializada. Diseñamos el plan a la
            medida de tu operación.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 rounded-3xl border border-border bg-[color:var(--sky-soft)] p-6 sm:grid-cols-2 md:grid-cols-3 lg:p-8">
          {[
            "Limpieza Flexible por horas / días / meses",
            "Aseo Post-Obra y Desinfección",
            "Limpieza de Vidrios, Fachadas y Pisos",
            "Lavado de Muebles y Alfombras",
            "Mantenimiento Locativo Básico",
            "Lavado de Tanques y Parqueaderos",
            "Jardinería y Suministro de Insumos",
            "Clasificación, Reciclaje y Residuos",
            "Portería, Recepción y Todero",
          ].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm text-primary">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--orange)]" /> {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  img,
  icon: Icon,
  tag,
}: {
  title: string;
  desc: string;
  img: string;
  icon: typeof HomeIcon;
  tag: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className="relative h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
          {tag}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--sky-soft)] text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        </div>
        <a
          href="#contacto"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--orange)] transition hover:gap-2.5"
        >
          Cotizar servicio <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div className="brand-swoosh opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow tone="light">Nuestro proceso</SectionEyebrow>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Cuatro pasos para transformar tus espacios.
            </h2>
          </div>
          <p className="max-w-md text-white/70">
            Un método probado que garantiza estándares técnicos, imagen profesional y trazabilidad
            de principio a fin.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li
              key={p.n}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  p.color === "orange"
                    ? "bg-[color:var(--orange)] text-accent-foreground"
                    : "bg-[color:var(--sky)] text-primary"
                }`}
              >
                Paso {p.n}
              </div>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              {i < process.length - 1 && (
                <ArrowRight className="absolute right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/30 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */

function WhyUs() {
  return (
    <section id="nosotros" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>¿Por qué elegirnos?</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Un aliado que responde con rapidez y estándares impecables.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--orange)] text-accent-foreground shadow-[var(--shadow-orange)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[color:var(--sky-soft)] opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--sky-soft)] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionEyebrow>Quiénes somos</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl">
            Somos LimpiaGo+
          </h2>
          <p className="mt-5 text-lg text-primary/80">
            Tu aliado estratégico en soluciones integrales de aseo, mantenimiento y gestión de
            talento humano en Bogotá.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/10 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--orange)]">
                Misión
              </div>
              <p className="mt-2 text-sm text-primary/80">
                Transformar el cuidado de tus espacios en una ventaja competitiva a la medida.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--orange)]">
                Visión
              </div>
              <p className="mt-2 text-sm text-primary/80">
                Ser el aliado líder en la región, reconocidos por nuestra respuesta inmediata y
                talento certificado.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={hero.url}
            alt="Equipo LimpiaGo+"
            loading="lazy"
            width={1600}
            height={1200}
            className="relative z-10 h-full w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-[2rem] border-8 border-[color:var(--orange)] lg:block" />
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-[color:var(--orange)]/20 lg:block" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:p-16" style={{ background: "var(--gradient-hero)" }}>
          <div className="brand-swoosh opacity-70" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
                ¿Hablamos?
              </span>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Cuéntanos de tu espacio y te enviamos una propuesta a medida.
              </h2>
              <p className="mt-5 max-w-md text-white/75">
                Atendemos hogares, oficinas y empresas en Bogotá los 7 días de la semana. Respuesta
                en menos de 24 horas.
              </p>

              <ul className="mt-8 space-y-4">
                <ContactRow icon={Phone} label="321 963 1010" href="tel:+573219631010" />
                <ContactRow
                  icon={Mail}
                  label="limpiago.contacto@gmail.com"
                  href="mailto:limpiago.contacto@gmail.com"
                />
                <ContactRow icon={MapPin} label="Bogotá, Colombia" />
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Hola LimpiaGo+, soy ${data.get("nombre")}. Necesito: ${data.get("mensaje")}`;
                window.location.href = `mailto:limpiago.contacto@gmail.com?subject=Cotización LimpiaGo+&body=${encodeURIComponent(body)}`;
              }}
              className="rounded-3xl bg-white/95 p-6 shadow-[var(--shadow-card)] backdrop-blur sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" placeholder="Tu nombre" required />
                <Field label="Teléfono" name="telefono" placeholder="Celular" />
                <Field
                  label="Correo"
                  name="correo"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="sm:col-span-2"
                  required
                />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Tipo de espacio
                  </label>
                  <select
                    name="tipo"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                  >
                    <option>Hogar</option>
                    <option>Oficina</option>
                    <option>Empresa / PH</option>
                    <option>Post-obra</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-primary">
                    ¿Qué necesitas?
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos brevemente"
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
                Al enviar aceptas ser contactado por LimpiaGo+.
              </p>
            </form>
          </div>
        </div>
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
        <a href={href} className="flex items-center gap-4 text-white transition hover:text-[color:var(--orange-soft)]">
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4 text-white">{inner}</div>
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
          <img src={logo.url} alt="LimpiaGo+" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-md text-sm text-white/60">
            Soluciones integrales de aseo, mantenimiento y talento humano para hogares, oficinas y
            empresas en Bogotá. Espacios que inspiran.
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
            <li>limpiago.contacto@gmail.com</li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} LimpiaGo+. Todos los derechos reservados.</span>
          <span>Espacios que inspiran.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Small helpers ---------------- */

function SectionEyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
        tone === "light"
          ? "border-white/20 bg-white/10 text-white/80"
          : "border-[color:var(--orange)]/30 bg-[color:var(--orange)]/10 text-[color:var(--orange)]"
      }`}
    >
      {children}
    </span>
  );
}
