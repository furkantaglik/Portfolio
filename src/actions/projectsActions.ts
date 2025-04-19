"use server";
import { db } from "@/db/db";
import { projectsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { uploadImage, deleteImage } from "@/lib/firebase";
import { revalidatePath } from "next/cache";

export async function addProject(data: FormData) {
  try {
    const imageFiles = data.getAll("images") as File[];
    const imageUrls: string[] = [];

    for (const file of imageFiles) {
      if (file instanceof File) {
        const imageUrl = await uploadImage(file);
        imageUrls.push(imageUrl);
      }
    }

    const newProject = {
      title: data.get("title") as string,
      description: data.get("description") as string,
      techs: (data.get("techs") as string).split(","),
      sourceCodeUrl: data.get("sourceCodeUrl") as string,
      demoUrl: data.get("demoUrl") as string,
      images: imageUrls,
    };

    await db.insert(projectsTable).values(newProject);
    revalidatePath("/project/[id]", "page");
  } catch (error) {}
}

export async function updateProject(id: string, data: FormData) {
  try {
    const imageFiles = data.getAll("images") as File[];
    const existingImages = data.get("existingImages") as FormDataEntryValue;
    

    const imageUrls: string[] = Array.isArray(existingImages)
      ? existingImages
      : existingImages
      ? [existingImages as string]
      : [];

    for (const file of imageFiles) {
      if (file instanceof File) {
        const imageUrl = await uploadImage(file);  
        imageUrls.push(imageUrl);
      }
    }

    const updatedProject = {
      title: data.get("title") as string,
      description: data.get("description") as string,
      techs: (data.get("techs") as string).split(","),
      sourceCodeUrl: data.get("sourceCodeUrl") as string,
      demoUrl: data.get("demoUrl") as string,
      images: imageUrls,
    };

    await db
      .update(projectsTable)
      .set(updatedProject)
      .where(eq(projectsTable.id, Number(id)));
    revalidatePath("/project/[id]", "page");
  } catch (error) {
  }
}

export async function deleteProject(id: string) {
  try {
    const project = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.id, Number(id)))
      .execute();

    if (project.length > 0) {
      for (const imageUrl of project[0].images) {
        await deleteImage(imageUrl);
      }

      await db.delete(projectsTable).where(eq(projectsTable.id, Number(id)));
    }
    revalidatePath("/project/[id]", "page");
  } catch (error) {}
}

export async function getAllProjects() {
  try {
    const projects = await db.select().from(projectsTable);
    return projects.map((project) => ({
      ...project,
      images: project.images || [],
    }));
  } catch (error) {}
}

export async function GetByProjectId(id: string) {
  try {
    const project = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.id, Number(id)))
      .execute();

    return project[0];
  } catch (error) {}
}
