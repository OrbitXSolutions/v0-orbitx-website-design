import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { WhyOrbitX } from "@/components/why-orbitx";
import { Process } from "@/components/process";
import { Technologies } from "@/components/technologies";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyOrbitX />
      <Process />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
