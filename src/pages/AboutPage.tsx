import React from 'react';
import { PageView } from '../types';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Truck, Store, Package, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-amber-800/40">
        <div className="max-w-3xl">
          <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-2">
            Established Wholesale Shop • AC Market Ludhiana
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif mb-2">
            About LOVELY FASHION
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Leading wholesale manufacturer and supplier of authentic Punjabi Suits situated in the heart of Punjab's historic textile capital — AC Market, Ludhiana.
          </p>
        </div>
      </div>

      {/* Main Story & Mandi Legacy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-stone-700 text-xs sm:text-sm leading-relaxed">
          <span className="text-amber-900 font-bold text-xs uppercase tracking-wider block">
            The Ludhiana Textile Mandi Advantage
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
            Direct Mill Rates for Boutiques, Resellers & Showrooms
          </h2>
          <p>
            Ludhiana is globally renowned as the manufacturing backbone of North Indian ethnic wear. At <strong>Lovely Fashion</strong>, located at Shop No. 42, 1st Floor, AC Market, we have eliminated intermediate distributor markups. 
          </p>
          <p>
            We supply directly to boutique owners, retail shops, exhibition curators, and NRI buyers. Every design in our wholesale catalog is packed in <strong>sets of 4 assorted matching colors</strong>, ensuring retailers get complete color varieties without heavy upfront investment.
          </p>

          <div className="pt-2 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-stone-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Strictly 100% Punjabi Suits (No lehengas or western wear)</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-stone-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Standard 4-piece catalog color sets (MOQ = 1 Bundle)</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-stone-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full GST Input Tax Credit (HSN Code 5407 / 5% GST)</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-stone-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Daily Pan-India and International parcel shipping</span>
            </div>
          </div>
        </div>

        {/* AC Market Card */}
        <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-900 text-amber-100 flex items-center justify-center font-bold">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg font-serif text-stone-900">Visit Our Physical Shop</h3>
              <p className="text-xs text-stone-500">AC Market, Ludhiana, Punjab</p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-stone-700">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong>Shop Address:</strong>
                <p>Shop No. 42, 1st Floor, AC Market, Clock Tower Road, Ludhiana, Punjab - 141008</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-800 shrink-0" />
              <div>
                <strong>Wholesale Helpline:</strong>
                <p>+91 98765 43210 / +91 98123 45678</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-800 shrink-0" />
              <div>
                <strong>Email:</strong>
                <p>wholesale@lovelyfashionludhiana.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-800 shrink-0" />
              <div>
                <strong>Store Timings:</strong>
                <p>Monday to Saturday: 10:30 AM to 8:30 PM (Sunday Closed)</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-amber-200 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919876543210?text=Hello%20Lovely%20Fashion%20Ludhiana,%20I%20want%20to%20visit%20your%20shop%20in%20AC%20Market%20for%20Wholesale%20Punjabi%20Suits."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition"
            >
              WhatsApp Us Direct
            </a>

            <button
              onClick={() => setCurrentPage('shop')}
              className="flex-1 py-3 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs text-center transition flex items-center justify-center gap-1.5"
            >
              <span>View Catalogs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Logistics and Packaging Policy */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <h3 className="font-bold text-lg font-serif text-stone-900 text-center">
          Our Wholesale Packaging & Pan-India Dispatch System
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="font-bold text-stone-900 text-sm">4-Piece Color Matching</h4>
            <p>
              Every catalog style is produced in four coordinated commercial shades (e.g., wine, bottle green, dusty rose, teal). Each bundle is wrapped in protective catalog bags with reference photos.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Daily Transport Logistics</h4>
            <p>
              Parcels are dispatched daily from Ludhiana Transport Mandi through recognized carriers: V-Trans, Trackon, DTDC, and Northern Railway Parcel Express with tracking slips provided immediately.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Instant GST Billing</h4>
            <p>
              Add any number of suit sets to your wholesale cart to calculate volume discounts (5% to 10% off) and instantly generate a printable Indian GST tax invoice without needing any login credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
