import { Venture, EcosystemIntervention, SPV } from './types';

export const PORTFOLIO_VENTURES: Venture[] = [
  {
    id: 'farmchain',
    name: 'FarmChain',
    sector: 'Agribusiness',
    tagline: 'Bringing transparency and liquid asset structures to primary agriculture.',
    valueProp: 'Bringing transparency and liquid asset structures to primary agriculture through whole-ownership livestock tracking and verification.',
    description: 'FarmChain leverages physical IoT tracking, automated thermal telemetry, and cryptographically verified ledgers to establish livestock as secure, transparent, and liquid assets. By mapping physical assets directly to investment records, we protect capital from operational opacity and supply-chain leakage.',
    metrics: [
      { label: 'Active Verified Livestock', value: '14,200+ Heads' },
      { label: 'Underwritten Asset Value', value: '$8.4 Million' },
      { label: 'Tracking Latency / Update Rate', value: '1.2s Real-time' },
      { label: 'Projected Annual Yield', value: '18.4%' }
    ],
    highlights: [
      'Eliminates intermediary risk through physical hardware-linked ledger logs.',
      'Thermal sensing telemetry provides immediate health and life-cycle validation.',
      'Sovereign registry architecture ensures absolute non-duplication of assets.',
      'Fully compliant with regional export guidelines and biological security acts.'
    ],
    pitchSlides: [
      'The Asset Opacity Gap: Opaque farm operations make livestock capital-inefficient and non-transparent to institutional allocators.',
      'IoT Sensor Registry: We deploy secure physical ear-tags transmitting weight, location, and biometrics to an unalterable database.',
      'Market Opportunity: $1.2B Sub-Saharan agricultural trade corridor ripe for standardized structural investment.',
      'Return Mechanics: Strong 18.4% target biological yield with underwritten buybacks from local consumer syndicates.'
    ]
  },
  {
    id: 'meathouse',
    name: 'Meat House',
    sector: 'Agribusiness',
    tagline: 'The infrastructure layer for organic, secure, and data-driven agro-processing.',
    valueProp: 'The infrastructure layer for organic, secure, and data-driven livestock processing and supply chain distribution.',
    description: 'Meat House designs and operates modern cold-chain hubs and automated processing facilities. Using continuous IoT telemetry to regulate climate controls and origin routing, we minimize perishability and establish premium export-grade meat products with flawless traceability.',
    metrics: [
      { label: 'Monthly Throughput Capacity', value: '450 Metric Tons' },
      { label: 'Cold-Chain SLA', value: '99.98% Uptime' },
      { label: 'Automated Class Rating', value: 'Premium Grade A' },
      { label: 'Operational Margin', value: '22.3%' }
    ],
    highlights: [
      'Custom processing facilities lower typical processing losses by over 14%.',
      'Solar-powered microgrids insulate physical facilities from power grid volatility.',
      'High-velocity delivery contracts with leading regional grocery brands and exporters.',
      'Instant temperature alerts and automated quarantine mechanisms guarantee quality.'
    ],
    pitchSlides: [
      'Post-Harvest Infrastructure Failure: Over 30% of livestock protein value is lost due to cold-chain breakages during regional transport.',
      'Integrated Processing Centers: Zero-loss abattoirs coupled with solar cooling arrays located directly adjacent to transport corridors.',
      'Contracted Demand: Multi-year supply agreements signed with premium B2B supermarket chains and export houses.',
      'Capital Scaling: Deploying 3 additional modular processing hubs to double processing capacity from 450T to 900T monthly.'
    ]
  },
  {
    id: 'pocketfund',
    name: 'Pocket Fund',
    sector: 'FinTech',
    tagline: 'Democratizing access to micro-allocation strategies, letting capital move with velocity.',
    valueProp: 'Democratizing access to micro-allocation strategies, allowing everyday capital to move with velocity.',
    description: 'Pocket Fund is an automated high-velocity capital routing application. By collecting retail surplus and micro-savings, the platform pools and deploys liquid assets into secure, high-yield commercial paper, institutional treasuries, and cash-equivalent indices previously inaccessible to small-scale capital.',
    metrics: [
      { label: 'Active Retail Allocators', value: '185,000+ LPs' },
      { label: 'Transaction Processing Velocity', value: '4.8 turns/year' },
      { label: 'Aggregate Ledger Volume', value: '$28.3 Million' },
      { label: 'Average Settlement Time', value: '< 3.0 Minutes' }
    ],
    highlights: [
      'Automated fractional micro-routing sweeps bank accounts with rounded-up spare change.',
      'Direct primary dealer integration accesses high-yield treasuries bypassing broker markups.',
      'Multi-layered military-grade asset insulation guarantees safety of consumer capital.',
      'Built-in instant withdrawal mechanism utilizes state-of-the-art regional liquidity reserves.'
    ],
    pitchSlides: [
      'Mass Retail Opaque Savings: Commercial bank deposits pay an average of 1.5% APY while inflation runs at double-digits.',
      'Micro-Pooling Platform: Consolidating $1 to $50 increments instantly into institutional-grade corporate debt pools.',
      'Exceptional Cohort Metrics: 84% Month-on-Month active retention rate among our 185,000 active members.',
      'Monetization Strategy: 0.85% annual AUM fee plus low-friction transactional micro-spreads.'
    ]
  },
  {
    id: 'realstake',
    name: 'Real Stake',
    sector: 'Real Estate',
    tagline: 'Lowering the barrier to premium, yield-generating commercial real estate assets.',
    valueProp: 'Lowering the barrier to premium, yield-generating real estate assets through structured, tech-enabled co-investment.',
    description: 'Real Stake fractionalizes institutional commercial real estate, urban logistics hubs, and high-yield multi-family apartments. Through robust legal-trust structures and digital allocations, co-investors can acquire premium property fractions and receive auto-distributed monthly rental dividends.',
    metrics: [
      { label: 'Managed Asset Value', value: '$42.1 Million' },
      { label: 'Mean Distributed Rental Yield', value: '11.4% Net p.a.' },
      { label: 'Registered Property LPs', value: '2,400+ Users' },
      { label: 'Minimum Ticket Entry', value: '$250 Fractional' }
    ],
    highlights: [
      'Underwritten using credit-vetted commercial tenants on long-term triple-net (NNN) leases.',
      'Automated payouts are deposited directly into user wallets via payment gateway triggers.',
      'In-app trading ledger provides a peer-to-peer liquidity option to buy and sell asset fractions.',
      'All trusts are held by top-tier fully licensed sovereign trustee corporations.'
    ],
    pitchSlides: [
      'High-Barrier Property Assets: Prime commercial yields are completely locked behind multi-million dollar down payments.',
      'Fractional Trust Architecture: Property deeds are placed in individual special-purpose holding trusts, divided into digital units.',
      'Immediate Cash Flow: Selected commercial centers yield rental cash flows from day-one of listing on the app.',
      'Refinancing & Exit: Standard 5-year exit mandate with full equity upside and capital gains distribution.'
    ]
  }
];

