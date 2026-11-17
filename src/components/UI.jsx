import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, animate } from "framer-motion";
import * as Lucide from "lucide-react";
import { college, notices } from "../data/site";

export const Icon = ({ name, size = 18, strokeWidth = 1.7, className = "" }) => {
  const Cmp = Lucide[name] || Lucide.Circle;
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} />;
};

/* ------------------------------------------------------------------ */
/*  The college crest — a hand-drawn SVG interpretation of the emblem  */
/* ------------------------------------------------------------------ */
export function CollegeCrest({ size = 64, className = "" }) {
  const id = useRef(`crest-${Math.random().toString(36).slice(2, 8)}`).current;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="D.K.D. College emblem"
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2dca4" />
          <stop offset="45%" stopColor="#d8b36a" />
          <stop offset="100%" stopColor="#a67d2e" />
        </linearGradient>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf3cf" />
          <stop offset="100%" stopColor="#f6d887" />
        </linearGradient>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a9fb4" />
          <stop offset="100%" stopColor="#0d4f68" />
        </linearGradient>
        <path id={`${id}-arc`} d="M 60,60 m -40,0 a 40,40 0 1,1 80,0" fill="none" />
        <path id={`${id}-arcb`} d="M 60,60 m -38,0 a 38,38 0 1,0 76,0" fill="none" />
      </defs>

      <circle cx="60" cy="60" r="58" fill={`url(#${id}-gold)`} />
      <circle cx="60" cy="60" r="53" fill="#08291f" />
      <circle cx="60" cy="60" r="49.5" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="0.9" />
      <circle cx="60" cy="60" r="38.5" fill="#fbf6e6" stroke="#0b3a2b" strokeWidth="1.2" />

      {/* landscape inside */}
      <clipPath id={`${id}-clip`}>
        <circle cx="60" cy="60" r="38" />
      </clipPath>
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="22" y="22" width="76" height="37" fill={`url(#${id}-sky)`} />
        <rect x="22" y="59" width="76" height="41" fill={`url(#${id}-water)`} />
        {/* sun */}
        <circle cx="60" cy="58" r="12.5" fill="#d9432f" />
        <g stroke="#d9432f" strokeWidth="1.6" strokeLinecap="round">
          <path d="M60 40v-5M60 81v-5M42 58h-5M83 58h-5M47.3 45.3l-3.5-3.5M76.2 74.2l-3.5-3.5M72.7 45.3l3.5-3.5M43.8 74.2l3.5-3.5" />
        </g>
        {/* river waves */}
        <path d="M22 66c8-3 16 3 24 0s16 3 24 0 16 3 28 0v34H22z" fill="#dff1ea" opacity=".18" />
        <path d="M22 74c9-4 18 4 27 0s18 4 27 0 13 3 22 0" stroke="#bfe6ea" strokeWidth="1" fill="none" opacity=".5" />
        {/* lotus */}
        <g fill="#f2a7c3" stroke="#b1446b" strokeWidth=".8">
          <path d="M60 92c-5-5-7-11-4-16 4 4 6 9 4 16z" />
          <path d="M60 92c5-5 7-11 4-16-4 4-6 9-4 16z" />
          <path d="M60 92c-8-1-13-5-14-10 6 0 11 3 14 10z" />
          <path d="M60 92c8-1 13-5 14-10-6 0-11 3-14 10z" />
          <path d="M60 92c-3-6-3-12 0-17 3 5 3 11 0 17z" fill="#f7c4d6" />
        </g>
        <path d="M45 92c4-3 9-3 15 0 6-3 11-3 15 0v5H45z" fill="#0b3a2b" opacity=".8" />
      </g>

      {/* ring text */}
      <g fill="#e9d29a" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="7.1" fontWeight="700" letterSpacing=".6">
        <text>
          <textPath href={`#${id}-arc`} startOffset="50%" textAnchor="middle">
            DERGAON KAMAL DOWERAH COLLEGE
          </textPath>
        </text>
      </g>
      <text x="60" y="101" textAnchor="middle" fill="#e9d29a" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="4.6" fontWeight="700" letterSpacing="1.1">
        ESTD. 1962
      </text>
      <circle cx="60" cy="60" r="43" fill="none" stroke="#e9d29a" strokeWidth=".6" opacity=".55" />
    </svg>
  );
}

