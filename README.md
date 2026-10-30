# Prepress Core ⚙️🎨

<div align="center">
  <p><strong>Industrial Adobe Illustrator Automation Platform & Interactive CEP Simulator</strong></p>

  <p>
    <a href="https://www.prepresscore.com/"><img src="https://img.shields.io/badge/Production_Platform-prepresscore.com-00DC82?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" /></a>
    <a href="https://prepresscore-com.vercel.app/"><img src="https://img.shields.io/badge/Vercel_Mirror-prepresscore--com.vercel.app-38BDF8?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Mirror" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Adobe_CEP-FF0000?style=flat-square&logo=adobe&logoColor=white" alt="Adobe CEP" />
    <img src="https://img.shields.io/badge/ExtendScript_JSX-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white" alt="ExtendScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/AES--256_Encryption-0A66C2?style=flat-square&logo=security&logoColor=white" alt="AES-256" />
    <img src="https://img.shields.io/badge/HWID_Hardware_Lock-grey?style=flat-square&logo=lock&logoColor=white" alt="HWID" />
  </p>
</div>

---

## 🌟 Overview

**Prepress Core** is an enterprise-grade automation infrastructure designed for printing houses, commercial packaging converters, and repro houses. It solves one of the oldest pain points in the print industry: protecting, remotely updating, and distributing custom **Adobe Illustrator (CEP / ExtendScript)** scripts across enterprise workforces without exposing source code or risking unlicensed file distribution.

This repository powers the official web platform and hosts the **Interactive In-Browser Illustrator CEP Simulation**, allowing users to experience the CEP panel mechanics, dieline generators, and ExtendScript console directly within a modern web canvas.

---

## 🔒 Platform Security & Architecture

1. **Hardware-Locked (HWID) Licensing:**
   - Evaluates machine CPU, motherboard serial, and network MAC signatures to lock automation modules strictly to licensed workstations.
2. **Centralized Remote Script Distribution:**
   - ExtendScript routines are never stored in plaintext on local client drives.
   - Code bundles are served dynamically via an encrypted API tunnel, decoded in volatile Illustrator memory, and executed on the fly.
3. **AES-256 Code Obfuscation & Encryption:**
   - Protects proprietary packaging formulas, imposition algorithms, and spot-color rules from unauthorized reverse-engineering.
4. **Resilient Offline Mode:**
   - Enables uninterrupted production floor operation through encrypted, short-lived cache tokens when internet connection drops.

---

## 🎨 Interactive In-Browser Simulator

The web platform features an interactive vector CAD/canvas simulator modeling Adobe Illustrator's real-world environment:
* **Tool Matrix:** Selection (V), Direct Selection (A), Pen (P), Type (T), Rectangle (M), Eyedropper (I).
* **Live Spot / CutContour Preview:** Realtime dieline detection and dimensional auditing (width, height, bleed margins).
* **Simulated ExtendScript Console:** Visual feedback for JSX script execution, anchor point analysis, and barcode generation.

---

## 🛠️ Tech Stack

* **Web UI & Simulator:** Modern Vanilla ES6+, Vite, Canvas API, CSS Grid
* **Target Desktop Environment:** Adobe Illustrator CC (CEP 10+ / CommonJS / ExtendScript JSX)
* **Backend Licensing Stack (Proprietary Engine):** Node.js, Express, Crypto AES-256, SQLite / Supabase

---

## 🚀 Running the Web Simulator Locally

```bash
# Clone the repository
git clone https://github.com/efeskarabag/prepresscore.com.git

# Navigate to directory
cd prepresscore.com

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 👨‍💻 Author

**Efes Karabağ**
* Website: [efeskarabag.com](https://www.efeskarabag.com)
* LinkedIn: [linkedin.com/in/efeskarabag](https://www.linkedin.com/in/efeskarabag/)
* GitHub: [@efeskarabag](https://github.com/efeskarabag)
