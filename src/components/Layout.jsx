import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate, Outlet } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import * as Lucide from "lucide-react";
import { college, navMenus, notices, departments, events, searchIndex } from "../data/site";
import { CollegeCrest, Icon, Logo, useDarkMode } from "./UI";

/* Brand marks are no longer shipped by lucide-react, so keep small inline
   versions for the top bar and footer. */
const brandPaths = {
  Facebook: "M14 8.5h2.5V5.4h-2.6c-2.3 0-3.6 1.4-3.6 3.7v1.6H8v3.1h2.3V21h3.2v-7.2h2.4l.4-3.1h-2.8V9.5c0-.7.2-1 .9-1z",
  Youtube: "M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15.2V8.8l5.2 3.2z",
  Instagram: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.1-9.4a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z",
  Linkedin: "M6.9 8.9H3.6V21h3.3V8.9zM5.3 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM21 14.1c0-3.2-1.7-4.7-4-4.7a3.5 3.5 0 0 0-3.1 1.7V8.9h-3.3V21h3.3v-6.4c0-1.5.7-2.4 2-2.4s1.8.9 1.8 2.4V21H21v-6.9z",
};

function BrandIcon({ name, size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={brandPaths[name] || brandPaths.Facebook} />
    </svg>
  );
}


const groupLabel = (label) => {
  const map = {
    About: "About Us",
    Academics: "Academics",
    Campus: "Campus & Admissions",
    More: "More at D.K.D.",
  };
  return map[label] || label;
};

