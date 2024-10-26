import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

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
  title: varchar("title", { length: 200 }).notNull(),
  company: varchar("company", { length: 100 }).notNull(),
  date: varchar("date", { length: 100 }).notNull(),
  source: varchar("source", { length: 100 }).notNull(),
});

export const educationsTable = pgTable("educations", {
  id: serial("id").primaryKey(),
  school: varchar("school", { length: 200 }).notNull(),
  section: varchar("section", { length: 200 }).notNull(),
  year: varchar("year", { length: 100 }).notNull(),
});

export const experiencesTable = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: varchar("company", { length: 200 }).notNull(),
  role: varchar("role", { length: 100 }).notNull(),
});
