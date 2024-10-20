import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  techs: varchar("techs").array().notNull(),
  sourceCodeUrl: varchar("sourceCodeUrl"),
  demoUrl: varchar("demoUrl"),
  images: varchar("images").array(),
});

export const certificatesTable = pgTable("certificates", {
  id: serial("id").primaryKey(),
});
