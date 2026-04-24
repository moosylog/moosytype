<div align="center">

# moosytype
**ZMK Matrix Training with a familiar, buttery-smooth feel**

[![HTML5](https://img.shields.io/badge/HTML5-Strict-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-00FF66?style=for-the-badge)](#)
[![Monkeytype Math](https://img.shields.io/badge/Monkeytype_WPM-Strict-e2b714?style=for-the-badge)](#)
[![Moosy Research](https://img.shields.io/badge/Moosy_Research-2026-00E5FF?style=for-the-badge)](#)

*To love is to recognize. Master your split ergonomic keyboard with interactive visual aids, LayerForge JSON parsing, and strict e-sports typing metrics.*

<br>

<a href="https://moosylog.github.io/moosytype/" target="_blank">
  <img 
    src="https://img.shields.io/badge/🚀%20LAUNCH%20MOOSYTYPE-CLICK%20TO%20START-e2b714?style=for-the-badge"
    alt="Launch Moosytype"
  />
</a>

<br><br>

</div>

---

## 🌐 Overview

Moosytype is a **visual layout trainer** built specifically for ergonomic, split, and columnar keyboards. It is the evolution of Alpha Test Drive.

Instead of just looking at a screen of text, Moosytype trains your physical muscle memory by:
- Showing a live, interactive SVG map of your exact physical keyboard  
- Highlighting the expected key you need to press on your specific layout  
- Allowing you to test-drive completely new alpha layers (Colemak-DH, Dvorak, etc.) before flashing them to your firmware  

It is built as a lightning-fast, single HTML file that runs entirely in your browser. No installation, no backend, and no extra downloads—just pure, focused practice.

---

## 🚀 Key Features

* **Strict Monkeytype Math:** Utilizes the exact Net WPM and accuracy formulas from the competitive typing standard. If you make an uncorrected typo, the entire word is aggressively dropped from your speed calculation.
* **Smart Mistake Practice:** The engine tracks your exact fingering and key errors, automatically generating custom practice text targeting your weakest characters.
* **Mechanical Audio Synthesis:** No `.wav` files needed. Features a custom Web Audio API synthesizer that mathematically mimics the sound of mechanical switches to keep you in rhythm.
* **Familiar Aesthetics:** A beautiful, distraction-free UI featuring buttery-smooth caret animations, dynamic Focus Mode color-fading, and classic typing colorways.
* **Live News & Custom Text:** Break the monotony of top-200 English words by typing live RSS news feeds or pasting your own custom practice text.
* **Offline Ready & Local Storage:** Everything runs locally. Your top scores, heatmaps, and preferences are saved right in your browser cache.

---

## ⌨️ Supported Keyboards

* MoErgo Glove80  
* MoErgo Go60  
* Corne (42-key)  
* ZSA Voyager  
* Standard ANSI 60%  

---

### 📁 Custom ZMK / MoErgo JSON Setup

Upload your layout's `.json` file directly into the settings menu. Moosytype's built-in LayerForge AST Engine will:
- Deep-parse ZMK behaviors (like `&mt`, `&lt`, and nested macros)  
- Strip modifiers to find the base character  
- Instantly map your actual OS output to your visual target layout  
- Allow you to drag-and-drop keys manually to tweak your matrix on the fly  

No manual coding or manual mapping required.

---

## 🕹️ How to Practice

1. Select your **Hardware**, **Source OS Layout**, and **Target Layout** in the settings (⚙️)  
2. Choose your mode: Words (Top 200), News (Live RSS), or Custom  
3. Start typing. The UI will instantly fade into a distraction-free Focus Mode  
4. Use the visual keyboard map if you forget where a key is located on your new layout  
5. Finish the test to see your exact Net WPM, Accuracy, and a Heatmap of missed keys  
6. Press `Enter` to instantly start a custom practice run targeting your specific mistakes  
7. Use `Tab + Enter` at any time to quick-restart the session  

---

## ⚠️ Training Modes

* **Words:** Practice raw muscle-memory with the standard English dictionary (10, 25, 50, or 100 words).  
* **News:** Type real, live sentences fetched from NPR and NYT to practice natural punctuation and capitalization.  
* **Custom:** Paste specific code snippets, books, or scripts to practice real-world typing scenarios.  
* **Mistakes:** An algorithmically generated mode that forces you to drill the specific characters you just failed in the previous run.
