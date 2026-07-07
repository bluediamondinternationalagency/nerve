import React, { useState } from 'react';
import { Network, Shield, Menu, X, ArrowRight, UserCheck } from 'lucide-react';
import { LPUser } from '../types';

interface HeaderProps {
  lpUser: LPUser;
  onOpenDealRoom: () => void;
  onLogout: () => void;
}

export default function Header({ lpUser, onOpenDealRoom, onLogout }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
          id="header-brand-logo"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded border border-white/15 bg-carbon-900 group-hover:border-accent-amber transition-colors duration-300">
            <Network className="w-5 h-5 text-white group-hover:text-accent-amber transition-colors duration-300" />
            <div className="absolute -inset-0.5 bg-accent-amber/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <div>
            <div className="font-display font-bold tracking-widest text-lg text-white">NERVE</div>
            <div className="font-mono text-[9px] tracking-[0.25em] text-white/40 uppercase">CAPITAL</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('pillars')} 
            className="font-sans text-xs uppercase tracking-wider text-white/60 hover:text-white hover:underline decoration-accent-amber underline-offset-8 transition-colors text-left"
            id="nav-link-pillars"
          >
            How We Operate
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="font-sans text-xs uppercase tracking-wider text-white/60 hover:text-white hover:underline decoration-accent-amber underline-offset-8 transition-colors text-left"
            id="nav-link-portfolio"
          >
            Studio Tracks
          </button>
          <button 
            onClick={() => scrollToSection('ecosystem')} 
            className="font-sans text-xs uppercase tracking-wider text-white/60 hover:text-white hover:underline decoration-accent-amber underline-offset-8 transition-colors text-left"
            id="nav-link-ecosystem"
          >
            Ecosystem
          </button>
        </nav>

        {/* Right Action / LP Badge */}
        <div className="hidden md:flex items-center gap-4">
          {lpUser.isLoggedIn ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                VERIFIED LP: {lpUser.firm ? `${lpUser.name} @ ${lpUser.firm}` : lpUser.name}
              </div>
              <button
                onClick={onOpenDealRoom}
                className="px-4 py-2 rounded bg-white text-carbon-950 font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
                id="header-btn-room"
              >
                Deal Room
              </button>
              <button
                onClick={onLogout}
                className="text-white/40 hover:text-white font-mono text-[10px] uppercase tracking-wider transition-colors"
                id="header-btn-logout"
              >
                Exit
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/40 font-mono text-[11px]">
                <Shield className="w-3.5 h-3.5 text-white/30" />
                SECURE LP INTERFACE
              </div>
              <button
                onClick={onOpenDealRoom}
                className="flex items-center gap-2 px-4 py-2 rounded bg-carbon-900 border border-white/10 hover:border-accent-amber text-white font-mono text-xs hover:bg-carbon-800 transition-all duration-300"
                id="header-btn-auth-room"
              >
                <span>Access Deal Room</span>
                <ArrowRight className="w-3 h-3 text-accent-amber" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 rounded border border-white/10 text-white hover:border-accent-amber transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          id="header-btn-mobile-toggle"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-fadeIn absolute w-full left-0 top-20 bg-carbon-950/95">
          <button 
            onClick={() => scrollToSection('pillars')} 
            className="font-sans text-sm uppercase tracking-wider text-white/80 hover:text-white text-left"
            id="mobile-nav-pillars"
          >
            How We Operate
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="font-sans text-sm uppercase tracking-wider text-white/80 hover:text-white text-left"
            id="mobile-nav-portfolio"
          >
            Studio Tracks
          </button>
          <button 
            onClick={() => scrollToSection('ecosystem')} 
            className="font-sans text-sm uppercase tracking-wider text-white/80 hover:text-white text-left"
            id="mobile-nav-ecosystem"
          >
            Ecosystem
          </button>
          <hr className="border-white/5" />
          <div className="flex flex-col gap-4">
            {lpUser.isLoggedIn ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 py-2 text-xs font-mono text-emerald-400">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  LP: {lpUser.name}
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenDealRoom();
                  }}
                  className="w-full text-center py-2.5 rounded bg-white text-carbon-950 font-mono text-xs font-semibold"
                  id="mobile-btn-room"
                >
                  Enter Deal Room
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full text-center py-2 text-white/40 font-mono text-xs"
                  id="mobile-btn-logout"
                >
                  Exit Session
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDealRoom();
                }}
                className="w-full py-2.5 rounded bg-carbon-900 border border-white/10 hover:border-accent-amber text-white font-mono text-xs flex items-center justify-center gap-2"
                id="mobile-btn-auth"
              >
                <span>Access Deal Room</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-amber" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
