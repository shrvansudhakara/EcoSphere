import {
  Building2,
  FileText,
  LayoutDashboard,
  Leaf,
  Settings,
  Trophy,
  Users,
} from "lucide-react";

export const TOP_NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Environmental", href: "/environmental" },
  { label: "Social", href: "/social" },
  { label: "Governance", href: "/governance" },
  { label: "Gamification", href: "/gamification" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
] as const;

export const SIDEBAR_SECTIONS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    children: [],
  },
  {
    label: "Environmental",
    href: "/environmental",
    icon: Leaf,
    children: [
      { label: "Emission Factors", href: "/environmental" },
      { label: "Product ESG Profiles", href: "/environmental" },
      { label: "Carbon Transactions", href: "/environmental" },
      { label: "Environmental Goals", href: "/environmental" },
    ],
  },
  {
    label: "Social",
    href: "/social",
    icon: Users,
    children: [
      { label: "CSR Activities", href: "/social" },
      { label: "Employee Participation", href: "/social" },
      { label: "Diversity Dashboard", href: "/social" },
    ],
  },
  {
    label: "Governance",
    href: "/governance",
    icon: Building2,
    children: [
      { label: "Policies", href: "/governance" },
      { label: "Policy Acknowledgements", href: "/governance" },
      { label: "Audits", href: "/governance" },
      { label: "Compliance Issues", href: "/governance" },
    ],
  },
  {
    label: "Gamification",
    href: "/gamification",
    icon: Trophy,
    children: [
      { label: "Challenges", href: "/gamification" },
      { label: "Challenge Participation", href: "/gamification" },
      { label: "Badges", href: "/gamification" },
      { label: "Rewards", href: "/gamification" },
      { label: "Leaderboard", href: "/gamification" },
    ],
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FileText,
    children: [
      { label: "Environmental Report", href: "/reports" },
      { label: "Social Report", href: "/reports" },
      { label: "Governance Report", href: "/reports" },
      { label: "ESG Summary", href: "/reports" },
      { label: "Custom Report Builder", href: "/reports" },
    ],
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    children: [
      { label: "Departments", href: "/settings" },
      { label: "Categories", href: "/settings" },
      { label: "ESG Configuration", href: "/settings" },
      { label: "Notification Settings", href: "/settings" },
    ],
  },
] as const;
