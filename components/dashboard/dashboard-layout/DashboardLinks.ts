import { Home, Users, Shield, Monitor, User } from "lucide-react";

export interface IDashboardLink {
  icon: any;
  title: string;
  url: string;
}

export const DashboardLinks: IDashboardLink[] = [
  {
    icon: Home,
    title: "Overview",
    url: "/dashboard",
  },
  {
    icon: Users,
    title: "Membership",
    url: "/dashboard/membership",
  },
  {
    icon: Shield,
    title: "Security",
    url: "/dashboard/security",
  },
  {
    icon: Monitor,
    title: "Devices",
    url: "/dashboard/devices",
  },
  {
    icon: User,
    title: "Profiles",
    url: "/dashboard/profile",
  },
];
