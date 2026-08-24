import { PortfolioItem } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Tax Season Awareness & GST Compliance Ad Campaign',
    category: 'digital-ads',
    categoryLabel: 'Digital Ads',
    description: 'High-impact social media ad campaign designed for MSMEs highlighting statutory filing deadlines, avoiding late penalties, and unlocking legitimate ITC credits.',
    fullStory: 'Conceptualized and executed a comprehensive multi-format visual campaign for local commercial enterprises. The campaign combined clear statutory urgency with clean, authoritative design, leading to a 45% surge in early tax advisory consultations.',
    clientContext: 'Regional MSMEs & Trading Enterprises, Kolkata & Hooghly',
    toolsUsed: ['Canva Pro', 'Photoshop', 'Meta Ads Manager', 'Copywriting Framework'],
    accentColor: '#f59e0b',
    stats: [
      { label: 'Client Inquiries', value: '+45%' },
      { label: 'Campaign Reach', value: '38K+ Impressions' }
    ],
    visualType: 'ad-banner',
    badge: 'Featured Campaign'
  },
  {
    id: 'port-2',
    title: 'Futuristic AI + Accounting Visual Brand Identity',
    category: 'ai-creative',
    categoryLabel: 'AI Creative',
    description: 'Concept artwork and generative visual assets illustrating the symbiosis between classical ledger accounting and futuristic AI algorithms.',
    fullStory: 'Created using Midjourney and custom prompt parameters to represent the balance between historical accounting discipline and modern neural computation. Used as keynote visuals and digital brand banners.',
    clientContext: 'SAUMYA@DIGITAL Brand Concept Series',
    toolsUsed: ['Midjourney v6', 'Generative Fill', 'Color Grading', 'Figma'],
    accentColor: '#38bdf8',
    stats: [
      { label: 'Visual Clarity', value: '4K Ultra-Res' },
      { label: 'Art Style', value: 'Tech-Financial Fusion' }
    ],
    visualType: 'ai-art',
    badge: 'Generative Art'
  },
  {
    id: 'port-3',
    title: 'Executive Financial Health & P&L Dashboard Deck',
    category: 'business-content',
    categoryLabel: 'Business Content',
    description: 'Visualized executive summary report converting dry trial balances into actionable financial decks for business leadership and loan applications.',
    fullStory: 'Structured a bespoke quarterly financial review template for manufacturing and distribution firms. Replaced dense, intimidating balance sheets with intuitive margin breakdowns, working capital ratios, and year-over-year tax projections.',
    clientContext: 'Commercial Manufacturing & Retail Clients',
    toolsUsed: ['Advanced Excel', 'Financial Modeling', 'Canva Business', 'Tally Data Sync'],
    accentColor: '#10b981',
    stats: [
      { label: 'Report Prep Time', value: '-60%' },
      { label: 'Executive Clarity', value: '100% Satisfaction' }
    ],
    visualType: 'dashboard',
    badge: 'Business Intelligence'
  },
  {
    id: 'port-4',
    title: 'Financial Literacy & Tax Tips Social Media Carousel Series',
    category: 'social-media',
    categoryLabel: 'Social Media',
    description: 'Engaging 10-slide educational carousel series breaking down the New vs. Old Income Tax regimes and Section 80 deductions in simple terms.',
    fullStory: 'A viral educational series created for Facebook and LinkedIn. Translated complex tax jargon into bite-sized visual slides with real-world income slab examples, helping individual taxpayers choose their optimal tax regime.',
    clientContext: 'Public Financial Awareness Series',
    toolsUsed: ['Canva Pro', 'Adobe Illustrator', 'Micro-Copywriting', 'Infographics'],
    accentColor: '#818cf8',
    stats: [
      { label: 'Saves & Shares', value: '1,200+' },
      { label: 'Engagement Rate', value: '8.4%' }
    ],
    visualType: 'social-post',
    badge: 'Educational Viral'
  },
  {
    id: 'port-5',
    title: 'Automated Invoice Data Extraction & OCR Pipeline',
    category: 'ai-projects',
    categoryLabel: 'AI Projects',
    description: 'Custom AI prompt-engineered workflow extracting line items, GSTIN numbers, and tax slabs from bulk supplier invoices into structured CSVs.',
    fullStory: 'Developed an automated pipeline combining multimodal LLMs with structured formatting prompts. The solution parses diverse scanned invoice formats, automatically flags GST rate discrepancies, and prepares data for 1-click ledger import.',
    clientContext: 'Internal Accounting Practice Innovation & Client Deployments',
    toolsUsed: ['Google Gemini API', 'Python / Apps Script', 'Structured JSON Prompts', 'OCR Engine'],
    accentColor: '#ec4899',
    stats: [
      { label: 'Extraction Accuracy', value: '99.2%' },
      { label: 'Time Saved per Batch', value: '4+ Hours' }
    ],
    visualType: 'workflow-diagram',
    badge: 'AI Automation'
  },
  {
    id: 'port-6',
    title: 'Festive & Promotional Digital Ad Creatives for Retailers',
    category: 'digital-ads',
    categoryLabel: 'Digital Ads',
    description: 'Festive season ad campaigns and high-converting banners designed for regional retail businesses and consumer brands.',
    fullStory: 'Created vibrant Durga Puja and Diwali promotional campaign graphics for local retailers in West Bengal, delivering polished commercial ads that drove direct WhatsApp orders and foot traffic.',
    clientContext: 'Retail Merchandisers & Consumer Stores, Kolkata',
    toolsUsed: ['Photoshop', 'Canva Pro', 'AI Image Upscaling', 'Ad Typography'],
    accentColor: '#f97316',
    stats: [
      { label: 'Direct Inquiries', value: '+60%' },
      { label: 'Festive ROI', value: '3.8x' }
    ],
    visualType: 'ad-banner',
    badge: 'High Conversion'
  },
  {
    id: 'port-7',
    title: 'AI Product Presentation & Mockup Enhancement Suite',
    category: 'ai-creative',
    categoryLabel: 'AI Creative',
    description: 'Generative AI product staging replacing flat white backgrounds with hyper-realistic cinematic environments for eCommerce catalogs.',
    fullStory: 'Leveraged generative AI inpainting and relighting techniques to transform standard smartphone product photos into luxury studio catalog presentations without expensive photography setups.',
    clientContext: 'eCommerce & Boutique Brands',
    toolsUsed: ['Generative AI Inpainting', 'Photoshop Neural Filters', 'Midjourney', 'Color Harmony'],
    accentColor: '#06b6d4',
    stats: [
      { label: 'Studio Cost Saved', value: '80%' },
      { label: 'Catalog Turnaround', value: '24 Hours' }
    ],
    visualType: 'ai-art',
    badge: 'Studio Innovation'
  },
  {
    id: 'port-8',
    title: 'Interactive GST & Advance Tax Due Dates Calendar Infographic',
    category: 'business-content',
    categoryLabel: 'Business Content',
    description: 'A comprehensive, color-coded annual statutory compliance calendar distributed to business clients for proactive compliance.',
    fullStory: 'Designed a clean, fail-safe visual cheat-sheet containing all statutory deadlines for GST (GSTR-1, 3B, 9), TDS (24Q, 26Q), Advance Tax installments, and Tax Audits.',
    clientContext: 'All Retainer Clients & Business Partners',
    toolsUsed: ['Adobe Illustrator', 'Canva Pro', 'Statutory Compliance Matrix'],
    accentColor: '#14b8a6',
    stats: [
      { label: 'Zero Penalty Rate', value: '100%' },
      { label: 'Client Retention', value: '98%' }
    ],
    visualType: 'dashboard',
    badge: 'Client Favorite'
  }
];
