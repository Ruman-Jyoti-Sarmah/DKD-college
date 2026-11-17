import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import * as Lucide from "lucide-react";
import {
  Accordion,
  CtaBand,
  EmptyState,
  Icon,
  MapCard,
  PageHero,
  Pill,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "../components/UI";
import { college, committees, downloads } from "../data/site";

/* ================================================================== */
/*  NAAC & ACCREDITATION                                              */
/* ================================================================== */
const criteria = [
  {
    n: "01",
    title: "Curricular Aspects",
    icon: "BookOpenCheck",
    text: "Outcome-based FYUGP curricula, interdisciplinary minors and a robust feedback loop into academic planning.",
  },
  {
    n: "02",
    title: "Teaching, Learning & Evaluation",
    icon: "GraduationCap",
    text: "Mentored learning, ICT-enabled classrooms, continuous internal assessment and transparent examination practices.",
  },
  {
    n: "03",
    title: "Research, Innovation & Extension",
    icon: "FlaskConical",
    text: "Faculty research, student projects, the Innovation Hub and extension work rooted in the life of the district.",
  },
  {
    n: "04",
    title: "Infrastructure & Learning Resources",
    icon: "Library",
    text: "A nine-acre green campus, well-equipped laboratories, a central library and expanding digital infrastructure.",
  },
  {
    n: "05",
    title: "Student Support & Progression",
    icon: "HeartHandshake",
    text: "Scholarships, counselling, hostel support, career guidance and a strong record of student progression.",
  },
  {
    n: "06",
    title: "Governance, Leadership & Management",
    icon: "Landmark",
    text: "Participative governance through the Governing Body, IQAC and a wide network of statutory committees.",
  },
  {
    n: "07",
    title: "Institutional Values & Best Practices",
    icon: "Leaf",
    text: "Environmental stewardship, inclusivity, gender equity and community service embedded in campus culture.",
  },
];

const iqacObjectives = [
  "Develop a conscious, consistent and catalytic system for improving academic and administrative performance.",
  "Promote measures for institutional functioning towards quality enhancement through internalisation of quality culture.",
  "Ensure timely, efficient and progressive performance of academic, administrative and financial tasks.",
  "Facilitate the creation of a learner-centric environment conducive to quality education and faculty maturation.",
  "Encourage self-evaluation, accountability, autonomy and innovations in higher education.",
];

const reports = [
  {
    title: "Self Study Report (SSR)",
    desc: "The comprehensive self-assessment submitted for the fourth accreditation cycle.",
    icon: "FileText",
    meta: "NAAC · Fourth Cycle",
  },
  {
    title: "AQAR 2023–24",
    desc: "Annual Quality Assurance Report documenting the year's quality initiatives and outcomes.",
    icon: "ClipboardCheck",
    meta: "Annual report",
  },
  {
    title: "NIRF Data 2025",
    desc: "Institutional data submitted to the National Institutional Ranking Framework.",
    icon: "BarChart3",
    meta: "Ranking data",
  },
  {
    title: "IIQA Submission",
    desc: "Institutional Information for Quality Assessment, the entry point for accreditation.",
    icon: "FileCheck2",
    meta: "Quality assessment",
  },
];

export function Naac() {
  return (
    <>
      <PageHero
        eyebrow="NAAC & accreditation"
        title={
          <>
            Recognised for{" "}
            <span className="serif-italic" style={{ color: "#e9d29a" }}>
              real quality.
            </span>
          </>
        }
        description="D.K.D. College is accredited with an A+ grade and a CGPA of 3.37 by the National Assessment and Accreditation Council — an independent affirmation of six decades of teaching, research and service."
        image="/images/img21.jpg"
        crumbs={[{ label: "About", href: "/about" }, { label: "NAAC" }]}
      >
        <div className="flex flex-wrap gap-2 mt-7">
          <Pill tone="gold">NAAC A+</Pill>
          <Pill tone="gold">CGPA 3.37</Pill>
          <Pill tone="gold">Fourth Cycle</Pill>
        </div>
      </PageHero>

      {/* accreditation snapshot */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-2xl h-full min-h-[320px] p-8 md:p-10 flex flex-col justify-between"
                style={{ background: "var(--forest)" }}
              >
                <div className="absolute inset-0 jaapi opacity-60" />
                <div
                  className="absolute -right-16 -top-16 w-64 h-64 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(216,179,106,.28), transparent 65%)",
                  }}
                />
                <div className="relative">
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: "#d8b36a" }}
                  >
                    National Assessment & Accreditation Council
                  </div>
                  <div className="flex items-end gap-3 mt-5">
                    <span
                      className="font-display leading-none"
                      style={{ fontSize: "clamp(4.5rem,12vw,7rem)", color: "#f0e2bd" }}
                    >
                      A+
                    </span>
                    <span
                      className="mb-3 text-[11px] uppercase tracking-[0.18em]"
                      style={{ color: "rgba(255,255,255,.55)" }}
                    >
                      Grade
                    </span>
                  </div>
                  <p
                    className="text-[12.5px] leading-relaxed mt-4 max-w-sm"
                    style={{ color: "rgba(255,255,255,.62)" }}
                  >
                    Accredited in the fourth cycle with a cumulative grade point
                    average that places the college among the leading
                    autonomous institutions of Assam.
                  </p>
                </div>

                <div
                  className="relative grid grid-cols-3 gap-4 pt-6 mt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}
                >
                  <div>
                    <div className="font-display text-2xl" style={{ color: "#e9d29a" }}>
                      3.37
                    </div>
                    <div
                      className="text-[9px] uppercase tracking-[0.14em] mt-1"
                      style={{ color: "rgba(255,255,255,.45)" }}
                    >
                      CGPA
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl" style={{ color: "#e9d29a" }}>
                      IV
                    </div>
                    <div
                      className="text-[9px] uppercase tracking-[0.14em] mt-1"
                      style={{ color: "rgba(255,255,255,.45)" }}
                    >
                      Cycle
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl" style={{ color: "#e9d29a" }}>
                      7
                    </div>
                    <div
                      className="text-[9px] uppercase tracking-[0.14em] mt-1"
                      style={{ color: "rgba(255,255,255,.45)" }}
                    >
                      Criteria
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full flex flex-col justify-center">
                <SectionHeading
                  eyebrow="What accreditation means"
                  title="A promise, independently verified."
                  desc="Accreditation is not a plaque on a wall. It is a rigorous, peer-reviewed assessment of everything that makes a college work — from the way a first-year student is welcomed to the way research is published and the way the campus is governed."
                />
                <div className="grid sm:grid-cols-2 gap-3 mt-7">
                  {[
                    ["Peer-reviewed", "Assessed by independent academic peers against national benchmarks."],
                    ["Student-centred", "Teaching, support and outcomes are placed at the centre of evaluation."],
                    ["Continuously improving", "IQAC turns assessment findings into year-round action."],
                    ["Publicly accountable", "Reports and disclosures are available in the public domain."],
                  ].map(([t, d]) => (
                    <div
                      key={t}
                      className="rounded-xl border p-4"
                      style={{
                        borderColor: "var(--line)",
                        background: "var(--surface)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Lucide.CheckCircle2
                          size={14}
                          style={{ color: "var(--gold)" }}
                        />
                        <span className="text-[12px] font-semibold">{t}</span>
                      </div>
                      <p
                        className="text-[10.5px] leading-relaxed mt-1.5"
                        style={{ color: "var(--muted)" }}
                      >
                        {d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* criteria */}
          <div className="mt-16">
            <SectionHeading
              eyebrow="The seven criteria"
              title="How the assessment is built."
              desc="NAAC evaluates institutions across seven interdependent criteria. Together they describe a college as a living academic community."
            />
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
              {criteria.map((c) => (
                <StaggerItem key={c.n} className={c.n === "07" ? "lg:col-span-1" : ""}>
                  <div className="card p-5 h-full">
                    <div className="flex items-start justify-between">
                      <span
                        className="w-10 h-10 rounded-xl grid place-items-center"
                        style={{ background: "var(--bg-alt)", color: "var(--gold)" }}
                      >
                        <Icon name={c.icon} size={18} />
                      </span>
                      <span
                        className="font-display text-xl"
                        style={{ color: "var(--line-strong)" }}
                      >
                        {c.n}
                      </span>
                    </div>
                    <h3 className="font-display text-[16px] leading-snug mt-4">
                      {c.title}
                    </h3>
                    <p
                      className="text-[11px] leading-relaxed mt-2"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div
                  className="rounded-2xl p-5 h-full relative overflow-hidden"
                  style={{ background: "var(--forest)" }}
                >
                  <div className="absolute inset-0 dots opacity-10" />
                  <div className="relative">
                    <Icon name="BadgeCheck" size={22} style={{ color: "#e9d29a" }} />
                    <h3
                      className="font-display text-[17px] leading-snug mt-4"
                      style={{ color: "#fbf6e8" }}
                    >
                      Sustained excellence
                    </h3>
                    <p
                      className="text-[11px] leading-relaxed mt-2"
                      style={{ color: "rgba(255,255,255,.6)" }}
                    >
                      A+ grade in the fourth cycle, built on a decade of
                      consistent quality improvement.
                    </p>
                    <Link
                      to="/downloads"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] mt-4"
                      style={{ color: "#e9d29a" }}
                    >
                      Reports <Lucide.ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* IQAC */}
      <section
        id="iqac"
        className="section scroll-mt-24"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Internal Quality Assurance Cell"
                  title="Quality is a habit, not an event."
                  desc="The IQAC is the engine of continuous improvement at D.K.D. College. It plans, monitors and reviews academic and administrative processes, and translates the college's mission into measurable action."
                />
                <div className="mt-7 space-y-3">
                  {iqacObjectives.map((o, i) => (
                    <div key={o} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-6 h-6 rounded-full grid place-items-center shrink-0 text-[10px] font-bold"
                        style={{ background: "var(--forest)", color: "#e9d29a" }}
                      >
                        {i + 1}
                      </span>
                      <p
                        className="text-[12px] leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        {o}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div
                className="rounded-2xl border overflow-hidden h-full"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
              >
                <div className="px-6 py-5" style={{ background: "var(--forest)" }}>
                  <div
                    className="text-[9px] uppercase tracking-[0.2em] font-bold"
                    style={{ color: "#d8b36a" }}
                  >
                    IQAC at a glance
                  </div>
                  <h3
                    className="font-display text-xl mt-1"
                    style={{ color: "#fbf6e8" }}
                  >
                    Composition & functions
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-0">
                    {[
                      ["Chairperson", "Principal, D.K.D. College"],
                      ["Coordinator", "Senior faculty member, IQAC"],
                      ["Members", "Heads of departments, senior faculty, administrative staff"],
                      ["External members", "Academicians and community representatives"],
                      ["Student representation", "Students' Union representatives"],
                    ].map(([k, v], i) => (
                      <div
                        key={k}
                        className="py-3"
                        style={{
                          borderTop: i === 0 ? "none" : "1px solid var(--line)",
                        }}
                      >
                        <div
                          className="text-[9px] uppercase tracking-[0.16em] font-bold"
                          style={{ color: "var(--gold)" }}
                        >
                          {k}
                        </div>
                        <div className="text-[12px] mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 rounded-xl p-4 flex items-start gap-3"
                    style={{ background: "var(--bg-alt)" }}
                  >
                    <Lucide.Info
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--gold)" }}
                    />
                    <p
                      className="text-[10.5px] leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      IQAC meeting minutes, AQARs and quality initiatives are
                      available from the college office and the Downloads page.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* documents */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Public disclosures"
              title="Reports & submissions."
              desc="Accreditation documents, annual quality reports and ranking submissions, available for public scrutiny."
            />
            <Link to="/downloads" className="btn btn-outline btn-sm">
              All downloads <Lucide.ArrowUpRight size={14} />
            </Link>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {reports.map((r) => (
              <StaggerItem key={r.title}>
                <Link to="/downloads" className="card p-5 h-full flex flex-col group">
                  <div className="flex items-start justify-between">
                    <span
                      className="w-10 h-10 rounded-xl grid place-items-center"
                      style={{ background: "var(--bg-alt)", color: "var(--gold)" }}
                    >
                      <Icon name={r.icon} size={18} />
                    </span>
                    <Lucide.Download
                      size={15}
                      style={{ color: "var(--muted)" }}
                      className="group-hover:text-[color:var(--gold)] transition-colors"
                    />
                  </div>
                  <span
                    className="text-[9px] uppercase tracking-[0.16em] font-bold mt-4"
                    style={{ color: "var(--gold)" }}
                  >
                    {r.meta}
                  </span>
                  <h3 className="font-display text-[16px] leading-snug mt-1.5">
                    {r.title}
                  </h3>
                  <p
                    className="text-[10.5px] leading-relaxed mt-2 flex-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {r.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] mt-4"
                    style={{ color: "var(--gold)" }}
                  >
                    View document <Lucide.ArrowRight size={12} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <div
            className="mt-6 rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
            style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}
          >
            <div className="flex items-start gap-4">
              <span
                className="w-11 h-11 rounded-xl grid place-items-center shrink-0"
                style={{ background: "var(--forest)", color: "#e9d29a" }}
              >
                <Icon name="FileSearch" size={19} />
              </span>
              <div>
                <h3 className="font-display text-lg">Right to Information</h3>
                <p
                  className="text-[11.5px] mt-1 max-w-xl leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  As a public-funded institution, D.K.D. College proactively
                  discloses information and responds to RTI requests through its
                  designated Public Information Officer.
                </p>
              </div>
            </div>
            <Link to="/committees" className="btn btn-forest btn-sm shrink-0">
              RTI Cell <Lucide.ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  COMMITTEES & CELLS                                                */
/* ================================================================== */
export function Committees() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return committees;
    return committees.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.purpose.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Governance & welfare"
        title={
          <>
            Many hands,{" "}
            <span className="serif-italic" style={{ color: "#e9d29a" }}>
              one college.
            </span>
          </>
        }
        description="Statutory committees, cells and hubs that keep the campus safe, inclusive, accountable and alive — and give every student a place to turn."
        image="/images/img37.jpg"
        crumbs={[{ label: "About", href: "/about" }, { label: "Committees" }]}
      >
        <div className="flex flex-wrap gap-2 mt-7">
          <Pill tone="gold">{committees.length} committees & cells</Pill>
          <Pill tone="gold">Student representation</Pill>
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
            <SectionHeading
              eyebrow="Find the right support"
              title="Committees & cells."
              desc="Search by name or purpose to find the team that can help."
            />
            <label className="relative w-full md:w-80 shrink-0">
              <Lucide.Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--muted)" }}
              />
              <input
                className="field pl-11"
                placeholder="Search committees…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search committees"
              />
            </label>
          </div>

          {filtered.length ? (
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((c, i) => (
                <StaggerItem key={c.name}>
                  <div className="card p-5 h-full flex flex-col group">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="w-11 h-11 rounded-xl grid place-items-center"
                        style={{ background: "var(--bg-alt)", color: "var(--gold)" }}
                      >
                        <Icon name={c.icon} size={19} />
                      </span>
                      <span
                        className="font-display text-lg"
                        style={{ color: "var(--line-strong)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-[16px] leading-snug">
                      {c.name}
                    </h3>
                    <p
                      className="text-[11px] leading-relaxed mt-2 flex-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.purpose}
                    </p>
                    <div
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] mt-4 pt-3"
                      style={{ borderTop: "1px solid var(--line)", color: "var(--gold)" }}
                    >
                      <Lucide.Mail size={11} /> Contact via college office
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <EmptyState
              icon="SearchX"
              title="No committee matches that search"
              text="Try a different keyword, or contact the college office for assistance."
            />
          )}
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "ShieldCheck",
                title: "A safe campus",
                text: "The Internal Complaints Committee and Anti-Ragging Cell act on every complaint with confidentiality and urgency.",
                phone: college.phone,
              },
              {
                icon: "MessagesSquare",
                title: "A listened-to campus",
                text: "The Grievance Redressal Committee provides a clear, time-bound route for any concern raised by a student or staff member.",
                phone: college.principalPhone,
              },
              {
                icon: "Accessibility",
                title: "An inclusive campus",
                text: "The Equal Opportunity Cell and SC/ST/OBC and Minority Cells safeguard access, equity and dignity for all.",
                phone: college.principalMobile,
              },
            ].map((x) => (
              <Reveal key={x.title}>
                <div className="card p-6 h-full">
                  <span
                    className="w-11 h-11 rounded-xl grid place-items-center"
                    style={{ background: "var(--forest)", color: "#e9d29a" }}
                  >
                    <Icon name={x.icon} size={19} />
                  </span>
                  <h3 className="font-display text-xl mt-4">{x.title}</h3>
                  <p
                    className="text-[11.5px] leading-relaxed mt-2"
                    style={{ color: "var(--muted)" }}
                  >
                    {x.text}
                  </p>
                  <a
                    href={`tel:${x.phone}`}
                    className="inline-flex items-center gap-1.5 text-[11px] mt-4"
                    style={{ color: "var(--gold)" }}
                  >
                    <Lucide.Phone size={12} /> {x.phone}
                  </a>
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
/*  CONTACT                                                           */
/* ================================================================== */
const helpDesk = [
  {
    title: "Admission help desk",
    desc: "Applications, eligibility, documents and fee queries.",
    phone: college.phone,
    email: college.email,
    icon: "GraduationCap",
  },
  {
    title: "Examination branch",
    desc: "Hall tickets, results, transcripts and certificates.",
    phone: college.phone,
    email: college.email,
    icon: "FileText",
  },
  {
    title: "Hostel office",
    desc: "Boys' Hostel 9435096401 · Girls' Hostel 9706284318.",
    phone: college.hostel.boys,
    email: college.email,
    icon: "BedDouble",
  },
  {
    title: "Library",
    desc: "Membership, lending, e-resources and reading rooms.",
    phone: "9435771487",
    email: college.email,
    icon: "Library",
  },
];

const contactFaqs = [
  {
    q: "How do I reach the college from Guwahati?",
    a: "Dergaon is about 300 km east of Guwahati on National Highway 37. Regular ASTC and private buses, as well as trains on the Lumding–Dibrugarh line, connect Dergaon to Guwahati and Jorhat. The campus is a short auto-rickshaw ride from Dergaon town.",
  },
  {
    q: "What are the office hours?",
    a: "The college office is open Monday to Saturday, 10:00 a.m. to 4:00 p.m., except on declared holidays. The Principal's office may be visited with prior appointment.",
  },
  {
    q: "Whom should I contact for admission queries?",
    a: "The Admission Help Desk operates from the college office during the admission season. You may call 0376-2380260 or write to principaldkdc@gmail.com with your question and application number.",
  },
  {
    q: "Can I visit the campus before applying?",
    a: "Yes. Prospective students and families are welcome on working days. We recommend calling ahead so that a faculty member or counsellor can walk you through the departments and facilities.",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admission enquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact & directions"
        title={
          <>
            Come find us in{" "}
            <span className="serif-italic" style={{ color: "#e9d29a" }}>
              Dergaon.
            </span>
          </>
        }
        description="Whether you are a prospective student, a parent, an alumnus or a partner, our doors and inboxes are open. Reach out — a real person will answer."
        image="/images/img30.jpg"
        crumbs={[{ label: "Contact" }]}
      >
        <div className="mt-7 flex flex-wrap gap-2">
          <Pill tone="gold">P.O. Dergaon, Golaghat</Pill>
          <Pill tone="gold">Assam 785614</Pill>
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
            {/* form */}
            <Reveal>
              <div
                className="rounded-2xl border p-6 md:p-8"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
              >
                {sent ? (
                  <div className="py-12 text-center">
                    <div
                      className="mx-auto w-16 h-16 rounded-full grid place-items-center mb-5"
                      style={{ background: "var(--forest)", color: "#e9d29a" }}
                    >
                      <Lucide.Check size={28} />
                    </div>
                    <h2 className="font-display text-2xl">Thank you, {form.name || "friend"}.</h2>
                    <p
                      className="text-[12.5px] leading-relaxed mt-3 max-w-sm mx-auto"
                      style={{ color: "var(--muted)" }}
                    >
                      Your message has been recorded. Our office will respond within
                      two working days. For anything urgent, please call{" "}
                      <a
                        href={`tel:${college.phone}`}
                        style={{ color: "var(--gold)", fontWeight: 600 }}
                      >
                        {college.phone}
                      </a>
                      .
                    </p>
                    <button
                      className="btn btn-outline btn-sm mt-6"
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "Admission enquiry",
                          message: "",
                        });
                      }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <SectionHeading
                      eyebrow="Write to us"
                      title="How can we help?"
                      desc="Fill in the form and our office will get back to you. Fields marked * are required."
                    />
                    <form onSubmit={submit} className="mt-6 space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="label" htmlFor="c-name">
                            Full name *
                          </label>
                          <input
                            id="c-name"
                            required
                            className="field"
                            placeholder="Your name"
                            value={form.name}
                            onChange={update("name")}
                          />
                        </div>
                        <div>
                          <label className="label" htmlFor="c-email">
                            Email *
                          </label>
                          <input
                            id="c-email"
                            type="email"
                            required
                            className="field"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={update("email")}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="label" htmlFor="c-phone">
                            Phone
                          </label>
                          <input
                            id="c-phone"
                            className="field"
                            placeholder="+91"
                            value={form.phone}
                            onChange={update("phone")}
                          />
                        </div>
                        <div>
                          <label className="label" htmlFor="c-subject">
                            Subject *
                          </label>
                          <select
                            id="c-subject"
                            className="field"
                            value={form.subject}
                            onChange={update("subject")}
                          >
                            <option>Admission enquiry</option>
                            <option>Examination & certificates</option>
                            <option>Hostel</option>
                            <option>Scholarship</option>
                            <option>Alumni & giving</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="label" htmlFor="c-message">
                          Message *
                        </label>
                        <textarea
                          id="c-message"
                          required
                          rows={5}
                          className="field resize-none"
                          placeholder="Tell us what you would like to know…"
                          value={form.message}
                          onChange={update("message")}
                        />
                      </div>
                      <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
                        <p
                          className="text-[10px] max-w-xs leading-relaxed"
                          style={{ color: "var(--muted)" }}
                        >
                          Your details are used only to respond to this enquiry.
                        </p>
                        <button type="submit" className="btn btn-gold">
                          Send message <Lucide.Send size={14} />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* details */}
            <div className="space-y-4">
              <Reveal delay={0.05}>
                <div
                  className="relative overflow-hidden rounded-2xl p-7"
                  style={{ background: "var(--forest)" }}
                >
                  <div className="absolute inset-0 jaapi opacity-50" />
                  <div className="relative">
                    <div
                      className="text-[9px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: "#d8b36a" }}
                    >
                      The college
                    </div>
                    <h2
                      className="font-display text-2xl mt-2"
                      style={{ color: "#fbf6e8" }}
                    >
                      {college.name}
                    </h2>
                    <p
                      className="text-[11px] mt-1 uppercase tracking-[0.12em]"
                      style={{ color: "rgba(255,255,255,.5)" }}
                    >
                      {college.autonomous} · Est. {college.established}
                    </p>

                    <div className="mt-6 space-y-4">
                      {[
                        {
                          icon: "MapPin",
                          label: "Campus",
                          value: `${college.address.line1}, ${college.address.line2}`,
                          href: `https://www.google.com/maps?q=${encodeURIComponent(college.mapQuery)}`,
                        },
                        {
                          icon: "Phone",
                          label: "Office",
                          value: college.phone,
                          href: `tel:${college.phone}`,
                        },
                        {
                          icon: "Smartphone",
                          label: "Principal",
                          value: `${college.principalPhone} · ${college.principalMobile}`,
                          href: `tel:${college.principalMobile}`,
                        },
                        {
                          icon: "Mail",
                          label: "Email",
                          value: college.email,
                          href: `mailto:${college.email}`,
                        },
                      ].map((x) => (
                        <a
                          key={x.label}
                          href={x.href}
                          className="flex items-start gap-3 group"
                        >
                          <span
                            className="w-9 h-9 rounded-lg grid place-items-center shrink-0"
                            style={{ background: "rgba(255,255,255,.08)", color: "#e9d29a" }}
                          >
                            <Icon name={x.icon} size={15} />
                          </span>
                          <span>
                            <span
                              className="block text-[9px] uppercase tracking-[0.16em]"
                              style={{ color: "rgba(255,255,255,.42)" }}
                            >
                              {x.label}
                            </span>
                            <span
                              className="block text-[12px] leading-snug mt-0.5 group-hover:text-[#e9d29a] transition-colors"
                              style={{ color: "#f3e8cf" }}
                            >
                              {x.value}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>

                    <div
                      className="mt-6 pt-5 flex items-center gap-2 text-[10.5px]"
                      style={{ borderTop: "1px solid rgba(255,255,255,.14)", color: "rgba(255,255,255,.55)" }}
                    >
                      <Lucide.Clock size={13} style={{ color: "#d8b36a" }} />
                      Office: Mon–Sat, 10:00 a.m. – 4:00 p.m.
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <MapCard />
              </Reveal>

              <Reveal delay={0.15}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {helpDesk.map((h) => (
                    <div
                      key={h.title}
                      className="rounded-xl border p-4"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    >
                      <span
                        className="w-8 h-8 rounded-lg grid place-items-center mb-3"
                        style={{ background: "var(--bg-alt)", color: "var(--gold)" }}
                      >
                        <Icon name={h.icon} size={15} />
                      </span>
                      <h3 className="text-[12px] font-semibold">{h.title}</h3>
                      <p
                        className="text-[10px] leading-relaxed mt-1"
                        style={{ color: "var(--muted)" }}
                      >
                        {h.desc}
                      </p>
                      <a
                        href={`tel:${h.phone}`}
                        className="inline-flex items-center gap-1.5 text-[10.5px] mt-2.5"
                        style={{ color: "var(--gold)" }}
                      >
                        <Lucide.Phone size={11} /> {h.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* faq + visit */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 mt-14">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Before you visit"
                  title="Questions we hear often."
                />
                <Accordion items={contactFaqs} className="mt-6" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl min-h-[300px] h-full">
                <img
                  src="/images/img31.jpg"
                  alt="The college gate at Dergaon"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(4,18,13,.96), rgba(4,18,13,.35) 60%, rgba(4,18,13,.1))",
                  }}
                />
                <div className="absolute bottom-0 p-7">
                  <div
                    className="text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#d8b36a" }}
                  >
                    Visiting the campus
                  </div>
                  <h3
                    className="font-display text-2xl mt-2"
                    style={{ color: "#fbf6e8" }}
                  >
                    Raja Bahar, Dergaon
                  </h3>
                  <p
                    className="text-[11.5px] leading-relaxed mt-2 max-w-sm"
                    style={{ color: "rgba(255,255,255,.6)" }}
                  >
                    Nine green acres beside National Highway 37, a short ride from
                    Dergaon town and the railway station.
                  </p>
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(college.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost-light btn-sm mt-5"
                  >
                    Open in Maps <Lucide.ExternalLink size={13} />
                  </a>
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
/*  404                                                               */
/* ================================================================== */
export function NotFound() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 dots opacity-[0.06]" />
      <div className="container-x relative py-20">
        <div className="max-w-2xl">
          <div className="eyebrow">404 · Page not found</div>
          <div
            className="font-display leading-none mt-4"
            style={{ fontSize: "clamp(6rem,18vw,12rem)", color: "var(--gold-soft)" }}
          >
            404
          </div>
          <h1 className="section-title mt-2">
            Perhaps you took a{" "}
            <span className="serif-italic" style={{ color: "var(--gold)" }}>
              different path.
            </span>
          </h1>
          <p className="lede mt-4 max-w-xl">
            The page you are looking for may have moved, been archived, or never
            existed. Let us guide you back to the places that matter.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/" className="btn btn-forest">
              <Lucide.Home size={15} /> Back to home
            </Link>
            <Link to="/notices" className="btn btn-outline">
              Notice board
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact us
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {[
              { t: "Admissions", h: "/admissions", i: "GraduationCap" },
              { t: "Academics", h: "/academics", i: "BookOpen" },
              { t: "Departments", h: "/departments", i: "Building2" },
            ].map((x) => (
              <Link
                key={x.t}
                to={x.h}
                className="rounded-xl border p-4 flex items-center gap-3 text-[12px] font-medium hover:-translate-y-0.5 transition-transform"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
              >
                <span style={{ color: "var(--gold)" }}>
                  <Icon name={x.i} size={16} />
                </span>
                {x.t}
                <Lucide.ArrowUpRight size={13} className="ml-auto" style={{ color: "var(--muted)" }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