/* ------------------------------------------------------------------ */
/*  Search palette                                                     */
/* ------------------------------------------------------------------ */
function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const index = useMemo(() => {
    const pages = searchIndex.map((i) => ({ label: i.title, sub: i.desc, href: i.href, group: i.group, icon: i.icon }));
    const noticeItems = notices.map((n) => ({
      label: n.title,
      sub: `${n.category} · ${new Date(n.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}`,
      href: `/notices/${n.id}`,
      group: "Notices",
      icon: "Bell",
    }));
    const deptItems = departments.map((d) => ({
      label: `Department of ${d.name}`,
      sub: `${d.stream} · Faculty & programmes`,
      href: `/departments/${d.slug}`,
      group: "Departments",
      icon: d.icon,
    }));
    const eventItems = events.map((e) => ({
      label: e.title,
      sub: e.displayDate,
      href: "/events",
      group: "Events",
      icon: "PartyPopper",
    }));
    return [...pages, ...deptItems, ...noticeItems, ...eventItems];
  }, []);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return index.slice(0, 9);
    return index
      .filter((i) => `${i.label} ${i.sub} ${i.group}`.toLowerCase().includes(term))
      .slice(0, 12);
  }, [q, index]);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => setSel(0), [q]);

  const go = (item) => {
    if (!item) return;
    onClose();
    navigate(item.href);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[sel]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="cmdk" onMouseDown={onClose}>
      <motion.div
        className="cmdk-box"
        initial={{ opacity: 0, y: -16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 border-b" style={{ borderColor: "var(--line)" }}>
          <Lucide.Search size={18} style={{ color: "var(--gold)" }} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search pages, departments, notices…"
            className="cmdk-input"
            aria-label="Search the website"
          />
          <kbd className="hidden sm:inline-block text-[10px] px-2 py-1 rounded-md border" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>ESC</kbd>
        </div>
        <div className="max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <div className="px-4 py-10 text-center text-sm text-muted">
              No results for “{q}”. Try “admission”, “library” or “NCC”.
            </div>
          )}
          {results.map((r, i) => (
            <div
              key={`${r.href}-${r.label}`}
              className={`cmdk-row ${i === sel ? "sel" : ""}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => go(r)}
            >
              <span className="w-8 h-8 rounded-lg grid place-items-center shrink-0" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
                <Icon name={r.icon} size={15} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold">{r.label}</span>
                <span className="block text-[11px] text-muted truncate">{r.sub}</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-muted hidden sm:block">{r.group}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 px-5 py-3 border-t text-[10px] text-muted" style={{ borderColor: "var(--line)" }}>
          <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded border" style={{ borderColor: "var(--line)" }}>↑</kbd><kbd className="px-1.5 py-0.5 rounded border" style={{ borderColor: "var(--line)" }}>↓</kbd> navigate</span>
          <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded border" style={{ borderColor: "var(--line)" }}>↵</kbd> open</span>
          <span className="ml-auto">D.K.D. College search</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */
function Header({ onSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [dark, setDark] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  return (
    <>
      <div className="topbar">
        <div className="container-x flex items-center justify-between gap-4 h-9">
          <div className="flex items-center gap-5 min-w-0">
            <span className="hidden sm:flex items-center gap-1.5 shrink-0">
              <Lucide.MapPin size={12} style={{ color: "#d8b36a" }} />
              <span className="truncate">Dergaon, Golaghat, Assam</span>
            </span>
            <a href={`tel:${college.phone}`} className="flex items-center gap-1.5 shrink-0">
              <Lucide.Phone size={12} style={{ color: "#d8b36a" }} />
              {college.phone}
            </a>
            <a href={`mailto:${college.email}`} className="hidden md:flex items-center gap-1.5">
              <Lucide.Mail size={12} style={{ color: "#d8b36a" }} />
              {college.email}
            </a>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link to="/downloads" className="hidden lg:inline hover:text-[#e9d29a]">Prospectus</Link>
            <Link to="/naac" className="hidden lg:inline hover:text-[#e9d29a]">NAAC A+</Link>
            <a href="https://dkdcollege.co.in/site/userlogin" target="_blank" rel="noreferrer" className="hidden sm:inline hover:text-[#e9d29a]">Student Login</a>
            <a href={college.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hidden sm:grid place-items-center w-5 h-5">
              <BrandIcon name="Facebook" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hidden sm:grid place-items-center w-5 h-5">
              <BrandIcon name="Youtube" />
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-shell">
          <div className="container-x flex items-center justify-between h-[74px] gap-4">
            <Logo size={50} compact />

            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Home
              </NavLink>
              {navMenus.map((menu) => (
                <div className="relative has-mega" key={menu.label}>
                  <button
                    type="button"
                    className="nav-link"
                    aria-haspopup="true"
                  >
                    {menu.label}
                    <Lucide.ChevronDown size={12} className="opacity-50" />
                  </button>
                  <div className="mega" role="menu">
                    <div className="flex items-center justify-between px-3 pb-3 mb-1 border-b" style={{ borderColor: "var(--line)" }}>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>{groupLabel(menu.label)}</span>
                      <span className="text-[10px] text-muted">D.K.D. College</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {menu.items.map((item) => (
                        <Link to={item.href} key={item.title} className="mega-item" role="menuitem">
                          <span className="mega-icon"><Icon name={item.icon} size={16} /></span>
                          <span>
                            <strong>{item.title}</strong>
                            <span>{item.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link to="/contact" className="mt-2 flex items-center justify-between rounded-xl px-4 py-3 text-[11px] font-semibold" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>
                      <span className="flex items-center gap-2"><Lucide.PhoneCall size={13} style={{ color: "var(--gold)" }} /> Need help? Talk to the college office</span>
                      <Lucide.ArrowRight size={13} style={{ color: "var(--gold)" }} />
                    </Link>
                  </div>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button onClick={onSearch} className="hidden md:flex items-center gap-2 h-9 px-3 rounded-full border text-[11px] text-muted transition-colors hover:border-[var(--gold)]" style={{ borderColor: "var(--line)" }} aria-label="Search">
                <Lucide.Search size={14} />
                <span className="hidden lg:inline">Search</span>
                <kbd className="hidden lg:inline text-[9px] px-1.5 py-0.5 rounded border" style={{ borderColor: "var(--line)" }}>⌘K</kbd>
              </button>
              <button
                onClick={() => setDark(!dark)}
                className="icon-btn"
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                title={dark ? "Light mode" : "Dark mode"}
              >
                {dark ? <Lucide.Sun size={15} /> : <Lucide.Moon size={15} />}
              </button>
              <Link to="/admissions" className="btn btn-gold btn-sm hidden sm:inline-flex">
                Apply Now <Lucide.ArrowUpRight size={13} />
              </Link>
              <button className="icon-btn xl:hidden" onClick={() => setMobile(true)} aria-label="Open menu">
                <Lucide.Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile backdrop */}
      {mobile && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobile(false)}
          aria-hidden="true"
        />
      )}
      {/* mobile drawer */}
      <div className={`mobile-drawer ${mobile ? "open" : ""}`}>
        <div className="flex items-center justify-between px-5 h-[74px] border-b" style={{ borderColor: "var(--line)" }}>
          <Logo size={44} compact />
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} className="icon-btn" aria-label="Toggle theme">
              {dark ? <Lucide.Sun size={16} /> : <Lucide.Moon size={16} />}
            </button>
            <button onClick={() => setMobile(false)} className="icon-btn" aria-label="Close menu">
              <Lucide.X size={18} />
            </button>
          </div>
        </div>
        <div className="px-5 py-4 flex-1">
          <NavLink to="/" className="mobile-link">Home <Lucide.ArrowUpRight size={16} /></NavLink>
          {navMenus.map((menu) => (
            <div key={menu.label}>
              <button
                className="mobile-link w-full"
                onClick={() => setOpenGroup(openGroup === menu.label ? null : menu.label)}
              >
                {menu.label}
                <Lucide.Plus size={16} style={{ transform: openGroup === menu.label ? "rotate(45deg)" : "none", transition: "transform .25s", color: "var(--gold)" }} />
              </button>
              <AnimatePresence initial={false}>
                {openGroup === menu.label && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="py-2 pl-3">
                      {menu.items.map((item) => (
                        <Link key={item.title} to={item.href} className="flex items-center gap-3 py-2.5 text-[13px] text-muted">
                          <Icon name={item.icon} size={14} className="text-gold" />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/notices" className="mobile-link">Notices <Lucide.Bell size={16} /></Link>
          <Link to="/gallery" className="mobile-link">Gallery <Lucide.Camera size={16} /></Link>
          <Link to="/contact" className="mobile-link">Contact <Lucide.MapPin size={16} /></Link>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link to="/admissions" className="btn btn-gold justify-center">Apply Now</Link>
            <button onClick={() => { setMobile(false); onSearch(); }} className="btn btn-outline justify-center">
              <Lucide.Search size={14} /> Search
            </button>
          </div>
          <div className="mt-6 rounded-xl p-4 text-[11px] leading-relaxed" style={{ background: "var(--bg-alt)", color: "var(--muted)" }}>
            <div className="flex items-center gap-2 font-semibold mb-1" style={{ color: "var(--text)" }}>
              <Lucide.Phone size={12} className="text-gold" /> {college.phone}
            </div>
            <div>{college.address.full}</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const newsletter = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <footer className="footer">
      <div className="absolute inset-0 jaapi opacity-30" />
      <div className="relative">
        <div className="container-x pt-16 pb-12 grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="footer-logo-ring"><CollegeCrest size={58} /></span>
              <div>
                <div className="font-display text-lg" style={{ color: "#fbf6e8", lineHeight: 1.2 }}>D.K.D. College</div>
                <div className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ color: "#d8b36a" }}>Autonomous · Dergaon</div>
              </div>
            </div>
            <p className="text-[12.5px] leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,.55)" }}>
              A NAAC A+ accredited, autonomous institution shaping capable, compassionate citizens since 1962.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {[
                { icon: "Facebook", href: college.facebook },
                { icon: "Youtube", href: "https://www.youtube.com/results?search_query=D.K.D.+College+Dergaon" },
              ].map((s) => (
                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.icon} className="w-8 h-8 rounded-full grid place-items-center transition-colors" style={{ border: "1px solid rgba(255,255,255,.16)", color: "rgba(255,255,255,.7)" }}>
                  <BrandIcon name={s.icon} size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Explore</h3>
            <div className="grid gap-2.5">
              {[
                ["About the College", "/about"],
                ["Mission & Vision", "/mission-vision"],
                ["Principal's Desk", "/principal"],
                ["Administration", "/administration"],
                ["Departments", "/departments"],
                ["Faculty Directory", "/faculty"],
              ].map(([label, href]) => <Link key={label} to={href}>{label}</Link>)}
            </div>
          </div>

          <div>
            <h3>For Students</h3>
            <div className="grid gap-2.5">
              {[
                ["Admissions 2026", "/admissions"],
                ["Academic Programmes", "/academics"],
                ["Academic Calendar", "/academic-calendar"],
                ["Notices & Circulars", "/notices"],
                ["Downloads & Forms", "/downloads"],
                ["Placement Cell", "/placement"],
              ].map(([label, href]) => <Link key={label} to={href}>{label}</Link>)}
            </div>
          </div>

          <div>
            <h3>Stay Connected</h3>
            <div className="grid gap-3 text-[12.5px]" style={{ color: "rgba(255,255,255,.62)" }}>
              <p className="flex items-start gap-2.5">
                <Lucide.MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#d8b36a" }} />
                {college.address.full}
              </p>
              <a href={`tel:${college.phone}`} className="flex items-center gap-2.5">
                <Lucide.Phone size={14} style={{ color: "#d8b36a" }} /> {college.phone}
              </a>
              <a href={`mailto:${college.email}`} className="flex items-center gap-2.5 break-all">
                <Lucide.Mail size={14} style={{ color: "#d8b36a" }} /> {college.email}
              </a>
            </div>
            <form onSubmit={newsletter} className="mt-5">
              <label className="block text-[10px] tracking-[0.16em] uppercase mb-2" style={{ color: "rgba(255,255,255,.45)" }}>Campus newsletter</label>
              <div className="flex gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 min-w-0 rounded-full px-4 py-2.5 text-[12px] outline-none"
                  style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.15)", color: "#fff" }}
                />
                <button className="w-10 h-10 rounded-full grid place-items-center shrink-0" style={{ background: "#d8b36a", color: "#13210f" }} aria-label="Subscribe">
                  <Lucide.ArrowRight size={15} />
                </button>
              </div>
              {sent && <p className="text-[11px] mt-2" style={{ color: "#e9d29a" }}>Thank you — you're on the list.</p>}
            </form>
          </div>
        </div>

        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-4 py-5 text-[11px]" style={{ borderTop: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.4)" }}>
            <p>© {new Date().getFullYear()} Dergaon Kamal Dowerah College (Autonomous). All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link to="/naac">NAAC</Link>
              <Link to="/committees">Committees</Link>
              <Link to="/downloads">RTI</Link>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} /> Site last updated Nov 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating utilities + scroll progress                               */
/* ------------------------------------------------------------------ */
function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="floating-actions fixed right-4 bottom-5 z-50 flex flex-col items-end gap-2.5">
      <a
        href="https://wa.me/919435354494?text=Hello%20D.K.D.%20College%2C%20I%20would%20like%20to%20know%20more%20about%20admissions."
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 rounded-full pl-3 pr-4 py-2 shadow-lg transition-transform hover:-translate-y-1"
        style={{ background: "#0c7a3f", color: "#fff" }}
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.8-3.5-3.4-.2-.3 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.2-.2-.5-.4zM12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg>
        <span className="text-[11px] font-bold hidden sm:inline">Chat with us</span>
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="icon-btn shadow-lg"
            aria-label="Back to top"
            style={{ background: "var(--forest)", color: "#f8f2e2", borderColor: "transparent" }}
          >
            <Lucide.ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[130] h-[2.5px] origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, #b8903f, #e9d29a)" }}
    />
  );
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0 });
      }, 90);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

/* ------------------------------------------------------------------ */
/*  Layout shell                                                       */
/* ------------------------------------------------------------------ */
export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="absolute left-4 top-3 z-[200] -translate-y-24 focus:translate-y-0 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-transform"
        style={{ background: "var(--forest)", color: "#f3e8cf" }}
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header onSearch={() => setSearchOpen(true)} />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
