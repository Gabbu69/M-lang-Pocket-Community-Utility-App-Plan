# M'lang Pocket 🌾📱
> **The Essential Community Utility & Offline Errands Companion for M'lang, Cotabato**

[![React](https://img.shields.io/badge/React-19.0-61dafb.svg?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline_First-10b981.svg?style=flat-square)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-amber.svg?style=flat-square)](LICENSE)

---

### Core Philosophy
> *"Where should I go, what should I bring, and how can I contact them?"*  
> **Rule of Quality:** 20 ground-verified, confirmed listings > 200 unverified copies.

**M'lang Pocket** is an offline-first Progressive Web App (PWA) built specifically for the residents and visitors of the Municipality of M'lang, Cotabato, Philippines. It eliminates wasted tricycle trips, forgotten documents, and outdated phone numbers by providing verified service details, confirmed requirements checklists, and local trip optimization.

---

## 🌟 Key Features

### 🏛️ Verified Public Directory
- **20 Ground-Audited Listings:** Public offices, district hospital, rural health units, utilities, printing centers, repair shops, courier hubs, and veterinary services.
- **Confirmed Requirements:** Only publishes documentary requirements confirmed directly by the responsible office or shop owner.
- **Real-Time Operating Status:** Calculates open, closing soon, lunch break, and closed statuses automatically based on Philippine Time (PST/GMT+8).
- **Audit Date & Source Attribution:** Every listing displays its `lastCheckedDate` and verification method (phone confirmation, on-site visit, or official notice).

### ⚡ 24/7 Emergency Speed-Dial Bar
- Quick-access, collapsible emergency header with instant dial buttons for:
  - **M'lang District Hospital** — (064) 208-4100 / (064) 208-4101
  - **PNP M'lang Municipal Police Station** — 0998-598-6345
  - **BFP M'lang Municipal Fire Station** — 0947-891-2345
  - **MDRRMO Rescue & Disaster Operations** — 0912-345-6789

### 🎒 Personal Pocket & Errands Checklist
- **Interactive To-Do List:** Create custom errands or import them with 1 tap directly from directory listings.
- **Automatic Document Import:** Pulls required IDs, permits, or payment slips straight into your errand checklist.
- **Saved Favorites:** Pin frequently visited shops, clinics, and government offices for zero-click access.

### 🧳 Pre-Departure Document Packing Consolidator
- Avoid reaching the municipal hall only to realize you left your cedula at home!
- The consolidator scans all your active errands and synthesizes a single checklist of all physical documents you need to put in your bag before leaving the house.

### 📍 Multi-Stop Trip Cluster Optimizer
- Groups your active errands by physical geographical zones:
  - **Poblacion A Municipal Hall Cluster**
  - **National Highway Commercial Belt**
  - **Hospital & Highway South Zone**
  - **Bialong & Neighboring Rural Barangays**
- Organizes stops to minimize tricycle fares, commute times, and walking under the midday sun.

### 📲 1-Tap Share / SMS Card Formatter
- Instantly formats any listing into a compact text block optimized for SMS text messages or Facebook Messenger with a single click:
  ```text
  📍 M'lang District Hospital (MDH)
  📌 National Highway, Brgy. Bialong, M'lang, Cotabato
  📞 (064) 208-4100 | Emergency: 24/7 Open
  📋 Requirements: PhilHealth ID, Valid Gov ID, Barangay Indigency (for MAIP)
  ℹ️ Source: Verified via Provincial Directory (Checked Oct 14, 2026)
  ```

### 🗣️ Bilingual Subtitles (Hiligaynon / Ilonggo)
- Every section contains friendly Hiligaynon subtitles alongside English:
  - *Diin Makadto* (Location)
  - *Oras sang Bukas* (Opening Hours)
  - *Sin-o Kontakon* (Who to Contact)
  - *Ano ang Dalhon* (What to Bring)

### 📶 100% Offline-First Architecture
- Full Progressive Web App (PWA) with client-side caching.
- Search, filter, view contacts, and manage your checklist without mobile data or Wi-Fi—crucial for signal-shadow areas across rural barangays.
- Zero analytics trackers; all personal data stays strictly in local device storage (`localStorage`).

---

## 📋 The 20 Ground-Audited Listings

| # | Name | Category | Barangay | Primary Service | Confirmed Requirements |
|---|------|----------|----------|-----------------|------------------------|
| 1 | **M'lang District Hospital (MDH)** | Public Service / Health | Brgy. Bialong | 24/7 Inpatient & Emergency Care | PhilHealth ID, Gov ID, Indigency Certificate |
| 2 | **Municipal Health Office / RHU M'lang** | Public Service / Health | Brgy. Poblacion A | Consultations, Immunizations, Sanitary Permits | Barangay Clearance, Valid ID |
| 3 | **M'lang Municipal Hall - Mayor's / BPLO** | Public Service / Government | Brgy. Poblacion A | Business Permits, Mayor's Clearance | Barangay Business Clearance, DTI, Tax Cedula |
| 4 | **M'lang Civil Registry Office (LCR)** | Public Service / Government | Brgy. Poblacion A | Birth/Marriage Certificates, PSA Endorsements | Informant ID, Certificate of Live Birth |
| 5 | **PNP M'lang Municipal Police Station** | Emergency / Law Enforcement | Brgy. Poblacion A | Police Blotter, Police Clearance, Assistance | Valid Gov ID, Barangay Clearance |
| 6 | **BFP M'lang Municipal Fire Station** | Emergency / Fire Safety | Brgy. Poblacion A | Fire Safety Evaluation, FSIC Inspection | Building Permit / Occupancy, Barangay Clearance |
| 7 | **M'lang Water District (MWD)** | Utility | Brgy. Poblacion B | Water Service Applications & Billing | Proof of Ownership, Barangay Certificate, Valid ID |
| 8 | **COTELCO M'lang Sub-Office** | Utility | Brgy. Poblacion A | Electric Billing, Reconnection & Meter Applications | Electrician Certification, Valid Gov ID, Proof of Billing |
| 9 | **Palawan Pawnshop & Express Pera Padala** | Financial / Remittance | Brgy. Poblacion A | Money Remittance, Bills Payment, Pawning | Suki Card, 1 Valid Government Photo ID |
| 10 | **Cebuana Lhuillier Pawnshop** | Financial / Remittance | Brgy. Poblacion A | Pera Padala, Micro-Insurance, Pawning | 1 Valid Government ID, Transaction Form |
| 11 | **Land Bank of the Philippines - M'lang Branch** | Banking | Brgy. Poblacion A | ATM, 4Ps Disbursements, Government Accounts | 2 Valid IDs, Proof of Billing, Initial Deposit |
| 12 | **Mercury Drug - M'lang Poblacion** | Health / Pharmacy | Brgy. Poblacion A | Prescription Medicines, Senior Citizen Discounts | Doctor's Prescription, Senior/PWD ID & Booklet |
| 13 | **J&T Express M'lang Branch** | Logistics / Courier | Brgy. Poblacion B | Parcel Drop-off, Pick-up, Cash On Delivery | Valid Consignee ID, Tracking Waybill Number |
| 14 | **LBC Express - M'lang Branch** | Logistics / Courier | Brgy. Poblacion A | Courier Cargo, Money Remittance, Documents | 1 Valid ID, Consignee Details |
| 15 | **SpeedTech Motorcycle Repair & Spare Parts** | Repair & Mechanical | Brgy. Poblacion B | Vulcanizing, Engine Overhaul, Oil Change | None (Walk-in diagnostic) |
| 16 | **PrintHub Digital & School Supplies** | Printing & Office Services | Brgy. Poblacion A | Photocopy, Tarpaulin, Rush ID Photos, Document Laminating | Flash Drive / Bluetooth / Email File (PDF/JPEG) |
| 17 | **Doc Alvares Veterinary & Agricultural Supply** | Veterinary & Agriculture | Brgy. Poblacion B | Livestock Medicine, Dog Vaccines, Pet Care | Vaccination Record Booklet (if follow-up) |
| 18 | **M'lang Public Market Meat & Fish Inspection Section** | Public Service / Commerce | Brgy. Poblacion B | Meat Inspection Certificates & Vendor Sanitary Stalls | Meat Origin Certificate, Vendor Health Card |
| 19 | **Dr. Perez Dental & Orthodontic Clinic** | Health / Dental | Brgy. Poblacion A | Tooth Extraction, Dental Cleaning, Fillings | Previous dental records (if available) |
| 20 | **M'lang Post Office (PHLPost)** | Logistics / Mail | Brgy. Poblacion A | Postal ID Processing, Registered Mail | PSA Birth Certificate, Proof of Address, 2 Valid IDs |

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/) with Rollup bundler
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Offline Engine:** Vanilla Service Worker + CacheStorage API
- **State Persistence:** Custom reactive `useLocalStorage` hooks
- **Deployment:** Static Single Page Application (GitHub Pages / Vercel / Cloudflare Pages compatible)

```text
mlang-pocket/
├── public/
│   ├── favicon.svg          # Custom palm/rice seedling branding icon
│   ├── manifest.json        # PWA install specifications
│   └── sw.js                # Offline service worker caching core assets
├── src/
│   ├── components/
│   │   ├── directory/       # Listing cards, search bar, category chips, detail modal, report modal
│   │   ├── layout/          # Header, Emergency speed-dial bar, disclaimer banner, about modal
│   │   └── pocket/          # Errands checklist, favorites, trip consolidator, trip cluster view
│   ├── data/
│   │   └── mlangDirectory.ts # 20 ground-audited listings with verified requirements
│   ├── hooks/
│   │   ├── useDirectoryFilter.ts # Multi-criteria search, category & open-now filters
│   │   └── useLocalStorage.ts    # Type-safe persistent browser storage
│   ├── types/
│   │   └── directory.ts     # TypeScript interfaces for listings, contacts, errands, reports
│   ├── utils/
│   │   ├── shareUtils.ts    # SMS and Messenger plaintext formatter
│   │   └── timeUtils.ts     # Philippine Time schedule engine and relative dates
│   ├── App.tsx              # Root dual-mode view controller
│   ├── index.css            # Tailwind v4 theme & responsive utilities
│   └── main.tsx             # Application bootstrap & Service Worker registration
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later)
- `npm` or `pnpm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gabbu69/M-lang-Pocket-Community-Utility-App-Plan.git
   cd M-lang-Pocket-Community-Utility-App-Plan
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Outputs a compiled, optimized, static bundle in `dist/`.

---

## 📱 How to Install on Your Smartphone

### 🤖 Native Android APK (Direct Install)
A pre-compiled native Android APK is included directly in this repository:
1. Download [**`Mlang-Pocket.apk`**](Mlang-Pocket.apk) directly to your Android device (or copy it from your laptop over USB).
2. Open your phone's **Files** or **File Manager** app and tap `Mlang-Pocket.apk`.
3. If prompted, allow *"Install from unknown sources"* or *"Allow from this source"*.
4. Tap **Install** and enjoy high-performance native Android features with hardware back-button handling!

### 🌐 Android & PC (Progressive Web App - Google Chrome)
1. Open the deployed web app URL in Google Chrome.
2. Tap the three-dots menu (**⋮**) in the top right corner.
3. Select **Add to Home screen** or **Install app**.
4. Launch **M'lang Pocket** straight from your home screen like a native app—no app store required!

### 🍏 iOS (Apple Safari)
1. Open the deployed URL in Safari.
2. Tap the **Share** button (box with an arrow pointing up) at the bottom.
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add** in the top right corner.

---

## 🛡️ Data Governance & Accuracy

Maintaining accurate information is our top priority. We strictly adhere to the following principles:

1. **No Speculative Requirements:** If an office has not explicitly confirmed a required document, it is not published.
2. **Community Error Reporting:** Every listing contains a *"Report Error"* button where citizens can submit updated telephone numbers, lunch break shifts, or fee updates.
3. **Audit Trail:** In the **About & Sources** menu, users and administrators can view and copy the raw audit trail log as JSON for peer verification.
4. **Independent Project Notice:**
   > **Disclaimer:** *M'lang Pocket is an independent, community-driven informational utility. It is NOT an official app of the Municipal Government of M'lang or the Provincial Government of Cotabato. For legal and official transactions, please consult the respective municipal or provincial authorities directly.*

---

## 🤝 Contributing

Contributions to update listings, add missing public services, or improve local dialect translations are warmly welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/update-listing`)
3. Verify your information against an official notice, physical visit, or phone confirmation
4. Update `src/data/mlangDirectory.ts` and ensure `lastCheckedDate` and `source.verificationMethod` are updated
5. Commit your changes (`git commit -m 'Update MWD contact and Saturday schedule'`)
6. Push to your branch (`git push origin feature/update-listing`)
7. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, inspect, adapt, and build upon for the betterment of the community.

🌾 *Made with care for the citizens and community of M'lang, Cotabato.*
