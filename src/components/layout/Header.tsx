import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Container } from '../common/Container';
import { ThemeToggle } from '../common/ThemeToggle';
import { NAVIGATION_ITEMS } from '../../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 dark:bg-[#0A121E]/95 backdrop-blur-md py-3 border-b border-[#E8E6E1] dark:border-[#1E293B] shadow-xs'
            : 'bg-transparent py-5 border-b border-[#E8E6E1]/60 dark:border-[#1E293B]/60'
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Refined Monogram & Brand */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Center: Editorial Horizontal Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3" aria-label="Main Navigation">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm tracking-normal transition-colors duration-200 relative group font-sans ${
                      isActive
                        ? 'text-[#132338] dark:text-[#F8FAFC] font-semibold'
                        : 'text-[#667080] dark:text-[#94A3B8] hover:text-[#132338] dark:hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.title}</span>
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#9E7844] transition-all duration-200 ${
                          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right: Quick Inquiry Callout + Theme Toggle + LOGIN / JOIN */}
            <div className="flex items-center gap-3">
              {/* Inquiry Phone Pill (Editorial Touch inspired by KHU Developers) */}
              <a
                href="tel:+911149820000"
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-[#667080] dark:text-[#94A3B8] hover:text-[#132338] dark:hover:text-white px-3 py-2 rounded-full border border-[#E8E6E1] dark:border-[#2D3748] transition-colors"
                title="Direct Corporate Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E7844]" />
                <span>+91 (0) 11 4982 0000</span>
              </a>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mandatory Prominent Login/Join Button */}
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#132338] hover:bg-[#070E18] dark:bg-[#1E3A5F] dark:hover:bg-[#162E4D] transition-all duration-200 shadow-xs hover:shadow active:scale-[0.98] border border-[#132338] dark:border-[#263548] focus-ring"
              >
                <span>LOGIN / JOIN</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4B07B] transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#1F242A] dark:text-[#E2E8F0] hover:bg-black/5 dark:hover:bg-white/5 border border-[#E8E6E1] dark:border-[#2D3748]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF9F6] dark:bg-[#0F172A] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-200 border-l border-[#E8E6E1] dark:border-[#1E293B]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E6E1] dark:border-[#1E293B]">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#667080] hover:text-[#1F242A] dark:hover:text-white border border-[#E8E6E1] dark:border-[#2D3748]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="py-6 flex flex-col space-y-2" aria-label="Mobile Navigation">
                {NAVIGATION_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#132338]/10 dark:bg-white/10 text-[#132338] dark:text-white font-semibold'
                          : 'text-[#1F242A] dark:text-[#E2E8F0] hover:bg-black/5 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-[#9E7844]" />
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8E6E1] dark:border-[#1E293B] flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-semibold text-[#667080] dark:text-[#94A3B8] uppercase tracking-wider">
                  Theme Appearance
                </span>
                <ThemeToggle />
              </div>

              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#132338] hover:bg-[#070E18] dark:bg-[#1E3A5F] shadow transition-colors text-center"
              >
                <span>LOGIN / JOIN</span>
                <ArrowRight className="w-4 h-4 text-[#D4B07B]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
