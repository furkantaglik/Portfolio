// drizzle/schema.ts
import { primaryKey } from "drizzle-orm/mysql-core";
import {
  customType,
  integer,
  pgTable,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

const bytea = customType<{ data: Buffer; notNull: false; default: false }>({
  dataType() {
    return "bytea";
  },
});

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  firstName: varchar("firstName", { length: 50 }).notNull(),
  lastName: varchar("lastName", { length: 50 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 200 }).notNull(),
  avatar: bytea("avatar"),
});

export const projectsTable = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  title: varchar("title", { length: 100 }).notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  techs: varchar("techs").array().notNull(),
  sourceCodeUrl: varchar("sourceCodeUrl"),
  demouUrl: text("demoUrl"),
  image1: bytea("image1"),
  image2: bytea("image2"),
  image3: bytea("image3"),
});
