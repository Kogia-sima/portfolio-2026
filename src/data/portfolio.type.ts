import type { LucideIcon } from "lucide-react";

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  techStack: string[];
};

export type KpiItem = {
  icon: LucideIcon;
  label: string;
  value: string | number;
};

export type Repo = {
  name: string;
  description: string;
  url: string;
  languages: string[];
  stars: number;
  forks: number;
};

export type Article = {
  title: string;
  url: string;
  publishedAt: string;
  category: string;
  excerpt: string;
};

export type SnsLink = {
  platform: string;
  url: string;
  icon: LucideIcon;
};

export type Contact = {
  url: string;
  icon: LucideIcon;
};
