CREATE TABLE "badges" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"unlock_rule" text NOT NULL,
	"icon" text,
	"points" integer DEFAULT 0,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "carbon_transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"department_id" integer NOT NULL,
	"emission_factor_id" integer NOT NULL,
	"activity" text NOT NULL,
	"quantity" double precision NOT NULL,
	"calculated_emission" double precision NOT NULL,
	"transaction_date" timestamp DEFAULT now() NOT NULL,
	"remarks" text
);
--> statement-breakpoint
CREATE TABLE "csr_activities" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"category_id" integer NOT NULL,
	"description" text,
	"location" text,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"max_participants" integer,
	"status" "status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_esg_profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_name" text NOT NULL,
	"product_code" text NOT NULL,
	"carbon_footprint" double precision NOT NULL,
	"recyclable_percentage" double precision DEFAULT 0,
	"sustainability_rating" integer,
	"description" text,
	"status" "status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "product_esg_profiles_product_code_unique" UNIQUE("product_code")
);
--> statement-breakpoint
CREATE TABLE "rewards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"points_required" integer NOT NULL,
	"stock" integer DEFAULT 0,
	"status" "status" DEFAULT 'ACTIVE' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "carbon_transactions" ADD CONSTRAINT "carbon_transactions_department_id_departments_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "carbon_transactions" ADD CONSTRAINT "carbon_transactions_emission_factor_id_emission_factors_id_fk" FOREIGN KEY ("emission_factor_id") REFERENCES "public"."emission_factors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csr_activities" ADD CONSTRAINT "csr_activities_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;