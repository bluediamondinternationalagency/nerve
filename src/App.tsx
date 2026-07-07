import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CorePillars from './components/CorePillars';
import PortfolioTracks from './components/PortfolioTracks';
import EcosystemFunnel from './components/EcosystemFunnel';
import DealRoom from './components/DealRoom';
import Footer from './components/Footer';
import { LPUser } from './types';

export default function App() {
  // Limited Partner session local state
  const [lpUser, setLpUser] = useState<LPUser>({
    name: '',
    email: '',
    firm: '',
    acaccreditationStatus: false,
    isLoggedIn: false
  } as unknown as LPUser);

  // Link selected venture from tracks directly to specific SPV allocation
  const [preselectedVentureId, setPreselectedVentureId] = useState<string | null>(null);

  const handleLogin = (name: string, email: string, firm: string) => {
    setLpUser({
      name,
      email,
      firm,
      accreditationStatus: true,
      isLoggedIn: true
    });
  };

  const handleLogout = () => {
    setLpUser({
      name: '',
      email: '',
      firm: '',
      accreditationStatus: false,
      isLoggedIn: false
    });
    setPreselectedVentureId(null);
  };

  // Helper scroll function
  const scrollToDealRoom = () => {
    const element = document.getElementById('deal-room');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When LP clicks "Request Allocation" inside the Portfolio Track drawer
  const handleSelectVentureForSPV = (ventureId: string) => {
    // If not logged in, log them in or ask to login first
    setPreselectedVentureId(ventureId);
    if (!lpUser.isLoggedIn) {
      // Direct them to auth card inside deal room first
      scrollToDealRoom();
    } else {
      // If logged in, DealRoom's useEffect will catch and focus target SPV
      scrollToDealRoom();
    }
  };

  return (
    <div className="min-h-screen bg-carbon-950 text-neutral-100 flex flex-col justify-between selection:bg-accent-amber selection:text-carbon-950 font-sans antialiased">
      
      {/* Top Navigation */}
      <Header 
        lpUser={lpUser} 
        onOpenDealRoom={scrollToDealRoom} 
        onLogout={handleLogout} 
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero Area with Dynamic Headings */}
        <Hero 
          onExploreDealRoom={scrollToDealRoom} 
          onScrollToPortfolio={scrollToPortfolio} 
        />

        {/* Section 2: Core Operating Pillars */}
        <CorePillars />

        {/* Section 3: Strategic Portfolio Tracks */}
        <PortfolioTracks 
          onSelectVentureForSPV={handleSelectVentureForSPV} 
        />

        {/* Section 4: Ecosystem & Sourcing Forums */}
        <EcosystemFunnel />

        {/* Section 5: Secure Gated Digital Deal Room */}
        <DealRoom 
          lpUser={lpUser} 
          onLogin={handleLogin} 
          onLogout={handleLogout} 
          preselectedVentureId={preselectedVentureId}
          onClearPreselected={() => setPreselectedVentureId(null)}
        />
      </main>

      {/* Section 6: Standard Regulatory Disclaimer Footer */}
      <Footer />
    </div>
  );
}
