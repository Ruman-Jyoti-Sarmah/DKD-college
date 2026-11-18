import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import * as Lucide from "lucide-react";
import {
  Accordion,
  CountUp,
  CtaBand,
  Icon,
  NoticeTicker,
  Ornament,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  CrestSeal,
  Pill,
} from "../components/UI";
import { FacultyCard, FacultyProfileModal } from "../components/Faculty";
import { facultyDirectory } from "../data/faculty";
import {
  college,
  events,
  faqs,
  notices,
  programmes,
  quickActions,
  stats,
  testimonials,
} from "../data/site";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="hero grain">
      <div className="hero-bg" style={{ backgroundImage: "url(/images/img20.jpg)" }} />
      <div className="hero-veil" />
      <div className="absolute inset-0 dots opacity-[0.12]" />

      <div className="container-x relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.18fr_0.82fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="hero-kicker">
                <span className="dot">✦</span>
                NAAC A+ &nbsp;·&nbsp; Autonomous &nbsp;·&nbsp; Est. 1962
              </span>
            </motion.div>

            <motion.h1
              className="hero-title mt-7"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
            >
              Where knowledge{" "}
              <br />
              becomes a <em>way of life.</em>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-[14.5px] md:text-[15.5px] leading-relaxed"
              style={{ color: "rgba(255,255,255,.7)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18 }}
            >
              For six decades, Dergaon Kamal Dowerah College has opened the doors of higher
              education to the youth of Assam — nurturing character, competence and a lifelong
              love of learning.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mt-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
            >
              <Link to="/academics" className="btn btn-gold">
                Explore programmes <Lucide.ArrowUpRight size={15} />
              </Link>
              <Link to="/admissions" className="btn btn-ghost-light">
                Admissions 2026
              </Link>
              <Link
                to="/gallery"
                className="flex items-center gap-3 text-[12px] font-semibold ml-1 group"
                style={{ color: "rgba(255,255,255,.8)" }}
              >
                <span className="w-9 h-9 rounded-full grid place-items-center border transition-colors group-hover:border-[#d8b36a]" style={{ borderColor: "rgba(255,255,255,.3)" }}>
                  <Lucide.Play size={12} fill="currentColor" />
                </span>
                <span>See campus life</span>
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                ["60+", "Years of legacy"],
                ["A+", "NAAC grade"],
                ["18", "Departments"],
                ["3.37", "CGPA"],
              ].map(([v, l]) => (
                <div key={l} className="sm:pl-5 sm:border-l" style={{ borderColor: "rgba(255,255,255,.16)" }}>
                  <div className="font-display text-[1.7rem] leading-none" style={{ color: "#f3e4bd" }}>{v}</div>
                  <div className="text-[10px] uppercase tracking-[0.12em] mt-1.5" style={{ color: "rgba(255,255,255,.45)" }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* right visual */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <div className="relative mx-auto max-w-[380px]">
              <div className="absolute -inset-4 rounded-[300px_300px_28px_28px] border" style={{ borderColor: "rgba(216,179,106,.25)" }} />
              <div className="hero-figure aspect-[4/5]">
                <img src="/images/img37.jpg" alt="The D.K.D. College campus" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -left-10 bottom-16 glass rounded-2xl p-4 w-[210px]" style={{ borderColor: "rgba(255,255,255,.22)", background: "rgba(9,35,26,.72)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full grid place-items-center" style={{ background: "rgba(216,179,106,.18)" }}>
                    <Lucide.GraduationCap size={12} style={{ color: "#e9d29a" }} />
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]" style={{ color: "#e9d29a" }}>Admissions open</span>
                </div>
                <p className="text-[13px] font-display" style={{ color: "#fbf6e8" }}>Session 2026–27</p>
                <p className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,.55)" }}>Arts · Science · Commerce</p>
                <Link to="/admissions" className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider" style={{ color: "#d8b36a" }}>
                  Apply now <Lucide.ArrowRight size={11} />
                </Link>
              </div>

              <div className="absolute -right-5 -top-6">
                <CrestSeal size={116} />
              </div>

              <div className="absolute -right-6 bottom-6 rounded-2xl px-4 py-3 text-center" style={{ background: "#f4ead3", color: "#0b2b21", boxShadow: "0 20px 40px -20px rgba(0,0,0,.6)" }}>
                <div className="font-display text-xl leading-none">A+</div>
                <div className="text-[8px] font-bold uppercase tracking-[0.14em] mt-1 opacity-70">NAAC Accredited</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center gap-3 mt-10 text-[9px] uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,.35)" }}>
          <span className="hero-scroll" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick actions                                                      */
/* ------------------------------------------------------------------ */
function QuickActions() {
  return (
    <section className="section-sm" style={{ background: "var(--bg)" }}>
      <div className="container-x">
        <h2 className="sr-only">Quick links</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3">
          {quickActions.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <Link
                to={a.href}
                className="group h-full block rounded-2xl p-4 sm:p-5 border transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: "var(--surface)", borderColor: "var(--line)", boxShadow: "0 1px 0 rgba(0,0,0,.02)" }}
              >
                <div className="flex items-start justify-between">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl grid place-items-center mb-3 sm:mb-4" style={{ background: a.tone === "gold" ? "color-mix(in srgb, var(--gold) 15%, transparent)" : "color-mix(in srgb, var(--accent-leaf) 14%, transparent)", color: a.tone === "gold" ? "var(--gold)" : "var(--accent-leaf)" }}>
                    <Icon name={a.icon} size={18} />
                  </span>
                  <Lucide.ArrowUpRight size={14} className="opacity-25 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="font-display text-[14.5px] sm:text-[16px] leading-tight">{a.title}</h3>
                <p className="text-[11px] leading-relaxed mt-1.5" style={{ color: "var(--muted)" }}>{a.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
function AboutIntro() {
  return (
    <section className="section relative overflow-hidden" style={{ background: "var(--bg-alt)" }}>
      <div className="absolute right-0 top-0 w-[40%] h-full dots opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="relative max-w-[470px]">
              <div className="arch aspect-[4/5] border" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-lg)" }}>
                <img src="/images/img30.jpg" alt="Students at the D.K.D. College gate" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:right-[-42px] w-[54%] arch aspect-square border-4" style={{ borderColor: "var(--bg-alt)", boxShadow: "var(--shadow)", borderRadius: "180px 180px 16px 16px" }}>
                <img src="/images/img39.jpg" alt="NCC cadets on campus" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -left-3 sm:-left-8 top-10 rounded-2xl px-4 py-3 text-center" style={{ background: "var(--forest)", color: "#f4ead3", boxShadow: "var(--shadow-lg)" }}>
                <div className="font-display text-2xl leading-none">1962</div>
                <div className="text-[8px] uppercase tracking-[0.18em] mt-1" style={{ color: "#d8b36a" }}>Established</div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title={<>A college built by a <span className="serif-italic text-gold">community,</span> for its future.</>}
                desc="In 1962, a group of public-spirited citizens in Dergaon decided that the youth of this region deserved a place to learn, question and rise. That decision became D.K.D. College."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="prose-body mt-5 text-[13.5px]">
                From its first classrooms at Bapuji Mandir to a nine-acre campus at Raja Bahar, the
                college has grown into one of Assam's premier autonomous institutions — accredited
                <strong> A+ with a CGPA of 3.37</strong> by NAAC. Yet its purpose remains unchanged:
                to make higher education accessible, meaningful and transformative.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-7">
                {[
                  ["9 acres", "Green, pollution-free campus"],
                  ["25+", "Programmes & pathways"],
                  ["100+", "Faculty and researchers"],
                  ["2022", "Granted autonomy"],
                ].map(([v, l]) => (
                  <div key={l} className="flex gap-3">
                    <span className="w-px mt-1 mb-1" style={{ background: "var(--gold)", opacity: 0.5 }} />
                    <div>
                      <div className="font-display text-xl leading-none">{v}</div>
                      <div className="text-[10.5px] mt-1" style={{ color: "var(--muted)" }}>{l}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/about" className="btn btn-forest">Read our story <Lucide.ArrowRight size={14} /></Link>
                <Link to="/mission-vision" className="btn btn-outline">Our mission</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Programmes                                                         */
/* ------------------------------------------------------------------ */
function Programmes() {
  const [active, setActive] = useState("Arts");
  const p = programmes[active];
  return (
    <section className="section relative" style={{ background: "var(--bg)" }}>
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-9">
          <Reveal>
            <SectionHeading
              eyebrow="Academics"
              title={<>Choose a path. <span className="serif-italic text-gold">Build a life.</span></>}
              desc="Our Four Year Undergraduate Programmes follow the National Education Policy 2020 — flexible, multidisciplinary and designed for the world ahead."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {Object.keys(programmes).map((k) => (
                <button key={k} className={`tab ${active === k ? "active" : ""}`} onClick={() => setActive(k)}>
                  {k}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="card overflow-hidden relative"
            >
              <div className="absolute inset-0 jaapi opacity-40 pointer-events-none" />
              <div className="relative p-7 md:p-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-11 h-11 rounded-xl grid place-items-center" style={{ background: "var(--forest)", color: "#e9d29a" }}>
                        <Icon name={p.icon} size={20} />
                      </span>
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.2em] font-bold" style={{ color: "var(--gold)" }}>{active} stream</div>
                        <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
                      </div>
                    </div>
                    <p className="text-[13px] leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>{p.description}</p>
                  </div>
                  <span className="badge badge-gold hidden sm:inline-flex">4 Years · 8 Semesters</span>
                </div>

                <div className="mt-7">
                  <div className="text-[10px] uppercase tracking-[0.16em] font-bold mb-3" style={{ color: "var(--muted)" }}>Major subjects</div>
                  <div className="flex flex-wrap gap-2">
                    {p.majors.map((m) => (
                      <Link
                        key={m}
                        to={`/departments`}
                        className="px-3 py-1.5 rounded-lg text-[11.5px] font-medium border transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                        style={{ borderColor: "var(--line)", color: "var(--text)" }}
                      >
                        {m}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-7 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--muted)" }}>
                      <Lucide.Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                      {h}
                    </div>
                  ))}
                </div>

                <Link to="/academics" className="link-arrow mt-7">
                  Explore {active} programmes <Lucide.ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              { icon: "BookOpenCheck", title: "FYUGP under NEP 2020", text: "Major, minor and interdisciplinary combinations with multiple exit points." },
              { icon: "Award", title: "Honours with research", text: "A fourth-year research pathway for students who want to go deeper." },
              { icon: "Milestone", title: "Autonomous curriculum", text: "Academic flexibility, contemporary electives and continuous assessment." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={0.06 * i}>
                <div className="rounded-2xl p-5 border h-full" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
                  <span className="w-9 h-9 rounded-lg grid place-items-center mb-3" style={{ background: "color-mix(in srgb, var(--gold) 13%, transparent)", color: "var(--gold)" }}>
                    <Icon name={c.icon} size={17} />
                  </span>
                  <h4 className="font-display text-[16px]">{c.title}</h4>
                  <p className="text-[11.5px] leading-relaxed mt-1.5" style={{ color: "var(--muted)" }}>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why DKD bento                                                      */
/* ------------------------------------------------------------------ */
function WhyDkd() {
  const items = [
    { icon: "BadgeCheck", title: "Accredited & autonomous", text: "NAAC A+ (CGPA 3.37) and autonomous status — a mark of trust earned over decades.", span: "lg:col-span-2" },
    { icon: "FlaskConical", title: "Research that matters", text: "Faculty and students discover solutions to real regional problems, including the rare bacterium DKDC1.", span: "" },
    { icon: "Library", title: "A library for the curious", text: "Books, journals, e-resources and quiet corners that make deep work possible.", span: "" },
    { icon: "HeartHandshake", title: "Support at every step", text: "Counselling, mentoring, scholarships and a grievance mechanism that listens.", span: "lg:col-span-2" },
    { icon: "TreePine", title: "A green, safe campus", text: "Nine acres of trees, gardens and open skies — a place where you can breathe and think.", span: "" },
    { icon: "Users", title: "A community, not a crowd", text: "Teachers who know your name; seniors who show you the way; alumni who open doors.", span: "" },
  ];
  return (
    <section className="section relative overflow-hidden" style={{ background: "var(--forest-2)", color: "#f4efe0" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "url(/images/img21.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.14 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(4,18,13,.97), rgba(4,18,13,.8))" }} />
      <div className="absolute -right-20 top-20 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(216,179,106,.16), transparent 65%)" }} />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading
                eyebrow="Why D.K.D."
                light
                title={<>An education that stays <span className="serif-italic" style={{ color: "#e9d29a" }}>with you.</span></>}
                desc="Degrees open doors. What you become along the way is what truly matters. Here, both are taken seriously."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5">
                {[
                  ["01", "Learn from teachers who mentor, not just instruct."],
                  ["02", "Grow through NCC, NSS, sports, culture and service."],
                  ["03", "Graduate ready for work, research and life."],
                ].map(([n, t]) => (
                  <div key={n} className="flex gap-4 items-start">
                    <span className="font-display text-sm" style={{ color: "#d8b36a" }}>{n}</span>
                    <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,.66)" }}>{t}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-gold mt-8">Discover the college <Lucide.ArrowRight size={14} /></Link>
            </Reveal>
          </div>

          <Stagger className="grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <StaggerItem key={it.title} className={it.span}>
                <div className="h-full rounded-2xl p-5 md:p-6 transition-colors duration-300 hover:bg-white/[0.075]" style={{ background: "rgba(255,255,255,.045)", border: "1px solid rgba(255,255,255,.1)" }}>
                  <span className="w-10 h-10 rounded-xl grid place-items-center mb-4" style={{ background: "rgba(216,179,106,.13)", color: "#e9d29a" }}>
                    <Icon name={it.icon} size={18} />
                  </span>
                  <h3 className="font-display text-[17px] leading-snug" style={{ color: "#fbf6e8" }}>{it.title}</h3>
                  <p className="text-[11.5px] leading-relaxed mt-2" style={{ color: "rgba(255,255,255,.52)" }}>{it.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Principal                                                          */
/* ------------------------------------------------------------------ */
function PrincipalMessage() {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          <Reveal className="relative">
            <div className="relative max-w-[390px] mx-auto lg:mx-0">
              <div className="arch aspect-[4/5] overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                <img src="/images/img23.jpeg" alt="Dr. Pranjol Protim Kakoty, Principal" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-xl px-4 py-3 flex items-center justify-between gap-3" style={{ background: "var(--surface)", border: "1px solid var(--line)", boxShadow: "var(--shadow)" }}>
                <div>
                  <div className="font-display text-[14px] leading-tight">Dr. Pranjol Protim Kakoty</div>
                  <div className="text-[9px] uppercase tracking-[0.13em] mt-0.5" style={{ color: "var(--gold)" }}>Principal</div>
                </div>
                <span className="w-9 h-9 rounded-full grid place-items-center shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                  <Lucide.Quote size={14} />
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="eyebrow">From the Principal's desk</div>
              <blockquote className="mt-5 font-display text-[clamp(1.5rem,2.7vw,2.25rem)] leading-[1.25] tracking-[-0.02em]">
                “Our task is not merely to fill young minds with information, but to help them become
                thoughtful, capable and <span className="serif-italic text-gold">compassionate</span> human beings.”
              </blockquote>
              <p className="prose-body mt-6 text-[13.5px]">
                Over six decades, D.K.D. College has combined a strong academic tradition with a deep
                sense of social commitment. Our autonomous status allows us to keep the curriculum
                alive — responsive to new knowledge, new technologies and the needs of our community.
              </p>
              <div className="flex items-center gap-4 mt-7">
                <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
                <span className="font-display italic text-xl" style={{ color: "var(--gold)" }}>P. P. Kakoty</span>
              </div>
              <Link to="/principal" className="link-arrow mt-6">
                Read the full message <Lucide.ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Campus gallery strip                                               */
/* ------------------------------------------------------------------ */
function CampusStrip() {
  const imgs = [
    { src: "/images/img20.jpg", label: "The campus" },
    { src: "/images/img3.jpg", label: "Debating society" },
    { src: "/images/img8.jpg", label: "Yoga day" },
    { src: "/images/img9.jpg", label: "Green campus" },
    { src: "/images/img15.jpg", label: "Celebrations" },
  ];
  return (
    <section className="section-sm" style={{ background: "var(--bg-alt)" }}>
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <Reveal>
            <div className="eyebrow">Life at D.K.D.</div>
            <h2 className="section-title mt-3">More than classrooms.</h2>
          </Reveal>
          <Link to="/gallery" className="link-arrow">Open gallery <Lucide.ArrowUpRight size={14} /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {imgs.map((im, i) => (
            <Reveal key={im.label} delay={i * 0.06} className={i === 0 ? "col-span-2 md:col-span-2 row-span-1" : ""}>
              <Link to="/gallery" className="group relative block overflow-hidden rounded-xl h-full" style={{ minHeight: i === 0 ? 240 : 180 }}>
                <img src={im.src} alt={im.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ minHeight: i === 0 ? 240 : 180 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,18,13,.7), transparent 55%)" }} />
                <span className="absolute left-3 bottom-3 text-[10.5px] font-semibold tracking-wide" style={{ color: "#f7f0df" }}>{im.label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Notices + Events                                                   */
/* ------------------------------------------------------------------ */
function NoticesEvents() {
  const latest = notices.slice(0, 6);
  const ev = events[0];
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14">
          <div>
            <div className="flex items-end justify-between gap-4 mb-6">
              <Reveal>
                <div className="eyebrow">Notice board</div>
                <h2 className="section-title mt-3">Latest updates</h2>
              </Reveal>
              <Link to="/notices" className="link-arrow text-[11px]">All notices <Lucide.ArrowRight size={13} /></Link>
            </div>
            <div className="border-t" style={{ borderColor: "var(--line)" }}>
              {latest.map((n, i) => (
                <Reveal key={n.id} delay={i * 0.04}>
                  <Link to={`/notices/${n.id}`} className="group flex gap-4 py-4 border-b transition-colors" style={{ borderColor: "var(--line)" }}>
                    <div className="shrink-0 w-12 text-center rounded-lg py-1.5 h-fit" style={{ background: "var(--bg-alt)" }}>
                      <div className="font-display text-lg leading-none">{new Date(n.date).getDate()}</div>
                      <div className="text-[8px] uppercase tracking-wider mt-0.5" style={{ color: "var(--gold)" }}>
                        {new Date(n.date).toLocaleDateString("en-GB", { month: "short" })}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9.5px] uppercase tracking-[0.1em] font-bold" style={{ color: "var(--gold)" }}>{n.category}</span>
                        {n.isNew && <span className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase" style={{ background: "#b3261e", color: "#fff" }}>New</span>}
                      </div>
                      <h3 className="text-[13.5px] font-semibold leading-snug mt-1 transition-colors group-hover:text-[var(--gold)]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: 0 }}>{n.title}</h3>
                    </div>
                    <Lucide.ArrowUpRight size={14} className="mt-2 shrink-0 opacity-25 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4 mb-6">
              <Reveal>
                <div className="eyebrow">On the calendar</div>
                <h2 className="section-title mt-3">Featured event</h2>
              </Reveal>
              <Link to="/events" className="link-arrow text-[11px]">All events <Lucide.ArrowRight size={13} /></Link>
            </div>
            <Reveal>
              <Link to="/events" className="group block relative overflow-hidden rounded-2xl" style={{ boxShadow: "var(--shadow-lg)" }}>
                <div className="aspect-[16/11] overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,15,11,.94) 5%, rgba(3,15,11,.35) 50%, rgba(3,15,11,.08))" }} />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="badge badge-gold">{ev.category}</span>
                  <span className="badge" style={{ background: "rgba(0,0,0,.35)", color: "#fff", borderColor: "rgba(255,255,255,.2)" }}>{ev.venue}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.12em] mb-2" style={{ color: "#e9d29a" }}>
                    <Lucide.CalendarDays size={12} /> {ev.displayDate}
                  </div>
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.8rem)] leading-[1.15]" style={{ color: "#fbf6e8" }}>{ev.title}</h3>
                  <p className="text-[11.5px] mt-2 max-w-lg leading-relaxed" style={{ color: "rgba(255,255,255,.6)" }}>{ev.summary}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[11px] font-bold uppercase tracking-wider" style={{ color: "#e9d29a" }}>
                    Event details <Lucide.ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {events.slice(1, 3).map((e) => (
                <Reveal key={e.id} delay={0.08}>
                  <Link to="/events" className="group flex gap-3 rounded-xl p-2.5 border transition-colors hover:border-[var(--gold)]" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                    <img src={e.image} alt={e.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[9px] uppercase tracking-wider" style={{ color: "var(--gold)" }}>{e.displayDate}</div>
                      <h4 className="text-[11.5px] font-semibold leading-snug mt-1 line-clamp-3" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{e.title}</h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Numbers                                                            */
/* ------------------------------------------------------------------ */
function Numbers() {
  const items = [
    { v: 60, s: "+", l: "Years of excellence" },
    { v: 18, s: "", l: "Departments" },
    { v: 3500, s: "+", l: "Students" },
    { v: 120, s: "+", l: "Faculty & staff" },
    { v: 9, s: "", l: "Acre green campus" },
    { v: 100, s: "+", l: "Computer systems" },
  ];
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--bg-alt)" }}>
      <div className="absolute inset-0 jaapi opacity-30" />
      <div className="container-x relative py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
          {items.map((it, i) => (
            <Reveal key={it.l} delay={i * 0.05}>
              <div className="text-center md:text-left md:pl-4 md:border-l" style={{ borderColor: "var(--line)" }}>
                <div className="stat-num text-gold">
                  <CountUp end={it.v} suffix={it.s} />
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.11em] mt-2" style={{ color: "var(--muted)" }}>{it.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7500);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section className="section relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="absolute right-0 top-0 h-full w-1/2 dots opacity-25" />
      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="divider-star mb-6"><Lucide.Quote size={16} /></div>
            <div className="eyebrow centered justify-center">Alumni voices</div>
          </Reveal>
          <div className="relative mt-7 min-h-[210px] sm:min-h-[190px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-display text-[clamp(1.25rem,2.4vw,1.9rem)] leading-[1.35] tracking-[-0.02em]">
                  “{t.quote}”
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <span className="w-10 h-10 rounded-full grid place-items-center font-display text-sm" style={{ background: "var(--bg-alt)", color: "var(--gold-ink)", border: "1px solid var(--line)" }}>
                    {t.name.split(" ").slice(-1)[0]?.slice(0, 2) || "DK"}
                  </span>
                  <div className="text-left">
                    <div className="text-[12px] font-semibold">{t.name}</div>
                    <div className="text-[10.5px]" style={{ color: "var(--muted)" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-1 mt-4">
            {testimonials.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Testimonial ${n + 1}`}
                className="grid place-items-center h-6 transition-all"
                style={{ width: n === i ? 44 : 24 }}
              >
                <span
                  className="block rounded-full transition-all"
                  style={{ width: n === i ? 28 : 8, height: 6, background: n === i ? "var(--gold)" : "var(--line-strong)" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                 */
/* ------------------------------------------------------------------ */
function FaqSection() {
  return (
    <section className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Questions, answered"
              title={<>Before you <span className="serif-italic text-gold">begin.</span></>}
              desc="A few things students and parents ask us most often. If your question isn't here, the college office is only a call away."
            />
            <div className="mt-8 rounded-2xl border p-5 flex items-start gap-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <span className="w-10 h-10 rounded-full grid place-items-center shrink-0" style={{ background: "var(--forest)", color: "#e9d29a" }}>
                <Lucide.PhoneCall size={16} />
              </span>
              <div>
                <div className="text-[12px] font-bold">Admission help desk</div>
                <a href={`tel:${college.phone}`} className="text-[13px] text-gold font-semibold" style={{ color: "var(--gold-ink)" }}>{college.phone}</a>
                <p className="text-[10.5px] mt-1" style={{ color: "var(--muted)" }}>Monday–Saturday, 10 a.m. – 4 p.m.</p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Faculty spotlight                                                  */
/* ------------------------------------------------------------------ */
function FacultySpotlight() {
  const [profile, setProfile] = useState(null);
  const featured = [
    ["Dr. Tridhara Bardoloi", "dept-of-english"],
    ["Dr. Sikhajyoti Ojah", "dept-of-physics"],
    ["Dr. Labanya Das", "dept-of-geography"],
    ["Dr. Shahnoor Rahman", "dept-of-commerce"],
  ]
    .map(([name, slug]) =>
      facultyDirectory.find((f) => f.name === name && f.departmentSlug === slug)
    )
    .filter(Boolean);

  return (
    <section className="section relative overflow-hidden" style={{ background: "var(--bg-alt)" }}>
      <div className="absolute inset-0 jaapi opacity-25" />
      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <Reveal>
            <SectionHeading
              eyebrow="The people behind the college"
              title={<>Scholars. Mentors. <span className="serif-italic text-gold">Believers.</span></>}
              desc="Meet a few of the teachers who bring the classroom to life — and explore the full directory of faculty across all sixteen departments."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/faculty" className="btn btn-outline btn-sm shrink-0">
              View all faculty <Lucide.ArrowUpRight size={13} />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {featured.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.05}>
              <FacultyCard member={member} onOpen={setProfile} />
            </Reveal>
          ))}
        </div>
      </div>
      <FacultyProfileModal member={profile} onClose={() => setProfile(null)} onSelect={setProfile} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Hero />
      <NoticeTicker />
      <QuickActions />
      <AboutIntro />
      <Programmes />
      <WhyDkd />
      <PrincipalMessage />
      <CampusStrip />
      <NoticesEvents />
      <Numbers />
      <FacultySpotlight />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  );
}
