# LOVELY FASHION — Wholesale Punjabi Suits
### Cloud Computing College Project | Static Web Application Submission

---

## 📌 Project Overview
**LOVELY FASHION** is a dedicated B2B wholesale shopping portal for an authentic clothing shop located at **Shop No. 42, 1st Floor, AC Market, Ludhiana, Punjab**. 

The shop specializes exclusively in **Wholesale Punjabi Suits** (Salwar Kameez, Patiala Suits, and Boutique Partywear sets). All products are sold strictly in manufacturer bundles of **4-piece matching color sets** (MOQ = 1 Bundle / 4 Suits).

This project was developed for a **College-Level Cloud Computing course evaluation**, following a clean, serverless/static frontend architecture that is 100% database-free, lightweight, blazing fast, and ready for instantaneous deployment on **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 🏛️ Business Details
- **Business Name:** Lovely Fashion
- **Location:** Shop No. 42, 1st Floor, AC Market, Clock Tower Road, Ludhiana, Punjab – 141008
- **Specialization:** 100% Wholesale Punjabi Suits Only
- **Packaging:** 4-Color Assorted Matching Bundle Sets (4 Suits per pack)
- **Catalog Size:** 26 Authentic Wholesale Punjabi Suit Designs
- **Pricing:** Indian Rupees (₹) directly matching AC Market mandi stickers (₹1,295 to ₹4,295 per 4-suit set)
- **Transport Hub:** Daily dispatches via V-Trans, Trackon, DTDC, and Ludhiana Railway Parcel

---

## 🚀 Key Features (Pure Frontend Shopping Architecture)

### 1. Home Page (`home`)
- **Hero Section:** High-impact Punjabi suit showcase, wholesale factory rates badge, and direct call-to-action buttons.
- **Value Propositions:** Direct AC Market rates, 4-color matching bundles, pan-India logistics, and GST billing.
- **Featured Catalogs:** Real stock photographs showing exact manufacturer price stickers in ₹ INR.
- **Volume Discounts:** Automatic tiered wholesale rebates (5% off on 5+ sets, 10% off on 10+ sets).
- **Social Proof:** Testimonials from boutique owners in Amritsar, Delhi Chandni Chowk, and Jalandhar.
- **Store Location & Hours:** Full physical shop address in Ludhiana AC Market with direct contact details.

### 2. Wholesale Catalog / Shopping Page (`shop`)
- **26 Real Punjabi Suits:** Every single design photographed directly in AC Market Ludhiana with original price tags (₹1,295 to ₹4,295).
- **Exclusively Punjabi Suits:** Zero western wear, lehengas, or sarees — strictly authentic Punjabi suits.
- **Live Search & Filter:** Instant search by suit name, fabric (Chinon, Georgette, Organza, Chanderi, Jacquard), embroidery type, and catalog code.
- **Fabric & Work Filter Chips:** Filter by *Heavy Partywear*, *Organza & Silk*, *Handwork & Moti*, *Boutique Zari*, *Georgette Special*, and *Printed & Daily Wear*.
- **Sorting Options:** Sort by *Mandi Bestsellers*, *Price: Low to High*, *Price: High to Low*, and *Alphabetical*.
- **Quick View Modal:** In-depth suit specifications (top, salwar, dupatta fabrics, cut lengths, color breakdown, and MOQ).
- **Direct WhatsApp Inquiry Button:** One-click pre-filled inquiry for bulk orders.

### 3. Wholesale Cart & Instant GST Invoice Checkout (`cart`)
- **Bundle Counter:** Live quantity increment/decrement for 4-piece bundles with live per-suit breakdown.
- **Dynamic Pricing Engine:** Subtotal calculation, automatic bulk volume discount deduction, 5% textile GST computation, and freight rules.
- **Direct Checkout (No Login Needed):** Retailers enter their boutique details and immediately generate an order.
- **Local Storage Persistence:** Cart items persist across page refreshes using HTML5 `localStorage`.
- **Instant Tax Invoice Generation:** Generates a real, printable Indian GST Wholesale Invoice with order ID, itemized HSN codes, and authorized seal.

