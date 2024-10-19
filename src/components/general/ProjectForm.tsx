import { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addProject, updateProject } from "@/actions/projectActions";
import { deleteImage } from "@/lib/firebase";

export default function ProjectForm({
  project,
  setEditingProject,
}: {
  project?: any;
  setEditingProject: (project: null) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techs: "",
    sourceCodeUrl: "",
    demoUrl: "",
  });

  const [images, setImages] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        description: project.description || "",
        techs: project.techs.join(", ") || "",
        sourceCodeUrl: project.sourceCodeUrl || "",
        demoUrl: project.demoUrl || "",
      });
      setExistingImages(project.images || []);
    } else {
      setFormData({
        title: "",
        description: "",
        techs: "",
        sourceCodeUrl: "",
        demoUrl: "",
      });
      setImages([]);
      setExistingImages([]);
    }
  }, [project]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("techs", formData.techs);
    form.append("sourceCodeUrl", formData.sourceCodeUrl);
    form.append("demoUrl", formData.demoUrl);

    images.forEach((file) => form.append("images", file));

    if (project) {
      await updateProject(project.id, form);
      setEditingProject(null);
    } else {
      await addProject(form);
    }
  };

  const handleImageDelete = (imageUrl: string) => {
    setExistingImages((prev) => prev.filter((img) => img !== imageUrl));
    deleteImage(imageUrl);
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">
        {project ? "Edit Project" : "Add Project"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-x-10 gap-y-5"
      >
        <div>
          <Label className="text-lg font-semibold">Title</Label>
          <Input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Label className="text-lg font-semibold">Description</Label>
          <Input
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Label className="text-lg font-semibold">Techs</Label>
          <Input
            value={formData.techs}
            onChange={(e) =>
              setFormData({ ...formData, techs: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Label className="text-lg font-semibold">Source Code URL</Label>
          <Input
            value={formData.sourceCodeUrl}
            onChange={(e) =>
              setFormData({ ...formData, sourceCodeUrl: e.target.value })
            }
          />
        </div>
        <div>
          <Label className="text-lg font-semibold">Demo URL</Label>
          <Input
            value={formData.demoUrl}
            onChange={(e) =>
              setFormData({ ...formData, demoUrl: e.target.value })
            }
          />
        </div>
        <div>
          <Label className="text-lg font-semibold">Images</Label>
          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setImages(Array.from(e.target.files || []))}
          />
        </div>
        <div className="my-4">
          <h3 className="text-lg font-semibold">Existing Images</h3>
          <ul>
            {existingImages.map((url, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{url}</span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleImageDelete(url)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button className="font-semibold bg-secondary hover:bg-secondary">
          {project ? "Update Project" : "Add Project"}
        </Button>
        {project && (
          <Button className="font-semibold bg-transparent hover:bg-transparent hover:text-secondary">
            {"<"} Back To Add
          </Button>
        )}
      </form>
    </section>
  );
}
