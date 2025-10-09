# Media Layout
### A plugin that lets you freely arrange videos, images, and audio — with **clone-only presets** for rock-solid layouts

Break out of Markdown’s linear flow: **drag, resize, and position media anywhere on the page** in Live Preview. You can edit both **originals in the text flow** and **clones** (recommended). Presets and page saves are **clone and note boxes - only**: they store and restore clones (with their size/position/background) and leave originals in the flow, which avoids fragile edge cases.

![Main demo – resize & position media](https://github.com/user-attachments/assets/f6e86c45-cd42-476c-8ec1-77850c66d90c)

---

## Features
- **Free move & resize** for videos, images, and audio in **Live Preview** — works for **originals** (in-flow) and **clones**.
- **Clone and note boxes - only presets** — save/apply page layouts that include **only clones and note boxes** (their geometry, backgrounds, locks). Originals remain in the text flow.
- **Optional detaching of originals** — you *can* detach originals to reposition them, but it’s disabled by default and not recommended (see **Important notes**).
- **Backgrounds**
  - **Global** background & opacity for all media,
  - **Local** per-item background, with **“Only for this file”** to limit styling to the current note,
  - Background can be **transparent** to leave only text/controls visible.
- **Tables / note boxes**
  - **Font size on the fly:** `Ctrl + Mouse Wheel` (step **10 px**) and `Shift + Mouse Wheel` (precise **1 px**).
  - **Colors:** set **background**, **header**, **text**, and **border**.
  - **Border behavior:** when you **add a border**, it uses the **current color** selected in the color panel.  
    If you just changed the **text color** and then add a border without choosing a new color, the border will match the text — simply pick the desired border color.
- **Lock / Unlock** any item to avoid accidental moves.
- **Persistence** — layouts (clones, settings) persist across reloads.
- **Smooth modal animation** (can be disabled) for a pleasant, non-jittery UI.
- **Customization timing** — tune panel **hide duration**, clone **restore delay**, and **table/note-box restore delay**.
- **Localization** built-in: de, pl, es, fr, it, be, uk, uz, vi, zh-CN, zh-TW (and expandable).
- **Audio UX** — resize/position works; handles can be **invisible but active** (toggle in Settings).
- **Safety** — designed to avoid text selection during drag and keep cursor behavior stable.

---

## Why this exists
Plain Markdown keeps media glued to the text flow. *Media Layout* provides a floating control layer and **clones** so you can **compose pages visually** while your notes remain simple and portable. By making presets **clone-only**, the plugin avoids flow corruption and stays robust on complex pages.

---

## How to use
1. **Enable** the plugin.
2. Insert media into a note (video / image / audio) or add a **table/note box**.
3. Create a **Clone** (recommended). You can also work with **originals in flow**; to **reposition originals** by detaching them, enable the option in **`Media Layout: Settings`** (see Important notes).
4. **Drag & resize** to precise positions.  
   ![Full control of positions](https://github.com/user-attachments/assets/03618c54-d910-4fdd-aab2-0080643e1fc5)
5. Open the item menu to set **Background / Opacity**; toggle **Only for this file** for local styling.  
   For **tables**: adjust **font size** with `Ctrl/Shift + Wheel`; set **header/text/background/border** colors.  
   When **adding a border**, it immediately takes the **current color** from the color panel — choose the border color you want.  
   To leave just text, set the table **background to transparent**.  
   ![Customization](https://github.com/user-attachments/assets/859a75c0-a1dc-4156-882e-0d0855c775c5)
6. **Lock** items when ready.
7. **Save a Preset** — this saves **clones only**. **Apply** will restore clones (sizes/positions/backgrounds); originals stay in the flow.  
   ![Saving presets](https://github.com/user-attachments/assets/e572529e-92c6-4410-b6af-c0a6dcd046dc)

---

## Core concepts
### Originals (in-flow) vs Clones
- **Originals** live in the Markdown flow. You can resize them; to change their **position on page**, enable **Detach originals** in **`Media Layout: Settings`** (off by default).
- **Clones** are independent visual instances referencing the same file, with their **own** size, position, background, and lock.

> **Recommendation:** Use **clones** for production layouts. Presets are clone-only by design; originals remain stable in the text flow.

---

## Important notes & limitations
- **Detaching originals** can cause **incorrect flow or visual glitches** depending on surrounding content or other plugins.  
  **Best practice:** keep originals in the flow and build your layout with **clones**.
- **Reset all** truly resets **everything**: clones, their positions, and any detached originals (restores originals to normal flow).
- Heavy pages (many large videos/GIFs) may impact performance — keep sizes reasonable.
- Aggressive custom CSS or third-party media enhancers may affect overlays/backgrounds.

---

## Settings & options
Open via Command Palette: **`Media Layout: Settings`**.
- **Detach originals (off by default)** — allows repositioning originals outside the flow; use with caution.
- **Presets** — **clone-only** save/apply; include clone geometry, backgrounds, locks.
- **Backgrounds** — global defaults; per-item local background & opacity with **Only for this file**; transparent backgrounds supported.
- **Tables / note boxes**
  - Font-size control (`Ctrl/Shift + Wheel`), color controls for **header/text/background/border**, border uses the **currently selected color** on add.
- **Timing & animation**
  - **Panel hide duration**
  - **Clone restore delay**
  - **Table/note-box restore delay**
  - **Modal animation** — smooth open/close (toggle)
- **Handles visibility** — make handles **invisible but active**.
- **Reset & restore** tools for quick cleanup.
- **Language selection** (localization).

---

## Where data is stored
The plugin uses Obsidian’s standard plugin storage (`.obsidian/plugins/media-layout/`), keeping:
- clone layouts (positions/sizes),
- per-item/local backgrounds & opacity,
- **clone-only** preset definitions.

---
## Backups

- **Interval:** every 10 minutes.  
- **Retention:** up to 4 files; when the 5th is created, the oldest is deleted (rotation).  
- **Trigger:** a backup is created **only** after you interact with the plugin (e.g., move/resize/change something).  
- **Location:** same folder as the main data file (typically `data.json`).  
- **Filename pattern:** `DD_MM_YYYY_HH꞉MM_data_backup.json`, e.g., `05_10_2025_19꞉12_data_backup.json`.

**Manual restore**
1. Close Obsidian.  
2. Copy your current main data file (for safety).  
3. Choose a backup and replace the main data file with it (rename to `data.json` if needed).  
4. Reopen Obsidian and verify your layout/settings.

> If there were no changes during the last 10 minutes, a new backup is not created.

---

## FAQ
**Do clones duplicate files?**  
No. They reference the same media file — only geometry/styling is duplicated.

**Will my layout persist after restart?**  
Yes. Clones and their presets are restored automatically.

**Can I edit in Reading Mode?**  
Editing is meant for **Live Preview**. Reading Mode shows the arranged result; interactions are limited.
