import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { NAVIGATION_ITEMS, EXPERTISE_LIST } from '../../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#132338] text-white pt-20 pb-12 border-t border-[#1E293B]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand & Overview */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <Logo variant="footer" />
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm font-light">
              AKG Infrastructure delivers disciplined engineering, construction, and development solutions with a commitment to structural resilience, transparency, and long-term societal value.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                <Shield className="w-3.5 h-3.5 text-[#D4B07B]" />
                Engineering Excellence
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                Art-Directed System
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4B07B] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Expertise */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4B07B] mb-5">
              Core Capabilities
            </h3>
            <ul className="space-y-3">
              {EXPERTISE_LIST.slice(0, 5).map((exp) => (
                <li key={exp.id}>
                  <Link
                    to="/expertise"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {exp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Corporate Desk */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4B07B] mb-5">
              Corporate Office
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed font-light">
              Official corporate and technical operations hub for contract inquiries and field clearance.
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4B07B] shrink-0 mt-0.5" />
                <span>AKG Infrastructure Corporate Enclave</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4B07B] shrink-0" />
                <span>inquiry@akginfrastructure.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4B07B] shrink-0" />
                <span>+91 (0) 11 4982 0000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AKG Infrastructure. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/login" className="hover:text-[#D4B07B] font-semibold transition-colors">
              Staff Clearance Portal
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
