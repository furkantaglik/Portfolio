"use server";
import { db } from "@/db/db";
import { certificatesTable } from "@/db/schema";
import { Certificate } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addCertificate(certificate: Certificate) {
  revalidatePath("/");
  try {
    await db.insert(certificatesTable).values(certificate);
  } catch (error) {}
}

export async function updateCertificate(certificate: Certificate) {
  revalidatePath("/");
  try {
    await db
      .update(certificatesTable)
      .set(certificate)
      .where(eq(certificatesTable, certificate.id));
  } catch (error) {}
}

export async function deleteCertificate(id: number) {
  revalidatePath("/");
  try {
    await db.delete(certificatesTable).where(eq(certificatesTable.id, id));
  } catch (error) {}
}

export async function getAllCertificate() {
  revalidatePath("/");
  revalidateTag("/");
  try {
    const data = await db.select().from(certificatesTable);
    return data;
  } catch (error) {}
}
