"use server";
import { db } from "@/db/db";
import { certificatesTable } from "@/db/schema";
import { Certificate } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addCertificate(certificate: Certificate) {
  try {
    await db.insert(certificatesTable).values(certificate);
    revalidatePath("/");
  } catch (error) {}
}

export async function updateCertificate(certificate: Certificate) {
  try {
    await db
      .update(certificatesTable)
      .set(certificate)
      .where(eq(certificatesTable, certificate.id));
    revalidatePath("/");
  } catch (error) {}
}

export async function deleteCertificate(id: number) {
  try {
    await db.delete(certificatesTable).where(eq(certificatesTable.id, id));
    revalidatePath("/");
  } catch (error) {}
}

export async function getAllCertificate() {
  try {
    const data = await db.select().from(certificatesTable);
    return data;
  } catch (error) {}
}
