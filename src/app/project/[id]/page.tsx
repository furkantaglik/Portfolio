import { GetByProjectId } from "@/actions/projectActions";
import ProjectDetails from "@/components/general/ProjectDetails";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const ProjectDetail = await GetByProjectId(params.id);
  return (
    <section className="mt-20">
      <ProjectDetails projectDetail={ProjectDetail} />
    </section>
  );
}
