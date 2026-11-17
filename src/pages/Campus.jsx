import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import * as Lucide from "lucide-react";
import {
  CtaBand,
  EmptyState,
  Icon,
  PageHero,
  Pill,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "../components/UI";
import { college, events, facilities, gallery, studentLife, testimonials } from "../data/site";

/* ================================================================== */
/*  FACILITIES                                                        */
/* ================================================================== */
export function Facilities() {
  return (
    <>
      <PageHero
        eyebrow="Campus & facilities"
        title={<>A campus built for <span className="serif-italic" style={{ color: "#e9d29a" }}>becoming.</span></>}
        description="Libraries and laboratories, hostels and playgrounds, quiet corners and busy canteens — everything a student needs to learn well and live fully."
        image="/images/img31.jpg"
        crumbs={[{ label: "Campus" }, { label: "Facilities" }]}
      >
        <div className="flex flex-wrap gap-2 mt-7">
          {facilities.slice(0, 4).map((f) => (
            <a key={f.slug} href={`#${f.slug}`} className="badge" style={{ background: "rgba(255,255,255,.08)", color: "#f3e8cf", borderColor: "rgba(255,255,255,.18)" }}>{f.title}</a>
          ))}
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.slice(0, 6).map((f, i) => (
              <Reveal key={f.slug} delay={(i % 3) * 0.05} className={i === 0 ? "md:col-span-2" : ""}>
                <a href={`#${f.slug}`} className="group relative block overflow-hidden rounded-2xl h-full min-h-[250px]" style={{ border: "1px solid var(--line)" }}>
                  <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,15,11,.94) 0%, rgba(3,15,11,.3) 55%, rgba(3,15,11,.05))" }} />
                  <div className="absolute bottom-0 p-6">
                    <span className="w-9 h-9 rounded-lg grid place-items-center mb-3" style={{ background: "rgba(216,179,106,.18)", color: "#e9d29a", backdropFilter: "blur(4px)" }}>
                      <Icon name={f.icon} size={17} />
                    </span>
                    <h2 className="font-display text-2xl" style={{ color: "#fbf6e8" }}>{f.title}</h2>
                    <p className="text-[11.5px] mt-1.5 max-w-sm" style={{ color: "rgba(255,255,255,.58)" }}>{f.summary}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 space-y-4">
            {facilities.map((f, i) => (
              <Reveal key={f.slug}>
                <div id={f.slug} className="scroll-mt-28 rounded-2xl border overflow-hidden grid lg:grid-cols-[1.15fr_0.85fr]" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <div className={`p-7 md:p-9 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}><Icon name={f.icon} size={18} /></span>
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.18em] font-bold" style={{ color: "var(--gold)" }}>Facility {String(i + 1).padStart(2, "0")}</div>
                        <h2 className="font-display text-2xl leading-tight">{f.title}</h2>
                      </div>
                    </div>
                    <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--muted)" }}>{f.summary}</p>
                    <div className="mt-4 grid sm:grid-cols-2 gap-2">
                      {f.details.map((d) => (
                        <div key={d} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--muted)" }}>
                          <Lucide.Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} /> {d}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-5 pt-4 text-[10.5px]" style={{ borderTop: "1px solid var(--line)", color: "var(--muted)" }}>
                      <span className="flex items-center gap-1.5"><Lucide.Clock size={12} style={{ color: "var(--gold)" }} /> {f.hours}</span>
                      <span className="flex items-center gap-1.5"><Lucide.Phone size={12} style={{ color: "var(--gold)" }} /> {f.contact}</span>
                    </div>
                  </div>
                  <div className={`relative min-h-[220px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(4,18,13,.15))" }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  STUDENT LIFE                                                      */
/* ================================================================== */
export function StudentLife() {
  return (
    <>
      <PageHero
        eyebrow="Student life"
        title={<>Find your people. <span className="serif-italic" style={{ color: "#e9d29a" }}>Find your purpose.</span></>}
        description="From the parade ground to the debating hall, from village outreach to the stage — life at D.K.D. is rich, loud, generous and unforgettable."
        image="/images/img39.jpg"
        crumbs={[{ label: "Campus" }, { label: "Student Life" }]}
      />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentLife.map((s) => (
              <StaggerItem key={s.title}>
                <Link to={s.href} className="group card p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <span className="w-12 h-12 rounded-xl grid place-items-center" style={{ background: "var(--forest)", color: "#e9d29a" }}><Icon name={s.icon} size={20} /></span>
                    <Pill tone="gold">{s.tag}</Pill>
                  </div>
                  <h2 className="font-display text-2xl">{s.title}</h2>
                  <p className="text-[12px] leading-relaxed mt-2 flex-1" style={{ color: "var(--muted)" }}>{s.text}</p>
                  <span className="link-arrow mt-5 text-[11px]">Explore <Lucide.ArrowRight size={12} /></span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x space-y-14">
          <Reveal>
            <div id="ncc" className="scroll-mt-28 grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
              <div className="arch overflow-hidden border aspect-[4/3]" style={{ borderColor: "var(--line)" }}>
                <img src="/images/img39.jpg" alt="NCC cadets" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="eyebrow">National Cadet Corps</div>
                <h2 className="section-title mt-3">Discipline. Leadership. Service.</h2>
                <p className="prose-body mt-4 text-[13px]">
                  NCC in D.K.D. College offers opportunities to both boys and girls. The boys' unit was
                  formed in <strong>1964</strong> and the girls' unit in <strong>1979</strong>. Cadets
                  train in drill, adventure, first aid, social service and leadership — and represent
                  the college at camps and Republic Day parades.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mt-5">
                  {[["Boys' unit", "Since 1964"], ["Girls' unit", "Since 1979"], ["ANO (Boys)", "Dr. Pranjol Protim Kakoty"], ["CTO (Girls)", "Dr. Labanya Das"]].map(([a, b]) => (
                    <div key={a} className="rounded-lg border px-4 py-3" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--gold)" }}>{a}</div>
                      <div className="text-[12px] font-medium mt-1">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div id="nss" className="scroll-mt-28 grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
              <div className="lg:order-2 arch overflow-hidden border aspect-[4/3]" style={{ borderColor: "var(--line)" }}>
                <img src="/images/img9.jpg" alt="NSS tree plantation" className="w-full h-full object-cover" />
              </div>
              <div className="lg:order-1">
                <div className="eyebrow">National Service Scheme</div>
                <h2 className="section-title mt-3">The campus, in service of the community.</h2>
                <p className="prose-body mt-4 text-[13px]">
                  The NSS unit at D.K.D. College is a hub of social action: tree plantation drives,
                  cleanliness campaigns, literacy support, health awareness, disaster preparedness and
                  rural outreach. Students earn more than service hours — they learn empathy, teamwork
                  and the habit of citizenship.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Tree plantation", "Blood donation", "Health camps", "Literacy drives", "Swachh Bharat", "Yoga day"].map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div id="union" className="scroll-mt-28 rounded-2xl overflow-hidden relative" style={{ background: "var(--forest)" }}>
              <div className="absolute inset-0" style={{ backgroundImage: "url(/images/img14.jpg)", backgroundSize: "cover", opacity: 0.16 }} />
              <div className="relative p-8 md:p-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
                <div>
                  <div className="eyebrow" style={{ color: "#d8b36a" }}>Students' Union & societies</div>
                  <h2 className="section-title mt-3" style={{ color: "#fbf6e8" }}>A voice, a stage, a family.</h2>
                  <p className="text-[12.5px] leading-relaxed mt-4 max-w-xl" style={{ color: "rgba(255,255,255,.62)" }}>
                    The Students' Union represents the student body and organises the college's cultural
                    calendar — freshers' social, Saraswati Puja, Bihu celebrations, sports week, debates
                    and farewells. Literary, music, drama and quiz societies keep the creative life of
                    the campus humming.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {["Freshers' Social", "Bihu Utsav", "Annual Sports", "Debating", "Drama", "Music"].map((t) => (
                      <span key={t} className="badge" style={{ background: "rgba(255,255,255,.08)", color: "#f3e8cf", borderColor: "rgba(255,255,255,.16)" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3" id="culture">
                  <img src="/images/img15.jpg" alt="Cultural evening" className="rounded-xl w-full h-32 object-cover" />
                  <img src="/images/img8.jpg" alt="Yoga day" className="rounded-xl w-full h-32 object-cover" />
                  <img src="/images/img3.jpg" alt="Debate competition" className="rounded-xl w-full h-32 object-cover" />
                  <img src="/images/img24.jpeg" alt="NCC farewell" className="rounded-xl w-full h-32 object-cover" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  PLACEMENT                                                         */
/* ================================================================== */
export function Placement() {
  const steps = [
    ["Profile building", "Resume clinics, LinkedIn and portfolio support from the second year onward."],
    ["Skills & aptitude", "Quantitative aptitude, reasoning, communication and interview practice."],
    ["Industry exposure", "Guest lectures, internships, field visits and alumni mentoring."],
    ["Recruitment drives", "On- and off-campus opportunities with public and private employers."],
  ];
  return (
    <>
      <PageHero
        eyebrow="Placement & career"
        title={<>From potential to <span className="serif-italic" style={{ color: "#e9d29a" }}>possibility.</span></>}
        description="The Placement Cell helps students turn a strong education into meaningful work — through guidance, skills and connections."
        image="/images/img20.jpg"
        crumbs={[{ label: "Campus" }, { label: "Placement Cell" }]}
      />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Compass", "Career counselling"],
              ["UserCheck", "Mock interviews"],
              ["Handshake", "Industry linkages"],
              ["Award", "Scholarship guidance"],
            ].map(([icon, label], i) => (
              <Reveal key={label} delay={i * 0.05}>
                <div className="card p-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}><Icon name={icon} size={17} /></span>
                  <span className="text-[12px] font-semibold">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 mt-14 items-center">
            <Reveal>
              <SectionHeading eyebrow="How it works" title={<>A pathway, not a <span className="serif-italic text-gold">lottery.</span></>} desc="Placement is the outcome of four years of deliberate preparation. The Cell works with students at every stage." />
              <div className="mt-7 grid gap-3">
                {steps.map(([t, s], i) => (
                  <div key={t} className="flex gap-4 rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                    <span className="font-display text-lg shrink-0" style={{ color: "var(--gold)", width: 26 }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="text-[12.5px] font-semibold">{t}</div>
                      <div className="text-[11px] mt-0.5 leading-relaxed" style={{ color: "var(--muted)" }}>{s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                <img src="/images/img14.jpg" alt="Students at a campus event" className="w-full h-64 object-cover" />
                <div className="p-7" style={{ background: "var(--surface)" }}>
                  <h3 className="font-display text-xl">Where our graduates go</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Civil services", "Teaching & research", "Banking & finance", "Entrepreneurship", "Technology", "NGOs & social sector", "Higher studies"].map((t) => <Pill key={t}>{t}</Pill>)}
                  </div>
                  <p className="text-[11px] leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
                    Our alumni serve in the IAS, APS, banking, academia, research institutions, media and
                    businesses across India and abroad. The alumni network is one of the college's
                    greatest placement assets.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <div className="rounded-2xl border p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
            <div>
              <h3 className="font-display text-2xl">Recruiters and mentors, welcome.</h3>
              <p className="text-[12px] mt-2 max-w-xl" style={{ color: "var(--muted)" }}>If you would like to hire our students, offer an internship or mentor a young person, the Placement Cell would love to hear from you.</p>
            </div>
            <Link to="/contact" className="btn btn-forest shrink-0">Partner with us <Lucide.ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  ALUMNI                                                            */
/* ================================================================== */
export function Alumni() {
  const [form, setForm] = useState({ name: "", email: "", batch: "", dept: "" });
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setDone(true);
    setForm({ name: "", email: "", batch: "", dept: "" });
  };
  return (
    <>
      <PageHero
        eyebrow="Alumni"
        title={<>Once a D.K.D.ian, <span className="serif-italic" style={{ color: "#e9d29a" }}>always one.</span></>}
        description="Six decades of graduates carrying the college's values into classrooms, courtrooms, laboratories, businesses and public service."
        image="/images/img25.jpeg"
        crumbs={[{ label: "Campus" }, { label: "Alumni" }]}
      />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <Reveal>
              <SectionHeading eyebrow="The alumni association" title={<>A network that <span className="serif-italic text-gold">gives back.</span></>} />
              <div className="prose-body mt-5 text-[13.5px]">
                <p>
                  The D.K.D. College Alumni Association keeps former students connected to one another
                  and to the institution. Members mentor current students, share career opportunities,
                  contribute to infrastructure and scholarships, and return each year to celebrate the
                  college they helped build.
                </p>
                <p>
                  Alumni have distinguished themselves in civil service, academia, research, medicine,
                  law, media, banking and entrepreneurship. Their journeys remain the most persuasive
                  evidence of what a small-town college can make possible.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mt-7">
                {[["Mentor", "Guide a student"], ["Give", "Support a scholarship"], ["Reconnect", "Join an event"]].map(([t, s]) => (
                  <div key={t} className="rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                    <div className="font-display text-lg">{t}</div>
                    <div className="text-[10.5px] mt-1" style={{ color: "var(--muted)" }}>{s}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border p-7" style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Lucide.UserPlus size={16} style={{ color: "var(--gold)" }} />
                  <h3 className="font-display text-xl">Join the register</h3>
                </div>
                <p className="text-[11px] mb-5" style={{ color: "var(--muted)" }}>Add your name to the alumni directory and hear about reunions, mentoring and opportunities.</p>
                <form onSubmit={submit} className="grid gap-3">
                  <div>
                    <label className="label" htmlFor="al-name">Full name</label>
                    <input id="al-name" required className="field" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="label" htmlFor="al-email">Email</label>
                      <input id="al-email" required type="email" className="field" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="label" htmlFor="al-batch">Batch</label>
                      <input id="al-batch" className="field" placeholder="e.g. 2014" value={form.batch} onChange={(e) => setForm({ ...form, batch: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="label" htmlFor="al-dept">Department</label>
                    <select id="al-dept" className="field" value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })}>
                      <option value="">Select a department</option>
                      {["Assamese", "English", "Economics", "History", "Philosophy", "Political Science", "Geography", "Sanskrit", "Physics", "Chemistry", "Mathematics", "Botany", "Zoology", "Statistics", "Commerce", "Computer Science"].map((d) => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <button className="btn btn-gold justify-center mt-1">Add me to the network <Lucide.ArrowRight size={14} /></button>
                  {done && <p className="text-[11px] text-center" style={{ color: "var(--gold)" }}>Thank you! This is a demo form — connect it to your alumni database before launch.</p>}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="In their words" title={<>What the college <span className="serif-italic text-gold">gave them.</span></>} /></Reveal>
          <div className="grid md:grid-cols-2 gap-4 mt-9">
            {testimonials.map((t, i) => (
              <Reveal key={t.quote} delay={i * 0.05}>
                <div className="card p-6 h-full">
                  <Lucide.Quote size={18} style={{ color: "var(--gold)" }} />
                  <p className="font-display text-[16px] leading-relaxed mt-3">{t.quote}</p>
                  <div className="mt-4 pt-4 text-[10.5px] uppercase tracking-wider" style={{ borderTop: "1px solid var(--line)", color: "var(--muted)" }}>
                    {t.name} · {t.role}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  GALLERY                                                           */
/* ================================================================== */
export function Gallery() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const cats = ["All", ...new Set(gallery.map((g) => g.category))];
  const items = gallery.filter((g) => cat === "All" || g.category === cat);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active, items.length]);

  return (
    <>
      <PageHero
        eyebrow="Campus gallery"
        title={<>Sixty years, <span className="serif-italic" style={{ color: "#e9d29a" }}>countless moments.</span></>}
        description="Classrooms and celebrations, parades and plantations, quiet mornings and crowded auditoriums — a glimpse of life at D.K.D."
        image="/images/img37.jpg"
        crumbs={[{ label: "Campus" }, { label: "Gallery" }]}
      />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-7">
            {cats.map((c) => <button key={c} className={`tab ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="masonry columns-1 sm:columns-2 lg:columns-3">
            {items.map((g, i) => (
              <button key={g.src + i} onClick={() => setActive(i)} className="group relative block w-full overflow-hidden rounded-xl text-left" style={{ border: "1px solid var(--line)" }}>
                <img src={g.src} alt={g.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "4/3" : "1/1" }} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(to top, rgba(4,18,13,.85), transparent 60%)" }} />
                <span className="absolute left-4 bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <span className="block text-[9px] uppercase tracking-[0.14em]" style={{ color: "#e9d29a" }}>{g.category}</span>
                  <span className="block text-[12.5px] font-semibold mt-1" style={{ color: "#fff" }}>{g.title}</span>
                </span>
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(0,0,0,.4)", color: "#fff", backdropFilter: "blur(4px)" }}>
                  <Lucide.Maximize2 size={13} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10" style={{ background: "rgba(2,10,7,.94)" }} onClick={() => setActive(null)}>
            <button className="absolute top-5 right-5 w-11 h-11 rounded-full grid place-items-center" style={{ border: "1px solid rgba(255,255,255,.25)", color: "#fff" }} onClick={() => setActive(null)} aria-label="Close gallery">
              <Lucide.X size={18} />
            </button>
            <button className="absolute left-3 md:left-6 w-11 h-11 rounded-full grid place-items-center" style={{ border: "1px solid rgba(255,255,255,.25)", color: "#fff" }} onClick={(e) => { e.stopPropagation(); setActive((a) => (a - 1 + items.length) % items.length); }} aria-label="Previous image">
              <Lucide.ChevronLeft size={20} />
            </button>
            <motion.div key={active} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={items[active].src} alt={items[active].title} className="max-h-[78vh] w-auto mx-auto rounded-lg object-contain" />
              <div className="flex items-center justify-between gap-4 mt-3">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.16em]" style={{ color: "#d8b36a" }}>{items[active].category}</div>
                  <div className="text-[13px] mt-1" style={{ color: "rgba(255,255,255,.8)" }}>{items[active].title}</div>
                </div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,.4)" }}>{active + 1} / {items.length}</div>
              </div>
            </motion.div>
            <button className="absolute right-3 md:right-6 w-11 h-11 rounded-full grid place-items-center" style={{ border: "1px solid rgba(255,255,255,.25)", color: "#fff" }} onClick={(e) => { e.stopPropagation(); setActive((a) => (a + 1) % items.length); }} aria-label="Next image">
              <Lucide.ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  EVENTS                                                            */
/* ================================================================== */
function Countdown() {
  const target = useMemo(() => new Date("2027-01-26T09:00:00+05:30").getTime(), []);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return (
    <div className="flex gap-2">
      {[[d, "Days"], [h, "Hrs"], [m, "Min"], [s, "Sec"]].map(([v, l]) => (
        <div key={l} className="count-cell">
          <div className="font-display text-xl leading-none" style={{ color: "#fbf6e8" }}>{String(v).padStart(2, "0")}</div>
          <div className="text-[8px] uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,.45)" }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

export function Events() {
  const [year, setYear] = useState("All");
  const years = ["All", "2026", "2025"];
  const filtered = events.filter((e) => year === "All" || e.date.startsWith(year));
  const featured = events[0];
  return (
    <>
      <PageHero
        eyebrow="Events & celebrations"
        title={<>The calendar comes <span className="serif-italic" style={{ color: "#e9d29a" }}>alive.</span></>}
        description="Debates and festivals, farewells and freshers' welcomes, yoga mornings and tree-planting afternoons — this is the college in motion."
        image="/images/img3.jpg"
        crumbs={[{ label: "Campus" }, { label: "Events" }]}
      />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl" style={{ background: "var(--forest)" }}>
              <div className="absolute inset-0">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-30" />
              </div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(4,18,13,.96), rgba(4,18,13,.55))" }} />
              <div className="relative p-8 md:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Pill tone="gold">Featured event</Pill>
                    <span className="badge" style={{ background: "rgba(255,255,255,.08)", color: "#f3e8cf", borderColor: "rgba(255,255,255,.16)" }}>{featured.venue}</span>
                  </div>
                  <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.7rem)] leading-[1.1]" style={{ color: "#fbf6e8" }}>{featured.title}</h2>
                  <p className="text-[12.5px] leading-relaxed mt-3 max-w-xl" style={{ color: "rgba(255,255,255,.6)" }}>{featured.body}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-5 text-[11px]" style={{ color: "#e9d29a" }}>
                    <span className="flex items-center gap-1.5"><Lucide.CalendarDays size={13} /> {featured.displayDate}</span>
                    <span className="flex items-center gap-1.5"><Lucide.MapPin size={13} /> {featured.venue}</span>
                    <span className="flex items-center gap-1.5"><Lucide.Tag size={13} /> {featured.category}</span>
                  </div>
                </div>
                <div className="lg:text-right">
                  <div className="text-[9px] uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(255,255,255,.45)" }}>Upcoming · Republic Day 2027</div>
                  <Countdown />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-10 mb-6">
            <h2 className="font-display text-2xl">Event archive</h2>
            <div className="flex gap-2">
              {years.map((y) => <button key={y} className={`tab ${year === y ? "active" : ""}`} onClick={() => setYear(y)}>{y}</button>)}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((e, i) => (
              <Reveal key={e.id} delay={(i % 3) * 0.06}>
                <div className="group rounded-2xl overflow-hidden border h-full flex flex-col" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,18,13,.65), transparent 50%)" }} />
                    <span className="absolute top-3 left-3 badge badge-gold">{e.category}</span>
                    <div className="absolute bottom-3 left-3 text-[10px] flex items-center gap-1.5" style={{ color: "#f3e8cf" }}>
                      <Lucide.CalendarDays size={11} /> {e.displayDate}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-[17px] leading-snug">{e.title}</h3>
                    <p className="text-[11px] leading-relaxed mt-2 flex-1" style={{ color: "var(--muted)" }}>{e.summary}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-[10px] uppercase tracking-wider" style={{ color: "var(--gold)" }}>
                      <Lucide.MapPin size={11} /> {e.venue}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && <EmptyState icon="CalendarDays" title="No events in this year" text="Try another year." />}
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <div className="rounded-2xl border p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
            <div>
              <h3 className="font-display text-2xl">Never miss an update.</h3>
              <p className="text-[12px] mt-2 max-w-xl" style={{ color: "var(--muted)" }}>Official notices about events, examinations and admissions are published on the notice board and this website.</p>
            </div>
            <Link to="/notices" className="btn btn-forest shrink-0">View all notices <Lucide.ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
