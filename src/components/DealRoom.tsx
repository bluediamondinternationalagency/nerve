import React, { useState, useEffect } from 'react';
import { MOCK_SPVS, MOCK_DOCUMENTS } from '../data';
import { SPV, AllocationRequest, LPUser } from '../types';
import { 
  ShieldCheck, Lock, ArrowRight, UserCheck, Calculator, Download, 
  FileCheck, Coins, RefreshCw, Send, Check, Trash2, HelpCircle, FileText, AlertTriangle 
} from 'lucide-react';

interface DealRoomProps {
  lpUser: LPUser;
  onLogin: (name: string, email: string, firm: string) => void;
  onLogout: () => void;
  preselectedVentureId: string | null;
  onClearPreselected: () => void;
}

export default function DealRoom({ 
  lpUser, 
  onLogin, 
  onLogout, 
  preselectedVentureId, 
  onClearPreselected 
}: DealRoomProps) {
  
  // Login credentials state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [firm, setFirm] = useState('');
  const [accredited, setAccredited] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStep, setVerificationStep] = useState('');

  // Interactive Deal Room States
  const [selectedSPVId, setSelectedSPVId] = useState<string>('');
  const [calcInvestment, setCalcInvestment] = useState<number>(0);
  const [allocationAmount, setAllocationAmount] = useState<string>('');
  const [isAllocating, setIsAllocating] = useState(false);
  const [allocationsList, setAllocationsList] = useState<AllocationRequest[]>([]);
  const [allocationFeedback, setAllocationFeedback] = useState<string | null>(null);

  // Document decryptor states
  const [decryptingDocId, setDecryptingDocId] = useState<string | null>(null);
  const [decryptedDocText, setDecryptedDocText] = useState<{title: string, body: string} | null>(null);

  // Map preselected venture to respective SPV on load/change
  useEffect(() => {
    if (preselectedVentureId && lpUser.isLoggedIn) {
      const match = MOCK_SPVS.find(s => s.ventureId === preselectedVentureId);
      if (match) {
        setSelectedSPVId(match.id);
        setCalcInvestment(match.minInvestment);
        setAllocationAmount(match.minInvestment.toString());
        // Scroll to the deal room smoothly
        const element = document.getElementById('deal-room');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      onClearPreselected();
    }
  }, [preselectedVentureId, lpUser.isLoggedIn]);

  // Set default SPV selection if empty
  useEffect(() => {
    if (lpUser.isLoggedIn && !selectedSPVId && MOCK_SPVS.length > 0) {
      const firstOpen = MOCK_SPVS.find(s => s.status !== 'Fully Subscribed') || MOCK_SPVS[0];
      setSelectedSPVId(firstOpen.id);
      setCalcInvestment(firstOpen.minInvestment);
      setAllocationAmount(firstOpen.minInvestment.toString());
    }
  }, [lpUser.isLoggedIn, selectedSPVId]);

  // Handle Auth submission simulation
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !firm || !accredited) return;

    setIsVerifying(true);
    
    // Simulate multi-step verification
    const steps = [
      'Establishing AES-256 secure transport layer...',
      'Syncing public identity verification registries...',
      'Validating accredited syndicate parameters...',
      'Access Authorized! Redirecting to secure ledger...'
    ];

    let current = 0;
    setVerificationStep(steps[current]);

    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setVerificationStep(steps[current]);
      } else {
        clearInterval(interval);
        onLogin(name, email, firm);
        setIsVerifying(false);
        setVerificationStep('');
      }
    }, 750);
  };

  // Switch between SPVs in calculator
  const handleSPVChange = (spvId: string) => {
    setSelectedSPVId(spvId);
    const target = MOCK_SPVS.find(s => s.id === spvId);
    if (target) {
      setCalcInvestment(target.minInvestment);
      setAllocationAmount(target.minInvestment.toString());
    }
  };

  const activeSPV = MOCK_SPVS.find(s => s.id === selectedSPVId) || MOCK_SPVS[0];

  // Submit allocation request
  const handleAllocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(allocationAmount);
    
    if (isNaN(amountNum) || amountNum < activeSPV.minInvestment) {
      setAllocationFeedback(`Minimum allocation for this SPV is $${activeSPV.minInvestment.toLocaleString()}`);
      return;
    }

    setIsAllocating(true);

    setTimeout(() => {
      const newRequest: AllocationRequest = {
        id: `ALC-${Math.floor(Math.random() * 90000 + 10000)}`,
        spvId: activeSPV.id,
        spvName: activeSPV.name,
        amount: amountNum,
        investorName: lpUser.name,
        investorEmail: lpUser.email,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        status: 'Pending'
      };

      setAllocationsList(prev => [newRequest, ...prev]);
      setIsAllocating(false);
      setAllocationFeedback('Allocation submitted successfully. Review status below.');
      setAllocationAmount(activeSPV.minInvestment.toString());

      // Clear feedback banner after 4s
      setTimeout(() => setAllocationFeedback(null), 4000);
    }, 1500);
  };

  // Remove pending allocation
  const handleCancelAllocation = (id: string) => {
    setAllocationsList(prev => prev.filter(item => item.id !== id));
  };

  // Document decryption simulation
  const handleDecryptDoc = (docId: string, docTitle: string) => {
    setDecryptingDocId(docId);
    
    setTimeout(() => {
      let bodyText = '';
      if (docTitle.includes(' Cayman')) {
        bodyText = `REGULATORY COMPLIANCE EXCERPT: Nerve Capital Sovereign Fund SPC is registered under Section 4(3) of the Mutual Funds Act of the Cayman Islands. The fund maintains active licensure and files audited accounts annually with the Cayman Islands Monetary Authority (CIMA). Financial records are underwritten under IFRS parameters. Underwriting accounts are isolated across distinct cell portfolios safeguarding against cross-liability issues between SPVs.`;
      } else if (docTitle.includes('FarmChain')) {
        bodyText = `PRIVATE PLACEMENT MEMORANDUM EXCERPT: FarmChain Series-02 SPV provides qualified LPs with fractional partnership units mapping directly to active tracking tags. Key Risk Factors include physical livestock mortality, feed cost variance, and localized regional trade transport blockages. Asset protection incorporates localized legal title transfers to premium agribusiness entities coupled with automated commercial buy-back contracts. Target net IRR is model-pegged at 24.5% net of all GP fees.`;
      } else if (docTitle.includes('Overview')) {
        bodyText = `NERVE CAPITAL INVESTMENT STRATEGY: Bridging standard capital allocation with continuous hands-on venture studio acceleration. Historical net track record indicates average capital velocity return timelines of 22 months on early pre-seed entries. General Partner team provides active operational engineering, legal scaffolding, and high-density commercial pathways (including exclusive HILLS networks) to drastically mitigate execution failure modes.`;
      } else {
        bodyText = `FINANCIAL PROSPECTUS STATEMENT: Underwritten expansion assets incorporate triple-net (NNN) long-term lease covenants with vetted processing chains and cold-logistics handlers. Rent escalations are consumer-price indexed annually. The physical real estate deeds are registered directly under local institutional custody trusts protecting sovereign co-investor liquidity parameters from processing partner exposure.`;
      }

      setDecryptedDocText({
        title: docTitle,
        body: bodyText
      });
      setDecryptingDocId(null);
    }, 1200);
  };

  return (
    <section id="deal-room" className="py-24 border-t border-white/5 relative bg-carbon-950">
      <div className="absolute inset-0 tech-grid-dots pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="font-mono text-[10px] text-accent-amber tracking-widest uppercase">Institutional Capital Interface</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Digital Deal Room
          </h2>
          <p className="text-sm text-neutral-400 font-sans leading-relaxed">
            We eliminate administrative friction. Verified accredited investors can access active SPVs, interact with yield calculators, review regulatory compliance dossiers, and submit direct allocations instantly.
          </p>
        </div>

        {/* -------------------- GATED VIEW: NOT LOGGED IN -------------------- */}
        {!lpUser.isLoggedIn ? (
          <div className="max-w-md mx-auto glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative shadow-2xl" id="dealroom-gate">
            <div className="absolute top-0 right-0 p-4">
              <Lock className="w-4 h-4 text-white/20" />
            </div>

            <div className="text-center space-y-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent-amber/10 border border-accent-amber/30 flex items-center justify-center mx-auto text-accent-amber">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Accredited LP Access Only</h3>
              <p className="text-xs text-neutral-400 font-sans">
                Enter your credentials to verify accreditation and unlock active SPV ledgers, regulatory PPM materials, and underwriting data.
              </p>
            </div>

            {isVerifying ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4">
                <RefreshCw className="w-8 h-8 text-accent-amber animate-spin" />
                <div className="text-xs font-mono text-accent-amber uppercase tracking-wider animate-pulse">CRYPTOGRAPHIC VERIFICATION IN PROGRESS</div>
                <p className="text-[10px] text-white/40 font-mono text-center max-w-xs">{verificationStep}</p>
              </div>
            ) : (
              <form onSubmit={handleAuth} className="space-y-4 text-left" id="dealroom-auth-form">
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Your Authorized Signatory</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-carbon-900 border border-white/10 rounded px-3.5 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors"
                    placeholder="e.g., Katherine Sterling"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-carbon-900 border border-white/10 rounded px-3.5 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors"
                      placeholder="katherine@sterling-capital.com"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Allocating Firm</label>
                    <input
                      type="text"
                      required
                      value={firm}
                      onChange={(e) => setFirm(e.target.value)}
                      className="w-full bg-carbon-900 border border-white/10 rounded px-3.5 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors"
                      placeholder="Sterling Trust Ltd"
                    />
                  </div>
                </div>

                <div className="py-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={accredited}
                      onChange={(e) => setAccredited(e.target.checked)}
                      className="mt-0.5 rounded border-white/10 bg-carbon-900 text-accent-amber focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-[11px] text-neutral-400 font-sans leading-snug">
                      I certify under legal compliance that I represent an accredited institutional LP or qualified high-net-worth individual with $1M+ liquid investment assets.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-accent-amber text-carbon-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
                  id="btn-dealroom-auth"
                >
                  <span>Authorize Secure Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center flex items-center justify-center gap-1.5 font-mono text-[9px] text-white/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SECURED BY CO-SIGN COMPLIANCE PROTOCOL (AES-256)</span>
                </div>
              </form>
            )}
          </div>
        ) : (
          
          /* -------------------- UNGATED DEEP DEAL ROOM INTERFACE -------------------- */
          <div className="space-y-12 animate-fadeIn" id="dealroom-dashboard">
            
            {/* User Session Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border border-white/5 bg-carbon-900/60 gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest">SECURE INTERFACE ACTIVE</div>
                  <h4 className="font-display font-bold text-xs text-white">
                    Logged in as <span className="text-emerald-400">{lpUser.name}</span> representing <span className="text-neutral-300">{lpUser.firm}</span>
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-mono text-[9px] text-white/30 uppercase">Sovereign Cayman SPC v2.6</div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded border border-white/15 hover:border-white/40 font-mono text-[10px] text-white/60 hover:text-white transition-colors"
                  id="dealroom-btn-exit"
                >
                  CLOSE SESSION
                </button>
              </div>
            </div>

            {/* Main Interactive Gated Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Active SPVs list */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-accent-amber" />
                  <span>ACTIVE DEPLOYMENT VEHICLES</span>
                </h3>

                <div className="space-y-3" id="dealroom-spvs-list">
                  {MOCK_SPVS.map((spv) => {
                    const isSelected = selectedSPVId === spv.id;
                    const percentRaised = Math.round((spv.raisedFunding / spv.targetFunding) * 100);

                    return (
                      <div
                        key={spv.id}
                        onClick={() => handleSPVChange(spv.id)}
                        className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-carbon-900 border-accent-amber'
                            : 'bg-carbon-900/20 border-white/5 opacity-70 hover:opacity-100 hover:bg-carbon-900/40'
                        }`}
                        id={`spv-item-${spv.id}`}
                      >
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h4 className="font-display font-bold text-xs text-white">{spv.name}</h4>
                          <span className={`font-mono text-[9px] px-2 py-0.5 rounded border uppercase shrink-0 ${
                            spv.status === 'Fully Subscribed'
                              ? 'bg-neutral-900 border-white/10 text-neutral-500'
                              : spv.status === 'Closing Soon'
                              ? 'bg-amber-950/40 border-amber-500/20 text-amber-400'
                              : 'bg-emerald-950/40 border-emerald-500/20 text-emerald-400'
                          }`}>
                            {spv.status}
                          </span>
                        </div>

                        {/* Small metadata row */}
                        <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5 font-mono text-[9px] text-neutral-400 mt-2">
                          <div>
                            <span className="block text-white/30 uppercase">IRR Target</span>
                            <span className="text-white font-bold">{spv.projectedIRR}%</span>
                          </div>
                          <div>
                            <span className="block text-white/30 uppercase">Term Limit</span>
                            <span className="text-white font-bold">{spv.termMonths} Mo</span>
                          </div>
                          <div>
                            <span className="block text-white/30 uppercase">Risk Rating</span>
                            <span className="text-white font-bold">{spv.riskRating}</span>
                          </div>
                        </div>

                        {/* High-contrast Progress line */}
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between font-mono text-[9px] text-white/30">
                            <span>Allocated: ${spv.raisedFunding.toLocaleString()}</span>
                            <span>{percentRaised}% of ${spv.targetFunding.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-carbon-950 rounded-full h-1 overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-500 ${
                                spv.status === 'Fully Subscribed' ? 'bg-neutral-600' : 'bg-accent-amber'
                              }`}
                              style={{ width: `${percentRaised}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Calculator and Allocation Submit panel */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* ROI / Allocation Interactive Tool */}
                <div className="glass-panel rounded-xl p-6 border border-white/15 bg-carbon-900/60" id="dealroom-calc-panel">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent-amber uppercase tracking-wider mb-4">
                    <Calculator className="w-4 h-4" />
                    <span>SPV YIELD AND MULTIPLIER SIMULATOR</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-neutral-200">{activeSPV.name}</h4>
                      <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider mt-0.5">Asset Target Underwrite Framework</p>
                    </div>

                    {/* Interactive Input Slider */}
                    <div className="space-y-2 py-3 border-y border-white/5">
                      <div className="flex justify-between items-center">
                        <label className="font-mono text-[9px] uppercase text-white/40 tracking-wider">Investment Principal Allocation</label>
                        <span className="font-display font-extrabold text-base text-white">${calcInvestment.toLocaleString()}</span>
                      </div>
                      
                      <input
                        type="range"
                        min={activeSPV.minInvestment}
                        max={activeSPV.targetFunding - activeSPV.raisedFunding === 0 ? 500000 : activeSPV.targetFunding - activeSPV.raisedFunding}
                        step={1000}
                        value={calcInvestment}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setCalcInvestment(val);
                          setAllocationAmount(val.toString());
                        }}
                        className="w-full accent-accent-amber bg-carbon-950 h-1.5 rounded-lg cursor-pointer"
                        id="investment-range-slider"
                      />

                      <div className="flex justify-between font-mono text-[9px] text-white/30">
                        <span>Min Ticket: ${activeSPV.minInvestment.toLocaleString()}</span>
                        <span>Max Cap: ${(activeSPV.targetFunding - activeSPV.raisedFunding).toLocaleString()} available</span>
                      </div>
                    </div>

                    {/* Simulation output cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-3.5 rounded bg-carbon-950 border border-white/5">
                        <span className="block font-mono text-[8px] uppercase tracking-wider text-white/30">Projected Returns (Net Net)</span>
                        <span className="font-display font-bold text-sm text-emerald-400">
                          +${Math.round(calcInvestment * (activeSPV.projectedIRR / 100) * (activeSPV.termMonths / 12)).toLocaleString()}
                        </span>
                        <span className="block font-mono text-[8px] text-white/20 uppercase tracking-widest mt-0.5">ESTIMATED YIELD p.a.</span>
                      </div>

                      <div className="p-3.5 rounded bg-carbon-950 border border-white/5">
                        <span className="block font-mono text-[8px] uppercase tracking-wider text-white/30">Cumulative Windfall return</span>
                        <span className="font-display font-bold text-sm text-white">
                          ${Math.round(calcInvestment * activeSPV.equityMultiplier).toLocaleString()}
                        </span>
                        <span className="block font-mono text-[8px] text-white/20 uppercase tracking-widest mt-0.5">MULTIPLIER: {activeSPV.equityMultiplier}X</span>
                      </div>
                    </div>

                    {/* Allocation request form */}
                    {activeSPV.status === 'Fully Subscribed' ? (
                      <div className="p-4 rounded bg-white/5 border border-white/10 text-center font-mono text-[10px] text-white/40 uppercase">
                        <AlertTriangle className="w-4 h-4 mx-auto mb-1 text-white/30" />
                        This vehicle is fully subscribed. Select another open SPV to deploy capital.
                      </div>
                    ) : (
                      <form onSubmit={handleAllocationSubmit} className="pt-4 space-y-3 border-t border-white/5">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="relative flex-grow">
                            <span className="absolute left-3.5 top-2.5 text-xs font-mono text-white/40">$</span>
                            <input
                              type="number"
                              required
                              min={activeSPV.minInvestment}
                              value={allocationAmount}
                              onChange={(e) => {
                                setAllocationAmount(e.target.value);
                                const num = parseFloat(e.target.value);
                                if (!isNaN(num)) setCalcInvestment(num);
                              }}
                              className="w-full bg-carbon-950 border border-white/10 rounded px-8 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-accent-amber"
                              placeholder="Allocation size"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isAllocating}
                            className="px-6 py-2.5 rounded bg-accent-amber text-carbon-950 hover:bg-amber-400 font-mono text-xs font-bold transition-colors shrink-0 flex items-center justify-center gap-1.5"
                            id="dealroom-btn-submit-allocation"
                          >
                            {isAllocating ? (
                              <>
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                <span>Securing Hold...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                <span>Commit Allocation</span>
                              </>
                            )}
                          </button>
                        </div>

                        {allocationFeedback && (
                          <p className={`font-mono text-[10px] uppercase tracking-wide text-center py-2 rounded bg-white/5 border ${
                            allocationFeedback.includes('successfully') ? 'border-emerald-500/20 text-emerald-400' : 'border-amber-500/20 text-amber-400'
                          }`}>
                            {allocationFeedback}
                          </p>
                        )}
                      </form>
                    )}
                  </div>
                </div>

                {/* Decrypted Compliance & PPM Center */}
                <div className="glass-panel rounded-xl p-6 border border-white/5 text-left" id="dealroom-docs-center">
                  <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-accent-amber" />
                    <span>DECRYPTED REGULATORY DOSSIER CENTER</span>
                  </h3>

                  <div className="space-y-3.5">
                    {MOCK_DOCUMENTS.map((doc) => (
                      <div key={doc.id} className="p-3 rounded bg-carbon-950 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                        <div className="space-y-0.5">
                          <span className="block font-mono text-[8px] text-accent-amber uppercase tracking-widest">{doc.category} • {doc.type}</span>
                          <h4 className="font-display font-bold text-xs text-white">{doc.title}</h4>
                          <span className="block font-mono text-[8px] text-white/30">Size: {doc.size} • Last Modified: {doc.date}</span>
                        </div>

                        <button
                          onClick={() => handleDecryptDoc(doc.id, doc.title)}
                          disabled={decryptingDocId === doc.id}
                          className="px-3 py-1.5 rounded border border-white/10 hover:border-accent-amber font-mono text-[9px] text-white/60 hover:text-white transition-all duration-300 flex items-center gap-1 shrink-0"
                          id={`doc-btn-${doc.id}`}
                        >
                          {decryptingDocId === doc.id ? (
                            <>
                              <RefreshCw className="w-3 h-3 animate-spin text-accent-amber" />
                              <span>Decrypting...</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3 h-3 text-accent-amber" />
                              <span>Decrypt & Open</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Inline Document Reader Container */}
                  {decryptedDocText && (
                    <div className="mt-4 p-5 rounded border border-emerald-500/20 bg-emerald-950/5 animate-slideUp text-left relative" id="inline-doc-reader">
                      <div className="absolute top-2 right-2">
                        <button
                          onClick={() => setDecryptedDocText(null)}
                          className="font-mono text-[9px] text-white/40 hover:text-white/80"
                        >
                          CLOSE [X]
                        </button>
                      </div>
                      <span className="block font-mono text-[8px] text-emerald-400 uppercase tracking-widest mb-1.5 font-bold">DECRYPTED AES-256 RAW DATA RECORD</span>
                      <h4 className="font-display font-bold text-xs text-white mb-2">{decryptedDocText.title}</h4>
                      <p className="font-sans text-[11px] text-neutral-300 leading-relaxed font-light">
                        {decryptedDocText.body}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Active Allocations Ledger - Persisted Local State */}
            {allocationsList.length > 0 && (
              <div className="border-t border-white/5 pt-10 text-left" id="allocations-ledger">
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-accent-amber" />
                  <span>YOUR ALLOCATION ORDERS LEDGER</span>
                </h3>

                <div className="border border-white/5 rounded-lg bg-carbon-900 overflow-hidden">
                  <div className="grid grid-cols-5 border-b border-white/5 bg-carbon-950/80 p-3 font-mono text-[9px] uppercase tracking-wider text-white/40">
                    <div>ORDER ID</div>
                    <div className="col-span-2">ASSET SPECIAL PURPOSE VEHICLE</div>
                    <div>SIZE Committed</div>
                    <div className="text-right">UNDERWRITE STATUS</div>
                  </div>

                  <div className="divide-y divide-white/5">
                    {allocationsList.map((item) => (
                      <div key={item.id} className="p-3 grid grid-cols-5 items-center text-xs font-sans text-neutral-300">
                        <div className="font-mono text-[10px] text-white/60">{item.id}</div>
                        <div className="col-span-2 font-display font-semibold text-white">{item.spvName}</div>
                        <div className="font-mono font-bold text-white text-[11px]">${item.amount.toLocaleString()}</div>
                        <div className="flex items-center justify-end gap-3">
                          <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/20 text-amber-400 animate-pulse uppercase tracking-wide">
                            PENDING REGULATION REVIEW
                          </span>
                          <button
                            onClick={() => handleCancelAllocation(item.id)}
                            className="p-1 rounded hover:bg-red-500/10 text-neutral-500 hover:text-red-400 transition-colors"
                            title="Retract Allocation"
                            id={`cancel-btn-${item.id}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
