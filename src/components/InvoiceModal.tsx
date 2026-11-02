import React from 'react';
import { WholesaleOrder } from '../types';
import { Printer, Download, X, CheckCircle2, Store, Phone, MapPin } from 'lucide-react';

interface InvoiceModalProps {
  order: WholesaleOrder | null;
  onClose: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-amber-200 my-8 text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="bg-amber-950 text-amber-100 p-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm tracking-wide">
              Wholesale Order Confirmed • #{order.orderId}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-800 hover:bg-amber-700 text-white text-xs font-semibold transition"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Invoice Printable Sheet */}
        <div id="invoice-sheet" className="p-6 sm:p-10 space-y-6 text-xs text-stone-800">
          
          {/* Shop Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-amber-900/40 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Store className="w-6 h-6 text-amber-900" />
                <h1 className="text-2xl font-bold font-serif text-amber-950 tracking-wider">
                  LOVELY FASHION
                </h1>
              </div>
              <p className="text-xs font-semibold text-rose-900 uppercase tracking-widest mt-0.5">
                Wholesale Punjabi Suits Manufacturer & Distributor
              </p>
              <p className="text-[11px] text-stone-600 mt-2 max-w-xs leading-relaxed">
                Shop No. 42, 1st Floor, AC Market, Clock Tower Road, Ludhiana, Punjab - 141008
              </p>
              <p className="text-[11px] text-stone-600">
                Phone: +91 98765 43210 | GSTIN: 03AABCL4289Q1ZT
              </p>
            </div>

            <div className="sm:text-right bg-amber-50/80 p-3 rounded-xl border border-amber-200">
              <span className="inline-block bg-amber-900 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase mb-1">
                Wholesale Tax Invoice
              </span>
              <p className="font-mono font-bold text-stone-900 text-sm">Invoice #: {order.orderId}</p>
              <p className="text-[11px] text-stone-600">Date: {order.date}</p>
              <p className="text-[11px] text-stone-600">Transport: {order.transportMethod}</p>
              <p className="text-[11px] text-stone-600">Payment: {order.paymentMethod}</p>
            </div>
          </div>

          {/* Billed To / Retailer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Billed To (Boutique / Wholesaler)
              </span>
              <p className="font-bold text-sm text-stone-900 mt-1">{order.retailer.shopName}</p>
              <p className="text-stone-700">Attn: {order.retailer.ownerName}</p>
              <p className="text-stone-600">{order.retailer.phone} • {order.retailer.email}</p>
              {order.retailer.gstNumber && (
                <p className="text-stone-700 font-mono text-[11px]">
                  Buyer GSTIN: {order.retailer.gstNumber}
                </p>
              )}
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Delivery / Transport Address
              </span>
              <p className="text-stone-800 mt-1">{order.retailer.address}</p>
              <p className="text-stone-800">
                {order.retailer.city}, {order.retailer.state} - {order.retailer.pincode}
              </p>
              <p className="text-stone-500 text-[11px] mt-1">
                Status: <span className="text-emerald-700 font-bold">{order.status}</span>
              </p>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-stone-200">
              <thead>
                <tr className="bg-amber-950 text-white text-[11px]">
                  <th className="p-2.5">#</th>
                  <th className="p-2.5">Item Description (Wholesale Punjabi Suits)</th>
                  <th className="p-2.5">HSN Code</th>
                  <th className="p-2.5 text-center">Bundle Size</th>
                  <th className="p-2.5 text-center">Sets Qty</th>
                  <th className="p-2.5 text-right">Rate/Set (₹)</th>
                  <th className="p-2.5 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-[11px]">
                {order.items.map((item, index) => (
                  <tr key={index} className="hover:bg-amber-50/40">
                    <td className="p-2.5 font-medium">{index + 1}</td>
                    <td className="p-2.5 font-medium">
                      <div className="font-bold text-stone-900">{item.suit.name}</div>
                      <div className="text-[10px] text-stone-500">
                        Code: {item.suit.code} | {item.suit.fabric}
                      </div>
                      <div className="text-[10px] text-amber-800">
                        Colors: {item.suit.colors.join(', ')}
                      </div>
                    </td>
                    <td className="p-2.5 font-mono text-stone-600">5407</td>
                    <td className="p-2.5 text-center">{item.suit.bundleSize} Suits</td>
                    <td className="p-2.5 text-center font-bold">{item.quantitySets} Sets ({item.quantitySets * item.suit.bundleSize} pcs)</td>
                    <td className="p-2.5 text-right">₹{item.suit.pricePerSet.toLocaleString('en-IN')}</td>
                    <td className="p-2.5 text-right font-bold">
                      ₹{(item.suit.pricePerSet * item.quantitySets).toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Invoice Summary Calculation */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pt-2">
            <div className="space-y-2 text-[11px] text-stone-600 max-w-sm">
              <p className="font-semibold text-stone-900">Wholesale Terms & Conditions:</p>
              <p>1. Goods dispatched strictly against wholesale payment clearance.</p>
              <p>2. Sold in complete unbroken 4-piece catalog color sets.</p>
              <p>3. Subject to Ludhiana, Punjab jurisdiction only.</p>
            </div>

            <div className="w-full sm:w-64 space-y-1.5 bg-stone-50 p-3 rounded-lg border border-stone-200 text-xs">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{order.subtotal.toLocaleString('en-IN')}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-rose-700 font-medium">
                  <span>Wholesale Discount:</span>
                  <span>-₹{order.discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-600">
                <span>GST (5% Textile):</span>
                <span>₹{order.gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Transport / Freight:</span>
                <span>{order.transportCharges === 0 ? 'FREE (Wholesale Promo)' : `₹${order.transportCharges}`}</span>
              </div>
              <div className="border-t border-stone-300 pt-2 flex justify-between font-bold text-sm text-amber-950">
                <span>Grand Total:</span>
                <span>₹{order.totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Stamp & Authorized Signature */}
          <div className="border-t border-stone-200 pt-6 flex justify-between items-end text-xs text-stone-600">
            <div>
              <p className="text-[11px] font-mono text-stone-400">Computer Generated Wholesale Bill</p>
              <p className="text-[11px] text-stone-500">Lovely Fashion • AC Market Ludhiana</p>
            </div>
            <div className="text-center">
              <div className="w-32 border-b border-stone-400 pb-1 mb-1 font-serif text-amber-900 font-bold text-sm italic">
                Lovely Fashion
              </div>
              <p className="text-[10px] uppercase font-bold text-stone-500">Authorized Wholesale Signatory</p>
            </div>
          </div>
        </div>

        {/* Footer info note */}
        <div className="bg-stone-100 p-4 text-center border-t border-stone-200 text-xs text-stone-500 print:hidden">
          ✨ Demo order stored in your browser's <code className="bg-stone-200 px-1 py-0.5 rounded text-stone-700 font-mono">localStorage</code>. You can review your past invoices anytime in the Retailer Account tab.
        </div>
      </div>
    </div>
  );
};
