export interface Venture {
  id: string;
  name: string;
  sector: 'Agribusiness' | 'FinTech' | 'Real Estate';
  tagline: string;
  description: string;
  valueProp: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  pitchSlides: string[];
}

export interface EcosystemIntervention {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  impactStatement: string;
  details: string[];
  upcomingDate: string;
}

export interface SPV {
  id: string;
  name: string;
  ventureId: string;
  targetFunding: number;
  raisedFunding: number;
  minInvestment: number;
  projectedIRR: number; // e.g. 24%
  termMonths: number;
  equityMultiplier: number; // e.g. 1.8x
  riskRating: 'A' | 'A+' | 'AA' | 'AA+';
  status: 'Open' | 'Closing Soon' | 'Fully Subscribed';
}

export interface AllocationRequest {
  id: string;
  spvId: string;
  spvName: string;
  amount: number;
  investorName: string;
  investorEmail: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Awaiting Documents';
}

export interface LPUser {
  name: string;
  email: string;
  firm: string;
  accreditationStatus: boolean;
  isLoggedIn: boolean;
}
