import Section from "./Section";
import Reveal from "./Reveal";
import { about, profile } from "@/data/content";

const facts = [
  { label: "Qualification", value: "B.Ed. Arts & IT" },
  { label: "Subjects", value: "Mathematics, Geography" },
  { label: "Trained in", value: "Guidance & counselling" },
  { label: "Based in", value: profile.location },
];

export default function About() {
  return (
    <Section id="about" legend="Profile" title="Who you would be hiring">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="space-y-6 md:col-span-7">
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="font-body text-lg leading-relaxed text-ink/85">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="md:col-span-5">
          <dl className="rounded-2xl border border-hairline bg-chalk/70 p-7">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-b border-hairline/70 py-4 first:pt-0 last:border-b-0 last:pb-0"
              >
                <dt className="legend">{fact.label}</dt>
                <dd className="text-right font-display text-base font-semibold">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
