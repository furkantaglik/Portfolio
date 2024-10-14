// drizzle/schema.ts
import {
  customType,
  integer,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";

const bytea = customType<{ data: Buffer; notNull: false; default: false }>({
  dataType() {
    return "bytea";
  },
});

export const usersTable = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar("firstName", { length: 255 }).notNull(),
  lastName: varchar("lastName", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  avatar: bytea("avatar"),
});

export const projectsTable = pgTable("projects", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  techs: varchar("techs", { length: 255 }).array().notNull(),
  image1: bytea("image1"),
  image2: bytea("image2"),
  image3: bytea("image3"),
  sourceCodeUrl: varchar("sourceCodeUrl").notNull(),
  demouUrl: text("demoUrl").notNull(),
});
