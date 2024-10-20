import { GetByProjectId } from "@/actions/projectActions";
import ProjectDetails from "@/components/general/ProjectDetails";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const projectDetail = await GetByProjectId(params.id);

  if (!projectDetail) {
    return (
      <section className="mt-20 text-center">
        <h1 className="text-2xl font-semibold">Project Not Found</h1>
        <p className="mt-2">The project you're looking for does not exist.</p>
      </section>
    );
  }

  return (
    <section className="mt-20">
      <ProjectDetails projectDetail={projectDetail} />
    </section>
  );
}
