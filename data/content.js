// Everything the site displays lives here. Edit this one file to update the site.

export const profile = {
  firstName: "Peter",
  lastName: "Omwenga",
  role: "Teacher of Mathematics & Geography",
  tagline:
    "I teach the two subjects learners most often decide they are bad at — and I spend my time proving them wrong.",
  location: "Kisii, Kenya",
  phonePrimary: "0705603250",
  phoneSecondary: "0789508216",
  email: "kevinsp843@gmail.com",
  photo: "/peter.jpg",
  // Rough map reference for Kisii — used as a decorative coordinate label.
  coordinates: "0.6817° S, 34.7667° E",
};

export const about = [
  "I am a qualified teacher of Mathematics and Geography, trained at Rongo University and most recently teaching at Maroo Esinde Secondary School in Kisii.",
  "My classroom runs on two habits: check that every learner is actually with me before moving on, and connect each topic to something they can see outside the window. Geography makes that easy. Mathematics takes more work, so that is where I put more of it.",
  "Alongside teaching I trained in guidance and counselling, which shapes how I handle the learner who has gone quiet, fallen behind, or stopped attending. I am reliable with schedules, comfortable working with little supervision, and attentive to what individual learners need.",
];

export const teaching = [
  {
    subject: "Mathematics",
    level: "Form 1 – Form 4",
    note: "Number work, algebra, geometry and statistics, taught with worked examples on the board and short checks before the class moves on.",
  },
  {
    subject: "Geography",
    level: "Form 1 – Form 4",
    note: "Physical and human geography, map work and fieldwork, using local landforms, weather and settlement patterns as the starting point.",
  },
  {
    subject: "Guidance & counselling",
    level: "All learners",
    note: "Trained through the Department of Psychology at Rongo University. Individual support, class talks and follow-up on learners who are struggling.",
  },
  {
    subject: "Life skills & physical education",
    level: "Class and field",
    note: "Practical sessions in and out of the classroom, plus patron duties for the Environmental and Mathematics clubs.",
  },
];

export const experience = [
  {
    org: "Maroo Esinde Secondary School",
    place: "Kisii",
    title: "Teacher of Mathematics and Geography",
    period: "May 2025 – October 2025",
    points: [
      "Taught Mathematics and Geography, managed classes and kept records of learner progress.",
      "Served as patron of the Environmental Club and the Mathematics Club.",
      "Guided, counselled and motivated learners inside and outside the classroom.",
      "Led life skills and physical education sessions in class and on the field.",
    ],
  },
  {
    org: "Goldmine Agencies Limited",
    place: "Nairobi — remote",
    title: "Affiliate Marketing Agent",
    period: "2022 – 2025",
    points: [
      "Worked online, part time, alongside full-time study.",
      "Kept daily logs and reports, recording information accurately for the company's records.",
      "Followed company policies and procedures to hold the standard of service expected of the team.",
    ],
  },
];

export const education = [
  {
    school: "Rongo University",
    award: "Bachelor of Education Arts and IT",
    detail:
      "Mathematics and Geography. Coursework across theory, analysis, calculation and communication, ending in a full teaching practice placement.",
    period: "2021 – 2025",
  },
  {
    school: "Rongo University — Department of Psychology",
    award: "Training in guidance and counselling",
    detail:
      "Supporting learners with day-to-day difficulties and keeping the school environment safe and healthy for everyone in it.",
    period: "During degree",
  },
  {
    school: "Isamwera Secondary School",
    award: "KCSE Certificate",
    detail: "",
    period: "2018 – 2020",
  },
  {
    school: "Kabosi Secondary School",
    award: "Secondary studies",
    detail: "",
    period: "2017 – 2018",
  },
  {
    school: "St. Reges Primary School",
    award: "KCPE Certificate",
    detail: "",
    period: "2008 – 2016",
  },
];

// level: 1–5. Adjust these honestly — they are yours to set.
export const computerPackages = [
  {
    name: "Microsoft Word",
    level: 5,
    use: "Schemes of work, lesson plans, exam papers and letters — laid out cleanly, with headers, tables and consistent formatting.",
  },
  {
    name: "Microsoft Excel",
    level: 4,
    use: "Mark sheets and class lists with formulas for totals, averages, grades and positions, plus charts that show a class trend at a glance.",
  },
  {
    name: "Microsoft PowerPoint",
    level: 4,
    use: "Slides for Geography topics that need diagrams and photographs, and for staff or club presentations.",
  },
];

export const classroomSkills = [
  "Effective listening",
  "Attention to detail",
  "Organisation",
  "Adaptability",
  "Basic accountability",
  "Record keeping",
  "Learner management",
  "Working with minimal supervision",
];

export const interests = [
  {
    name: "Hiking",
    note: "Geography fieldwork that happens to be a weekend. Landforms are easier to teach once you have stood on one.",
  },
  {
    name: "Travelling",
    note: "New places, new settlement patterns, new examples to bring back to class.",
  },
  {
    name: "Reading",
    note: "Mostly subject material and anything that sharpens how I explain things.",
  },
  {
    name: "Watching",
    note: "Documentaries on climate, landscape and the way people live.",
  },
];

export const references = [
  {
    name: "Mr. Mobert Aberi",
    title: "Principal",
    org: "Maroo Esinde Secondary School, Kisii",
  },
  {
    name: "Dr. Elizabeth Khalili",
    title: "Dean",
    org: "Rongo University, P.O. Box 103 – 40404, Rongo",
  },
  {
    name: "Juntesh Mumbi",
    title: "Manager",
    org: "Goldmine Agencies Limited, Nairobi",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#teaching", label: "Teaching" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
