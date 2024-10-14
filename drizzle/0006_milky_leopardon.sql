ALTER TABLE "projects" ALTER COLUMN "source_code_url" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "source_code_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "demo_url" SET NOT NULL;