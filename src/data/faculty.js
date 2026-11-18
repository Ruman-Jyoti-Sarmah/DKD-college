import { departments } from "./site";

/**
 * Portraits sourced from the official department pages of
 * dkdcollege.ac.in and stored locally in /public/images/faculty.
 * Faculty without an official portrait fall back to a designed monogram.
 */
export const facultyPortraits = {
  "Dr. Chandicharan Goswami": "chandicharan-goswami.jpg",
  "Ms. Labonya Bora": "labonya-bora.jpg",
  "Dr. Monika Chutia": "monika-chutia.jpg",
  "Sri Mridul Moran": "mridul-moran.jpg",
  "Ms. Jubilee Saikia": "jubilee-saikia.jpg",

  "Dr. Tridhara Bardoloi": "tridhara-bardoloi.jpg",
  "Sri Ranjan Gogoi": "ranjan-gogoi.jpg",
  "Ms. Subhrajyoti Saikia": "subhrajyoti-saikia.jpg",
  "Md. Siraj Ahmed": "siraj-ahmed.jpg",
  "Ms. Tejoswita Saikia": "tejoswita-saikia.jpg",
  "Ms. Nabanita Hazarika": "nabanita-hazarika.webp",

  "Dr. Sangita Hazarika": "sangita-hazarika.jpg",
  "Sri Parthajit Saikia": "parthajit-saikia.jpg",
  "Dr. Dipjyoti Gogoi": "dipjyoti-gogoi.jpg",
  "Dr. Diganta Mudoi": "diganta-mudoi.jpg",
  "Dr. Asfika Begum": "asfika-begum.jpg",

  "Dr. Khireswar Loying": "khireswar-loying.jpeg",
  "Dr. Pranjol Protim Kakoty": "pranjol-protim-kakoty.jpg",
  "Dr. Rituparna Manikiyal": "rituparna-manikiyal.jpg",

  "Ms. Elora Gogoi": "elora-gogoi.webp",
  "Md. Abul Kalam": "abul-kalam.jpg",
  "Sri Sukanta Ghosh": "sukanta-ghosh.jpg",

  "Dr. Navanita Devi": "navanita-devi.jpeg",
  "Dr. Dhiren Tamuli": "dhiren-tamuli.jpg",
  "Dr. Nandita Haloi": "nandita-haloi.jpg",
  "Ms. Lalhrietfel Riengsete": "lalhrietfel-riengsete.jpg",

  "Dr. Labanya Das": "labanya-das.jpg",
  "Dr. Priti Gogoi": "priti-gogoi.jpg",
  "Ms. Parboti Poonam Saikia": "parboti-poonam-saikia.jpg",
  "Dr. Himadree Borah": "himadree-borah.jpg",
  "Ms. Dhritisha Saikia": "dhritisha-saikia.jpg",

  "Dr. Ranjan Borthakur": "ranjan-borthakur.jpg",

  "Dr. Sikhajyoti Ojah": "sikhajyoti-ojah.jpg",
  "Dr. Ranjan Kumar Bordoloi": "ranjan-kumar-bordoloi.jpg",
  "Mr. Vikram Jyoti Mahanta": "vikram-jyoti-mahanta.jpg",
  "Dr. Jyoti Prasad Gogoi": "jyoti-prasad-gogoi.jpg",
  "Mr. Joyanta Sonowal": "joyanta-sonowal.jpg",

  "Dr. Sumbita Gogoi": "sumbita-gogoi.jpg",
  "Dr. Debajyoti Bhuyan": "debajyoti-bhuyan.jpg",
  "Ms. Namrata Sharma": "namrata-sharma.jpg",
  "Dr. Mrinal Saikia": "mrinal-saikia.jpg",
  "Dr. Pori Buragohain": "pori-buragohain.jpg",
  "Dr. Arindom Bikash Neog": "arindom-bikash-neog.jpg",

  "Dr. Parash Moni Thakur": "parash-moni-thakur.jpg",
  "Dr. Rupok Neog": "rupok-neog.jpg",
  "Dr. Songita Boruah": "songita-boruah.jpg",
  "Dr. Abhigyan Mahanta": "abhigyan-mahanta.jpg",
  "Ms. Bablee Phukan": "bablee-phukan.jpg",

  "Dr. Sristisri Upadhyaya": "sristisri-upadhyaya.jpg",
  "Dr. Deepa Sharma": "deepa-sharma.jpg",
  "Mr. Mrinmoy Nayan Pegu": "mrinmoy-nayan-pegu.jpg",

  "Dr. T.G. Devina": "t-g-devina.jpg",
  "Dr. Bristri Dutta": "bristri-dutta.jpg",
  "Dr. Rimlee Bora": "rimlee-bora.jpg",

  "Dr. Manoj Kr. Sharma": "manoj-kr-sharma.jpg",

  "Dr. Shahnoor Rahman": "shahnoor-rahman.jpg",
  "Ms. Ipshita Kashyap": "ipshita-kashyap.jpg",
  "Ms. Nalini Ranghang": "nalini-ranghang.webp",
  "Ms. Aparajita Neog": "aparajita-neog.jpg",
  "Mr. Bhargav Gautam Boruah": "bhargav-gautam-boruah.jpg",
};

export function photoFor(name) {
  const file = facultyPortraits[name];
  return file ? `/images/faculty/${file}` : null;
}

export function initials(name) {
  return name
    .replace(/^(Dr\.|Ms\.|Mr\.|Sri|Md\.|Mrs\.)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/** A flat, enriched directory used by the faculty page and department pages. */
export const facultyDirectory = departments.flatMap((dept) =>
  dept.faculty.map((member, index) => ({
    ...member,
    id: `${dept.slug}-${index}`,
    department: dept.name,
    departmentSlug: dept.slug,
    stream: dept.stream,
    subjects: dept.subjects,
    photo: photoFor(member.name),
    initials: initials(member.name),
  }))
);

export const facultyByDepartment = Object.fromEntries(
  departments.map((dept) => [
    dept.slug,
    facultyDirectory.filter((member) => member.departmentSlug === dept.slug),
  ])
);
