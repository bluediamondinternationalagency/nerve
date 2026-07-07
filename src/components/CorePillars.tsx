import React, { useState } from 'react';
import { Shield, Sparkles, ArrowRight, Zap, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react';

export default function CorePillars() {
  const [activePillar, setActivePillar] = useState<'fund' | 'studio'>('fund');

  return (
    <section id="pillars" className="py-24 border-t border-white/5 relative bg-carbon-900/40">
      <div className="absolute inset-0 tech-grid-dots pointer-events-none opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="font-mono text-[10px] text-accent-amber tracking-widest uppercase">The Sovereign Dual-Engine</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Protection. Engineered for Velocity.
          </h2>
          <p className="text-sm text-neutral-400 font-sans leading-relaxed">
            Nerve Capital operates as a closed-loop system where defensive asset insulation feeds—and is accelerated by—the hands-on creation of high-yield technological enterprises.
          </p>
        </div>

        {/* Dynamic Pillar Layout - Split/Toggle View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Pillar 1: Fund Management */}
            <div 
              onClick={() => setActivePillar('fund')}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border text-left ${
                activePillar === 'fund' 
                  ? 'bg-carbon-900 border-accent-amber shadow-lg shadow-accent-amber/5' 
                  : 'bg-carbon-900/40 border-white/5 opacity-60 hover:opacity-100 hover:bg-carbon-900/60'
              }`}
              id="pillar-card-fund"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded ${activePillar === 'fund' ? 'bg-accent-amber text-carbon-950' : 'bg-white/5 text-white/60'}`}>
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Fund Management</h3>
                  <p className="font-mono text-[9px] tracking-wider text-white/40 uppercase">Capital Preservation & Hedging</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                We design and manage sophisticated investment vehicles designed to protect and grow institutional and private wealth against macroeconomic volatility.
              </p>
              <div className="mt-4 flex items-center gap-1 text-[11px] font-mono text-accent-amber">
                <span>Underwrite Mechanics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pillar 2: Venture Studio */}
            <div 
              onClick={() => setActivePillar('studio')}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border text-left ${
                activePillar === 'studio' 
                  ? 'bg-carbon-900 border-accent-amber shadow-lg shadow-accent-amber/5' 
                  : 'bg-carbon-900/40 border-white/5 opacity-60 hover:opacity-100 hover:bg-carbon-900/60'
              }`}
              id="pillar-card-studio"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded ${activePillar === 'studio' ? 'bg-accent-amber text-carbon-950' : 'bg-white/5 text-white/60'}`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Venture Studio</h3>
                  <p className="font-mono text-[9px] tracking-wider text-white/40 uppercase">The Nerve Center Accelerator</p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                We don't just invest; we build. Through Nerve Center, we deploy engineering depth, operational templates, and direct market distribution to scale technology enterprises.
              </p>
              <div className="mt-4 flex items-center gap-1 text-[11px] font-mono text-accent-amber">
                <span>Operation Blueprints</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

          {/* Right: Technical Deep-Dive Board */}
          <div className="lg:col-span-7 glass-panel rounded-xl p-6 md:p-8 border border-white/5 relative overflow-hidden text-left" id="pillars-technical-board">
            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/20">SYS_VIEW_092</div>
            
            {activePillar === 'fund' ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-mono text-accent-amber uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>FUND MANAGEMENT MANDATE</span>
                </div>
                <h4 className="font-display font-bold text-xl text-white">Defensive Underwriting & Wealth Sovereignty</h4>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  Our fund management arm operates with strict capital discipline, focusing on insulating primary wealth from systemic depreciation, inflation spikes, and local currency shocks. By directing allocations into audited, high-performing physical assets, we achieve consistent real yield.
                </p>

                {/* Technical stats table */}
                <div className="border border-white/5 rounded-lg bg-carbon-950 overflow-hidden">
                  <div className="grid grid-cols-3 border-b border-white/5 bg-carbon-900/60 p-3 font-mono text-[9px] uppercase tracking-wider text-white/40">
                    <div>MECHANICAL MATRIX</div>
                    <div>SPECIFICATION</div>
                    <div>OBJECTIVE</div>
                  </div>
                  <div className="p-3 grid grid-cols-3 border-b border-white/5 text-xs font-sans">
                    <div className="font-mono text-white text-[11px]">Macro Hedge</div>
                    <div className="text-neutral-300">Underwritten RWAs</div>
                    <div className="text-emerald-400 font-mono text-[11px]">System Insulation</div>
                  </div>
                  <div className="p-3 grid grid-cols-3 border-b border-white/5 text-xs font-sans">
                    <div className="font-mono text-white text-[11px]">Typical Horizon</div>
                    <div className="text-neutral-300">18 - 36 Months</div>
                    <div className="text-neutral-400">Capital Compounding</div>
                  </div>
                  <div className="p-3 grid grid-cols-3 text-xs font-sans">
                    <div className="font-mono text-white text-[11px]">Accreditation</div>
                    <div className="text-neutral-300">LP Qualified Audit</div>
                    <div className="text-accent-amber font-mono text-[11px]">Anti-Friction KYC</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent-amber mt-0.5 shrink-0" />
                    <span className="text-xs text-neutral-300 font-sans">Sovereign treasury management protects assets against localized geopolitical friction.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent-amber mt-0.5 shrink-0" />
                    <span className="text-xs text-neutral-300 font-sans">Direct asset audit structures eliminate paper-based custody tracking gaps.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-mono text-accent-amber uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>VENTURE STUDIO FRAMEWORK</span>
                </div>
                <h4 className="font-display font-bold text-xl text-white">Active Operational De-risking</h4>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  We reject standard passive venture investing. Through the <strong>Nerve Center Studio</strong>, we operate as co-founders. We inject proprietary codebases, deploy our legal frameworks, and provide direct sales pathways into our established network, removing execution friction entirely.
                </p>

                {/* Technical stats table */}
                <div className="border border-white/5 rounded-lg bg-carbon-950 overflow-hidden">
                  <div className="grid grid-cols-3 border-b border-white/5 bg-carbon-900/60 p-3 font-mono text-[9px] uppercase tracking-wider text-white/40">
                    <div>STUDIO MATRIX</div>
                    <div>SPECIFICATION</div>
                    <div>OBJECTIVE</div>
                  </div>
                  <div className="p-3 grid grid-cols-3 border-b border-white/5 text-xs font-sans">
                    <div className="font-mono text-white text-[11px]">Product Track</div>
                    <div className="text-neutral-300">Software & Logistics</div>
                    <div className="text-emerald-400 font-mono text-[11px]">Product-Market Fit</div>
                  </div>
                  <div className="p-3 grid grid-cols-3 border-b border-white/5 text-xs font-sans">
                    <div className="font-mono text-white text-[11px]">Incubation Term</div>
                    <div className="text-neutral-300">12-Week Intensive</div>
                    <div className="text-neutral-400">0-to-1 Spinouts</div>
                  </div>
                  <div className="p-3 grid grid-cols-3 text-xs font-sans">
                    <div className="font-mono text-white text-[11px]">Operational Lead</div>
                    <div className="text-neutral-300">Senior Studio Leads</div>
                    <div className="text-accent-amber font-mono text-[11px]">Zero Inertia Launch</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent-amber mt-0.5 shrink-0" />
                    <span className="text-xs text-neutral-300 font-sans">Proprietary reusable software modules reduce dev timelines by up to 60%.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent-amber mt-0.5 shrink-0" />
                    <span className="text-xs text-neutral-300 font-sans">Strategic access via HILLS network secures early high-ticket pilot contracts.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Closed Loop Synergy Alert */}
            <div className="mt-6 p-4 rounded bg-accent-amber/5 border border-accent-amber/15 flex gap-3">
              <Zap className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
              <div>
                <h5 className="font-mono text-[10px] uppercase font-bold text-accent-amber">Loop Synergy Core</h5>
                <p className="text-[11px] text-neutral-400 font-sans mt-0.5">
                  The Fund secures institutional-grade, low-leverage physical assets (Real Estate/Agro-Processing) which are optimized by software pipelines engineered by the Studio. High yields generated by the Studio are fed back to insulate and grow the Fund's overall net asset value.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
