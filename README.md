# Media Layout

A plugin that allows you to freely arrange and resize media elements (videos, images, audio) and note boxes directly on the page. Create visual compositions while maintaining the simplicity and portability of your notes.

---
![Main demo – resize & position media](https://github.com/user-attachments/assets/f6e86c45-cd42-476c-8ec1-77850c66d90c)
## 🎯 Key Features

### Working with Media
- **Editing** — freely edit videos, images, and audio in Live Preview mode
- **In-flow Files** — edit the size and shape of media directly in the text flow
- **Clones** — create visual copies of media with their own size and position

---

## 👥 Clones 
## <sup>Files in the flow can be detached for free movement throughout the note, but instead it's recommended to clone the desired file and position it where needed. Clones are loaded directly from your disk, so after cloning you can delete the original element from the note—the clone will be independent of it, but the file itself must exist on disk in your vault.</sup>
#### CLONE CAPABILITIES:
 - **📐   Sizing** — change the size of photos, videos, and audio by dragging special handles or set the desired size using the menu
  <img width="393" height="301" alt="screen for ML1" src="https://github.com/user-attachments/assets/4309cf3d-12e7-49bd-bac5-10a48f47ac68" />

 - **✨  Transformation** — unlike audio and video, image files can be transformed by holding ctrl and dragging the handles
 - **🗺️  Movement** — unlike files in the flow, clones can be freely placed anywhere in the note
 - **📋  Presets** — by pressing a special button, you can save all clones and note boxes currently in the note to a preset
<img width="356" height="225" alt="сохранение страницы" src="https://github.com/user-attachments/assets/7024dc7c-f935-4b5f-8951-50e4962f47ae" />

 - **✅  Page Save** — after saving a page, you can insert it into any other (all clone and note box data is saved, including current position and all presets)
 - **🔄  Rotation** — clones and note boxes can not only be freely moved but also rotated (grid-snapped if holding shift)
   
![ML rotate](https://github.com/user-attachments/assets/eb40f32a-31c6-4ba3-a90f-29ca70a6f2bb)

 - **🔗  Link** — insert a link into an image clone and it will open when clicked (just like a YouTube thumbnail) 
 - **🎨  Customization** — customize clones and note boxes as you like, you can edit background color, text color, transparency, and more
<img width="564" height="336" alt="Screenshot_5" src="https://github.com/user-attachments/assets/1d0f3003-9c8e-402d-b889-4b81a1a75f55" />

## <sub></sub>
#### CLONE STYLING:
![Customization](https://github.com/user-attachments/assets/859a75c0-a1dc-4156-882e-0d0855c775c5)
#### Backgrounds
- **Global Background** — set background and opacity for all media
- **Local Background ("Only for this file")** — customize background for individual elements 
- **Transparency** — make the background transparent, leaving only the content

### Element Management

#### Multi-Select and Selection
- **Select Elements** — `Ctrl + Click` to select clones and tables
- **Area Selection** — `Ctrl + Drag` to select multiple elements with a box
- **Group Movement** — drag any selected element to move the entire group
- **Bulk Delete** — delete all selected elements with one action

#### Locking
- **Protection from Accidental Changes** — lock elements after configuration

## Note Boxes 

  Create a note box to add text anywhere in the note (background can be removed leaving only text)
  <img width="264" height="105" alt="добавление талички" src="https://github.com/user-attachments/assets/8186f6b2-e84a-4d80-a886-01de3ce52b95" />
  
- **Font Size on the Fly:**
  - `Ctrl + Mouse Wheel` — 10 px step
  - `Shift + Mouse Wheel` — precise 1 px adjustment
- **Color Settings:**
  - Table background
  - Header color
  - Text color
  - Border color (uses the currently selected color)
  
## Presets
- **Save Layouts** — save clones and note boxes together with all their data (positions, sizes, backgrounds, locks, etc.)
- **Apply Presets** — quickly restore saved compositions
- **Reliability** — originals remain in the text flow, avoiding conflicts and not interacting with presets at all

---

## ⚙️ Settings

Open via Command Palette: **`Media Layout: Settings`**

### List
- **Detach Originals** (off by default) — allows moving original media outside the flow
- **Handle Visibility** — make resize handles invisible but active
- **Panel Hide Duration**
- **Clone Restore Delay**
- **Table Restore Delay**
- **Modal Animation** — smooth open/close

---
  
### 🌍 Localization
Built-in language support: de, pl, es, fr, it, be, uk, uz, vi, zh-CN, zh-TW

---

## 💾 Data Storage

**Location:** `.obsidian/plugins/media-layout/`

**What's Stored:**
Absolutely all data, including sizes of original files in the flow, clones, settings, backgrounds, note boxes, text, etc.

### Automatic Backups
- **Interval:** every 10 minutes (when changes are made)
- **Retention:** up to 4 files with rotation
- **Format:** `DD_MM_YYYY_HH꞉MM_data_backup.json`
- **Recovery:** replace `data.json` with the desired backup (with Obsidian closed)

---

## 📖 How to Use the Plugin

1. **Enable the plugin** in Obsidian settings
2. **Insert media** into a note (video/image/audio) or add a note box
3. **Create a clone** (recommended for free placement) and work with it as you like
4. **Adjust size and position** — drag and resize elements
5. **Style** — set background, opacity, colors (via element menu)
6. **Lock** — protect elements from accidental changes

<img width="298" height="146" alt="блокировка" src="https://github.com/user-attachments/assets/53d80f04-7a6a-4633-ae77-d1faa5042078" />

7. **Save a preset** — save the composition so you don't lose it if you accidentally delete any elements, or to try a different composition variant and have the ability to restore the previous one

![Saving presets](https://github.com/user-attachments/assets/e572529e-92c6-4410-b6af-c0a6dcd046dc)
---

## ⚠️ Important to Know

### Originals vs Clones
- **Originals** — located in the Markdown text flow; can be resized; repositioning requires detachment (not recommended)
- **Clones** — independent visual copies with their own parameters; don't affect the text flow

**Recommendation:** use **clones** for creating layouts. It's safer and more stable, as detaching files from the flow can narrow the content display in the note—this happens due to Obsidian's CodeMirror 6 optimization system.

### Limitations and Features
- **Detaching originals** may cause visual bugs due to CM6 specifics
- **Reset all settings** removes clones and restores originals to the flow
- Large amounts of heavy media (videos, GIFs) may reduce performance
- Aggressive CSS or third-party plugins may affect display

---

## ❓ FAQ

**Do clones duplicate files?**  
No. Clones reference the same file — only display parameters are duplicated.

**Will the layout persist after restart?**  
Yes. Clones and presets are restored automatically.

**Can I edit in Reading Mode?**  
Editing is only available in **Live Preview**. Reading Mode shows the result with limited interaction.