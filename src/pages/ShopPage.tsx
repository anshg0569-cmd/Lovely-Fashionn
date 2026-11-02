import React, { useState, useMemo } from 'react';
import { PunjabiSuit } from '../types';
import { PUNJABI_SUITS, WHOLESALE_CATEGORIES } from '../data/products';
import { Search, Filter, ShoppingBag, Eye, Sparkles, SlidersHorizontal, Tag, Package, Check } from 'lucide-react';

interface ShopPageProps {
  onOpenQuickView: (suit: PunjabiSuit) => void;
  onAddToCart: (suit: PunjabiSuit, qty: number) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onOpenQuickView,
  onAddToCart
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Wholesale Punjabi Suits');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');
  const [addedIds, setAddedIds] = useState<{ [id: string]: boolean }>({});

  // Filtered & Sorted Punjabi Suits
  const filteredSuits = useMemo(() => {
    return PUNJABI_SUITS.filter((suit) => {
      const matchesSearch =
        suit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suit.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suit.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suit.workType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suit.colors.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All Wholesale Punjabi Suits' ||
        suit.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePerSet - b.pricePerSet;
      if (sortBy === 'price-high') return b.pricePerSet - a.pricePerSet;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleQuickAdd = (suit: PunjabiSuit) => {
    onAddToCart(suit, 1);
    setAddedIds((prev) => ({ ...prev, [suit.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [suit.id]: false }));
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-amber-800/40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Ludhiana AC Market Wholesale Catalog
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif mb-2">
            Wholesale Punjabi Suits Collection
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            All designs photographed live in AC Market. Every item is sold in complete unbroken sets of 4 suits (matching catalog color palette). Guaranteed lowest manufacturer rates in Punjab.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-amber-100 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by suit name, fabric (Chinon, Organza), work, code..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent bg-stone-50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-amber-900 shrink-0" />
            <span className="text-xs font-semibold text-stone-600 shrink-0">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-medium bg-stone-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-800"
            >
              <option value="featured">Mandi Bestsellers First</option>
              <option value="price-low">Price: Low to High (₹)</option>
              <option value="price-high">Price: High to Low (₹)</option>
              <option value="name">Alphabetical (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-stone-100">
          <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0 mr-1" />
          {WHOLESALE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Wholesale Notice */}
      <div className="flex items-center justify-between text-xs text-stone-600 px-1">
        <span className="font-semibold">
          Showing {filteredSuits.length} Wholesale Punjabi Suit {filteredSuits.length === 1 ? 'Design' : 'Designs'}
        </span>
        <span className="text-amber-900 font-medium hidden sm:inline">
          📦 Minimum Wholesale Order: 1 Set (4 Suits)
        </span>
      </div>

      {/* Products Grid */}
      {filteredSuits.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-stone-300 space-y-4">
          <Package className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-stone-800">
            No Wholesale Punjabi Suits Found
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            We couldn't find any designs matching "{searchQuery}". Try searching for fabrics like Georgette, Chinon, Organza, or clear filters.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All Wholesale Punjabi Suits'); }}
            className="px-4 py-2 rounded-xl bg-amber-900 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSuits.map((suit) => {
            const isAdded = addedIds[suit.id];

            return (
              <div
                key={suit.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-amber-100/90 hover:border-amber-400 transition-all duration-200 flex flex-col group"
              >
                {/* Product Image Section */}
                <div 
                  onClick={() => onOpenQuickView(suit)}
                  className="relative aspect-[3/4] bg-stone-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={suit.image}
                    alt={suit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Mandi Tag */}
                  <div className="absolute top-3 left-3 bg-amber-950/85 backdrop-blur-xs text-amber-200 text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                    {suit.category}
                  </div>

                  {/* Price Sticker Tag in ₹ */}
                  <div className="absolute top-3 right-3 bg-white text-stone-900 font-extrabold text-sm px-3 py-1.5 rounded-xl shadow-lg border border-amber-300 font-mono">
                    ₹{suit.pricePerSet}
                  </div>

                  {/* Bestseller Badge */}
                  {suit.isBestseller && (
                    <div className="absolute top-12 left-3 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      Bestseller
                    </div>
                  )}

                  {/* Bundle info footer over image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-stone-950/80 backdrop-blur-xs text-white p-2 rounded-xl text-xs flex items-center justify-between">
                    <div>
                      <span className="text-amber-300 font-bold block text-[11px]">Set of {suit.bundleSize} Suits</span>
                      <span className="text-[10px] text-stone-300">4 Different Colors</span>
                    </div>
                    <div className="text-right">
                      <span className="text-stone-300 text-[10px] block">Per Suit Cost</span>
                      <span className="font-bold text-white text-[11px]">₹{suit.pricePerSuit}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-stone-500 font-semibold">{suit.code}</span>
                      <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        In Stock (AC Market)
                      </span>
                    </div>

                    <h2 
                      onClick={() => onOpenQuickView(suit)}
                      className="font-bold text-base text-stone-900 hover:text-amber-900 cursor-pointer font-serif leading-snug line-clamp-2"
                    >
                      {suit.name}
                    </h2>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {suit.description}
                    </p>

                    {/* Color Swatch list */}
                    <div className="pt-1">
                      <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                        Assorted Colors:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {suit.colors.map((c, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-amber-50/80 text-amber-950 border border-amber-200/80 px-2 py-0.5 rounded-md font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & Add Buttons */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black font-serif text-amber-950">
                          ₹{suit.pricePerSet.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-500">
                        Wholesale Set Price (₹{suit.pricePerSuit} / suit)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenQuickView(suit)}
                        className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                        title="View Full Specifications & Zoom"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleQuickAdd(suit)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all ${
                          isAdded
                            ? 'bg-emerald-700 text-white'
                            : 'bg-amber-900 hover:bg-amber-950 text-white hover:shadow-md'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added!
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" /> Add Set
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Wholesale Bottom FAQ / Policy Reminder */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 text-xs text-stone-700 space-y-3">
        <h4 className="font-bold text-amber-950 font-serif text-sm flex items-center gap-2">
          <Tag className="w-4 h-4 text-amber-800" />
          Wholesale Purchase Guidelines for Lovely Fashion:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-stone-600">
          <div>
            <strong className="text-stone-900 block mb-0.5">1. Strictly Punjabi Suits:</strong>
            We do not sell lehengas, western wear, or saree collections. All production is 100% focused on authentic Punjabi Salwar Suits.
          </div>
          <div>
            <strong className="text-stone-900 block mb-0.5">2. 4-Pcs Set Packing:</strong>
            Individual single pieces cannot be picked. Retailers receive the complete set of 4 matching colors as packed from our AC Market godown.
          </div>
          <div>
            <strong className="text-stone-900 block mb-0.5">3. Transport & Billing:</strong>
            We issue GST wholesale invoices and dispatch daily through accredited Ludhiana transport agencies directly to your city.
          </div>
        </div>
      </div>
    </div>
  );
};