### 4. Sign In & Sign Up Page (`auth`)
- **Dual Tab Mode:** Toggle effortlessly between **Sign In (Login)** and **Sign Up (Registration)**.
- **One-Click Demo Sign In:** Designed for examiners and college professors to immediately test authenticated features with pre-configured credentials (`jasreet@lovelyfashion.com`).
- **Client-Side Account Storage:** Saves registered accounts and current session directly in browser `localStorage`.
- **Member Dashboard:** Displays profile summary, contact information, and past order history with a button to view/print previous GST wholesale invoices.
- **Auto-Fill Checkout:** Once logged in, the cart and checkout form automatically pre-fills the customer's name, phone, email, and address.

---

## 🛠️ Technology Stack & Cloud Computing Concepts

| Layer | Technology | Purpose in Cloud Computing |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 + TypeScript | Component-based, deterministic single page application (SPA) |
| **Styling & Design** | Tailwind CSS v4 | Lightweight utility-first styling with zero runtime CSS overhead |
| **Icons & Assets** | Lucide-React & Real Stock Photos | High-fidelity vector graphics and genuine stock photography |
| **Client Persistence** | HTML5 `localStorage` API | Serverless, zero-cost state persistence on client machines |
| **Build & Bundler** | Vite 8 | Generates optimized minified static assets (`index.html`, JS, CSS) |
| **Cloud Hosting Target** | Netlify (Static Hosting / CDN) | Global Edge CDN distribution, automated CI/CD builds, and high availability |

---

## 🌐 Step-by-Step Netlify Deployment Instructions

### Method 1: Netlify Drag & Drop (Easiest — 2 Minutes)
1. Run the build command in your terminal:
   ```bash
   npm run build
   ```
2. This creates an optimized, static `dist` folder in the root directory.
3. Open your browser and go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
4. Sign in to your Netlify account (free tier).
5. Drag and drop the `dist` folder into the drop zone.
6. Netlify will instantly deploy your website with a free live SSL URL (e.g., `lovely-fashion.netlify.app`)!

---

### Method 2: Netlify Continuous Deployment via Git
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Lovely Fashion Wholesale portal"
   git remote add origin https://github.com/<your-username>/lovely-fashion.git
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"** > **"GitHub"**.
4. Select your `lovely-fashion` repository.
5. Set the build configuration:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click **"Deploy Site"**. Netlify will automatically build and publish your website whenever you push code changes.

*(Note: `netlify.toml` and `public/_redirects` are already configured in this repository to handle SPA client-side routing properly on Netlify).*

---

## 🧪 Quick Evaluation Guide for Professors / Examiners
1. **Explore Homepage:** View the wholesale Punjabi suits banner, real price tags, Ludhiana AC Market location, and testimonials.
2. **Browse Catalog:** Switch to the **Wholesale Catalog** tab. Try searching for `Chinon`, `Organza`, or filter by `Heavy Partywear`. Click **Quick View** to inspect the real photo and fabric specifications.
3. **Cart & Bill:** Click **Add Set** on any suit. Go to the **Cart & Checkout** tab. Adjust the quantity of sets (notice the wholesale volume discount activate when sets reach 5 or 10).
4. **Place Demo Order:** Fill in the boutique details or leave defaults and click **Place Wholesale Order & Generate Bill**.
5. **Print / PDF Invoice:** Review the generated GST Wholesale Tax Invoice and test the **Print / Save PDF** feature.
6. **One-Click Demo Login:** Go to **Retailer Login** and click **One-Click Demo Retailer Login**. Inspect the verified wholesale profile and order history.

---

## 📄 License & Academic Submission
Created for **Cloud Computing College Project Evaluation**.  
© Lovely Fashion (Shop No. 42, 1st Floor, AC Market, Ludhiana, Punjab).
