import About from "@/components/general/About";
import Arrow from "@/components/general/Arrow";
import ProjectList from "@/components/general/ProjectList";
import Projects from "@/components/general/ProjectList";
import Skills from "@/components/general/Skills";

export default function Home() {
  return (
    <>
      <About />
      <Arrow margin={40} />
      <Skills />
      <Arrow margin={40} />
      <ProjectList />
    </>
  );
}
