CREATE TABLE "audits" (
	"id" serial PRIMARY KEY NOT NULL,
	"department_id" integer NOT NULL,
	"policy_id" integer,
	"auditor_id" integer,
	"audit_date" timestamp DEFAULT now() NOT NULL,
	"status" varchar DEFAULT 'OPEN',
	"score" integer,
	"remarks" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "challenge_participations" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" integer NOT NULL,
	"challenge_id" integer NOT NULL,
	"progress" integer DEFAULT 0,
	"proof" text,
	"approval_status" varchar DEFAULT 'PENDING',
	"xp_awarded" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "challenges" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"category_id" integer NOT NULL,
	"description" text,
	"xp" integer NOT NULL,
	"difficulty" varchar NOT NULL,
	"evidence_required" boolean DEFAULT false,
	"deadline" timestamp,
	"status" varchar DEFAULT 'DRAFT',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "compliance_issues" (
	"id" serial PRIMARY KEY NOT NULL,
	"audit_id" integer NOT NULL,
	"severity" varchar NOT NULL,
	"description" text NOT NULL,
	"owner_id" integer,
	"due_date" timestamp,
	"status" varchar DEFAULT 'OPEN',
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "department_scores" (
	"id" serial PRIMARY KEY NOT NULL,
	"department_id" integer NOT NULL,
	"environmental_score" integer DEFAULT 0 NOT NULL,
	"social_score" integer DEFAULT 0 NOT NULL,
	"governance_score" integer DEFAULT 0 NOT NULL,
	"total_score" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "employee_participations" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" integer NOT NULL,
	"activity_id" integer NOT NULL,
	"proof" text,
	"approval_status" varchar DEFAULT 'PENDING',
	"points_earned" integer DEFAULT 0,
	"completion_date" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "employees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"department_id" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "employees_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "policy_acknowledgements" (
	"id" serial PRIMARY KEY NOT NULL,
	"employee_id" integer NOT NULL,
	"policy_id" integer NOT NULL,
	"acknowledged" boolean DEFAULT false NOT NULL,
	"acknowledged_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "audits" ADD CONSTRAINT "audits_department_id_departments_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audits" ADD CONSTRAINT "audits_policy_id_esg_policies_id_fk" FOREIGN KEY ("policy_id") REFERENCES "public"."esg_policies"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audits" ADD CONSTRAINT "audits_auditor_id_employees_id_fk" FOREIGN KEY ("auditor_id") REFERENCES "public"."employees"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "challenge_participations" ADD CONSTRAINT "challenge_participations_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "challenge_participations" ADD CONSTRAINT "challenge_participations_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "challenges" ADD CONSTRAINT "challenges_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "compliance_issues" ADD CONSTRAINT "compliance_issues_audit_id_audits_id_fk" FOREIGN KEY ("audit_id") REFERENCES "public"."audits"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "compliance_issues" ADD CONSTRAINT "compliance_issues_owner_id_employees_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."employees"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "department_scores" ADD CONSTRAINT "department_scores_department_id_departments_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employee_participations" ADD CONSTRAINT "employee_participations_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employee_participations" ADD CONSTRAINT "employee_participations_activity_id_csr_activities_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."csr_activities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employees" ADD CONSTRAINT "employees_department_id_departments_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "policy_acknowledgements" ADD CONSTRAINT "policy_acknowledgements_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "policy_acknowledgements" ADD CONSTRAINT "policy_acknowledgements_policy_id_esg_policies_id_fk" FOREIGN KEY ("policy_id") REFERENCES "public"."esg_policies"("id") ON DELETE no action ON UPDATE no action;