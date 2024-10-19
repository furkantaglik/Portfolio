"use client";
import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";
import { deleteProject, getAllProjects } from "@/actions/projectActions";

export default function ProjectsBoard() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getAllProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <section>
      <ProjectForm
        project={editingProject}
        setEditingProject={setEditingProject}
      />
      <h1 className="text-2xl font-bold mb-4 mt-10">Projects</h1>
      <div className="grid md:grid-cols-3 gap-x-5 gap-y-10">
        {projects.map((project) => (
          <div key={project.id} className="border p-2">
            <h2 className="text-lg font-semibold border-b text-center pb-2">
              {project.title}
            </h2>
            <p className="italic">{project.description}</p>
            <div className="flex justify-between mt-5">
              <Button
                className="rounded"
                variant="secondary"
                size="sm"
                onClick={() => handleEdit(project)}
              >
                <Pencil />
              </Button>
              <Button
                className="rounded"
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(project.id)}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
