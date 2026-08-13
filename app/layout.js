import { Bricolage_Grotesque, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Peter Omwenga — Teacher of Mathematics & Geography",
  description:
    "Portfolio of Peter Omwenga, a qualified teacher of Mathematics and Geography based between Nairobi and Kisii, Kenya. B.Ed. Arts & IT, Rongo University.",
  openGraph: {
    title: "Peter Omwenga — Teacher of Mathematics & Geography",
    description:
      "Qualified teacher of Mathematics and Geography, Nairobi & Kisii, Kenya. B.Ed. Arts & IT, Rongo University.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#EDF1EA",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
