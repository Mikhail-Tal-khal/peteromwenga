// A generated topographic contour field: the one place this site is loud.
// Contours are drawn deterministically (no randomness) so the server and the
// browser always produce identical markup.

function ringPath(cx, cy, radius, phases, amplitude) {
  const points = [];
  const steps = 160;

  for (let i = 0; i < steps; i += 1) {
    const t = (i / steps) * Math.PI * 2;
    // Sum of a few sines gives the wobbly, hand-surveyed look of real contours.
    const wobble =
      Math.sin(t * 2 + phases[0]) * 1 +
      Math.sin(t * 3 + phases[1]) * 0.55 +
      Math.sin(t * 5 + phases[2]) * 0.3;
    const r = radius * (1 + (wobble * amplitude) / 3);
    const x = cx + Math.cos(t) * r * 1.35;
    const y = cy + Math.sin(t) * r;
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return `M ${points.join(" L ")} Z`;
}

function peak({ cx, cy, count, base, step, phases, amplitude, delay }) {
  const rings = [];

  for (let i = 0; i < count; i += 1) {
    const radius = base + i * step;
    const isIndex = i % 4 === 0; // index contours are drawn heavier on maps
    const perimeter = Math.round(2 * Math.PI * radius * 1.4);

    rings.push({
      d: ringPath(cx, cy, radius, [phases[0] + i * 0.4, phases[1] - i * 0.3, phases[2] + i * 0.22], amplitude),
      width: isIndex ? 1.6 : 0.9,
      opacity: isIndex ? 0.55 : 0.32,
      dash: perimeter,
      delay: delay + i * 0.09,
    });
  }

  return rings;
}

export default function ContourField() {
  const rings = [
    ...peak({
      cx: 880,
      cy: 300,
      count: 13,
      base: 34,
      step: 27,
      phases: [0.3, 1.1, 2.4],
      amplitude: 0.16,
      delay: 0,
    }),
    ...peak({
      cx: 250,
      cy: 620,
      count: 9,
      base: 26,
      step: 31,
      phases: [1.9, 0.4, 3.1],
      amplitude: 0.22,
      delay: 0.5,
    }),
  ];

  return (
    <svg
      className="drift h-full w-full"
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="#1E4C41" strokeLinejoin="round">
        {rings.map((ring, i) => (
          <path
            key={i}
            className="trace"
            d={ring.d}
            strokeWidth={ring.width}
            strokeOpacity={ring.opacity}
            style={{ "--dash": `${ring.dash}`, animationDelay: `${ring.delay}s` }}
          />
        ))}
      </g>

      {/* Spot heights, the way a survey sheet marks a summit. */}
      <g fill="#C8912A" fillOpacity="0.75">
        <circle cx="880" cy="300" r="3.5" />
        <circle cx="250" cy="620" r="3" />
      </g>
    </svg>
  );
}
