import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout, { ScrollToTop } from "./components/Layout";
import Home from "./pages/Home";
import { About, Administration, MissionVision, Principal } from "./pages/About";
import {
  AcademicCalendar,
  Academics,
  DepartmentDetail,
  Departments,
  Downloads,
  Faculty,
} from "./pages/Academics";
import {
  Alumni,
  Events,
  Facilities,
  Gallery,
  Placement,
  StudentLife,
} from "./pages/Campus";
import { NoticeDetail, Notices } from "./pages/Notices";
import { Committees, Contact, Naac, NotFound } from "./pages/Institutional";
import { Admissions } from "./pages/Admissions";

const pageTitles = {
  "/": "Home",
  "/about": "About the College",
  "/mission-vision": "Mission & Vision",
  "/principal": "Principal's Desk",
  "/administration": "Administration",
  "/naac": "NAAC & Accreditation",
  "/committees": "Committees & Cells",
  "/contact": "Contact & Directions",
  "/academics": "Academic Programmes",
  "/departments": "Departments",
  "/faculty": "Faculty Directory",
  "/academic-calendar": "Academic Calendar",
  "/downloads": "Downloads",
  "/admissions": "Admissions 2026–27",
  "/facilities": "Campus & Facilities",
  "/student-life": "Student Life",
  "/placement": "Placement Cell",
  "/alumni": "Alumni",
  "/gallery": "Campus Gallery",
  "/events": "Events",
  "/notices": "Notices & Circulars",
};

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const base = "D.K.D. College (Autonomous), Dergaon";
    const key = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
    const label = pageTitles[key];
    document.title = label
      ? `${label} · ${base}`
      : `Page not found · ${base}`;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/naac" element={<Naac />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/contact" element={<Contact />} />

          {/* Academics */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/downloads" element={<Downloads />} />

          {/* Admissions */}
          <Route path="/admissions" element={<Admissions />} />

          {/* Campus */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />

          {/* Notices */}
          <Route path="/notices" element={<Notices />} />
          <Route path="/notices/:id" element={<NoticeDetail />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
