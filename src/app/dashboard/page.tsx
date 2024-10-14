import { db } from "@/db/db";
import { projectsTable } from "@/db/schema";
import React from "react";

export default async function page() {
  const data = await db.select().from(projectsTable);
  console.log(data);

  return <div>page</div>;
}
