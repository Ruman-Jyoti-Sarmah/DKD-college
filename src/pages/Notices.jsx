import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as Lucide from "lucide-react";
import {
  CtaBand,
  EmptyState,
  Icon,
  PageHero,
  Pill,
  Reveal,
} from "../components/UI";
import { college, downloads, notices } from "../data/site";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
const dateFmt = (value, options) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", options);

const dayOf = (value) => dateFmt(value, { day: "2-digit" });
const monthOf = (value) => dateFmt(value, { month: "short" });
const longDate = (value) =>
  dateFmt(value, { day: "numeric", month: "long", year: "numeric" });

const categoryTone = {
  Admission: "badge-gold",
  Examination: "badge-green",
  Event: "badge-green",
  Tender: "",
  Recruitment: "",
  Hostel: "",
  Scholarship: "badge-gold",
  General: "",
};

const allNotices = [...notices].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const categories = ["All", ...new Set(allNotices.map((n) => n.category))];

/* ------------------------------------------------------------------ */
/*  NOTICES LIST                                                      */
/* ------------------------------------------------------------------ */
export function Notices() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");

  const years = ["All", ...new Set(allNotices.map((n) => n.date.slice(0, 4)))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allNotices.filter((n) => {
      const matchCat = category === "All" || n.category === category;
      const matchYear = year === "All" || n.date.startsWith(year);
      const matchQuery =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q);
      return matchCat && matchYear && matchQuery;
    });
  }, [query, category, year]);

  const counts = useMemo(() => {
    const map = { All: allNotices.length };
    allNotices.forEach((n) => {
      map[n.category] = (map[n.category] || 0) + 1;
    });
    return map;
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Notice board"
        title={
          <>
            Every official word,{" "}
            <span className="serif-italic" style={{ color: "#e9d29a" }}>
              in one place.
            </span>
          </>
        }
        description="Admissions, examinations, hostels, tenders and college events — the latest circulars published by the office of the Principal."
        image="/images/img21.jpg"
        crumbs={[{ label: "Notices" }]}
      >
        <div className="flex flex-wrap items-center gap-3 mt-7">
          <Pill tone="gold">
            {allNotices.filter((n) => n.isNew).length} new this month
          </Pill>
          <span
            className="text-[11px]"
            style={{ color: "rgba(255,255,255,.55)" }}
          >
            Updated {longDate(allNotices[0].date)}
          </span>
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_290px] gap-10">
            {/* main column */}
            <div>
              {/* search & filters */}
              <div
                className="rounded-2xl border p-4 md:p-5 mb-7"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Lucide.Search
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--muted)" }}
                    />
                    <input
                      className="field pl-11"
                      placeholder="Search notices, circulars…"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      aria-label="Search notices"
                    />
                  </div>
                  <div className="sm:w-40 shrink-0">
                    <select
                      className="field"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      aria-label="Filter notices by year"
                    >
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y === "All" ? "All years" : y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {categories.map((c) => (
                    <button
                      key={c}
                      className={`tab ${category === c ? "active" : ""}`}
                      onClick={() => setCategory(c)}
                    >
                      {c}
                      <span className="ml-2 text-[10px] font-semibold">
                        {counts[c] || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                  Showing <strong style={{ color: "var(--text)" }}>{filtered.length}</strong>{" "}
                  of {allNotices.length} notices
                </p>
                {(query || category !== "All" || year !== "All") && (
                  <button
                    className="text-[11px] flex items-center gap-1.5"
                    style={{ color: "var(--gold)" }}
                    onClick={() => {
                      setQuery("");
                      setCategory("All");
                      setYear("All");
                    }}
                  >
                    <Lucide.X size={12} /> Clear filters
                  </button>
                )}
              </div>

              {filtered.length > 0 ? (
                <div className="space-y-3">
                  {filtered.map((n, i) => (
                    <Reveal key={n.id} delay={Math.min(i, 5) * 0.04}>
                      <Link
                        to={`/notices/${n.id}`}
                        className="group grid grid-cols-[58px_1fr_auto] gap-4 md:gap-5 items-start rounded-2xl border p-4 md:p-5 transition-all hover:-translate-y-0.5"
                        style={{
                          borderColor: "var(--line)",
                          background: "var(--surface)",
                          boxShadow: "0 1px 0 rgba(0,0,0,0)",
                        }}
                      >
                        <div
                          className="rounded-xl text-center py-2.5"
                          style={{ background: "var(--bg-alt)" }}
                        >
                          <div
                            className="font-display text-xl leading-none"
                            style={{ color: "var(--forest)" }}
                          >
                            {dayOf(n.date)}
                          </div>
                          <div
                            className="text-[9px] uppercase tracking-[0.16em] font-bold mt-1"
                            style={{ color: "var(--gold)" }}
                          >
                            {monthOf(n.date)}
                          </div>
                          <div
                            className="text-[9px] mt-0.5"
                            style={{ color: "var(--muted)" }}
                          >
                            {n.date.slice(0, 4)}
                          </div>
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span
                              className={`badge ${categoryTone[n.category] || ""}`}
                            >
                              {n.category}
                            </span>
                            {n.isNew && <span className="badge badge-new">New</span>}
                          </div>
                          <h2 className="font-display text-[17px] md:text-[19px] leading-snug group-hover:text-[color:var(--gold)] transition-colors">
                            {n.title}
                          </h2>
                          <p
                            className="text-[11.5px] leading-relaxed mt-1.5 line-clamp-2"
                            style={{ color: "var(--muted)" }}
                          >
                            {n.summary}
                          </p>
                        </div>

                        <span
                          className="hidden sm:grid place-items-center w-9 h-9 rounded-full shrink-0 mt-1 transition-all group-hover:bg-[color:var(--forest)] group-hover:text-[#e9d29a]"
                          style={{
                            border: "1px solid var(--line-strong)",
                            color: "var(--muted)",
                          }}
                          aria-hidden="true"
                        >
                          <Lucide.ArrowUpRight size={15} />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon="SearchX"
                  title="No notices match your search"
                  text="Try a different keyword, category or year."
                />
              )}
            </div>

            {/* sidebar */}
            <aside className="space-y-4">
              <div
                className="rounded-2xl border overflow-hidden sticky top-28"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
              >
                <div
                  className="px-5 py-4 flex items-center gap-2.5"
                  style={{ background: "var(--forest)" }}
                >
                  <Lucide.Bell size={15} style={{ color: "#e9d29a" }} />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "#f3e8cf" }}
                  >
                    Notice board
                  </span>
                </div>

                <div className="p-5">
                  <p
                    className="text-[11.5px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    Official notices are published here and on the physical notice
                    board outside the Principal's office.
                  </p>

                  <div className="mt-4 space-y-1">
                    {categories.slice(1).map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setCategory(c);
                          setQuery("");
                          setYear("All");
                        }}
                        className="w-full flex items-center justify-between text-[11.5px] py-1.5 hover:text-[color:var(--gold)] transition-colors"
                        style={{ color: "var(--muted)" }}
                      >
                        <span>{c}</span>
                        <span
                          className="text-[9.5px] rounded-full px-2 py-0.5"
                          style={{ background: "var(--bg-alt)" }}
                        >
                          {counts[c] || 0}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div
                    className="mt-5 pt-4"
                    style={{ borderTop: "1px solid var(--line)" }}
                  >
                    <div
                      className="text-[9px] uppercase tracking-[0.18em] font-bold mb-2"
                      style={{ color: "var(--gold-ink)" }}
                    >
                      Need help?
                    </div>
                    <a
                      href={`tel:${college.phone}`}
                      className="flex items-center gap-2 text-[11.5px] py-1"
                    >
                      <Lucide.Phone size={12} style={{ color: "var(--gold)" }} />
                      {college.phone}
                    </a>
                    <a
                      href={`mailto:${college.email}`}
                      className="flex items-center gap-2 text-[11.5px] py-1 break-all"
                    >
                      <Lucide.Mail size={12} style={{ color: "var(--gold)" }} />
                      {college.email}
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Lucide.Download size={14} style={{ color: "var(--gold)" }} />
                  <h3 className="text-[13px] font-semibold">Related downloads</h3>
                </div>
                {downloads.slice(0, 3).map((d) => (
                  <Link
                    key={d.title}
                    to="/downloads"
                    className="block text-[11px] py-1.5 hover:text-[color:var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {d.title}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  NOTICE DETAIL                                                     */
/* ------------------------------------------------------------------ */
export function NoticeDetail() {
  const { id } = useParams();
  const notice = allNotices.find((n) => n.id === id);
  const [copied, setCopied] = useState(false);

  if (!notice) {
    return (
      <>
        <PageHero
          eyebrow="Notice"
          title="Notice not found"
          description="This circular may have been archived or moved. Browse the notice board for the latest announcements."
          image="/images/img21.jpg"
          crumbs={[{ label: "Notices", href: "/notices" }, { label: "Not found" }]}
        />
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container-x">
            <EmptyState
              icon="FileQuestion"
              title="We could not find that notice"
              text="It may have expired. The full archive is always available."
            />
            <div className="text-center mt-6">
              <Link to="/notices" className="btn btn-forest">
                <Lucide.ArrowLeft size={15} /> Back to all notices
              </Link>
            </div>
          </div>
        </section>
        <CtaBand />
      </>
    );
  }

  const related = allNotices
    .filter((n) => n.id !== notice.id && n.category === notice.category)
    .slice(0, 4);
  const fallbackRelated = allNotices.filter((n) => n.id !== notice.id).slice(0, 4);
  const suggestions = related.length ? related : fallbackRelated;

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow={`${notice.category} · Official notice`}
        title={notice.title}
        image="/images/img21.jpg"
        crumbs={[
          { label: "Notices", href: "/notices" },
          { label: notice.category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <Pill tone="gold">
            <Lucide.CalendarDays size={11} className="inline mr-1.5" />
            {longDate(notice.date)}
          </Pill>
          {notice.isNew && <Pill tone="new">Recently published</Pill>}
          <Pill>{notice.category}</Pill>
        </div>
      </PageHero>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* article */}
            <article
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--line)", background: "var(--surface)" }}
            >
              <div
                className="px-6 md:px-9 py-5 flex flex-wrap items-center justify-between gap-3"
                style={{ borderBottom: "1px solid var(--line)" }}
              >
                <Link
                  to="/notices"
                  className="text-[11px] flex items-center gap-1.5"
                  style={{ color: "var(--muted)" }}
                >
                  <Lucide.ArrowLeft size={13} /> All notices
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    onClick={share}
                    className="icon-btn w-9 h-9"
                    aria-label="Copy link to this notice"
                    title="Copy link"
                  >
                    {copied ? (
                      <Lucide.Check size={14} style={{ color: "var(--gold)" }} />
                    ) : (
                      <Lucide.Link2 size={14} />
                    )}
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="icon-btn w-9 h-9"
                    aria-label="Print this notice"
                    title="Print"
                  >
                    <Lucide.Printer size={14} />
                  </button>
                </div>
              </div>

              <div className="px-6 md:px-9 py-7 md:py-9">
                <div
                  className="rounded-xl p-4 md:p-5 flex items-start gap-3"
                  style={{ background: "var(--bg-alt)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg grid place-items-center shrink-0"
                    style={{ background: "var(--forest)", color: "#e9d29a" }}
                  >
                    <Icon name="Megaphone" size={15} />
                  </span>
                  <div>
                    <div
                      className="text-[9px] uppercase tracking-[0.18em] font-bold"
                      style={{ color: "var(--gold-ink)" }}
                    >
                      Summary
                    </div>
                    <p
                      className="text-[12.5px] leading-relaxed mt-1"
                      style={{ color: "var(--text)" }}
                    >
                      {notice.summary}
                    </p>
                  </div>
                </div>

                <div className="prose-body mt-7 text-[14px] space-y-4">
                  {notice.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div
                  className="mt-8 rounded-xl border p-5"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-full grid place-items-center"
                        style={{ background: "var(--bg-alt)", color: "var(--gold)" }}
                      >
                        <Lucide.FileText size={16} />
                      </span>
                      <div>
                        <div className="text-[12px] font-semibold">
                          Official copy & attachments
                        </div>
                        <div className="text-[10.5px]" style={{ color: "var(--muted)" }}>
                          Issued by the Office of the Principal
                        </div>
                      </div>
                    </div>
                    <Link to="/downloads" className="btn btn-outline btn-sm">
                      <Lucide.Download size={13} /> Downloads
                    </Link>
                  </div>
                </div>

                <div
                  className="mt-7 pt-5 flex flex-wrap items-center justify-between gap-4 text-[10.5px]"
                  style={{ borderTop: "1px solid var(--line)", color: "var(--muted)" }}
                >
                  <span>
                    Published on {longDate(notice.date)} · {notice.category}
                  </span>
                  <span>
                    {college.shortName} (Autonomous), Dergaon
                  </span>
                </div>
              </div>
            </article>

            {/* sidebar */}
            <aside className="space-y-4">
              <div
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
              >
                <div className="px-5 py-4" style={{ background: "var(--forest)" }}>
                  <div
                    className="text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#d8b36a" }}
                  >
                    Related notices
                  </div>
                  <h2 className="font-display text-lg mt-1" style={{ color: "#fbf6e8" }}>
                    More from the board
                  </h2>
                </div>
                <div>
                  {suggestions.map((n, i) => (
                    <Link
                      key={n.id}
                      to={`/notices/${n.id}`}
                      className="block px-5 py-3.5 group"
                      style={{
                        borderTop: i === 0 ? "none" : "1px solid var(--line)",
                      }}
                    >
                      <div
                        className="text-[9px] uppercase tracking-[0.16em] font-bold"
                        style={{ color: "var(--gold-ink)" }}
                      >
                        {longDate(n.date)}
                      </div>
                      <div className="text-[12px] font-medium leading-snug mt-1 group-hover:text-[color:var(--gold)] transition-colors">
                        {n.title}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="px-5 py-4" style={{ borderTop: "1px solid var(--line)" }}>
                  <Link
                    to="/notices"
                    className="link-arrow text-[11px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "var(--gold-ink)" }}
                  >
                    View all notices <Lucide.ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Lucide.Info size={14} style={{ color: "var(--gold)" }} />
                  <h3 className="text-[13px] font-semibold">Please note</h3>
                </div>
                <p className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  This is a digital reproduction of an official college notice. In case
                  of any discrepancy, the signed notice available at the college office
                  shall prevail.
                </p>
              </div>

              <div
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: "var(--forest)" }}
              >
                <div className="absolute inset-0 jaapi opacity-50" />
                <div className="relative">
                  <h3
                    className="font-display text-lg"
                    style={{ color: "#fbf6e8" }}
                  >
                    Have a question?
                  </h3>
                  <p
                    className="text-[11px] leading-relaxed mt-2"
                    style={{ color: "rgba(255,255,255,.6)" }}
                  >
                    The college office is open on working days from 10 a.m. to 4 p.m.
                  </p>
                  <a
                    href={`tel:${college.phone}`}
                    className="inline-flex items-center gap-2 mt-4 text-[11px]"
                    style={{ color: "#e9d29a" }}
                  >
                    <Lucide.Phone size={12} /> {college.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
