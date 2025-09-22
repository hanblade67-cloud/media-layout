# Media Layout (Obsidian)
### A plugin that lets you freely arrange videos, images, and audio — and save reusable presets

Break out of Markdown’s linear flow: **drag, resize, and position media anywhere on the page** in Live Preview. Build galleries, dashboards, and magazine-style layouts. Save the whole composition as a **preset**, or reuse the same media via **clones** with independent size/position/background.

![1 эта должна быть первой_тут основная суть плагина, изменение размеров и положения медиа](https://github.com/user-attachments/assets/f6e86c45-cd42-476c-8ec1-77850c66d90c)

---

## Features
- **Free move & resize** for videos, images, and audio (stable, no “jitter”) in **Live Preview**.
- **Clones** — place the same media multiple times with **independent**:
  - position (x/y), size (w/h),
  - background color & **opacity**,
  - lock state.
- **Presets** — save the entire page layout (including clones, backgrounds, locks) and **restore in one click**.
- **Backgrounds**:
  - **Global** background & opacity for all media,
  - **Local** per-item background, with **“Only for this file”** switch to limit styling to the current note.
- **Lock / Unlock** any item to avoid accidental moves.
- **Persistence** — layouts (including clones) are restored after reload.
- **Localization** built-in: de, pl, es, fr, it, be, uk, uz, vi, zh-CN, zh-TW (and expandable).
- **Audio UX** — resize/position works; handles are **invisible but active** (clean look).
- **Safety** — designed to avoid text selection while dragging and to keep cursor behavior stable.

---

## Why this exists
Plain Markdown keeps media glued to the text flow. *Media Layout* uses a dedicated floating layer and/or **clones** so you can **compose pages visually** while your note stays simple and portable.

---

## How to use
1. **Enable** the plugin.
2. Insert media into a note (video / image / audio).
3. **Clone** (recommended) or **Detach** the item.
4. **Drag & resize** the element to place it precisely.  
   ![3 полный контроль положений медиа на странице](https://github.com/user-attachments/assets/03618c54-d910-4fdd-aab2-0080643e1fc5)

5. Open the item’s menu to set **Background** and **Opacity**; toggle **Only for this file** to keep styling local.  
   ![2 кастомизация](https://github.com/user-attachments/assets/859a75c0-a1dc-4156-882e-0d0855c775c5)

6. **Lock** items when the layout looks right.
7. **Save a Preset** to capture the whole page and **Apply** it later.  
![4 сохранение пресетов](https://github.com/user-attachments/assets/e572529e-92c6-4410-b6af-c0a6dcd046dc)

---

## Core concepts
### Detach vs Clone
- **Detach** moves the *original* media into a floating layer for absolute positioning.
- **Clone** creates an extra visual instance pointing to the same file, but with its **own** geometry and styling.

> **Recommendation:** Prefer **clones** for complex layouts. They’re robust and won’t disturb surrounding text or other plugins.

---

## Important notes & limitations
- **Detaching originals** can sometimes lead to **incorrect placement or visual glitches** depending on surrounding content or other plugins.  
  **Best practice:** use **clones** for production layouts — they are the most reliable.
- Very heavy pages (many large videos/GIFs) can impact performance — keep file sizes reasonable.
- Aggressive custom CSS or third-party media enhancers may affect overlays/backgrounds.

---

## Settings & options
- Global background & opacity (defaults for all media).
- Local (per-item) background & opacity with **Only for this file** switch.
- Clone management (create/remove; each clone is independent).
- Presets (save/apply; include clones and styling).
- Reset & restore helpers for quick cleanup.
- Language selection (localization).

---

## Where data is stored
The plugin uses Obsidian’s standard plugin storage (inside your vault’s `.obsidian/plugins/<your-plugin-id>/`), keeping:
- page layouts (positions/sizes),
- clone states,
- per-item/local backgrounds & opacity,
- preset definitions.

---

## FAQ
**Do clones duplicate files?**  
No. Clones reference the same media file; only geometry/styling is duplicated.

**Will my layout persist after restart?**  
Yes. Layouts (including clones and presets) are restored automatically.

**Can I edit in Reading Mode?**  
Editing is meant for **Live Preview**. Reading Mode shows the arranged result; interactions are limited.
