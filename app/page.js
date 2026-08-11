import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teaching from "@/components/Teaching";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Teaching />
        <Experience />
        <Skills />
        <Education />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
