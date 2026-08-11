import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section
      id="experience"
      legend="Work"
      title="Where I have worked"
      intro="A teaching post in Kisii, and three years of part-time online work carried alongside my degree."
    >
      <ol className="relative border-l border-hairline pl-8 sm:pl-12">
        {experience.map((job, i) => (
          <li key={job.org} className="relative pb-14 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-ochre ring-4 ring-paper sm:-left-[53px]"
            />
            <Reveal delay={i * 90}>
              <p className="legend">{job.period}</p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {job.org}
              </h3>
              <p className="mt-1 font-body text-lg italic text-pine">
                {job.title} · {job.place}
              </p>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 font-body leading-relaxed text-ink/80"
                  >
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-ochre" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
