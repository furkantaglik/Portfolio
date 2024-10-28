"use server";

import { db } from "@/db/db";
import { educationsTable } from "@/db/schema";
import { Education } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addEducation(education: Education) {
  revalidatePath("/");
  try {
    await db.insert(educationsTable).values(education);
  } catch (error) {}
}

export async function updateEducation(education: Education) {
  revalidatePath("/");
  try {
    await db
      .update(educationsTable)
      .set(education)
      .where(eq(educationsTable, education.id));
  } catch (error) {}
}

export async function deleteEducation(id: number) {
  revalidatePath("/");
  try {
    await db.delete(educationsTable).where(eq(educationsTable.id, id));
  } catch (error) {}
}

export async function getAllEducation() {
  try {
    const data = await db.select().from(educationsTable);
    return data;
  } catch (error) {}
}
