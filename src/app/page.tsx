import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Proof } from "@/components/sections/proof";
import { Background } from "@/components/sections/background";
import { Skills } from "@/components/sections/skills";
import { Architecture } from "@/components/sections/architecture";
import { Testimonials } from "@/components/sections/testimonials";
import { Personal } from "@/components/sections/personal";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <main>
        <div className="container">
          <Hero />
          <Pillars />
          <Proof />
          <Background />
          <Skills />
        </div>
        {/* Full-bleed accent band — spans the viewport, content stays in-column. */}
        <Architecture />
        <div className="container">
          <Testimonials />
          <Personal />
        </div>
      </main>
      <Footer />
    </div>
  );
}
