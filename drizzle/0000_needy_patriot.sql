CREATE TABLE "departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"code" text NOT NULL,
	"head" text,
	"parent_department_id" integer,
	"employee_count" integer DEFAULT 0,
	"is_active" boolean DEFAULT true NOT NULL,
	CONSTRAINT "departments_code_unique" UNIQUE("code")
);
