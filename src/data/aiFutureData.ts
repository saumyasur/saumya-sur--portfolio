import { AiFuturePillar } from '../types';

export const AI_FUTURE_PILLARS: AiFuturePillar[] = [
  {
    id: 'ai-accounting',
    title: 'AI FOR ACCOUNTING',
    category: 'Bookkeeping & OCR',
    headline: 'Automating Data Ingestion & Ledger Precision',
    description: 'Transforming tedious manual data entry into instant, structured accounting journals using multi-modal AI vision and intelligent receipt parsers.',
    iconName: 'Cpu',
    useCases: [
      'Automated extraction of vendor name, GSTIN, invoice date, taxable value, and HSN codes from scanned PDFs',
      'AI anomaly detection highlighting irregular expenditure, duplicate billings, and mismatched tax rates',
      'Natural language queries on financial records (e.g., "Summarize top 5 vendor expense spikes this quarter")'
    ],
    workflowExample: 'Raw Invoice PDF → Multi-modal AI Parser → Formatted JSON Ledger Entry → Direct Tally / ERP Sync in seconds.',
    efficiencyGain: 'Up to 75% reduction in invoice posting time'
  },
  {
    id: 'ai-tax-finance',
    title: 'AI FOR TAX & FINANCE',
    category: 'Regulatory Intelligence',
    headline: 'Instant Tax Rule Retrieval & Financial Analysis',
    description: 'Navigating evolving GST notifications, IT circulars, and finance bill updates with custom-prompted regulatory AI research assistants.',
    useCases: [
      'Rapid interpretation of complex tax tribunal rulings, case laws, and statutory amendments',
      'Old vs. New Tax Regime simulation algorithms tailored to diverse individual income portfolios',
      'Instant generation of cash flow forecasting models and bank loan viability ratios'
    ],
    iconName: 'TrendingUp',
    workflowExample: 'Tax Query / Financial Dataset → Prompt-Tuned Gemini Model → Comparative Regime Matrix & Tax-Saving Blueprint.',
    efficiencyGain: 'Instant scenario modeling & zero compliance lag'
  },
  {
    id: 'ai-business-productivity',
    title: 'AI FOR BUSINESS PRODUCTIVITY',
    category: 'Operational Agility',
    headline: 'Smart Executive Briefs & Client Communication',
    description: 'Empowering small business owners and busy professionals with executive summaries, automated financial health decks, and clear communications.',
    useCases: [
      'One-click transformation of raw P&L balance sheets into visual executive summary briefs',
      'Drafting formal responses to statutory notices and tax assessment clarifications with legal clarity',
      'Automated client follow-up sequences for outstanding receivables and statutory filing deadlines'
    ],
    iconName: 'Zap',
    workflowExample: 'Monthly Trial Balance → Automated AI Analytical Engine → 2-Page Executive Action Deck for Business Owners.',
    efficiencyGain: 'Hours of manual report preparation saved weekly'
  },
  {
    id: 'ai-digital-ads',
    title: 'AI FOR DIGITAL ADS',
    category: 'Creative Marketing',
    headline: 'Hyper-Targeted Generative Visuals & Copy',
    description: 'Creating high-impact advertising banners, social media marketing campaigns, and commercial copy in minutes under SAUMYA@DIGITAL.',
    useCases: [
      'Generative AI product background replacement and studio-grade visual composition',
      'High-converting ad copy variations crafted for distinct target demographics across Meta & Google',
      'Visual financial infographics explaining complex tax deadlines to local business audiences'
    ],
    iconName: 'Sparkles',
    workflowExample: 'Client Brief & Value Prop → Midjourney / DALL-E Visual Generation + Canva Layering → Multi-Platform Ad Campaign.',
    efficiencyGain: 'Fast-paced turnaround with standout visual polish'
  }
];
