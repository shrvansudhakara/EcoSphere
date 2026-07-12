CREATE TABLE "emission_factors" (
	"id" serial PRIMARY KEY NOT NULL,
	"activity" text NOT NULL,
	"unit" text NOT NULL,
	"factor" double precision NOT NULL,
	"source" text,
	"effective_from" timestamp DEFAULT now() NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "environmental_goals" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"target_value" double precision NOT NULL,
	"current_value" double precision DEFAULT 0 NOT NULL,
	"unit" text NOT NULL,
	"deadline" timestamp NOT NULL,
	"status" "status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "esg_policies" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"version" text NOT NULL,
	"effective_date" timestamp NOT NULL,
	"status" "status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