export function Logo({ size = 50, light = false, compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span className="relative shrink-0 transition-transform duration-500 group-hover:rotate-6" aria-hidden="true">
        <span
          className="absolute inset-0 rounded-full blur-xl opacity-30"
          style={{ background: "#d8b36a" }}
        />
        <CollegeCrest size={size} className="relative" />
      </span>
      <span className="leading-none">
        <span
          className="block font-display tracking-tight"
          style={{
            fontSize: compact ? 17 : 19,
            color: light ? "#fbf6e8" : "var(--text)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          D.K.D. College
        </span>
        <span
          className="block mt-1"
          style={{
            fontSize: 8.5,
            letterSpacing: "0.18em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: light ? "rgba(216,179,106,.95)" : "var(--gold-ink)",
          }}
        >
          Autonomous · Dergaon
        </span>
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Motion helpers                                                     */
/* ------------------------------------------------------------------ */
export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ end, suffix = "", decimals = 0, duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Headings                                                           */
/* ------------------------------------------------------------------ */
export function SectionHeading({ eyebrow, title, desc, align = "left", light = false, className = "" }) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}
      style={{ maxWidth: align === "center" ? 720 : undefined }}
    >
      {eyebrow && (
        <div className={`eyebrow ${align === "center" ? "centered justify-center" : ""}`} style={light ? { color: "#d8b36a" } : {}}>
          {eyebrow}
        </div>
      )}
      <h2
        className="section-title mt-4"
        style={light ? { color: "#fbf6e8" } : {}}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`lede mt-4 ${align === "center" ? "mx-auto" : ""}`}
          style={{ maxWidth: 620, ...(light ? { color: "rgba(255,255,255,.62)" } : {}) }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export function Ornament({ className = "" }) {
  return (
    <div className={`ornament ${className}`}>
      <span />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
      </svg>
      <span />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page hero                                                          */
/* ------------------------------------------------------------------ */
export function PageHero({ eyebrow, title, description, image = "/images/img21.jpg", crumbs = [], children }) {
  return (
    <section className="page-hero" style={{ backgroundImage: "none" }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center 40%", opacity: 0.28 }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(4,18,13,.96), rgba(4,18,13,.55) 65%, rgba(4,18,13,.85))" }} />
      <div className="container-x relative">
        <div className="crumb mb-7" style={{ color: "rgba(255,255,255,.55)" }}>
          <Link to="/" className="hover:text-[#e9d29a]">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <Lucide.ChevronRight size={12} />
              {c.href ? <Link to={c.href} className="hover:text-[#e9d29a]">{c.label}</Link> : <span style={{ color: "rgba(255,255,255,.8)" }}>{c.label}</span>}
            </span>
          ))}
        </div>
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8">
          <div className="max-w-3xl">
            {eyebrow && <div className="eyebrow centered" style={{ color: "#d8b36a" }}>{eyebrow}</div>}
            <h1 className="page-title mt-5">{title}</h1>
            {description && <p className="mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,.68)" }}>{description}</p>}
            {children}
          </div>
          <div className="hidden lg:flex items-center gap-3 pb-2">
            <span className="text-[10px] tracking-[0.24em] uppercase" style={{ color: "rgba(255,255,255,.4)" }}>Est.</span>
            <span className="font-display text-4xl" style={{ color: "#e9d29a" }}>1962</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Notice marquee                                                     */
/* ------------------------------------------------------------------ */
export function NoticeTicker() {
  const latest = [...notices].slice(0, 8);
  const row = (
    <div className="flex items-center shrink-0">
      {latest.map((n) => (
        <Link
          key={n.id}
          to={`/notices/${n.id}`}
          className="flex items-center gap-3 px-7 py-3 text-[12px] whitespace-nowrap transition-colors hover:text-[#e9d29a]"
          style={{ color: "rgba(255,255,255,.72)" }}
        >
          <span className="w-1 h-1 rounded-full" style={{ background: "#d8b36a" }} />
          {n.title}
          <span className="text-[10px] opacity-75">{new Date(n.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</span>
        </Link>
      ))}
    </div>
  );
  return (
    <div className="ticker">
      <div className="container-x flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 shrink-0 py-3 pr-4" style={{ borderRight: "1px solid rgba(255,255,255,.14)" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#d8b36a" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#d8b36a" }} />
          </span>
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#e9d29a" }}>Latest</span>
        </div>
        <div className="marquee flex-1">
          <div className="marquee-track">
            {row}
            {row}
          </div>
        </div>
        <Link to="/notices" className="hidden md:inline-flex text-[10px] font-bold tracking-[0.14em] uppercase shrink-0 py-3 pl-4" style={{ color: "#e9d29a", borderLeft: "1px solid rgba(255,255,255,.14)" }}>
          View all
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Accordion                                                          */
/* ------------------------------------------------------------------ */
export function Accordion({ items, className = "" }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={className}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`acc-item ${isOpen ? "open" : ""}`}>
            <button className="acc-btn" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span className="flex items-start gap-4">
                <span className="idx mt-1">{String(i + 1).padStart(2, "0")}</span>
                {it.q}
              </span>
              <span className="acc-icon" style={isOpen ? { background: "var(--gold)", borderColor: "var(--gold)", color: "#12210f" } : {}}>
                <Lucide.Plus size={14} />
              </span>
            </button>
            <div
              className="grid transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="prose-body pb-5 pl-0 sm:pl-9 pr-10 text-[13.5px]">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */
export function Pill({ children, tone = "default", className = "" }) {
  const map = {
    default: "badge",
    gold: "badge badge-gold",
    green: "badge badge-green",
    new: "badge badge-new",
  };
  return <span className={`${map[tone] || "badge"} ${className}`}>{children}</span>;
}

export function EmptyState({ icon = "Sprout", title, text }) {
  return (
    <div className="text-center py-16 border border-dashed rounded-2xl" style={{ borderColor: "var(--line-strong)" }}>
      <div className="mx-auto w-12 h-12 rounded-full grid place-items-center mb-4" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
        <Icon name={icon} size={22} />
      </div>
      <h4 className="text-xl">{title}</h4>
      <p className="text-muted text-sm mt-2">{text}</p>
    </div>
  );
}

export function CrestSeal({ size = 120, className = "" }) {
  return (
    <div className={`relative grid place-items-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 seal-rotate" width={size} height={size} aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text style={{ fontSize: 7, letterSpacing: 2.1, fill: "#d8b36a", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600 }}>
          <textPath href="#seal-circle">EXCELLENCE · SERVICE · INTEGRITY · SINCE 1962 · DERGSON ·</textPath>
        </text>
      </svg>
      <CollegeCrest size={size * 0.62} />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--forest)" }}>
      <div className="absolute inset-0 jaapi opacity-60" />
      <div className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(216,179,106,.22), transparent 65%)" }} />
      <div className="container-x relative py-16 md:py-20 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <div className="eyebrow" style={{ color: "#d8b36a" }}>Your next chapter</div>
          <h2 className="mt-4 section-title" style={{ color: "#fbf6e8" }}>
            Come learn where <span className="serif-italic" style={{ color: "#e9d29a" }}>curiosity</span> has a home.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.62)" }}>
            Admissions for the 2026–27 academic session are open. Explore our programmes, speak to a counsellor, or visit the campus — we would love to meet you.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link to="/admissions" className="btn btn-gold">
            Apply for admission <Icon name="ArrowUpRight" size={15} />
          </Link>
          <Link to="/contact" className="btn btn-ghost-light">
            Plan a visit
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MapCard() {
  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
    >
      <div className="relative h-[250px] overflow-hidden">
        <svg
          viewBox="0 0 600 300"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <rect width="600" height="300" fill="#eef1e5" />
          <g fill="#e2e9d4" stroke="#d6dec6" strokeWidth="1">
            <rect x="26" y="22" width="138" height="80" rx="6" />
            <rect x="184" y="22" width="92" height="80" rx="6" />
            <rect x="24" y="122" width="110" height="66" rx="6" />
            <rect x="154" y="122" width="122" height="66" rx="6" />
            <rect x="392" y="24" width="180" height="70" rx="6" />
            <rect x="404" y="114" width="168" height="78" rx="6" />
            <rect x="296" y="214" width="130" height="66" rx="6" />
            <rect x="444" y="212" width="128" height="68" rx="6" />
          </g>
          <path
            d="M-20 262 C 90 236, 168 276, 258 256 S 430 216, 620 244"
            fill="none"
            stroke="#b7d6d4"
            strokeWidth="30"
            strokeLinecap="round"
            opacity=".85"
          />
          <path
            d="M-20 262 C 90 236, 168 276, 258 256 S 430 216, 620 244"
            fill="none"
            stroke="#d8eae7"
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".8"
          />
          <g stroke="#fbf8f0" strokeLinecap="round">
            <path d="M-10 108 L 610 132" strokeWidth="16" />
            <path d="M330 -10 L 306 310" strokeWidth="12" />
            <path d="M-10 206 L 610 190" strokeWidth="7" />
            <path d="M80 -10 L 96 310" strokeWidth="5" />
          </g>
          <g stroke="#dfc58c" strokeWidth="1.4" strokeDasharray="7 7">
            <path d="M-10 108 L 610 132" />
            <path d="M330 -10 L 306 310" />
          </g>
          <text x="46" y="101" fill="#9aa891" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="2">NH-37</text>
          <text x="418" y="150" fill="#9aa891" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="1.6">DERGAON</text>
          <text x="472" y="196" fill="#9aa891" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="1.2">TO GOLAGHAT</text>
        </svg>

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 46%, transparent 8%, rgba(251,248,240,.12) 45%, rgba(251,248,240,.62) 100%)",
          }}
        />

        <div className="absolute left-1/2 top-[42%] -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span
              className="relative grid place-items-center w-11 h-11 rounded-full"
              style={{
                background: "var(--forest)",
                color: "#e9d29a",
                boxShadow: "0 2px 0 6px rgba(10,49,38,.12), 0 14px 30px -12px rgba(7,35,26,.7)",
              }}
            >
              <Lucide.MapPin size={19} />
            </span>
            <span
              className="mt-2 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.16em] whitespace-nowrap"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                color: "var(--text)",
                boxShadow: "0 8px 20px -12px rgba(7,35,26,.6)",
              }}
            >
              D.K.D. College
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap items-center justify-between gap-3 p-4"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="min-w-0">
          <div className="text-[11.5px] font-semibold">Raja Bahar, Dergaon</div>
          <div className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>
            P.O. Dergaon · Golaghat · Assam 785614
          </div>
        </div>
        <a
          href={`https://www.google.com/maps?q=${encodeURIComponent(college.mapQuery)}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm shrink-0"
        >
          <Lucide.Navigation size={13} /> Directions
        </a>
      </div>
    </div>
  );
}

export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("dkd-theme");
    if (saved) return saved === "dark";
    return false;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dkd-theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, setDark];
}

export { college };
