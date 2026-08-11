import Section from "./Section";
import Reveal from "./Reveal";
import { classroomSkills, computerPackages } from "@/data/content";

function PackageIcon({ name }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name.includes("Excel")) {
    // A mark sheet: a grid with a totals row.
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M3 14h18M9 4v16M15 4v16" />
      </svg>
    );
  }

  if (name.includes("PowerPoint")) {
    // A slide on a stand.
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M12 16v4M8 20h8M7 12l3-3 2.5 2.5L17 7" />
      </svg>
    );
  }

  // A typed page: lesson plans and exam papers.
  return (
    <svg {...common}>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4M8 12h8M8 16h5" />
    </svg>
  );
}

function Level({ value }) {
  return (
    <span className="flex items-center gap-1.5" role="img" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((step) => (
        <span
          key={step}
          className={`h-1.5 w-6 rounded-full ${step <= value ? "bg-ochre" : "bg-hairline"}`}
        />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      legend="Skills"
      title="Computer packages & classroom practice"
      intro="Marks, schemes of work and lesson material all live on a computer now. Here is what I can do with one, and how I work when I am away from it."
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="legend">Computer packages</p>
          <div className="mt-5 space-y-4">
            {computerPackages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 80}>
                <article className="rounded-2xl border border-hairline bg-chalk/70 p-6 transition-shadow duration-300 hover:shadow-[0_1px_0_0_#C8912A]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 text-pine">
                      <PackageIcon name={pkg.name} />
                      <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                        {pkg.name}
                      </h3>
                    </div>
                    <Level value={pkg.level} />
                  </div>
                  <p className="mt-4 font-body leading-relaxed text-ink/75">
                    {pkg.use}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="md:col-span-5">
          <p className="legend">In the classroom</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {classroomSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-ink/15 px-4 py-2 font-mono text-[11px] uppercase tracking-legend text-ink/80 transition-colors hover:border-ochre hover:text-ink"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-pine/25 bg-pine/[0.06] p-6">
            <p className="legend">How I work</p>
            <p className="mt-3 font-body leading-relaxed text-ink/80">
              Reliable with schedules and comfortable with little supervision.
              I pay attention to what individual learners need, and I bring in
              the right people — colleagues, parents, the school administration —
              when a problem is bigger than my classroom.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
