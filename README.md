# Peter Omwenga — portfolio

A one-page Next.js portfolio built from the CV. Design theme: a survey map — contour
lines behind the hero, exercise-book grid on the page, map-legend labels above each
section. Mathematics and Geography, in one visual idea.

## Run it

You need [Node.js](https://nodejs.org) 18.17 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

The first `npm install` and `npm run dev` need an internet connection — Next downloads
the Google fonts (Bricolage Grotesque, Source Serif 4, IBM Plex Mono) at build time.

## Edit the content

Almost everything you would want to change lives in one file: **`data/content.js`**.
Name, phone numbers, email, profile paragraphs, subjects, jobs, education, skills,
interests and referees are all there as plain text. Change the text, save, and the
page updates.

A few specific things:

- **Skill levels.** In `computerPackages`, each entry has `level: 1–5`. These are my
  best guess from your CV — set them to what is honestly true for you. The dots on
  the page follow the number.
- **Your photo.** `public/peter.jpg` was pulled out of your CV. Replace it with a
  higher-resolution version if you have one; keep the same filename.
- **Your CV.** `public/peter-omwenga-cv.pdf` is the file you sent, wired to the
  "Download CV" button. Replace it whenever you update the CV.
- **Referees' phone numbers** are deliberately not on the site. Publishing someone
  else's mobile number on a public page is worth asking them about first — the page
  says contacts are shared on request instead. If your referees are happy for you to
  publish theirs, add them in `data/content.js` and render them in
  `components/Beyond.jsx`.

## Put it online (free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New →
   Project**, and pick the repository.
3. Accept the defaults and deploy. You get a live link like
   `peter-omwenga.vercel.app`, and every push updates it.

## File map

```
app/layout.js        fonts, page title, description
app/page.js          the order of the sections
app/globals.css      colours, grid background, animations
data/content.js      ← all your text lives here
components/
  Nav.jsx            top bar
  Hero.jsx           name, tagline, photo, buttons
  ContourField.jsx   the generated contour map behind the hero
  About.jsx          profile paragraphs + quick facts
  Teaching.jsx       subjects and duties
  Experience.jsx     work timeline
  Skills.jsx         computer packages + classroom skills
  Education.jsx      schools and certificates
  Beyond.jsx         interests + referees
  Contact.jsx        contact details and footer
  Section.jsx        shared section heading
  Reveal.jsx         fade-in on scroll
```

## Colours

| Name     | Hex       | Used for                        |
| -------- | --------- | ------------------------------- |
| paper    | `#EDF1EA` | page background                 |
| ink      | `#0F231E` | body text, contact block        |
| pine     | `#1E4C41` | headings, contour lines         |
| ochre    | `#C8912A` | accents, markers, skill dots    |
| hairline | `#C6D2CB` | rules and borders               |

Change them in `tailwind.config.js` and `app/globals.css`.