export const ECOSYSTEM_INTERVENTIONS: EcosystemIntervention[] = [
  {
    id: 'hills',
    title: 'HILLS @ Café One',
    tagline: 'The Gathering of Capital & Operational Sovereignty',
    badge: 'Syndicate Network',
    description: 'HILLS is our exclusive syndicate and physical-digital leadership ecosystem. Located in strategic physical-hybrid nodes (including our custom partnership hubs at Café One), HILLS acts as the premier convening ground for vetted founders, corporate leaders, and institutional sovereign capital allocators.',
    impactStatement: 'Bridges raw transactional deal-flow with multi-layered relationship capital, accelerating market access for our studio portfolio.',
    details: [
      'Bi-weekly private Deal Dining sessions presenting live studio spin-outs.',
      'Proprietary relationship portal matching co-investors with strategic venture Needs.',
      'Mentorship desks staffed directly by general partners and technical specialists.'
    ],
    upcomingDate: 'July 14, 2026 • Private Dining (Vetted LPs & General Partners)'
  },
  {
    id: 'moneyweek',
    title: 'Money Week',
    tagline: 'The Annual Strategic Intervention',
    badge: 'Flagship Summit',
    description: 'Money Week is our flagship annual forum designed to reprogram wealth management concepts. Moving entirely away from elementary "financial literacy," we convene global architects, legal authorities, and fund managers to study advanced defensive asset allocation, sovereign hedges, and cross-border portfolio creation.',
    impactStatement: 'An intellectual and capital catalyst generating over $15M in qualified institutional investor commitments.',
    details: [
      'Intensive workshops covering complex trust planning, estate protection, and RWA structures.',
      'The Sovereign Treasury Panel: Protecting corporate cash balances from high fiat inflation.',
      'Open venture showcases where Nerve Center cohorts deliver live ecosystem demonstrations.'
    ],
    upcomingDate: 'October 12-16, 2026 • Annual Summit (Physical & Broadcast)'
  },
  {
    id: 'nervecenter',
    title: 'Nerve Center Cohorts',
    tagline: 'The High-Velocity Venture Incubator',
    badge: 'Operational Studio',
    description: 'Nerve Center Cohorts are tactical, intensive 12-week cycles where we co-build next-generation infrastructure platforms. We accept raw concepts and pre-seed teams, deploying our technical stack, legal architectures, and distribution playbook to stress-test and spin out robust, investable enterprises.',
    impactStatement: 'Accelerates venture launch timelines by over 60% while drastically lowering execution risk.',
    details: [
      'Full technical stack contribution (including smart contracts, cloud infrastructure, and databases).',
      'Regulatory compliance mapping to secure institutional and local operating licenses.',
      'Seed capital injection of up to $150,000 with pre-negotiated Series-A co-investment partners.'
    ],
    upcomingDate: 'September 1, 2026 • Cohort 04 Applications Open'
  }
];

