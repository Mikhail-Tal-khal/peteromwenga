import Section from "./Section";
import Reveal from "./Reveal";
import { teaching } from "@/data/content";

export default function Teaching() {
  return (
    <Section
      id="teaching"
      legend="What I teach"
      title="Subjects and duties"
      intro="Two examinable subjects, plus the pastoral and co-curricular work that keeps a class turning up ready to learn."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
        {teaching.map((item, i) => (
          <Reveal key={item.subject} delay={i * 70}>
            <article className="h-full bg-paper p-8 transition-colors duration-300 hover:bg-chalk">
              <p className="legend">{item.level}</p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                {item.subject}
              </h3>
              <p className="mt-4 font-body leading-relaxed text-ink/75">
                {item.note}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
