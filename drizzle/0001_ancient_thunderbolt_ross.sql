CREATE TABLE IF NOT EXISTS "certificates" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(200) NOT NULL,
	"company" varchar(100) NOT NULL,
	"date" varchar(100) NOT NULL,
	"source" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "educations" (
	"id" serial PRIMARY KEY NOT NULL,
	"school" varchar(200) NOT NULL,
	"section" varchar(200) NOT NULL,
	"year" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"company" varchar(200) NOT NULL,
	"role" varchar(100) NOT NULL
);
--> statement-breakpoint
DROP TABLE "users";