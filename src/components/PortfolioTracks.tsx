import React, { useState } from 'react';
import { PORTFOLIO_VENTURES } from '../data';
import { Venture } from '../types';
import { TrendingUp, ArrowRight, Layers, Sprout, Building, Cpu, Sparkles, ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';

interface PortfolioTracksProps {
  onSelectVentureForSPV: (ventureId: string) => void;
}

type SectorFilter = 'All' | 'Agribusiness' | 'FinTech' | 'Real Estate';

export default function PortfolioTracks({ onSelectVentureForSPV }: PortfolioTracksProps) {
  const [activeFilter, setActiveFilter] = useState<SectorFilter>('All');
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const filteredVentures = activeFilter === 'All'
    ? PORTFOLIO_VENTURES
    : PORTFOLIO_VENTURES.filter(v => v.sector === activeFilter);

  const openVentureDetails = (venture: Venture) => {
    setSelectedVenture(venture);
    setCurrentSlideIndex(0);
  };

  const getSectorIcon = (sector: Venture['sector']) => {
    switch (sector) {
      case 'Agribusiness':
        return <Sprout className="w-4 h-4 text-emerald-400" />;
      case 'FinTech':
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'Real Estate':
        return <Building className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 border-t border-white/5 relative">
      <div className="absolute inset-0 glow-overlay-amber pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="font-mono text-[10px] text-accent-amber tracking-widest uppercase">Proprietary Venture Portfolio</div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Systemic Wealth Infrastructure
            </h2>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              We focus on building and funding structural companies that produce defensive cashflows and deliver modern market liquidity.
            </p>
          </div>

          {/* High-Contrast Sector Filter Tabs */}
          <div className="flex flex-wrap gap-2" id="portfolio-filters">
            {(['All', 'Agribusiness', 'FinTech', 'Real Estate'] as SectorFilter[]).map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 border ${
                  activeFilter === sector
                    ? 'bg-white text-carbon-950 font-bold border-white'
                    : 'bg-carbon-900/60 border-white/5 text-white/60 hover:text-white hover:border-white/10'
                }`}
                id={`filter-${sector.toLowerCase()}`}
              >
                {sector === 'All' ? 'All Sectors' : sector}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="portfolio-bento-grid">
          {filteredVentures.map((venture) => (
            <div
              key={venture.id}
              onClick={() => openVentureDetails(venture)}
              className="glass-panel glass-panel-hover p-6 md:p-8 rounded-xl border border-white/5 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between h-[300px] relative group overflow-hidden"
              id={`venture-card-${venture.id}`}
            >
              {/* Decorative top grid lines */}
              <div className="absolute top-0 right-0 p-4 flex items-center gap-1.5 bg-carbon-900/60 border-b border-l border-white/5 rounded-bl-lg font-mono text-[9px] text-white/50">
                {getSectorIcon(venture.sector)}
                <span>{venture.sector.toUpperCase()}</span>
              </div>

              <div>
                <div className="font-mono text-[10px] text-accent-amber mb-2 uppercase tracking-widest">ST_TRACK_{venture.id.toUpperCase()}</div>
                <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-accent-amber transition-colors mb-2">{venture.name}</h3>
                <p className="font-sans text-xs text-neutral-300 font-medium mb-4 line-clamp-2 max-w-md">
                  {venture.tagline}
                </p>
              </div>

              <div>
                <p className="font-sans text-xs text-neutral-400 line-clamp-3 mb-6">
                  {venture.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  {/* Pull first metric */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">{venture.metrics[0].label}</span>
                    <span className="font-display font-semibold text-sm text-white">{venture.metrics[0].value}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent-amber group-hover:translate-x-1 transition-transform">
                    <span>Inspect Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Venture Details Interactive Overlay (Drawer) */}
        {selectedVenture && (
          <div className="fixed inset-0 z-50 flex justify-end bg-carbon-950/80 backdrop-blur-sm animate-fadeIn">
            <div 
              className="w-full max-w-2xl bg-carbon-950 border-l border-white/10 h-full overflow-y-auto p-6 md:p-10 text-left relative flex flex-col justify-between shadow-2xl"
              id="venture-detail-panel"
            >
              <div>
                {/* Header controls */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-white/5">
                      {getSectorIcon(selectedVenture.sector)}
                    </div>
                    <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">{selectedVenture.sector}</span>
                  </div>
                  <button
                    onClick={() => setSelectedVenture(null)}
                    className="px-3 py-1.5 rounded border border-white/10 hover:border-white/30 text-xs font-mono text-white/60 hover:text-white transition-colors"
                    id="btn-close-details"
                  >
                    CLOSE [ESC]
                  </button>
                </div>

                {/* Venture Intro */}
                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-accent-amber uppercase tracking-widest">VENTURE PROFILE</div>
                  <h3 className="font-display font-extrabold text-3xl text-white">{selectedVenture.name}</h3>
                  <p className="font-sans text-sm text-neutral-300 font-semibold italic">
                    "{selectedVenture.valueProp}"
                  </p>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    {selectedVenture.description}
                  </p>
                </div>

                {/* Venture Metrics Stats Grid */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {selectedVenture.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-lg bg-carbon-900 border border-white/5">
                      <span className="block font-mono text-[9px] uppercase text-white/40 tracking-wider mb-1">{m.label}</span>
                      <span className="font-display font-bold text-sm text-white">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Value Highlights */}
                <div className="mt-8 space-y-3">
                  <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">STRATEGIC HIGHLIGHTS</h4>
                  <div className="space-y-2">
                    {selectedVenture.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                        <span className="text-accent-amber font-mono mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Pitch Slide Component */}
                <div className="mt-10 p-5 rounded-lg border border-accent-amber/20 bg-carbon-900/60 relative">
                  <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-accent-amber font-bold">LIVE PITCH DECK</div>
                  <div className="mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/40">Slide {currentSlideIndex + 1} of {selectedVenture.pitchSlides.length}</span>
                  </div>

                  {/* Pitch Slide Content display */}
                  <div className="min-h-[100px] flex items-center justify-center p-4 border border-white/5 rounded bg-carbon-950">
                    <p className="font-display font-medium text-xs text-center text-neutral-200 leading-relaxed">
                      {selectedVenture.pitchSlides[currentSlideIndex]}
                    </p>
                  </div>

                  {/* Slide controls */}
                  <div className="flex items-center justify-between mt-4">
                    <button
                      disabled={currentSlideIndex === 0}
                      onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)}
                      className="p-1.5 rounded border border-white/15 text-white disabled:opacity-30 disabled:hover:border-white/15 hover:border-white/30 transition-colors"
                      id="btn-prev-slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-[10px] text-white/30 uppercase">Interactive Briefing</span>
                    <button
                      disabled={currentSlideIndex === selectedVenture.pitchSlides.length - 1}
                      onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)}
                      className="p-1.5 rounded border border-white/15 text-white disabled:opacity-30 disabled:hover:border-white/15 hover:border-white/30 transition-colors"
                      id="btn-next-slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Secure LP Navigation Gateway */}
              <div className="mt-12 pt-6 border-t border-white/5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded bg-accent-amber/5 border border-accent-amber/20">
                  <div className="text-left">
                    <div className="font-mono text-[9px] text-accent-amber font-bold uppercase tracking-wider">SECURE VENTURE GATEWAY</div>
                    <p className="text-[11px] text-neutral-300 font-sans mt-0.5">SPV allocation reserves available in the Digital Deal Room.</p>
                  </div>
                  <button
                    onClick={() => {
                      onSelectVentureForSPV(selectedVenture.id);
                      setSelectedVenture(null);
                    }}
                    className="px-4 py-2 rounded bg-accent-amber hover:bg-amber-400 text-carbon-950 font-mono text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                    id="btn-jump-dealroom"
                  >
                    <span>Request Allocation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
