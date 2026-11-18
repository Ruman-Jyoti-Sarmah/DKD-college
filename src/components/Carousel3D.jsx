import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as Lucide from "lucide-react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/**
 * A reusable 3D "coverflow" carousel.
 *
 * The active item sits centre stage; neighbours rotate away in perspective and
 * fade with depth. Supports swipe/drag, arrow keys, dots and autoplay, and is
 * fully responsive from 320px phones to wide desktops.
 */
export default function Carousel3D({
  items = [],
  renderItem,
  getKey = (item, i) => item?.id ?? item?.slug ?? item?.name ?? i,
  ariaLabel = "Carousel",
  height = 420,
  className = "",
  autoPlay = false,
  interval = 5200,
  stageClassName = "",
}) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef(null);
  const drag = useRef({ x: 0, active: false, moved: false });

  const count = items.length;
  const safeIndex = count ? ((index % count) + count) % count : 0;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setWidth(el.getBoundingClientRect().width);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (safeIndex > count - 1) setIndex(0);
  }, [count, safeIndex]);

  const go = useCallback(
    (direction) => {
      if (count < 2) return;
      setIndex((current) => ((current + direction) % count + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (!autoPlay || paused || count < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [autoPlay, paused, count, interval]);

  const { cardW, step } = useMemo(() => {
    if (!width) return { cardW: 300, step: 220 };
    const isMobile = width < 640;
    const isTablet = width < 1024;
    const cardW = isMobile
      ? clamp(width * 0.68, 200, 300)
      : isTablet
      ? clamp(width * 0.42, 270, 380)
      : clamp(width * 0.33, 320, 440);
    const step = cardW * (isMobile ? 0.66 : 0.82);
    return { cardW, step };
  }, [width]);

  const transformFor = (relative) => {
    const depth = Math.abs(relative);
    const dir = Math.sign(relative);
    if (depth > 3) {
      return {
        transform: `translateX(${dir * step * 2.7}px) translateZ(-520px) rotateY(${dir * 54}deg) scale(0.5)`,
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none",
        visibility: "hidden",
      };
    }
    if (depth === 0) {
      return {
        transform: "translateX(0) translateZ(0px) rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 40,
      };
    }
    if (depth === 1) {
      return {
        transform: `translateX(${dir * step}px) translateZ(-150px) rotateY(${dir * 30}deg) scale(0.94)`,
        opacity: 1,
        zIndex: 30,
      };
    }
    if (depth === 2) {
      return {
        transform: `translateX(${dir * step * 1.72}px) translateZ(-300px) rotateY(${dir * 43}deg) scale(0.88)`,
        opacity: 0.72,
        zIndex: 20,
      };
    }
    return {
      transform: `translateX(${dir * step * 2.3}px) translateZ(-430px) rotateY(${dir * 49}deg) scale(0.8)`,
      opacity: 0.32,
      zIndex: 10,
    };
  };

  const onPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { x: event.clientX, active: true, moved: false };
  };

  const onPointerMove = (event) => {
    if (!drag.current.active) return;
    if (Math.abs(event.clientX - drag.current.x) > 8) drag.current.moved = true;
  };

  const endDrag = (event) => {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.x;
    drag.current.active = false;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    window.setTimeout(() => {
      drag.current.moved = false;
    }, 60);
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  if (!count) return null;

  return (
    <div
      className={`c3d ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className={`c3d-stage ${stageClassName}`} style={{ "--c3d-h": `${height}px` }} onKeyDown={onKeyDown}>
        <div
          ref={viewportRef}
          className="c3d-viewport"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          tabIndex={0}
          aria-label={`${ariaLabel} — use arrow keys or swipe to browse`}
        >
          <div className="c3d-track">
            {items.map((item, i) => {
              let relative = i - safeIndex;
              const half = count / 2;
              if (count > 1) {
                if (relative > half) relative -= count;
                if (relative < -half) relative += count;
              }
              const active = relative === 0;
              const style = transformFor(relative);
              return (
                <div
                  key={getKey(item, i)}
                  className={`c3d-item ${active ? "is-active" : ""}`}
                  style={{
                    width: `${cardW}px`,
                    marginLeft: `${-cardW / 2}px`,
                    ...style,
                    position: "absolute",
                  }}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  onClickCapture={(event) => {
                    if (drag.current.moved) {
                      event.preventDefault();
                      event.stopPropagation();
                      return;
                    }
                    if (!active) {
                      event.preventDefault();
                      event.stopPropagation();
                      setIndex(i);
                    }
                  }}
                >
                  <div className="c3d-card">{renderItem?.(item, active, i)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {count > 1 && (
          <>
            <button type="button" className="c3d-arrow is-prev" onClick={() => go(-1)} aria-label="Previous slide">
              <Lucide.ChevronLeft size={20} />
            </button>
            <button type="button" className="c3d-arrow is-next" onClick={() => go(1)} aria-label="Next slide">
              <Lucide.ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="c3d-foot">
        <div className="c3d-count" aria-live="polite">
          <strong>{String(safeIndex + 1).padStart(2, "0")}</strong>
          <span>/ {String(count).padStart(2, "0")}</span>
        </div>

        {count <= 12 ? (
          <div className="c3d-dots">
            {items.map((item, i) => (
              <button
                key={getKey(item, i)}
                type="button"
                className={`c3d-dot ${i === safeIndex ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === safeIndex ? "true" : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="c3d-progress" aria-hidden="true">
            <span style={{ width: `${((safeIndex + 1) / count) * 100}%` }} />
          </div>
        )}
      </div>
    </div>
  );
}
