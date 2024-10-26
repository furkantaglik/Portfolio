import ProjectsBoard from "@/components/general/projects/ProjectsBoard";

export default async function ProjectsPage() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Projects</h1>
      <ProjectsBoard />
    </section>
  );
}
