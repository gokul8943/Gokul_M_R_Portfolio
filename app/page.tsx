import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative z-0">
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
