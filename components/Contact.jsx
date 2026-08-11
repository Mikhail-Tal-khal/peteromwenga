import Reveal from "./Reveal";
import { profile } from "@/data/content";

function toWhatsApp(number) {
  // 0705603250 -> 254705603250
  return `https://wa.me/254${number.replace(/^0/, "")}`;
}

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="mt-10 bg-ink text-paper">
      <div className="mx-auto max-w-page px-6 py-20 sm:px-10 md:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-legend text-ochre">
            Contact
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            If your school needs a Mathematics or Geography teacher, I can start
            with the next term.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-legend text-paper/50">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block break-all font-display text-lg font-semibold text-paper underline decoration-ochre decoration-2 underline-offset-4 transition-colors hover:text-ochre"
              >
                {profile.email}
              </a>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-legend text-paper/50">
                Phone
              </p>
              <a
                href={`tel:${profile.phonePrimary}`}
                className="mt-2 block font-display text-lg font-semibold text-paper transition-colors hover:text-ochre"
              >
                {profile.phonePrimary}
              </a>
              <a
                href={`tel:${profile.phoneSecondary}`}
                className="mt-1 block font-display text-lg font-semibold text-paper/70 transition-colors hover:text-ochre"
              >
                {profile.phoneSecondary}
              </a>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-legend text-paper/50">
                WhatsApp
              </p>
              <a
                href={toWhatsApp(profile.phonePrimary)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-full border border-paper/30 px-5 py-2.5 font-mono text-[11px] uppercase tracking-legend transition-colors hover:border-ochre hover:text-ochre"
              >
                Send a message
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-col gap-3 border-t border-paper/15 pt-8 font-mono text-[11px] uppercase tracking-legend text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {profile.firstName} {profile.lastName} — {profile.role}
          </p>
          <p>
            {profile.location} · {year}
          </p>
        </footer>
      </div>
    </section>
  );
}
