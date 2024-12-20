"use server";

import { db } from "@/db/db";
import { educationsTable } from "@/db/schema";
import { Education } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addEducation(education: Education) {
  try {
    await db.insert(educationsTable).values(education);
    revalidatePath("/");
  } catch (error) {}
}

export async function updateEducation(education: Education) {
  try {
    await db
      .update(educationsTable)
      .set(education)
      .where(eq(educationsTable, education.id));
    revalidatePath("/");
  } catch (error) {}
}

export async function deleteEducation(id: number) {
  try {
    await db.delete(educationsTable).where(eq(educationsTable.id, id));
    revalidatePath("/");
  } catch (error) {}
}

export async function getAllEducation() {
  try {
    const data = await db.select().from(educationsTable);
    return data;
  } catch (error) {}
}
