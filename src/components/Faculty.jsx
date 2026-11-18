import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { facultyByDepartment, initials } from "../data/faculty";
import { college } from "../data/site";

/* ------------------------------------------------------------------ */
/*  Faculty portrait card                                              */
/* ------------------------------------------------------------------ */
export function FacultyCard({ member, onOpen, compact = false }) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(member)}
      className={`faculty-card group text-left ${compact ? "is-compact" : ""}`}
      aria-label={`View profile of ${member.name}`}
    >
      <div className="faculty-photo">
        {member.photo ? (
          <img src={member.photo} alt={member.name} loading="lazy" className="faculty-img" />
        ) : (
          <div className="faculty-monogram" aria-hidden="true">
            <span>{member.initials || initials(member.name)}</span>
          </div>
        )}
        <div className="faculty-photo-shade" />
        <span className="faculty-dept-badge">{member.department}</span>
        {/hod/i.test(member.role) && <span className="faculty-hod">HoD</span>}
        <span className="faculty-role-badge">{member.role}</span>
        <span className="faculty-view">
          View profile <Lucide.ArrowUpRight size={12} />
        </span>
      </div>
      <div className="faculty-card-body">
        <h3 className="faculty-card-name">{member.name}</h3>
        <p className="faculty-card-role">{member.role}</p>
        <p className="faculty-card-qual">{member.qual}</p>
        <div className="mt-4 flex items-center gap-2 text-[10px]" style={{ color: "var(--muted)" }}>
          <Lucide.BookOpen size={11} style={{ color: "var(--gold)" }} />
          <span className="truncate">{member.subjects[0]}</span>
        </div>
        {!compact && (
          <div className="faculty-card-tags">
            {member.subjects.slice(0, 2).map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Full profile dialog                                                */
/* ------------------------------------------------------------------ */
export function FacultyProfileModal({ member, onClose, onSelect }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!member) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [member, onClose]);

  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [member]);

  if (typeof document === "undefined") return null;

  const peers = member
    ? (facultyByDepartment[member.departmentSlug] || []).filter((f) => f.id !== member.id).slice(0, 6)
    : [];

  return createPortal(
    <AnimatePresence>
      {member && (
        <motion.div
          className="faculty-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-profile-name"
            className="faculty-modal"
            ref={dialogRef}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="faculty-modal-close" onClick={onClose} aria-label="Close faculty profile">
              <Lucide.X size={18} />
            </button>

            <div className="faculty-modal-portrait">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                <div className="faculty-monogram faculty-monogram-lg" aria-hidden="true">
                  <span>{member.initials || initials(member.name)}</span>
                </div>
              )}
              <div className="faculty-modal-portrait-caption">
                <span>{member.department}</span>
                <span>{member.stream} stream</span>
              </div>
            </div>

            <div className="faculty-modal-info">
              <div className="eyebrow">Faculty profile</div>
              <h2 id="faculty-profile-name" className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] mt-3">
                {member.name}
              </h2>
              <p className="faculty-modal-role">{member.role}</p>

              {/* Contact strip */}
              <div className="mt-5 rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--bg-alt)" }}>
                <div className="text-[9px] uppercase tracking-[0.16em] font-bold mb-3" style={{ color: "var(--gold-ink)" }}>
                  Reach the college
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href={`mailto:${college.email}`} className="flex items-center gap-3 rounded-lg border px-3 py-2.5 text-[11px]" style={{ borderColor: "var(--line)" }}>
                    <Lucide.Mail size={13} style={{ color: "var(--gold)" }} />
                    <span className="min-w-0 truncate">{college.email}</span>
                  </a>
                  <a href={`tel:${college.phone}`} className="flex items-center gap-3 rounded-lg border px-3 py-2.5 text-[11px]" style={{ borderColor: "var(--line)" }}>
                    <Lucide.Phone size={13} style={{ color: "var(--gold)" }} />
                    <span className="min-w-0 truncate">{college.phone}</span>
                  </a>
                  <span className="flex items-center gap-3 rounded-lg border px-3 py-2.5 text-[11px]" style={{ borderColor: "var(--line)" }}>
                    <Lucide.Building2 size={13} style={{ color: "var(--gold)" }} />
                    <span className="min-w-0 truncate">Dept. of {member.department}</span>
                  </span>
                  <span className="flex items-center gap-3 rounded-lg border px-3 py-2.5 text-[11px]" style={{ borderColor: "var(--line)" }}>
                    <Lucide.MapPin size={13} style={{ color: "var(--gold)" }} />
                    <span className="min-w-0 truncate">Dergaon, Golaghat</span>
                  </span>
                </div>
              </div>

              <div className="faculty-modal-block">
                <div className="faculty-modal-label">
                  <Lucide.GraduationCap size={13} /> Qualifications
                </div>
                <p className="text-[13px] leading-relaxed">{member.qual}</p>
              </div>

              <div className="faculty-modal-block">
                <div className="faculty-modal-label">
                  <Lucide.BookOpen size={13} /> Teaching areas
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {member.subjects.map((subject) => (
                    <span key={subject} className="badge">{subject}</span>
                  ))}
                </div>
              </div>

              <div className="faculty-modal-block">
                <div className="faculty-modal-label">
                  <Lucide.Building2 size={13} /> Department
                </div>
                <Link to={`/departments/${member.departmentSlug}`} onClick={onClose} className="faculty-modal-dept-link">
                  Department of {member.department}
                  <Lucide.ArrowUpRight size={12} />
                </Link>
              </div>

              {peers.length > 0 && (
                <div className="faculty-modal-block">
                  <div className="faculty-modal-label">
                    <Lucide.Users size={13} /> Also in this department
                  </div>
                  <div className="faculty-peers">
                    {peers.map((peer) => (
                      <button
                        key={peer.id}
                        type="button"
                        className="faculty-peer"
                        onClick={() => onSelect?.(peer)}
                        title={peer.name}
                      >
                        {peer.photo ? (
                          <img src={peer.photo} alt="" loading="lazy" />
                        ) : (
                          <span className="faculty-peer-mono" aria-hidden="true">
                            {peer.initials || initials(peer.name)}
                          </span>
                        )}
                        <span className="faculty-peer-name">{peer.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="faculty-modal-actions">
                <Link to="/admissions" onClick={onClose} className="btn btn-gold btn-sm">
                  Apply to D.K.D. <Lucide.ArrowUpRight size={12} />
                </Link>
                <Link to="/contact" onClick={onClose} className="btn btn-outline btn-sm">
                  Contact the college
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}