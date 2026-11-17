import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
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
import { FacultyCard, FacultyProfileModal } from "../components/Faculty";
import { facultyByDepartment, facultyDirectory, photoFor } from "../data/faculty";
import { departments, downloads, programmes } from "../data/site";

/* ================================================================== */
/*  ACADEMIC PROGRAMMES                                               */
/* ================================================================== */
export function Academics() {
  const [stream, setStream] = useState("Arts");
  const p = programmes[stream];
  const streamDepts = departments.filter((d) => d.stream === stream);

  const stages = [
    { year: "Year 1", title: "Foundations", text: "Core concepts, communication, digital literacy and an introduction to the major.", credits: "40 credits" },
    { year: "Year 2", title: "Depth", text: "Disciplinary core, minor pathways and skill-enhancement courses.", credits: "40 credits" },
    { year: "Year 3", title: "Application", text: "Advanced papers, field or laboratory work, internships and projects.", credits: "40 credits" },
    { year: "Year 4", title: "Research / Honours", text: "Specialisation, dissertation or research project, and professional readiness.", credits: "40 credits" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title={<>Programmes made for the <span className="serif-italic" style={{ color: "#e9d29a" }}>world ahead.</span></>}
        description="Flexible, multidisciplinary Four Year Undergraduate Programmes under the National Education Policy 2020 — with multiple entry and exit options."
        image="/images/img14.jpg"
        crumbs={[{ label: "Academics" }]}
      >
        <div className="flex flex-wrap gap-2 mt-7">
          <Pill tone="gold">FYUGP</Pill>
          <Pill tone="gold">NEP 2020</Pill>
          <Pill tone="gold">Honours with Research</Pill>
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8">
            <Reveal>
              <SectionHeading eyebrow="Choose your stream" title={<>Three streams. <span className="serif-italic text-gold">Many futures.</span></>} />
            </Reveal>
            <div className="flex gap-2">
              {Object.keys(programmes).map((k) => (
                <button key={k} className={`tab ${stream === k ? "active" : ""}`} onClick={() => setStream(k)}>{k}</button>
              ))}
            </div>
          </div>

          <motion.div key={stream} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
            <div className="card p-7 md:p-9 relative overflow-hidden">
              <div className="absolute inset-0 jaapi opacity-30 pointer-events-none" />
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="w-14 h-14 rounded-2xl grid place-items-center" style={{ background: "var(--forest)", color: "#e9d29a" }}>
                      <Icon name={p.icon} size={24} />
                    </span>
                    <div>
                      <div className="text-[9.5px] uppercase tracking-[0.2em] font-bold" style={{ color: "var(--gold)" }}>{stream}</div>
                      <h2 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight">{p.name}</h2>
                    </div>
                  </div>
                  <Pill tone="green">4 Years · 8 Semesters</Pill>
                </div>
                <p className="text-[13px] leading-relaxed mt-5 max-w-xl" style={{ color: "var(--muted)" }}>{p.description}</p>

                <div className="mt-7">
                  <div className="text-[10px] uppercase tracking-[0.16em] font-bold mb-3" style={{ color: "var(--muted)" }}>Majors offered</div>
                  <div className="flex flex-wrap gap-2">
                    {p.majors.map((m) => (
                      <span key={m} className="px-3 py-1.5 rounded-lg text-[11.5px] font-medium border" style={{ borderColor: "var(--line)" }}>{m}</span>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5 mt-7 pt-6" style={{ borderTop: "1px solid var(--line)" }}>
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--muted)" }}>
                      <Lucide.Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} /> {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}>
              <div className="text-[10px] uppercase tracking-[0.16em] font-bold mb-4" style={{ color: "var(--gold-ink)" }}>Departments in {stream}</div>
              <div className="grid gap-2">
                {streamDepts.map((d) => (
                  <Link key={d.slug} to={`/departments/${d.slug}`} className="group flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 transition-colors" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
                    <span className="flex items-center gap-2.5 text-[12px]">
                      <Icon name={d.icon} size={14} style={{ color: "var(--gold)" }} /> {d.name}
                    </span>
                    <Lucide.ArrowUpRight size={13} className="opacity-30 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
              <Link to="/departments" className="link-arrow mt-5 text-[11px]">View all departments <Lucide.ArrowRight size={13} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="The FYUGP journey" title={<>Four years, <span className="serif-italic text-gold">one purposeful arc.</span></>} desc="Each year builds on the last — with the freedom to shape your own combination and the support to go as deep as you wish." align="center" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {stages.map((s, i) => (
              <Reveal key={s.year} delay={i * 0.07}>
                <div className="relative card p-6 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-3xl" style={{ color: "var(--gold)", opacity: 0.4 }}>0{i + 1}</span>
                    <span className="badge">{s.credits}</span>
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.16em] font-bold" style={{ color: "var(--gold)" }}>{s.year}</div>
                  <h3 className="font-display text-xl mt-1.5">{s.title}</h3>
                  <p className="text-[11.5px] leading-relaxed mt-2" style={{ color: "var(--muted)" }}>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-6 rounded-2xl border p-5 flex flex-wrap items-center gap-4 justify-between" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <div className="flex items-center gap-3">
                <Lucide.Info size={16} style={{ color: "var(--gold)" }} />
                <p className="text-[11.5px]" style={{ color: "var(--muted)" }}>Multiple entry and exit options are available with the appropriate certification, as per NEP 2020 and university regulations.</p>
              </div>
              <Link to="/downloads" className="link-arrow text-[11px]">FYUGP regulations <Lucide.Download size={12} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x grid lg:grid-cols-[1fr_1fr] gap-12">
          <Reveal>
            <SectionHeading eyebrow="Beyond the degree" title={<>Skills that travel <span className="serif-italic text-gold">with you.</span></>} desc="Add-on courses and co-curricular learning build the capabilities that employers and graduate schools look for." />
            <div className="mt-7 grid gap-3">
              {[
                ["Monitor Smartphone", "Computer applications & digital skills", "Certificate and diploma modules at the Computer Science Centre"],
                ["Languages", "Communicative English & Assamese", "Language labs and spoken-skills practice"],
                ["BriefcaseBusiness", "Entrepreneurship & incubation", "Idea development, mentoring and the Innovation Hub"],
                ["Compass", "Career readiness", "Aptitude, interviews and competitive-examination guidance"],
              ].map(([icon, t, s]) => (
                <div key={t} className="flex items-start gap-4 rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <span className="w-9 h-9 rounded-lg grid place-items-center shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}><Icon name={icon} size={16} /></span>
                  <div>
                    <div className="text-[12.5px] font-semibold">{t}</div>
                    <div className="text-[10.5px] mt-0.5" style={{ color: "var(--muted)" }}>{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border h-full min-h-[340px] relative" style={{ borderColor: "var(--line)" }}>
              <img src="/images/img9.jpg" alt="Students at work on campus" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,18,13,.95), rgba(4,18,13,.15))" }} />
              <div className="absolute bottom-0 p-7">
                <div className="eyebrow" style={{ color: "#d8b36a" }}>Learning by doing</div>
                <p className="font-display text-2xl mt-3 leading-snug" style={{ color: "#fbf6e8" }}>Field work, labs, internships and the community as a classroom.</p>
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
/*  DEPARTMENTS                                                       */
/* ================================================================== */
export function Departments() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const streams = ["All", "Arts", "Science", "Commerce"];
  const filtered = departments.filter((d) => {
    const okStream = filter === "All" || d.stream === filter;
    const okQ = `${d.name} ${d.blurb} ${d.subjects.join(" ")}`.toLowerCase().includes(q.toLowerCase());
    return okStream && okQ;
  });

  return (
    <>
      <PageHero
        eyebrow="Departments"
        title={<>Centres of <span className="serif-italic" style={{ color: "#e9d29a" }}>curiosity.</span></>}
        description="Eighteen departments across the arts, sciences and commerce — each with its own faculty, laboratories, societies and traditions."
        image="/images/img21.jpg"
        crumbs={[{ label: "Academics", href: "/academics" }, { label: "Departments" }]}
      />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {streams.map((s) => (
                <button key={s} className={`tab ${filter === s ? "active" : ""}`} onClick={() => setFilter(s)}>{s}</button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Lucide.Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--muted)" }} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search departments…" className="field pl-10" aria-label="Search departments" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((d, i) => {
              const hod = d.faculty.find((f) => f.role.toLowerCase().includes("hod") || f.role.toLowerCase().includes("ho d")) || d.faculty[0];
              return (
                <Reveal key={d.slug} delay={(i % 6) * 0.05}>
                  <Link to={`/departments/${d.slug}`} className="group card p-6 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-[0.06] group-hover:opacity-[0.13] transition-opacity" style={{ background: "var(--gold)" }} />
                    <div className="flex items-start justify-between mb-5">
                      <span className="w-12 h-12 rounded-xl grid place-items-center" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                        <Icon name={d.icon} size={21} />
                      </span>
                      <Pill>{d.stream}</Pill>
                    </div>
                    <h2 className="font-display text-[22px] leading-tight">{d.name}</h2>
                    <p className="text-[11.5px] leading-relaxed mt-2 flex-1" style={{ color: "var(--muted)" }}>{d.blurb.slice(0, 118)}…</p>
                    <div className="mt-5 pt-4 space-y-2" style={{ borderTop: "1px solid var(--line)" }}>
                      <div className="flex items-center gap-2 text-[10.5px]" style={{ color: "var(--muted)" }}>
                        <Lucide.UserRound size={11} style={{ color: "var(--gold)" }} />
                        <span className="truncate">{hod.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>{d.faculty.length} faculty</span>
                        <span className="flex items-center gap-1 text-[10.5px] font-bold" style={{ color: "var(--gold-ink)" }}>Explore <Lucide.ArrowRight size={11} /></span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <EmptyState title="No departments found" text="Try a different stream or search term." />
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  DEPARTMENT DETAIL                                                 */
/* ================================================================== */
export function DepartmentDetail() {
  const { slug } = useParams();
  const d = departments.find((x) => x.slug === slug);
  const [tab, setTab] = useState("About");
  const [profile, setProfile] = useState(null);
  if (!d) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="section-title">Department not found</h1>
        <p className="text-muted mt-3">The department you are looking for may have moved.</p>
        <Link to="/departments" className="btn btn-gold mt-6">All departments</Link>
      </div>
    );
  }
  const others = departments.filter((x) => x.slug !== d.slug).slice(0, 4);
  const tabs = ["About", "Faculty", "Subjects & Syllabi", "Facilities", "Activities"];

  return (
    <>
      <PageHero
        eyebrow={`${d.stream} · Department`}
        title={<>{d.name}</>}
        description={d.motto}
        image="/images/img21.jpg"
        crumbs={[{ label: "Academics", href: "/academics" }, { label: "Departments", href: "/departments" }, { label: d.name }]}
      >
        <div className="flex flex-wrap gap-2 mt-7">
          <Pill tone="gold">Established {d.established}</Pill>
          <Pill tone="gold">{d.faculty.length} faculty members</Pill>
          <Pill tone="gold">FYUGP</Pill>
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10">
            <div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {tabs.map((t) => (
                  <button key={t} className={`tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>{t}</button>
                ))}
              </div>

              <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-7">
                {tab === "About" && (
                  <div>
                    <h2 className="font-display text-2xl">The department</h2>
                    <p className="prose-body mt-4 text-[13.5px]">{d.blurb}</p>
                    <p className="prose-body mt-3 text-[13.5px]">
                      Established in {d.established}, the department combines a rigorous academic
                      curriculum with fieldwork, laboratory practice, seminars and a lively calendar of
                      departmental activities. Faculty members are actively engaged in research and in
                      the academic life of Dibrugarh University and beyond.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      {d.subjects.map((s) => (
                        <div key={s} className="flex items-center gap-3 rounded-xl border p-4 text-[12px]" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--gold)" }} /> {s}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 rounded-2xl p-6" style={{ background: "var(--forest)", color: "#f5eeda" }}>
                      <div className="eyebrow" style={{ color: "#d8b36a" }}>Departmental motto</div>
                      <p className="font-display text-xl mt-3">{d.motto}</p>
                    </div>
                  </div>
                )}

                {tab === "Faculty" && (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div>
                        <h2 className="font-display text-2xl">Faculty profile</h2>
                        <p className="text-[11px] mt-1" style={{ color: "var(--muted)" }}>
                          Tap a portrait to read qualifications and teaching areas.
                        </p>
                      </div>
                      <span className="badge">{d.faculty.length} members</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {(facultyByDepartment[d.slug] || []).map((member) => (
                        <FacultyCard key={member.id} member={member} onOpen={setProfile} />
                      ))}
                    </div>
                  </div>
                )}

                {tab === "Subjects & Syllabi" && (
                  <div>
                    <h2 className="font-display text-2xl">Courses & syllabus</h2>
                    <p className="prose-body mt-3 text-[13px]">The department follows the FYUGP curriculum of Dibrugarh University, delivered under the college's autonomous academic framework.</p>
                    <div className="mt-5 divide-y rounded-xl border overflow-hidden" style={{ borderColor: "var(--line)" }}>
                      {d.subjects.map((s, i) => (
                        <div key={s} className="flex items-center justify-between gap-4 px-5 py-4" style={{ background: "var(--surface)" }}>
                          <div className="flex items-center gap-4">
                            <span className="font-display text-sm" style={{ color: "var(--gold)" }}>{String(i + 1).padStart(2, "0")}</span>
                            <div>
                              <div className="text-[12.5px] font-medium">{s}</div>
                              <div className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>Core / elective offerings</div>
                            </div>
                          </div>
                          <Lucide.FileText size={15} style={{ color: "var(--muted)" }} />
                        </div>
                      ))}
                    </div>
                    <Link to="/downloads" className="link-arrow mt-5">Download syllabus & regulations <Lucide.Download size={13} /></Link>
                  </div>
                )}

                {tab === "Facilities" && (
                  <div>
                    <h2 className="font-display text-2xl">Facilities</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mt-5">
                      {d.facilities.map((f) => (
                        <div key={f} className="rounded-xl border p-5" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                          <Lucide.CheckCircle2 size={17} style={{ color: "var(--gold)" }} />
                          <p className="text-[12px] mt-3 leading-relaxed">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "Activities" && (
                  <div>
                    <h2 className="font-display text-2xl">Departmental activities</h2>
                    <div className="mt-5 grid gap-3">
                      {d.activities.map((a, i) => (
                        <div key={a} className="flex items-center gap-4 rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                          <span className="w-8 h-8 rounded-lg grid place-items-center shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                            <Lucide.CalendarDays size={14} />
                          </span>
                          <span className="text-[12.5px]">{a}</span>
                          <span className="ml-auto idx">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-28 h-fit">
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  {photoFor(d.faculty[0].name) ? (
                    <img src={photoFor(d.faculty[0].name)} alt={d.faculty[0].name} className="w-12 h-12 rounded-full object-cover shrink-0" style={{ border: "2px solid color-mix(in srgb, var(--gold) 55%, transparent)" }} />
                  ) : (
                    <span className="w-12 h-12 rounded-full grid place-items-center shrink-0 font-display text-[13px]" style={{ background: "var(--forest)", color: "#e9d29a" }}>
                      {d.faculty[0].name.replace(/^(Dr\.|Ms\.|Mr\.|Sri|Md\.)\s*/i, "").split(" ").slice(0, 2).map((x) => x[0]).join("")}
                    </span>
                  )}
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em]" style={{ color: "var(--gold-ink)" }}>Head of Department</div>
                    <div className="text-[12.5px] font-semibold">{d.faculty[0].name}</div>
                  </div>
                </div>
                <div className="mt-5 pt-4 space-y-2.5 text-[11px]" style={{ borderTop: "1px solid var(--line)", color: "var(--muted)" }}>
                  <div className="flex items-center gap-2"><Lucide.Users size={12} className="text-gold" /> {d.faculty.length} faculty members</div>
                  <div className="flex items-center gap-2"><Lucide.Building2 size={12} className="text-gold" /> {d.stream} Block</div>
                  <div className="flex items-center gap-2"><Lucide.Mail size={12} className="text-gold" /> department@dkdcollege.ac.in</div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                <img src="/images/img9.jpg" alt={`${d.name} department`} className="w-full h-40 object-cover" />
                <div className="p-5" style={{ background: "var(--surface)" }}>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>Interested in studying {d.name}? Applications for the 2026–27 session are open.</p>
                  <Link to="/admissions" className="btn btn-gold btn-sm w-full justify-center mt-4">Apply now <Lucide.ArrowUpRight size={12} /></Link>
                </div>
              </div>

              <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}>
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold mb-3" style={{ color: "var(--gold-ink)" }}>Other departments</div>
                <div className="grid gap-2">
                  {others.map((o) => (
                    <Link key={o.slug} to={`/departments/${o.slug}`} className="flex items-center justify-between gap-2 text-[11.5px] py-1.5" style={{ color: "var(--muted)" }}>
                      {o.name} <Lucide.ArrowUpRight size={11} />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FacultyProfileModal member={profile} onClose={() => setProfile(null)} />
      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  FACULTY DIRECTORY                                                 */
/* ================================================================== */
export function Faculty() {
  const [q, setQ] = useState("");
  const [stream, setStream] = useState("All");
  const [dept, setDept] = useState("All");
  const [profile, setProfile] = useState(null);

  const deptOptions = useMemo(
    () =>
      departments
        .filter((d) => stream === "All" || d.stream === stream)
        .map((d) => ({ slug: d.slug, name: d.name })),
    [stream]
  );

  const filtered = facultyDirectory.filter((f) => {
    const okS = stream === "All" || f.stream === stream;
    const okD = dept === "All" || f.departmentSlug === dept;
    const haystack = `${f.name} ${f.department} ${f.role} ${f.qual} ${f.subjects.join(" ")}`.toLowerCase();
    return okS && okD && haystack.includes(q.trim().toLowerCase());
  });

  function chooseStream(next) {
    setStream(next);
    setDept("All");
  }

  const departmentsWithFaculty = useMemo(() => {
    return departments
      .map((d) => {
        const members = facultyByDepartment[d.slug] || [];
        const filteredMembers = members.filter((f) => {
          const okS = stream === "All" || f.stream === stream;
          const okD = dept === "All" || f.departmentSlug === dept;
          const haystack = `${f.name} ${f.department} ${f.role} ${f.qual} ${f.subjects.join(" ")}`.toLowerCase();
          return okS && okD && haystack.includes(q.trim().toLowerCase());
        });
        return { dept: d, members: filteredMembers };
      })
      .filter((d) => d.members.length > 0);
  }, [q, stream, dept]);

  const totalFiltered = departmentsWithFaculty.reduce((sum, d) => sum + d.members.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Faculty directory"
        title={<>Teachers who <span className="serif-italic" style={{ color: "#e9d29a" }}>change lives.</span></>}
        description="Meet the scholars, mentors and practitioners who make D.K.D. College a place of serious learning and genuine care."
        image="/images/img20.jpg"
        crumbs={[{ label: "Academics", href: "/academics" }, { label: "Faculty" }]}
      />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid grid-cols-3 gap-3 mb-8 max-w-xl">
            {[
              [facultyDirectory.length, "Total faculty"],
              [departments.length, "Departments"],
              ["A+", "NAAC grade"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border px-4 py-3" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                <div className="font-display text-xl" style={{ color: "var(--gold-ink)" }}>{value}</div>
                <div className="text-[9px] uppercase tracking-[0.1em] mt-0.5" style={{ color: "var(--muted)" }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Arts", "Science", "Commerce"].map((s) => (
                <button key={s} className={`tab ${stream === s ? "active" : ""}`} onClick={() => chooseStream(s)}>{s}</button>
              ))}
              <span className="hidden sm:block w-px h-5 mx-1" style={{ background: "var(--line)" }} />
              <div className="relative flex-1 min-w-[190px] sm:max-w-xs">
                <Lucide.Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--muted)" }} />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, department, qualification…" className="field pl-10" aria-label="Search faculty" />
              </div>
              <select value={dept} onChange={(e) => setDept(e.target.value)} className="field w-full sm:w-auto sm:min-w-[170px]" aria-label="Filter by department">
                <option value="All">All departments</option>
                {deptOptions.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
              </select>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                Showing <strong style={{ color: "var(--text)" }}>{totalFiltered}</strong> of {facultyDirectory.length} faculty members
              </p>
              {(q || stream !== "All" || dept !== "All") && (
                <button type="button" onClick={() => { setQ(""); setStream("All"); setDept("All"); }} className="text-[10.5px] font-semibold flex items-center gap-1" style={{ color: "var(--gold-ink)" }}>
                  <Lucide.X size={11} /> Clear filters
                </button>
              )}
            </div>
          </div>

          {departmentsWithFaculty.length === 0 ? (
            <EmptyState icon="Users" title="No faculty found" text="Try a different name, stream or department." />
          ) : (
            <>
              <div className="mb-6">
                <div className="eyebrow mb-3">Departments &amp; faculty</div>
                <h2 className="section-title mb-6">Every department, every teacher</h2>
                <p className="text-[12.5px] mb-6" style={{ color: "var(--muted)" }}>
                  Browse faculty by department. Tap any portrait to read full qualifications, experience and contact details.
                </p>
              </div>

              {departmentsWithFaculty.map(({ dept: d, members }) => (
                <section key={d.slug} className="mb-12 rounded-2xl border overflow-hidden" style={{ borderColor: "var(--line)" }}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 md:p-8 relative overflow-hidden" style={{ background: "var(--surface)" }}>
                    <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-[0.04]" style={{ background: "var(--gold)" }} />
                    <span className="shrink-0 w-14 h-14 rounded-2xl grid place-items-center flex-shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                      <Icon name={d.icon} size={22} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="badge">{d.stream}</span>
                        <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: "var(--muted)" }}>Est. {d.established}</span>
                      </div>
                      <h3 className="font-display text-[clamp(1.3rem,2vw,1.6rem)] leading-tight">{d.name}</h3>
                      <p className="text-[11px] mt-1.5" style={{ color: "var(--muted)" }}>{d.blurb.slice(0, 100)}…</p>
                    </div>
                    <Link to={`/departments/${d.slug}`} className="btn btn-outline btn-sm shrink-0 whitespace-nowrap">
                      View department <Lucide.ArrowRight size={12} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-6 md:p-8">
                    {members.map((f, i) => (
                      <Reveal key={f.id} delay={(i % 10) * 0.02}>
                        <FacultyCard member={f} onOpen={setProfile} compact />
                      </Reveal>
                    ))}
                  </div>
                </section>
              ))}
            </>
          )}
        </div>
      </section>

      <FacultyProfileModal member={profile} onClose={() => setProfile(null)} />
      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  ACADEMIC CALENDAR                                                 */
/* ================================================================== */
export function AcademicCalendar() {
  const terms = [
    { title: "Odd Semester", period: "July – December 2026", items: [["Admission & registration", "1 – 31 July"], ["Commencement of classes", "1 August"], ["Internal assessment I", "September"], ["Internal assessment II", "October"], ["End-semester examinations", "November – December"], ["Semester break", "Late December"]] },
    { title: "Even Semester", period: "January – June 2027", items: [["Commencement of classes", "5 January"], ["Republic Day", "26 January"], ["Internal assessment I", "February"], ["Internal assessment II", "April"], ["End-semester examinations", "May – June"], ["Summer vacation", "June – July"]] },
  ];
  const holidays = [
    ["Independence Day", "15 August 2026"],
    ["Teachers' Day", "5 September 2026"],
    ["Gandhi Jayanti", "2 October 2026"],
    ["Durga Puja", "October 2026"],
    ["Diwali", "November 2026"],
    ["Magh Bihu", "January 2027"],
    ["Republic Day", "26 January 2027"],
    ["Saraswati Puja", "January 2027"],
  ];
  return (
    <>
      <PageHero
        eyebrow="Academic calendar"
        title={<>The rhythm of the <span className="serif-italic" style={{ color: "#e9d29a" }}>academic year.</span></>}
        description="Key dates, semesters, assessments and holidays — all in one place. Always confirm details with the official notice board."
        image="/images/img37.jpg"
        crumbs={[{ label: "Academics", href: "/academics" }, { label: "Academic Calendar" }]}
      />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-5">
            {terms.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.18em] font-bold" style={{ color: "var(--gold)" }}>Term {i + 1}</div>
                      <h2 className="font-display text-2xl mt-1">{t.title}</h2>
                    </div>
                    <Pill>{t.period}</Pill>
                  </div>
                  <div className="divide-y" style={{ borderColor: "var(--line)" }}>
                    {t.items.map(([label, when], n) => (
                      <div key={label} className="flex items-center justify-between gap-4 py-3 text-[12px]" style={{ borderTop: n === 0 ? "none" : "1px solid var(--line)" }}>
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} /> {label}
                        </span>
                        <span className="text-[11px] text-right" style={{ color: "var(--muted)" }}>{when}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-5 mt-5">
            <Reveal>
              <div className="rounded-2xl border p-7" style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}>
                <h3 className="font-display text-xl mb-5">Holiday list</h3>
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {holidays.map(([h, d]) => (
                    <div key={h} className="flex items-center justify-between text-[11.5px] gap-3">
                      <span>{h}</span>
                      <span style={{ color: "var(--muted)" }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl overflow-hidden relative h-full min-h-[260px]" style={{ background: "var(--forest)" }}>
                <div className="absolute inset-0 jaapi opacity-50" />
                <div className="relative p-7">
                  <h3 className="font-display text-xl" style={{ color: "#fbf6e8" }}>Download the calendar</h3>
                  <p className="text-[11.5px] mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>The official academic calendar and holiday list are published as PDFs by the college office.</p>
                  <div className="mt-5 space-y-2">
                    {["Academic Calendar 2026–27", "Holiday List 2026", "Class Routine"].map((x) => (
                      <Link key={x} to="/downloads" className="flex items-center justify-between rounded-lg px-4 py-3 text-[11.5px]" style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: "#f3e8cf" }}>
                        {x} <Lucide.Download size={13} style={{ color: "#d8b36a" }} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  DOWNLOADS                                                         */
/* ================================================================== */
export function Downloads() {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(downloads.map((d) => d.category))];
  const list = downloads.filter((d) => cat === "All" || d.category === cat);
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title={<>Everything you need, <span className="serif-italic" style={{ color: "#e9d29a" }}>in one place.</span></>}
        description="Prospectus, forms, regulations, reports and official documents — ready to download."
        image="/images/img31.jpg"
        crumbs={[{ label: "Downloads" }]}
      />
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-8">
            {cats.map((c) => <button key={c} className={`tab ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="card overflow-hidden">
            {list.map((d, i) => (
              <div key={d.title} className="flex items-center gap-4 px-5 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
                <span className="w-10 h-10 rounded-lg grid place-items-center shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                  <Lucide.FileText size={17} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[12.5px] font-semibold truncate">{d.title}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>{d.meta} · {d.size}</div>
                </div>
                <span className="badge hidden sm:inline-flex">{d.category}</span>
                <button className="icon-btn shrink-0" aria-label={`Download ${d.title}`} title="Sample link — connect to the official PDF">
                  <Lucide.Download size={14} />
                </button>
              </div>
            ))}
          </div>
          <p className="text-[10.5px] mt-4 flex items-start gap-2" style={{ color: "var(--muted)" }}>
            <Lucide.Info size={13} className="mt-0.5 shrink-0" /> Demo website: download buttons are placeholders. Link them to the official PDFs before going live.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
