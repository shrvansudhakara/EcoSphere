import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  code: text("code").notNull().unique(),

  head: text("head"),

  parentDepartmentId: integer("parent_department_id"),

  employeeCount: integer("employee_count").default(0),

  isActive: boolean("is_active").default(true).notNull(),
});
