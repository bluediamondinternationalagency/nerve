import React from 'react';
import { Network, ShieldAlert, ArrowUpRight, HelpCircle, FileText, Scale } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-carbon-950 border-t border-white/5 pt-16 pb-12 relative overflow-hidden text-left" id="footer-section">
      <div className="absolute inset-0 tech-grid-dots pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Core footer brand & links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-carbon-900">
                <Network className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-display font-bold tracking-widest text-sm text-white">NERVE</div>
                <div className="font-mono text-[8px] tracking-[0.2em] text-white/40 uppercase">CAPITAL</div>
              </div>
            </div>
            
            <p className="text-xs text-neutral-400 font-sans max-w-sm leading-relaxed">
              Closed-loop capital architecture designed for systemic wealth sovereignty, protection against currency depreciation, and the operational co-creation of high-yield digital infrastructure.
            </p>
          </div>

          {/* Links columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Column 1: Core Engines */}
            <div className="space-y-3.5">
              <h4 className="font-mono text-[9px] uppercase tracking-wider text-white/40">Core Operations</h4>
              <ul className="space-y-2 text-xs font-sans">
                <li>
                  <button onClick={() => scrollToSection('pillars')} className="text-neutral-400 hover:text-white transition-colors text-left">
                    Fund Management
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pillars')} className="text-neutral-400 hover:text-white transition-colors text-left">
                    Venture Studio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('portfolio')} className="text-neutral-400 hover:text-white transition-colors text-left">
                    Studio Tracks
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Ecosystem */}
            <div className="space-y-3.5">
              <h4 className="font-mono text-[9px] uppercase tracking-wider text-white/40">Ecosystem & Forums</h4>
              <ul className="space-y-2 text-xs font-sans">
                <li>
                  <button onClick={() => scrollToSection('ecosystem')} className="text-neutral-400 hover:text-white transition-colors text-left">
                    HILLS @ Café One
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('ecosystem')} className="text-neutral-400 hover:text-white transition-colors text-left">
                    Money Week Summit
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('ecosystem')} className="text-neutral-400 hover:text-white transition-colors text-left">
                    Nerve Center Incubator
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Secure LP Access */}
            <div className="col-span-2 sm:col-span-1 space-y-3.5">
              <h4 className="font-mono text-[9px] uppercase tracking-wider text-white/40">LP Security</h4>
              <ul className="space-y-2 text-xs font-sans">
                <li>
                  <button onClick={() => scrollToSection('deal-room')} className="text-neutral-400 hover:text-white transition-colors text-left flex items-center gap-1">
                    <span>Digital Deal Room</span>
                    <ArrowUpRight className="w-3 h-3 text-accent-amber" />
                  </button>
                </li>
                <li>
                  <a href="#compliance" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>Regulatory Audit</span>
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-neutral-400 hover:text-white transition-colors">
                    Security Protocols
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Regulatory & Institutional Compliance Disclaimers */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 p-3.5 rounded bg-carbon-900/40 border border-white/5" id="regulatory-compliance-callout">
            <ShieldAlert className="w-4 h-4 text-accent-amber mt-0.5 sm:mt-0 shrink-0" />
            <div className="text-[10px] text-neutral-400 font-sans leading-relaxed">
              <strong>REGULATORY ADVISORY NOTICE:</strong> Nerve Capital Fund SPC and associated Special Purpose Vehicles (SPVs) are regulated under the Securities Investment Business Act of the Cayman Islands. Access to the Digital Deal Room is restricted strictly to Accreditated and Verified Qualified Investors under international CFT/AML protocols. Past performance is non-guarantative of future yields.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono text-white/30">
            <div>
              © 2026 Nerve Capital Partners. All legal rights protected. Cayman Registered SPC #C39281.
            </div>
            <div className="flex items-center gap-4">
              <a href="#terms" className="hover:text-white/60 transition-colors">Terms of Underwrite</a>
              <span>•</span>
              <a href="#privacy" className="hover:text-white/60 transition-colors">AES Encryption Standard</a>
              <span>•</span>
              <a href="#disclosures" className="hover:text-white/60 transition-colors">MIGA Guarantee Covenants</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
