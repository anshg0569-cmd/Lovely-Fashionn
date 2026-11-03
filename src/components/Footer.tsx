import React from 'react';
import { PageView } from '../types';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Truck, Store } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20 border-t border-amber-900/30">
      {/* Top Value Banner */}
      <div className="bg-amber-950/60 border-b border-amber-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-amber-800/40 border border-amber-600/30 flex items-center justify-center text-amber-400">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">AC Market Ludhiana Mandi</h4>
              <p className="text-xs text-stone-400">Hub of India’s wholesale Punjabi suits manufacturing</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-amber-800/40 border border-amber-600/30 flex items-center justify-center text-amber-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Pan-India Parcel Dispatch</h4>
              <p className="text-xs text-stone-400">Daily transport to Punjab, Haryana, Delhi, UP, Rajasthan & Abroad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-amber-800/40 border border-amber-600/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">100% Genuine Wholesale Price</h4>
              <p className="text-xs text-stone-400">Verified factory rates with full GST invoice option</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Shop Information */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-amber-400 tracking-wide">
                LOVELY FASHION
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Exclusively dedicated to Wholesale Punjabi Suits. We cater to boutique owners, retail showrooms, reselling partners, and NRI wedding bulk buyers with authentic Ludhiana AC Market wholesale rates.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-amber-900/50 text-amber-300 text-[11px] font-medium px-2.5 py-1 rounded border border-amber-700/50">
                ⭐ Wholesale Only • 4-Pcs Set Packing
              </span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider text-amber-300">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Homepage & Highlights
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Wholesale Punjabi Suits Catalog (26 Suits)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('cart'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Wholesale Cart & Instant Bill
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentPage('auth'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Sign In / Sign Up (Login & Register)
                </button>
              </li>
            </ul>
          </div>

          {/* AC Market Ludhiana Location */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider text-amber-300">
              Store & Mandi Address
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  Shop No. 42, 1st Floor, AC Market, Clock Tower Road, Ludhiana, Punjab - 141008
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <p>+91 98765 43210 / +91 98123 45678</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <p>wholesale@lovelyfashionludhiana.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <p>Mon - Sat: 10:30 AM to 8:30 PM</p>
              </div>
            </div>
          </div>

          {/* College Project Submission Notice */}
          <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-amber-400">Cloud Computing Project</span>
              <span className="bg-emerald-900/60 text-emerald-300 text-[10px] px-2 py-0.5 rounded font-mono border border-emerald-700/50">
                Frontend Only
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              This project is built for Cloud Computing college evaluation. Pure frontend application using HTML, CSS, JavaScript (React SPA) with client-side localStorage and zero backend requirement.
            </p>
            <div className="pt-1 text-[11px] text-amber-200/90 font-medium">
              🚀 100% Static & Ready for Netlify Deployment
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} LOVELY FASHION (Ludhiana AC Market). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Wholesale Punjabi Suits Only</span>
            <span>•</span>
            <span>26 Catalog Designs</span>
            <span>•</span>
            <span>Netlify Static Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
