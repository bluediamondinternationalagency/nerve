import React, { useState } from 'react';
import { ECOSYSTEM_INTERVENTIONS } from '../data';
import { EcosystemIntervention } from '../types';
import { Calendar, Users, FileText, ArrowRight, ShieldCheck, Ticket, CheckCircle2, Award } from 'lucide-react';

export default function EcosystemFunnel() {
  const [activeIntervention, setActiveIntervention] = useState<string>('hills');
  const [rsvpStep, setRsvpStep] = useState<'idle' | 'form' | 'ticket'>('idle');
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpTicketId, setRsvpTicketId] = useState('');

  const selectedIntervention = ECOSYSTEM_INTERVENTIONS.find(item => item.id === activeIntervention) || ECOSYSTEM_INTERVENTIONS[0];

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) return;

    // Generate a secure simulated pass token
    const hashSeed = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRsvpTicketId(`NVE-${selectedIntervention.id.toUpperCase()}-${hashSeed}`);
    setRsvpStep('ticket');
  };

  const handleResetRsvp = () => {
    setRsvpStep('idle');
    setRsvpName('');
    setRsvpEmail('');
    setRsvpTicketId('');
  };

  return (
    <section id="ecosystem" className="py-24 border-t border-white/5 relative bg-carbon-900/10">
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="font-mono text-[10px] text-accent-amber tracking-widest uppercase">Ecosystem Funnel & Proprietary Sourcing</div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interventions Where Capital Collides
          </h2>
          <p className="text-sm text-neutral-400 font-sans leading-relaxed">
            We operate high-touch physical and intellectual spaces that foster custom relationships, generate direct deal-flows, and train scaling operations.
          </p>
        </div>

        {/* Layout: Selector Timeline Tab Grid and Details panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Selector Timeline */}
          <div className="lg:col-span-5 space-y-3">
            {ECOSYSTEM_INTERVENTIONS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIntervention(item.id);
                  handleResetRsvp();
                }}
                className={`w-full p-5 rounded-lg border text-left transition-all duration-300 relative overflow-hidden ${
                  activeIntervention === item.id
                    ? 'bg-carbon-900 border-accent-amber shadow-md'
                    : 'bg-carbon-900/20 border-white/5 opacity-70 hover:opacity-100 hover:bg-carbon-900/40'
                }`}
                id={`ecosystem-btn-${item.id}`}
              >
                {activeIntervention === item.id && (
                  <div className="absolute top-0 left-0 h-full w-1 bg-accent-amber"></div>
                )}
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-accent-amber border border-white/5 uppercase tracking-wider">{item.badge}</span>
                  <span className="font-mono text-[9px] text-white/30">{item.id.toUpperCase()}_SYS</span>
                </div>
                <h3 className="font-display font-bold text-base text-white">{item.title}</h3>
                <p className="text-[11px] text-neutral-400 font-sans mt-1 line-clamp-1">{item.tagline}</p>
              </button>
            ))}
          </div>

          {/* Right: Immersive Detail and Registration Card */}
          <div className="lg:col-span-7 glass-panel rounded-xl p-6 md:p-8 border border-white/5 text-left relative overflow-hidden" id="ecosystem-details-board">
            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/20">ECO_REG_ACTIVE</div>

            <div className="space-y-6">
              {/* Core Content */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-accent-amber/10 border border-accent-amber/20 font-mono text-[9px] text-accent-amber uppercase tracking-widest mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>{selectedIntervention.badge} Blueprint</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white leading-tight">{selectedIntervention.title}</h3>
                <p className="font-mono text-[10px] text-white/40 tracking-wider uppercase mt-1">{selectedIntervention.tagline}</p>
              </div>

              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                {selectedIntervention.description}
              </p>

              {/* Dynamic Impact Quote */}
              <div className="p-4 rounded-lg bg-carbon-950 border-l-2 border-accent-amber/40">
                <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest">ECOSYSTEM REVENUE / CATALYST IMPACT</div>
                <p className="text-xs text-neutral-200 font-sans font-medium mt-1">
                  "{selectedIntervention.impactStatement}"
                </p>
              </div>

              {/* Specific details */}
              <div className="space-y-3">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest">TACTICAL PROTOCOLS</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedIntervention.details.map((detail, index) => (
                    <div key={index} className="flex gap-2.5 items-start p-2.5 rounded bg-carbon-900/60 border border-white/5">
                      <span className="font-mono text-xs text-accent-amber mt-0.5">0{index + 1}</span>
                      <p className="text-[11px] text-neutral-300 font-sans leading-snug">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar date note */}
              <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-white/60">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-white/40 uppercase tracking-wider">Scheduled Session</span>
                    <span className="font-display font-bold text-xs text-white">{selectedIntervention.upcomingDate}</span>
                  </div>
                </div>

                {/* RSVP Flow Engine */}
                <div>
                  {rsvpStep === 'idle' && (
                    <button
                      onClick={() => setRsvpStep('form')}
                      className="px-4 py-2 rounded bg-white text-carbon-950 font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
                      id="btn-trigger-rsvp"
                    >
                      Request Session Pass
                    </button>
                  )}
                </div>
              </div>

              {/* Embedded Interactive RSVP Form */}
              {rsvpStep === 'form' && (
                <div className="border-t border-white/10 pt-6 mt-4 animate-slideUp">
                  <form onSubmit={handleRsvpSubmit} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest">RSVP CREDENTIAL INTAKE</h4>
                      <button 
                        type="button" 
                        onClick={handleResetRsvp} 
                        className="text-[10px] font-mono text-white/40 hover:text-white"
                        id="btn-cancel-rsvp"
                      >
                        CANCEL
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Authorized Name"
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                          className="w-full bg-carbon-900 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-accent-amber"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Professional Email"
                          value={rsvpEmail}
                          onChange={(e) => setRsvpEmail(e.target.value)}
                          className="w-full bg-carbon-900 border border-white/10 rounded px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-accent-amber"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 rounded bg-accent-amber text-carbon-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors"
                      id="btn-submit-rsvp"
                    >
                      Authorize Dynamic Pass
                    </button>
                  </form>
                </div>
              )}

              {/* Custom Crypto RSVP Pass Output */}
              {rsvpStep === 'ticket' && (
                <div className="border-t border-white/10 pt-6 mt-4 animate-fadeIn">
                  <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                      <Ticket className="w-32 h-32 text-emerald-400" />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 mt-1 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs text-emerald-400">Cryptographic Pass Issued</h4>
                        <p className="text-[11px] text-neutral-300 font-sans mt-0.5">
                          LP pass assigned to <strong>{rsvpName}</strong> ({rsvpEmail}).
                        </p>
                        <div className="font-mono text-[10px] text-emerald-500/80 tracking-widest mt-2 bg-emerald-950/40 px-2 py-0.5 rounded inline-block">
                          ID: {rsvpTicketId}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleResetRsvp}
                      className="px-3 py-1.5 rounded border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-400 font-mono text-[10px] transition-colors"
                      id="btn-clear-ticket"
                    >
                      Issue Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
