import Projects from "./projects/page";
import TechStack from "./skills/page";
import AboutPage from "./about/page";
import Contact from "./contact/page";

import Banner from "@/src/components/banner/Banner";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Banner />
      <Projects />
      <TechStack />
      <AboutPage />
      <Contact />
    </section>
  );
}
