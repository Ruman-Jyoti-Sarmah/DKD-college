import { useState } from "react";
import { Link } from "react-router-dom";
import * as Lucide from "lucide-react";
import {
  Accordion,
  CtaBand,
  Icon,
  PageHero,
  Pill,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "../components/UI";
import { college, programmes } from "../data/site";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const steps = [
  {
    n: "01",
    title: "Read the prospectus",
    text: "Understand the FYUGP structure, subject combinations, eligibility rules and reservation policy before you begin.",
    icon: "BookOpen",
  },
  {
    n: "02",
    title: "Register online",
    text: "Create your applicant profile on the admission portal with a valid mobile number and email address.",
    icon: "UserPlus",
  },
  {
    n: "03",
    title: "Choose your major",
    text: "Indicate your preferred major and minor combinations in order of priority. Choose carefully — changes are limited.",
    icon: "MousePointerClick",
  },
  {
    n: "04",
    title: "Upload documents",
    text: "Upload clear scanned copies of your mark sheets, certificates, photograph and signature in the prescribed format.",
    icon: "UploadCloud",
  },
  {
    n: "05",
    title: "Check the merit list",
    text: "Selection lists are published on this website and on the notice board. Confirm your seat within the stated window.",
    icon: "ListChecks",
  },
  {
    n: "06",
    title: "Verify & enrol",
    text: "Complete document verification, pay the admission fee online and collect your enrolment details from the department.",
    icon: "BadgeCheck",
  },
];

const keyDates = [
  { label: "Online application opens", date: "1 May 2026", tone: "done" },
  { label: "Last date of application", date: "15 June 2026", tone: "urgent" },
  { label: "First provisional merit list", date: "20 June 2026", tone: "" },
  { label: "Document verification", date: "24 – 28 June 2026", tone: "" },
  { label: "Fee payment & confirmation", date: "30 June 2026", tone: "" },
  { label: "Orientation & classes begin", date: "1 August 2026", tone: "" },
];

const feeRows = [
  ["Admission fee (one-time)", "1,200", "1,400", "1,400"],
  ["Tuition fee (per semester)", "2,400", "3,000", "2,800"],
  ["Examination fee (per semester)", "600", "750", "700"],
  ["Library & development fee", "500", "500", "500"],
  ["Students' union & welfare", "300", "300", "300"],
  ["Laboratory fee (per semester)", "—", "1,000", "500"],
];

const documents = [
  "Higher Secondary (10+2) mark sheet and pass certificate",
  "HSLC / Class X mark sheet and certificate",
  "Caste / OBC / EWS certificate, if applicable",
  "Permanent residence certificate / domicile, if applicable",
  "School leaving or migration certificate",
  "Recent passport-size photograph and signature",
  "Gap certificate, if there is a break in study",
  "Bank account details for scholarship disbursement",
];

const admissionFaqs = [
  {
    q: "What is the FYUGP and how is it different?",
    a: "The Four Year Undergraduate Programme is the National Education Policy 2020 curriculum offered by Dibrugarh University. It offers multiple entry and exit points, a major-minor structure, interdisciplinary options, and a fourth year leading to Honours with Research. Students may exit after one year with a certificate, two with a diploma, three with a degree, or complete four years for an honours degree.",
  },
  {
    q: "Can I change my major after admission?",
    a: "Major changes are generally not permitted after the admission process closes. In exceptional cases, a request may be considered by the departmental committee during the first few weeks, subject to seat availability and eligibility. Choose your preferences carefully at the time of application.",
  },
  {
    q: "How are hostel seats allotted?",
    a: "Hostel admission is separate from academic admission. Seats are allotted on the basis of merit and distance from the student's home, with priority for those travelling from outside Dergaon. Applications are invited through a separate hostel notice after academic admission.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. Students may benefit from state and central schemes including the Nijut Babu Moina scheme, Pragyan Bharati, post-matric scholarships for SC/ST/OBC students, and other merit and need-based support. The college office assists with applications and verification.",
  },
  {
    q: "What if my documents are not ready?",
    a: "You may apply with the documents available and complete verification later within the notified window. However, admission will not be confirmed until all mandatory documents are verified. Contact the admission help desk if you anticipate a delay.",
  },
  {
    q: "Is there an entrance test?",
    a: "Admission to undergraduate programmes is merit-based on Higher Secondary marks, in accordance with the university and state government rules. There is no separate entrance examination for the general programmes, though some specialised pathways may have additional requirements.",
  },
];

/* ------------------------------------------------------------------ */
/*  Eligibility checker                                                */
/* ------------------------------------------------------------------ */
function EligibilityChecker() {
  const [stream, setStream] = useState("Arts");
  const [percent, setPercent] = useState("");
  const [category, setCategory] = useState("General");
  const [checked, setChecked] = useState(false);

  const value = parseFloat(percent);
  const minimum = category === "General" ? 45 : 40;
  const valid = !Number.isNaN(value) && value >= 0 && value <= 100;
  const eligible = valid && value >= minimum;
  const borderline = valid && value >= minimum - 5 && value < minimum;

  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
    >
      <div className="px-6 py-4 flex items-center gap-2.5" style={{ background: "var(--forest)" }}>
        <Lucide.Sparkles size={15} style={{ color: "#e9d29a" }} />
        <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "#f3e8cf" }}>
          Quick eligibility check
        </span>
      </div>

      <div className="p-6">
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <label className="label" htmlFor="e-stream">Stream</label>
            <select id="e-stream" className="field" value={stream} onChange={(e) => { setStream(e.target.value); setChecked(false); }}>
              {Object.keys(programmes).map((k) => <option key={k}>{k}</option>)}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="e-percent">10+2 aggregate (%)</label>
            <input
              id="e-percent"
              type="number"
              min="0"
              max="100"
              step="0.01"
              className="field"
              placeholder="e.g. 72.5"
              value={percent}
              onChange={(e) => { setPercent(e.target.value); setChecked(false); }}
            />
          </div>
          <div>
            <label className="label" htmlFor="e-cat">Category</label>
            <select id="e-cat" className="field" value={category} onChange={(e) => { setCategory(e.target.value); setChecked(false); }}>
              <option>General</option>
              <option>OBC / MOBC</option>
              <option>SC</option>
              <option>ST (P) / ST (H)</option>
              <option>EWS</option>
            </select>
          </div>
        </div>

        <button
          className="btn btn-gold btn-sm mt-4"
          onClick={() => setChecked(true)}
          disabled={!valid}
          style={!valid ? { opacity: 0.5, cursor: "not-allowed" } : {}}
        >
          Check eligibility <Lucide.ArrowRight size={13} />
        </button>

        {checked && valid && (
          <div
            className="mt-4 rounded-xl p-4 flex items-start gap-3"
            style={{
              background: eligible ? "rgba(24,120,80,.09)" : "rgba(184,144,63,.1)",
              border: `1px solid ${eligible ? "rgba(24,120,80,.25)" : "rgba(184,144,63,.3)"}`,
            }}
          >
            <span
              className="w-8 h-8 rounded-full grid place-items-center shrink-0"
              style={{
                background: eligible ? "#187850" : "var(--gold)",
                color: "#fff",
              }}
            >
              {eligible ? <Lucide.Check size={16} /> : <Lucide.AlertCircle size={16} />}
            </span>
            <div>
              <div className="text-[12px] font-semibold" style={{ color: "var(--text)" }}>
                {eligible
                  ? `You appear eligible for the ${stream} programme.`
                  : borderline
                  ? "You are close to the minimum requirement."
                  : "You may not meet the minimum requirement."}
              </div>
              <p className="text-[10.5px] leading-relaxed mt-1" style={{ color: "var(--muted)" }}>
                Based on a {value}% aggregate under the {category} category, the
                indicative minimum is {minimum}%. {eligible
                  ? "Final eligibility depends on the subject combination, seat availability and document verification."
                  : "Please contact the admission help desk to discuss your options, including any relaxations that may apply."}
              </p>
            </div>
          </div>
        )}

        <p className="text-[9.5px] leading-relaxed mt-3" style={{ color: "var(--muted)" }}>
          This is an indicative tool only. Final admission is governed by the
          official prospectus, university regulations and government reservation policy.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Admissions page                                                    */
