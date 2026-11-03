import React, { useState } from 'react';
import { PageView, UserAccount, WholesaleOrder } from '../types';
import { 
  LogIn, 
  UserPlus, 
  UserCheck, 
  LogOut, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  MapPin, 
  Building, 
  Package, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Receipt
} from 'lucide-react';

interface AuthPageProps {
  currentUser: UserAccount | null;
  onLogin: (user: UserAccount) => void;
  onLogout: () => void;
  pastOrders: WholesaleOrder[];
  onViewInvoice: (order: WholesaleOrder) => void;
  setCurrentPage: (page: PageView) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  currentUser,
  onLogin,
  onLogout,
  pastOrders,
  onViewInvoice,
  setCurrentPage
}) => {
  // Tabs: 'signin' or 'signup'
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  // Sign In Form State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // Sign Up Form State
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    city: 'Ludhiana',
    state: 'Punjab',
    shopName: '',
    address: ''
  });

  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const showMessage = (text: string, type: 'success' | 'error' = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // One-Click Demo Sign In (Ideal for College Project Evaluation)
  const handleQuickDemoLogin = () => {
    const demoUser: UserAccount = {
      fullName: 'Jasreet Kaur',
      email: 'jasreet@lovelyfashion.com',
      phone: '+91 98765 43210',
      city: 'Ludhiana',
      state: 'Punjab',
      shopName: 'Lovely Boutique Ludhiana',
      address: 'AC Market, Clock Tower Road'
    };

    onLogin(demoUser);
    showMessage('Successfully signed in as Demo User (Jasreet Kaur)!', 'success');
  };

  // Sign In Handler
  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInEmail || !signInPassword) {
      showMessage('Please enter both email and password.', 'error');
      return;
    }

    // Check stored accounts in localStorage
    try {
      const storedUsersRaw = localStorage.getItem('lovely_fashion_users');
      const storedUsers: UserAccount[] = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];
      
      const found = storedUsers.find(
        (u) => u.email.toLowerCase() === signInEmail.toLowerCase()
      );

      if (found) {
        onLogin(found);
        showMessage(`Welcome back, ${found.fullName}!`, 'success');
        return;
      }
    } catch (err) {
      console.error(err);
    }

    // Default fallback mock login for any entered credentials
    const fallbackUser: UserAccount = {
      fullName: signInEmail.split('@')[0].replace(/[._]/g, ' ').toUpperCase(),
      email: signInEmail,
      phone: '+91 98123 45678',
      city: 'Ludhiana',
      state: 'Punjab',
      shopName: 'Customer / Wholesale Buyer'
    };

    onLogin(fallbackUser);
    showMessage(`Signed in successfully as ${fallbackUser.fullName}!`, 'success');
  };

  // Sign Up Handler
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpData.fullName || !signUpData.email || !signUpData.password) {
      showMessage('Please fill in your name, email, and password.', 'error');
      return;
    }

    const newUser: UserAccount = {
      fullName: signUpData.fullName,
      email: signUpData.email,
      password: signUpData.password,
      phone: signUpData.phone || '+91 98765 00000',
      city: signUpData.city || 'Ludhiana',
      state: signUpData.state || 'Punjab',
      shopName: signUpData.shopName || `${signUpData.fullName}'s Collection`,
      address: signUpData.address || ''
    };

    // Save to localStorage users list
    try {
      const storedUsersRaw = localStorage.getItem('lovely_fashion_users');
      const storedUsers: UserAccount[] = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];
      storedUsers.push(newUser);
      localStorage.setItem('lovely_fashion_users', JSON.stringify(storedUsers));
    } catch (err) {
      console.error(err);
    }

    // Immediately sign the user in
    onLogin(newUser);
    showMessage('Account created successfully! You are now signed in.', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Alert / Notification banner */}
      {message && (
        <div className={`p-4 rounded-xl text-xs font-bold border flex items-center gap-2 shadow-sm animate-in fade-in ${
          message.type === 'success' 
            ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
            : 'bg-rose-50 text-rose-800 border-rose-300'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-amber-800/40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            LOVELY FASHION • AC Market Ludhiana
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif mb-2">
            {currentUser ? 'Your Account & Orders' : 'Sign In / Sign Up'}
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            {currentUser
              ? `Manage your account details and review your wholesale Punjabi suits orders and tax bills.`
              : `Sign in to track orders, save your delivery preferences, and view wholesale Punjabi suit catalog invoices.`}
          </p>
        </div>
      </div>

      {/* Case 1: If User is Already Signed In */}
      {currentUser ? (
        <div className="space-y-8">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-amber-200 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-800 to-rose-900 text-amber-100 flex items-center justify-center font-bold text-xl font-serif shadow-md border border-amber-600/30">
                  {currentUser.fullName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold font-serif text-stone-900">
                      {currentUser.fullName}
                    </h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-700" />
                      Active Member
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {currentUser.shopName && <span><strong>{currentUser.shopName}</strong> • </span>}
                    {currentUser.city}, {currentUser.state}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="px-4 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Shop Suits</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onLogout}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-rose-50 text-stone-700 hover:text-rose-700 text-xs font-semibold border border-stone-200 transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* User Info Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700">
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">
                  Email Address
                </span>
                <p className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-800" />
                  {currentUser.email}
                </p>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">
                  Phone Number
                </span>
                <p className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-800" />
                  {currentUser.phone}
                </p>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">
                  Location / City
                </span>
                <p className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-800" />
                  {currentUser.city}, {currentUser.state}
                </p>
              </div>
            </div>
          </div>

          {/* Past Wholesale Orders / Invoices */}
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <h3 className="font-bold text-base font-serif text-stone-900 flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-amber-900" />
                  Your Order History & Invoices
                </h3>
                <p className="text-xs text-stone-500">
                  Wholesale orders saved in your browser local storage.
                </p>
              </div>
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                {pastOrders.length} {pastOrders.length === 1 ? 'Order' : 'Orders'}
              </span>
            </div>

            {pastOrders.length === 0 ? (
              <div className="text-center py-10 space-y-3">
                <Package className="w-10 h-10 text-stone-300 mx-auto" />
                <h4 className="font-bold text-stone-700 text-sm">No wholesale orders placed yet</h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Browse our wholesale Punjabi suit catalog, add 4-piece matching sets to your cart, and generate your instant GST invoice!
                </p>
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="px-5 py-2.5 rounded-xl bg-amber-900 text-white text-xs font-bold transition shadow-sm hover:bg-amber-950 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Suits Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {pastOrders.map((ord) => (
                  <div
                    key={ord.orderId}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-amber-50/40 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-stone-900">
                          {ord.orderId}
                        </span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                          {ord.status}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600">
                        Date: {ord.date} • Transport: {ord.transportMethod}
                      </p>
                      <p className="text-xs font-medium text-amber-950">
                        {ord.items.length} {ord.items.length === 1 ? 'Catalog Set' : 'Catalog Sets'} ({ord.items.reduce((s, i) => s + (i.quantitySets * i.suit.bundleSize), 0)} Suits Total)
                      </p>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="text-right">
                        <span className="text-base font-bold font-serif text-amber-950 block">
                          ₹{ord.totalAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-stone-500">Includes 5% GST</span>
                      </div>

                      <button
                        onClick={() => onViewInvoice(ord)}
                        className="px-4 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-bold transition shadow-sm cursor-pointer"
                      >
                        View / Print Bill
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Case 2: Not Signed In — Tabbed Sign In / Sign Up Card */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick 1-Click Demo Login for College Evaluation */}
          <div className="md:col-span-5 bg-gradient-to-br from-amber-50 to-amber-100/70 border border-amber-300 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-700" />
              Instant Examiner Test Login
            </div>

            <h3 className="text-xl font-bold font-serif text-amber-950">
              One-Click Demo Sign In
            </h3>

            <p className="text-xs text-stone-700 leading-relaxed">
              For rapid college project grading and review, click below to immediately test the signed-in state without typing:
            </p>

            <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-xs space-y-1.5 shadow-2xs">
              <p><strong>Name:</strong> Jasreet Kaur</p>
              <p><strong>Email:</strong> jasreet@lovelyfashion.com</p>
              <p><strong>Location:</strong> AC Market, Ludhiana, Punjab</p>
              <p><strong>Account Status:</strong> Verified Buyer</p>
            </div>

            <button
              onClick={handleQuickDemoLogin}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>One-Click Demo Sign In</span>
            </button>
          </div>

          {/* Right Column: Sign In & Sign Up Form */}
          <div className="md:col-span-7 bg-white rounded-2xl shadow-sm border border-amber-200 p-6 sm:p-8 space-y-6">
            
            {/* Tab Switcher: Sign In vs Sign Up */}
            <div className="flex border-b border-stone-200">
              <button
                onClick={() => setActiveTab('signin')}
                className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold border-b-2 transition flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'signin'
                    ? 'border-amber-900 text-amber-950'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In (Login)</span>
              </button>

              <button
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold border-b-2 transition flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'signup'
                    ? 'border-amber-900 text-amber-950'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up (Register)</span>
              </button>
            </div>

            {/* TAB 1: SIGN IN (LOGIN) */}
            {activeTab === 'signin' && (
              <form onSubmit={handleSignInSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={signInEmail}
                      onChange={(e) => setSignInEmail(e.target.value)}
                      required
                      placeholder="your.email@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={signInPassword}
                      onChange={(e) => setSignInPassword(e.target.value)}
                      required
                      placeholder="Enter password"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                    />
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">
                    * Tip: You can enter any demo credentials or click "One-Click Demo Sign In".
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In to Account</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('signup')}
                    className="text-amber-800 hover:text-amber-950 font-semibold underline text-xs cursor-pointer"
                  >
                    Don't have an account yet? Sign Up here
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: SIGN UP (REGISTRATION) */}
            {activeTab === 'signup' && (
              <form onSubmit={handleSignUpSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaspreet Singh"
                      value={signUpData.fullName}
                      onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="user@example.com"
                        value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        placeholder="Create password"
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91..."
                        value={signUpData.phone}
                        onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      Boutique / Shop Name (Optional)
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Royal Punjabi Suits"
                        value={signUpData.shopName}
                        onChange={(e) => setSignUpData({ ...signUpData, shopName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ludhiana / Amritsar"
                      value={signUpData.city}
                      onChange={(e) => setSignUpData({ ...signUpData, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Punjab"
                      value={signUpData.state}
                      onChange={(e) => setSignUpData({ ...signUpData, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800 text-xs bg-stone-50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs shadow-md transition cursor-pointer mt-2 flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Create Account & Sign In</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('signin')}
                    className="text-amber-800 hover:text-amber-950 font-semibold underline text-xs cursor-pointer"
                  >
                    Already have an account? Sign In here
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
