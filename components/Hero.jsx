import Image from "next/image";
import ContourField from "./ContourField";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <ContourField />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper" />

      <div className="mx-auto max-w-page px-6 pb-20 pt-12 sm:px-10 md:pb-28 md:pt-20">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="legend flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>{profile.location}</span>
              <span aria-hidden="true" className="text-hairline">
                ／
              </span>
              <span>{profile.coordinates}</span>
            </p>

            <h1 className="mt-5 font-display text-[3.4rem] font-extrabold leading-[0.88] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
              <span className="block text-pine">{profile.firstName}</span>
              <span className="block">{profile.lastName}</span>
            </h1>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-10 bg-ochre" />
              <p className="font-mono text-xs uppercase tracking-legend text-ink">
                {profile.role}
              </p>
            </div>

            <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-ink/85 sm:text-xl">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-legend text-chalk transition-colors hover:bg-pine"
              >
                Get in touch
              </a>
              <a
                href="#experience"
                className="rounded-full border border-ink/25 px-6 py-3 font-mono text-[11px] uppercase tracking-legend text-ink transition-colors hover:border-ink hover:bg-ink/5"
              >
                See the classroom record
              </a>
              <a
                href="/peter-omwenga-cv.pdf"
                download
                className="px-2 py-3 font-mono text-[11px] uppercase tracking-legend text-pine underline decoration-ochre decoration-2 underline-offset-4 transition-colors hover:text-ochre"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative ml-auto w-full max-w-[19rem]">
              {/* Offset frame, like a map sheet registered slightly off the plate. */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.75rem] border border-ochre/60"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline bg-chalk">
                <Image
                  src={profile.photo}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  width={604}
                  height={603}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="legend mt-4 text-right">
                Available for teaching posts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
