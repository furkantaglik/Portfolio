import About from "@/components/general/About";
import Arrow from "@/components/general/Arrow";
import Projects from "@/components/general/Projects";
import Skills from "@/components/general/Skills";

export default function Home() {
  return (
    <>
      <About />
      <Arrow margin={40} />
      <Skills />
      <Arrow margin={40} />
      <Projects />
    </>
  );
}