/* ------------------------------------------------------------------ */
export function Admissions() {
  const [stream, setStream] = useState("Arts");
  const data = programmes[stream];

  return (
    <>
      <PageHero
        eyebrow="Admissions 2026–27"
        title={
          <>
            Your next chapter{" "}
            <span className="serif-italic" style={{ color: "#e9d29a" }}>
              begins here.
            </span>
          </>
        }
        description="Applications are open for the Four Year Undergraduate Programme in Arts, Science and Commerce. Read the prospectus, check your eligibility and join a community that has been learning together since 1962."
        image="/images/img14.jpg"
        crumbs={[{ label: "Admissions" }]}
      >
        <div className="flex flex-wrap gap-3 mt-7">
          <a href="#apply" className="btn btn-gold btn-sm">
            How to apply <Lucide.ArrowDown size={13} />
          </a>
          <Link to="/downloads" className="btn btn-ghost-light btn-sm">
            Prospectus 2026 <Lucide.Download size={13} />
          </Link>
        </div>
      </PageHero>

      {/* at a glance + eligibility */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="At a glance"
                  title="Admission, made clear."
                  desc="Everything you need to move from curiosity to enrolment — eligibility, dates, fees and the documents we will ask for."
                />
                <div className="grid sm:grid-cols-2 gap-3 mt-7">
                  {[
                    { icon: "CalendarDays", t: "Applications open", d: "1 May 2026" },
                    { icon: "GraduationCap", t: "Programmes", d: "B.A. · B.Sc. · B.Com." },
                    { icon: "Clock", t: "Duration", d: "4 years (FYUGP)" },
                    { icon: "BadgeCheck", t: "Selection", d: "Merit-based" },
                  ].map((x) => (
                    <div key={x.t} className="rounded-xl border p-4 flex items-start gap-3" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                      <span className="w-9 h-9 rounded-lg grid place-items-center shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                        <Icon name={x.icon} size={16} />
                      </span>
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.16em] font-bold" style={{ color: "var(--gold)" }}>{x.t}</div>
                        <div className="text-[12.5px] font-medium mt-0.5">{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl p-4 flex items-start gap-3" style={{ background: "var(--bg-alt)" }}>
                  <Lucide.Info size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                  <p className="text-[10.5px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    Admissions are conducted as per the guidelines of Dibrugarh
                    University and the Government of Assam. The college follows the
                    state reservation policy, and all admissions are subject to
                    verification of original documents.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <EligibilityChecker />
            </Reveal>
          </div>
        </div>
      </section>

      {/* programmes */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Programmes on offer"
              title="Choose your stream."
              desc="Each stream follows the FYUGP structure with a major, minor and interdisciplinary courses."
            />
            <div className="flex gap-2">
              {Object.keys(programmes).map((k) => (
                <button key={k} className={`tab ${stream === k ? "active" : ""}`} onClick={() => setStream(k)}>{k}</button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-5 mt-8">
            <Reveal>
              <div className="card p-7 h-full">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--forest)", color: "#e9d29a" }}>
                    <Icon name={data.icon} size={21} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl">{data.name}</h3>
                    <p className="text-[12px] leading-relaxed mt-2" style={{ color: "var(--muted)" }}>{data.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[9px] uppercase tracking-[0.18em] font-bold mb-2" style={{ color: "var(--gold)" }}>Major subjects</div>
                  <div className="flex flex-wrap gap-2">
                    {data.majors.map((m) => <span key={m} className="badge">{m}</span>)}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[9px] uppercase tracking-[0.18em] font-bold mb-2" style={{ color: "var(--gold)" }}>Programme highlights</div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {data.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--muted)" }}>
                        <Lucide.Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} /> {h}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
                  <Link to="/academics" className="btn btn-outline btn-sm">Programme details <Lucide.ArrowRight size={13} /></Link>
                  <Link to="/departments" className="btn btn-outline btn-sm">Departments</Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border overflow-hidden h-full" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                <div className="px-6 py-4" style={{ background: "var(--forest)" }}>
                  <div className="text-[9px] uppercase tracking-[0.18em] font-bold" style={{ color: "#d8b36a" }}>Indicative fees</div>
                  <h3 className="font-display text-lg mt-1" style={{ color: "#fbf6e8" }}>Per semester (₹)</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[10.5px]">
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--line)" }}>
                        <th className="text-left font-semibold px-4 py-2.5">Head</th>
                        <th className="text-right font-semibold px-2 py-2.5">Arts</th>
                        <th className="text-right font-semibold px-2 py-2.5">Sci</th>
                        <th className="text-right font-semibold px-4 py-2.5">Com</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeRows.map((r) => (
                        <tr key={r[0]} style={{ borderTop: "1px solid var(--line)" }}>
                          <td className="px-4 py-2.5" style={{ color: "var(--muted)" }}>{r[0]}</td>
                          <td className="text-right px-2 py-2.5">{r[1]}</td>
                          <td className="text-right px-2 py-2.5">{r[2]}</td>
                          <td className="text-right px-4 py-2.5">{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr style={{ borderTop: "1px solid var(--line)", background: "var(--bg-alt)" }}>
                        <td className="px-4 py-3 font-semibold">Indicative total</td>
                        <td className="text-right px-2 py-3 font-semibold">5,000</td>
                        <td className="text-right px-2 py-3 font-semibold">6,950</td>
                        <td className="text-right px-4 py-3 font-semibold">6,200</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <p className="px-4 py-3 text-[9.5px] leading-relaxed" style={{ color: "var(--muted)", borderTop: "1px solid var(--line)" }}>
                  Indicative only. Fees vary by subject combination and are notified
                  officially each session. Hostel and examination charges are separate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* process */}
      <section id="apply" className="section scroll-mt-24" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <SectionHeading
            eyebrow="How to apply"
            title="Six steps to enrolment."
            desc="The entire process is online except for document verification, which is conducted on campus."
            align="center"
          />
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-9">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="card p-5 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                      <Icon name={s.icon} size={17} />
                    </span>
                    <span className="font-display text-xl" style={{ color: "var(--line-strong)" }}>{s.n}</span>
                  </div>
                  <h3 className="font-display text-[16px] leading-snug">{s.title}</h3>
                  <p className="text-[11px] leading-relaxed mt-2" style={{ color: "var(--muted)" }}>{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-5 mt-10">
            <Reveal>
              <div className="rounded-2xl border p-6 md:p-7 h-full" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Lucide.CalendarClock size={16} style={{ color: "var(--gold)" }} />
                  <h3 className="font-display text-xl">Important dates</h3>
                </div>
                <div>
                  {keyDates.map((d, i) => (
                    <div key={d.label} className="flex items-center justify-between gap-4 py-3" style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
                      <span className="flex items-center gap-3 text-[11.5px]">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: d.tone === "urgent" ? "#c0392b" : "var(--gold)" }} />
                        {d.label}
                      </span>
                      <span className="text-[11px] font-semibold shrink-0" style={{ color: d.tone === "urgent" ? "#c0392b" : "var(--muted)" }}>{d.date}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[9.5px] mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                  Dates are indicative. Always confirm with the latest admission notice.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border p-6 md:p-7 h-full" style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Lucide.FolderCheck size={16} style={{ color: "var(--gold)" }} />
                  <h3 className="font-display text-xl">Documents checklist</h3>
                </div>
                <div className="space-y-2.5">
                  {documents.map((d) => (
                    <div key={d} className="flex items-start gap-2.5 text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      <Lucide.Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} /> {d}
                    </div>
                  ))}
                </div>
                <Link to="/downloads" className="btn btn-outline btn-sm mt-5">
                  Download forms <Lucide.Download size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* scholarships */}
      <section className="section-sm" style={{ background: "var(--forest)" }}>
        <div className="container-x relative">
          <div className="absolute inset-0 jaapi opacity-40" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="eyebrow" style={{ color: "#d8b36a" }}>Support for every learner</div>
              <h2 className="section-title mt-4" style={{ color: "#fbf6e8" }}>
                Cost should never decide{" "}
                <span className="serif-italic" style={{ color: "#e9d29a" }}>who learns.</span>
              </h2>
              <p className="text-[12.5px] leading-relaxed mt-4 max-w-2xl" style={{ color: "rgba(255,255,255,.62)" }}>
                Students may be eligible for the Nijut Babu Moina scheme, Pragyan
                Bharati awards, post-matric scholarships for SC/ST/OBC students,
                EWS support and institutional fee concessions. Our office helps with
                applications and verification.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Nijut Babu Moina", "Pragyan Bharati", "Post-matric scholarship", "EWS support", "Merit awards"].map((s) => (
                  <span key={s} className="badge" style={{ background: "rgba(255,255,255,.08)", color: "#f3e8cf", borderColor: "rgba(255,255,255,.18)" }}>{s}</span>
                ))}
              </div>
            </div>
            <Link to="/contact" className="btn btn-gold shrink-0">
              Talk to a counsellor <Lucide.ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Admission FAQs"
                  title="Answers, before you ask."
                  desc="Still unsure about something? The admission help desk is a phone call away."
                />
                <div className="mt-6 rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                  <div className="text-[9px] uppercase tracking-[0.16em] font-bold" style={{ color: "var(--gold)" }}>Admission help desk</div>
                  <a href={`tel:${college.phone}`} className="flex items-center gap-2 text-[12px] mt-2">
                    <Lucide.Phone size={13} style={{ color: "var(--gold)" }} /> {college.phone}
                  </a>
                  <a href={`mailto:${college.email}`} className="flex items-center gap-2 text-[11px] mt-1.5 break-all">
                    <Lucide.Mail size={13} style={{ color: "var(--gold)" }} /> {college.email}
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill tone="gold">Merit-based</Pill>
                  <Pill>Online application</Pill>
                  <Pill>FYUGP · NEP 2020</Pill>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Accordion items={admissionFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
