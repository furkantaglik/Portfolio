CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"techs" varchar[] NOT NULL,
	"sourceCodeUrl" varchar,
	"demoUrl" varchar,
	"images" varchar[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" varchar(50) NOT NULL,
	"lastName" varchar(50) NOT NULL,
	"email" varchar(100) NOT NULL,
	"password" varchar(200) NOT NULL,
	"avatar" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
