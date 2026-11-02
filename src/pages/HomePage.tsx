import React from 'react';
import { PageView, PunjabiSuit } from '../types';
import { PUNJABI_SUITS, WHOLESALE_BENEFITS, RETAILER_TESTIMONIALS } from '../data/products';
import { ArrowRight, ShoppingBag, Eye, ShieldCheck, Sparkles, MapPin, PhoneCall, Award, Layers, Package, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageView) => void;
  onOpenQuickView: (suit: PunjabiSuit) => void;
  onAddToCart: (suit: PunjabiSuit, qty: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onOpenQuickView,
  onAddToCart
}) => {
  const featuredSuits = PUNJABI_SUITS.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white rounded-3xl mx-3 sm:mx-6 lg:mx-8 mt-4 shadow-2xl border border-amber-800/40">
        {/* Decorative Golden Pattern / Ambient Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Ludhiana AC Market Wholesale Hub • Direct Factory Rates
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-tight text-amber-100">
              India’s Finest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300">
                Wholesale Punjabi Suits
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <strong className="text-white font-medium">LOVELY FASHION</strong> in AC Market, Ludhiana. We deal strictly in genuine wholesale Punjabi suit bundles. Every catalog features pre-matched 4-piece color sets designed for retail boutiques and showrooms across India & overseas.
            </p>

            {/* Quick highlight points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-amber-200/90 text-left">
              <div className="flex items-center gap-2 bg-stone-800/50 p-2.5 rounded-xl border border-amber-900/40">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Punjabi Suits Only</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-800/50 p-2.5 rounded-xl border border-amber-900/40">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>4-Pcs Set Packing (MOQ 1 Set)</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-stone-800/50 p-2.5 rounded-xl border border-amber-900/40">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Daily Pan-India Dispatch</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setCurrentPage('shop')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Browse Wholesale Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919876543210?text=Hello%20Lovely%20Fashion%20Ludhiana,%20I%20am%20a%20retailer%20interested%20in%20your%20Wholesale%20Punjabi%20Suits%20catalog."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-stone-800/90 hover:bg-stone-800 text-stone-200 hover:text-white font-semibold text-sm border border-stone-700 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Wholesale WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card Showcasing Real Suit */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-stone-800/80 p-3 rounded-2xl border border-amber-500/30 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-stone-900">
                <img
                  src={PUNJABI_SUITS[0].image}
                  alt="Wholesale Kashmiri Aari Punjabi Suit Set"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                
                {/* Real Price Sticker Tag */}
                <div className="absolute top-4 right-4 bg-white/95 text-stone-900 px-3 py-1.5 rounded-lg shadow-lg border border-amber-300 text-center font-bold">
                  <span className="text-[10px] text-stone-500 uppercase block font-sans">Mandi Rate</span>
                  <span className="text-lg font-serif text-amber-950">₹2095</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-stone-900/90 backdrop-blur-md rounded-xl border border-amber-500/30 text-xs">
                  <div className="flex items-center justify-between text-amber-300 font-bold mb-1">
                    <span>Catalog LF-AC-2095</span>
                    <span className="text-[11px] bg-rose-900/80 text-rose-200 px-2 py-0.5 rounded">4 Pcs Matching</span>
                  </div>
                  <p className="text-stone-300 text-[11px] truncate">
                    Kashmiri Aari & Tilla Work Georgette Suit Set
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-amber-400 text-amber-950 font-bold px-3 py-1.5 rounded-lg text-xs shadow-xl flex items-center gap-1.5 border border-amber-300">
                <Award className="w-4 h-4 text-amber-900" />
                Original AC Market Stock
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Trust & Value Proposition Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">
            Why Retailers Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
            Ludhiana’s Trusted Wholesale Punjabi Suits Mandi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHOLESALE_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-900 text-amber-900 group-hover:text-amber-100 flex items-center justify-center mb-4 transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-stone-900 mb-2 font-serif">
                {benefit.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Real Catalog Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-rose-800 text-xs font-bold uppercase tracking-wider mb-1">
              <Package className="w-4 h-4" />
              Hot-Selling Mandi Arrivals
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Featured Punjabi Suit Wholesale Sets
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Photographed directly in AC Market. Complete 4-piece assorted color packs.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('shop')}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-950 bg-amber-100/70 hover:bg-amber-100 px-4 py-2.5 rounded-xl transition cursor-pointer"
          >
            <span>View All 26 Catalogs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSuits.map((suit) => (
            <div
              key={suit.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-amber-100/80 hover:border-amber-300 transition-all duration-200 flex flex-col group"
            >
              {/* Image Container with Original Real Photo */}
              <div 
                onClick={() => onOpenQuickView(suit)}
                className="relative aspect-[3/4] bg-stone-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={suit.image}
                  alt={suit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5 bg-amber-950/80 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide backdrop-blur-xs">
                  {suit.category}
                </div>

                {/* Sticker Price Badge (Real ₹ sticker) */}
                <div className="absolute top-2.5 right-2.5 bg-white shadow-md text-stone-900 font-extrabold text-xs px-2.5 py-1 rounded-lg border border-amber-200 font-mono">
                  ₹{suit.pricePerSet}
                </div>

                {/* 4 Suits Set Pill */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] p-1.5 rounded-lg flex items-center justify-between">
                  <span className="text-amber-300 font-semibold">{suit.bundleSize} Pcs Set</span>
                  <span className="text-stone-300 text-[10px]">₹{suit.pricePerSuit}/suit approx</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span className="font-mono">{suit.code}</span>
                    <span className="text-emerald-700 font-semibold">In Stock (AC Market)</span>
                  </div>
                  
                  <h3 
                    onClick={() => onOpenQuickView(suit)}
                    className="font-bold text-sm text-stone-900 hover:text-amber-800 line-clamp-2 cursor-pointer font-serif leading-snug"
                  >
                    {suit.name}
                  </h3>
                  
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                    {suit.workType}
                  </p>
                </div>

                {/* Colors pill preview */}
                <div className="flex items-center gap-1 flex-wrap">
                  {suit.colors.slice(0, 3).map((col, idx) => (
                    <span key={idx} className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200">
                      {col}
                    </span>
                  ))}
                  {suit.colors.length > 3 && (
                    <span className="text-[10px] bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-bold">
                      +{suit.colors.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-base font-extrabold text-amber-950 font-serif">
                      ₹{suit.pricePerSet.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-stone-500 block">per 4-suit set</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenQuickView(suit)}
                      className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                      title="Quick View Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onAddToCart(suit, 1)}
                      className="px-3 py-2 rounded-lg bg-amber-900 hover:bg-amber-950 text-white font-semibold text-xs flex items-center gap-1 transition shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wholesale Quantity Slabs Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-700/40">
          <div className="max-w-3xl">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-1">
              Wholesale Discount Policy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">
              Special Volume Discounts for Boutiques & Resellers
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Are you placing a larger bulk order for your showroom or NRI wedding trousseau collection? We offer automatic tiered discounts applied directly at checkout:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20">
                <span className="text-amber-300 text-xs font-bold block">1 - 4 Sets</span>
                <span className="text-xl font-bold">Standard Rate</span>
                <p className="text-[11px] text-stone-300 mt-1">Direct AC Market Mandi Factory Price</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20">
                <span className="text-amber-300 text-xs font-bold block">5 - 9 Sets</span>
                <span className="text-xl font-bold text-amber-200">5% Extra Off</span>
                <p className="text-[11px] text-stone-300 mt-1">Automatic savings on wholesale bill</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20">
                <span className="text-amber-300 text-xs font-bold block">10+ Sets</span>
                <span className="text-xl font-bold text-emerald-300">10% Extra Off</span>
                <p className="text-[11px] text-stone-300 mt-1">+ Free Pan-India Transport parcel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retailer Testimonials from Across India */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">
            Boutique Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
            Trusted by 500+ Boutique Owners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RETAILER_TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-4">
                "{review.quote}"
              </p>
              <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-stone-900">{review.name}</h4>
                  <p className="text-[11px] text-stone-500">{review.boutique}</p>
                </div>
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {review.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ludhiana AC Market Store Visit Invitation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 rounded-3xl p-6 sm:p-10 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-amber-700" />
              Visit Our Shop in Ludhiana
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-950">
              Visiting AC Market, Ludhiana? Come See Our Fresh Stock!
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Drop by <strong>Shop No. 42, 1st Floor, AC Market, Clock Tower Road, Ludhiana</strong> to touch the fabrics, inspect the embroidery, and take immediate delivery or book parcels for your city.
            </p>
            <div className="pt-2 text-xs font-semibold text-stone-800 flex flex-wrap gap-4">
              <span>⏰ Mon - Sat: 10:30 AM - 8:30 PM</span>
              <span>📞 +91 98765 43210</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-6 py-3.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs shadow-md transition text-center"
            >
              Order Online From Catalog
            </button>
            <a
              href="https://maps.google.com/?q=AC+Market+Ludhiana+Punjab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs border border-stone-300 shadow-sm transition text-center"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
