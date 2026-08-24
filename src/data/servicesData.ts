import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'computerized-accounting',
    number: '01',
    title: 'Computerized Accounting',
    shortDesc: 'Comprehensive computerized bookkeeping, ledger balance maintenance, trial balance preparation, and financial statements.',
    fullDesc: 'End-to-end management of corporate and proprietary business accounts using modern accounting software. From daily journal entries to final balance sheet formulation, every transaction is reconciled with bank accounts, suppliers, and client records to ensure audit-ready financial health.',
    iconName: 'Laptop',
    deliverables: [
      'Daily Journal & Ledger Posting',
      'Bank & Vendor Account Reconciliations',
      'Trial Balance & P&L Statement Generation',
      'Inventory & Stock Accounting Controls',
      'Fixed Assets & Depreciation Registers'
    ],
    tools: ['Tally Prime', 'Tally ERP 9', 'Advanced Excel', 'Busy Accounting'],
    tag: 'Core Accounting',
    color: 'amber'
  },
  {
    id: 'accounts-taxation',
    number: '02',
    title: 'Accounts & Taxation',
    shortDesc: 'Complete direct and indirect tax management, GST registration & returns (GSTR-1, GSTR-3B, GSTR-9), TDS filings, and statutory compliance.',
    fullDesc: 'Navigating Indian taxation laws with 20+ years of domain expertise. We handle quarterly TDS deductions, return filings, e-Way bills, Input Tax Credit (ITC) reconciliation, and annual GST statutory filings with zero penalty risk.',
    iconName: 'FileSpreadsheet',
    deliverables: [
      'GST Monthly & Annual Return Filings (GSTR-1, 3B, 9)',
      'TDS / TCS Computation, Deduction & 24Q/26Q Filings',
      'Input Tax Credit (ITC) 2B Matching & Discrepancy Resolution',
      'Statutory Compliance Calendars & Advance Tax Calculations',
      'Tax Audit Documentation & Liaisoning'
    ],
    tools: ['GST Common Portal', 'TRACES TDS Portal', 'Income Tax e-Filing Portal', 'Govt Offline Utilities'],
    tag: 'Tax Compliance',
    color: 'blue'
  },
  {
    id: 'ai-assisted-accounting',
    number: '03',
    title: 'AI-Assisted Accounting',
    shortDesc: 'Supercharging classic bookkeeping with AI invoice OCR, smart transaction categorization, and instant discrepancy detection.',
    fullDesc: 'Integrating cutting-edge AI technologies into everyday accounting tasks. Automated document data extraction, rapid invoice ingestion, smart expense categorization algorithms, and AI-prompted ledger variance diagnostics that cut turnaround time by up to 70%.',
    iconName: 'Cpu',
    deliverables: [
      'AI-Powered Invoice & Receipt Parsing (OCR)',
      'Automated Ledger Anomaly & Duplicate Detection',
      'Smart Cash-Flow Forecasting & Trend Projections',
      'LLM Prompt Workflows for Instant Variance Analysis',
      'Automated Summary Briefs for Business Owners'
    ],
    tools: ['Gemini AI Workflows', 'Claude & ChatGPT Prompt Engines', 'Custom Python/VBA Scripts', 'Cloud OCR'],
    tag: 'Next-Gen Innovation',
    color: 'emerald'
  },
  {
    id: 'tax-financial',
    number: '04',
    title: 'Tax & Financial Advisory',
    shortDesc: 'Strategic income tax planning for individuals, firms, and MSMEs to maximize legitimate tax exemptions and deductions.',
    fullDesc: 'Holistic financial consulting designed to protect your hard-earned wealth. We analyze investment portfolios, Section 80C/80D/80G deductions, capital gains calculations, salary restructuring, and long-term tax mitigation strategies.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Individual & Business Income Tax Return (ITR-1 to ITR-6) Filing',
      'Capital Gains Tax Computation (Equities, Mutual Funds, Real Estate)',
      'Legitimate Tax Saving Strategies under Old vs New Tax Regimes',
      'Notice Handling & Rectification Filings u/s 139/143',
      'Financial Projection Reports for Bank Loans & Working Capital'
    ],
    tools: ['Income Tax Portal', 'ITR Utilities', 'Financial Modeling Sheets', 'Tax Calculators'],
    tag: 'Strategic Advisory',
    color: 'purple'
  },
  {
    id: 'digital-ad-creation',
    number: '05',
    title: 'Digital Ad Creation',
    shortDesc: 'High-converting promotional ads, compelling copywriting, and brand visual campaigns tailored for local and digital businesses.',
    fullDesc: 'Under the SAUMYA@DIGITAL banner, we craft visually arresting, commercially effective digital advertisements. Combining acute business understanding with design principles to generate ads that drive customer inquiries and brand recall.',
    iconName: 'Megaphone',
    deliverables: [
      'Meta (Facebook & Instagram) Feed & Story Ad Creatives',
      'Google Display Network Banner Sets',
      'Compelling Business Copywriting with High-Converting CTAs',
      'Festive & Seasonal Promotional Campaign Designs',
      'Local Business & Service Provider Ad Packages'
    ],
    tools: ['Canva Pro', 'Adobe Photoshop', 'Figma', 'Copywriting Frameworks'],
    tag: 'Creative Marketing',
    color: 'rose'
  },
  {
    id: 'ai-digital-creation',
    number: '06',
    title: 'AI Digital Creation',
    shortDesc: 'Generative AI visual assets, hyper-targeted social media artwork, AI avatars, and automated marketing asset pipelines.',
    fullDesc: 'Harnessing the forefront of artificial intelligence for content and visual creation. From prompt-engineered hyper-realistic imagery and video hooks to automated multi-platform social media calendars for entrepreneurs and brands.',
    iconName: 'Sparkles',
    deliverables: [
      'Custom Generative AI Brand Graphics & Concepts',
      'AI-Enhanced Product Photography & Background Replacement',
      'Social Media Visual Content Calendars & Carousels',
      'Interactive Infographics Explaining Complex Financial Topics',
      'AI Prompt Engineering Consulting for Creative Teams'
    ],
    tools: ['Midjourney', 'DALL-E 3', 'Stable Diffusion', 'Canva Magic Studio', 'Gemini Multimodal'],
    tag: 'AI Creativity',
    color: 'cyan'
  }
];
