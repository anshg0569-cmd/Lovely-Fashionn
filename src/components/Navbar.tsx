import React, { useState } from 'react';
import { PageView, UserAccount } from '../types';
import { ShoppingBag, Store, Menu, X, PhoneCall, Sparkles, MapPin, User as UserIcon, LogIn } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  cartCount: number;
  currentUser: UserAccount | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  cartCount,
  currentUser
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string; badge?: number }[] = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Wholesale Catalog' },
    { id: 'cart', label: 'Cart & Bill', badge: cartCount },
    { id: 'auth', label: currentUser ? 'My Account' : 'Sign In / Sign Up' },
  ];

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-amber-100">
      {/* Top Wholesale Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-900 via-rose-950 to-amber-900 text-amber-100 text-xs py-2 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-amber-400/30">
              Wholesale Only
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Shop No. 42, 1st Floor, AC Market, Ludhiana (Punjab)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline-block text-amber-200">
              Only Punjabi Suits • 4-Piece Matching Sets • Direct Mill Rates
            </span>
            <a
              href="tel:+919876543210"
              className="hover:text-white flex items-center gap-1 text-amber-300 font-semibold"
            >
              <PhoneCall className="w-3 h-3" />
              Order Helpline: +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-800 to-rose-900 flex items-center justify-center text-amber-200 shadow-md border border-amber-600/30 group-hover:scale-105 transition-transform">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight text-amber-950 font-serif group-hover:text-amber-800 transition-colors">
                  LOVELY FASHION
                </span>
                <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500 animate-pulse" />
              </div>
              <p className="text-[11px] font-semibold text-rose-900 tracking-wider uppercase">
                Wholesale Punjabi Suits • AC Market Ludhiana
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-md text-sm font-semibold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-900 text-amber-50 shadow-sm'
                      : 'text-stone-700 hover:text-amber-900 hover:bg-amber-50/80'
                  }`}
                >
                  {item.label}
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-full ${
                      isActive ? 'bg-amber-400 text-amber-950' : 'bg-rose-700 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Badges */}
          <div className="hidden lg:flex items-center gap-3">
            {/* User Account / Sign In Indicator */}
            {currentUser ? (
              <button
                onClick={() => handleNavClick('auth')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-xs font-semibold text-amber-950 hover:bg-amber-100 transition cursor-pointer"
                title="View Account"
              >
                <div className="w-6 h-6 rounded-full bg-amber-900 text-white flex items-center justify-center font-bold text-[11px]">
                  {currentUser.fullName.charAt(0).toUpperCase()}
                </div>
                <span className="truncate max-w-[110px]">{currentUser.fullName}</span>
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('auth')}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-stone-700 hover:text-amber-950 border border-stone-200 bg-stone-50 hover:bg-amber-50 transition cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-800" />
                <span>Sign In / Sign Up</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('cart')}
              className="relative p-2.5 rounded-full bg-amber-100/60 hover:bg-amber-100 text-amber-900 transition-colors cursor-pointer"
              title="Wholesale Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('auth')}
              className="p-2 rounded-lg bg-stone-100 text-stone-700 border border-stone-200 text-xs"
              title="Sign In / Account"
            >
              <UserIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavClick('cart')}
              className="relative p-2 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between cursor-pointer ${
                currentPage === item.id
                  ? 'bg-amber-900 text-white'
                  : 'text-stone-800 hover:bg-amber-50'
              }`}
            >
              <span>{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  currentPage === item.id ? 'bg-amber-300 text-amber-950' : 'bg-rose-600 text-white'
                }`}>
                  {item.badge} sets
                </span>
              )}
            </button>
          ))}

          <div className="pt-4 border-t border-stone-100 flex flex-col gap-2 text-xs text-stone-600">
            <div className="flex items-center gap-2 text-amber-900 font-semibold">
              <MapPin className="w-4 h-4" />
              Shop No. 42, 1st Floor, AC Market, Ludhiana, Punjab
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <PhoneCall className="w-4 h-4" />
              Bulk Helpline: +91 98765 43210
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
