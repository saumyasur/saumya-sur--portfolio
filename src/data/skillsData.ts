import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'accounting',
    title: 'ACCOUNTING',
    subtitle: 'Financial Foundation & Systems',
    description: '20+ years of rigorous core financial bookkeeping, ledger balancing, and audit-ready trial balance formulation.',
    iconName: 'Calculator',
    skills: [
      { name: 'Financial Accounts & Final Statements', level: 98, highlight: 'P&L, Balance Sheets, Cash Flow' },
      { name: 'Computerized Accounting (Tally Prime / ERP)', level: 96, highlight: 'Voucher Posting, Inventory' },
      { name: 'Bank & Vendor Account Reconciliation', level: 95, highlight: 'Discrepancy Resolution' },
      { name: 'Financial Data Management & Excel Modeling', level: 92, highlight: 'Macros, Pivot, VLOOKUP' },
      { name: 'Trial Balance & Internal Audit Preparation', level: 94, highlight: 'Statutory Verification' }
    ],
    tools: ['Tally Prime', 'Tally ERP 9', 'Microsoft Excel', 'Busy Accounting', 'Google Sheets']
  },
  {
    id: 'taxation',
    title: 'TAXATION',
    subtitle: 'Compliance & Statutory Intelligence',
    description: 'Mastery in Indian direct and indirect taxes, e-filings, GST ITC reconciliations, and strategic tax planning.',
    iconName: 'FileCheck',
    skills: [
      { name: 'GST Filing & Compliance (GSTR-1, 3B, 9)', level: 96, highlight: 'ITC Matching, 2B Verification' },
      { name: 'Income Tax Return (ITR) Preparation', level: 94, highlight: 'Individuals, Firms & MSMEs' },
      { name: 'TDS / TCS Computation & Form 24Q/26Q', level: 92, highlight: 'TRACES Portal Filings' },
      { name: 'Statutory Documentation & Notice Response', level: 90, highlight: 'Rectification & Grievances' },
      { name: 'Tax Planning & Advisory (Old vs New Regime)', level: 93, highlight: 'Legitimate Tax Optimization' }
    ],
    tools: ['GST Portal', 'Income Tax e-Filing', 'TRACES TDS', 'Govt e-Way Portal', 'Tax Computation Utilities']
  },
  {
    id: 'ai-digital',
    title: 'AI & DIGITAL',
    subtitle: 'Next-Gen Productivity & Creativity',
    description: 'Leveraging cutting-edge generative AI models and digital advertising tools to supercharge business reach and efficiency.',
    iconName: 'Sparkles',
    skills: [
      { name: 'AI Productivity Tools & Prompt Engineering', level: 92, highlight: 'Gemini, ChatGPT, Claude' },
      { name: 'AI Workflow Integration for Finance & Business', level: 90, highlight: 'Automated Parsing & Summaries' },
      { name: 'Digital Ad Creation & Campaign Design', level: 94, highlight: 'Meta & Google Ads, Social Posts' },
      { name: 'Generative AI Visual Asset Creation', level: 88, highlight: 'Midjourney, DALL-E, AI Enhancers' },
      { name: 'Business Content & Copywriting', level: 91, highlight: 'High-Converting Sales Copy' }
    ],
    tools: ['Google Gemini', 'Midjourney', 'Canva Pro', 'Adobe Photoshop', 'ChatGPT', 'Figma']
  }
];
