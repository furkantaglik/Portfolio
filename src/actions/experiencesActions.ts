"use server";

import { db } from "@/db/db";
import { experiencesTable } from "@/db/schema";
import { Experience } from "@/types";
import { eq } from "drizzle-orm";

export async function addExperience(experience: Experience) {
  try {
    await db.insert(experiencesTable).values(experience);
  } catch (error) {}
}

export async function updateExperience(experience: Experience) {
  try {
    await db
      .update(experiencesTable)
      .set(experience)
      .where(eq(experiencesTable, experience.id));
  } catch (error) {}
}

export async function deleteExperience(id: number) {
  try {
    await db.delete(experiencesTable).where(eq(experiencesTable.id, id));
  } catch (error) {}
}

export async function getAllExperience() {
  try {
    const data = await db.select().from(experiencesTable);
    return data;
  } catch (error) {}
}