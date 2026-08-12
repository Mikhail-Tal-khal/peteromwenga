import Section from "./Section";
import Reveal from "./Reveal";
import { education, educationDocumentsUrl } from "@/data/content";

export default function Education() {
  return (
    <Section
      id="education"
      legend="Education"
      title="Training and certificates"
    >
      <a
        href={educationDocumentsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-body text-lg text-pine underline underline-offset-4 hover:text-ink"
      >
        View schooling documents &amp; certificates →
      </a>
      <div className="mt-6 border-t border-hairline">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={i * 60}>
            <article className="grid gap-2 border-b border-hairline py-7 md:grid-cols-12 md:gap-8">
              <p className="legend md:col-span-3 md:pt-1">{item.period}</p>
              <div className="md:col-span-9">
                <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {item.school}
                </h3>
                <p className="mt-1 font-body text-lg text-pine">{item.award}</p>
                {item.detail ? (
                  <p className="mt-3 max-w-2xl font-body leading-relaxed text-ink/70">
                    {item.detail}
                  </p>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