export const MOCK_SPVS: SPV[] = [
  {
    id: 'spv-farmchain',
    name: 'FarmChain - Series A Primary Livestock Tracking (SPV-02)',
    ventureId: 'farmchain',
    targetFunding: 1200000,
    raisedFunding: 840000,
    minInvestment: 10000,
    projectedIRR: 24.5,
    termMonths: 24,
    equityMultiplier: 1.6,
    riskRating: 'AA',
    status: 'Open'
  },
  {
    id: 'spv-meathouse',
    name: 'Meat House - Automated Cold Hubs Deployment (SPV-05)',
    ventureId: 'meathouse',
    targetFunding: 2000000,
    raisedFunding: 1850000,
    minInvestment: 25000,
    projectedIRR: 28.2,
    termMonths: 36,
    equityMultiplier: 2.1,
    riskRating: 'A+',
    status: 'Closing Soon'
  },
  {
    id: 'spv-realstake',
    name: 'Real Stake - Premium Commercial Complex Trust (SPV-01)',
    ventureId: 'realstake',
    targetFunding: 3500000,
    raisedFunding: 3500000,
    minInvestment: 15000,
    projectedIRR: 16.8,
    termMonths: 60,
    equityMultiplier: 1.8,
    riskRating: 'AA+',
    status: 'Fully Subscribed'
  },
  {
    id: 'spv-pocketfund',
    name: 'Pocket Fund - Treasury Liquidity Pool (SPV-08)',
    ventureId: 'pocketfund',
    targetFunding: 800000,
    raisedFunding: 320000,
    minInvestment: 5000,
    projectedIRR: 19.4,
    termMonths: 18,
    equityMultiplier: 1.4,
    riskRating: 'A',
    status: 'Open'
  }
];

export const MOCK_DOCUMENTS = [
  {
    id: 'doc-1',
    title: 'Nerve Capital - Fund Overview & Track Record (2024-2026)',
    type: 'Institutional PDF',
    size: '4.2 MB',
    date: 'June 2026',
    category: 'Institutional'
  },
  {
    id: 'doc-2',
    title: 'FarmChain Private Placement Memorandum (PPM) - Series A SPV-02',
    type: 'Legal Document',
    size: '12.8 MB',
    date: 'May 2026',
    category: 'Venture Prospectus'
  },
  {
    id: 'doc-3',
    title: 'Nerve Center Venture Studio - Investment Governance Blueprint',
    type: 'Operational Manual',
    size: '2.5 MB',
    date: 'April 2026',
    category: 'Governance'
  },
  {
    id: 'doc-4',
    title: 'Meat House Cold Supply Chain Expansion Underwriting Pack',
    type: 'Financial Underwriting',
    size: '8.1 MB',
    date: 'June 2026',
    category: 'Venture Prospectus'
  },
  {
    id: 'doc-5',
    title: 'Nerve Capital Digital Deal Room Regulatory Compliance Pack & Cayman Licensure',
    type: 'Compliance PDF',
    size: '5.6 MB',
    date: 'Jan 2026',
    category: 'Institutional'
  }
];
