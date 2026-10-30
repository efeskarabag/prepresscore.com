<div align="center">

  <h1>Prepress Core</h1>

  <p>
    <strong>Industrial Adobe Illustrator Automation Platform & Interactive CEP Simulation</strong><br />
    <em>Remote AES-256 script distribution, hardware-locked (HWID) licensing & vector prepress CAD engine.</em>
  </p>

  <p>
    <a href="https://www.prepresscore.com/"><img src="https://img.shields.io/badge/Production-prepresscore.com-0d1117?style=flat-square&logo=vercel&logoColor=white&labelColor=161b22" alt="Production Site" /></a>
    &nbsp;
    <a href="https://prepresscore-com.vercel.app/"><img src="https://img.shields.io/badge/Mirror-prepresscore--com.vercel.app-0d1117?style=flat-square&logo=vercel&logoColor=white&labelColor=161b22" alt="Vercel Mirror" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Adobe_CEP-000000?style=flat-square&logo=adobe&logoColor=FF0000" alt="Adobe CEP" />
    <img src="https://img.shields.io/badge/ExtendScript_JSX-000000?style=flat-square&logo=adobeillustrator&logoColor=FF9A00" alt="ExtendScript" />
    <img src="https://img.shields.io/badge/JavaScript_ES6+-000000?style=flat-square&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Vite-000000?style=flat-square&logo=vite&logoColor=646CFF" alt="Vite" />
    <img src="https://img.shields.io/badge/AES--256_Encryption-000000?style=flat-square&logo=lock&logoColor=white" alt="AES-256" />
    <img src="https://img.shields.io/badge/HWID_Licensing-000000?style=flat-square&logo=auth0&logoColor=white" alt="HWID" />
  </p>

</div>

---

### Architectural Overview

**Prepress Core** is an enterprise-grade automation infrastructure designed for printing houses, commercial packaging converters, and repro houses. It solves a fundamental operational hurdle in packaging prepress: protecting, remotely updating, and distributing custom **Adobe Illustrator CC (CEP / ExtendScript)** routines across production workstations without exposing plaintext source code or risking unlicensed file distribution.

This repository powers the official web platform and delivers an **Interactive In-Browser Illustrator CEP Simulation**, allowing operators and engineers to preview panel mechanics, dieline generators, and ExtendScript console execution directly within a modern web canvas.

---

### Security & Distribution Pipeline

* **Hardware-Locked (HWID) Licensing:** Cryptographically evaluates CPU signatures, motherboard serials, and NIC identifiers to restrict script execution strictly to verified hardware.
* **Centralized Remote Delivery:** ExtendScript routines are never written to plaintext local drives. Code bundles are pulled over an encrypted TLS tunnel, decoded in volatile Illustrator runtime memory, and executed on the fly.
* **AES-256 Code Obfuscation:** Protects proprietary packaging formulas, imposition algorithms, and spot-color rules from unauthorized reverse-engineering.
* **Encrypted Offline Resilience:** Ensures continuous factory floor operations through short-lived encrypted cache tokens when network connections drop.

---

### Interactive Web Canvas Simulator

The web platform features an interactive vector canvas reproducing Adobe Illustrator's native environment:
* **Tool Matrix:** Selection (V), Direct Selection (A), Pen (P), Type (T), Rectangle (M), Eyedropper (I).
* **Live Spot / CutContour Preview:** Realtime dieline detection, dimensional auditing (width, height, bleed margins), and trim line verification.
* **Simulated ExtendScript Console:** Visual execution logs modeling JSX script execution, anchor point traversal, and barcode generation.

---

### Engineering Specifications

* **Web UI & Simulator:** Vanilla ES6+, Vite, Canvas API, Responsive CSS Grid
* **Target Desktop Runtime:** Adobe Illustrator CC (CEP 10+ / CommonJS / ExtendScript JSX)
* **Backend Licensing Engine:** Node.js, Express, Crypto AES-256, SQLite / Supabase

---

### Local Development

```bash
# Clone the repository
git clone https://github.com/efeskarabag/prepresscore.com.git

# Navigate to project directory
cd prepresscore.com

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

<div align="center">
  <sub>Developed by <strong>Efes Karabağ</strong> • Prepress Core Automation Systems</sub>
</div>
