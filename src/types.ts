export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  tools: string[];
  tag: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // percentage
    highlight?: string;
  }[];
  tools: string[];
}

export interface TimelineMilestone {
  id: string;
  stageNumber: string;
  era: string;
  title: string;
  subtitle: string;
  description: string;
  keyAchievements: string[];
  technologies: string[];
  impactBadge: string;
}

export interface AiFuturePillar {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  iconName: string;
  useCases: string[];
  workflowExample: string;
  efficiencyGain: string;
}

export type PortfolioCategory = 'all' | 'digital-ads' | 'ai-creative' | 'business-content' | 'social-media' | 'ai-projects';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'digital-ads' | 'ai-creative' | 'business-content' | 'social-media' | 'ai-projects';
  categoryLabel: string;
  description: string;
  fullStory: string;
  clientContext: string;
  toolsUsed: string[];
  accentColor: string;
  stats?: { label: string; value: string }[];
  visualType: 'ad-banner' | 'ai-art' | 'dashboard' | 'social-post' | 'workflow-diagram';
  badge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
}
