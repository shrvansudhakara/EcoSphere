import {
  boolean,
  doublePrecision,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  code: text("code").notNull().unique(),

  head: text("head"),

  parentDepartmentId: integer("parent_department_id"),

  employeeCount: integer("employee_count").default(0),

  isActive: boolean("is_active").default(true).notNull(),
});

export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  departmentId: integer("department_id")
    .references(() => departments.id)
    .notNull(),

  isActive: boolean("is_active").default(true).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const categoryTypeEnum = pgEnum("category_type", [
  "CSR_ACTIVITY",
  "CHALLENGE",
]);

export const statusEnum = pgEnum("status", ["ACTIVE", "INACTIVE"]);

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: categoryTypeEnum("type").notNull(),
  status: statusEnum("status").notNull().default("ACTIVE"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const emissionFactors = pgTable("emission_factors", {
  id: serial("id").primaryKey(),
  activity: text("activity").notNull(),
  unit: text("unit").notNull(),
  factor: doublePrecision("factor").notNull(),
  source: text("source"),
  effectiveFrom: timestamp("effective_from").defaultNow().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

export const environmentalGoals = pgTable("environmental_goals", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  targetValue: doublePrecision("target_value").notNull(),
  currentValue: doublePrecision("current_value").default(0).notNull(),
  unit: text("unit").notNull(),
  deadline: timestamp("deadline").notNull(),
  status: statusEnum("status").default("ACTIVE").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const esgPolicies = pgTable("esg_policies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  version: text("version").notNull(),
  effectiveDate: timestamp("effective_date").notNull(),

  status: statusEnum("status").default("ACTIVE").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const productEsgProfiles = pgTable("product_esg_profiles", {
  id: serial("id").primaryKey(),
  productName: text("product_name").notNull(),
  productCode: text("product_code").notNull().unique(),
  carbonFootprint: doublePrecision("carbon_footprint").notNull(),
  recyclablePercentage: doublePrecision("recyclable_percentage").default(0),
  sustainabilityRating: integer("sustainability_rating"),
  description: text("description"),
  status: statusEnum("status").default("ACTIVE").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const badges = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  unlockRule: text("unlock_rule").notNull(),
  icon: text("icon"),
  points: integer("points").default(0),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const rewards = pgTable("rewards", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  pointsRequired: integer("points_required").notNull(),
  stock: integer("stock").default(0),
  status: statusEnum("status").default("ACTIVE").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

//Transaction tables
export const carbonTransactions = pgTable("carbon_transactions", {
  id: serial("id").primaryKey(),

  departmentId: integer("department_id")
    .references(() => departments.id)
    .notNull(),

  emissionFactorId: integer("emission_factor_id")
    .references(() => emissionFactors.id)
    .notNull(),

  activity: text("activity").notNull(),
  quantity: doublePrecision("quantity").notNull(),
  calculatedEmission: doublePrecision("calculated_emission").notNull(),
  transactionDate: timestamp("transaction_date").defaultNow().notNull(),

  remarks: text("remarks"),
});

export const csrActivities = pgTable("csr_activities", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),

  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),

  description: text("description"),
  location: text("location"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  maxParticipants: integer("max_participants"),

  status: statusEnum("status").default("ACTIVE").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),

  title: text("title").notNull(),

  categoryId: integer("category_id")
    .references(() => categories.id)
    .notNull(),

  description: text("description"),

  xp: integer("xp").notNull(),

  difficulty: varchar("difficulty").notNull(),

  evidenceRequired: boolean("evidence_required").default(false),

  deadline: timestamp("deadline"),

  status: varchar("status").default("DRAFT"),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const employeeParticipations = pgTable("employee_participations", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .references(() => employees.id)
    .notNull(),

  activityId: integer("activity_id")
    .references(() => csrActivities.id)
    .notNull(),

  proof: text("proof"),

  approvalStatus: varchar("approval_status").default("PENDING"),

  pointsEarned: integer("points_earned").default(0),

  completionDate: timestamp("completion_date"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const challengeParticipations = pgTable("challenge_participations", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .references(() => employees.id)
    .notNull(),

  challengeId: integer("challenge_id")
    .references(() => challenges.id)
    .notNull(),

  progress: integer("progress").default(0),

  proof: text("proof"),

  approvalStatus: varchar("approval_status").default("PENDING"),

  xpAwarded: integer("xp_awarded").default(0),
});

export const policyAcknowledgements = pgTable("policy_acknowledgements", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .references(() => employees.id)
    .notNull(),

  policyId: integer("policy_id")
    .references(() => esgPolicies.id)
    .notNull(),

  acknowledged: boolean("acknowledged").default(false).notNull(),

  acknowledgedAt: timestamp("acknowledged_at"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const audits = pgTable("audits", {
  id: serial("id").primaryKey(),

  departmentId: integer("department_id")
    .references(() => departments.id)
    .notNull(),

  policyId: integer("policy_id").references(() => esgPolicies.id),

  auditorId: integer("auditor_id").references(() => employees.id),

  auditDate: timestamp("audit_date").defaultNow().notNull(),

  status: varchar("status").default("OPEN"),

  score: integer("score"),

  remarks: text("remarks"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const complianceIssues = pgTable("compliance_issues", {
  id: serial("id").primaryKey(),

  auditId: integer("audit_id")
    .references(() => audits.id)
    .notNull(),

  severity: varchar("severity").notNull(),

  description: text("description").notNull(),

  ownerId: integer("owner_id").references(() => employees.id),

  dueDate: timestamp("due_date"),

  status: varchar("status").default("OPEN"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const departmentScores = pgTable("department_scores", {
  id: serial("id").primaryKey(),

  departmentId: integer("department_id")
    .references(() => departments.id)
    .notNull(),

  environmentalScore: integer("environmental_score").default(0).notNull(),

  socialScore: integer("social_score").default(0).notNull(),

  governanceScore: integer("governance_score").default(0).notNull(),

  totalScore: integer("total_score").default(0).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

//6 extra gamification tables
export const employeeGamification = pgTable("employee_gamification", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .references(() => employees.id)
    .notNull()
    .unique(),

  totalXp: integer("total_xp").default(0).notNull(),

  pointsBalance: integer("points_balance").default(0).notNull(),

  completedChallenges: integer("completed_challenges").default(0).notNull(),

  rank: integer("rank"),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const employeeBadges = pgTable(
  "employee_badges",
  {
    id: serial("id").primaryKey(),

    employeeId: integer("employee_id")
      .references(() => employees.id)
      .notNull(),

    badgeId: integer("badge_id")
      .references(() => badges.id)
      .notNull(),

    awardedAt: timestamp("awarded_at").defaultNow().notNull(),
  },
  (table) => ({
    employeeBadgeUnique: unique().on(table.employeeId, table.badgeId),
  }),
);

export const rewardRedemptions = pgTable("reward_redemptions", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .references(() => employees.id)
    .notNull(),

  rewardId: integer("reward_id")
    .references(() => rewards.id)
    .notNull(),

  pointsUsed: integer("points_used").notNull(),

  quantity: integer("quantity").default(1).notNull(),

  status: varchar("status").default("PENDING"),

  redeemedAt: timestamp("redeemed_at").defaultNow().notNull(),
});

export const esgSettings = pgTable("esg_settings", {
  id: serial("id").primaryKey(),

  autoEmissionCalculation: boolean("auto_emission_calculation")
    .default(false)
    .notNull(),

  evidenceRequirementEnabled: boolean("evidence_requirement_enabled")
    .default(false)
    .notNull(),

  badgeAutoAwardEnabled: boolean("badge_auto_award_enabled")
    .default(false)
    .notNull(),

  environmentalWeight: integer("environmental_weight").default(40).notNull(),

  socialWeight: integer("social_weight").default(30).notNull(),

  governanceWeight: integer("governance_weight").default(30).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .references(() => employees.id)
    .notNull(),

  type: varchar("type").notNull(),

  title: text("title").notNull(),

  message: text("message").notNull(),

  isRead: boolean("is_read").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const notificationSettings = pgTable("notification_settings", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .references(() => employees.id)
    .notNull()
    .unique(),

  emailEnabled: boolean("email_enabled").default(true).notNull(),

  inAppEnabled: boolean("in_app_enabled").default(true).notNull(),

  complianceAlerts: boolean("compliance_alerts").default(true).notNull(),

  badgeAlerts: boolean("badge_alerts").default(true).notNull(),

  policyReminders: boolean("policy_reminders").default(true).notNull(),
});
