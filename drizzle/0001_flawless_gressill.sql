CREATE TYPE "public"."category_type" AS ENUM('CSR_ACTIVITY', 'CHALLENGE');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('ACTIVE', 'INACTIVE');--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" "category_type" NOT NULL,
	"status" "status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
