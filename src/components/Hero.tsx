import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Activity, Users, Globe, ChevronRight, Briefcase } from 'lucide-react';

interface HeroProps {
  onExploreDealRoom: () => void;
  onScrollToPortfolio: () => void;
}

export default function Hero({ onExploreDealRoom, onScrollToPortfolio }: HeroProps) {
  const [headlineOption, setHeadlineOption] = useState<'A' | 'B'>('A');
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    fullName: '',
    email: '',
    firm: '',
    allocationClass: 'institutional',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API registration
    setFormSubmitted(true);
    setTimeout(() => {
      setIsPartnerModalOpen(false);
      setFormSubmitted(false);
      setPartnerForm({
        fullName: '',
        email: '',
        firm: '',
        allocationClass: 'institutional',
        message: ''
      });
    }, 2500);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden tech-grid">
      {/* Absolute glow grids */}
      <div className="absolute inset-0 glow-overlay pointer-events-none"></div>
      <div className="absolute inset-0 glow-overlay-amber pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-carbon-950 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col justify-between">
        {/* Headline Toggle Control */}
        <div className="flex justify-start mb-8 animate-fadeIn">
          <div className="inline-flex rounded-lg border border-white/5 bg-carbon-900/80 p-1 backdrop-blur">
            <button
              onClick={() => setHeadlineOption('A')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
                headlineOption === 'A'
                  ? 'bg-accent-amber text-carbon-950 font-bold'
                  : 'text-white/40 hover:text-white/80'
              }`}
              id="hero-toggle-a"
            >
              <Briefcase className="w-3 h-3" />
              <span>Sovereign Wealth Focus</span>
            </button>
            <button
              onClick={() => setHeadlineOption('B')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
                headlineOption === 'B'
                  ? 'bg-accent-amber text-carbon-950 font-bold'
                  : 'text-white/40 hover:text-white/80'
              }`}
              id="hero-toggle-b"
            >
              <Activity className="w-3 h-3" />
              <span>Venture Studio Focus</span>
            </button>
          </div>
        </div>

        {/* Dynamic Bold Typography Headers */}
        <div className="max-w-4xl min-h-[180px] md:min-h-[220px] flex flex-col justify-center">
          {headlineOption === 'A' ? (
            <div className="space-y-4 animate-slideUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-carbon-900 border border-white/10 font-mono text-[10px] text-white/60 tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-amber" />
                <span>Zero Inertia Fund Architecture</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Architecting Wealth.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-accent-amber to-amber-600">
                  Engineering Ventures.
                </span>
              </h1>
            </div>
          ) : (
            <div className="space-y-4 animate-slideUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-carbon-900 border border-white/10 font-mono text-[10px] text-white/60 tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
                <span>Sovereign Economic Infrastructure</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Where Institutional Capital<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-accent-amber to-amber-600">
                  Meets High-Velocity Building.
                </span>
              </h1>
            </div>
          )}
        </div>

        {/* Subtitle & Core Call-to-Actions */}
        <div className="mt-6 max-w-2xl space-y-8 animate-fadeIn" style={{ animationDelay: '150ms' }}>
          <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            We bridge the gap between capital allocation and hands-on venture execution. Through our fund management arm and dedicated venture studio, we build, fund, and scale the infrastructure of tomorrow’s economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onExploreDealRoom}
              className="px-6 py-3.5 rounded bg-white text-carbon-950 font-mono text-xs font-bold hover:bg-neutral-200 shadow-lg shadow-white/5 transition-all duration-300 flex items-center justify-center gap-2 group"
              id="hero-btn-deal-room"
            >
              <span>Explore Deal Room</span>
              <ArrowRight className="w-4 h-4 text-carbon-950 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onScrollToPortfolio}
              className="px-6 py-3.5 rounded bg-carbon-900/80 border border-white/10 hover:border-white/30 text-white font-mono text-xs transition-colors text-center"
              id="hero-btn-portfolio"
            >
              View Studio Portfolio
            </button>
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-6 py-3.5 rounded border border-accent-amber/30 hover:border-accent-amber text-accent-amber font-mono text-xs transition-all duration-300 bg-accent-amber/5 text-center"
              id="hero-btn-partner"
            >
              Partner with Us
            </button>
          </div>
        </div>

        {/* Sophisticated Technical Stats Bar */}
        <div className="mt-16 sm:mt-24 border-t border-white/5 pt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <div className="space-y-1.5" id="stat-a">
            <div className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">Ecosystem AUM</div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">$42.1M+</div>
            <p className="text-[11px] text-neutral-500">Underwritten real estate & physical agribusiness assets.</p>
          </div>
          <div className="space-y-1.5" id="stat-b">
            <div className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">Active LP Base</div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">185,000+</div>
            <p className="text-[11px] text-neutral-500">Retail and institutional co-investors deployed.</p>
          </div>
          <div className="space-y-1.5" id="stat-c">
            <div className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">Venture Success</div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">4 Tracks</div>
            <p className="text-[11px] text-neutral-500">High-yield agribusiness, fintech & processing.</p>
          </div>
          <div className="space-y-1.5" id="stat-d">
            <div className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">Operating Velocity</div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">Zero Inertia</div>
            <p className="text-[11px] text-neutral-500">Continuous micro-allocation and active legal custody.</p>
          </div>
        </div>
      </div>

      {/* Accredit Partnership Modal */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbon-950/90 backdrop-blur-sm animate-fadeIn">
          <div className="glass-panel w-full max-w-lg rounded-xl overflow-hidden p-6 relative border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div>
                <h3 className="font-display font-semibold text-lg text-white">Partner with Nerve Capital</h3>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Accreditation & Syndicate Registry</p>
              </div>
              <button 
                onClick={() => setIsPartnerModalOpen(false)}
                className="p-1 rounded hover:bg-white/5 text-white/60 hover:text-white transition-colors"
                id="partner-modal-close"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-white">Transmission Received</h4>
                <p className="text-xs text-neutral-400 max-w-xs font-sans leading-relaxed">
                  Our fund compliance desks will verify your professional credentials. A secure PG-encryption key and portal link will be forwarded to your email.
                </p>
                <div className="font-mono text-[10px] text-accent-amber animate-pulse">CRYPTOGRAPHIC LOCK INJECTED</div>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Full Name / Authorized Signatory</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.fullName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, fullName: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors"
                    placeholder="e.g., Alexander Vane"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors"
                      placeholder="alexander@sovereign-holdings.com"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Institution / LP Firm</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.firm}
                      onChange={(e) => setPartnerForm({ ...partnerForm, firm: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors"
                      placeholder="Sovereign Partners LLC"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Accreditation Category</label>
                  <select
                    value={partnerForm.allocationClass}
                    onChange={(e) => setPartnerForm({ ...partnerForm, allocationClass: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors"
                  >
                    <option value="institutional">Institutional Asset Manager (GP / LP)</option>
                    <option value="single-family">Single Family Office / Wealth Trustee</option>
                    <option value="hnwi">Accredited High-Net-Worth Individual ($1M+ Liquidity)</option>
                    <option value="venture-founder">Tech Founder (Seeking Studio Incubation)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-white/40 mb-1.5">Inquiry Details & Strategic Mandate</label>
                  <textarea
                    rows={3}
                    required
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-accent-amber transition-colors resize-none"
                    placeholder="Outline target allocation range and past sector underwriting histories."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-accent-amber text-carbon-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Transmit Secure Credentials</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
