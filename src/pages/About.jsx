import { Link } from "react-router-dom";
import * as Lucide from "lucide-react";
import {
  CtaBand,
  Icon,
  Ornament,
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  Pill,
} from "../components/UI";
import { college, timeline, stats } from "../data/site";

/* ================================================================== */
/*  ABOUT                                                             */
/* ================================================================== */
export function About() {
  return (
    <>
      <PageHero
        eyebrow="About the college"
        title={<>A legacy written in <span className="serif-italic" style={{ color: "#e9d29a" }}>service.</span></>}
        description="From a borrowed hall in 1962 to an autonomous institution of national standing — this is the story of a college that grew with its community."
        image="/images/img31.jpg"
        crumbs={[{ label: "About" }]}
      >
        <div className="flex flex-wrap gap-2 mt-7">
          <Pill tone="gold">Established 1962</Pill>
          <Pill tone="gold">NAAC A+ · CGPA 3.37</Pill>
          <Pill tone="gold">Autonomous</Pill>
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Our beginning"
                  title={<>A promise made to a <span className="serif-italic text-gold">generation.</span></>}
                />
              </Reveal>
              <Reveal delay={0.08}>
                <div className="prose-body mt-6 text-[14px]">
                  <p>
                    The large rural belt of the northern part of Golaghat district — home to
                    economically and socially disadvantaged communities, including scheduled castes,
                    scheduled tribes and tea-garden labourers — had no institution of higher education
                    until the early nineteen sixties. Higher learning remained out of reach for a
                    generation of meritorious young people.
                  </p>
                  <p>
                    It was to change this that a group of socially committed citizens established a
                    college at <strong>Dergaon</strong>, a place of rich cultural heritage, in
                    <strong> 1962</strong>. Among them were Late Noren Sarma, a public leader, and
                    Late Harakanta Mahanta, a noted educationist. A munificent donation from Late
                    Kamal Dowerah gave the project concrete shape — and the institution was christened
                    <strong> Dergaon Kamal Dowerah College</strong>.
                  </p>
                  <p>
                    Initially housed at <strong>Bapuji Mandir</strong>, a public theatre hall, the
                    college was brought under the grant-in-aid system in July 1966 and provincialised
                    by the Government of Assam in December 2005. In 1967 it moved to its present site
                    at <strong>Raja Bahar</strong> — nine elevated acres overlooking wide agricultural
                    fields and National Highway 37.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {[
                    ["1962", "Established at Bapuji Mandir"],
                    ["1967", "Moved to the present campus"],
                    ["2005", "Provincialised by the State"],
                    ["2022", "Conferred autonomous status"],
                  ].map(([y, t]) => (
                    <div key={y} className="flex items-start gap-4 rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                      <span className="font-display text-xl shrink-0" style={{ color: "var(--gold)" }}>{y}</span>
                      <span className="text-[11.5px] leading-snug pt-1" style={{ color: "var(--muted)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:pt-10">
              <div className="relative">
                <div className="arch overflow-hidden border aspect-[4/5]" style={{ borderColor: "var(--line)" }}>
                  <img src="/images/img30.jpg" alt="Students at the college gate" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl p-5 max-w-[220px]" style={{ background: "var(--forest)", color: "#f4ead3", boxShadow: "var(--shadow-lg)" }}>
                  <Lucide.Quote size={20} style={{ color: "#d8b36a" }} />
                  <p className="font-display text-[15px] leading-snug mt-2">“तमसो मा ज्योतिर्गमय”</p>
                  <p className="text-[10px] mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>
                    Lead me from darkness to light — the motto that guides this institution.
                  </p>
                </div>
              </div>
              <div className="mt-12 rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-3" style={{ color: "var(--gold)" }}>On campus</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["9 acres", "Campus"],
                    ["65,000+", "Library volumes"],
                    ["2", "Hostels"],
                    ["3", "Computer labs"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display text-lg leading-none">{v}</div>
                      <div className="text-[10px] mt-1" style={{ color: "var(--muted)" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Six decades"
              title={<>Milestones on the <span className="serif-italic text-gold">journey.</span></>}
              desc="Each decade added a new layer — new departments, new facilities, new possibilities for the young people of the region."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid lg:grid-cols-2 gap-x-16">
            <Reveal>
              <div className="timeline">
                {timeline.slice(0, 4).map((t) => (
                  <div key={t.year} className="timeline-item">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-2xl" style={{ color: "var(--gold)" }}>{t.year}</span>
                      <h3 className="font-display text-[18px]">{t.title}</h3>
                    </div>
                    <p className="text-[12.5px] leading-relaxed mt-2 max-w-md" style={{ color: "var(--muted)" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="timeline">
                {timeline.slice(4).map((t) => (
                  <div key={t.year} className="timeline-item">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-2xl" style={{ color: "var(--gold)" }}>{t.year}</span>
                      <h3 className="font-display text-[18px]">{t.title}</h3>
                    </div>
                    <p className="text-[12.5px] leading-relaxed mt-2 max-w-md" style={{ color: "var(--muted)" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                <img src="/images/img21.jpg" alt="Founders' memorial" className="rounded-xl object-cover w-full h-52" />
                <img src="/images/img39.jpg" alt="NCC parade" className="rounded-xl object-cover w-full h-52 mt-8" />
                <img src="/images/img9.jpg" alt="Tree plantation" className="rounded-xl object-cover w-full h-40" />
                <img src="/images/img8.jpg" alt="Yoga day" className="rounded-xl object-cover w-full h-40 -mt-8" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="The campus"
                  title={<>Nine acres of green, <span className="serif-italic text-gold">quiet possibility.</span></>}
                />
                <div className="prose-body mt-5 text-[13.5px]">
                  <p>
                    The campus sits on elevated land at Raja Bahar, just outside Dergaon town. It holds
                    classrooms and administrative buildings, a library, science laboratories, a seminar
                    hall, separate hostels for boys and girls, an auditorium, a playground, a canteen, a
                    co-operative store and a botanical garden.
                  </p>
                  <p>
                    A historic well, believed to date from the reign of Ahom King Rajeswar Singha
                    (AD 1751–1769), still stands on campus — a quiet reminder of the deep history of
                    this place. Every effort is made to keep the campus clean, green and pollution-free.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Pollution-free", "Round-the-clock security", "Ragging-free hostels", "Green audit"].map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: "BadgeCheck", t: "NAAC A+", s: "CGPA 3.37" },
              { icon: "Landmark", t: "Autonomous", s: "Conferred 2022" },
              { icon: "FileBadge", t: "UGC 12(B) & 2(f)", s: "Recognised" },
              { icon: "GraduationCap", t: "Dibrugarh University", s: "Affiliated" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="card p-5 flex items-center gap-4">
                  <span className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                    <Icon name={c.icon} size={19} />
                  </span>
                  <div>
                    <div className="font-display text-[14px] leading-tight">{c.t}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>{c.s}</div>
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
/*  MISSION & VISION                                                  */
/* ================================================================== */
export function MissionVision() {
  const mission = [
    "To generate and transmit knowledge with rigour and relevance.",
    "To provide an education that meets global requirements while remaining rooted in local realities.",
    "To promote scientific temper, technological advancement and innovation.",
    "To build self-confidence among students to face the challenges of a changing world.",
    "To strengthen unity and integrity among communities and uplift the weaker sections of the region.",
    "To elevate the institution to excellence and contribute to national development.",
    "To use human and natural resources responsibly for sustainable development.",
    "To encourage the participation of all stakeholders in institutional growth.",
    "To develop the community through partnership and a strong college-neighbourhood relationship.",
    "To realise the spirit and objectives of the National Education Policy 2020.",
  ];
  const values = [
    { icon: "Scale", title: "Integrity", text: "Honesty in scholarship, fairness in conduct and accountability in governance." },
    { icon: "Users", title: "Inclusion", text: "A campus where every learner, especially the most vulnerable, finds opportunity and dignity." },
    { icon: "Search", title: "Inquiry", text: "The courage to ask questions, test assumptions and pursue truth with discipline." },
    { icon: "Sprout", title: "Impact", text: "Knowledge that serves the community, sustains the environment and improves lives." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Mission & vision"
        title={<>Purpose, in our own <span className="serif-italic" style={{ color: "#e9d29a" }}>words.</span></>}
        description="What are we for? Why does this college exist? Our mission and vision are not slogans on a wall — they are the tests we set for ourselves."
        image="/images/img37.jpg"
        crumbs={[{ label: "About", href: "/about" }, { label: "Mission & Vision" }]}
      />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <Reveal>
              <div className="relative p-8 md:p-10 rounded-3xl overflow-hidden" style={{ background: "var(--forest)", color: "#f6efdd" }}>
                <div className="absolute inset-0 jaapi opacity-40" />
                <div className="relative">
                  <div className="eyebrow" style={{ color: "#d8b36a" }}>Vision</div>
                  <Lucide.Quote size={28} className="mt-5" style={{ color: "#d8b36a" }} />
                  <p className="font-display text-[clamp(1.2rem,2vw,1.55rem)] leading-[1.5] mt-4" style={{ color: "#fbf6e8" }}>
                    To expedite development in greater Dergaon — academically, socially, economically and
                    culturally — through excellence in higher education, scientific temper, innovation and
                    the empowerment of every learner.
                  </p>
                  <div className="mt-7 pt-6 text-[12px] leading-relaxed" style={{ borderTop: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.6)" }}>
                    The institution seeks to identify the potential, possibilities and weaknesses in the
                    teaching–learning process, and to elevate itself to a level of excellence that
                    contributes to sustainable development and national progress.
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Mission"
                  title={<>Ten commitments we <span className="serif-italic text-gold">hold ourselves to.</span></>}
                />
              </Reveal>
              <div className="mt-7 grid sm:grid-cols-2 gap-x-8">
                {mission.map((m, i) => (
                  <Reveal key={m} delay={i * 0.03}>
                    <div className="flex gap-3 py-3 border-b" style={{ borderColor: "var(--line)" }}>
                      <span className="text-[10px] font-display pt-1" style={{ color: "var(--gold)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--muted)" }}>{m}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="What we value" title={<>Four ideas that shape <span className="serif-italic text-gold">everything.</span></>} align="center" />
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card p-6 h-full">
                  <span className="w-11 h-11 rounded-full grid place-items-center mb-5" style={{ background: "color-mix(in srgb, var(--gold) 14%, transparent)", color: "var(--gold)" }}>
                    <Icon name={v.icon} size={19} />
                  </span>
                  <h3 className="font-display text-xl">{v.title}</h3>
                  <p className="text-[12px] leading-relaxed mt-2" style={{ color: "var(--muted)" }}>{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x max-w-4xl text-center">
          <Ornament className="mb-6" />
          <blockquote className="font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.3] tracking-[-0.025em]">
            “Education is not preparation for life; education is life itself — and it must reach
            those for whom it was once <span className="serif-italic text-gold">out of reach.</span>”
          </blockquote>
          <p className="text-[11px] uppercase tracking-[0.2em] mt-6" style={{ color: "var(--muted)" }}>The founding spirit of D.K.D. College</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================================================================== */
/*  PRINCIPAL                                                         */
/* ================================================================== */
export function Principal() {
  const paragraphs = [
    "For over six decades, D.K.D. College (Autonomous), Dergaon, has played a formative role in shaping the educational and intellectual landscape of this region. Established in 1962 with the vision of extending the reach of higher education to the people of the area, the college has evolved into an institution that combines a strong academic tradition with a deep sense of social commitment.",
    "The institutional journey reflects a sustained pursuit of quality and continuous improvement. Our accreditation by NAAC with an A+ grade and a CGPA of 3.37, together with the conferment of autonomous status, affirms our commitment to high standards across teaching and learning, research, student development, governance, infrastructure, extension and community engagement.",
    "At the heart of D.K.D. College is a conception of education that regards learning as a transformative process. We seek to cultivate individuals who possess sound knowledge, intellectual openness, ethical awareness, social sensitivity and the ability to engage thoughtfully with the world around them. Academic instruction is complemented by experiential learning, skill development, collaborative engagement, creative expression and social participation.",
    "The founding vision of the college was closely associated with the democratisation of higher education. At a time when access to higher studies remained limited for many young people, particularly those from rural and socially disadvantaged communities, D.K.D. College emerged as an important avenue of opportunity. Its growth has been intertwined with the aspirations of the communities it serves.",
    "The contemporary landscape of higher education demands institutions capable of responding proactively to changing intellectual, technological, economic and social realities. Our autonomous status provides greater academic flexibility and responsibility. We continue to strengthen our curriculum, pedagogical practices, research culture, student-support mechanisms and infrastructure.",
    "The quality of education is closely connected with the quality of the learning experience. Increasing attention is being given to learner-centred pedagogies, innovative classroom practices, digital learning resources and experiential modes of engagement — moving the learner from a passive recipient of information to an active participant in knowledge creation.",
    "Higher education must prepare young people for life as well as for employment. Skill-development programmes, employability initiatives, personality development, sports, cultural engagements, student clubs, library resources, guidance and counselling all contribute to a comprehensive student-development framework.",
    "The identity of the college is also shaped by its geographical and cultural setting. Located in Dergaon, amidst the serene surroundings of Assam, the college provides a congenial atmosphere for study and reflection. We value this connection with our milieu and seek to bring together cultural rootedness and openness to new ideas.",
    "The strength of the college lies ultimately in its people — the commitment of faculty and staff, the energy and aspirations of students, the continuing association of alumni, and the encouragement of well-wishers. Institutional excellence is not created by structures or recognitions alone; it is sustained through a culture of shared responsibility, mutual respect and collective endeavour.",
    "With its legacy as foundation, excellence as continuing pursuit and innovation as pathway forward, D.K.D. College (Autonomous) remains committed to shaping an inclusive, intellectually vibrant and socially responsive future in higher education.",
  ];
  return (
    <>
      <PageHero
        eyebrow="Principal's desk"
        title={<>A message from the <span className="serif-italic" style={{ color: "#e9d29a" }}>Principal.</span></>}
        description="On legacy, learning and the responsibility of an autonomous institution in the twenty-first century."
        image="/images/img20.jpg"
        crumbs={[{ label: "About", href: "/about" }, { label: "Principal's Desk" }]}
      />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="arch overflow-hidden border aspect-[4/5]" style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-lg)" }}>
                  <img src="/images/img23.jpeg" alt="Dr. Pranjol Protim Kakoty" className="w-full h-full object-cover" />
                </div>
                <div className="mt-5">
                  <h2 className="font-display text-2xl">Dr. Pranjol Protim Kakoty</h2>
                  <p className="text-[11px] uppercase tracking-[0.16em] mt-1" style={{ color: "var(--gold-ink)" }}>Principal · M.A., Ph.D.</p>
                  <div className="mt-4 rounded-xl border p-4 text-[11.5px] leading-relaxed" style={{ borderColor: "var(--line)", background: "var(--bg-alt)", color: "var(--muted)" }}>
                    <div className="flex items-start gap-2.5 mb-2">
                      <Lucide.Phone size={13} className="mt-0.5" style={{ color: "var(--gold)" }} />
                      <span>{college.principalPhone} · {college.principalMobile}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Lucide.Mail size={13} className="mt-0.5" style={{ color: "var(--gold)" }} />
                      <span className="break-all">{college.email}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-outline btn-sm mt-4 w-full justify-center">Contact the office</Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-9 h-9 rounded-full grid place-items-center" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                  <Lucide.Quote size={15} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>Principal's message</span>
              </div>
              <div className="prose-body text-[14px]">
                {paragraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-[15px] leading-[1.9]" : ""}>{p}</p>
                ))}
              </div>
              <div className="mt-8 pt-6 flex items-end justify-between gap-6" style={{ borderTop: "1px solid var(--line)" }}>
                <div>
                  <div className="font-display italic text-2xl" style={{ color: "var(--gold)" }}>Pranjol Protim Kakoty</div>
                  <div className="text-[10.5px] uppercase tracking-[0.14em] mt-2" style={{ color: "var(--muted)" }}>Principal, D.K.D. College (Autonomous), Dergaon</div>
                </div>
                <Lucide.Award size={28} style={{ color: "var(--gold)", opacity: 0.5 }} />
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
/*  ADMINISTRATION                                                    */
/* ================================================================== */
export function Administration() {
  const leadership = [
    { role: "Principal", name: "Dr. Pranjol Protim Kakoty", qual: "M.A., Ph.D.", icon: "GraduationCap", note: "Academic and administrative head of the institution" },
    { role: "Controller of Examinations", name: "Office of the COE", qual: "Examinations & records", icon: "ClipboardCheck", note: "Conduct of examinations, evaluation and results" },
    { role: "IQAC Coordinator", name: "Internal Quality Assurance Cell", qual: "Quality & accreditation", icon: "Gauge", note: "Continuous improvement and NAAC preparedness" },
    { role: "Librarian", name: "Dr. Jnyandeep Saikia", qual: "MLISc., Ph.D.", icon: "Library", note: "Central Library and learning resources" },
  ];
  const officeStaff = [
    ["Sri Biju Pegu", "Supervising Assistant", "9707739590"],
    ["Sri Girin Bora", "Senior Assistant", "9706227501"],
    ["Sri Joy Prokash Das", "Junior Assistant", "7896349608"],
    ["Sri Manab Jyoti Borah", "Junior Assistant", "6000139841"],
    ["Sri Dipen Bey", "Junior Assistant", "9435457084"],
    ["Sri Joyjyoti Hazarika", "Junior Assistant", "9707510079"],
    ["Sri Diganta Kumar Borah", "Laboratory Assistant", "9085440074"],
    ["Sri Madhab Dutta", "Office Peon", "9613692389"],
  ];
  const libraryStaff = [
    ["Dr. Jnyandeep Saikia", "Librarian", "9435771487"],
    ["Sri Jitul Dutta", "Library Assistant", "9854915350"],
    ["Ms. Nijula Dutta", "Library Assistant", "9957015313"],
    ["Ms. Roshmi Hazarika", "E-Library", "8472902693"],
    ["Sri Manoj Bora", "Xerox Operator", "9577317357"],
  ];
  return (
    <>
      <PageHero
        eyebrow="Administration"
        title={<>Stewardship with <span className="serif-italic" style={{ color: "#e9d29a" }}>accountability.</span></>}
        description="The people and structures that keep the college running — from the Governing Body to the office that serves students every day."
        image="/images/img31.jpg"
        crumbs={[{ label: "About", href: "/about" }, { label: "Administration" }]}
      />

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Leadership" title={<>The academic <span className="serif-italic text-gold">leadership.</span></>} desc="Guided by the Governing Body and supported by statutory committees, the leadership team stewards the institution's academic and administrative life." />
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {leadership.map((l) => (
              <StaggerItem key={l.role}>
                <div className="card p-6 h-full flex flex-col">
                  <span className="w-11 h-11 rounded-xl grid place-items-center mb-5" style={{ background: "var(--forest)", color: "#e9d29a" }}>
                    <Icon name={l.icon} size={19} />
                  </span>
                  <div className="text-[9px] uppercase tracking-[0.16em] font-bold" style={{ color: "var(--gold)" }}>{l.role}</div>
                  <h3 className="font-display text-[17px] mt-1.5 leading-snug">{l.name}</h3>
                  <p className="text-[10.5px] mt-1" style={{ color: "var(--muted)" }}>{l.qual}</p>
                  <p className="text-[11px] leading-relaxed mt-3 pt-3" style={{ color: "var(--muted)", borderTop: "1px solid var(--line)" }}>{l.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
            <Reveal>
              <SectionHeading eyebrow="Governance" title={<>How the college is <span className="serif-italic text-gold">governed.</span></>} />
              <div className="prose-body mt-5 text-[13.5px]">
                <p>
                  The <strong>Governing Body</strong> is the apex policy-making body of the college,
                  constituted in accordance with the statutes of Dibrugarh University and the
                  Government of Assam. It includes representatives of the university, the state
                  government, faculty, and the Principal as Member Secretary.
                </p>
                <p>
                  Academic matters are guided by the <strong>Academic Council</strong> and departmental
                  committees, while the <strong>IQAC</strong> monitors quality across all dimensions of
                  institutional life. Statutory cells and committees ensure compliance, welfare and
                  grievance redressal.
                </p>
              </div>
              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {[
                  ["Governing Body", "Policy, finance and overall oversight"],
                  ["Academic Council", "Curriculum, examinations and academic standards"],
                  ["Finance Committee", "Budgeting and financial discipline"],
                  ["IQAC", "Quality assurance and institutional improvement"],
                ].map(([t, s]) => (
                  <div key={t} className="rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                    <div className="font-display text-[14px]">{t}</div>
                    <div className="text-[10.5px] mt-1" style={{ color: "var(--muted)" }}>{s}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border p-7" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-5" style={{ color: "var(--gold)" }}>Organisational structure</div>
                {[
                  { label: "Governing Body", sub: "Apex policy body" },
                  { label: "Principal", sub: "Academic & administrative head" },
                  { label: "Vice-Principal / COE / IQAC", sub: "Academic coordination" },
                  { label: "Heads of Departments", sub: "18 departments" },
                  { label: "Faculty & Staff", sub: "Teaching and non-teaching" },
                  { label: "Students", sub: "The heart of the institution" },
                ].map((n, i, arr) => (
                  <div key={n.label}>
                    <div className="rounded-xl px-4 py-3 text-center" style={{ background: i === 0 ? "var(--forest)" : "var(--bg-alt)", color: i === 0 ? "#f6efdd" : "var(--text)", border: "1px solid var(--line)" }}>
                      <div className="text-[12px] font-semibold">{n.label}</div>
                      <div className="text-[9.5px] mt-0.5" style={{ color: i === 0 ? "rgba(255,255,255,.55)" : "var(--muted)" }}>{n.sub}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex justify-center py-1.5">
                        <Lucide.ChevronDown size={13} style={{ color: "var(--gold)", opacity: 0.6 }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <Reveal>
              <SectionHeading eyebrow="Office & library" title={<>The people who <span className="serif-italic text-gold">help.</span></>} />
            </Reveal>
            <span className="badge">Mon – Sat · 10 a.m. – 4 p.m.</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              { title: "College Office", rows: officeStaff, icon: "Building2" },
              { title: "Library Staff", rows: libraryStaff, icon: "Library" },
            ].map((group) => (
              <Reveal key={group.title}>
                <div className="card overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-4" style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--line)" }}>
                    <Icon name={group.icon} size={16} className="text-gold" />
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.12em]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{group.title}</h3>
                  </div>
                  <div>
                    {group.rows.map(([name, role, phone]) => (
                      <div key={name} className="flex items-center justify-between gap-3 px-5 py-3 text-[12px]" style={{ borderBottom: "1px solid var(--line)" }}>
                        <div>
                          <div className="font-semibold">{name}</div>
                          <div className="text-[10.5px]" style={{ color: "var(--muted)" }}>{role}</div>
                        </div>
                        <a href={`tel:${phone}`} className="text-[11px] shrink-0" style={{ color: "var(--gold)" }}>{phone}</a>
                      </div>
                    ))}
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
