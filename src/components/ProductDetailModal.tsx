import React, { useState } from 'react';
import { PunjabiSuit } from '../types';
import { X, Check, ShoppingBag, PhoneCall, ShieldCheck, Truck, Layers, Tag, Scissors, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  suit: PunjabiSuit | null;
  onClose: () => void;
  onAddToCart: (suit: PunjabiSuit, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  suit,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!suit) return null;

  const handleAdd = () => {
    onAddToCart(suit, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-amber-100 my-8 text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-stone-700 hover:text-black hover:bg-white shadow-md transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Real Photograph with Zoom & Badges */}
          <div className="relative bg-stone-100 flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-stone-200">
            <div className="relative rounded-xl overflow-hidden shadow-md max-h-[500px] w-full flex items-center justify-center bg-stone-900/5 group">
              <img
                src={suit.image}
                alt={suit.name}
                className="w-full h-full object-contain max-h-[480px] rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-amber-950/90 text-amber-200 text-xs px-2.5 py-1 rounded-md font-semibold tracking-wider flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Actual Stock Photo
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-lg p-2.5 shadow-lg border border-amber-200 text-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-500 font-semibold uppercase block">Catalog Code</span>
                  <span className="font-mono font-bold text-stone-900">{suit.code}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-500 font-semibold uppercase block">Set Packing</span>
                  <span className="font-semibold text-rose-700">{suit.bundleSize} Suits (All Different Colors)</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 mt-2 text-center">
              📸 Real unedited photograph of wholesale stock in AC Market Ludhiana
            </p>
          </div>

          {/* Product Details & Wholesale Pricing */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-amber-300">
                  {suit.category}
                </span>
                {suit.isBestseller && (
                  <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-rose-300">
                    Bestseller in Mandi
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                {suit.name}
              </h2>

              {/* Wholesale Pricing Display */}
              <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-amber-950 font-serif">
                    ₹{suit.pricePerSet.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm font-semibold text-rose-800">
                    per Set of {suit.bundleSize} Suits
                  </span>
                  {suit.regularPrice && (
                    <span className="text-xs text-stone-400 line-through">
                      MSRP ₹{suit.regularPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-amber-900 font-medium mt-1">
                  ⚡ Approx. wholesale rate: <strong className="text-amber-950">₹{suit.pricePerSuit}</strong> per suit in this 4-piece matching bundle.
                </p>
              </div>

              {/* Suit Specifications */}
              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5 text-amber-900">
                  <Layers className="w-4 h-4" />
                  Suit Fabric & Cut Specifications:
                </h4>
                <div className="grid grid-cols-1 gap-1.5 bg-stone-50 p-3 rounded-lg border border-stone-200">
                  <p><strong>Top Fabric:</strong> {suit.topFabric}</p>
                  <p><strong>Bottom (Salwar):</strong> {suit.bottomFabric}</p>
                  <p><strong>Dupatta:</strong> {suit.dupattaFabric}</p>
                  <p><strong>Embroidery/Work:</strong> {suit.workType}</p>
                  <p className="flex items-center gap-1">
                    <Scissors className="w-3.5 h-3.5 text-stone-500" />
                    <strong>Cut Length:</strong> {suit.cutLength}
                  </p>
                </div>
              </div>

              {/* 4 Colors Included in Bundle */}
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1 text-amber-900">
                  <Tag className="w-3.5 h-3.5" />
                  4 Matching Colors in This Set:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {suit.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-stone-800 border border-amber-200 flex items-center gap-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-700" />
                      {color}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 mt-1 italic">
                  * All 4 distinct colors are included in 1 bundle set as seen in actual photo.
                </p>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {suit.description}
              </p>
            </div>

            {/* Action Bar & Quantity */}
            <div className="pt-4 border-t border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-stone-800 block">Number of Sets:</span>
                  <span className="text-[11px] text-stone-500">
                    ({quantity * suit.bundleSize} Total Suits)
                  </span>
                </div>
                <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-stone-700 hover:bg-stone-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-stone-700 hover:bg-stone-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="flex items-center justify-between text-sm font-bold text-stone-900 bg-stone-50 px-3 py-2 rounded-lg">
                <span>Total Set Price:</span>
                <span className="text-amber-900 text-base">₹{(suit.pricePerSet * quantity).toLocaleString('en-IN')}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAdd}
                  disabled={addedAnimation}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
                    addedAnimation
                      ? 'bg-emerald-700 text-white'
                      : 'bg-amber-900 hover:bg-amber-950 text-white hover:shadow-lg'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add Sets to Cart
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/919876543210?text=Hello%20Lovely%20Fashion%20Ludhiana,%20I%20am%20interested%20in%20Wholesale%20Punjabi%20Suit%20Set%20Code:%20${suit.code}%20(${suit.name})%20priced%20at%20Rs.${suit.pricePerSet}.%20Please%20share%20bulk%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow transition"
                >
                  <PhoneCall className="w-4 h-4" /> WhatsApp Inquire
                </a>
              </div>

              {/* Wholesale trust bullets */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" /> AC Market Ludhiana Guarantee
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-amber-700" /> Pan-India Transport Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
