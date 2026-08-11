import Reveal from "./Reveal";

export default function Section({ id, legend, title, intro, children }) {
  return (
    <section id={id} className="section-pad">
      <div className="mx-auto max-w-page">
        <Reveal>
          <div className="rule" />
          <div className="mt-6 grid gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <p className="legend flex items-center gap-2">
                <span aria-hidden="true" className="inline-block h-2 w-2 bg-ochre" />
                {legend}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
                {title}
              </h2>
            </div>
            {intro ? (
              <p className="max-w-2xl font-body text-lg leading-relaxed text-ink/80 md:col-span-8 md:self-end">
                {intro}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
