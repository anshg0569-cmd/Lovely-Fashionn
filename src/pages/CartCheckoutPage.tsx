import React, { useState } from 'react';
import { CartItem, PageView, WholesaleOrder } from '../types';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, ShoppingBag, Receipt, CheckCircle, PackageOpen, Store, Building2 } from 'lucide-react';

interface CartCheckoutPageProps {
  cart: CartItem[];
  onUpdateQuantity: (suitId: string, quantity: number) => void;
  onRemoveItem: (suitId: string) => void;
  onClearCart: () => void;
  setCurrentPage: (page: PageView) => void;
  onOrderSuccess: (order: WholesaleOrder) => void;
}

export const CartCheckoutPage: React.FC<CartCheckoutPageProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  setCurrentPage,
  onOrderSuccess
}) => {
  // Checkout Form State (with helpful prefilled demo defaults)
  const [formData, setFormData] = useState({
    shopName: 'Punjab Viraasat Boutique',
    ownerName: 'Simranjit Kaur',
    phone: '+91 98765 12345',
    email: 'boutique.amritsar@gmail.com',
    address: 'Shop No. 12, Main Bazaar, Near Golden Temple',
    city: 'Amritsar',
    state: 'Punjab',
    pincode: '143001',
    gstNumber: '03AABCP8921N1ZY',
    transportMethod: 'V-Trans Express Transport (Daily Punjab-Delhi Line)',
    paymentMethod: 'UPI / Direct Bank Transfer (NEFT/RTGS)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculations
  const totalSets = cart.reduce((acc, item) => acc + item.quantitySets, 0);
  const totalSuitsCount = cart.reduce((acc, item) => acc + (item.quantitySets * item.suit.bundleSize), 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.suit.pricePerSet * item.quantitySets), 0);

  // Wholesale Discount Tiers
  let discountPercentage = 0;
  if (totalSets >= 10) {
    discountPercentage = 0.10; // 10%
  } else if (totalSets >= 5) {
    discountPercentage = 0.05; // 5%
  }
  const discountAmount = Math.round(subtotal * discountPercentage);

  // 5% Textile GST
  const taxableAmount = subtotal - discountAmount;
  const gstAmount = Math.round(taxableAmount * 0.05);

  // Transport charges: Free for 5+ sets or ₹10,000+
  const transportCharges = totalSets >= 5 || subtotal >= 10000 ? 0 : 250;

  const grandTotal = taxableAmount + gstAmount + transportCharges;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (cart.length === 0) {
      setErrorMessage('Your wholesale cart is empty. Please add at least 1 suit set.');
      return;
    }

    if (!formData.shopName || !formData.ownerName || !formData.phone || !formData.city) {
      setErrorMessage('Please fill in required fields (Shop Name, Owner Name, Phone, and City).');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: WholesaleOrder = {
        orderId: `LF-ORD-${Date.now().toString().slice(-6)}`,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        items: [...cart],
        subtotal,
        discount: discountAmount,
        gstAmount,
        transportCharges,
        totalAmount: grandTotal,
        retailer: {
          shopName: formData.shopName,
          ownerName: formData.ownerName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          gstNumber: formData.gstNumber || undefined
        },
        transportMethod: formData.transportMethod,
        paymentMethod: formData.paymentMethod,
        status: 'Confirmed'
      };

      onOrderSuccess(newOrder);
      setIsSubmitting(false);
    }, 700);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-amber-100 text-amber-900 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <PackageOpen className="w-10 h-10" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
          Your Wholesale Cart is Empty
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          You haven't selected any wholesale Punjabi suit sets yet. Explore our genuine AC Market Ludhiana catalog and add matching 4-piece bundles to calculate your wholesale invoice.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage('shop')}
            className="px-6 py-3.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Go to Wholesale Catalog</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title Header */}
      <div>
        <span className="text-amber-800 text-xs font-bold uppercase tracking-wider block mb-1">
          Wholesale Order Confirmation
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
          Wholesale Cart & Bill Checkout
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm">
          Review your 4-piece Punjabi suit bundle selections, check volume discounts, and generate your Ludhiana AC Market wholesale invoice.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="font-bold text-stone-900 text-sm">
                Selected Suit Bundles ({cart.length})
              </span>
              <button
                onClick={onClearCart}
                className="text-xs text-rose-700 hover:text-rose-900 font-medium transition"
              >
                Clear Cart
              </button>
            </div>

            <div className="divide-y divide-stone-100 space-y-4">
              {cart.map((item) => (
                <div key={item.suit.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Suit Image & Info */}
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={item.suit.image}
                      alt={item.suit.name}
                      className="w-16 h-20 object-cover rounded-lg border border-amber-200 bg-stone-100 shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-stone-500 font-semibold uppercase">
                        {item.suit.code} • {item.suit.category}
                      </span>
                      <h4 className="font-bold text-stone-900 text-xs sm:text-sm line-clamp-1 font-serif">
                        {item.suit.name}
                      </h4>
                      <p className="text-[11px] text-stone-500">
                        {item.suit.bundleSize} Suits Pack • Rate: ₹{item.suit.pricePerSet.toLocaleString('en-IN')}/set
                      </p>
                      <div className="text-[10px] text-amber-900 font-medium">
                        Colors: {item.suit.colors.join(', ')}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Counter & Subtotal */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    {/* Quantity control */}
                    <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                      <button
                        onClick={() => onUpdateQuantity(item.suit.id, item.quantitySets - 1)}
                        className="p-1.5 hover:bg-stone-200 text-stone-700 transition"
                        title="Reduce sets"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-stone-900">
                        {item.quantitySets} {item.quantitySets === 1 ? 'Set' : 'Sets'}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.suit.id, item.quantitySets + 1)}
                        className="p-1.5 hover:bg-stone-200 text-stone-700 transition"
                        title="Add sets"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Total item amount */}
                    <div className="text-right">
                      <span className="font-bold text-sm text-stone-900 block font-serif">
                        ₹{(item.suit.pricePerSet * item.quantitySets).toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-stone-500">
                        ({item.quantitySets * item.suit.bundleSize} Suits total)
                      </span>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => onRemoveItem(item.suit.id)}
                      className="text-stone-400 hover:text-rose-600 transition p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wholesale Discount Banner Alert */}
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200 rounded-2xl p-4 text-xs text-stone-700 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-bold text-amber-950 block">
                Wholesale Quantity Status: {totalSets} Sets ({totalSuitsCount} Suits)
              </span>
              <p className="text-stone-600">
                {totalSets < 5
                  ? `Add ${5 - totalSets} more sets to unlock 5% Extra Bulk Rebate!`
                  : totalSets < 10
                  ? `5% Bulk Discount unlocked! Add ${10 - totalSets} more sets for 10% Off!`
                  : '🎉 10% Maximum Bulk Wholesale Discount Applied!'}
              </p>
            </div>
            {discountPercentage > 0 && (
              <span className="bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-lg shrink-0">
                {discountPercentage * 100}% Off
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Checkout Form & Bill Summary */}
        <div className="lg:col-span-5 space-y-6">
          {/* Bill Breakdown Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-amber-200 p-6 space-y-4">
            <h3 className="font-bold text-base font-serif text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
              <Receipt className="w-4 h-4 text-amber-900" />
              Wholesale Bill Estimate (₹ INR)
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Items Subtotal ({totalSets} Sets):</span>
                <span className="font-semibold text-stone-900">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Bulk Wholesale Discount ({discountPercentage * 100}%):</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-stone-600">
                <span>GST (5% Textile Mandi Tax):</span>
                <span className="font-semibold text-stone-900">₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-stone-600">
                <span>Transport / Parcel Freight:</span>
                <span className="font-semibold text-stone-900">
                  {transportCharges === 0 ? (
                    <span className="text-emerald-700 font-bold">FREE (Wholesale Offer)</span>
                  ) : (
                    `₹${transportCharges}`
                  )}
                </span>
              </div>

              <div className="border-t border-stone-200 pt-3 flex justify-between items-baseline font-bold">
                <span className="text-sm text-stone-900">Total Payable:</span>
                <span className="text-2xl text-amber-950 font-serif">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Details Form */}
          <form onSubmit={handleCheckoutSubmit} className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
            <h3 className="font-bold text-sm font-serif text-stone-900 border-b border-stone-100 pb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-900" />
              Retailer / Boutique Delivery Details
            </h3>

            {errorMessage && (
              <div className="p-2.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-200">
                {errorMessage}
              </div>
            )}

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-stone-700 font-bold mb-1">
                  Shop / Boutique Name *
                </label>
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Mehak Designer Boutique"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    required
                    placeholder="Owner Name"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765..."
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Amritsar / Delhi"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Punjab"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-bold mb-1">
                  Shop Delivery Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Shop number, Street, Market name"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-bold mb-1">
                  GSTIN (Optional for wholesale billing)
                </label>
                <input
                  type="text"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. 03AAAAA0000A1Z5"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 font-mono text-xs uppercase"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-bold mb-1">
                  Preferred Transport / Parcel Service
                </label>
                <select
                  name="transportMethod"
                  value={formData.transportMethod}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                >
                  <option value="V-Trans Express Transport (Daily Punjab-Delhi Line)">
                    V-Trans Express Transport (Punjab & North India)
                  </option>
                  <option value="Trackon Courier (Direct Door Delivery)">
                    Trackon Courier (Fast Door Delivery)
                  </option>
                  <option value="DTDC Express Cargo">
                    DTDC Express Cargo (Pan-India)
                  </option>
                  <option value="Ludhiana Railway Parcel Service">
                    Ludhiana Railway Parcel Hub
                  </option>
                  <option value="In-Person AC Market Ludhiana Counter Pickup">
                    In-Person AC Market Shop Pickup (No Shipping)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-bold mb-1">
                  Wholesale Payment Method
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                >
                  <option value="UPI / QR Code Transfer">
                    UPI / QR Code Transfer (Instant Confirmation)
                  </option>
                  <option value="Direct NEFT / RTGS Bank Transfer">
                    Direct NEFT / RTGS Bank Transfer
                  </option>
                  <option value="AC Market Cash on Counter Delivery">
                    AC Market Cash on Counter Delivery
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              {isSubmitting ? (
                <span>Generating Wholesale Invoice...</span>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Place Wholesale Order & Generate Bill</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-stone-500 text-center">
              🔒 College project demo: No real payment processed. Generates a printable GST tax bill and saves to your local browser storage.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
