import Section from "./Section";
import Reveal from "./Reveal";
import { interests, references } from "@/data/content";

export default function Beyond() {
  return (
    <Section
      id="beyond"
      legend="Outside class"
      title="Interests & referees"
      intro="What I do with my own time, and the people who can speak for my work."
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {interests.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <article className="h-full rounded-2xl border border-hairline p-6">
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-body leading-relaxed text-ink/70">
                    {item.note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100} className="md:col-span-5">
          <p className="legend">Referees</p>
          <ul className="mt-5 space-y-5">
            {references.map((ref) => (
              <li key={ref.name} className="border-l-2 border-ochre/60 pl-4">
                <p className="font-display text-lg font-semibold">{ref.name}</p>
                <p className="font-body text-ink/75">{ref.title}</p>
                <p className="font-body text-sm text-ink/60">{ref.org}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wide text-moss">
            Telephone contacts for referees are shared on request.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
