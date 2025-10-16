var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MediaSize
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var I18N = {
  en: {
    cloneSettingsTitle: "Clone customization",
    animation: "Animation",
    animationPopup: "Popup",
    animationFade: "Fade",
    backgroundOpacity: "Background opacity",
    controlsOpacity: "Controls opacity",
    showAudioHandles: "Show audio handles",
    presets: "Sizes",
    fit: "Fit to container",
    natural: "Natural size",
    add: "Add\u2026",
    addPresetTitle: "Add width preset \u2039px\u203A",
    placeholder: "e.g. 820",
    ok: "OK",
    cancel: "Cancel",
    invalid: "Invalid value",
    maxReached: "Maximum number of presets reached",
    added: "Preset {n} added",
    removed: "Preset {n} removed",
    openLocation: "Open file location",
    fileNotFound: "File not found in the vault",
    shellDenied: "No access to shell",
    localOnly: "Available for local vaults only",
    restorePos: "Restore original position",
    setSize: "Set size\u2026",
    width: "Width",
    height: "Height",
    keepAR: "Keep aspect ratio",
    sbReady: "ML \u2022 ready",
    sbTitle: "Media Layout: click to rescan",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 plugin active",
    posPresets: "Save clone positions",
    resetAll: "Reset all",
    saveLayout: "Save preset",
    layoutMax: "Maximum number of presets reached",
    saved: "Saved",
    layoutN: "Preset {n}",
    renameTitle: "Enter a name",
    addNote: "Add note box",
    copyLayout: "Copy page data",
    pasteLayout: "Paste page data",
    deleteNote: "Delete note box",
    detach: "Detach",
    bgColor: "Change background color",
    duplicate: "Duplicate",
    reset: "Reset",
    removeBg: "Remove background",
    deleteClone: "Delete",
    lock: "Lock",
    unlock: "Unlock",
    localOnlyCheckboxLabel: "Only for this file",
    makeInvisible: "Make invisible",
    invalidLayoutData: "Invalid page data in clipboard.",
    layoutPasted: "Page data and presets pasted.",
    pasteLayoutFailed: "Failed to paste page data from clipboard.",
    layoutCopied: "Page data copied to clipboard.",
    makeVisible: "Make visible",
    bringLayerUp: "Bring layer up",
    sendLayerDown: "Send layer down",
    showHandlesOnHoverLabel: "Show handles on hover",
    hideDetachButtonLabel: "Hide \xABDetach\xBB button",
    modalAnimationLabel: "Window animation",
    cloneRestoreDelayLabel: "Clone appearance delay",
    noteRestoreDelayLabel: "Note box appearance delay",
    hideDelayLabel: "Panel hide delay",
    changeTextColor: "Change text color",
    cloneNearFile: "Clone next to the file",
    addStroke: "Add stroke",
    addLink: "Add link",
    applyToHeader: "Apply to header",
    deleteSelected: "Delete selected ({n})"
  },
  ru: {
    cloneSettingsTitle: "\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043B\u043E\u043D\u043E\u0432",
    animation: "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F",
    animationPopup: "\u0412\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0430\u044F",
    animationFade: "\u041F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
    backgroundOpacity: "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0444\u043E\u043D\u0430",
    controlsOpacity: "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u0438",
    showAudioHandles: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0443\u0447\u043A\u0438 \u0443 \u0430\u0443\u0434\u0438\u043E",
    presets: "\u0420\u0430\u0437\u043C\u0435\u0440\u044B",
    fit: "\u041F\u043E\u0434\u043E\u0433\u043D\u0430\u0442\u044C \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440",
    natural: "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440",
    add: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\u2026",
    addPresetTitle: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0441\u0435\u0442 \u0448\u0438\u0440\u0438\u043D\u044B \u2039px\u203A",
    placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: 820",
    ok: "\u041E\u041A",
    cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    invalid: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    maxReached: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0435\u0441\u0435\u0442\u043E\u0432",
    added: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    removed: "\u0423\u0434\u0430\u043B\u0451\u043D \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    openLocation: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430",
    fileNotFound: "\u0424\u0430\u0439\u043B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u0432\u0430\u0443\u043B\u0442\u0435",
    shellDenied: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A shell",
    localOnly: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u0430\u0443\u043B\u0442\u043E\u0432",
    restorePos: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    setSize: "\u0417\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u2026",
    width: "\u0428\u0438\u0440\u0438\u043D\u0430",
    height: "\u0412\u044B\u0441\u043E\u0442\u0430",
    keepAR: "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438",
    sbReady: "ML \u2022 \u0433\u043E\u0442\u043E\u0432\u043E",
    sbTitle: "Media Layout: \u043A\u043B\u0438\u043A \u2014 \u043F\u0435\u0440\u0435\u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 \u043F\u043B\u0430\u0433\u0438\u043D \u0430\u043A\u0442\u0438\u0432\u0435\u043D",
    posPresets: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043A\u043B\u043E\u043D\u043E\u0432",
    resetAll: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0451",
    saveLayout: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0435\u0441\u0435\u0442",
    layoutMax: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0435\u0441\u0435\u0442\u043E\u0432",
    saved: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E",
    layoutN: "\u041F\u0440\u0435\u0441\u0435\u0442 {n}",
    renameTitle: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    addNote: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u0443",
    copyLayout: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
    pasteLayout: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
    deleteNote: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u0443",
    detach: "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
    bgColor: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
    duplicate: "\u041A\u043B\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    reset: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
    removeBg: "\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u043D",
    deleteClone: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    lock: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
    unlock: "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    localOnlyCheckboxLabel: "\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430",
    makeInvisible: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0435\u0432\u0438\u0434\u0438\u043C\u044B\u043C",
    invalidLayoutData: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u0431\u0443\u0444\u0435\u0440\u0435 \u043E\u0431\u043C\u0435\u043D\u0430.",
    layoutPasted: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438 \u043F\u0440\u0435\u0441\u0435\u0442\u044B \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B.",
    pasteLayoutFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430.",
    layoutCopied: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430.",
    makeVisible: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0438\u0434\u0438\u043C\u044B\u043C",
    bringLayerUp: "\u041F\u043E\u0434\u043D\u044F\u0442\u044C \u0441\u043B\u043E\u0439",
    sendLayerDown: "\u041E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043B\u043E\u0439",
    showHandlesOnHoverLabel: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0443\u0447\u043A\u0438 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438",
    hideDetachButtonLabel: "\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u043E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C\xBB",
    modalAnimationLabel: "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043E\u043A\u043E\u043D",
    cloneRestoreDelayLabel: "\u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u043B\u043E\u043D\u043E\u0432",
    noteRestoreDelayLabel: "\u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u0431\u043B\u0438\u0447\u0435\u043A",
    hideDelayLabel: "\u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u043F\u0430\u043D\u0435\u043B\u0438",
    changeTextColor: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
    cloneNearFile: "\u041A\u043B\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u044F\u0434\u043E\u043C \u0441 \u0444\u0430\u0439\u043B\u043E\u043C",
    addStroke: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0432\u043E\u0434\u043A\u0443",
    applyToHeader: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u043B\u044F \u0448\u0430\u043F\u043A\u0438",
    addLink: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
    deleteSelected: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 ({n})"
  },
  de: {
    cloneSettingsTitle: "Klon-Anpassung",
    animation: "Animation",
    animationPopup: "Popup",
    animationFade: "Einblenden",
    backgroundOpacity: "Hintergrund-Deckkraft",
    controlsOpacity: "Bedienfeld-Deckkraft",
    showAudioHandles: "Audio-Griffe anzeigen",
    presets: "Gr\xF6\xDFen",
    fit: "An Container anpassen",
    natural: "Nat\xFCrliche Gr\xF6\xDFe",
    add: "Hinzuf\xFCgen\u2026",
    addPresetTitle: "Breiten-Preset hinzuf\xFCgen \u2039px\u203A",
    placeholder: "z. B. 820",
    ok: "OK",
    cancel: "Abbrechen",
    invalid: "Ung\xFCltiger Wert",
    maxReached: "Maximale Anzahl an Presets erreicht",
    added: "Preset {n} hinzugef\xFCgt",
    removed: "Preset {n} entfernt",
    removeBg: "Hintergrund entfernen",
    openLocation: "Dateispeicherort \xF6ffnen",
    fileNotFound: "Datei im Vault nicht gefunden",
    shellDenied: "Kein Shell-Zugriff",
    localOnly: "Nur f\xFCr lokale Vaults verf\xFCgbar",
    restorePos: "Ausgangsposition wiederherstellen",
    setSize: "Gr\xF6\xDFe festlegen\u2026",
    width: "Breite",
    height: "H\xF6he",
    keepAR: "Seitenverh\xE4ltnis beibehalten",
    sbReady: "ML \u2022 bereit",
    sbTitle: "Media Layout: Klicken zum Rescan",
    cmdPing: "Media Layout: Ping",
    pingOk: "ML: OK \u2014 Plugin aktiv",
    posPresets: "Klonposition beibehalten",
    resetAll: "Alles zur\xFCcksetzen",
    saveLayout: "Preset speichern",
    layoutMax: "Maximale Anzahl an Presets erreicht",
    saved: "Gespeichert",
    layoutN: "Preset {n}",
    renameTitle: "Name eingeben",
    addNote: "Notiz-Box hinzuf\xFCgen",
    copyLayout: "Seitendaten kopieren",
    pasteLayout: "Seitendaten einf\xFCgen",
    deleteNote: "Notiz-Box l\xF6schen",
    detach: "Abl\xF6sen",
    bgColor: "Hintergrundfarbe \xE4ndern",
    duplicate: "Duplizieren",
    reset: "Zur\xFCcksetzen",
    deleteClone: "l\xF6schen",
    lock: "Sperren",
    unlock: "Entsperren",
    localOnlyCheckboxLabel: "Nur f\xFCr diese Datei",
    makeInvisible: "Unsichtbar machen",
    invalidLayoutData: "Ung\xFCltige Seitendaten in der Zwischenablage.",
    layoutPasted: "Seitendaten und Presets eingef\xFCgt.",
    pasteLayoutFailed: "Seitendaten konnten nicht aus der Zwischenablage eingef\xFCgt werden.",
    layoutCopied: "Seitendaten in die Zwischenablage kopiert.",
    makeVisible: "Sichtbar machen",
    bringLayerUp: "Ebene nach oben",
    sendLayerDown: "Ebene nach unten",
    showHandlesOnHoverLabel: "Ziehpunkte bei Hover anzeigen",
    hideDetachButtonLabel: "Schaltfl\xE4che \u201EAbl\xF6sen\u201C ausblenden",
    modalAnimationLabel: "Modal-Animation",
    cloneRestoreDelayLabel: "Verz\xF6gerung f\xFCr Klon-Einblendung",
    noteRestoreDelayLabel: "Verz\xF6gerung f\xFCr Notizbox-Einblendung",
    hideDelayLabel: "Verz\xF6gerung beim Ausblenden des Panels",
    changeTextColor: "Textfarbe \xE4ndern",
    cloneNearFile: "Neben der Datei klonen",
    addStroke: "Kontur hinzuf\xFCgen",
    applyToHeader: "Auf Kopfzeile anwenden",
    addLink: "Link hinzuf\xFCgen",
    deleteSelected: "Ausgew\xE4hlte l\xF6schen ({n})"
  },
  pl: {
    cloneSettingsTitle: "Dostosowanie klon\xF3w",
    animation: "Animacja",
    animationPopup: "Wyskakuj\u0105ca",
    animationFade: "Wygaszanie",
    backgroundOpacity: "Przezroczysto\u015B\u0107 t\u0142a",
    controlsOpacity: "Przezroczysto\u015B\u0107 panelu",
    showAudioHandles: "Poka\u017C uchwyty audio",
    presets: "Rozmiary",
    fit: "Dopasuj do kontenera",
    natural: "Naturalny rozmiar",
    add: "Dodaj\u2026",
    addPresetTitle: "Dodaj preset szeroko\u015Bci \u2039px\u203A",
    placeholder: "np. 820",
    ok: "OK",
    removeBg: "Usu\u0144 t\u0142o",
    cancel: "Anuluj",
    invalid: "Nieprawid\u0142owa warto\u015B\u0107",
    maxReached: "Osi\u0105gni\u0119to maksymaln\u0105 liczb\u0119 preset\xF3w",
    added: "Dodano preset {n}",
    removed: "Usuni\u0119to preset {n}",
    openLocation: "Otw\xF3rz lokalizacj\u0119 pliku",
    fileNotFound: "Pliku nie znaleziono w vault",
    shellDenied: "Brak dost\u0119pu do shell",
    localOnly: "Dost\u0119pne tylko dla lokalnych vault\xF3w",
    restorePos: "Przywr\xF3\u0107 pozycj\u0119",
    setSize: "Ustaw rozmiar\u2026",
    width: "Szeroko\u015B\u0107",
    height: "Wysoko\u015B\u0107",
    keepAR: "Zachowaj proporcje",
    sbReady: "ML \u2022 gotowe",
    sbTitle: "Media Layout: kliknij, aby przeskanowa\u0107",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 wtyczka aktywna",
    posPresets: "Zapisz pozycje klon\xF3w",
    resetAll: "Zresetuj wszystko",
    saveLayout: "Zapisz preset",
    layoutMax: "Osi\u0105gni\u0119to maksymaln\u0105 liczb\u0119 preset\xF3w",
    saved: "Zapisano",
    layoutN: "Preset {n}",
    renameTitle: "Wpisz nazw\u0119",
    addNote: "Dodaj ramk\u0119 notatki",
    copyLayout: "Kopiuj dane strony",
    pasteLayout: "Wklej dane strony",
    deleteNote: "Usu\u0144 ramk\u0119 notatki",
    detach: "Od\u0142\u0105cz",
    bgColor: "Zmie\u0144 kolor t\u0142a",
    duplicate: "Duplikuj",
    reset: "Resetuj",
    deleteClone: "Usu\u0144",
    lock: "Zablokuj",
    unlock: "Odblokuj",
    localOnlyCheckboxLabel: "Tylko dla tego pliku",
    makeInvisible: "Uczy\u0144 niewidocznym",
    invalidLayoutData: "Nieprawid\u0142owe dane strony w schowku.",
    layoutPasted: "Wklejono dane strony i presety.",
    pasteLayoutFailed: "Nie uda\u0142o si\u0119 wklei\u0107 danych strony ze schowka.",
    layoutCopied: "Skopiowano dane strony do schowka.",
    makeVisible: "Uczy\u0144 widocznym",
    bringLayerUp: "Podnie\u015B warstw\u0119",
    sendLayerDown: "Opu\u015B\u0107 warstw\u0119",
    showHandlesOnHoverLabel: "Poka\u017C uchwyty po najechaniu",
    hideDetachButtonLabel: "Ukryj przycisk \u201EOdepnij\u201D",
    modalAnimationLabel: "Animacja okien modalnych",
    cloneRestoreDelayLabel: "Op\xF3\u017Anienie pojawiania si\u0119 klon\xF3w",
    noteRestoreDelayLabel: "Op\xF3\u017Anienie pojawiania si\u0119 okienek notatek",
    hideDelayLabel: "Op\xF3\u017Anienie ukrywania panelu",
    changeTextColor: "Zmie\u0144 kolor tekstu",
    cloneNearFile: "Klonuj obok pliku",
    addStroke: "Dodaj obrys",
    applyToHeader: "Zastosuj do nag\u0142\xF3wka",
    addLink: "Dodaj link",
    deleteSelected: "Usu\u0144 zaznaczone ({n})"
  },
  es: {
    cloneSettingsTitle: "Personalizar clones",
    animation: "Animaci\xF3n",
    removeBg: "Eliminar fondo",
    animationPopup: "Emergente",
    animationFade: "Fundido",
    backgroundOpacity: "Opacidad del fondo",
    controlsOpacity: "Opacidad del panel",
    showAudioHandles: "Mostrar asas de audio",
    presets: "Tama\xF1os",
    fit: "Ajustar al contenedor",
    natural: "Tama\xF1o natural",
    add: "A\xF1adir\u2026",
    addPresetTitle: "A\xF1adir preset de ancho \u2039px\u203A",
    placeholder: "p. ej., 820",
    ok: "OK",
    cancel: "Cancelar",
    invalid: "Valor no v\xE1lido",
    maxReached: "Se alcanz\xF3 el n\xFAmero m\xE1ximo de presets",
    added: "Preset {n} a\xF1adido",
    removed: "Preset {n} eliminado",
    openLocation: "Abrir ubicaci\xF3n del archivo",
    fileNotFound: "Archivo no encontrado en el vault",
    shellDenied: "Sin acceso a shell",
    localOnly: "Disponible solo para vaults locales",
    restorePos: "Restaurar posici\xF3n original",
    setSize: "Establecer tama\xF1o\u2026",
    width: "Ancho",
    height: "Alto",
    keepAR: "Mantener proporci\xF3n",
    sbReady: "ML \u2022 listo",
    sbTitle: "Media Layout: clic para reescanear",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 complemento activo",
    posPresets: "Guardar posiciones de clones",
    resetAll: "Restablecer todo",
    saveLayout: "Guardar preset",
    layoutMax: "Se alcanz\xF3 el n\xFAmero m\xE1ximo de presets",
    saved: "Guardado",
    layoutN: "Preset {n}",
    renameTitle: "Introduce un nombre",
    addNote: "A\xF1adir tabla/nota",
    copyLayout: "Copiar datos de la p\xE1gina",
    pasteLayout: "Pegar datos de la p\xE1gina",
    deleteNote: "Eliminar tabla/nota",
    detach: "Desanclar",
    bgColor: "Cambiar color de fondo",
    duplicate: "Duplicar",
    reset: "Restablecer",
    deleteClone: "Eliminar",
    lock: "Bloquear",
    unlock: "Desbloquear",
    localOnlyCheckboxLabel: "Solo para este archivo",
    makeInvisible: "Hacer invisible",
    invalidLayoutData: "Datos de p\xE1gina no v\xE1lidos en el portapapeles.",
    layoutPasted: "Se pegaron los datos y presets de la p\xE1gina.",
    pasteLayoutFailed: "No se pudieron pegar los datos de la p\xE1gina desde el portapapeles.",
    layoutCopied: "Datos de la p\xE1gina copiados al portapapeles.",
    makeVisible: "Hacer visible",
    bringLayerUp: "Subir capa",
    sendLayerDown: "Bajar capa",
    showHandlesOnHoverLabel: "Mostrar tiradores al pasar el cursor",
    hideDetachButtonLabel: "Ocultar el bot\xF3n \xABDesanclar\xBB",
    modalAnimationLabel: "Animaci\xF3n de la ventana modal",
    cloneRestoreDelayLabel: "Retraso en la aparici\xF3n de los clones",
    noteRestoreDelayLabel: "Retraso en la aparici\xF3n de los cuadros de notas",
    hideDelayLabel: "Retraso al ocultar el panel",
    changeTextColor: "Cambiar color del texto",
    cloneNearFile: "Clonar junto al archivo",
    addStroke: "A\xF1adir contorno",
    applyToHeader: "Aplicar al encabezado",
    addLink: "A\xF1adir enlace",
    deleteSelected: "Eliminar seleccionados ({n})"
  },
  fr: {
    cloneSettingsTitle: "Personnalisation des clones",
    removeBg: "Supprimer l\u2019arri\xE8re-plan",
    animation: "Animation",
    animationPopup: "Popup",
    animationFade: "Fondu",
    backgroundOpacity: "Opacit\xE9 du fond",
    controlsOpacity: "Opacit\xE9 du panneau",
    showAudioHandles: "Afficher les poign\xE9es audio",
    presets: "Tailles",
    fit: "Ajuster au conteneur",
    natural: "Taille naturelle",
    add: "Ajouter\u2026",
    addPresetTitle: "Ajouter un preset de largeur \u2039px\u203A",
    placeholder: "ex. : 820",
    ok: "OK",
    cancel: "Annuler",
    invalid: "Valeur invalide",
    maxReached: "Nombre maximal de presets atteint",
    added: "Preset {n} ajout\xE9",
    removed: "Preset {n} supprim\xE9",
    openLocation: "Ouvrir l\u2019emplacement du fichier",
    fileNotFound: "Fichier introuvable dans le vault",
    shellDenied: "Acc\xE8s au shell refus\xE9",
    localOnly: "Disponible uniquement pour les vaults locaux",
    restorePos: "Restaurer la position d\u2019origine",
    setSize: "D\xE9finir la taille\u2026",
    width: "Largeur",
    height: "Hauteur",
    keepAR: "Conserver le ratio",
    sbReady: "ML \u2022 pr\xEAt",
    sbTitle: "Media Layout : cliquer pour rescanner",
    cmdPing: "Media Layout : ping",
    pingOk: "ML : OK \u2014 plugin actif",
    posPresets: "Enregistrer les positions des clones",
    resetAll: "Tout r\xE9initialiser",
    saveLayout: "Enregistrer le preset",
    layoutMax: "Nombre maximal de presets atteint",
    saved: "Enregistr\xE9",
    layoutN: "Preset {n}",
    renameTitle: "Entrez un nom",
    addNote: "Ajouter un encart",
    copyLayout: "Copier les donn\xE9es de la page",
    pasteLayout: "Coller les donn\xE9es de la page",
    deleteNote: "Supprimer l\u2019encart",
    detach: "D\xE9tacher",
    bgColor: "Changer la couleur du fond",
    duplicate: "Dupliquer",
    reset: "R\xE9initialiser",
    deleteClone: "Supprimer le clone",
    lock: "Verrouiller",
    unlock: "D\xE9verrouiller",
    localOnlyCheckboxLabel: "Uniquement pour ce fichier",
    makeInvisible: "Rendre invisible",
    invalidLayoutData: "Donn\xE9es de page invalides dans le presse-papiers.",
    layoutPasted: "Donn\xE9es et presets de page coll\xE9s.",
    pasteLayoutFailed: "Impossible de coller les donn\xE9es de la page depuis le presse-papiers.",
    layoutCopied: "Donn\xE9es de page copi\xE9es dans le presse-papiers.",
    makeVisible: "Rendre visible",
    bringLayerUp: "Monter le calque",
    sendLayerDown: "Descendre le calque",
    showHandlesOnHoverLabel: "Afficher les poign\xE9es au survol",
    hideDetachButtonLabel: "Masquer le bouton \xAB D\xE9tacher \xBB",
    modalAnimationLabel: "Animation des fen\xEAtres modales",
    cloneRestoreDelayLabel: "D\xE9lai d\u2019apparition des clones",
    noteRestoreDelayLabel: "D\xE9lai d\u2019apparition des bo\xEEtes de notes",
    hideDelayLabel: "D\xE9lai avant masquage du panneau",
    changeTextColor: "Changer la couleur du texte",
    cloneNearFile: "Cloner \xE0 c\xF4t\xE9 du fichier",
    addStroke: "Ajouter un contour",
    applyToHeader: "Appliquer \xE0 l'en-t\xEAte",
    addLink: "Ajouter un lien",
    deleteSelected: "Supprimer les \xE9l\xE9ments s\xE9lectionn\xE9s ({n})"
  },
  it: {
    cloneSettingsTitle: "Personalizzazione cloni",
    removeBg: "Rimuovi sfondo",
    animation: "Animazione",
    animationPopup: "Popup",
    animationFade: "Dissolvenza",
    backgroundOpacity: "Opacit\xE0 sfondo",
    controlsOpacity: "Opacit\xE0 pannello",
    showAudioHandles: "Mostra maniglie audio",
    presets: "Dimensioni",
    fit: "Adatta al contenitore",
    natural: "Dimensione naturale",
    add: "Aggiungi\u2026",
    addPresetTitle: "Aggiungi preset larghezza \u2039px\u203A",
    placeholder: "es. 820",
    ok: "OK",
    cancel: "Annulla",
    invalid: "Valore non valido",
    maxReached: "Numero massimo di preset raggiunto",
    added: "Preset {n} aggiunto",
    removed: "Preset {n} rimosso",
    openLocation: "Apri posizione del file",
    fileNotFound: "File non trovato nel vault",
    shellDenied: "Nessun accesso alla shell",
    localOnly: "Disponibile solo per vault locali",
    restorePos: "Ripristina posizione iniziale",
    setSize: "Imposta dimensione\u2026",
    width: "Larghezza",
    height: "Altezza",
    keepAR: "Mantieni proporzioni",
    sbReady: "ML \u2022 pronto",
    sbTitle: "Media Layout: clic per ripetere la scansione",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 plugin attivo",
    posPresets: "Salva posizioni dei cloni",
    resetAll: "Reimposta tutto",
    saveLayout: "Salva preset",
    layoutMax: "Numero massimo di preset raggiunto",
    saved: "Salvato",
    layoutN: "Preset {n}",
    renameTitle: "Inserisci un nome",
    addNote: "Aggiungi riquadro",
    copyLayout: "Copia dati della pagina",
    pasteLayout: "Incolla dati della pagina",
    deleteNote: "Elimina riquadro",
    detach: "Stacca",
    bgColor: "Cambia colore sfondo",
    duplicate: "Duplica",
    reset: "Reset",
    deleteClone: "Elimina",
    lock: "Blocca",
    unlock: "Sblocca",
    localOnlyCheckboxLabel: "Solo per questo file",
    makeInvisible: "Rendi invisibile",
    invalidLayoutData: "Dati pagina non validi negli appunti.",
    layoutPasted: "Dati e preset della pagina incollati.",
    pasteLayoutFailed: "Impossibile incollare i dati della pagina dagli appunti.",
    layoutCopied: "Dati della pagina copiati negli appunti.",
    makeVisible: "Rendi visibile",
    bringLayerUp: "Porta livello in alto",
    sendLayerDown: "Manda livello in basso",
    showHandlesOnHoverLabel: "Mostra le maniglie al passaggio del mouse",
    hideDetachButtonLabel: "Nascondi il pulsante \xABSgancia\xBB",
    modalAnimationLabel: "Animazione delle finestre modali",
    cloneRestoreDelayLabel: "Ritardo nella comparsa dei cloni",
    noteRestoreDelayLabel: "Ritardo nella comparsa dei riquadri nota",
    hideDelayLabel: "Ritardo nel nascondere il pannello",
    changeTextColor: "Cambia colore del testo",
    cloneNearFile: "Clona accanto al file",
    addStroke: "Aggiungi contorno",
    applyToHeader: "Applica all'intestazione",
    addLink: "Aggiungi link",
    deleteSelected: "Elimina selezionati ({n})"
  },
  be: {
    cloneSettingsTitle: "\u041D\u0430\u043B\u0430\u0434\u043A\u0430 \u043A\u043B\u043E\u043D\u0430\u045E",
    removeBg: "\u0412\u044B\u0434\u0430\u043B\u0456\u0446\u044C \u0444\u043E\u043D",
    animation: "\u0410\u043D\u0456\u043C\u0430\u0446\u044B\u044F",
    animationPopup: "\u041F\u0430\u043F\u0430\u043F",
    animationFade: "\u0417\u2019\u044F\u045E\u043B\u0435\u043D\u043D\u0435",
    backgroundOpacity: "\u041F\u0440\u0430\u0437\u0440\u044B\u0441\u0442\u0430\u0441\u0446\u044C \u0444\u043E\u043D\u0443",
    controlsOpacity: "\u041F\u0440\u0430\u0437\u0440\u044B\u0441\u0442\u0430\u0441\u0446\u044C \u043F\u0430\u043D\u044D\u043B\u0456",
    showAudioHandles: "\u041F\u0430\u043A\u0430\u0437\u0432\u0430\u0446\u044C \u0440\u0443\u0447\u043A\u0456 \u0430\u045E\u0434\u044B\u0451",
    presets: "\u041F\u0430\u043C\u0435\u0440\u044B",
    fit: "\u041F\u0430\u0434\u0430\u0433\u043D\u0430\u0446\u044C \u0434\u0430 \u043A\u0430\u043D\u0442\u044D\u0439\u043D\u0435\u0440\u0430",
    natural: "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B \u043F\u0430\u043C\u0435\u0440",
    add: "\u0414\u0430\u0434\u0430\u0446\u044C\u2026",
    addPresetTitle: "\u0414\u0430\u0434\u0430\u0446\u044C \u043F\u0440\u044D\u0441\u0435\u0442 \u0448\u044B\u0440\u044B\u043D\u0456 \u2039px\u203A",
    placeholder: "\u043D\u0430\u043F\u0440\u044B\u043A\u043B\u0430\u0434: 820",
    ok: "OK",
    cancel: "\u0421\u043A\u0430\u0441\u0430\u0432\u0430\u0446\u044C",
    invalid: "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435",
    maxReached: "\u0414\u0430\u0441\u0442\u0456\u0433\u043D\u0443\u0442\u044B \u043C\u0430\u043A\u0441\u0456\u043C\u0430\u043B\u044C\u043D\u044B \u043B\u0456\u043A \u043F\u0440\u044D\u0441\u0435\u0442\u0430\u045E",
    added: "\u0414\u0430\u0434\u0430\u0434\u0437\u0435\u043D\u044B \u043F\u0440\u044D\u0441\u0435\u0442 {n}",
    removed: "\u0412\u044B\u0434\u0430\u043B\u0435\u043D\u044B \u043F\u0440\u044D\u0441\u0435\u0442 {n}",
    openLocation: "\u0410\u0434\u043A\u0440\u044B\u0446\u044C \u0440\u0430\u0437\u043C\u044F\u0448\u0447\u044D\u043D\u043D\u0435 \u0444\u0430\u0439\u043B\u0430",
    fileNotFound: "\u0424\u0430\u0439\u043B \u0443 \u0441\u0445\u043E\u0432\u0456\u0448\u0447\u044B (vault) \u043D\u0435 \u0437\u043D\u043E\u0439\u0434\u0437\u0435\u043D\u044B",
    shellDenied: "\u041D\u044F\u043C\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u0430 shell",
    localOnly: "\u0414\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u0456 \u0434\u043B\u044F \u043B\u0430\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0445\u043E\u0432\u0456\u0448\u0447\u0430\u045E",
    restorePos: "\u0412\u044F\u0440\u043D\u0443\u0446\u044C \u043F\u0430\u0447\u0430\u0442\u043A\u043E\u0432\u0430\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u0456\u0448\u0447\u0430",
    setSize: "\u0417\u0430\u0434\u0430\u0446\u044C \u043F\u0430\u043C\u0435\u0440\u2026",
    width: "\u0428\u044B\u0440\u044B\u043D\u044F",
    height: "\u0412\u044B\u0448\u044B\u043D\u044F",
    keepAR: "\u0417\u0430\u0445\u043E\u045E\u0432\u0430\u0446\u044C \u043F\u0440\u0430\u043F\u043E\u0440\u0446\u044B\u0456",
    sbReady: "ML \u2022 \u0433\u0430\u0442\u043E\u0432\u0430",
    sbTitle: "Media Layout: \u043A\u043B\u0456\u043A \u2014 \u043F\u0435\u0440\u0430\u0441\u043A\u0430\u043D\u0430\u0432\u0430\u0446\u044C",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 \u0443\u0431\u0443\u0434\u043E\u0432\u0430 \u0430\u043A\u0442\u044B\u045E\u043D\u0430\u044F",
    posPresets: "\u0417\u0430\u0445\u0430\u0432\u0430\u0446\u044C \u0441\u0442\u0430\u043D\u043E\u0432\u0456\u0448\u0447\u044B \u043A\u043B\u043E\u043D\u0430\u045E",
    resetAll: "\u0421\u043A\u0456\u0434 \u0443\u0441\u0456\u0445 \u043D\u0430\u043B\u0430\u0434",
    saveLayout: "\u0417\u0430\u0445\u0430\u0432\u0430\u0446\u044C \u043F\u0440\u044D\u0441\u0435\u0442",
    layoutMax: "\u0414\u0430\u0441\u0442\u0456\u0433\u043D\u0443\u0442\u044B \u043C\u0430\u043A\u0441\u0456\u043C\u0430\u043B\u044C\u043D\u044B \u043B\u0456\u043A \u043F\u0440\u044D\u0441\u0435\u0442\u0430\u045E",
    saved: "\u0417\u0430\u0445\u0430\u0432\u0430\u043D\u0430",
    layoutN: "\u041F\u0440\u044D\u0441\u0435\u0442 {n}",
    renameTitle: "\u0423\u0432\u044F\u0434\u0437\u0456\u0446\u0435 \u043D\u0430\u0437\u0432\u0443",
    addNote: "\u0414\u0430\u0434\u0430\u0446\u044C \u0442\u0430\u0431\u043B\u0456\u0447\u043A\u0443",
    copyLayout: "\u0421\u043A\u0430\u043F\u0456\u0440\u0430\u0432\u0430\u0446\u044C \u0434\u0430\u0434\u0437\u0435\u043D\u044B\u044F \u0441\u0442\u0430\u0440\u043E\u043D\u043A\u0456",
    pasteLayout: "\u0423\u0441\u0442\u0430\u0432\u0456\u0446\u044C \u0434\u0430\u0434\u0437\u0435\u043D\u044B\u044F \u0441\u0442\u0430\u0440\u043E\u043D\u043A\u0456",
    deleteNote: "\u0412\u044B\u0434\u0430\u043B\u0456\u0446\u044C \u0442\u0430\u0431\u043B\u0456\u0447\u043A\u0443",
    detach: "\u0410\u0434\u0447\u0430\u043F\u0456\u0446\u044C",
    bgColor: "\u0417\u043C\u044F\u043D\u0456\u0446\u044C \u043A\u043E\u043B\u0435\u0440 \u0444\u043E\u043D\u0443",
    duplicate: "\u0414\u0443\u0431\u043B\u044F\u0432\u0430\u0446\u044C",
    reset: "\u0421\u043A\u0456\u0434",
    deleteClone: "\u0412\u044B\u0434\u0430\u043B\u0456\u0446\u044C",
    lock: "\u0417\u0430\u0444\u0456\u043A\u0441\u0430\u0432\u0430\u0446\u044C",
    unlock: "\u0420\u0430\u0437\u0431\u043B\u0430\u043A\u0456\u0440\u0430\u0432\u0430\u0446\u044C",
    localOnlyCheckboxLabel: "\u0422\u043E\u043B\u044C\u043A\u0456 \u0434\u043B\u044F \u0433\u044D\u0442\u0430\u0433\u0430 \u0444\u0430\u0439\u043B\u0430",
    makeInvisible: "\u0417\u0440\u0430\u0431\u0456\u0446\u044C \u043D\u044F\u0431\u0430\u0447\u043D\u044B\u043C",
    invalidLayoutData: "\u041D\u044F\u0441\u043B\u0443\u0448\u043D\u044B\u044F \u0434\u0430\u0434\u0437\u0435\u043D\u044B\u044F \u0441\u0442\u0430\u0440\u043E\u043D\u043A\u0456 \u045E \u0431\u0443\u0444\u0435\u0440\u044B \u0430\u0431\u043C\u0435\u043D\u0443.",
    layoutPasted: "\u0414\u0430\u0434\u0437\u0435\u043D\u044B\u044F \u0441\u0442\u0430\u0440\u043E\u043D\u043A\u0456 \u0456 \u043F\u0440\u044D\u0441\u0435\u0442\u044B \u045E\u0441\u0442\u0430\u045E\u043B\u0435\u043D\u044B.",
    pasteLayoutFailed: "\u041D\u0435 \u045E\u0434\u0430\u043B\u043E\u0441\u044F \u045E\u0441\u0442\u0430\u0432\u0456\u0446\u044C \u0434\u0430\u0434\u0437\u0435\u043D\u044B\u044F \u0441\u0442\u0430\u0440\u043E\u043D\u043A\u0456 \u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0430\u0431\u043C\u0435\u043D\u0443.",
    layoutCopied: "\u0414\u0430\u0434\u0437\u0435\u043D\u044B\u044F \u0441\u0442\u0430\u0440\u043E\u043D\u043A\u0456 \u0441\u043A\u0430\u043F\u0456\u0440\u0430\u0432\u0430\u043D\u044B \u045E \u0431\u0443\u0444\u0435\u0440 \u0430\u0431\u043C\u0435\u043D\u0443.",
    makeVisible: "\u0417\u0440\u0430\u0431\u0456\u0446\u044C \u0431\u0430\u0447\u043D\u044B\u043C",
    bringLayerUp: "\u041F\u0430\u0434\u043D\u044F\u0446\u044C \u0441\u043B\u043E\u0439",
    sendLayerDown: "\u0410\u043F\u0443\u0441\u0446\u0456\u0446\u044C \u0441\u043B\u043E\u0439",
    showHandlesOnHoverLabel: "\u041F\u0430\u043A\u0430\u0437\u0432\u0430\u0446\u044C \u0440\u0443\u0447\u043A\u0456 \u043F\u0440\u044B \u043D\u0430\u0432\u044F\u0434\u0437\u0435\u043D\u043D\u0456 \u043A\u0443\u0440\u0441\u043E\u0440\u0430",
    hideDetachButtonLabel: "\u0421\u0445\u0430\u0432\u0430\u0446\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0430\u0434\u043C\u0430\u0446\u0430\u0432\u0430\u0446\u044C\xBB",
    modalAnimationLabel: "\u0410\u043D\u0456\u043C\u0430\u0446\u044B\u044F \u043C\u0430\u0434\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u043E\u043A\u043D\u0430\u045E",
    cloneRestoreDelayLabel: "\u0417\u0430\u0442\u0440\u044B\u043C\u043A\u0430 \u0437\u2019\u044F\u045E\u043B\u0435\u043D\u043D\u044F \u043A\u043B\u043E\u043D\u0430\u045E",
    noteRestoreDelayLabel: "\u0417\u0430\u0442\u0440\u044B\u043C\u043A\u0430 \u0437\u2019\u044F\u045E\u043B\u0435\u043D\u043D\u044F \u0431\u043B\u043E\u043A\u0430\u045E \u043D\u0430\u0442\u0430\u0442\u0430\u043A",
    hideDelayLabel: "\u0417\u0430\u0442\u0440\u044B\u043C\u043A\u0430 \u0441\u043A\u0440\u044B\u0446\u0446\u044F \u043F\u0430\u043D\u044D\u043B\u0456",
    changeTextColor: "\u0417\u043C\u044F\u043D\u0456\u0446\u044C \u043A\u043E\u043B\u0435\u0440 \u0442\u044D\u043A\u0441\u0442\u0443",
    cloneNearFile: "\u041A\u043B\u0430\u043D\u0456\u0440\u0430\u0432\u0430\u0446\u044C \u043F\u043E\u0431\u0430\u0447 \u0437 \u0444\u0430\u0439\u043B\u0430\u043C",
    addStroke: "\u0414\u0430\u0434\u0430\u0446\u044C \u0430\u0431\u0432\u043E\u0434\u043A\u0443",
    applyToHeader: "\u041F\u0440\u044B\u043C\u044F\u043D\u0456\u0446\u044C \u0434\u043B\u044F \u0448\u0430\u043F\u043A\u0456",
    addLink: "\u0414\u0430\u0434\u0430\u0446\u044C \u0441\u043F\u0430\u0441\u044B\u043B\u043A\u0443",
    deleteSelected: "\u0412\u044B\u0434\u0430\u043B\u0456\u0446\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u044B\u044F ({n})"
  },
  uk: {
    cloneSettingsTitle: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043B\u043E\u043D\u0456\u0432",
    removeBg: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0442\u043B\u043E",
    animation: "\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F",
    animationPopup: "\u0421\u043F\u043B\u0438\u0432\u0430\u044E\u0447\u0430",
    animationFade: "\u041F\u043E\u0441\u0442\u0443\u043F\u043E\u0432\u0430",
    backgroundOpacity: "\u041F\u0440\u043E\u0437\u043E\u0440\u0456\u0441\u0442\u044C \u0444\u043E\u043D\u0443",
    controlsOpacity: "\u041F\u0440\u043E\u0437\u043E\u0440\u0456\u0441\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u0456",
    showAudioHandles: "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u0443\u0447\u043A\u0438 \u0443 \u0430\u0443\u0434\u0456\u043E",
    presets: "\u0420\u043E\u0437\u043C\u0456\u0440\u0438",
    fit: "\u041F\u0456\u0434\u0456\u0433\u043D\u0430\u0442\u0438 \u043F\u0456\u0434 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440",
    natural: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440",
    add: "\u0414\u043E\u0434\u0430\u0442\u0438\u2026",
    addPresetTitle: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0435\u0441\u0435\u0442 \u0448\u0438\u0440\u0438\u043D\u0438 \u2039px\u203A",
    placeholder: "\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: 820",
    ok: "OK",
    cancel: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
    invalid: "\u041D\u0435\u0432\u0456\u0440\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
    maxReached: "\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043F\u0440\u0435\u0441\u0435\u0442\u0456\u0432",
    added: "\u0414\u043E\u0434\u0430\u043D\u043E \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    removed: "\u0412\u0438\u043B\u0443\u0447\u0435\u043D\u043E \u043F\u0440\u0435\u0441\u0435\u0442 {n}",
    openLocation: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0440\u043E\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0443",
    fileNotFound: "\u0424\u0430\u0439\u043B \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0443 \u0441\u0445\u043E\u0432\u0438\u0449\u0456 (vault)",
    shellDenied: "\u041D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E shell",
    localOnly: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0445 \u0441\u0445\u043E\u0432\u0438\u0449",
    restorePos: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F",
    setSize: "\u0417\u0430\u0434\u0430\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440\u2026",
    width: "\u0428\u0438\u0440\u0438\u043D\u0430",
    height: "\u0412\u0438\u0441\u043E\u0442\u0430",
    keepAR: "\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0456\u0457",
    sbReady: "ML \u2022 \u0433\u043E\u0442\u043E\u0432\u043E",
    sbTitle: "Media Layout: \u043A\u043B\u0456\u043A \u2014 \u043F\u0435\u0440\u0435\u0441\u043A\u0430\u043D\u0443\u0432\u0430\u0442\u0438",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 \u043F\u043B\u0430\u0433\u0456\u043D \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439",
    posPresets: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043A\u043B\u043E\u043D\u0456\u0432",
    resetAll: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0441\u0435",
    saveLayout: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043F\u0440\u0435\u0441\u0435\u0442",
    layoutMax: "\u0414\u043E\u0441\u044F\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043F\u0440\u0435\u0441\u0435\u0442\u0456\u0432",
    saved: "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E",
    layoutN: "\u041F\u0440\u0435\u0441\u0435\u0442 {n}",
    renameTitle: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443",
    addNote: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u0443",
    copyLayout: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0434\u0430\u043D\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
    pasteLayout: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0434\u0430\u043D\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
    deleteNote: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u0443",
    detach: "\u0412\u0456\u0434\u0447\u0435\u043F\u0438\u0442\u0438",
    bgColor: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440 \u0444\u043E\u043D\u0443",
    duplicate: "\u0414\u0443\u0431\u043B\u044E\u0432\u0430\u0442\u0438",
    reset: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438",
    deleteClone: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    lock: "\u0417\u0430\u043A\u0440\u0456\u043F\u0438\u0442\u0438",
    unlock: "\u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438",
    localOnlyCheckboxLabel: "\u041B\u0438\u0448\u0435 \u0434\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0443",
    makeInvisible: "\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u043D\u0435\u0432\u0438\u0434\u0438\u043C\u0438\u043C",
    invalidLayoutData: "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u0432 \u0431\u0443\u0444\u0435\u0440\u0456 \u043E\u0431\u043C\u0456\u043D\u0443.",
    layoutPasted: "\u0414\u0430\u043D\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u0442\u0430 \u043F\u0440\u0435\u0441\u0435\u0442\u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E.",
    pasteLayoutFailed: "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0434\u0430\u043D\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0456\u043D\u0443.",
    layoutCopied: "\u0414\u0430\u043D\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443.",
    makeVisible: "\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0438\u0434\u0438\u043C\u0438\u043C",
    bringLayerUp: "\u041F\u0456\u0434\u043D\u044F\u0442\u0438 \u0448\u0430\u0440",
    sendLayerDown: "\u041E\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0448\u0430\u0440",
    showHandlesOnHoverLabel: "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u0443\u0447\u043A\u0438 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u043D\u044F",
    hideDetachButtonLabel: "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u0432\u0456\u0434\u043A\u0440\u0456\u043F\u0438\u0442\u0438\xBB",
    modalAnimationLabel: "\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u0438\u0445 \u0432\u0456\u043A\u043E\u043D",
    cloneRestoreDelayLabel: "\u0417\u0430\u0442\u0440\u0438\u043C\u043A\u0430 \u043F\u043E\u044F\u0432\u0438 \u043A\u043B\u043E\u043D\u0456\u0432",
    noteRestoreDelayLabel: "\u0417\u0430\u0442\u0440\u0438\u043C\u043A\u0430 \u043F\u043E\u044F\u0432\u0438 \u0431\u043B\u043E\u043A\u0456\u0432 \u043D\u043E\u0442\u0430\u0442\u043E\u043A",
    hideDelayLabel: "\u0417\u0430\u0442\u0440\u0438\u043C\u043A\u0430 \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0430\u043D\u0435\u043B\u0456",
    changeTextColor: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440 \u0442\u0435\u043A\u0441\u0442\u0443",
    cloneNearFile: "\u041A\u043B\u043E\u043D\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0440\u0443\u0447 \u0456\u0437 \u0444\u0430\u0439\u043B\u043E\u043C",
    addStroke: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043E\u0431\u0432\u0435\u0434\u0435\u043D\u043D\u044F",
    applyToHeader: "\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438 \u0434\u043E \u0448\u0430\u043F\u043A\u0438",
    addLink: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
    deleteSelected: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0438\u0431\u0440\u0430\u043D\u0456 ({n})"
  },
  uz: {
    cloneSettingsTitle: "Klon sozlamalari",
    removeBg: "Fonni olib tashlash",
    animation: "Animatsiya",
    animationPopup: "Popup",
    animationFade: "So\u2018nish",
    backgroundOpacity: "Fon shaffofligi",
    controlsOpacity: "Panel shaffofligi",
    showAudioHandles: "Audio qo\u2018llarini ko\u2018rsatish",
    presets: "O\u2018lchamlar",
    fit: "Konteynerga moslashtir",
    natural: "Tabiiy o\u2018lcham",
    add: "Qo\u2018shish\u2026",
    addPresetTitle: "Kenglik preseti qo\u2018shish \u2039px\u203A",
    placeholder: "masalan: 820",
    ok: "OK",
    cancel: "Bekor qilish",
    invalid: "Noto\u2018g\u2018ri qiymat",
    maxReached: "Presetlar sonining chegarasi",
    added: "Preset {n} qo\u2018shildi",
    removed: "Preset {n} o\u2018chirildi",
    openLocation: "Fayl joyini ochish",
    fileNotFound: "Fayl vault ichida topilmadi",
    shellDenied: "Shell\u2019ga ruxsat yo\u2018q",
    localOnly: "Faqat lokal vaultlar uchun",
    restorePos: "Boshlang\u2018ich joyni tiklash",
    setSize: "O\u2018lchamni o\u2018rnatish\u2026",
    width: "Kenglik",
    height: "Balandlik",
    keepAR: "Nisbatni saqlash",
    sbReady: "ML \u2022 tayyor",
    sbTitle: "Media Layout: qayta skan qilish uchun bosing",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 plagin faol",
    posPresets: "Klon joylashuvlarini saqlash",
    resetAll: "Hammasini tiklash",
    saveLayout: "Presetni saqlash",
    layoutMax: "Presetlar sonining chegarasi",
    saved: "Saqlandi",
    layoutN: "Preset {n}",
    renameTitle: "Nom kiriting",
    addNote: "Yorliq qo\u2018shish",
    copyLayout: "Sahifa ma\u2019lumotlarini nusxalash",
    pasteLayout: "Sahifa ma\u2019lumotlarini joylash",
    deleteNote: "Yorliqni o\u2018chirish",
    detach: "Ajratish",
    bgColor: "Fon rangini o\u2018zgartirish",
    duplicate: "Nusxa olish",
    reset: "Qayta o\u2018rnatish",
    deleteClone: "Klonni o\u2018chirish",
    lock: "Qulflash",
    unlock: "Qulfni ochish",
    localOnlyCheckboxLabel: "Faqat ushbu fayl uchun",
    makeInvisible: "Ko\u2018rinmas qilish",
    invalidLayoutData: "Buferdagi sahifa ma\u2019lumotlari noto\u2018g\u2018ri.",
    layoutPasted: "Sahifa ma\u2019lumotlari va presetlar joylandi.",
    pasteLayoutFailed: "Sahifa ma\u2019lumotlarini buferdan joylab bo\u2018lmadi.",
    layoutCopied: "Sahifa ma\u2019lumotlari buferga nusxalandi.",
    makeVisible: "Ko\u2018rinadigan qilish",
    bringLayerUp: "Qatlamni yuqoriga",
    sendLayerDown: "Qatlamni pastga",
    showHandlesOnHoverLabel: "Kursorni olib o\u2018tganda tutqichlarni ko\u2018rsatish",
    hideDetachButtonLabel: "\u201CBiriktirishni yechish\u201D tugmasini yashirish",
    modalAnimationLabel: "Modal oynalar animatsiyasi",
    cloneRestoreDelayLabel: "Klonlarning paydo bo\u2018lish kechikishi",
    noteRestoreDelayLabel: "Eslatma bloklarining paydo bo\u2018lish kechikishi",
    hideDelayLabel: "Panelni yashirish kechikishi",
    changeTextColor: "Matn rangini o'zgartirish",
    cloneNearFile: "Fayl yoniga klon yaratish",
    addStroke: "Chiziq qo'shish",
    applyToHeader: "Sarlavhaga qo'llash",
    addLink: "Havola qo\u02BBshish",
    deleteSelected: "Tanlanganlarni o\u02BBchirish ({n})"
  },
  vi: {
    cloneSettingsTitle: "T\xF9y ch\u1EC9nh b\u1EA3n sao",
    removeBg: "X\xF3a n\u1EC1n",
    animation: "Hi\u1EC7u \u1EE9ng",
    animationPopup: "Popup",
    animationFade: "M\u1EDD d\u1EA7n",
    backgroundOpacity: "\u0110\u1ED9 m\u1EDD n\u1EC1n",
    controlsOpacity: "\u0110\u1ED9 m\u1EDD b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n",
    showAudioHandles: "Hi\u1EC7n tay n\u1EAFm audio",
    presets: "K\xEDch th\u01B0\u1EDBc",
    fit: "V\u1EEBa v\u1EDBi khung",
    natural: "K\xEDch th\u01B0\u1EDBc g\u1ED1c",
    add: "Th\xEAm\u2026",
    addPresetTitle: "Th\xEAm preset chi\u1EC1u r\u1ED9ng \u2039px\u203A",
    placeholder: "vd: 820",
    ok: "OK",
    cancel: "Hu\u1EF7",
    invalid: "Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7",
    maxReached: "\u0110\xE3 \u0111\u1EA1t s\u1ED1 l\u01B0\u1EE3ng preset t\u1ED1i \u0111a",
    added: "\u0110\xE3 th\xEAm preset {n}",
    removed: "\u0110\xE3 xo\xE1 preset {n}",
    openLocation: "M\u1EDF v\u1ECB tr\xED t\u1EC7p",
    fileNotFound: "Kh\xF4ng t\xECm th\u1EA5y t\u1EC7p trong vault",
    shellDenied: "Kh\xF4ng c\xF3 quy\u1EC1n shell",
    localOnly: "Ch\u1EC9 d\xF9ng cho vault c\u1EE5c b\u1ED9",
    restorePos: "Kh\xF4i ph\u1EE5c v\u1ECB tr\xED g\u1ED1c",
    setSize: "\u0110\u1EB7t k\xEDch th\u01B0\u1EDBc\u2026",
    width: "R\u1ED9ng",
    height: "Cao",
    keepAR: "Gi\u1EEF t\u1EC9 l\u1EC7",
    sbReady: "ML \u2022 s\u1EB5n s\xE0ng",
    sbTitle: "Media Layout: nh\u1EA5p \u0111\u1EC3 qu\xE9t l\u1EA1i",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK \u2014 plugin ho\u1EA1t \u0111\u1ED9ng",
    posPresets: "L\u01B0u v\u1ECB tr\xED c\u1EE7a c\xE1c b\u1EA3n sao",
    resetAll: "\u0110\u1EB7t l\u1EA1i t\u1EA5t c\u1EA3",
    saveLayout: "L\u01B0u preset",
    layoutMax: "\u0110\xE3 \u0111\u1EA1t s\u1ED1 l\u01B0\u1EE3ng preset t\u1ED1i \u0111a",
    saved: "\u0110\xE3 l\u01B0u",
    layoutN: "Preset {n}",
    renameTitle: "Nh\u1EADp t\xEAn",
    addNote: "Th\xEAm h\u1ED9p ghi ch\xFA",
    copyLayout: "Sao ch\xE9p d\u1EEF li\u1EC7u trang",
    pasteLayout: "D\xE1n d\u1EEF li\u1EC7u trang",
    deleteNote: "Xo\xE1 h\u1ED9p ghi ch\xFA",
    detach: "T\xE1ch ra",
    bgColor: "\u0110\u1ED5i m\xE0u n\u1EC1n",
    duplicate: "Nh\xE2n b\u1EA3n",
    reset: "\u0110\u1EB7t l\u1EA1i",
    deleteClone: "Xo\xE1",
    lock: "Kho\xE1",
    unlock: "M\u1EDF kho\xE1",
    localOnlyCheckboxLabel: "Ch\u1EC9 cho t\u1EC7p n\xE0y",
    makeInvisible: "\u1EA8n \u0111i",
    invalidLayoutData: "D\u1EEF li\u1EC7u trang trong clipboard kh\xF4ng h\u1EE3p l\u1EC7.",
    layoutPasted: "\u0110\xE3 d\xE1n d\u1EEF li\u1EC7u v\xE0 preset c\u1EE7a trang.",
    pasteLayoutFailed: "Kh\xF4ng th\u1EC3 d\xE1n d\u1EEF li\u1EC7u trang t\u1EEB clipboard.",
    layoutCopied: "\u0110\xE3 sao ch\xE9p d\u1EEF li\u1EC7u trang v\xE0o clipboard.",
    makeVisible: "Hi\u1EC7n l\xEAn",
    bringLayerUp: "\u0110\u01B0a l\u1EDBp l\xEAn",
    sendLayerDown: "\u0110\u01B0a l\u1EDBp xu\u1ED1ng",
    showHandlesOnHoverLabel: "Hi\u1EC7n tay c\u1EA7m khi r\xEA chu\u1ED9t",
    hideDetachButtonLabel: "\u1EA8n n\xFAt \u201CG\u1EE1 ghim\u201D",
    modalAnimationLabel: "Hi\u1EC7u \u1EE9ng cho c\u1EEDa s\u1ED5 modal",
    cloneRestoreDelayLabel: "\u0110\u1ED9 tr\u1EC5 xu\u1EA5t hi\u1EC7n c\u1EE7a b\u1EA3n sao",
    noteRestoreDelayLabel: "\u0110\u1ED9 tr\u1EC5 xu\u1EA5t hi\u1EC7n c\u1EE7a h\u1ED9p ghi ch\xFA",
    hideDelayLabel: "\u0110\u1ED9 tr\u1EC5 \u1EA9n b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n",
    changeTextColor: "\u0110\u1ED5i m\xE0u ch\u1EEF",
    cloneNearFile: "Nh\xE2n b\u1EA3n b\xEAn c\u1EA1nh t\u1EC7p",
    addStroke: "Th\xEAm vi\u1EC1n",
    applyToHeader: "\xC1p d\u1EE5ng cho ti\xEAu \u0111\u1EC1",
    addLink: "Th\xEAm li\xEAn k\u1EBFt",
    deleteSelected: "X\xF3a m\u1EE5c \u0111\xE3 ch\u1ECDn ({n})"
  },
  "zh-CN": {
    cloneSettingsTitle: "\u514B\u9686\u81EA\u5B9A\u4E49",
    removeBg: "\u79FB\u9664\u80CC\u666F",
    animation: "\u52A8\u753B",
    animationPopup: "\u5F39\u51FA",
    animationFade: "\u6DE1\u5165",
    backgroundOpacity: "\u80CC\u666F\u4E0D\u900F\u660E\u5EA6",
    controlsOpacity: "\u9762\u677F\u4E0D\u900F\u660E\u5EA6",
    showAudioHandles: "\u663E\u793A\u97F3\u9891\u624B\u67C4",
    presets: "\u5C3A\u5BF8",
    fit: "\u9002\u914D\u5BB9\u5668",
    natural: "\u539F\u59CB\u5C3A\u5BF8",
    add: "\u6DFB\u52A0\u2026",
    addPresetTitle: "\u6DFB\u52A0\u5BBD\u5EA6\u9884\u8BBE \u2039px\u203A",
    placeholder: "\u4F8B\u5982\uFF1A820",
    ok: "\u786E\u5B9A",
    cancel: "\u53D6\u6D88",
    invalid: "\u65E0\u6548\u7684\u503C",
    maxReached: "\u5DF2\u8FBE\u5230\u9884\u8BBE\u7684\u6700\u5927\u6570\u91CF",
    added: "\u5DF2\u6DFB\u52A0\u9884\u8BBE {n}",
    removed: "\u5DF2\u5220\u9664\u9884\u8BBE {n}",
    openLocation: "\u6253\u5F00\u6587\u4EF6\u4F4D\u7F6E",
    fileNotFound: "\u5728 Vault \u4E2D\u672A\u627E\u5230\u6587\u4EF6",
    shellDenied: "\u65E0\u6743\u8BBF\u95EE shell",
    localOnly: "\u4EC5\u9002\u7528\u4E8E\u672C\u5730 Vault",
    restorePos: "\u6062\u590D\u521D\u59CB\u4F4D\u7F6E",
    setSize: "\u8BBE\u7F6E\u5C3A\u5BF8\u2026",
    width: "\u5BBD\u5EA6",
    height: "\u9AD8\u5EA6",
    keepAR: "\u4FDD\u6301\u7EB5\u6A2A\u6BD4",
    sbReady: "ML \u2022 \u5C31\u7EEA",
    sbTitle: "Media Layout\uFF1A\u70B9\u51FB\u91CD\u65B0\u626B\u63CF",
    cmdPing: "Media Layout\uFF1Aping",
    pingOk: "ML\uFF1AOK \u2014 \u63D2\u4EF6\u5DF2\u6FC0\u6D3B",
    posPresets: "\u4FDD\u5B58\u514B\u9686\u7684\u4F4D\u7F6E",
    resetAll: "\u5168\u90E8\u91CD\u7F6E",
    saveLayout: "\u4FDD\u5B58\u9884\u8BBE",
    layoutMax: "\u5DF2\u8FBE\u5230\u9884\u8BBE\u7684\u6700\u5927\u6570\u91CF",
    saved: "\u5DF2\u4FDD\u5B58",
    layoutN: "\u9884\u8BBE {n}",
    renameTitle: "\u8F93\u5165\u540D\u79F0",
    addNote: "\u6DFB\u52A0\u6807\u6CE8\u6846",
    copyLayout: "\u590D\u5236\u9875\u9762\u6570\u636E",
    pasteLayout: "\u7C98\u8D34\u9875\u9762\u6570\u636E",
    deleteNote: "\u5220\u9664\u6807\u6CE8\u6846",
    detach: "\u5206\u79BB",
    bgColor: "\u66F4\u6539\u80CC\u666F\u989C\u8272",
    duplicate: "\u590D\u5236",
    reset: "\u91CD\u7F6E",
    deleteClone: "\u79FB\u8D70",
    lock: "\u9501\u5B9A",
    unlock: "\u89E3\u9501",
    localOnlyCheckboxLabel: "\u4EC5\u5BF9\u6B64\u6587\u4EF6",
    makeInvisible: "\u8BBE\u4E3A\u4E0D\u53EF\u89C1",
    invalidLayoutData: "\u526A\u8D34\u677F\u4E2D\u7684\u9875\u9762\u6570\u636E\u65E0\u6548\u3002",
    layoutPasted: "\u5DF2\u7C98\u8D34\u9875\u9762\u6570\u636E\u4E0E\u9884\u8BBE\u3002",
    pasteLayoutFailed: "\u65E0\u6CD5\u4ECE\u526A\u8D34\u677F\u7C98\u8D34\u9875\u9762\u6570\u636E\u3002",
    layoutCopied: "\u9875\u9762\u6570\u636E\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\u3002",
    makeVisible: "\u8BBE\u4E3A\u53EF\u89C1",
    bringLayerUp: "\u4E0A\u79FB\u56FE\u5C42",
    sendLayerDown: "\u4E0B\u79FB\u56FE\u5C42",
    showHandlesOnHoverLabel: "\u60AC\u505C\u65F6\u663E\u793A\u63A7\u5236\u624B\u67C4",
    hideDetachButtonLabel: "\u9690\u85CF\u201C\u53D6\u6D88\u56FA\u5B9A\u201D\u6309\u94AE",
    modalAnimationLabel: "\u6A21\u6001\u7A97\u53E3\u52A8\u753B",
    cloneRestoreDelayLabel: "\u514B\u9686\u663E\u793A\u5EF6\u8FDF",
    noteRestoreDelayLabel: "\u4FBF\u7B3A\u6846\u663E\u793A\u5EF6\u8FDF",
    hideDelayLabel: "\u9762\u677F\u9690\u85CF\u5EF6\u8FDF",
    changeTextColor: "\u66F4\u6539\u6587\u672C\u989C\u8272",
    cloneNearFile: "\u5728\u6587\u4EF6\u65C1\u8FB9\u514B\u9686",
    addStroke: "\u6DFB\u52A0\u63CF\u8FB9",
    applyToHeader: "\u5E94\u7528\u4E8E\u6807\u9898",
    addLink: "\u6DFB\u52A0\u94FE\u63A5",
    deleteSelected: "\u5220\u9664\u6240\u9009 ({n})"
  },
  "zh-TW": {
    cloneSettingsTitle: "\u8907\u88FD\u9805\u81EA\u8A02",
    removeBg: "\u79FB\u9664\u80CC\u666F",
    animation: "\u52D5\u756B",
    animationPopup: "\u5F48\u51FA",
    animationFade: "\u6DE1\u5165",
    backgroundOpacity: "\u80CC\u666F\u4E0D\u900F\u660E\u5EA6",
    controlsOpacity: "\u9762\u677F\u4E0D\u900F\u660E\u5EA6",
    showAudioHandles: "\u986F\u793A\u97F3\u8A0A\u63A7\u5236\u9EDE",
    presets: "\u5C3A\u5BF8",
    fit: "\u9069\u914D\u5BB9\u5668",
    natural: "\u539F\u59CB\u5C3A\u5BF8",
    add: "\u65B0\u589E\u2026",
    addPresetTitle: "\u65B0\u589E\u5BEC\u5EA6\u9810\u8A2D \u2039px\u203A",
    placeholder: "\u4F8B\u5982\uFF1A820",
    ok: "\u78BA\u5B9A",
    cancel: "\u53D6\u6D88",
    invalid: "\u7121\u6548\u7684\u503C",
    maxReached: "\u5DF2\u9054\u5230\u9810\u8A2D\u7684\u6700\u5927\u6578\u91CF",
    added: "\u5DF2\u65B0\u589E\u9810\u8A2D {n}",
    removed: "\u5DF2\u522A\u9664\u9810\u8A2D {n}",
    openLocation: "\u958B\u555F\u6A94\u6848\u4F4D\u7F6E",
    fileNotFound: "\u5728 Vault \u4E2D\u627E\u4E0D\u5230\u6A94\u6848",
    shellDenied: "\u7121\u6CD5\u5B58\u53D6 shell",
    localOnly: "\u50C5\u9069\u7528\u65BC\u672C\u6A5F Vault",
    restorePos: "\u9084\u539F\u521D\u59CB\u4F4D\u7F6E",
    setSize: "\u8A2D\u5B9A\u5C3A\u5BF8\u2026",
    width: "\u5BEC\u5EA6",
    height: "\u9AD8\u5EA6",
    keepAR: "\u4FDD\u6301\u9577\u5BEC\u6BD4",
    sbReady: "ML \u2022 \u5C31\u7DD2",
    sbTitle: "Media Layout\uFF1A\u9EDE\u64CA\u91CD\u65B0\u6383\u63CF",
    cmdPing: "Media Layout\uFF1Aping",
    pingOk: "ML\uFF1AOK \u2014 \u5916\u639B\u5DF2\u555F\u7528",
    posPresets: "\u4FDD\u5B58\u514B\u9686\u7684\u4F4D\u7F6E",
    resetAll: "\u5168\u90E8\u91CD\u8A2D",
    saveLayout: "\u5132\u5B58\u9810\u8A2D",
    layoutMax: "\u5DF2\u9054\u5230\u9810\u8A2D\u7684\u6700\u5927\u6578\u91CF",
    saved: "\u5DF2\u5132\u5B58",
    layoutN: "\u9810\u8A2D {n}",
    renameTitle: "\u8F38\u5165\u540D\u7A31",
    addNote: "\u65B0\u589E\u6A19\u8A3B\u6846",
    copyLayout: "\u8907\u88FD\u9801\u9762\u8CC7\u6599",
    pasteLayout: "\u8CBC\u4E0A\u9801\u9762\u8CC7\u6599",
    deleteNote: "\u522A\u9664\u6A19\u8A3B\u6846",
    detach: "\u5206\u96E2",
    bgColor: "\u8B8A\u66F4\u80CC\u666F\u984F\u8272",
    duplicate: "\u91CD\u88FD",
    reset: "\u91CD\u8A2D",
    deleteClone: "\u79FB\u8D70",
    lock: "\u9396\u5B9A",
    unlock: "\u89E3\u9664\u9396\u5B9A",
    localOnlyCheckboxLabel: "\u50C5\u6B64\u6A94\u6848",
    makeInvisible: "\u8A2D\u70BA\u4E0D\u53EF\u898B",
    invalidLayoutData: "\u526A\u8CBC\u7C3F\u4E2D\u7684\u9801\u9762\u8CC7\u6599\u7121\u6548\u3002",
    layoutPasted: "\u5DF2\u8CBC\u4E0A\u9801\u9762\u8CC7\u6599\u8207\u9810\u8A2D\u3002",
    pasteLayoutFailed: "\u7121\u6CD5\u5F9E\u526A\u8CBC\u7C3F\u8CBC\u4E0A\u9801\u9762\u8CC7\u6599\u3002",
    layoutCopied: "\u9801\u9762\u8CC7\u6599\u5DF2\u8907\u88FD\u5230\u526A\u8CBC\u7C3F\u3002",
    makeVisible: "\u8A2D\u70BA\u53EF\u898B",
    bringLayerUp: "\u4E0A\u79FB\u5716\u5C64",
    sendLayerDown: "\u4E0B\u79FB\u5716\u5C64",
    showHandlesOnHoverLabel: "\u6ED1\u9F20\u61F8\u505C\u6642\u986F\u793A\u63A7\u5236\u628A\u624B",
    hideDetachButtonLabel: "\u96B1\u85CF\u300C\u53D6\u6D88\u91D8\u9078\u300D\u6309\u9215",
    modalAnimationLabel: "\u6A21\u614B\u8996\u7A97\u52D5\u756B",
    cloneRestoreDelayLabel: "\u8907\u672C\u986F\u793A\u5EF6\u9072",
    noteRestoreDelayLabel: "\u5099\u8A3B\u65B9\u584A\u986F\u793A\u5EF6\u9072",
    hideDelayLabel: "\u9762\u677F\u96B1\u85CF\u5EF6\u9072",
    changeTextColor: "\u8B8A\u66F4\u6587\u5B57\u984F\u8272",
    cloneNearFile: "\u5728\u6A94\u6848\u65C1\u908A\u514B\u9686",
    addStroke: "\u65B0\u589E\u5916\u6846",
    applyToHeader: "\u5957\u7528\u5230\u6A19\u984C",
    addLink: "\u65B0\u589E\u9023\u7D50",
    deleteSelected: "\u522A\u9664\u6240\u9078 ({n})"
  }
};
function getLocale(app) {
  const raw = app?.i18n?.locale ?? app?.locale ?? app.vault?.getConfig?.("locale") ?? window.localStorage.getItem("language") ?? "en";
  return String(raw).toLowerCase();
}
function t(app, key, vars) {
  const loc = getLocale(app);
  const dict = I18N[loc] ?? I18N[loc.split("-")[0]] ?? I18N.en;
  let s = dict[key] ?? I18N.en[key];
  if (vars) for (const k in vars) s = s.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
  return s;
}
function findContentSizer(root) {
  const readingSizer = root.querySelector(".markdown-preview-view .markdown-preview-sizer");
  if (readingSizer) return readingSizer;
  const editorSizer = root.querySelector(".markdown-source-view .cm-sizer");
  if (editorSizer) return editorSizer;
  return null;
}
var MAX_WIDTH_PRESETS = 15;
var MAX_LAYOUT_PRESETS = 150;
var clamp = (n, min, max) => Math.max(min, Math.min(max, n));
var snap = (n, grid = 20) => Math.round(n / grid) * grid;
var WidthPresetModal = class extends import_obsidian.Modal {
  onSubmit;
  constructor(app, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    this.modalEl.style.width = "355px";
    contentEl.addClass("ms-bgcolor-modal-content");
    contentEl.addClass("ms-width-preset-modal-content");
    contentEl.empty();
    contentEl.createEl("h3", { text: t(this.app, "addPresetTitle") });
    let val = "";
    const input = contentEl.createEl("input", {
      type: "number",
      placeholder: t(this.app, "placeholder"),
      attr: { min: "64", max: "8192", step: "1" }
    });
    input.style.width = "300px";
    input.style.maxWidth = "100%";
    input.style.minWidth = "260px";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.closeWithValue();
    });
    input.addEventListener("input", () => val = input.value);
    input.focus();
    const row = contentEl.createDiv({ cls: "modal-button-container" });
    const ok = row.createEl("button", { text: t(this.app, "ok") });
    const cancel = row.createEl("button", { text: t(this.app, "cancel") });
    ok.addEventListener("click", () => this.closeWithValue());
    cancel.addEventListener("click", () => {
      this.onSubmit(null);
      this.close();
    });
    this.closeWithValue = () => {
      const n = Number.parseInt(val || input.value, 10);
      if (!Number.isFinite(n) || n < 64 || n > 8192) {
        new import_obsidian.Notice(t(this.app, "invalid"));
        return;
      }
      this.onSubmit(n);
      this.close();
    };
  }
  onClose() {
    this.contentEl.empty();
  }
  closeWithValue;
};
var RenamePresetModal = class extends import_obsidian.Modal {
  onSubmit;
  init;
  constructor(app, init, onSubmit) {
    super(app);
    this.init = init || "";
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("ms-rename-modal");
    contentEl.createEl("h3", { text: t(this.app, "renameTitle") });
    const wrap = contentEl.createDiv({ cls: "ms-rename-form" });
    const inp = wrap.createEl("input", { type: "text", value: this.init, attr: { spellcheck: "false" } });
    const row = contentEl.createDiv({ cls: "ms-rename-actions" });
    const ok = row.createEl("button", { text: t(this.app, "ok") });
    const cancel = row.createEl("button", { text: t(this.app, "cancel") });
    const submit = () => {
      this.onSubmit(inp.value.trim() || null);
      this.close();
    };
    ok.onclick = submit;
    cancel.onclick = () => {
      this.onSubmit(null);
      this.close();
    };
    inp.onkeydown = (e) => {
      if (e.key === "Enter") submit();
      if (e.key === "Escape") {
        this.onSubmit(null);
        this.close();
      }
    };
    setTimeout(() => {
      inp.focus();
      inp.select();
    }, 0);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var LinkModal = class extends import_obsidian.Modal {
  onSubmit;
  init;
  constructor(app, init, onSubmit) {
    super(app);
    this.init = init || "";
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("ms-rename-modal");
    contentEl.createEl("h3", { text: t(this.app, "addLink") });
    const wrap = contentEl.createDiv({ cls: "ms-rename-form" });
    const inp = wrap.createEl("input", { type: "text", value: this.init, attr: { spellcheck: "false" } });
    inp.placeholder = "https://...";
    const row = contentEl.createDiv({ cls: "ms-rename-actions" });
    const ok = row.createEl("button", { text: t(this.app, "ok") });
    const cancel = row.createEl("button", { text: t(this.app, "cancel") });
    const submit = () => {
      this.onSubmit(inp.value.trim());
      this.close();
    };
    ok.onclick = submit;
    cancel.onclick = () => {
      this.onSubmit(null);
      this.close();
    };
    inp.onkeydown = (e) => {
      if (e.key === "Enter") submit();
      if (e.key === "Escape") {
        this.onSubmit(null);
        this.close();
      }
    };
    setTimeout(() => {
      inp.focus();
      inp.select();
    }, 0);
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ImageSizeModal = class extends import_obsidian.Modal {
  onSubmit;
  initW;
  initH;
  constructor(app, w, h, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
    this.initW = w;
    this.initH = h;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    const form = contentEl.createDiv({ cls: "ms-imgsz-form" });
    form.createEl("h3", { text: t(this.app, "setSize") });
    const rowW = form.createDiv({ cls: "ms-row" });
    rowW.createEl("label", { text: t(this.app, "width") });
    const inW = rowW.createEl("input", { type: "number", value: String(Math.round(this.initW)), attr: { min: "1", step: "1" } });
    const rowH = form.createDiv({ cls: "ms-row" });
    rowH.createEl("label", { text: t(this.app, "height") });
    const inH = rowH.createEl("input", { type: "number", value: String(Math.round(this.initH)), attr: { min: "1", step: "1" } });
    const keep = form.createDiv({ cls: "ms-row" });
    const keepCb = keep.createEl("input", { type: "checkbox" });
    keepCb.checked = true;
    keep.createEl("span", { text: t(this.app, "keepAR") });
    const ar = this.initW / Math.max(1, this.initH);
    const syncFrom = (src) => {
      if (!keepCb.checked) return;
      if (src === "w") {
        const w = Number(inW.value);
        if (Number.isFinite(w) && w > 0) inH.value = String(Math.round(w / ar));
      } else {
        const h = Number(inH.value);
        if (Number.isFinite(h) && h > 0) inW.value = String(Math.round(h * ar));
      }
    };
    inW.addEventListener("input", () => syncFrom("w"));
    inH.addEventListener("input", () => syncFrom("h"));
    keepCb.addEventListener("change", () => syncFrom("w"));
    const buttons = contentEl.createDiv({ cls: "modal-button-container" });
    const ok = buttons.createEl("button", { text: t(this.app, "ok") });
    const cancel = buttons.createEl("button", { text: t(this.app, "cancel") });
    ok.addEventListener("click", () => {
      const w = Number(inW.value);
      const h = Number(inH.value);
      if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
        new import_obsidian.Notice(t(this.app, "invalid"));
        return;
      }
      this.onSubmit(w, h, keepCb.checked);
      this.close();
    });
    cancel.addEventListener("click", () => {
      this.onSubmit(null, null, true);
      this.close();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var BgColorModal = class extends import_obsidian.Modal {
  value;
  onOk;
  t;
  isClone;
  isNoteBox;
  isTextColor;
  initialStrokeState;
  constructor(app, initial, onOk, t2, options) {
    super(app);
    this.value = initial || "#242424";
    this.onOk = onOk;
    this.t = t2;
    this.isClone = !!options.isClone;
    this.isNoteBox = !!options.isNoteBox;
    this.isTextColor = !!options.isTextColor;
    this.initialStrokeState = !!options.initialStrokeState;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("ms-bgcolor-modal-content");
    contentEl.empty();
    contentEl.createEl("h3", { text: this.isTextColor ? this.t("changeTextColor") : this.t("bgColor") });
    const wrap = contentEl.createDiv({ cls: "ms-bgcolor-wrap" });
    const colorInp = wrap.createEl("input", { type: "color" });
    colorInp.value = this.coerceHex(this.value);
    const textInp = wrap.createEl("input", { type: "text" });
    textInp.placeholder = "#242424";
    textInp.value = this.coerceHex(this.value);
    colorInp.addEventListener("input", () => {
      textInp.value = colorInp.value;
    });
    textInp.addEventListener("input", () => {
      const v = this.coerceHex(textInp.value);
      if (v) colorInp.value = v;
    });
    let localOnlyCb = null;
    let applyToHeaderCb = null;
    let removeBgCb = null;
    let addStrokeCb = null;
    const optionsContainer = contentEl.createDiv({ attr: { style: "display: flex; flex-direction: column; align-items: flex-start;" } });
    const createCheckbox = (text) => {
      const row = optionsContainer.createEl("label", { cls: "ms-row", attr: { style: "display: flex; align-items: center; cursor: pointer; margin-bottom: 8px;" } });
      const cb = row.createEl("input", { type: "checkbox", attr: { style: "margin-right: 6px;" } });
      const span = row.createEl("span", { text });
      span.style.position = "relative";
      span.style.bottom = "0px";
      return [row, cb];
    };
    if (!this.isTextColor) {
      if (this.isClone) {
        [, localOnlyCb] = createCheckbox(this.t("localOnlyCheckboxLabel"));
      }
      if (this.isNoteBox) {
        [, applyToHeaderCb] = createCheckbox(this.t("applyToHeader"));
      }
      if (this.isClone || this.isNoteBox) {
        [, removeBgCb] = createCheckbox(this.t("removeBg"));
      }
    } else {
      [, addStrokeCb] = createCheckbox(this.t("addStroke"));
      if (addStrokeCb) addStrokeCb.checked = this.initialStrokeState;
    }
    if (optionsContainer.hasChildNodes()) {
      optionsContainer.style.marginBottom = "12px";
    }
    const actions = contentEl.createDiv({ cls: "modal-button-container" });
    const okBtn = actions.createEl("button", { text: this.t("ok") });
    const cancelBtn = actions.createEl("button", { text: this.t("cancel") });
    const resetBtn = actions.createEl("button", { text: this.t("reset") });
    actions.insertBefore(resetBtn, cancelBtn);
    resetBtn.addEventListener("click", () => {
      const resetColor = this.isTextColor ? "#FFFFFF" : this.isNoteBox ? "#262626" : "#242424";
      colorInp.value = resetColor;
      textInp.value = resetColor;
    });
    okBtn.addEventListener("click", () => {
      const v = this.coerceHex(textInp.value) || "#242424";
      this.onOk({
        hex: v,
        isLocal: localOnlyCb?.checked ?? false,
        removeBg: removeBgCb?.checked ?? false,
        applyToHeader: applyToHeaderCb?.checked ?? false,
        addStroke: addStrokeCb?.checked ?? false
      });
      this.close();
    });
    cancelBtn.addEventListener("click", () => this.close());
    const st = document.createElement("style");
    st.textContent = `
      .ms-bgcolor-wrap{ display:grid; grid-template-columns:auto 1fr; gap:12px; align-items:center; margin:6px 0 12px; }
      .ms-bgcolor-wrap input[type="color"]{ width:64px; height:64px; border:0; padding:0; background:transparent; }
      .ms-bgcolor-wrap input[type="text"]{ width:120px; }
    `;
    contentEl.appendChild(st);
  }
  coerceHex(v) {
    v = (v || "").trim();
    if (!v) return "";
    if (v[0] !== "#") v = "#" + v;
    if (/^#([0-9a-f]{6})$/i.test(v)) return v.toUpperCase();
    return "";
  }
};
var CloneSettingsModal = class extends import_obsidian.Modal {
  onSubmit;
  initial;
  constructor(app, initial, onSubmit) {
    super(app);
    this.initial = { ...initial };
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("ms-clone-settings-modal");
    const header = contentEl.createDiv({ cls: "modal-header" });
    header.createEl("h3", { text: t(this.app, "cloneSettingsTitle") });
    const closeBtn = header.createDiv({ cls: "modal-close-button" });
    closeBtn.addEventListener("click", () => this.close());
    const form = contentEl.createDiv({ cls: "modal-form" });
    const animRow = form.createDiv({ cls: "setting-item" });
    animRow.createEl("div", { text: t(this.app, "animation"), cls: "setting-item-name" });
    const animControls = animRow.createDiv({ cls: "setting-item-control" });
    const animBtn = animControls.createEl("button", {
      text: this.initial.animation === "popup" ? t(this.app, "animationPopup") : t(this.app, "animationFade")
    });
    animBtn.addEventListener("click", () => {
      this.initial.animation = this.initial.animation === "popup" ? "fade" : "popup";
      animBtn.textContent = this.initial.animation === "popup" ? t(this.app, "animationPopup") : t(this.app, "animationFade");
    });
    const opacityRow = form.createDiv({ cls: "setting-item" });
    opacityRow.createEl("div", { text: t(this.app, "backgroundOpacity"), cls: "setting-item-name" });
    const opacityControls = opacityRow.createDiv({ cls: "setting-item-control" });
    const opacitySlider = opacityControls.createEl("input", { type: "range", attr: { min: 0, max: 100, step: 1 } });
    opacitySlider.value = String(this.initial.bgOpacity * 100);
    const opacityLabel = opacityControls.createEl("span", { text: `${opacitySlider.value}%` });
    opacitySlider.addEventListener("input", () => {
      this.initial.bgOpacity = Number(opacitySlider.value) / 100;
      opacityLabel.textContent = `${opacitySlider.value}%`;
    });
    const controlsOpacityRow = form.createDiv({ cls: "setting-item" });
    controlsOpacityRow.createEl("div", { text: t(this.app, "controlsOpacity"), cls: "setting-item-name" });
    const controlsOpacityControls = controlsOpacityRow.createDiv({ cls: "setting-item-control" });
    const controlsOpacitySlider = controlsOpacityControls.createEl("input", { type: "range", attr: { min: 0, max: 100, step: 1 } });
    controlsOpacitySlider.value = String(this.initial.controlsOpacity * 100);
    const controlsOpacityLabel = controlsOpacityControls.createEl("span", { text: `${controlsOpacitySlider.value}%` });
    controlsOpacitySlider.addEventListener("input", () => {
      this.initial.controlsOpacity = Number(controlsOpacitySlider.value) / 100;
      controlsOpacityLabel.textContent = `${controlsOpacitySlider.value}%`;
    });
    const hideDelayRow = form.createDiv({ cls: "setting-item" });
    hideDelayRow.createEl("div", { text: t(this.app, "hideDelayLabel"), cls: "setting-item-name" });
    const hideDelayControls = hideDelayRow.createDiv({ cls: "setting-item-control" });
    const hideDelaySlider = hideDelayControls.createEl("input", { type: "range", attr: { min: 0, max: 100, step: 1 } });
    hideDelaySlider.value = String(this.initial.hideDelay * 10);
    const hideDelayLabel = hideDelayControls.createEl("span", { text: `${(Number(hideDelaySlider.value) / 10).toFixed(1)}s` });
    hideDelaySlider.addEventListener("input", () => {
      const seconds = Number(hideDelaySlider.value) / 10;
      this.initial.hideDelay = seconds;
      hideDelayLabel.textContent = `${seconds.toFixed(1)}s`;
    });
    const buttons = contentEl.createDiv({ cls: "modal-button-container" });
    const okBtn = buttons.createEl("button", { text: t(this.app, "ok"), cls: "mod-cta" });
    const resetBtn = buttons.createEl("button", { text: t(this.app, "reset") });
    const cancelBtn = buttons.createEl("button", { text: t(this.app, "cancel") });
    okBtn.addEventListener("click", () => {
      this.onSubmit(this.initial);
      this.close();
    });
    cancelBtn.addEventListener("click", () => {
      this.onSubmit(null);
      this.close();
    });
    resetBtn.addEventListener("click", () => {
      this.initial = { animation: "popup", bgOpacity: 1, controlsOpacity: 0.35, hideDelay: 2, showAudioHandles: true };
      animBtn.textContent = t(this.app, "animationPopup");
      opacitySlider.value = "100";
      opacityLabel.textContent = "100%";
      controlsOpacitySlider.value = "35";
      controlsOpacityLabel.textContent = "35%";
      hideDelaySlider.value = "20";
      hideDelayLabel.textContent = "2.0s";
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var MediaLayoutSettingsModal = class extends import_obsidian.Modal {
  plugin;
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("ms-layout-settings-modal");
    contentEl.createEl("h3", { text: "\u{1D40C}\u{1D41E}\u{1D41D}\u{1D422}\u{1D41A} \u{1D40B}\u{1D41A}\u{1D432}\u{1D428}\u{1D42E}\u{1D42D} \u{1D412}\u{1D41E}\u{1D42D}\u{1D42D}\u{1D422}\u{1D427}\u{1D420}\u{1D42C}" });
    const form = contentEl.createDiv({ cls: "modal-form" });
    const handlesOnHoverRow = form.createDiv({ cls: "setting-item" });
    handlesOnHoverRow.createEl("div", { text: t(this.app, "showHandlesOnHoverLabel"), cls: "setting-item-name" });
    const handlesOnHoverControls = handlesOnHoverRow.createDiv({ cls: "setting-item-control" });
    const handlesOnHoverCheckbox = handlesOnHoverControls.createEl("input", { type: "checkbox" });
    handlesOnHoverCheckbox.checked = this.plugin.showHandlesOnHover;
    const hideDetachRow = form.createDiv({ cls: "setting-item" });
    hideDetachRow.createEl("div", { text: t(this.app, "hideDetachButtonLabel"), cls: "setting-item-name" });
    const hideDetachControls = hideDetachRow.createDiv({ cls: "setting-item-control" });
    const hideDetachCheckbox = hideDetachControls.createEl("input", { type: "checkbox" });
    hideDetachCheckbox.checked = this.plugin.hideDetachButton;
    const modalAnimationRow = form.createDiv({ cls: "setting-item" });
    modalAnimationRow.createEl("div", { text: t(this.app, "modalAnimationLabel"), cls: "setting-item-name" });
    const modalAnimationControls = modalAnimationRow.createDiv({ cls: "setting-item-control" });
    const modalAnimationCheckbox = modalAnimationControls.createEl("input", { type: "checkbox" });
    modalAnimationCheckbox.checked = this.plugin.enableModalAnimation;
    const cloneNearFileRow = form.createDiv({ cls: "setting-item" });
    cloneNearFileRow.createEl("div", { text: t(this.app, "cloneNearFile"), cls: "setting-item-name" });
    const cloneNearFileControls = cloneNearFileRow.createDiv({ cls: "setting-item-control" });
    const cloneNearFileCheckbox = cloneNearFileControls.createEl("input", { type: "checkbox" });
    cloneNearFileCheckbox.checked = this.plugin.cloneNearFile;
    const cloneRestoreDelayRow = form.createDiv({ cls: "setting-item" });
    cloneRestoreDelayRow.createEl("div", { text: t(this.app, "cloneRestoreDelayLabel"), cls: "setting-item-name" });
    const cloneRestoreDelayControls = cloneRestoreDelayRow.createDiv({ cls: "setting-item-control" });
    const cloneRestoreDelaySlider = cloneRestoreDelayControls.createEl("input", { type: "range", attr: { min: 0, max: 1e3, step: 10 } });
    cloneRestoreDelaySlider.value = String(this.plugin.cloneRestoreDelay);
    const cloneRestoreDelayLabel = cloneRestoreDelayControls.createEl("span", { text: `${Number(cloneRestoreDelaySlider.value)}ms` });
    cloneRestoreDelaySlider.addEventListener("input", () => {
      cloneRestoreDelayLabel.textContent = `${Number(cloneRestoreDelaySlider.value)}ms`;
    });
    const noteRestoreDelayRow = form.createDiv({ cls: "setting-item" });
    noteRestoreDelayRow.createEl("div", { text: t(this.app, "noteRestoreDelayLabel"), cls: "setting-item-name" });
    const noteRestoreDelayControls = noteRestoreDelayRow.createDiv({ cls: "setting-item-control" });
    const noteRestoreDelaySlider = noteRestoreDelayControls.createEl("input", { type: "range", attr: { min: 0, max: 1e3, step: 10 } });
    noteRestoreDelaySlider.value = String(this.plugin.noteRestoreDelay);
    const noteRestoreDelayLabel = noteRestoreDelayControls.createEl("span", { text: `${Number(noteRestoreDelaySlider.value)}ms` });
    noteRestoreDelaySlider.addEventListener("input", () => {
      noteRestoreDelayLabel.textContent = `${Number(noteRestoreDelaySlider.value)}ms`;
    });
    const buttons = contentEl.createDiv({ cls: "modal-button-container" });
    const okBtn = buttons.createEl("button", { text: t(this.app, "ok"), cls: "mod-cta" });
    const resetBtn = buttons.createEl("button", { text: t(this.app, "reset") });
    const cancelBtn = buttons.createEl("button", { text: t(this.app, "cancel") });
    okBtn.addEventListener("click", async () => {
      const showHandles = handlesOnHoverCheckbox.checked;
      this.plugin.showHandlesOnHover = showHandles;
      if (!showHandles) {
        this.plugin.cloneShowAudioHandles = false;
      }
      this.plugin.hideDetachButton = hideDetachCheckbox.checked;
      this.plugin.enableModalAnimation = modalAnimationCheckbox.checked;
      this.plugin.cloneRestoreDelay = Number(cloneRestoreDelaySlider.value);
      this.plugin.cloneNearFile = cloneNearFileCheckbox.checked;
      this.plugin.noteRestoreDelay = Number(noteRestoreDelaySlider.value);
      await this.plugin.persistAll();
      this.plugin.applyAllHandleStyles();
      this.plugin.applyModalAnimationStyles();
      this.close();
    });
    cancelBtn.addEventListener("click", () => {
      this.close();
    });
    resetBtn.addEventListener("click", async () => {
      handlesOnHoverCheckbox.checked = true;
      hideDetachCheckbox.checked = true;
      cloneNearFileCheckbox.checked = true;
      modalAnimationCheckbox.checked = true;
      cloneRestoreDelaySlider.value = "50";
      cloneRestoreDelayLabel.textContent = "50ms";
      noteRestoreDelaySlider.value = "50";
      noteRestoreDelayLabel.textContent = "50ms";
      this.plugin.showHandlesOnHover = true;
      this.plugin.cloneNearFile = true;
      this.plugin.cloneShowAudioHandles = true;
      this.plugin.hideDetachButton = true;
      this.plugin.enableModalAnimation = true;
      this.plugin.cloneRestoreDelay = 50;
      this.plugin.noteRestoreDelay = 50;
      await this.plugin.persistAll();
      this.plugin.applyAllHandleStyles();
      this.plugin.applyModalAnimationStyles();
      new import_obsidian.Notice("\u2714\u27F2");
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var MediaSize = class extends import_obsidian.Plugin {
  notes = {};
  presets = {};
  store = {};
  // Keep for now for compatibility during refactor
  userPresets = [];
  // Keep for now for compatibility during refactor
  observers = [];
  STYLE_ID = "ms-inline-style";
  ME_BG_STYLE_ID = "ms-me-bg-style";
  CLONE_DELAY_STYLE_ID = "ms-clone-delay-style";
  meBgColor = "#242424";
  cloneAnimation = "popup";
  cloneBgOpacity = 1;
  cloneControlsOpacity = 0.35;
  cloneHideDelay = 2;
  noteRestoreDelay = 50;
  cloneRestoreDelay = 50;
  enableModalAnimation = true;
  hideDetachButton = true;
  showHandlesOnHover = true;
  cloneNearFile = true;
  cloneShowAudioHandles = true;
  // Текущая открытая заметка и пул таймеров для жёсткой отмены отложенных операций
  currentNotePath = null;
  pendingTimers = /* @__PURE__ */ new Set();
  // ИСПРАВЛЕНИЕ race condition: ID таймера для отложенного применения пресета
  presetTimerId = null;
  // КРИТИЧНО: Флаг и очередь для защиты от одновременных вызовов persistAll
  persistInProgress = false;
  persistQueue = null;
  // --- НОВОЕ: Управление выделением ---
  selectedKeys = /* @__PURE__ */ new Set();
  isMarqueeSelecting = false;
  marqueeStart = null;
  marqueeWithCtrl = false;
  // Флаг для отслеживания зажатого Ctrl при marquee
  // ИСПРАВЛЕНО: Переменные для скролла вынесены в свойства класса, чтобы быть доступными везде
  scrollRatioX = 0;
  scrollRatioY = 0;
  hScrollEl = null;
  vScrollEl = null;
  wasLockedBeforeFs = false;
  // === СИСТЕМА ЛОГИРОВАНИЯ ===
  debugLog = [];
  maxDebugLines = 2e3;
  enableDebugMode = false;
  logFilePath = "";
  autoSaveLogTimer = null;
  // === СИСТЕМА БЭКАПОВ ===
  backupTimer = null;
  lastBackupHash = "";
  // ====== Новое: стабильные якоря для оригиналов ======
  /** Стабильный якорь оригинала, чтобы переживать рестарты (src + порядковый индекс + подпись) */
  computeOriginalAnchor(host) {
    const media = host.querySelector("video, img, audio");
    const embed = host.closest(".cm-embed-block, .media-embed, .internal-embed");
    const src = media?.getAttribute("src") || media?.dataset?.src || "" || (embed?.getAttribute?.("src") || embed?.dataset?.src || "") || "";
    const root = host.closest(".markdown-reading-view, .markdown-preview-view, .cm-editor");
    let nth = 0;
    if (src && root) {
      const all = Array.from(root.querySelectorAll("video, img, audio")).filter((el) => {
        const s = el.getAttribute("src") || el?.dataset?.src || "";
        return s === src;
      });
      nth = Math.max(0, all.indexOf(media));
    }
    const sig = media?.getAttribute("alt") || media?.getAttribute("title") || (media?.textContent || "").slice(0, 64) || "";
    return `${src || "nosrc"}#${nth}:${sig}`;
  }
  /** Убедиться, что у оригинала есть data-ms-anchor; вернуть его */
  ensureOriginalAnchor(host) {
    let a = host.dataset.msAnchor;
    if (!a) {
      a = this.computeOriginalAnchor(host);
      host.dataset.msAnchor = a;
    }
    return a;
  }
  /** Построить индекс anchor → runtimeKey для активного контейнера */
  buildAnchorIndex(root) {
    const map = /* @__PURE__ */ new Map();
    root.querySelectorAll(".ms-host[data-ms-key]").forEach((h) => {
      const a = this.ensureOriginalAnchor(h);
      const k = h.dataset.msKey;
      if (a && k) map.set(a, k);
    });
    return map;
  }
  assetUrl(relPath) {
    const full = (0, import_obsidian.normalizePath)(`${this.app.vault.configDir}/plugins/${this.manifest.id}/${relPath}`);
    return this.app.vault.adapter.getResourcePath(full);
  }
  // Единый абсолютный слой поверх редактора для всех плавающих хостов
  ensureFloatLayer(root) {
    let sizer = findContentSizer(root.closest(".markdown-source-view, .markdown-reading-view"));
    if (!sizer) sizer = root;
    let layer = sizer.querySelector(":scope > .ms-float-layer");
    if (!layer) {
      layer = document.createElement("div");
      layer.className = "ms-float-layer";
      sizer.appendChild(layer);
    }
    const path = this.getActiveNote()?.path ?? "";
    if (path) {
      layer.dataset.msNote = path;
      layer.querySelectorAll(".ms-host[data-ms-note]").forEach((el) => {
        const n = el.dataset.msNote || "";
        if (n && n !== path) el.remove();
      });
    }
    return layer;
  }
  lastCtxEvt = null;
  controlsProxy = /* @__PURE__ */ new WeakMap();
  layoutPresets = {};
  // Keep for now for compatibility during refactor
  layoutNames = {};
  // Keep for now for compatibility during refactor
  // Вернёт корректный app:// (или file://) URL до ассета плагина
  async onload() {
    const persisted = await this.loadData();
    if (persisted && typeof persisted === "object") {
      if (persisted.notes) {
        this.notes = persisted.notes ?? {};
        this.presets = persisted.presets ?? {};
      } else if (persisted.items) {
        console.log("Media-Size: Migrating old data structure.");
        this.notes = {};
        for (const notePath in persisted.items) {
          this.notes[notePath] = {
            originals: persisted.items[notePath],
            clones: {}
          };
        }
        this.presets = {};
        this.store = persisted.items;
      } else {
        this.notes = {};
        this.presets = {};
      }
      this.meBgColor = persisted.meBgColor ?? "#242424";
      this.userPresets = Array.isArray(persisted.userPresets) ? persisted.userPresets.slice(0, MAX_WIDTH_PRESETS) : [];
      this.layoutPresets = persisted.layoutPresets ?? {};
      this.layoutNames = persisted.layoutNames ?? {};
      this.cloneAnimation = persisted.cloneAnimation ?? "popup";
      this.cloneBgOpacity = persisted.cloneBgOpacity ?? 1;
      this.cloneControlsOpacity = persisted.cloneControlsOpacity ?? 0.35;
      this.cloneHideDelay = persisted.cloneHideDelay ?? 2;
      this.noteRestoreDelay = persisted.noteRestoreDelay ?? 200;
      this.cloneRestoreDelay = persisted.cloneRestoreDelay ?? 300;
      this.showHandlesOnHover = persisted.showHandlesOnHover ?? true;
      this.enableModalAnimation = persisted.enableModalAnimation ?? true;
      this.hideDetachButton = persisted.hideDetachButton ?? true;
      this.cloneShowAudioHandles = persisted.cloneShowAudioHandles ?? true;
      this.cloneNearFile = persisted.cloneNearFile ?? true;
    } else {
      this.notes = {};
      this.presets = {};
    }
    this.applyCloneHideDelayCss(this.cloneHideDelay);
    this.applyMediaBgCss(this.meBgColor);
    this.applyAllHandleStyles();
    this.applyModalAnimationStyles();
    this.injectCss();
    const ctxHandler = (e) => this.lastCtxEvt = e;
    document.addEventListener("contextmenu", ctxHandler, true);
    this.register(() => document.removeEventListener("contextmenu", ctxHandler, true));
    this.registerDomEvent(document, "mousedown", (e) => {
      if (e.ctrlKey || e.metaKey) this.handleMarqueeStart(e);
    }, { capture: true });
    document.addEventListener("mousedown", this.handleDeselectClick, true);
    this.register(() => document.removeEventListener("mousedown", this.handleDeselectClick, true));
    this.registerMarkdownPostProcessor((el, ctx) => {
      const notePath = ctx?.sourcePath || this.getActiveNote()?.path || "";
      this.processRoot(el, notePath);
    });
    this.app.workspace.onLayoutReady(() => {
      this.schedule(() => {
        this.scanActive();
        const notePath = this.getActiveNote()?.path;
        if (notePath) this.restoreClonesFromStore(notePath);
        this.applyCloneSettingsToAll();
        const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (view) this.app.workspace.trigger("markdown-render", view.contentEl);
      }, 500);
    });
    let switchDebounceTimer = null;
    const scheduleSwitch = (file) => {
      if (switchDebounceTimer) clearTimeout(switchDebounceTimer);
      switchDebounceTimer = window.setTimeout(() => handleFileSwitch(file), 0);
    };
    const handleFileSwitch = async (file) => {
      this.cancelScheduled?.();
      await this.hardCleanupForSwitch(this.currentNotePath ?? this.getActiveNote()?.path ?? void 0);
      this.currentNotePath = file?.path ?? this.getActiveNote()?.path ?? null;
      this.scanActive();
    };
    this.registerEvent(this.app.workspace.on("file-open", (file) => scheduleSwitch(file)));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => {
      scheduleSwitch(this.app.workspace.getActiveFile());
      this.schedule(() => {
        const notePath = this.getActiveNote()?.path;
        if (notePath) this.realignClonesIfNeeded(notePath);
      }, 100);
    }));
    this.app.workspace.onLayoutReady(() => scheduleSwitch(this.app.workspace.getActiveFile()));
    this.registerEvent(this.app.workspace.on("layout-change", () => {
      this.scanActive();
      this.schedule(() => {
        const leaves = this.app.workspace.getLeavesOfType("markdown");
        leaves.forEach((leaf) => {
          const file = leaf.view?.file;
          if (file?.path) {
            this.realignClonesIfNeeded(file.path);
          }
        });
      }, 150);
    }));
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, _editor, view) => {
        const ev = this.lastCtxEvt;
        if (!ev) return;
        const target = ev.target;
        if (!target) return;
        if (this.isMarqueeSelecting || ev.ctrlKey && target.closest(".ms-host")) {
          return;
        }
        menu.addItem((i) => {
          i.setTitle(t(this.app, "addNote")).setIcon("layout-template");
          i.onClick(async () => {
            const viewRoot = this.getAttachRoot();
            if (!viewRoot) return;
            const notePath2 = view?.file?.path ?? this.getActiveNote()?.path ?? "";
            const key2 = this.makeNoteKey();
            const defaultWidth = 260;
            const defaultHeight = 160;
            const vr = viewRoot.getBoundingClientRect();
            const x = ev.clientX - vr.left + viewRoot.scrollLeft - defaultWidth * 2 | 0;
            const y = ev.clientY - vr.top + viewRoot.scrollTop - defaultHeight * 1.5 | 0;
            this.createNoteHost(viewRoot, key2, x, y, { w: defaultWidth, h: defaultHeight, txt: "", fontSize: 16, focus: true });
            await this.saveState(notePath2, key2, { w: defaultWidth, h: defaultHeight, x, y, txt: "", fontSize: 16 });
          });
        });
        const host = target.closest(".ms-host") || target.closest(".internal-embed, .media-embed, .mx-media-embed, img, video, audio");
        if (!host) return;
        const isClone = !!host.dataset.msParentKey;
        const isNote = host.classList.contains("ms-note-host");
        const media = isNote ? host.querySelector(".ms-note") : host.querySelector("video, img, audio") || (["IMG", "VIDEO", "AUDIO"].includes(host.tagName) ? host : null);
        if (!media && !isNote) return;
        const kind = isNote ? "note" : media.tagName === "IMG" ? "image" : media.tagName === "AUDIO" ? "audio" : "video";
        const notePath = view?.file?.path ?? this.getActiveNote()?.path ?? "";
        const key = isNote ? host.dataset.msKey ?? this.makeNoteKey() : host.dataset.msKey ?? this.makeEmbedKey(this.getSrcAndBase(host, media).src);
        host.dataset.msKey = key;
        const isTargetSelected = this.selectedKeys.has(key);
        if (isTargetSelected && this.selectedKeys.size > 1) {
          this.buildGroupContextMenu(menu, host, key, kind, notePath);
          return;
        }
        if (isClone) {
          if (kind !== "note") {
            this.addSizePresetsMenu(menu, notePath, key, host, media, kind);
          }
          this.addPositionPresetsMenu(menu, notePath);
          if (kind === "image") {
            menu.addItem(
              (i) => i.setTitle(t(this.app, "setSize")).setIcon("scaling").onClick(async () => {
                this.ensureParentAnchor(host);
                const cur = this.readAbsRect(host);
                new ImageSizeModal(
                  this.app,
                  cur.w || media.clientWidth || 0,
                  cur.h || media.clientHeight || 0,
                  async (w, h, keep) => {
                    if (w && h) await this.applyAndSaveSize(notePath, key, host, media, kind, { w, h }, keep ? false : true);
                  }
                ).open();
              })
            );
          }
          if (kind === "image") {
            menu.addItem(
              (i) => i.setTitle(t(this.app, "addLink")).setIcon("link").onClick(async () => {
                const currentState = this.notes[notePath]?.clones?.[key];
                const initialLink = currentState?.link || "";
                new LinkModal(this.app, initialLink, async (link) => {
                  if (link !== null) {
                    await this.saveState(notePath, key, { link });
                    this.applyLinkOverlay(host, link);
                  }
                }).open();
              })
            );
          }
          menu.addItem(
            (i) => i.setTitle(t(this.app, "openLocation")).setIcon("folder-open").onClick(async () => {
              const notePath2 = view?.file?.path ?? this.getActiveNote()?.path ?? "";
              const { src } = this.getSrcAndBase(host, media);
              const tf = this.resolveTFile(notePath2, src);
              if (!tf) return new import_obsidian.Notice(t(this.app, "fileNotFound"));
              const adapter = this.app.vault.adapter;
              if (!(adapter instanceof import_obsidian.FileSystemAdapter)) {
                new import_obsidian.Notice(t(this.app, "localOnly"));
                return;
              }
              const full = adapter.getFullPath(tf.path);
              try {
                const shell = window.require?.("electron")?.shell;
                if (shell?.showItemInFolder) shell.showItemInFolder(full);
                else this.revealInOS(full);
              } catch {
                this.revealInOS(full);
              }
            })
          );
          if (kind === "video" || kind === "audio") {
            menu.addItem((i) => {
              i.setTitle(t(this.app, "bgColor")).setIcon("palette");
              i.onClick(() => {
                const tr = (k) => t(this.app, k);
                const initialColor = this.notes[notePath]?.clones?.[key]?.bgColor || this.meBgColor;
                new BgColorModal(this.app, initialColor, async ({ hex, isLocal, removeBg }) => {
                  if (removeBg) {
                    host.querySelector(".ms-media-bg")?.remove();
                    host.querySelector(".ms-local-bg")?.remove();
                    await this.saveState(notePath, key, { bgColor: "transparent" });
                  } else if (isLocal) {
                    const localBg = this.ensureLocalBg(host);
                    localBg.style.backgroundColor = hex;
                    await this.saveState(notePath, key, { bgColor: hex });
                  } else {
                    await this.setMediaBgColor(hex, false, host, notePath, key);
                    host.querySelector(".ms-local-bg")?.remove();
                    await this.saveState(notePath, key, { bgColor: void 0 });
                  }
                }, tr, { isClone: true }).open();
              });
            });
          }
          menu.addItem((i) => {
            i.setTitle(t(this.app, "cloneSettingsTitle")).setIcon("sliders-horizontal").onClick(() => {
              new CloneSettingsModal(this.app, {
                animation: this.cloneAnimation,
                bgOpacity: this.cloneBgOpacity,
                controlsOpacity: this.cloneControlsOpacity,
                hideDelay: this.cloneHideDelay,
                showAudioHandles: this.cloneShowAudioHandles
              }, async (settings) => {
                if (settings) {
                  this.cloneAnimation = settings.animation;
                  this.cloneBgOpacity = settings.bgOpacity;
                  this.cloneControlsOpacity = settings.controlsOpacity;
                  this.cloneHideDelay = settings.hideDelay;
                  this.cloneShowAudioHandles = settings.showAudioHandles;
                  await this.persistAll();
                  this.applyCloneSettingsToAll();
                }
              }).open();
            });
          });
          menu.addItem((i) => {
            i.setTitle(t(this.app, "bringLayerUp")).setIcon("arrow-up-from-line");
            i.onClick(async () => {
              this.adjustZIndex(host, 1);
            });
          });
          menu.addItem((i) => {
            i.setTitle(t(this.app, "sendLayerDown")).setIcon("arrow-down-from-line");
            i.onClick(async () => {
              this.adjustZIndex(host, -1);
            });
          });
          menu.addSeparator();
          const isLocked = host.dataset.msLocked === "1";
          menu.addItem((item) => {
            item.setTitle(isLocked ? t(this.app, "unlock") : t(this.app, "lock")).setIcon(isLocked ? "unlock" : "lock");
            item.onClick(async () => {
              const newState = !isLocked;
              host.dataset.msLocked = newState ? "1" : "0";
              await this.saveState(notePath, key, { locked: newState });
            });
          });
          menu.addItem((item) => {
            item.setTitle(t(this.app, "deleteClone")).setIcon("trash");
            item.setTitle(t(this.app, "deleteClone")).setIcon("trash");
            item.onClick(async () => {
              host.remove();
              if (notePath && key) {
                delete this.notes[notePath]?.clones?.[key];
                await this.persistAll();
              }
            });
          });
          return;
        }
        if (kind !== "note") {
          this.addSizePresetsMenu(menu, notePath, key, host, media, kind);
        }
        if (kind !== "note") {
          this.addPositionPresetsMenu(menu, notePath);
        }
        if (kind === "image") {
          menu.addItem(
            (i) => i.setTitle(t(this.app, "setSize")).setIcon("scaling").onClick(async () => {
              this.ensureParentAnchor(host);
              const cur = this.readAbsRect(host);
              new ImageSizeModal(
                this.app,
                cur.w || media.clientWidth || 0,
                cur.h || media.clientHeight || 0,
                async (w, h, keep) => {
                  if (w && h) await this.applyAndSaveSize(notePath, key, host, media, kind, { w, h }, keep ? false : true);
                }
              ).open();
            })
          );
        }
        menu.addItem(
          (i) => i.setTitle(t(this.app, "openLocation")).setIcon("folder-open").onClick(async () => {
            const notePath2 = view?.file?.path ?? this.getActiveNote()?.path ?? "";
            const { src } = this.getSrcAndBase(host, media);
            const tf = this.resolveTFile(notePath2, src);
            if (!tf) return new import_obsidian.Notice(t(this.app, "fileNotFound"));
            const adapter = this.app.vault.adapter;
            if (!(adapter instanceof import_obsidian.FileSystemAdapter)) {
              new import_obsidian.Notice(t(this.app, "localOnly"));
              return;
            }
            const full = adapter.getFullPath(tf.path);
            try {
              const shell = window.require?.("electron")?.shell;
              if (shell?.showItemInFolder) {
                shell.showItemInFolder(full);
              } else {
                this.revealInOS(full);
              }
            } catch {
              this.revealInOS(full);
            }
          })
        );
        const isDetached = host.dataset.msDetached === "1";
        if (!this.hideDetachButton && !isDetached && kind !== "note") {
          menu.addItem((item) => {
            item.setTitle(t(this.app, "detach")).setIcon("pin-off");
            item.onClick(async () => {
              if (host.dataset.msDetached === "1") return;
              await this.maybeDetach(notePath, key, host);
              const el = item.dom;
              el?.remove();
            });
          });
        }
        if (isDetached) {
          menu.addItem(
            (i) => i.setTitle(t(this.app, "restorePos")).setIcon("home").onClick(async () => {
              await this.applyAndSaveSize(notePath, key, host, media, kind, { x: 0, y: 0, w: void 0, h: void 0, reset: true });
            })
          );
        }
        if (kind !== "note") {
          menu.addItem((item) => {
            item.setTitle(t(this.app, "duplicate")).setIcon("copy");
            item.onClick(async () => {
              const viewRoot = this.getHostRoot(host);
              if (!viewRoot) return;
              const cloneHost = this.createCleanCloneElement(host);
              const cloneKey = `${key}::clone::${this.makeNoteKey()}`;
              const defaultWidth = 480;
              const defaultHeight = 270;
              const vr = viewRoot.getBoundingClientRect();
              let x, y;
              if (this.cloneNearFile) {
                x = ev.clientX - vr.left - defaultWidth + viewRoot.scrollLeft | 0;
                y = ev.clientY - vr.top - defaultHeight + viewRoot.scrollTop | 0;
              } else {
                x = ev.clientX - vr.left - defaultWidth | 0;
                y = ev.clientY - vr.top - defaultHeight | 0;
              }
              this.createCloneHost(viewRoot, cloneHost, cloneKey, key, x, y, true);
              this.schedule(() => {
                this.applyCloneSettingsToAll();
              }, 150);
            });
          });
        }
        if (kind === "video" || kind === "audio") {
          menu.addItem((i) => {
            i.setTitle(t(this.app, "bgColor")).setIcon("palette");
            i.onClick(() => {
              const tr = (k) => t(this.app, k);
              new BgColorModal(this.app, this.meBgColor, ({ hex, isLocal }) => this.setMediaBgColor(hex, isLocal, host, notePath, key), tr, { isClone }).open();
            });
          });
        }
        if (!isClone && kind !== "note") {
          const firstChild = host.children[0];
          const isVisible = !firstChild || !firstChild.style.opacity || parseFloat(firstChild.style.opacity) > 0;
          menu.addItem((i) => {
            i.setTitle(isVisible ? t(this.app, "makeInvisible") : t(this.app, "makeVisible")).setIcon(isVisible ? "eye-off" : "eye");
            i.onClick(async () => {
              const newOpacity = isVisible ? "0" : "1";
              Array.from(host.children).forEach((child) => {
                if (child instanceof HTMLElement && !child.classList.contains("ms-overlay")) {
                  child.style.opacity = newOpacity;
                }
              });
              await this.saveState(notePath, key, { opacity: parseFloat(newOpacity) });
            });
          });
        }
        if (kind !== "note" && host.dataset.msDetached === "1") {
          const isLocked = host.dataset.msLocked === "1";
          if (!isLocked) {
            menu.addItem((item) => {
              item.setTitle(t(this.app, "lock")).setIcon("lock");
              item.onClick(async () => {
                host.dataset.msLocked = "1";
                await this.saveState(notePath, key, { locked: true });
                item.dom?.remove();
              });
            });
          } else {
            menu.addItem((item) => {
              item.setTitle(t(this.app, "unlock")).setIcon("unlock");
              item.onClick(async () => {
                host.dataset.msLocked = "0";
                await this.saveState(notePath, key, { locked: false });
                item.dom?.remove();
              });
            });
          }
        }
        {
          const noteHost = target.closest(".ms-note-host");
          if (noteHost) {
            const key2 = noteHost.dataset.msKey;
            const notePath2 = view?.file?.path ?? this.getActiveNote()?.path ?? "";
            menu.addSeparator();
            menu.addItem(
              (mi) => mi.setTitle(t(this.app, "deleteNote")).onClick(async () => {
                noteHost.remove();
                if (notePath2 && key2) {
                  delete this.notes[notePath2]?.originals?.[key2];
                  await this.persistAll();
                }
              })
            );
          }
        }
      })
    );
    this.addCommand({
      id: "ms-ping",
      name: t(this.app, "cmdPing"),
      callback: () => new import_obsidian.Notice(t(this.app, "pingOk"))
    });
    this.addCommand({
      id: "ms-open-settings",
      name: "Settings",
      callback: () => {
        new MediaLayoutSettingsModal(this.app, this).open();
      }
    });
    this.addCommand({
      id: "ms-export-logs",
      name: "\u{1F4CB} Export debug logs to note",
      callback: async () => {
        await this.exportLogsToNote();
      }
    });
    this.addCommand({
      id: "ms-save-logs",
      name: "\u{1F4BE} Save debug logs to file",
      callback: async () => {
        const path = await this.saveDebugLog();
        new import_obsidian.Notice(`\u{1F4BE} Logs saved to: ${path}`);
      }
    });
    this.addCommand({
      id: "ms-clear-logs",
      name: "\u{1F5D1}\uFE0F Clear debug logs",
      callback: () => {
        this.clearDebugLog();
      }
    });
    this.addCommand({
      id: "ms-toggle-debug",
      name: "\u{1F50D} Toggle debug mode",
      callback: () => {
        this.enableDebugMode = !this.enableDebugMode;
        new import_obsidian.Notice(`\u{1F50D} Debug mode: ${this.enableDebugMode ? "ON" : "OFF"}`);
        this.info("Debug mode toggled", { enabled: this.enableDebugMode });
        if (this.enableDebugMode) {
          this.autoSaveLogTimer = window.setInterval(() => {
            this.saveDebugLog();
          }, 3e4);
        } else if (this.autoSaveLogTimer) {
          clearInterval(this.autoSaveLogTimer);
          this.autoSaveLogTimer = null;
        }
      }
    });
    this.addCommand({
      id: "ms-create-backup",
      name: "\u{1F4BE} Create backup now",
      callback: async () => {
        await this.createBackup();
        new import_obsidian.Notice("\u2705 Backup created successfully");
      }
    });
    this.addCommand({
      id: "ms-restore-backup",
      name: "\u267B\uFE0F Restore from backup",
      callback: async () => {
        const backups = await this.listBackups();
        if (backups.length === 0) {
          new import_obsidian.Notice("\u26A0\uFE0F No backups found");
          return;
        }
        const menu = new import_obsidian.Menu();
        backups.forEach((backup) => {
          const dateStr = backup.date.toLocaleString();
          menu.addItem((item) => {
            item.setTitle(`${dateStr}`).setIcon("clock").onClick(async () => {
              const confirmed = await new Promise((resolve) => {
                const modal = new import_obsidian.Modal(this.app);
                modal.titleEl.setText("Restore from backup?");
                modal.contentEl.createEl("p", {
                  text: `This will restore data from: ${dateStr}
Current data will be overwritten.`
                });
                const btnContainer = modal.contentEl.createDiv({ cls: "modal-button-container" });
                const btnRestore = btnContainer.createEl("button", { text: "Restore" });
                const btnCancel = btnContainer.createEl("button", { text: "Cancel" });
                btnRestore.addEventListener("click", () => {
                  modal.close();
                  resolve(true);
                });
                btnCancel.addEventListener("click", () => {
                  modal.close();
                  resolve(false);
                });
                modal.open();
              });
              if (confirmed) {
                await this.restoreFromBackup(backup.path);
              }
            });
          });
        });
        menu.showAtMouseEvent(window.event);
      }
    });
    this.addCommand({
      id: "ms-list-backups",
      name: "\u{1F4CB} List all backups",
      callback: async () => {
        const backups = await this.listBackups();
        if (backups.length === 0) {
          new import_obsidian.Notice("\u26A0\uFE0F No backups found");
          return;
        }
        let message = `Found ${backups.length} backup(s):

`;
        backups.forEach((backup, index) => {
          message += `${index + 1}. ${backup.date.toLocaleString()}
`;
        });
        new import_obsidian.Notice(message, 1e4);
        console.log("[Media Layout] Available backups:", backups);
      }
    });
    const sb = this.addStatusBarItem();
    sb.setText(t(this.app, "sbReady"));
    sb.setAttr("title", t(this.app, "sbTitle"));
    sb.addEventListener("click", () => this.scanActive());
    this.backupTimer = window.setInterval(() => {
      this.createBackup();
    }, 10 * 60 * 1e3);
    this.schedule(() => this.createBackup(), 1e4);
  }
  async onunload() {
    if (this.enableDebugMode && this.debugLog.length > 0) {
      await this.saveDebugLog();
    }
    if (this.autoSaveLogTimer) {
      clearInterval(this.autoSaveLogTimer);
    }
    if (this.backupTimer) {
      clearInterval(this.backupTimer);
      this.backupTimer = null;
    }
    await this.persistAll();
    this.observers.forEach((o) => o.disconnect());
    this.observers.length = 0;
    document.getElementById(this.STYLE_ID)?.remove();
    document.getElementById("ms-global-handle-style")?.remove();
    document.getElementById("ms-modal-animation-style")?.remove();
  }
  // === МЕТОДЫ ЛОГИРОВАНИЯ ===
  log(level, message, data) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const entry = {
      timestamp,
      level,
      message,
      data
    };
    this.debugLog.push(entry);
    if (this.debugLog.length > this.maxDebugLines) {
      this.debugLog.shift();
    }
    if (this.enableDebugMode || level === "WARN" || level === "ERROR") {
      const dataStr = data ? ` ${JSON.stringify(data)}` : "";
      const fullMessage = `[Media Layout] [${level}] ${message}${dataStr}`;
      switch (level) {
        case "ERROR":
          console.error(fullMessage);
          break;
        case "WARN":
          console.warn(fullMessage);
          break;
        default:
          console.log(fullMessage);
      }
    }
  }
  debug(message, data) {
    this.log("DEBUG", message, data);
  }
  info(message, data) {
    this.log("INFO", message, data);
  }
  warn(message, data) {
    this.log("WARN", message, data);
  }
  error(message, data) {
    this.log("ERROR", message, data);
  }
  // Сохранение логов в файл
  async saveDebugLog() {
    try {
      const logPath = (0, import_obsidian.normalizePath)(`${this.manifest.dir}/debug.log`);
      const logContent = this.debugLog.map((entry) => {
        const dataStr = entry.data ? ` | Data: ${JSON.stringify(entry.data)}` : "";
        return `${entry.timestamp} [${entry.level}] ${entry.message}${dataStr}`;
      }).join("\n");
      await this.app.vault.adapter.write(logPath, logContent);
      this.logFilePath = logPath;
      console.log("[Media Layout] Debug log saved:", logPath, `(${this.debugLog.length} entries)`);
      return logPath;
    } catch (err) {
      console.error("[Media Layout] Failed to save debug log:", err);
      throw err;
    }
  }
  // Экспорт логов в заметку
  async exportLogsToNote() {
    try {
      const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, -5);
      const noteName = `Media Layout Debug ${timestamp}.md`;
      let content = `# Media Layout Debug Log

`;
      content += `Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}
`;
      content += `Total entries: ${this.debugLog.length}
`;
      content += `Debug mode: ${this.enableDebugMode ? "ON" : "OFF"}

`;
      content += `---

`;
      const byLevel = {
        ERROR: this.debugLog.filter((e) => e.level === "ERROR"),
        WARN: this.debugLog.filter((e) => e.level === "WARN"),
        INFO: this.debugLog.filter((e) => e.level === "INFO"),
        DEBUG: this.debugLog.filter((e) => e.level === "DEBUG")
      };
      content += `## Summary

`;
      content += `- Errors: ${byLevel.ERROR.length}
`;
      content += `- Warnings: ${byLevel.WARN.length}
`;
      content += `- Info: ${byLevel.INFO.length}
`;
      content += `- Debug: ${byLevel.DEBUG.length}

`;
      if (byLevel.ERROR.length > 0) {
        content += `## Recent Errors

`;
        byLevel.ERROR.slice(-10).forEach((entry) => {
          content += `### ${entry.timestamp}
`;
          content += `**${entry.message}**
`;
          if (entry.data) {
            content += `\`\`\`json
${JSON.stringify(entry.data, null, 2)}
\`\`\`
`;
          }
          content += `
`;
        });
      }
      content += `## Full Log

`;
      content += `\`\`\`
`;
      this.debugLog.forEach((entry) => {
        const dataStr = entry.data ? ` | ${JSON.stringify(entry.data)}` : "";
        content += `${entry.timestamp} [${entry.level}] ${entry.message}${dataStr}
`;
      });
      content += `\`\`\`
`;
      await this.app.vault.create(noteName, content);
      new import_obsidian.Notice(`\u2705 Logs exported to: ${noteName}`);
      const file = this.app.vault.getAbstractFileByPath(noteName);
      if (file instanceof import_obsidian.TFile) {
        await this.app.workspace.getLeaf(false).openFile(file);
      }
    } catch (err) {
      this.error("Failed to export logs to note", { error: String(err) });
      new import_obsidian.Notice("\u274C Failed to export logs");
    }
  }
  // Очистка логов
  clearDebugLog() {
    this.debugLog = [];
    this.info("Debug log cleared");
    new import_obsidian.Notice("\u{1F5D1}\uFE0F Debug log cleared");
  }
  // === СИСТЕМА БЭКАПОВ ===
  // Простой хеш для определения изменений
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash = hash & hash;
    }
    return hash.toString();
  }
  // Создание бэкапа
  async createBackup() {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) {
        console.warn("[Media Layout] Plugin dir is undefined, cannot create backup");
        return;
      }
      const data = {
        notes: this.notes ?? {},
        presets: this.presets ?? {},
        meBgColor: this.meBgColor ?? "#242424",
        userPresets: this.userPresets ?? [],
        layoutPresets: this.layoutPresets ?? {},
        layoutNames: this.layoutNames ?? {},
        cloneAnimation: this.cloneAnimation,
        cloneBgOpacity: this.cloneBgOpacity,
        cloneControlsOpacity: this.cloneControlsOpacity,
        cloneHideDelay: this.cloneHideDelay,
        noteRestoreDelay: this.noteRestoreDelay,
        cloneRestoreDelay: this.cloneRestoreDelay,
        cloneShowAudioHandles: this.cloneShowAudioHandles,
        enableModalAnimation: this.enableModalAnimation,
        hideDetachButton: this.hideDetachButton,
        cloneNearFile: this.cloneNearFile,
        showHandlesOnHover: this.showHandlesOnHover,
        backupTimestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      const dataStr = JSON.stringify(data);
      const currentHash = this.simpleHash(dataStr);
      if (currentHash === this.lastBackupHash) {
        console.log("[Media Layout] Data unchanged, skipping backup");
        return;
      }
      this.lastBackupHash = currentHash;
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hour = String(now.getHours()).padStart(2, "0");
      const minute = String(now.getMinutes()).padStart(2, "0");
      const backupFileName = `${day}_${month}_${year}_${hour}\uA789${minute}_data_backup.json`;
      const backupPath = (0, import_obsidian.normalizePath)(`${pluginDir}/${backupFileName}`);
      await this.app.vault.adapter.write(backupPath, JSON.stringify(data, null, 2));
      await this.cleanupOldBackups();
      this.log("INFO", "Backup created successfully", { fileName: backupFileName });
      console.log(`[Media Layout] Backup created: ${backupFileName}`);
    } catch (e) {
      console.error("[Media Layout] Failed to create backup:", e);
      this.error("Failed to create backup", { error: String(e) });
    }
  }
  // Очистка старых бэкапов (оставляем только 4 последних)
  async cleanupOldBackups() {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) return;
      const files = await this.app.vault.adapter.list(pluginDir);
      const backupFiles = files.files.filter((f) => f.endsWith("_data_backup.json")).map((f) => ({
        path: f,
        name: f.split("/").pop() || f
      })).sort((a, b) => b.name.localeCompare(a.name));
      if (backupFiles.length > 4) {
        const toDelete = backupFiles.slice(4);
        for (const file of toDelete) {
          await this.app.vault.adapter.remove(file.path);
          this.log("INFO", "Old backup removed", { fileName: file.name });
          console.log(`[Media Layout] Old backup removed: ${file.name}`);
        }
      }
    } catch (e) {
      console.error("[Media Layout] Failed to cleanup old backups:", e);
      this.error("Failed to cleanup old backups", { error: String(e) });
    }
  }
  // Список доступных бэкапов
  async listBackups() {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) return [];
      const files = await this.app.vault.adapter.list(pluginDir);
      const backupFiles = files.files.filter((f) => f.endsWith("_data_backup.json")).map((f) => {
        const name = f.split("/").pop() || f;
        const match = name.match(/^(\d{2})_(\d{2})_(\d{4})_(\d{2})꞉(\d{2})_data_backup\.json$/);
        let date = /* @__PURE__ */ new Date();
        if (match) {
          const [, day, month, year, hour, minute] = match;
          date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
        }
        return { path: f, name, date };
      }).sort((a, b) => b.date.getTime() - a.date.getTime());
      return backupFiles;
    } catch (e) {
      console.error("[Media Layout] Failed to list backups:", e);
      return [];
    }
  }
  // Восстановление из бэкапа
  async restoreFromBackup(backupPath) {
    try {
      const content = await this.app.vault.adapter.read(backupPath);
      const data = JSON.parse(content);
      this.notes = data.notes || {};
      this.presets = data.presets || {};
      this.userPresets = data.userPresets || [];
      this.layoutPresets = data.layoutPresets || {};
      this.layoutNames = data.layoutNames || {};
      this.meBgColor = data.meBgColor || "#242424";
      this.showHandlesOnHover = data.showHandlesOnHover ?? true;
      this.hideDetachButton = data.hideDetachButton ?? true;
      this.cloneNearFile = data.cloneNearFile ?? true;
      this.cloneAnimation = data.cloneAnimation || "popup";
      this.cloneBgOpacity = data.cloneBgOpacity ?? 1;
      this.cloneControlsOpacity = data.cloneControlsOpacity ?? 0.35;
      this.cloneHideDelay = data.cloneHideDelay ?? 2;
      this.cloneShowAudioHandles = data.cloneShowAudioHandles ?? true;
      this.cloneRestoreDelay = data.cloneRestoreDelay ?? 300;
      this.noteRestoreDelay = data.noteRestoreDelay ?? 200;
      this.enableModalAnimation = data.enableModalAnimation ?? true;
      await this.persistAll();
      const fileName = backupPath.split("/").pop() || backupPath;
      new import_obsidian.Notice(`\u2714\uFE0F Data restored from: ${fileName}`);
      this.log("INFO", "Backup restored successfully", { fileName });
      this.scanActive();
    } catch (e) {
      console.error("[Media Layout] Failed to restore from backup:", e);
      this.error("Failed to restore from backup", { error: String(e) });
      new import_obsidian.Notice("\u274C Failed to restore from backup");
    }
  }
  /* ========= scanning ========= */
  scanActive() {
    this.disconnectObservers();
    const root = this.getActiveContainerEl();
    if (!root) return;
    const notePath = this.getActiveNote()?.path ?? "";
    this.processRoot(root, notePath);
    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              this.processRoot(node, notePath);
            }
          });
        }
      }
    });
    mo.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "src"] });
    this.observers.push(mo);
    this.restoreClonesFromStore(notePath);
    this.ensureNotesFromStore(notePath);
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (view) {
      setTimeout(() => {
        this.app.workspace.trigger("markdown-render", view.contentEl);
      }, 100);
    }
  }
  disconnectObservers() {
    this.observers.forEach((o) => o.disconnect());
    this.observers.length = 0;
  }
  processRoot(rootEl, notePath) {
    const elementsToProcess = rootEl.matches(".internal-embed, .media-embed, .mx-media-embed, img, video, audio, .ms-note-host") ? [rootEl] : Array.from(rootEl.querySelectorAll(
      ".internal-embed, .media-embed, .mx-media-embed, img, video, audio, .markdown-reading-view video, .markdown-preview-view video, .ms-note-host"
    ));
    const nodes = elementsToProcess;
    nodes.forEach((hostLike, idx) => {
      const isNoteHost = hostLike.classList?.contains?.("ms-note-host");
      const host = isNoteHost ? hostLike : ["IMG", "VIDEO", "AUDIO"].includes(hostLike.tagName) ? hostLike.closest(".internal-embed, .media-embed, .mx-media-embed") ?? hostLike : hostLike;
      if (!(host instanceof HTMLElement)) return;
      if (host.dataset.msInit === "1") return;
      const media = isNoteHost ? host.querySelector(".ms-note") : host.querySelector("video, img, audio") ?? (["IMG", "VIDEO", "AUDIO"].includes(host.tagName) ? host : null);
      if (!media) return;
      const tag = isNoteHost ? "NOTE" : (media.tagName || "").toUpperCase();
      const kind = tag === "NOTE" ? "note" : tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";
      host.dataset.msInit = "1";
      host.classList.add("ms-host");
      const { src, base } = isNoteHost ? { src: "", base: "" } : this.getSrcAndBase(host, media);
      const key = isNoteHost ? host.dataset.msKey ?? this.makeNoteKey() : this.makeEmbedKey(src);
      host.dataset.msKey = key;
      const overlay = this.ensureOverlay(host);
      const handles = this.ensureHandles(overlay);
      host.append(overlay);
      if (kind === "image") {
        overlay.classList.add("--img");
        const onDown = (e) => {
          const m = e;
          if (m.button !== 0) return;
          window.getSelection()?.removeAllRanges();
        };
        overlay.addEventListener("pointerdown", onDown, { capture: true });
        overlay.addEventListener("mousedown", onDown, { capture: true });
        const killAfterUp = (e) => {
          const m = e;
          if (m.button !== 0) return;
          e.preventDefault();
          e.stopImmediatePropagation?.();
          requestAnimationFrame(() => window.getSelection()?.removeAllRanges());
        };
        overlay.addEventListener("mouseup", killAfterUp, { capture: true });
        overlay.addEventListener("click", killAfterUp, { capture: true });
        overlay.addEventListener("dblclick", killAfterUp, { capture: true });
      }
      this.applyKindBaseStyles(host, media, kind);
      const saved = this.loadStateWithFallback(notePath, key, base);
      if (saved) this.applyState(host, media, kind, saved);
      else {
        if (kind !== "image" && kind !== "note") {
          const rect = host.getBoundingClientRect();
          if (rect.width) this.applyState(host, media, kind, { w: Math.round(rect.width) });
        }
      }
      this.mountControlsForHost(host, media);
      this._attachDragMoveHandler(host, overlay, notePath, key, kind);
      this._attachResizeHandlers(host, overlay, handles, notePath, key, kind, media);
    });
  }
  /* ========= applying & persistence ========= */
  async applyAndSaveSize(notePath, key, host, media, kind, patch, forceFreeForImage) {
    const cur = this.readAbsRect(host);
    const next = {
      w: patch.w ?? cur.w,
      h: patch.h ?? cur.h,
      x: typeof patch.x === "number" ? patch.x : cur.x || 0,
      y: typeof patch.y === "number" ? patch.y : cur.y || 0,
      free: forceFreeForImage ? true : host.dataset.msFree === "1"
    };
    const wasDetached = host.dataset.msDetached === "1";
    next.detached = patch?.detached ?? wasDetached;
    if (kind === "image" && !forceFreeForImage) {
      const ar = this.getAR("image", media);
      if (typeof patch.w === "number" && typeof patch.h !== "number") next.h = Math.round(patch.w / ar);
      if (typeof patch.h === "number" && typeof patch.w !== "number") next.w = Math.round(patch.h * ar);
    }
    if (patch.reset) {
      next.x = 0;
      next.y = 0;
      next.w = void 0;
      next.h = void 0;
      next.free = false;
      next.detached = false;
      next.locked = false;
      this.applyKindBaseStyles(host, media, kind);
      this.reattach(host);
    } else {
      this.applyState(host, media, kind, next);
    }
    await this.saveState(notePath, key, next);
    return next;
  }
  // 2-фазное применение пресета: сначала режим/размеры, потом координаты
  async applyLayout(notePath, layout) {
    const root = this.getAttachRoot();
    if (root) {
      for (const [key, st] of Object.entries(layout)) {
        if (!key.includes("::clone::")) continue;
        const existingClone = root.querySelector(`[data-ms-key="${CSS.escape(key)}"]`);
        if (existingClone) {
          const media = existingClone.querySelector("video, img, audio");
          const tag = media?.tagName?.toUpperCase();
          const kind = tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";
          if (media) {
            this.applyState(existingClone, media, kind, st);
            await this.saveState(notePath, key, st, false);
          }
          continue;
        }
        let parentKey = st.parentKey;
        const parentAnchor = st.parentAnchor;
        let originalHost = parentKey ? this.findHostByKey(parentKey) : null;
        if (!originalHost && parentAnchor) {
          const anchorIndex = this.buildAnchorIndex(root);
          const remappedKey = anchorIndex.get(parentAnchor);
          if (remappedKey) {
            parentKey = remappedKey;
            originalHost = this.findHostByKey(parentKey);
          }
        }
        if (!originalHost && parentKey) {
          const virtualHost = await this.createHostFromTFile(notePath, parentKey);
          if (virtualHost) {
            originalHost = virtualHost;
          }
        }
        if (!originalHost || !parentKey) {
          console.warn(`[MS] applyLayout: Could not find or create original for clone ${key}. Skipping.`);
          continue;
        }
        const cloneHost = this.createCleanCloneElement(originalHost);
        const cloneState = this.notes[notePath]?.clones?.[key];
        const fileNameFromStore = cloneState?.fileName;
        const fileNameFromPreset = st?.fileName;
        let fileName = fileNameFromStore ?? fileNameFromPreset;
        if (!fileName && parentKey) {
          const originalHost2 = this.findHostByKey(parentKey);
          const mediaEl = originalHost2?.querySelector("video, audio, img");
          if (originalHost2 && mediaEl) {
            const { base } = this.getSrcAndBase(originalHost2, mediaEl);
            fileName = base || void 0;
          }
        }
        await this.saveState(notePath, key, st, false);
        this.createCloneHost(root, cloneHost, key, parentKey, st.x ?? 0, st.y ?? 0, true, fileName);
      }
    }
    const hosts = this.enumerateHostsInNote(notePath);
    if (!hosts.length) return;
    const toMove = [];
    const noteData = this.notes[notePath] ??= { originals: {}, clones: {} };
    const originals = noteData.originals ??= {};
    const clones = noteData.clones ??= {};
    for (const { host, media, kind, key } of hosts) {
      const st0 = layout[key];
      if (!st0) continue;
      const prev = originals[key] ?? {};
      const st = {
        ...st0,
        detached: st0.detached ?? host.dataset.msDetached === "1",
        // ИСПРАВЛЕНО: Читаем реальное состояние из DOM
        locked: st0.locked ?? host.dataset.msLocked === "1",
        x: st0.x ?? 0,
        y: st0.y ?? 0,
        // Явно передаём цвета и прозрачность из пресета
        bgColor: st0.bgColor,
        headerColor: st0.headerColor,
        transparent: st0.transparent,
        // Для табличек также передаём текст и размер шрифта
        txt: st0.txt,
        fontSize: st0.fontSize,
        textStrokeColor: st0.textStrokeColor,
        textStroke: st0.textStroke,
        textColor: st0.textColor,
        free: st0.free ?? prev.free ?? false,
        volume: st0.volume
        // <--- ИСПРАВЛЕНО: Передаём громкость из пресета
      };
      if (!key.includes("::clone::") && kind !== "note") continue;
      if (kind === "note") {
        host.classList.remove("ms-note-transparent");
        if (st.bgColor || st.headerColor) st.transparent = false;
      }
      const w = st.w ?? (host.getBoundingClientRect().width || media?.clientWidth || 0);
      const h = st.h ?? (host.getBoundingClientRect().height || media?.clientHeight || 0);
      if (st.detached) {
        this.ensureParentAnchor(host);
        host.style.position = "absolute";
        host.style.left = "0px";
        host.style.top = "0px";
        host.dataset.msDetached = "1";
        host.dataset.msLocked = st.locked ? "1" : "0";
      } else {
        host.dataset.msDetached = "0";
        host.dataset.msLocked = "0";
        this.reattach(host);
      }
      this.applyBox(host, media, kind, w, h, st.free === true);
      this.applyTransform(host, st.x || 0, st.y || 0);
      if (host.dataset.msParentKey) {
        clones[key] = {
          ...clones[key] || {},
          parentKey: host.dataset.msParentKey,
          w,
          h,
          x: st.x,
          y: st.y,
          locked: !!st.locked,
          volume: st.volume,
          zIndex: st.zIndex,
          // <--- Добавлено
          bgColor: st.bgColor,
          // <--- Добавлено
          opacity: st.opacity
        };
      } else if (key.includes("::clone::")) {
        clones[key] = { ...clones[key] || {}, parentKey: st.parentKey, w, h, x: st.x, y: st.y, locked: !!st.locked };
      } else {
        originals[key] = {
          ...prev,
          w,
          h,
          x: st.x,
          y: st.y,
          free: !!st.free,
          detached: !!st.detached,
          zIndex: st.zIndex,
          // <--- Добавлено
          opacity: st.opacity,
          transparent: st.transparent,
          bgColor: st.bgColor,
          textStrokeColor: st.textStrokeColor,
          textStroke: st.textStroke,
          textColor: st.textColor,
          headerColor: st.headerColor,
          locked: !!st.locked
        };
      }
      toMove.push({ host, x: st.x || 0, y: st.y || 0 });
      this.applyState(host, media, kind, st);
      this.debug("applyLayout: z-index applied", {
        key,
        zIndexInState: st.zIndex,
        zIndexInDOM: host.style.zIndex,
        isClone: !!host.dataset.msParentKey
      });
      await this.saveState(notePath, key, st, false);
    }
    await new Promise((r) => requestAnimationFrame(() => r()));
    for (const { host, x, y } of toMove) this.applyTransform(host, x, y);
    const currentNotePath = this.getActiveNote()?.path;
    if (currentNotePath) {
      const attachRoot = this.getAttachRoot();
      if (attachRoot) {
        const layer = this.ensureFloatLayer(attachRoot);
        for (const [key, st] of Object.entries(layout)) {
          if (key.startsWith("note::")) {
            const exists = layer.querySelector(`.ms-note-host[data-ms-key="${CSS.escape(key)}"]`);
            if (!exists) {
              const isTransparent = st.bgColor || st.headerColor ? false : st.transparent;
              const host = this.createNoteHost(attachRoot, key, st.x ?? 0, st.y ?? 0, {
                w: st.w,
                h: st.h,
                txt: st.txt ?? "",
                fontSize: st.fontSize ?? 16,
                bgColor: st.bgColor,
                headerColor: st.headerColor
              });
              if (st.transparent) {
                host.classList.add("ms-note-transparent");
              }
              if (isTransparent) {
                host.querySelector(".ms-note-body").style.color = st.textColor;
                host.classList.add("ms-note-transparent");
              }
              if (currentNotePath) {
                await this.saveState(currentNotePath, key, st);
              }
            }
          }
        }
      }
    }
    for (const { host } of toMove) {
      if (host.dataset.msInit !== "1") {
        host.dataset.msInit = "1";
        const overlay = this.ensureOverlay(host);
        const handles = this.ensureHandles(overlay);
        host.append(overlay);
      }
    }
    for (const { host, x, y } of toMove) {
      const r = this.readAbsRect(host);
      const dx = x - (r.x || 0);
      const dy = y - (r.y || 0);
      if (dx !== 0 || dy !== 0) {
        const st = getComputedStyle(host);
        const m = /matrix\(([^)]+)\)/.exec(st.transform || "");
        const tx = m ? parseFloat(m[1].split(",")[4]) || 0 : 0;
        const ty = m ? parseFloat(m[1].split(",")[5]) || 0 : 0;
        this.applyTransform(host, tx + dx, ty + dy);
      }
    }
    const stopAt = Date.now() + 500;
    const realign = (host, x, y) => {
      const r = this.readAbsRect(host);
      const dx = x - (r.x || 0);
      const dy = y - (r.y || 0);
      if (dx || dy) {
        const st = getComputedStyle(host);
        const m = /matrix\(([^)]+)\)/.exec(st.transform || "");
        const tx = m ? parseFloat(m[1].split(",")[4]) || 0 : 0;
        const ty = m ? parseFloat(m[1].split(",")[5]) || 0 : 0;
        this.applyTransform(host, tx + dx, ty + dy);
      }
    };
    const observers = [];
    for (const { host, x, y } of toMove) {
      const ro = new ResizeObserver(() => {
        if (Date.now() > stopAt) return;
        realign(host, x, y);
      });
      ro.observe(host);
      observers.push(ro);
      setTimeout(() => {
        if (Date.now() <= stopAt) realign(host, x, y);
      }, 10);
      setTimeout(() => {
        if (Date.now() <= stopAt) realign(host, x, y);
      }, 100);
      setTimeout(() => {
        if (Date.now() <= stopAt) realign(host, x, y);
      }, 300);
      requestAnimationFrame(() => realign(host, x, y));
    }
    setTimeout(() => observers.forEach((o) => o.disconnect()), 600);
  }
  async saveLayoutToState(notePath, layout) {
    for (const [key, st] of Object.entries(layout)) {
      await this.saveState(notePath, key, st);
    }
  }
  applyState(host, media, kind, st) {
    const isClone = !!host.dataset.msParentKey;
    host.dataset.msKind = kind;
    const w = st.w ?? (host.getBoundingClientRect().width || media?.clientWidth || 0);
    const h = st.h ?? (host.getBoundingClientRect().height || media?.clientHeight || 0);
    if (isClone && (typeof st.w !== "number" || typeof st.h !== "number")) {
      this.debug("applyState: Clone has missing size in state, using fallback", {
        key: host.dataset.msKey,
        hasW: typeof st.w === "number",
        hasH: typeof st.h === "number",
        fallbackW: w,
        fallbackH: h
      });
    }
    this.applyBox(host, media, kind, w, h, st.free === true);
    if (st.detached || isClone || kind === "note") {
      this.ensureParentAnchor(host);
      host.style.position = "absolute";
      host.style.left = "0px";
      host.style.top = "0px";
      host.dataset.msDetached = "1";
      this.applyTransform(host, st.x || 0, st.y || 0);
      host.dataset.msLocked = st.locked ? "1" : "0";
    } else {
      host.dataset.msDetached = "0";
      host.dataset.msLocked = "0";
      if (!isClone) this.reattach(host);
    }
    if (isClone && typeof st.volume === "number" && media instanceof HTMLMediaElement) {
      media.volume = clamp(st.volume, 0, 1);
      media.muted = st.volume === 0;
    }
    if (isClone && st.bgColor) {
      const localBg = this.ensureLocalBg(host);
      if (st.bgColor === "transparent") {
        host.querySelector(".ms-media-bg")?.remove();
        localBg.remove();
        return;
      }
      localBg.style.backgroundColor = st.bgColor;
    }
    if ((isClone || st.detached) && typeof st.zIndex === "number") {
      host.style.zIndex = String(st.zIndex);
    }
    if (isClone && kind === "image" && st.link) {
      this.applyLinkOverlay(host, st.link);
    }
    if (!isClone && typeof st.opacity === "number") {
      const opacityValue = String(st.opacity);
      Array.from(host.children).forEach((child) => {
        if (child instanceof HTMLElement && !child.classList.contains("ms-overlay")) {
          child.style.opacity = opacityValue;
        }
      });
    }
    if (kind === "note") {
      const noteBody = host.querySelector(".ms-note");
      const textBody = host.querySelector(".ms-note-body");
      if (textBody) {
        textBody.textContent = st.txt ?? "";
        textBody.style.fontSize = `${Math.max(10, st.fontSize ?? 16)}px`;
      }
      const noteHeader = host.querySelector(".ms-note-top");
      if (noteBody) {
        noteBody.style.backgroundColor = st.bgColor || "";
      }
      const isTransparent = st.bgColor || st.headerColor ? false : st.transparent;
      if (noteHeader) {
        const headerColor = st.headerColor;
        noteHeader.style.backgroundColor = headerColor || "";
      }
      if (isTransparent) {
        host.classList.add("ms-note-transparent");
      }
      if (kind === "note") {
        const noteBody2 = host.querySelector(".ms-note-body");
        if (noteBody2) {
          const hasStroke = !!st.textStroke;
          noteBody2.style.color = st.textColor || "";
          noteBody2.classList.toggle("ms-note-text-stroked", hasStroke);
          if (hasStroke) {
            noteBody2.style.setProperty("--note-stroke-color", st.textStrokeColor || st.textColor || "#FFFFFF");
          }
        }
      }
    }
  }
  applyBox(host, media, kind, w, h, freeImage = false) {
    if (kind === "video") {
      host.style.width = `${Math.round(w)}px`;
      host.style.maxWidth = `${Math.round(w)}px`;
      const isClone = !!host.dataset.msParentKey;
      const hasME = this.isMediaExtendedActive(host);
      const videoAR = isClone || hasME ? 16 / 9 : media ? this.getAR(kind, media) : 16 / 9;
      host.style.aspectRatio = `${videoAR}`;
      if (isClone) {
        host.style.height = `${Math.round(w / videoAR)}px`;
      }
      if (media) media.style.width = "100%";
      if (media) media.style.height = "100%";
      if (media) media.style.objectFit = "contain";
      if (media) media.style.objectPosition = "center center";
    } else if (kind === "audio") {
      host.style.width = `${Math.round(w)}px`;
      host.style.maxWidth = `${Math.round(w)}px`;
      if (host.dataset.msParentKey) {
        host.style.height = "70px";
      } else {
        host.style.aspectRatio = "12 / 1";
      }
      if (media) media.style.width = "100%";
      if (media) media.style.height = "100%";
    } else if (kind === "note") {
      const iw = Math.round(w);
      const ih = Math.max(60, Math.round(typeof h === "number" ? h : 160));
      host.style.width = `${iw}px`;
      host.style.maxWidth = `${iw}px`;
      host.style.height = `${ih}px`;
      host.style.aspectRatio = "auto";
      host.style.display = "block";
    } else {
      if (!media) return;
      const ar = this.getAR("image", media);
      const iw = Math.round(w);
      const ih = Math.max(1, Math.round(typeof h === "number" ? h : iw / ar));
      host.style.width = `${iw}px`;
      host.style.maxWidth = `${iw}px`;
      host.style.height = `${ih}px`;
      host.style.aspectRatio = "auto";
      if (media) media.style.width = "100%";
      if (media) media.style.height = "100%";
      if (media) media.style.objectFit = "fill";
      host.dataset.msFree = freeImage ? "1" : "0";
    }
    host.style.display = "block";
  }
  // ИСПРАВЛЕНО: Возвращаем старую логику. Эта функция читает ТЕКУЩИЙ transform, что критично для drag-n-drop.
  // Она НЕ вычисляет визуальную позицию на экране.
  readAbsRect(host) {
    const sizer = host.closest(".cm-sizer, .markdown-preview-sizer");
    if (!sizer) {
      console.warn("[Media Layout] readAbsRect: No sizer found for", host.dataset.msKey, "- returning zeros");
      return { x: 0, y: 0, w: 0, h: 0 };
    }
    const hostRect = host.getBoundingClientRect();
    const sizerRect = sizer.getBoundingClientRect();
    const x = hostRect.left - sizerRect.left;
    const y = hostRect.top - sizerRect.top;
    const w = hostRect.width;
    const h = hostRect.height;
    return { x, y, w, h };
  }
  readAbsOrig(host) {
    const st = getComputedStyle(host);
    const w = parseFloat(st.width) || void 0;
    const h = parseFloat(st.height) || void 0;
    const tr = st.transform;
    let x = 0, y = 0;
    if (tr && tr !== "none") {
      const m = tr.match(/matrix\(([^)]+)\)/);
      if (m) {
        const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
        x = parts[4] || 0;
        y = parts[5] || 0;
      }
    }
    const free = host.dataset.msFree === "1";
    return { w, h, x, y, free };
  }
  // НОВАЯ ФУНКЦИЯ: Вычисляет визуальные координаты относительно контейнера. Используется ТОЛЬКО для сохранения.
  readVisualRectForSave(host) {
    const root = this.getHostRoot(host);
    const r = host.getBoundingClientRect();
    if (!root) return { x: r.left, y: r.top, w: r.width, h: r.height };
    const rp = root.getBoundingClientRect();
    const cs = getComputedStyle(root);
    const originLeft = rp.left + (parseFloat(cs.borderLeftWidth) || 0) - root.scrollLeft;
    const originTop = rp.top + (parseFloat(cs.borderTopWidth) || 0) - root.scrollTop;
    return { x: r.left - originLeft, y: r.top - originTop, w: r.width, h: r.height };
  }
  applyTransform(host, x, y) {
    host.style.transform = `translate(${x}px, ${y}px)`;
    if (this.enableDebugMode && host.dataset.msParentKey) {
      const leafCount = this.app.workspace.getLeavesOfType("markdown").length;
      this.debug("applyTransform to clone", {
        cloneId: host.dataset.msKey,
        x,
        y,
        leafCount
      });
    }
  }
  readAppliedRect(host) {
    return this.readAbsRect(host);
  }
  // Сохранить состояние media/клона в новую структуру notes{originals,clones}
  // КРИТИЧНО: По умолчанию вызывает persistAll (для обратной совместимости)
  // Передайте autoPersist=false если сохраняете много элементов в цикле
  async saveState(notePath, key, partial, autoPersist = true) {
    if (!notePath) return;
    this.notes ||= {};
    this.notes[notePath] ||= { originals: {}, clones: {} };
    const isCloneKey = key.includes("::clone::");
    const isCloneDom = !!this.getActiveContainerEl()?.querySelector(`[data-ms-key="${CSS.escape(key)}"][data-ms-parent-key]`);
    const isClone = isCloneKey || isCloneDom;
    const bucket = isClone ? this.notes[notePath].clones : this.notes[notePath].originals;
    if (!bucket[key]) {
      bucket[key] = {};
    }
    bucket[key] = { ...bucket[key] || {}, ...partial };
    if (autoPersist) {
      await this.persistAll();
    }
  }
  // Единая запись на диск (оставь как есть, либо приведи к такому виду):
  async persistAll() {
    if (this.persistInProgress) {
      if (this.persistQueue) {
        await this.persistQueue;
      }
      return;
    }
    this.persistInProgress = true;
    const currentPersist = (async () => {
      try {
        const data = {
          notes: this.notes ?? {},
          presets: this.presets ?? {},
          meBgColor: this.meBgColor ?? "#242424",
          userPresets: this.userPresets ?? [],
          layoutPresets: this.layoutPresets ?? {},
          layoutNames: this.layoutNames ?? {},
          cloneAnimation: this.cloneAnimation,
          cloneBgOpacity: this.cloneBgOpacity,
          cloneControlsOpacity: this.cloneControlsOpacity,
          cloneHideDelay: this.cloneHideDelay,
          noteRestoreDelay: this.noteRestoreDelay,
          cloneRestoreDelay: this.cloneRestoreDelay,
          cloneShowAudioHandles: this.cloneShowAudioHandles,
          enableModalAnimation: this.enableModalAnimation,
          hideDetachButton: this.hideDetachButton,
          cloneNearFile: this.cloneNearFile,
          showHandlesOnHover: this.showHandlesOnHover
        };
        await this.saveData(data);
      } catch (error) {
        console.error("[Media Layout] Failed to persist data:", error);
      } finally {
        this.persistInProgress = false;
        this.persistQueue = null;
      }
    })();
    this.persistQueue = currentPersist;
    await currentPersist;
  }
  addUserPreset(n) {
    this.userPresets = [n, ...this.userPresets.filter((v) => v !== n)].slice(0, MAX_WIDTH_PRESETS);
    return this.persistAll();
  }
  removeUserPreset(n) {
    this.userPresets = this.userPresets.filter((v) => v !== n);
    return this.persistAll();
  }
  loadStateWithFallback(notePath, key, basename) {
    const noteData = this.notes[notePath];
    if (!noteData) return void 0;
    const originals = noteData.originals ?? {};
    const byKey = originals[key];
    if (byKey) return byKey;
    if (basename) {
      for (const k of Object.keys(originals)) {
        if (k.startsWith("note::") || k.includes("::clone::")) continue;
        const b = this.extractBaseFromKey(k);
        if (b && b === basename) {
          const stateToMigrate = originals[k];
          originals[key] = stateToMigrate;
          this.persistAll();
          console.log(`Media-Size: Migrated state from old key "${k}" to new key "${key}"`);
          return stateToMigrate;
        }
      }
    }
    return void 0;
  }
  /* ========= helpers ========= */
  // Проверка, включен ли Media Extended (создает контейнеры 16:9)
  isMediaExtendedActive(host) {
    const hasPlugin = this.app.plugins?.enabledPlugins?.has?.("media-extended") || this.app.plugins?.plugins?.["media-extended"];
    if (host) {
      const hasMEContainer = !!host.closest(".mx-media-embed, .media-embed");
      return hasPlugin && hasMEContainer;
    }
    return !!hasPlugin;
  }
  getAR(kind, media) {
    if (kind === "image") {
      const img = media;
      const iw = img.naturalWidth || img.clientWidth || 1;
      const ih = img.naturalHeight || img.clientHeight || 1;
      return iw / Math.max(1, ih);
    }
    if (kind === "video") {
      const vid = media;
      const vw = vid.videoWidth || 1920;
      const vh = vid.videoHeight || 1080;
      return vw / Math.max(1, vh);
    }
    return 9 / 1;
  }
  // Корневой элемент редактора/превью, внутри которого живёт контент
  getAttachRoot() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    const src = view?.containerEl.querySelector(".markdown-source-view .cm-scroller");
    if (src) return src;
    const read = view?.containerEl.querySelector(".markdown-reading-view");
    if (read) return read;
    return null;
  }
  // NEW: Возвращает root для конкретного host'а (leaf-scoped)
  getHostRoot(host) {
    const containerEl = host.closest(".workspace-leaf-content");
    if (!containerEl) return null;
    const src = containerEl.querySelector(".markdown-source-view .cm-scroller");
    if (src) return src;
    const read = containerEl.querySelector(".markdown-reading-view");
    if (read) return read;
    return null;
  }
  // NEW: Возвращает containerEl для конкретного host'а (leaf-scoped)
  getHostContainerEl(host) {
    return host.closest(".workspace-leaf-content");
  }
  isControlsTarget(el) {
    if (!el) return false;
    return !!el.closest(
      ".ob-video-controls, .media-controls, .mejs__controls, .plyr__controls, .vjs-control-bar, .me-controls, [class*='controls']"
    );
  }
  /** Возвращает true, если координаты (x,y) попали в любую кнопку панели управления плеера внутри host */
  isControlsPoint(host, x, y) {
    const sels = [
      ".ob-video-controls",
      ".media-controls",
      ".mejs__controls",
      ".plyr__controls",
      ".vjs-control-bar",
      ".me-controls",
      "[class*='controls']"
    ];
    let panel = null;
    for (const s of sels) {
      panel = host.querySelector(s);
      if (panel) break;
    }
    if (!panel) return false;
    const btns = panel.querySelectorAll("button, [role='button'], .plyr__control, .vjs-control");
    for (const b of Array.from(btns)) {
      const r = b.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true;
    }
    return false;
  }
  extractBaseFromKey(key) {
    const parts = key.split("::");
    const fromSrc = parts.find((p) => p.includes("/")) ?? parts[0];
    const lastSlash = Math.max(fromSrc.lastIndexOf("/"), fromSrc.lastIndexOf("\\"));
    return fromSrc.substring(lastSlash + 1) || null;
  }
  getSrcAndBase(host, el) {
    const s = host.getAttribute("src") || host.getAttribute("alt") || el.getAttribute("src") || "";
    const lastSlash = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
    const base = s.substring(lastSlash + 1);
    return { src: s, base };
  }
  // ИСПРАВЛЕНИЕ: Коррекция координат клонов при переключении вкладок в сплите
  realignClonesIfNeeded(notePath) {
    const leaves = this.app.workspace.getLeavesOfType("markdown").filter((leaf) => {
      const view = leaf.view;
      return view.file?.path === notePath;
    });
    if (!leaves.length) return;
    const noteData = this.notes[notePath];
    if (!noteData?.clones) return;
    leaves.forEach((leaf) => {
      const view = leaf.view;
      const containerEl = view.containerEl;
      if (!containerEl) return;
      for (const [key, st] of Object.entries(noteData.clones)) {
        const host = containerEl.querySelector(`[data-ms-key="${CSS.escape(key)}"]`);
        if (!host || !st.x || !st.y) continue;
        const r = this.readAbsRect(host);
        const dx = (st.x || 0) - (r.x || 0);
        const dy = (st.y || 0) - (r.y || 0);
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          const style = getComputedStyle(host);
          const m = /matrix\(([^)]+)\)/.exec(style.transform || "");
          const tx = m ? parseFloat(m[1].split(",")[4]) || 0 : 0;
          const ty = m ? parseFloat(m[1].split(",")[5]) || 0 : 0;
          this.applyTransform(host, tx + dx, ty + dy);
        }
      }
    });
  }
  // Helper to find an original host by its key in the current document
  findHostByKey(key) {
    const root = this.getActiveContainerEl();
    if (!root) return null;
    const hosts = root.querySelectorAll(`.ms-host[data-ms-key="${CSS.escape(key)}"]`);
    return hosts.length > 0 ? hosts[0] : null;
  }
  enumerateHostsInNote(notePath) {
    const root = this.getActiveContainerEl();
    if (!root) return [];
    const nodes = root.querySelectorAll(
      ".internal-embed, .media-embed, .mx-media-embed, img, video, audio, .ms-note-host"
    );
    const list = [];
    nodes.forEach((hostLike) => {
      const isNote = hostLike.classList.contains("ms-note-host");
      const host = isNote ? hostLike : ["IMG", "VIDEO", "AUDIO"].includes(hostLike.tagName) ? hostLike.closest(".internal-embed, .media-embed, .mx-media-embed") ?? hostLike : hostLike;
      const media = isNote ? host.querySelector(".ms-note") : host.querySelector("video, img, audio") ?? host;
      if (!media) return;
      const tag = isNote ? "NOTE" : (media.tagName || "").toUpperCase();
      const kind = tag === "NOTE" ? "note" : tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";
      const { src } = isNote ? { src: "" } : this.getSrcAndBase(host, media);
      let key = host.dataset.msKey;
      if (!key) key = isNote ? this.makeNoteKey() : this.makeEmbedKey(src);
      host.dataset.msKey = key;
      list.push({ host, media, kind, key });
    });
    return list;
  }
  addSizePresetsMenu(menu, notePath, key, host, media, kind) {
    menu.addItem((i) => {
      i.setTitle(t(this.app, "presets")).setIcon("expand");
      const sub = i.setSubmenu();
      this.userPresets.forEach((val) => {
        sub.addItem((si) => {
          si.setTitle(String(val)).onClick(async () => {
            await this.applyAndSaveSize(notePath, key, host, media, kind, { w: val });
          });
          const root = si.dom;
          root.classList.add("ms-preset-item");
          const btn = root.createDiv({ cls: "ms-preset-del" });
          btn.onclick = async (ev) => {
            ev.stopPropagation();
            this.removeUserPreset(val);
            root.remove();
          };
        });
      });
      if (this.userPresets.length) sub.addSeparator();
      sub.addItem(
        (si) => si.setTitle(t(this.app, "fit")).onClick(async () => {
          const parent = host.parentElement ?? host;
          const pw = Math.round(parent.clientWidth || parent.getBoundingClientRect().width);
          await this.applyAndSaveSize(notePath, key, host, media, kind, { w: pw });
        })
      );
      if (kind !== "audio") {
        sub.addItem(
          (si) => si.setTitle(t(this.app, "natural")).onClick(async () => {
            if (kind === "image") {
              const iw = media.naturalWidth || media.clientWidth || 0;
              const ih = media.naturalHeight || media.clientHeight || 0;
              await this.applyAndSaveSize(notePath, key, host, media, kind, { w: iw, h: ih });
            } else {
              const v = media;
              const w = v.videoWidth > 0 ? v.videoWidth : media.clientWidth || 0;
              await this.applyAndSaveSize(notePath, key, host, media, kind, { w });
            }
          })
        );
      }
      sub.addSeparator();
      [144, 480, 640, 720, 1280, 1920].forEach(
        (sz) => sub.addItem((si) => si.setTitle(String(sz)).onClick(async () => {
          await this.applyAndSaveSize(notePath, key, host, media, kind, { w: sz });
        }))
      );
      sub.addItem(
        (si) => si.setTitle(t(this.app, "add")).setIcon("plus").onClick(async () => {
          if (this.userPresets.length >= MAX_WIDTH_PRESETS) {
            new import_obsidian.Notice("\u274C " + t(this.app, "maxReached"));
            return;
          }
          new WidthPresetModal(this.app, async (n) => {
            if (n == null) return;
            await this.addUserPreset(n);
            await this.applyAndSaveSize(notePath, key, host, media, kind, { w: n });
            new import_obsidian.Notice(t(this.app, "added", { n }));
          }).open();
        })
      );
    });
  }
  addPositionPresetsMenu(menu, notePath) {
    menu.addItem((i) => {
      i.setTitle(t(this.app, "posPresets")).setIcon("save");
      const sub = i.setSubmenu();
      sub.addItem((si) => {
        si.setTitle(t(this.app, "resetAll")).setIcon("rotate-ccw").onClick(async () => {
          await this.resetAll(notePath);
        });
      });
      sub.addItem((si) => {
        si.setTitle(t(this.app, "saveLayout")).setIcon("save").onClick(async (si2) => {
          const layout = this.collectLayout(notePath);
          const arr = this.layoutPresets[notePath] ??= [];
          if (arr.length >= MAX_LAYOUT_PRESETS) {
            new import_obsidian.Notice("\u2716 " + t(this.app, "layoutMax"));
            return;
          }
          arr.push(layout);
          const names = this.layoutNames[notePath] ??= [];
          const baseName = t(this.app, "layoutN", { n: "" }).replace("{n}", "").trim();
          let maxNum = 0;
          names.forEach((name) => {
            if (name.startsWith(baseName)) {
              const num = parseInt(name.substring(baseName.length).trim(), 10);
              if (!isNaN(num) && num > maxNum) maxNum = num;
            }
          });
          names.push(t(this.app, "layoutN", { n: maxNum + 1 }));
          await this.persistAll();
        });
      });
      (this.layoutPresets[notePath] ?? []).forEach((layout, idx) => {
        sub.addItem((si) => {
          const names = this.layoutNames[notePath] ??= [];
          const title = names[idx] ?? t(this.app, "layoutN", { n: idx + 1 });
          si.setTitle(title).onClick(async () => {
            if (this.presetTimerId !== null) {
              clearTimeout(this.presetTimerId);
              this.pendingTimers.delete(this.presetTimerId);
              this.presetTimerId = null;
            }
            await this.applyLayout(notePath, layout);
            await this.persistAll();
            this.presetTimerId = this.schedule(async () => {
              const currentPath = this.getActiveNote()?.path;
              if (currentPath !== notePath) {
                console.log("[Media Layout] Preset application cancelled: file changed");
                this.presetTimerId = null;
                return;
              }
              await this.applyLayout(notePath, layout);
              this.applyCloneSettingsToAll();
              await this.persistAll();
              this.presetTimerId = null;
            }, 500);
          });
          const root = si.dom;
          root.classList.add("ms-preset-item");
          const edit = root.createDiv({ cls: "ms-preset-edit" });
          edit.onclick = async (ev) => {
            ev.stopPropagation();
            new RenamePresetModal(this.app, names[idx] ?? "", async (val) => {
              if (val == null) return;
              names[idx] = val;
              si.dom.querySelector(".menu-item-title")?.setText(val);
              await this.persistAll();
            }).open();
          };
          const del = root.createDiv({ cls: "ms-preset-del" });
          del.onclick = async (ev) => {
            ev.stopPropagation();
            const arr = this.layoutPresets[notePath] ?? [];
            const pos = arr.indexOf(layout);
            if (pos >= 0) {
              arr.splice(pos, 1);
              if (names && pos < names.length) names.splice(pos, 1);
            }
            root.remove();
            await this.persistAll();
          };
        });
      });
      sub.addSeparator();
      sub.addItem((si) => {
        si.setTitle(t(this.app, "copyLayout")).setIcon("copy").onClick(async () => {
          const noteData = this.notes[notePath];
          const presets = this.layoutPresets[notePath];
          const names = this.layoutNames[notePath];
          const hasNoteData = noteData && (Object.keys(noteData.originals).length || Object.keys(noteData.clones).length);
          const hasPresets = presets && presets.length > 0;
          if (!hasNoteData && !hasPresets) {
            new import_obsidian.Notice("No layout data to copy.");
            return;
          }
          const dataToCopy = {
            noteData: noteData ?? { originals: {}, clones: {} },
            presets: presets ?? [],
            names: names ?? []
          };
          await navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
          new import_obsidian.Notice("\u2714\uFE0F " + t(this.app, "layoutCopied"));
        });
      });
      sub.addItem((si) => {
        si.setTitle(t(this.app, "pasteLayout")).setIcon("paste").onClick(async () => {
          try {
            const text = await navigator.clipboard.readText();
            const data = JSON.parse(text);
            if (data && data.noteData && Array.isArray(data.presets) && Array.isArray(data.names)) {
              this.notes[notePath] = data.noteData;
              this.layoutPresets[notePath] = data.presets;
              this.layoutNames[notePath] = data.names;
              await this.persistAll();
              new import_obsidian.Notice("\u2714\uFE0F " + t(this.app, "layoutPasted"));
              this.scanActive();
            } else {
              new import_obsidian.Notice("\u274C " + t(this.app, "invalidLayoutData"));
            }
          } catch (e) {
            new import_obsidian.Notice("\u274C " + t(this.app, "pasteLayoutFailed"));
            console.error("Media-Size paste error:", e);
          }
        });
      });
    });
  }
  // Поднять клоны из persist строго для этой заметки
  restoreClonesFromStore(notePath) {
    if (!notePath) return;
    const clones = this.notes[notePath]?.clones;
    if (!clones || !Object.keys(clones).length) return;
    this.debug("restoreClonesFromStore started", { notePath, cloneCount: Object.keys(clones).length });
    const leaves = this.app.workspace.getLeavesOfType("markdown").filter((leaf) => {
      const view = leaf.view;
      return view.file?.path === notePath;
    });
    if (!leaves.length) return;
    leaves.forEach((leaf) => {
      const view = leaf.view;
      const containerEl = view.containerEl;
      if (!containerEl) return;
      const ATTEMPTS = 20;
      let left = ATTEMPTS;
      const tick = () => {
        const src = containerEl.querySelector(".markdown-source-view .cm-scroller");
        const read = containerEl.querySelector(".markdown-reading-view");
        const root = src || read;
        if (!root) {
          if (--left > 0) {
            this.schedule(tick, 50);
          }
          return;
        }
        const mount = this.ensureFloatLayer(root);
        if ((mount.dataset.msNote || "") !== notePath) return;
        this.debug("Layer ready, scheduling clone restore", { notePath });
        this.schedule(async () => {
          const hosts = root.querySelectorAll(".ms-host[data-ms-key]");
          if (!hosts.length) {
            this.debug("No hosts found yet, retrying", { notePath, attemptsLeft: left });
            if (--left > 0) {
              this.schedule(tick, 50);
            }
            return;
          }
          this.debug("Found hosts, building anchor index", { notePath, hostCount: hosts.length });
          const anchorIndex = this.buildAnchorIndex(root);
          this.debug("Starting PARALLEL clone restoration", { notePath, totalClones: Object.keys(clones).length });
          const clonePromises = [];
          for (const [cloneId, state] of Object.entries(clones)) {
            if (mount.querySelector(`[data-ms-key="${CSS.escape(cloneId)}"]`)) {
              this.debug("Clone already exists, skipping", { cloneId });
              continue;
            }
            const st = state;
            let parentKey = st.parentKey;
            const parentAnchor = st.parentAnchor;
            if (!parentKey || !root.querySelector(`.ms-host[data-ms-key="${CSS.escape(parentKey)}"]`)) {
              if (parentAnchor) {
                const remap = anchorIndex.get(parentAnchor);
                if (remap) {
                  parentKey = st.parentKey = remap;
                }
              }
            }
            clonePromises.push(this.tryRestoreSingleClone(notePath, cloneId, st, root));
          }
          await Promise.all(clonePromises);
          this.debug("All clones restored in parallel", { notePath, count: clonePromises.length });
          this.schedule(() => this.applyCloneSettingsToAll(), 150);
        }, this.cloneRestoreDelay);
      };
      this.schedule(tick, 50);
    });
  }
  async tryRestoreSingleClone(notePath, cloneId, state, root) {
    if (!root) return Promise.resolve();
    this.debug("tryRestoreSingleClone started", { cloneId, parentKey: state.parentKey });
    const mount = this.ensureFloatLayer(root);
    if (mount.querySelector(`[data-ms-key="${CSS.escape(cloneId)}"]`)) return Promise.resolve();
    let parentKey = state.parentKey;
    if (!parentKey || !root.querySelector(`.ms-host[data-ms-key="${CSS.escape(parentKey)}"]`)) {
      const a = state.parentAnchor;
      if (a) {
        const idx = this.buildAnchorIndex(root);
        const remap = idx.get(a);
        if (remap) {
          parentKey = state.parentKey = remap;
        }
      }
    }
    if (!parentKey) {
      this.warn("Parent not found for clone", { cloneId, originalParentKey: state.parentKey, parentAnchor: state.parentAnchor });
      return Promise.resolve();
    }
    this.debug("Parent found, creating clone from TFile", { cloneId, parentKey });
    let cloneHost = null;
    let originalHost = null;
    const newHost = await this.createHostFromTFile(notePath, state.parentKey);
    if (newHost) {
      cloneHost = newHost;
      originalHost = newHost;
    }
    if (!cloneHost) {
      console.warn(`[MS] Failed to create clone ${cloneId}: TFile not found for ${state.parentKey}`);
      return Promise.resolve();
    }
    this.createCloneHost(root, cloneHost, cloneId, state.parentKey, state.x, state.y, true);
    const newClonedMedia = cloneHost.querySelector("video, img, audio");
    if (newClonedMedia) {
      const tag = (newClonedMedia.tagName || "").toUpperCase();
      const kind = tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";
      const fullState = { ...state, link: state.link, zIndex: state.zIndex };
      this.debug("tryRestoreSingleClone: applying state", {
        cloneId,
        hasW: typeof fullState.w === "number",
        hasH: typeof fullState.h === "number",
        hasZIndex: typeof fullState.zIndex === "number",
        w: fullState.w,
        h: fullState.h,
        zIndex: fullState.zIndex,
        zIndexFromCloneHost: cloneHost.style.zIndex
      });
      this.applyState(cloneHost, newClonedMedia, kind, fullState);
      const actualZIndex = parseInt(cloneHost.style.zIndex || "", 10);
      if (typeof state.zIndex === "number" && actualZIndex !== state.zIndex) {
        this.warn("tryRestoreSingleClone: z-index mismatch, forcing correct value", {
          cloneId,
          expectedZIndex: state.zIndex,
          actualZIndex,
          fixing: true
        });
        cloneHost.style.zIndex = String(state.zIndex);
      }
    }
    return Promise.resolve();
  }
  async createHostFromTFile(notePath, parentKey) {
    const basename = this.extractBaseFromKey(parentKey);
    if (!basename) return null;
    const files = this.app.vault.getFiles().filter((f) => f.basename === basename || f.name === basename);
    const file = files[0];
    if (!file) return null;
    const fileExt = file.extension.toLowerCase();
    const mediaTypes = {
      "jpg": "image",
      "jpeg": "image",
      "png": "image",
      "gif": "image",
      "webp": "image",
      "svg": "image",
      "mp4": "video",
      "webm": "video",
      "ogv": "video",
      "mov": "video",
      "mkv": "video",
      "mp3": "audio",
      "wav": "audio",
      "m4a": "audio",
      "ogg": "audio",
      "3gp": "audio",
      "flac": "audio"
    };
    const kind = mediaTypes[fileExt];
    if (!kind) return null;
    const host = document.createElement("div");
    host.className = "internal-embed media-embed is-loaded";
    let mediaEl;
    const resourcePath = this.app.vault.adapter.getResourcePath(file.path);
    if (kind === "image") {
      mediaEl = document.createElement("img");
      mediaEl.loading = "eager";
    } else if (kind === "video") {
      mediaEl = document.createElement("video");
      mediaEl.preload = "metadata";
    } else {
      mediaEl = document.createElement("audio");
      mediaEl.preload = "metadata";
    }
    mediaEl.src = resourcePath;
    host.appendChild(mediaEl);
    return host;
  }
  // Разложить все клоны заметки в док-колонку
  layoutClonesInDock(notePath, side = "right") {
    const root = this.getAttachRoot();
    if (!root) return;
    const layer = this.ensureFloatLayer(root);
    const dock = this.ensureDock(root, side);
    const clones = Array.from(layer.querySelectorAll("[data-ms-parent-key]"));
    const gridY = 24;
    const pad = 12;
    let y = pad, x = pad;
    clones.forEach((el, i) => {
      el.style.position = "absolute";
      el.style.left = "0";
      el.style.top = "0";
      this.applyTransform(el, x, y);
      y += (el.getBoundingClientRect().height || 120) + gridY;
    });
  }
  ensureDock(root, side = "right") {
    const layer = this.ensureFloatLayer(root);
    let dock = layer.querySelector(`.ms-dock.ms-dock--${side}`);
    if (!dock) {
      dock = document.createElement("div");
      dock.className = `ms-dock ms-dock--${side}`;
      layer.appendChild(dock);
    }
    return dock;
  }
  // Reset layout: оригиналы «домой», клоны — в док
  async resetLayoutForActive(side = "right") {
    const notePath = this.getActiveNote()?.path ?? "";
    const root = this.getAttachRoot();
    if (!notePath || !root) return;
    for (const it of this.enumerateHostsInNote(notePath)) {
      const isClone = !!it.host.dataset.msParentKey;
      if (isClone) continue;
      it.host.dataset.msDetached = "0";
      it.host.dataset.msLocked = "0";
      this.reattach(it.host);
      this.applyTransform(it.host, 0, 0);
    }
    const layer = this.ensureFloatLayer(root);
    layer.querySelectorAll("[data-ms-parent-key]").forEach((el) => el.remove());
    this.restoreClonesFromStore(notePath);
    this.layoutClonesInDock(notePath, side);
    await this.persistAll();
  }
  collectLayout(notePath) {
    const layout = {};
    const noteData = this.notes[notePath] ?? { originals: {}, clones: {} };
    const originals = noteData.originals ?? {};
    const clones = noteData.clones ?? {};
    for (const it of this.enumerateHostsInNote(notePath)) {
      const isClone = !!it.host.dataset.msParentKey;
      const isNote = it.kind === "note";
      if (!isClone && !isNote) continue;
      const r = this.readAbsRect(it.host);
      const prev = isClone ? clones[it.key] ?? {} : originals[it.key] ?? {};
      if (isClone) {
        let fileName = clones[it.key]?.fileName ?? it.host.dataset.msFileName;
        if (!fileName) {
          const mediaEl = it.host.querySelector("img,video,audio");
          if (mediaEl) {
            if (this.getSrcAndBase) {
              const { base } = this.getSrcAndBase(it.host, mediaEl);
              fileName = base || void 0;
            } else {
              const src = mediaEl.currentSrc || mediaEl.src || "";
              fileName = src ? src.split("/").pop() : void 0;
            }
          }
        }
        layout[it.key] = {
          ...prev,
          parentKey: it.host.dataset.msParentKey,
          w: r.w,
          h: r.h,
          x: Math.round(r.x),
          y: Math.round(r.y),
          locked: it.host.dataset.msLocked === "1",
          bgColor: clones[it.key]?.bgColor,
          fileName,
          // <-- используем то, что посчитали
          link: clones[it.key]?.link
          // <-- добавляем ссылку
        };
      } else {
        layout[it.key] = {
          ...prev,
          w: r.w,
          h: r.h,
          x: r.x,
          y: r.y,
          detached: it.host.dataset.msDetached === "1",
          locked: it.host.dataset.msLocked === "1"
        };
      }
      const zi = parseInt(it.host.style.zIndex || "", 10);
      if (Number.isFinite(zi)) layout[it.key].zIndex = zi;
      if (isNote && (layout[it.key].bgColor || layout[it.key].headerColor)) {
        delete layout[it.key].transparent;
      }
    }
    for (const [key, st] of Object.entries(originals)) {
      if (key.startsWith("note::") && !layout[key]) {
        layout[key] = { ...st };
      }
    }
    const currentClones = this.notes[notePath]?.clones ?? {};
    for (const [key, st] of Object.entries(currentClones)) {
      if (!layout[key]) layout[key] = st;
    }
    return layout;
  }
  // Создаёт недостающие .ms-note-host из сохранённого стейта
  ensureNotesFromStore(notePath) {
    this.schedule(() => {
      if (!notePath) return;
      const attachRoot = this.getAttachRoot();
      if (!attachRoot) return;
      const layer = this.ensureFloatLayer(attachRoot);
      const saved = this.notes[notePath]?.originals ?? {};
      for (const [key, st] of Object.entries(saved)) {
        if (!key.startsWith("note::")) continue;
        const exists = layer.querySelector(`.ms-note-host[data-ms-key="${CSS.escape(key)}"]`);
        if (exists) continue;
        const x = st.x ?? 0, y = st.y ?? 0;
        const host = this.createNoteHost(attachRoot, key, x, y, {
          w: st.w,
          h: st.h,
          txt: st.txt ?? "",
          fontSize: st.fontSize ?? 16
        });
        const media = host.querySelector(".ms-note");
        if (media) this.applyState(host, null, "note", st);
      }
    }, this.noteRestoreDelay);
  }
  async resetAll(notePath) {
    if (!notePath) return;
    const noteData = this.notes[notePath];
    if (noteData) {
      noteData.clones = {};
      noteData.originals = {};
      const root2 = this.getActiveContainerEl();
      if (root2) {
        root2.querySelectorAll("[data-ms-parent-key]").forEach((el) => el.remove());
      }
    }
    const root = this.getActiveContainerEl();
    if (root) {
      root.querySelectorAll(".ms-note-host").forEach((noteHost) => {
        noteHost.remove();
      });
    }
    if (noteData?.originals) {
      for (const key in noteData.originals) if (key.startsWith("note::")) delete noteData.originals[key];
    }
    for (const it of this.enumerateHostsInNote(notePath)) {
      if (it.kind === "note") continue;
      this.reattach(it.host);
      this.applyTransform(it.host, 0, 0);
      it.host.classList.remove("ms-host");
      it.host.removeAttribute("data-ms-detached");
      it.host.removeAttribute("data-ms-locked");
      it.host.removeAttribute("data-ms-free");
      it.host.removeAttribute("data-ms-kind");
      it.host.removeAttribute("data-ms-init");
      it.host.removeAttribute("data-ms-key");
      const overlay = it.host.querySelector(".ms-overlay");
      if (overlay) overlay.remove();
      it.host.style.position = "";
      it.host.style.left = "";
      it.host.style.top = "";
      it.host.style.transform = "";
      it.host.style.width = "";
      it.host.style.height = "";
      it.host.style.maxWidth = "";
      it.host.style.aspectRatio = "";
      it.host.style.display = "";
      if (it.media) {
        it.media.style.width = "";
        it.media.style.height = "";
        it.media.style.objectFit = "";
        it.media.style.objectPosition = "";
        it.media.style.display = "";
      }
    }
    await this.persistAll();
    await new Promise((r) => setTimeout(r, 50));
    const activeRoot = this.getActiveContainerEl();
    if (activeRoot) {
      this.processRoot(activeRoot, notePath);
      this.applyCloneSettingsToAll();
    }
  }
  // единый ключ по basename — одинаков для reading/edit
  makeEmbedKey(src) {
    const last = Math.max(src.lastIndexOf("/"), src.lastIndexOf("\\"));
    const base = last >= 0 ? src.substring(last + 1) : src;
    return base || "media";
  }
  resolveTFile(notePath, linkPath) {
    if (!linkPath) return null;
    return this.app.metadataCache.getFirstLinkpathDest(linkPath, notePath) ?? null;
  }
  getActiveNote() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    return view?.file ?? null;
  }
  getActiveContainerEl() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    return view?.containerEl ?? null;
  }
  ensureOverlay(host) {
    const overlay = host.querySelector(".ms-overlay") ?? (() => {
      const d = document.createElement("div");
      d.className = "ms-overlay";
      host.appendChild(d);
      return d;
    })();
    return overlay;
  }
  ensureHandles(overlay) {
    const need = (cls) => overlay.querySelector(`.${cls.split(" ").join(".")}`) ?? (() => {
      const h = document.createElement("div");
      h.className = cls;
      overlay.appendChild(h);
      return h;
    })();
    const hRB = need("ms-handle ms-handle--rb");
    const hLB = need("ms-handle ms-handle--lb");
    const hRT = need("ms-handle ms-handle--rt");
    const hLT = need("ms-handle ms-handle--lt");
    return { rb: hRB, lb: hLB, rt: hRT, lt: hLT };
  }
  applyKindBaseStyles(host, media, kind) {
    host.classList.add("ms-host");
    host.dataset.msKind = kind;
    const isFloating = host.dataset.msDetached === "1" || kind === "note";
    if (!isFloating) {
      host.style.position = "relative";
      host.style.display = "block";
      host.style.transform = "translate(0px, 0px)";
      host.dataset.msFree = "0";
    } else {
      host.style.display = "block";
    }
    if (kind === "video") {
      const isClone = !!host.dataset.msParentKey;
      const hasME = this.isMediaExtendedActive(host);
      const videoAR = isClone || hasME ? 16 / 9 : this.getAR(kind, media);
      host.style.aspectRatio = `${videoAR}`;
      media.style.width = "100%";
      media.style.height = "100%";
      media.style.objectFit = "contain";
      media.style.objectPosition = "center center";
      media.style.display = "block";
    } else if (kind === "audio") {
      host.style.aspectRatio = "9 / 1";
      media.style.width = "100%";
      media.style.height = "100%";
      media.style.display = "block";
    } else if (kind === "image") {
      host.style.aspectRatio = "auto";
      media.style.display = "block";
      host.classList.add("cm-ignore");
      host.setAttribute("contenteditable", "false");
      host.tabIndex = -1;
      try {
        media.draggable = false;
      } catch {
      }
    } else if (kind === "note") {
    }
  }
  revealInOS(full) {
    try {
      const w = window;
      if (!w.require) return;
      const cp = w.require("child_process");
      if (!cp?.exec) return;
      const platform = (w.process?.platform || navigator.platform || "").toLowerCase();
      if (platform.includes("win")) {
        cp.exec(`explorer.exe /select,"${full.replace(/\//g, "\\")}"`);
        return;
      }
      if (platform.includes("mac") || platform.includes("darwin")) {
        cp?.exec?.(`open -R "${full}"`);
        return;
      }
      const dir = full.replace(/\/[^\/]+$/, "");
      cp?.exec?.(`xdg-open "${dir}"`);
    } catch {
    }
  }
  /* ========= CSS ========= */
  // Проверка: попали ли координаты в любую прокси-кнопку на данном host
  isControlsProxyHost(host, x, y) {
    const wrap = this.controlsProxy.get(host)?.root;
    if (!wrap) return false;
    for (const el of Array.from(wrap.children)) {
      const r = el.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true;
    }
    return false;
  }
  // Аккуратно пересылаем события на исходную кнопку панели
  forwardFrom(ev, target, type, cx, cy) {
    const host = ev.currentTarget?.closest(".ms-host");
    const isClone = !!host?.dataset.msParentKey;
    const media = host?.querySelector("video, audio");
    const btn = target;
    if (isClone && type !== "click") return;
    if (!isClone && btn?.isConnected && type === "click") {
      try {
        btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
        return;
      } catch {
      }
    }
    if (type === "click" && media) {
      const hint = `${btn?.getAttribute("aria-label") || ""} ${btn?.getAttribute("title") || ""} ${btn?.className || ""}`.toLowerCase();
      if (/play|pause|toggle/.test(hint)) {
        media.paused ? media.play().catch(() => {
        }) : media.pause();
        media.focus?.();
        return;
      }
      if (/mute/.test(hint)) {
        media.muted = !media.muted;
        media.focus?.();
        return;
      }
      if (/full.?screen|fs/.test(hint)) {
        const box = host?.closest(".mejs__container") || host;
        if (box && !document.fullscreenElement) box?.requestFullscreen?.();
        else document.exitFullscreen?.();
        return;
      }
      const sb = btn.closest(".plyr__progress, .vjs-progress-holder, .mejs__time-slider");
      if (sb && !isNaN(media.duration)) {
        const r = sb.getBoundingClientRect();
        const frac = r.width ? Math.min(Math.max(ev.clientX - r.left, 0), r.width) / r.width : 0;
        media.currentTime = media.duration * frac;
        return;
      }
      const vb = btn.closest('.plyr__volume, .vjs-volume-bar, .mejs__volume, input[type=range][aria-label*="volume" i]');
      if (vb) {
        const r = vb.getBoundingClientRect();
        const frac = r.width ? Math.min(Math.max(ev.clientX - r.left, 0), r.width) / r.width : 0;
        media.volume = Math.min(1, Math.max(0, frac));
        return;
      }
    }
  }
  // Генератор ключа для табличек
  makeNoteKey() {
    return `note::${Date.now()}::${Math.random().toString(36).slice(2, 8)}`;
  }
  // Ставит position:relative на родителя, если у него "static"
  ensureParentAnchor(host) {
    const p = host.parentElement;
    if (!p) return null;
    const cs = getComputedStyle(p);
    if (cs.position === "static") {
      p.style.position = "relative";
    }
    return p;
  }
  applyAudioHandlesToAll() {
    const root = this.getActiveContainerEl();
    if (!root) return;
    root.querySelectorAll('.ms-host[data-ms-kind="audio"]').forEach((h) => {
      h.dataset.msShowHandles = this.cloneShowAudioHandles ? "true" : "false";
    });
  }
  ensureLocalBg(host) {
    let localBg = host.querySelector(".ms-local-bg");
    if (!localBg) {
      localBg = document.createElement("div");
      localBg.className = "ms-local-bg";
      Object.assign(localBg.style, {
        position: "absolute",
        inset: "0",
        zIndex: "1",
        // Прямо над глобальным фоном, но под контентом
        borderRadius: "inherit"
      });
      host.insertBefore(localBg, host.firstChild);
    }
    return localBg;
  }
  // Гарантирует наличие глобального фона .ms-media-bg для видео/аудио клонов
  ensureMediaBg(host) {
    let mediaBg = host.querySelector(".ms-media-bg");
    if (!mediaBg) {
      mediaBg = document.createElement("div");
      mediaBg.className = "ms-media-bg";
      Object.assign(mediaBg.style, {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        borderRadius: "inherit",
        backgroundColor: this.meBgColor
      });
      host.insertBefore(mediaBg, host.firstChild);
    }
    return mediaBg;
  }
  // Создаёт/обновляет <style id="ms-me-bg-style"> с нужным цветом
  applyMediaBgCss(hex) {
    const color = /^#([0-9a-f]{6})$/i.test(hex) ? hex : "#242424";
    const css = `
/* \u0426\u0432\u0435\u0442 \xAB\u0440\u0430\u043C\u043A\u0438\xBB \u043F\u043B\u0435\u0435\u0440\u0430 (\u0442\u043E \u0441\u0430\u043C\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0441 bg-slate-900) \u2014 \u042D\u0422\u041E \u041C\u0415\u041D\u042F\u0415\u041C */
.mx-media-embed .bg-slate-900,
.media-extended .bg-slate-900,
.media-embed .bg-slate-900, 
.ms-host[data-ms-kind="audio"] .ms-media-bg, 
.ms-host[data-ms-kind="video"][data-ms-parent-key] .ms-media-bg { 
  background-color: ${color} !important; 
  /* \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0446\u0432\u0435\u0442 */
}
/* \u041F\u0440\u0438 locked=1 \u0445\u044D\u043D\u0434\u043B\u044B \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0438 \u043A\u0443\u0440\u0441\u043E\u0440 \u043E\u0431\u044B\u0447\u043D\u044B\u0439 */
.ms-host[data-ms-locked="1"] .ms-handle { display: none !important; }
.ms-host[data-ms-locked="1"] { cursor: default !important; }
    /* --- \u0421\u0442\u0438\u043B\u0438 \u0434\u043B\u044F \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F --- */
    #ms-marquee {
      position: fixed;
      border: 1px dashed var(--interactive-accent);
      background-color: rgba(128, 0, 128, 0.1);
      pointer-events: none;
      z-index: 9999;
      display: none;
    }
    .ms-host.--selected {
      outline: 2px solid var(--interactive-accent) !important;
      outline-offset: 2px;
      box-shadow: 0 0 12px rgba(128, 0, 128, 0.5);
    }
/* \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u2014 \u043D\u0435 \u0442\u0440\u043E\u0433\u0430\u0435\u043C, \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C #1F1F1F \u043A\u0430\u043A \u043F\u0440\u043E\u0441\u0438\u043B\u0438 */
.mx-media-embed,
.media-extended,
.media-embed {
  background-color: #0000 !important;
}

/* \u041D\u0430 \u0432\u0441\u044F\u043A\u0438\u0439 \u2014 \u0443\u0431\u0435\u0440\u0451\u043C \u0437\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F */
.mx-media-embed .media-controls,
.media-extended .media-controls {
  background: transparent !important;
}


/* (\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u043F\u0440\u0438 locked) */
.ms-host[data-ms-locked="1"] .ms-handle { display: none !important; }
/* \u0418\u043D\u043E\u0433\u0434\u0430 \u0442\u0435\u043C\u0430 \u0437\u0430\u0434\u0430\u0451\u0442 video { background }/tailwind-\u043A\u043B\u0430\u0441\u0441\u044B \u2014 \u043F\u0440\u0438\u0431\u0438\u0432\u0430\u0435\u043C \u044D\u0442\u043E \u043D\u0430 \u043A\u043E\u0440\u043D\u044E */
.media-embed video,
.mx-media-embed video,
.media-extended video {
  background: transparent !important;
}
`.trim();
    let el = document.getElementById(this.ME_BG_STYLE_ID);
    if (!el) {
      el = document.createElement("style");
      el.id = this.ME_BG_STYLE_ID;
      document.head.appendChild(el);
    }
    el.textContent = css;
  }
  // Вызывается при выборе цвета в модалке
  async setMediaBgColor(hex, isLocal, host, notePath, key) {
    if (!isLocal) {
      this.meBgColor = /^#([0-9a-f]{6})$/i.test(hex) ? hex.toUpperCase() : "#242424";
      this.applyMediaBgCss(this.meBgColor);
      await this.persistAll();
      if (host) {
        this.ensureMediaBg(host);
      }
    } else if (host && notePath && key) {
      const localBg = this.ensureLocalBg(host);
      localBg.style.backgroundColor = hex;
      await this.saveState(notePath, key, { bgColor: hex });
    }
  }
  applyCloneHideDelayCss(delayInSeconds) {
    const delay = Math.max(0, delayInSeconds).toFixed(2);
    const css = `
    /* \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u0432\u0438\u0434\u0435\u043E-\u043A\u043B\u043E\u043D\u0430\u0445: \u0412\u0441\u043F\u043B\u044B\u0432\u0430\u043D\u0438\u0435 */
    .ms-host[data-ms-kind="video"][data-ms-parent-key][data-ms-animation="popup"] .ms-clone-controls {
      transition: transform 0.2s ease-out ${delay}s, opacity 0.2s ease-out ${delay}s;
    }
    /* \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u0432\u0438\u0434\u0435\u043E-\u043A\u043B\u043E\u043D\u0430\u0445: \u041F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435 */
    .ms-host[data-ms-kind="video"][data-ms-parent-key][data-ms-animation="fade"] .ms-clone-controls {
      transition: opacity 0.2s ease-out ${delay}s;
    }
  `.trim();
    let el = document.getElementById(this.CLONE_DELAY_STYLE_ID);
    if (!el) {
      el = document.createElement("style");
      el.id = this.CLONE_DELAY_STYLE_ID;
      document.head.appendChild(el);
    }
    el.textContent = css;
  }
  // Одноразово переводит элемент в абсолют и фиксирует его текущую визуальную позицию + сохраняет состояние
  async maybeDetach(notePath, key, host) {
    if (!notePath || !key) return;
    if (host.dataset.msDetached === "1") return;
    const parent = host.parentElement;
    if (!parent) return;
    const rNow = this.readAbsRect(host);
    const x = Math.round(rNow.x || 0);
    const y = Math.round(rNow.y || 0);
    this.ensureParentAnchor(host);
    host.style.position = "absolute";
    host.style.left = "0px";
    host.style.top = "0px";
    host.dataset.msDetached = "1";
    this.applyTransform(host, x, y);
    const r = this.readAbsRect(host);
    const currentState = this.loadStateWithFallback(notePath, key, "") ?? {};
    await this.saveState(notePath, key, {
      ...currentState,
      detached: true,
      locked: host.dataset.msLocked === "1"
      // не трогаем текущую блокировку
    });
  }
  // Вернуть в поток: position:relative, убрать left/top/флаги, обнулить transform
  reattach(host) {
    host.dataset.msDetached = "0";
    host.style.position = "relative";
    host.style.left = "";
    host.style.top = "";
    this.applyTransform(host, 0, 0);
    const p = host.parentElement;
    if (p && p.dataset.msAnchor === "1") {
      p.style.position = "";
      delete p.dataset.msAnchor;
    }
  }
  /**
   * Создаёт "чистый" DOM-элемент для клона на основе оригинала.
   * Копирует классы, но не ID и служебные атрибуты.
   */
  createCleanCloneElement(originalHost) {
    const mediaToClone = originalHost.querySelector("video, audio, img");
    if (mediaToClone && (mediaToClone.tagName === "VIDEO" || mediaToClone.tagName === "AUDIO")) {
      const cloneHost2 = document.createElement("div");
      cloneHost2.className = originalHost.className;
      cloneHost2.classList.remove("is-loaded");
      const mediaClone = mediaToClone.cloneNode(true);
      mediaClone.removeAttribute("id");
      mediaClone.removeAttribute("data-mx-id");
      cloneHost2.appendChild(mediaClone);
      return cloneHost2;
    }
    const cloneHost = originalHost.cloneNode(true);
    cloneHost.querySelectorAll(".ms-overlay, .ms-proxy-ctrl, .ms-handle, .ms-dock, .ms-clone-controls").forEach((n) => n.remove());
    ["msInit", "msKind", "msFree", "msLocked", "msDetached", "msKey", "data-mx-id"].forEach((a) => delete cloneHost.dataset[a]);
    cloneHost.removeAttribute("id");
    cloneHost.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
    cloneHost.style.zIndex = "";
    return cloneHost;
  }
  // Создать клон медиа-элемента
  createCloneHost(container, cloneHost, key, parentKey, x, y, initialize = true, fileName) {
    cloneHost.dataset.msKey = key;
    cloneHost.dataset.msParentKey = parentKey;
    const notePath = this.getActiveNote()?.path ?? "";
    if (!notePath) return;
    cloneHost.dataset.msNote = notePath;
    if (fileName) {
      cloneHost.dataset.msFileName = fileName;
    }
    const parentHost = container.querySelector(`.ms-host[data-ms-key="${CSS.escape(parentKey)}"]`);
    if (parentHost) {
      const anchor = this.ensureOriginalAnchor(parentHost);
      cloneHost.dataset.msParentAnchor = anchor;
      try {
        const note = this.notes[notePath] ||= { originals: {}, clones: {} };
        const st = note.clones[key] ||= {
          // Создаем объект, соответствующий CloneState, с временными значениями
          parentKey,
          x: 0,
          y: 0,
          w: 0,
          h: 0
        };
        st.parentAnchor = anchor;
        this.persistAll?.();
      } catch (e) {
        console.warn("Failed to persist clone parentAnchor", e);
      }
    }
    cloneHost.style.position = "absolute";
    cloneHost.style.left = "0px";
    cloneHost.style.top = "0px";
    const existingZIndex = this.notes[notePath]?.clones?.[key]?.zIndex;
    cloneHost.style.zIndex = typeof existingZIndex === "number" ? String(existingZIndex) : "2900";
    this.debug("createCloneHost: z-index set", {
      key,
      hasExistingZIndex: typeof existingZIndex === "number",
      zIndex: cloneHost.style.zIndex
    });
    cloneHost.style.transform = "";
    cloneHost.style.willChange = "transform";
    cloneHost.style.pointerEvents = "auto";
    this.debug("Clone host element created", { key, x, y });
    const mount = this.ensureFloatLayer(container);
    mount.appendChild(cloneHost);
    if (this.enableDebugMode) {
      const sizer = mount.parentElement;
      const leafCount = this.app.workspace.getLeavesOfType("markdown").length;
      if (!sizer) {
        this.warn("createCloneHost: NO SIZER FOUND!", {
          key,
          x,
          y,
          leafCount,
          containerClass: container.className
        });
      } else {
        const sizerRect = sizer.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const mountRect = mount.getBoundingClientRect();
        this.debug(`createCloneHost: sizer found`, {
          key,
          requestedCoords: { x, y },
          leafCount,
          sizerPos: { left: sizerRect.left, top: sizerRect.top, width: sizerRect.width, height: sizerRect.height },
          containerPos: { left: containerRect.left, top: containerRect.top },
          mountPos: { left: mountRect.left, top: mountRect.top }
        });
      }
    }
    this.applyTransform(cloneHost, Math.round(x), Math.round(y));
    setTimeout(async () => {
      const existingState = this.notes[notePath]?.clones?.[key];
      const hasValidSize = existingState && typeof existingState.w === "number" && typeof existingState.h === "number";
      const rect = cloneHost.getBoundingClientRect();
      const currentZIndex = parseInt(cloneHost.style.zIndex || "", 10);
      const zIndexToSave = Number.isFinite(currentZIndex) ? currentZIndex : existingState?.zIndex;
      this.debug("createCloneHost setTimeout: saving z-index", {
        key,
        currentZIndexFromDOM: currentZIndex,
        existingZIndexFromState: existingState?.zIndex,
        zIndexToSave
      });
      await this.saveState(notePath, key, {
        ...existingState || {},
        // Сохраняем все существующие свойства
        parentKey,
        w: hasValidSize ? existingState.w : rect.width || 480,
        h: hasValidSize ? existingState.h : rect.height || 270,
        fileName: cloneHost.dataset.msFileName || existingState?.fileName,
        x,
        // ← ИСПОЛЬЗУЕМ ПЕРЕДАННЫЕ координаты!
        y,
        // ← ИСПОЛЬЗУЕМ ПЕРЕДАННЫЕ координаты!
        link: existingState?.link,
        zIndex: zIndexToSave,
        // ← ЯВНО сохраняем актуальный z-index
        detached: true
      });
    }, 100);
    if (!initialize) return;
    const media = cloneHost.querySelector("video, img, audio") ?? (["IMG", "VIDEO", "AUDIO"].includes(cloneHost.tagName) ? cloneHost : null);
    if (!media) return;
    if (media instanceof HTMLMediaElement) {
      media.controls = false;
    }
    if (media.tagName === "VIDEO") {
      if (!media.parentElement?.classList.contains("ms-media-wrapper")) {
        const wrapper = document.createElement("div");
        wrapper.className = "ms-media-wrapper";
        wrapper.style.position = "relative";
        wrapper.style.zIndex = "2";
        wrapper.style.width = "100%";
        wrapper.style.height = "100%";
        cloneHost.insertBefore(wrapper, media).appendChild(media);
      }
      media.style.objectFit = "contain";
      media.style.aspectRatio = "16 / 9";
      media.style.willChange = "transform";
      cloneHost.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement === cloneHost) {
          this.wasLockedBeforeFs = cloneHost.dataset.msLocked === "1";
          cloneHost.dataset.msLocked = "1";
        } else {
          const restore = () => {
            if (this.hScrollEl) this.hScrollEl.scrollLeft = this.scrollRatioX * (this.hScrollEl.scrollWidth - this.hScrollEl.clientWidth);
            if (this.vScrollEl) this.vScrollEl.scrollTop = this.scrollRatioY * (this.vScrollEl.scrollHeight - this.vScrollEl.clientHeight);
          };
          let attempts = 0;
          const maxAttempts = 10;
          const interval = 20;
          const tryRestore = () => {
            restore();
            attempts++;
            if (attempts < maxAttempts) {
              setTimeout(tryRestore, interval);
            }
          };
          if (this.hScrollEl || this.vScrollEl) {
            requestAnimationFrame(tryRestore);
          }
          cloneHost.dataset.msLocked = this.wasLockedBeforeFs ? "1" : "0";
        }
      });
    }
    const tag = (media.tagName || "").toUpperCase();
    const kind = tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";
    const defaultWidth = 480;
    let defaultHeight = void 0;
    if (kind === "image") {
      const ar = this.getAR(kind, media);
      defaultHeight = defaultWidth / ar;
    }
    this.applyBox(cloneHost, media, kind, defaultWidth, defaultHeight, false);
    cloneHost.dataset.msDetached = "1";
    cloneHost.dataset.msInit = "1";
    cloneHost.classList.add("ms-host");
    this.applyKindBaseStyles(cloneHost, media, kind);
    const overlay = this.ensureOverlay(cloneHost);
    const handles = this.ensureHandles(overlay);
    const savedState = this.notes[notePath]?.clones?.[key];
    if (savedState && savedState.bgColor === "transparent") {
    } else if (kind === "audio" || kind === "video" && cloneHost.dataset.msParentKey) {
      const bg = document.createElement("div");
      bg.className = "ms-media-bg";
      Object.assign(bg.style, {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        borderRadius: "inherit",
        // Наследуем скругление от хоста
        backgroundColor: this.meBgColor
        // Начальный цвет
      });
      if (!media.parentElement?.classList.contains("ms-media-wrapper")) {
        const wrapper = document.createElement("div");
        wrapper.className = "ms-media-wrapper";
      }
      if (kind === "audio") {
        bg.style.top = "auto";
        bg.style.bottom = "0";
        bg.style.height = "70px";
      }
      cloneHost.insertBefore(bg, cloneHost.firstChild);
    }
    cloneHost.append(overlay);
    this.mountControlsForHost(cloneHost, media);
    this._attachDragMoveHandler(cloneHost, overlay, notePath, key, kind);
    this._attachResizeHandlers(cloneHost, overlay, handles, notePath, key, kind, media);
    cloneHost.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const existingMenus = document.querySelectorAll(".menu.media-size-clone-menu");
      existingMenus.forEach((menu2) => {
        const menuInstance = menu2;
        if (menuInstance.app && typeof menuInstance.app.workspace.trigger === "function") {
          menuInstance.hide();
        }
      });
      this.lastCtxEvt = e;
      const menu = new import_obsidian.Menu();
      this.app.workspace.trigger("editor-menu", menu, null, this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView));
      menu.showAtMouseEvent(e);
      menu.dom.addClass("media-size-clone-menu");
    });
  }
  // ===== Планировщик/отмена таймеров, чтобы не «воскрешало» на другой странице =====
  schedule(fn, ms) {
    const id = window.setTimeout(() => {
      this.pendingTimers.delete(id);
      try {
        fn();
      } catch (e) {
        console.error(e);
      }
    }, ms);
    this.pendingTimers.add(id);
    return id;
  }
  cancelScheduled() {
    this.pendingTimers.forEach((id) => clearTimeout(id));
    this.pendingTimers.clear();
  }
  // ===== Жёсткая зачистка при переключении страницы (клоны + таблички + стили) =====
  async hardCleanupForSwitch(prevNotePath) {
    this.debug("hardCleanupForSwitch started", { prevNotePath });
    this.cancelScheduled?.();
    try {
      this.disconnectObservers?.();
    } catch {
    }
    if (prevNotePath) {
      const leaves = this.app.workspace.getLeavesOfType("markdown").filter((leaf) => {
        const view = leaf.view;
        return view.file?.path === prevNotePath;
      });
      if (leaves.length) {
        const noteData = this.notes[prevNotePath] ??= { originals: {}, clones: {} };
        leaves.forEach((leaf) => {
          const view = leaf.view;
          const containerEl = view.containerEl;
          if (!containerEl) return;
          const src = containerEl.querySelector(".markdown-source-view .cm-scroller");
          const read = containerEl.querySelector(".markdown-reading-view");
          const root = src || read;
          if (!root) return;
          const floatLayer = root.querySelector(".ms-float-layer");
          if (floatLayer) {
            floatLayer.querySelectorAll("[data-ms-key]").forEach((host) => {
              const key = host.dataset.msKey;
              if (!key) return;
              const isClone = !!host.dataset.msParentKey;
              const isNote = host.classList.contains("ms-note-host");
              if (!isClone && !isNote) return;
              try {
                const r = this.readAbsRect(host);
                if (!r.x && !r.y && !r.w && !r.h) {
                  console.warn(`[MS] Skipping save for ${key}: invalid rect (no wrapper?)`, r);
                  return;
                }
                const bucket = isClone ? noteData.clones : noteData.originals;
                if (bucket[key]) {
                  bucket[key].x = r.x ?? 0;
                  bucket[key].y = r.y ?? 0;
                  bucket[key].w = r.w ?? 0;
                  bucket[key].h = r.h ?? 0;
                  const leafCount = this.app.workspace.getLeavesOfType("markdown").length;
                  if (leafCount > 1 && isClone) {
                    console.log(`[Media Layout] SAVING coords (${leafCount} tabs):`, {
                      file: prevNotePath,
                      key,
                      savedCoords: { x: r.x, y: r.y, w: r.w, h: r.h }
                    });
                  }
                }
              } catch (e) {
                console.warn(`[MS] Failed to save coords for ${key}:`, e);
              }
            });
          }
          root.querySelectorAll('.ms-host[data-ms-detached="1"]').forEach((host) => {
            const key = host.dataset.msKey;
            if (!key) return;
            const isClone = !!host.dataset.msParentKey;
            const isNote = host.classList.contains("ms-note-host");
            if (isClone || isNote) return;
            try {
              const r = this.readAbsRect(host);
              const originals = noteData.originals;
              if (originals[key]) {
                originals[key].x = r.x ?? 0;
                originals[key].y = r.y ?? 0;
                originals[key].w = r.w ?? 0;
                originals[key].h = r.h ?? 0;
              }
            } catch (e) {
              console.warn(`[MS] Failed to save coords for detached original ${key}:`, e);
            }
          });
          root.querySelectorAll('.ms-host:not([data-ms-detached="1"])').forEach((host) => {
            const key = host.dataset.msKey;
            if (!key) return;
            const isClone = !!host.dataset.msParentKey;
            const isNote = host.classList.contains("ms-note-host");
            if (isClone || isNote) return;
            try {
              const r = host.getBoundingClientRect();
              const originals = noteData.originals;
              if (originals[key]) {
                originals[key].w = r.width || originals[key].w || 0;
                originals[key].h = r.height || originals[key].h || 0;
                originals[key].free = host.dataset.msFree === "1";
              }
            } catch (e) {
              console.warn(`[MS] Failed to save size for in-flow original ${key}:`, e);
            }
          });
        });
        await this.persistAll();
      }
    }
    const rootToClean = this.getAttachRoot?.();
    rootToClean?.querySelector(".ms-float-layer")?.replaceChildren();
  }
  // Создать табличку под координатами (x, y) в контейнере viewRoot
  createNoteHost(container, key, x, y, st) {
    const host = document.createElement("div");
    host.className = "ms-note-host ms-host";
    host.dataset.msDetached = "1";
    host.dataset.msKey = key;
    host.style.position = "absolute";
    host.style.left = "0px";
    host.style.top = "0px";
    host.style.zIndex = "3000";
    this.applyTransform(host, Math.round(x), Math.round(y));
    host.style.width = `${Math.round(st?.w ?? 260)}px`;
    host.style.height = `${Math.round(st?.h ?? 160)}px`;
    host.dataset.msNote = this.getActiveNote()?.path ?? "";
    const note = document.createElement("div");
    note.className = "ms-note";
    const top = document.createElement("div");
    top.className = "ms-note-top";
    const close = document.createElement("div");
    close.className = "ms-note-close";
    top.appendChild(close);
    const body = document.createElement("div");
    body.className = "ms-note-body";
    body.setAttribute("contenteditable", "true");
    const stateForColor = st ?? this.notes[this.getActiveNote()?.path ?? ""]?.originals?.[key];
    if (stateForColor?.bgColor) {
      note.style.backgroundColor = stateForColor.bgColor;
    }
    if (stateForColor?.headerColor) {
      top.style.backgroundColor = stateForColor.headerColor;
    }
    body.textContent = st?.txt ?? "";
    body.style.fontSize = `${Math.max(10, st?.fontSize ?? 16)}px`;
    let saveTimer = null;
    const flushText = async () => {
      const notePath = host.dataset.msNote || "";
      if (!notePath) return;
      await this.saveState(notePath, key, {
        txt: body.textContent ?? "",
        fontSize: parseFloat(body.style.fontSize) || 16
      });
    };
    const scheduleTextSave = () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(flushText, 300);
    };
    body.addEventListener("input", scheduleTextSave);
    body.addEventListener("blur", () => {
      clearTimeout(saveTimer);
      flushText();
    });
    note.append(top, body);
    host.appendChild(note);
    const mount = this.ensureFloatLayer(container);
    mount.appendChild(host);
    const overlay = this.ensureOverlay(host);
    this.ensureHandles(overlay);
    host.append(overlay);
    let sx = 0, sy = 0, ox = 0, oy = 0, dragging = false;
    const dragController = new AbortController();
    top.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      dragging = true;
      const currentRect = this.readAppliedRect(host);
      ox = currentRect.x || 0;
      oy = currentRect.y || 0;
      sx = e.clientX;
      sy = e.clientY;
    });
    const onMove = (e) => {
      if (!dragging) return;
      const nx = ox + (e.clientX - sx);
      const ny = oy + (e.clientY - sy);
      this.applyTransform(host, nx, ny);
    };
    const onUp = async () => {
      if (!dragging) return;
      dragging = false;
      const notePath = host.dataset.msNote || "";
      if (!notePath) return;
      const r = this.readAbsRect(host);
      await this.saveState(notePath, key, { w: r.w, h: r.h, x: r.x, y: r.y, txt: body.textContent ?? "", fontSize: parseFloat(body.style.fontSize) || 16 });
    };
    window.addEventListener("pointermove", onMove, { capture: true, signal: dragController.signal });
    window.addEventListener("pointerup", onUp, { capture: true, signal: dragController.signal });
    host.addEventListener("wheel", async (e) => {
      if (!e.ctrlKey && !e.shiftKey) return;
      e.preventDefault();
      const cur = parseFloat(body.style.fontSize) || 16;
      const delta = e.shiftKey ? 1 : 10;
      const next = Math.max(8, Math.min(300, cur + (e.deltaY < 0 ? delta : -delta)));
      body.style.fontSize = `${next}px`;
      const notePath = host.dataset.msNote || "";
      if (notePath) {
        const r = this.readAbsRect(host);
        await this.saveState(notePath, key, { w: r.w, h: r.h, x: r.x, y: r.y, txt: body.textContent ?? "", fontSize: next });
      }
    }, { passive: false });
    close.onclick = async (ev) => {
      ev.stopPropagation();
      const notePath = host.dataset.msNote || "";
      dragController.abort();
      host.remove();
      if (notePath) {
        delete this.notes[notePath]?.originals?.[key];
        await this.persistAll();
      }
    };
    const cleanupObserver = new MutationObserver(() => {
      if (!document.contains(host)) {
        dragController.abort();
        cleanupObserver.disconnect();
      }
    });
    if (host.parentElement) {
      cleanupObserver.observe(host.parentElement, { childList: true });
    }
    host.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const key2 = host.dataset.msKey;
      if (key2 && this.selectedKeys.has(key2) && this.selectedKeys.size > 1) {
        const menu2 = new import_obsidian.Menu();
        this.app.workspace.trigger("editor-menu", menu2, null, this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView));
        menu2.showAtMouseEvent(e);
        return;
      }
      const menu = new import_obsidian.Menu();
      menu.addItem((mi) => {
        mi.setTitle(t(this.app, "bgColor")).setIcon("palette");
        mi.onClick(() => {
          const tr = (k) => t(this.app, k);
          const notePath = host.dataset.msNote;
          if (!notePath || !key2) return;
          const currentState = this.notes[notePath]?.originals?.[key2] ?? {};
          const initialColor = currentState.bgColor || "#242424";
          new BgColorModal(this.app, initialColor, async (result) => {
            const { hex, removeBg, applyToHeader } = result;
            const noteBody = host.querySelector(".ms-note");
            const noteHeader = host.querySelector(".ms-note-top");
            if (hex === "#262626" && !applyToHeader) {
              if (noteHeader) noteHeader.style.backgroundColor = "";
              await this.saveState(notePath, key2, { headerColor: void 0 });
            }
            if (removeBg) {
              host.classList.add("ms-note-transparent");
              await this.saveState(notePath, key2, { transparent: true, bgColor: void 0, headerColor: void 0 });
            } else {
              host.classList.remove("ms-note-transparent");
              const stateUpdate = { transparent: false };
              if (applyToHeader) {
                if (noteHeader) noteHeader.style.backgroundColor = hex;
                stateUpdate.headerColor = hex;
              } else {
                if (noteBody) noteBody.style.backgroundColor = hex;
                stateUpdate.bgColor = hex;
              }
              await this.saveState(notePath, key2, stateUpdate);
            }
          }, tr, { isNoteBox: true }).open();
        });
      });
      menu.addItem((mi) => {
        mi.setTitle(t(this.app, "changeTextColor")).setIcon("highlighter");
        mi.onClick(() => {
          const tr = (k) => t(this.app, k);
          const notePath = host.dataset.msNote;
          if (!notePath || !key2) return;
          const currentState = this.notes[notePath]?.originals?.[key2] ?? {};
          const initialColor = currentState.textColor || "#FFFFFF";
          const hasStroke = currentState.textStroke || false;
          const colorToEdit = hasStroke ? currentState.textStrokeColor || initialColor : initialColor;
          new BgColorModal(this.app, initialColor, async (result) => {
            const { hex, addStroke } = result;
            const currentFillColor = body.style.color || currentState.textColor || "#FFFFFF";
            body.classList.toggle("ms-note-text-stroked", addStroke);
            if (addStroke) {
              body.style.setProperty("--note-stroke-color", hex);
              await this.saveState(notePath, key2, { textStroke: true, textStrokeColor: hex, textColor: currentFillColor });
            } else {
              body.style.color = hex;
              await this.saveState(notePath, key2, { textStroke: false, textColor: hex });
            }
          }, tr, { isTextColor: true, initialStrokeState: hasStroke }).open();
        });
      });
      menu.addSeparator();
      menu.addItem((item) => {
        item.setTitle(t(this.app, "deleteNote")).setIcon("trash").onClick(async () => {
          const notePath = host.dataset.msNote || "";
          host.remove();
          if (notePath && key2) {
            delete this.notes[notePath]?.originals?.[key2];
            await this.persistAll();
          }
        });
      });
      menu.showAtMouseEvent(e);
    });
    close.onclick = async (ev) => {
      ev.stopPropagation();
      const notePath = host.dataset.msNote || "";
      host.remove();
      if (notePath) {
        delete this.notes[notePath]?.originals?.[key];
        await this.persistAll();
      }
    };
    if (st?.focus) {
      setTimeout(() => body.focus(), 0);
    }
    this.processRoot(this.getActiveContainerEl(), this.getActiveNote()?.path ?? "");
    return host;
  }
  // ИСПРАВЛЕНО: Новая функция для поиска реальных скролл-контейнеров
  findScrollableParents(startEl) {
    let hScroll = null;
    let vScroll = null;
    let el = startEl;
    while (el && el !== document.body && (!hScroll || !vScroll)) {
      const style = getComputedStyle(el);
      if (!hScroll && (style.overflowX === "auto" || style.overflowX === "scroll") && el.scrollWidth > el.clientWidth) {
        hScroll = el;
      }
      if (!vScroll && (style.overflowY === "auto" || style.overflowY === "scroll") && el.scrollHeight > el.clientHeight) {
        vScroll = el;
      }
      el = el.parentElement;
    }
    return { hScroll: hScroll ?? this.getAttachRoot(), vScroll: vScroll ?? this.getAttachRoot() };
  }
  // ИСПРАВЛЕНО: Универсальный обработчик перетаскивания
  _attachDragMoveHandler(host, overlay, notePath, key, kind) {
    const startMove = (e) => {
      const isClone = !!host.dataset.msParentKey;
      const isNote = kind === "note";
      if ((e.ctrlKey || e.metaKey) && (isClone || isNote)) {
        this.handleSelectionClick(e, key);
        return;
      }
      const t2 = e.target;
      if (t2?.closest(".ms-clone-controls, .ms-cc-btn, .ms-cc-timeline, .ms-proxy-btn, .ms-proxy-ctrl, .ms-handle, .ms-note-body")) {
        return;
      }
      if (e.button !== 0) return;
      if (kind !== "note" && !isClone && host.dataset.msDetached !== "1") return;
      if (host.dataset.msLocked === "1") return;
      const sx = e.clientX ?? e.clientX ?? 0;
      const sy = e.clientY ?? e.clientY ?? 0;
      if (this.isControlsTarget(t2) || this.isControlsPoint(host, sx, sy) || this.isControlsProxyHost(host, sx, sy)) return;
      const isMovingGroup = this.selectedKeys.has(key) && this.selectedKeys.size > 1;
      const groupElements = [];
      if (isMovingGroup) {
        this.selectedKeys.forEach((selectedKey) => {
          const el = this.findHostByKey(selectedKey);
          if (el) {
            const elCur = this.readAbsRect(el);
            groupElements.push({ host: el, x0: elCur.x || 0, y0: elCur.y || 0 });
          }
        });
      }
      let moved = false;
      const isDetachedOriginal = !isClone && kind !== "note" && host.dataset.msDetached === "1";
      const cur = isDetachedOriginal ? this.readAbsOrig(host) : this.readAbsRect(host);
      let x0 = cur.x || 0;
      let y0 = cur.y || 0;
      const controller = new AbortController();
      const onMove = (ev) => {
        const dx = (ev.clientX ?? ev.clientX ?? 0) - sx;
        const dy = (ev.clientY ?? ev.clientY ?? 0) - sy;
        if (!moved && Math.hypot(dx, dy) < 4) return;
        if (!moved) {
          moved = true;
          overlay.classList.add("--dragmove");
          document.body.classList.add("ms-noselect");
        }
        ev.preventDefault();
        if (isMovingGroup) {
          groupElements.forEach((item) => {
            let nx = item.x0 + dx, ny = item.y0 + dy;
            if (ev.shiftKey) {
              nx = snap(nx, 20);
              ny = snap(ny, 20);
            }
            this.applyTransform(item.host, nx, ny);
          });
        } else {
          let nx = x0 + dx, ny = y0 + dy;
          if (ev.shiftKey) {
            nx = snap(nx, 20);
            ny = snap(ny, 20);
          }
          this.applyTransform(host, nx, ny);
        }
      };
      const onUp = async () => {
        controller.abort();
        overlay.classList.remove("--drag", "--dragmove");
        document.body.classList.remove("ms-noselect");
        if (!moved) return;
        if (isMovingGroup) {
          for (const item of groupElements) {
            const rect = this.readAbsRect(item.host);
            const itemKey = item.host.dataset.msKey;
            await this.saveState(notePath, itemKey, { x: rect.x || 0, y: rect.y || 0 });
          }
        } else {
          const rect = this.readAbsRect(host);
          const stateToSave = {
            w: rect.w,
            h: rect.h,
            x: rect.x || 0,
            y: rect.y || 0,
            free: host.dataset.msFree === "1",
            detached: host.dataset.msDetached === "1" || isClone,
            locked: host.dataset.msLocked === "1"
          };
          if (kind === "note") {
            const body = host.querySelector(".ms-note-body");
            stateToSave.txt = body?.textContent ?? "";
            stateToSave.fontSize = body ? parseFloat(body.style.fontSize) || 16 : 16;
          }
          if (isClone && (kind === "video" || kind === "audio")) {
            stateToSave.fileName = host.dataset.msFileName;
          }
          await this.saveState(notePath, key, stateToSave);
        }
      };
      window.addEventListener("pointermove", onMove, { capture: true, signal: controller.signal });
      window.addEventListener("pointerup", onUp, { capture: true, signal: controller.signal });
    };
    host.addEventListener("pointerdown", startMove, { capture: true });
  }
  // ИСПРАВЛЕНО: Универсальный обработчик ресайза
  _attachResizeHandlers(host, overlay, handles, notePath, key, kind, media) {
    const map = { lt: { h: "left", v: "top" }, rt: { h: "right", v: "top" }, lb: { h: "left", v: "bottom" }, rb: { h: "right", v: "bottom" } };
    if (this.selectedKeys.size > 1) {
      return;
    }
    ["lt", "rt", "lb", "rb"].forEach((keyH) => {
      const handle = handles[keyH];
      const startDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        overlay.classList.add("--drag");
        document.body.classList.add("ms-noselect");
        const startX = e.clientX;
        const startY = e.clientY;
        const r0 = host.getBoundingClientRect();
        const isClone = !!host.dataset.msParentKey;
        const isDetachedOriginal = !isClone && kind !== "note" && host.dataset.msDetached === "1";
        const cur = isDetachedOriginal ? this.readAbsOrig(host) : this.readAbsRect(host);
        const startW = cur.w ?? r0.width;
        const startH = cur.h ?? r0.height;
        const startXoff = cur.x || 0;
        const startYoff = cur.y || 0;
        const from = map[keyH];
        const hasME = this.isMediaExtendedActive(host);
        const baseAR = kind === "image" ? startW / Math.max(1, startH) : kind === "video" ? isClone || hasME ? 16 / 9 : media ? this.getAR(kind, media) : 16 / 9 : kind === "audio" ? 9 / 1 : 0;
        const controller = new AbortController();
        const onMove = (ev) => {
          ev.preventDefault();
          const dx = ev.clientX - startX;
          const dy = ev.clientY - startY;
          const alt = ev.altKey;
          const shift = ev.shiftKey;
          const ctrl = ev.ctrlKey || ev.metaKey;
          const isDetached = host.dataset.msDetached === "1" || isClone;
          let newW = startW, newH = startH;
          if (isDetached) {
            if (from.h === "right") newW = startW + dx;
            else newW = startW - dx;
            if (from.v === "bottom") newH = startH + dy;
            else newH = startH - dy;
          } else {
            newW = startW + dx;
            newH = startH + dy;
          }
          if (alt) {
            if (from.h === "right" || from.h === "left") newW = startW + 2 * (from.h === "right" ? dx : -dx);
            if (from.v === "bottom" || from.v === "top") newH = startH + 2 * (from.v === "bottom" ? dy : -dy);
          }
          let aw = clamp(newW, 64, 8192);
          let ah = clamp(newH, 32, 8192);
          if (shift) {
            aw = snap(aw, 20);
            ah = snap(ah, 20);
          }
          const free = ctrl;
          if (kind === "image") {
            if (!free) {
              const useW = Math.abs(dx) >= Math.abs(dy);
              if (useW) ah = Math.round(aw / baseAR);
              else aw = Math.round(ah * baseAR);
            }
          } else if (kind === "note") {
          } else {
            ah = Math.round(aw / baseAR);
          }
          if (isDetached) {
            let newX = startXoff, newY = startYoff;
            if (alt) {
              newX = startXoff - Math.round((aw - startW) / 2);
              newY = startYoff - Math.round((ah - startH) / 2);
            } else {
              if (from.h === "left") newX = startXoff + startW - aw;
              if (from.v === "top" && kind !== "audio") newY = startYoff + startH - ah;
            }
            if (shift) {
              newX = snap(newX, 20);
              newY = snap(newY, 20);
            }
            this.applyTransform(host, newX, newY);
          }
          this.applyBox(host, media, kind, aw, ah, free);
        };
        const onUp = async () => {
          controller.abort();
          overlay.classList.remove("--drag");
          document.body.classList.remove("ms-noselect");
          const rect = this.readAbsRect(host);
          const stateToSave = {
            w: rect.w,
            h: rect.h,
            x: rect.x || 0,
            y: rect.y || 0,
            free: host.dataset.msFree === "1",
            detached: host.dataset.msDetached === "1" || isClone,
            locked: host.dataset.msLocked === "1"
          };
          if (kind === "note") {
            const body = host.querySelector(".ms-note-body");
            stateToSave.txt = body?.textContent ?? "";
            stateToSave.fontSize = body ? parseFloat(body.style.fontSize) || 16 : 16;
          }
          if (isClone && (kind === "video" || kind === "audio")) {
            stateToSave.fileName = host.dataset.msFileName;
          }
          await this.saveState(notePath, key, stateToSave);
        };
        if ("pointerId" in e && typeof handle.setPointerCapture === "function") {
          handle.setPointerCapture(e.pointerId);
        }
        window.addEventListener("pointermove", onMove, { capture: true, signal: controller.signal });
        window.addEventListener("pointerup", onUp, { capture: true, signal: controller.signal });
      };
      handle.addEventListener("pointerdown", startDrag);
    });
  }
  adjustZIndex(host, direction) {
    const currentZ = parseInt(host.style.zIndex || "2900", 10);
    const newZ = currentZ + direction;
    host.style.zIndex = String(newZ);
    const notePath = this.getActiveNote()?.path;
    const key = host.dataset.msKey;
    if (notePath && key && host.dataset.msParentKey) {
      this.saveState(notePath, key, { zIndex: newZ });
    }
  }
  // --- НОВОЕ: Логика выделения ---
  // --- НОВОЕ: Логика выделения ---  
  handleMarqueeStart(e) {
    const attachRoot = this.getAttachRoot();
    if (!attachRoot?.contains(e.target) || e.target.closest(".ms-handle")) {
      return;
    }
    const host = e.target.closest(".ms-host");
    if (host && host.dataset.msKey) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    this.marqueeWithCtrl = e.ctrlKey || e.metaKey;
    const startX = e.clientX;
    const startY = e.clientY;
    const onMove = (moveEvent) => {
      this.isMarqueeSelecting = true;
      if (!this.marqueeStart) {
        this.marqueeStart = { x: startX, y: startY };
      }
      this.ensureMarquee();
      if (this.isMarqueeSelecting) {
        this.updateMarquee(moveEvent.clientX, moveEvent.clientY);
      }
    };
    const onUp = (upEvent) => {
      window.removeEventListener("pointermove", onMove, true);
      window.removeEventListener("pointerup", onUp, true);
      if (this.isMarqueeSelecting) {
        this.applyMarqueeSelection();
        this.removeMarquee();
        this.isMarqueeSelecting = false;
        this.marqueeStart = null;
        this.marqueeWithCtrl = false;
      }
      this.updateSelectionVisuals();
    };
    window.addEventListener("pointermove", onMove, true);
    window.addEventListener("pointerup", onUp, true);
  }
  handleSelectionClick(e, key) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleSelection(key);
    this.updateSelectionVisuals();
  }
  toggleSelection(key) {
    if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key);
    } else {
      this.selectedKeys.add(key);
    }
  }
  updateSelectionVisuals() {
    this.getActiveContainerEl()?.querySelectorAll(".ms-host").forEach((el) => {
      const host = el;
      const key = host.dataset.msKey;
      if (key && this.selectedKeys.has(key)) {
        host.classList.add("--selected");
      } else {
        host.classList.remove("--selected");
      }
    });
    this.getActiveContainerEl()?.querySelectorAll(".ms-overlay").forEach((overlay) => {
      const handles = overlay.querySelectorAll(".ms-handle");
      const display = this.selectedKeys.size > 1 ? "none" : "";
      handles.forEach((h) => h.style.display = display);
    });
  }
  handleDeselectClick = (e) => {
    if (e.button !== 0) return;
    if (e.ctrlKey || e.metaKey) return;
    if (e.target.closest(".ms-host, .menu")) return;
    if (this.selectedKeys.size > 0) {
      this.selectedKeys.clear();
      this.updateSelectionVisuals();
    }
  };
  ensureMarquee() {
    let marquee = document.getElementById("ms-marquee");
    if (!marquee) {
      marquee = document.createElement("div");
      marquee.id = "ms-marquee";
      document.body.appendChild(marquee);
    }
    return marquee;
  }
  updateMarquee(endX, endY) {
    const marquee = this.ensureMarquee();
    if (!this.marqueeStart) return;
    const x = Math.min(this.marqueeStart.x, endX);
    const y = Math.min(this.marqueeStart.y, endY);
    const width = Math.abs(this.marqueeStart.x - endX);
    const height = Math.abs(this.marqueeStart.y - endY);
    Object.assign(marquee.style, {
      left: `${x}px`,
      top: `${y}px`,
      width: `${width}px`,
      height: `${height}px`,
      display: "block"
    });
  }
  applyMarqueeSelection() {
    const marquee = document.getElementById("ms-marquee");
    if (!marquee) return;
    const marqueeRect = marquee.getBoundingClientRect();
    if (!this.marqueeWithCtrl) {
      this.selectedKeys.clear();
    }
    const hosts = this.getActiveContainerEl()?.querySelectorAll(".ms-host");
    hosts?.forEach((host) => {
      const isClone = !!host.dataset.msParentKey;
      const isNote = host.classList.contains("ms-note-host");
      if (isClone || isNote) {
        const hostRect = host.getBoundingClientRect();
        if (hostRect.left < marqueeRect.right && hostRect.right > marqueeRect.left && hostRect.top < marqueeRect.bottom && hostRect.bottom > marqueeRect.top) {
          const key = host.dataset.msKey;
          if (key) {
            if (this.marqueeWithCtrl) {
              this.toggleSelection(key);
            } else {
              this.selectedKeys.add(key);
            }
          }
        }
      }
    });
  }
  // --- ИСПРАВЛЕНО: Контекстное меню для группы теперь содержит только одну кнопку "Удалить" ---
  async buildGroupContextMenu(menu, host, key, kind, notePath) {
    menu.addItem((item) => {
      item.setTitle(t(this.app, "deleteSelected", { n: this.selectedKeys.size })).setIcon("trash").onClick(async () => {
        const noteData = this.notes[notePath];
        if (!noteData) return;
        const keysToDelete = new Set(this.selectedKeys);
        for (const selectedKey of keysToDelete) {
          const el = this.findHostByKey(selectedKey);
          if (!el) continue;
          const isClone = !!el.dataset.msParentKey;
          const isNote = el.classList.contains("ms-note-host");
          el.remove();
          if (isClone) delete noteData.clones?.[selectedKey];
          if (isNote) delete noteData.originals?.[selectedKey];
        }
        this.selectedKeys.clear();
        this.updateSelectionVisuals();
        await this.persistAll();
      });
    });
  }
  removeMarquee() {
    document.getElementById("ms-marquee")?.remove();
  }
  // ВЫЗОВАЙ ЭТУ ФУНКЦИЮ вместо прямого mountControlsProxy(...)
  mountControlsForHost(host, mediaEl) {
    const isClone = !!host.dataset.msParentKey;
    host.style.pointerEvents = "auto";
    if (isClone) {
      this.hydrateCloneMedia(host);
      host.querySelectorAll(".mejs__controls, .plyr__controls, .vjs-control-bar").forEach((el) => el.style.display = "none");
      this.mountCloneControls(host, mediaEl);
      this.installClickToggleDebug(host, mediaEl);
    } else {
      this.mountControlsProxy(host, mediaEl);
    }
  }
  // Подтягиваем реальный источник из оригинала (ME уже мог заменить src на blob/app://)
  hydrateCloneMedia(host) {
    const parentKey = host.dataset.msParentKey;
    if (!parentKey) return;
    const origHost = this.findHostByKey(parentKey);
    const cloned = host.querySelector("video, audio");
    const original = origHost?.querySelector("video, audio");
    if (!cloned || !original) return;
    const src = (original.currentSrc || original.src || "").trim();
    if (!src) return;
    if (cloned.src !== src) {
      cloned.src = src;
      try {
        cloned.load();
      } catch {
      }
    }
  }
  // Ставим прозрачные прокси над всеми кнопками панели управления плеера
  mountControlsProxy(host, media) {
    host.querySelectorAll(".ms-proxy-ctrl").forEach((n) => n.remove());
    const sels = [
      ".ob-video-controls",
      ".media-controls",
      ".mejs__controls",
      ".plyr__controls",
      ".vjs-control-bar",
      ".me-controls",
      "[class*='controls']"
    ];
    let panel = null;
    for (const s of sels) {
      panel = host.querySelector(s);
      if (panel) break;
    }
    if (!panel) return;
    const prev = this.controlsProxy.get(host);
    if (prev) {
      prev.ro.disconnect();
      prev.root.remove();
      this.controlsProxy.delete(host);
    }
    const wrap = document.createElement("div");
    wrap.className = "ms-proxy-ctrl";
    wrap.style.position = "absolute";
    wrap.style.inset = "0";
    wrap.style.pointerEvents = "none";
    wrap.style.zIndex = "2147483647";
    host.appendChild(wrap);
    const rebuild = () => {
      wrap.innerHTML = "";
      const hostR = host.getBoundingClientRect();
      const btns = panel.querySelectorAll(
        "button, [role='button'], .plyr__control, .vjs-control"
      );
      btns.forEach((btn) => {
        const rb = btn.getBoundingClientRect();
        const proxy = document.createElement("div");
        proxy.className = "ms-proxy-btn";
        proxy.style.position = "absolute";
        proxy.style.pointerEvents = "auto";
        proxy.style.left = `${rb.left - hostR.left}px`;
        proxy.style.top = `${rb.top - hostR.top}px`;
        proxy.style.width = `${rb.width}px`;
        proxy.style.height = `${rb.height}px`;
        const down = (ev) => {
          ev.stopPropagation();
          this.forwardFrom(ev, btn, "pointerdown");
        };
        const up = (ev) => {
          ev.stopPropagation();
          this.forwardFrom(ev, btn, "pointerup");
        };
        const isClone = !!host.dataset.msParentKey;
        const clk = (ev) => {
          ev.stopPropagation();
          ev.preventDefault();
          try {
            btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
            btn.click?.();
          } catch {
          }
          if (isClone && media instanceof HTMLMediaElement) {
            const hint = `${btn.getAttribute("aria-label") || btn.getAttribute("title") || btn.className || ""}`.toLowerCase();
            if (/play|pause|toggle/.test(hint)) {
              media.paused ? media.play().catch(() => {
              }) : media.pause();
              media.focus?.();
              return;
            }
            if (/mute/.test(hint)) {
              media.muted = !media.muted;
              media.focus?.();
              return;
            }
            const tl = btn.closest(".plyr__progress, .vjs-progress-holder, .mejs__total-time, input[type=range]");
            if (tl && Number.isFinite(media.duration)) {
              const r = tl.getBoundingClientRect();
              const frac = r.width ? Math.min(Math.max(ev.clientX - r.left, 0), r.width) / r.width : 0;
              media.currentTime = media.duration * frac;
              return;
            }
            const vb = btn.closest('.plyr__volume, .vjs-volume-bar, .mejs__volume, input[type=range][aria-label*="volume" i]');
            if (vb) {
              const r = vb.getBoundingClientRect();
              const frac = r.width ? Math.min(Math.max(ev.clientX - r.left, 0), r.width) / r.width : 0;
              media.volume = Math.min(1, Math.max(0, frac));
              return;
            }
          }
        };
        proxy.addEventListener("pointerdown", down, { capture: true });
        proxy.addEventListener("pointerup", up, { capture: true });
        proxy.addEventListener("mousedown", down, { capture: true });
        proxy.addEventListener("mouseup", up, { capture: true });
        proxy.addEventListener("click", clk, { capture: true });
        wrap.appendChild(proxy);
      });
    };
    const ro = new ResizeObserver(() => rebuild());
    ro.observe(host);
    ro.observe(panel);
    this.controlsProxy.set(host, { root: wrap, ro });
    rebuild();
  }
  // Лёгкая панель для клонов (Play/Pause, Mute, таймлайн)
  mountCloneControls(host, mediaEl) {
    if (!host.dataset.msParentKey) return;
    const media = mediaEl;
    if (!(media instanceof HTMLMediaElement)) return;
    if (host.querySelector(".ms-clone-controls")) return;
    const isVideo = media.tagName === "VIDEO";
    const root = document.createElement("div");
    root.className = "ms-clone-controls";
    Object.assign(root.style, {
      position: "absolute",
      left: "8px",
      right: "8px",
      bottom: "8px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      pointerEvents: "none",
      background: "rgba(0,0,0,.35)",
      borderRadius: "8px",
      padding: "6px 8px",
      backdropFilter: "blur(2px)",
      zIndex: "2147483647",
      userSelect: "none"
    });
    const stop = (e) => e.stopPropagation();
    root.addEventListener("mousedown", stop, false);
    root.addEventListener("click", stop, false);
    const smartClickHandler = (e, action) => {
      const target = e.currentTarget;
      e.preventDefault();
      e.stopPropagation();
      const onUp2 = (upEvent) => {
        window.removeEventListener("mouseup", onUp2, true);
        if (upEvent.button === 2) {
          return;
        }
        const dx = upEvent.clientX - e.clientX;
        const dy = upEvent.clientY - e.clientY;
        if (Math.hypot(dx, dy) < 4) {
          action(e);
        }
      };
      window.addEventListener("mouseup", onUp2, true);
    };
    let fullscreenHideTimer = null;
    const onFsMouseMove = () => {
      if (document.fullscreenElement === host) {
        host.classList.remove("ms-fs-inactive");
        clearTimeout(fullscreenHideTimer);
        fullscreenHideTimer = setTimeout(() => {
          host.classList.add("ms-fs-inactive");
        }, 5e3);
      }
    };
    const onFsChange = () => {
      if (document.fullscreenElement === host) {
        window.addEventListener("mousemove", onFsMouseMove, true);
        onFsMouseMove();
      } else {
        window.removeEventListener("mousemove", onFsMouseMove, true);
        clearTimeout(fullscreenHideTimer);
        host.classList.remove("ms-fs-inactive");
      }
    };
    host.addEventListener("fullscreenchange", onFsChange);
    const ro = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      root.classList.toggle("ms-cc-compact", width < 240);
    });
    ro.observe(host);
    const timeline = document.createElement("div");
    timeline.className = "ms-cc-timeline";
    Object.assign(timeline.style, {
      position: "relative",
      width: "100%",
      height: "6px",
      borderRadius: "3px",
      background: "rgba(255,255,255,.25)",
      cursor: "pointer",
      pointerEvents: "auto"
      // --- ДОБАВЛЕНО: делаем таймлайн кликабельным
    });
    const progress = document.createElement("div");
    progress.className = "ms-cc-progress";
    Object.assign(progress.style, {
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      width: "0%",
      background: "rgba(255,255,255,.9)",
      borderRadius: "3px",
      pointerEvents: "none"
    });
    timeline.appendChild(progress);
    const thumb = document.createElement("div");
    thumb.className = "ms-cc-thumb";
    Object.assign(thumb.style, {
      position: "absolute",
      top: "50%",
      width: "12px",
      height: "12px",
      background: "#fff",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      opacity: "0",
      // Изначально скрыт
      transition: "opacity 0.1s ease-out"
    });
    timeline.appendChild(thumb);
    const btnBar = document.createElement("div");
    btnBar.className = "ms-cc-btn-bar";
    Object.assign(btnBar.style, { display: "flex", alignItems: "center", gap: "8px", width: "100%" });
    const makeBtn = (svgIcon, title) => {
      const b = document.createElement("div");
      b.className = "ms-cc-btn";
      Object.assign(b.style, {
        width: "26px",
        height: "26px",
        borderRadius: "6px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
        // --- ДОБАВЛЕНО: делаем кнопки кликабельными
        cursor: "pointer",
        color: "#fff",
        background: "rgba(255,255,255,.15)"
      });
      b.onmouseenter = () => b.style.background = "rgba(255,255,255,.25)";
      b.onmouseleave = () => b.style.background = "rgba(255,255,255,.15)";
      b.innerHTML = svgIcon;
      b.title = title;
      return b;
    };
    const ICONS = {
      play: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
      pause: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`,
      mute: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.5 12A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>`,
      volumeMute: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.5 12A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>`,
      volumeLow: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7 9v6h4l5 5V4l-5 5H7zm7 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>`,
      volumeHigh: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
      volumeOff: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3.63 3.63c-.39.39-.39 1.02 0 1.41L7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM14 8.97V7.97c0-1.77-1.02-3.29-2.5-4.03v1.79l2.5 2.5zM9.29 9l-2-2H9v2.18L7.82 10H9v2h.29l-2-2z"/></svg>`,
      rewind: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAtxJREFUWIXtlk2IHFUUhe99r6rxB0UXohiMWbgQEVdGJv5EjEZEwaUBYxZugpEsBZe6c5aJGCERQRCRKPiLoigiA0rQheLSf4kaQYIgkmTqfbeOi1RLd2e6u3oguJmzKqreeee8qnNvXbMNbOB/hi9KkHQVsN/MVFXV8+5+oidvM7AvpXQmpfScu59c2G0pZRvwB7AKNMAPki7owbsbOAmcAUpEfCMpLyQOPAKcjoivJW0BHgJUStk+ixcRjwMF+ELSJmA3oNXV1Zt6CUvyUsrTQAu8L+nS7lR3dAbum8LLpZRlQMBrki7qeHcBappmqY/4xcAbndBBSWn4bJYBSZcDHwFtKWV5gjdmoJohvqlt27fN7EYze7Su65fmOj7Luw541923mNmeuq5fmbV+TQNN0yxFxJtmVkm6t67rlT7ipZSdEXHU3U+3bbt9MBh8OY+TJm8Au1JKn7j7nznnrX3FI2Kvu7/n7r/knJf6iI8ZGIbNzF41s09TSre7+8/zNnD3DDwr6bCZvZVSus3dj/cRHwNwqAvVWGimYRhC4DjQRsRTkuY2tqlVACginuhreMSAImLfArwxA5MnnVoV5wujBo5IeqaUcmDBNvmrpEN9P8FUTHS8DyVdNmv9yCd4sJRysLt+fdjxZvBmd0JgF3CqlPKtpOt7GHjA7GwZAk1EfCXpmr4Gzkl7VVVH27bd4e6XRMTnpZR7Zp1oiJzzEUn3S7o2Io41TbO1D2/NchsMBsdyzje7+4/u/kFEPNlns7quP8453yLp75TSCrB7XQbMzNz9t5TSnWb2jqRl4LCket6G7v59VVW3mtlnZvZy374yFRPhXJF0hdm5GViDV42Ec32/41EMBxLgO0k3AHu6zrljFi8i9o8MJFcDDy80kIyiG8lOdG9DwE+SLuzB2wn8BZzqKuW/kWw9Q+mVbds+ZmZtSulFd/+9J28zsDel9E9K6YV1DaUb2MD5wL8gzcwDK9O2AQAAAABJRU5ErkJggg==" style="width:20px; height:20px;">`,
      forward: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAt1JREFUWIXtljGIXFUUhv/z7n2juEFQEEKMimBhp4jEkIUVo4JgIYgBg1iIoBCJbVoRC7GLomHtBCUGLZagEIQ0QlSCRRAUQQvZxIgiFoLszjv/ub+Fd2QcZnbeDEKa/Zt58Oa757/v/O+dC+xqV9dYNrqQdAvJlwAMcs6nzOxynwUk7SN5DEDJOb9tZr8u7EJS6+7fkexIbpP83d0f6sHdQPInksPKXu267sDCBrquu4+kSD4t6baI+JpkFxEv7sS5++HKPSnpzoj4huQWyaMLGXD3VZJy97W6s+tJflAXX5fUTuNIPl65Q5XbQ3KDZHH31yU1Sxmoi1lEnCBZSH4m6aZ5Bkacu79SzX8saWUpA2NFjpD8i+QPku6eZ2Ds3lGSWxFxSdLts2rPfUQ5549KKasArouIL9z9kbk7+oc7LemwpL0R8dWscPbq0WAwuJRSOgjgRzM7FxEv9+Hatv0ypXS/mf3SNM3nJJ9dygAAmNnVlNIagDOSTpJcBzA1nBPclaZpHgRwDsB7U8O5UwYmVUP2ag3n5VkZmMI17v5GDeebSxsYKSKO18V6GRjjTpCUpH3AAi34H5Xrry1lYNQCSScBXFmAyyTfkvQagHfM7Od/b/ZtweQXkuRTfVog6UaSn8z8QvYxUKfeRZIeEccBgOQT8wxIuqsOuu1pr2GeBk2q67p7I+IsgD2SHss5n+/DufujEXHGzLZLKWuDweDi5H/mZoDkkaZpLgAYppQOtW3bq3hEvGBmn5rZZkrp4LTiOxoYDSMAHwK4kFI6YGbfzys8FrZ1AGebplk1s80doRnj+P0e4/g/GZB0M8nzi4zjXMFtM4OZ7ZW0v5SyAeAeMzuWUjq1w263KnfHcDj8MyI2ANwK4Jm2bU/PKz6+UHb3b+uxaovkH+7+cA9uheRmfVKlHske6F0YE4fSUsrzpZSVnPO7CxxK95dSngOApmnWzey3RQzsalfXXH8DZoHVpJT60DoAAAAASUVORK5CYII=" style="width:20px; height:20px;">`,
      fullscreen: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`,
      edit: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
      more: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`
    };
    const leftGroup = document.createElement("div");
    leftGroup.style.display = "flex";
    leftGroup.style.alignItems = "center";
    if (!isVideo) {
      const btnRewind = makeBtn(ICONS.rewind, "Rewind 30s");
      btnRewind.addEventListener("mousedown", (e) => smartClickHandler(e, () => media.currentTime = Math.max(0, media.currentTime - 10)));
      btnRewind.style.marginRight = "15px";
      leftGroup.appendChild(btnRewind);
    }
    const btnPlay = makeBtn(ICONS.play, "Play/Pause");
    if (!isVideo) {
      const btnForward = makeBtn(ICONS.forward, "Forward 30s");
      btnForward.classList.add("ms-cc-hide-compact");
      btnForward.addEventListener("mousedown", (e) => smartClickHandler(e, () => media.currentTime = Math.min(media.duration, media.currentTime + 30)));
      btnPlay.style.marginRight = "15px";
      leftGroup.appendChild(btnPlay);
      btnForward.style.marginRight = "15px";
      leftGroup.appendChild(btnForward);
    } else {
      leftGroup.appendChild(btnPlay);
      btnPlay.style.marginRight = "8px";
    }
    const btnMute = makeBtn(ICONS.mute, "Mute/Unmute");
    const volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = "0";
    volumeSlider.max = "1";
    volumeSlider.step = "0.05";
    volumeSlider.classList.add("ms-cc-hide-compact");
    Object.assign(volumeSlider.style, { width: "70px", cursor: "pointer", accentColor: "#fff", pointerEvents: "auto" });
    if (!isVideo) {
      volumeSlider.style.marginLeft = "0px";
    }
    leftGroup.append(btnMute, volumeSlider);
    const nameLabel = document.createElement("div");
    nameLabel.className = "ms-cc-name-label";
    Object.assign(nameLabel.style, {
      flex: "1 1 auto",
      minWidth: "0",
      textAlign: "center",
      color: "rgba(255,255,255,.7)",
      fontSize: "12px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      pointerEvents: "none",
      padding: "0 8px"
    });
    const rightGroup = document.createElement("div");
    rightGroup.style.display = "flex";
    rightGroup.style.alignItems = "center";
    rightGroup.style.marginLeft = "auto";
    if (isVideo) {
      let wasLockedBeforeFs = false;
      let scrollRatioX = 0, scrollRatioY = 0, hScrollEl = null, vScrollEl = null;
      const btnFs = makeBtn(ICONS.fullscreen, "Fullscreen");
      btnFs.addEventListener("mousedown", (e) => smartClickHandler(e, () => {
        if (!document.fullscreenElement) {
          const { hScroll, vScroll } = this.findScrollableParents(host.parentElement);
          this.hScrollEl = hScroll;
          this.vScrollEl = vScroll;
          if (this.hScrollEl && this.hScrollEl.scrollWidth > this.hScrollEl.clientWidth) {
            this.scrollRatioX = this.hScrollEl.scrollLeft / (this.hScrollEl.scrollWidth - this.hScrollEl.clientWidth);
          }
          if (this.vScrollEl && this.vScrollEl.scrollHeight > this.vScrollEl.clientHeight) {
            this.scrollRatioY = this.vScrollEl.scrollTop / (this.vScrollEl.scrollHeight - this.vScrollEl.clientHeight);
          }
        }
        if (!document.fullscreenElement) host.requestFullscreen().catch(() => {
        });
        else document.exitFullscreen().catch(() => {
        });
      }));
      btnFs.style.marginRight = "10px";
      rightGroup.appendChild(btnFs);
    }
    const btnEdit = makeBtn(ICONS.edit, t(this.app, "edit"));
    const btnMore = makeBtn(ICONS.more, "More options");
    btnEdit.classList.add("ms-cc-hide-compact");
    btnMore.classList.add("ms-cc-hide-compact");
    btnEdit.style.marginRight = "10px";
    btnEdit.addEventListener("mousedown", (e) => smartClickHandler(e, (evt) => {
      new CloneSettingsModal(this.app, {
        animation: this.cloneAnimation,
        bgOpacity: this.cloneBgOpacity,
        controlsOpacity: this.cloneControlsOpacity,
        hideDelay: this.cloneHideDelay,
        showAudioHandles: this.cloneShowAudioHandles
      }, async (settings) => {
        if (settings) {
          this.cloneAnimation = settings.animation;
          this.cloneBgOpacity = settings.bgOpacity;
          this.cloneControlsOpacity = settings.controlsOpacity;
          this.cloneHideDelay = settings.hideDelay;
          this.cloneShowAudioHandles = settings.showAudioHandles;
          await this.persistAll();
          this.applyCloneSettingsToAll();
        }
      }).open();
    }));
    btnMore.addEventListener("mousedown", (e) => smartClickHandler(e, (evt) => {
      const origHost = this.findHostByKey(host.dataset.msParentKey);
      const meEmbed = origHost?.closest(".mx-media-embed");
      const target = meEmbed || origHost;
      if (target) {
        const rect = btnMore.getBoundingClientRect();
        target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX: rect.left, clientY: rect.bottom }));
      }
    }));
    rightGroup.append(btnEdit, btnMore);
    const centerGroup = document.createElement("div");
    Object.assign(centerGroup.style, {
      flex: "1 1 auto",
      minWidth: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    });
    const timeLabel = document.createElement("div");
    timeLabel.className = "ms-cc-time-label";
    Object.assign(timeLabel.style, {
      color: "rgba(255,255,255,.7)",
      fontSize: "12px",
      whiteSpace: "nowrap",
      paddingRight: "8px"
    });
    timeLabel.textContent = "0:00 / 0:00 |";
    centerGroup.append(timeLabel, nameLabel);
    btnBar.append(leftGroup, centerGroup, rightGroup);
    root.append(timeline, btnBar);
    host.appendChild(root);
    const parentKey = host.dataset.msParentKey;
    if (parentKey) {
      const notePath = this.getActiveNote()?.path ?? "";
      const savedState = this.notes[notePath]?.clones?.[host.dataset.msKey];
      const savedFileName = savedState?.fileName;
      const formatTime2 = (seconds) => {
        if (!isFinite(seconds)) return "0:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
      };
      if (savedFileName) {
        nameLabel.textContent = savedFileName;
        nameLabel.title = savedFileName;
        host.dataset.msFileName = savedFileName;
      } else {
        const originalHost = this.findHostByKey(parentKey);
        if (originalHost) {
          const mediaEl2 = originalHost.querySelector("video, audio, img");
          if (mediaEl2) {
            const { base } = this.getSrcAndBase(originalHost, mediaEl2);
            nameLabel.textContent = base || "Untitled";
            nameLabel.title = base || "Untitled";
            host.dataset.msFileName = base || "Untitled";
          }
        }
      }
    }
    const refresh = (isSeeking = false, formatTime2) => {
      btnPlay.innerHTML = media.paused ? ICONS.play : ICONS.pause;
      if (media.muted || media.volume === 0) {
        btnMute.innerHTML = ICONS.volumeOff;
      } else if (media.volume <= 0.5) {
        btnMute.innerHTML = ICONS.volumeLow;
      } else {
        btnMute.innerHTML = ICONS.volumeHigh;
      }
      volumeSlider.value = String(media.muted ? 0 : media.volume);
      const dur = Number.isFinite(media.duration) ? media.duration : 0;
      const frac = dur ? media.currentTime / dur : 0;
      progress.style.width = Math.round(Math.max(0, Math.min(1, frac)) * 100) + "%";
      thumb.style.left = progress.style.width;
      if (!isSeeking) {
        timeLabel.textContent = `${formatTime2(media.currentTime)} / ${formatTime2(dur)} | `;
      }
    };
    const formatTime = (seconds) => {
      if (!isFinite(seconds)) return "0:00";
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    };
    refresh(false, formatTime);
    btnPlay.addEventListener("mousedown", (e) => smartClickHandler(e, (evt) => {
      if (media.paused) media.play().catch(() => void 0);
      else media.pause();
    }));
    btnMute.addEventListener("mousedown", (e) => smartClickHandler(e, (evt) => {
      media.muted = !media.muted;
    }));
    volumeSlider.addEventListener("input", () => {
      media.volume = Number(volumeSlider.value);
      if (media.volume > 0) media.muted = false;
      const notePath = this.getActiveNote()?.path ?? "";
      const key = host.dataset.msKey;
      if (notePath && key) {
        this.saveState(notePath, key, { volume: media.volume });
      }
    });
    let seeking = false;
    const seekTo = (x) => {
      const r = timeline.getBoundingClientRect();
      const frac = r.width ? Math.min(1, Math.max(0, (x - r.left) / r.width)) : 0;
      if (isFinite(media.duration) && media.duration > 0) {
        media.currentTime = media.duration * frac;
        refresh(true, formatTime);
      }
    };
    timeline.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      seeking = true;
      e.currentTarget.setPointerCapture?.(e.pointerId);
      seekTo(e.clientX);
    }, { capture: true });
    timeline.addEventListener("pointerenter", () => {
      thumb.style.opacity = "1";
    });
    timeline.addEventListener("pointerleave", () => {
      if (!seeking) thumb.style.opacity = "0";
    });
    const onMove = (e) => {
      if (seeking) seekTo(e.clientX);
    };
    const onUp = (e) => {
      if (seeking) {
        seeking = false;
        e.currentTarget.releasePointerCapture?.(e.pointerId);
      }
      if (!timeline.matches(":hover")) thumb.style.opacity = "0";
    };
    window.addEventListener("pointermove", onMove, true);
    window.addEventListener("pointerup", onUp, true);
    media.addEventListener("timeupdate", () => refresh(false, formatTime));
    media.addEventListener("play", () => refresh(false, formatTime));
    media.addEventListener("pause", () => refresh(false, formatTime));
    media.addEventListener("volumechange", () => refresh(false, formatTime));
    const mo = new MutationObserver(() => {
      if (!document.contains(host)) {
        window.removeEventListener("pointermove", onMove, true);
        window.removeEventListener("mousemove", onFsMouseMove, true);
        window.removeEventListener("pointerup", onUp, true);
        ro.disconnect();
        mo.disconnect();
      }
    });
    mo.observe(host.parentElement, { childList: true });
  }
  // «Лакмус» — понимаем, долетает ли клик и готово ли медиа
  installClickToggleDebug(host, mediaEl) {
    const media = mediaEl;
    if (!(media instanceof HTMLMediaElement)) return;
    const onMouseDown = (e) => {
      if (e.target.closest(".ms-clone-controls")) return;
      if (e.button === 2) {
        return;
      }
      const onMouseUp = (upEvent) => {
        window.removeEventListener("mouseup", onMouseUp, true);
        const dx = upEvent.clientX - e.clientX;
        const dy = upEvent.clientY - e.clientY;
        if (Math.hypot(dx, dy) < 4) {
          if (media.paused) {
            media.play().catch((err) => console.warn("[MS] clone play() rejected:", err));
          } else {
            media.pause();
          }
        }
      };
      window.addEventListener("mouseup", onMouseUp, true);
    };
    host.addEventListener("mousedown", onMouseDown, false);
  }
  applyLinkOverlay(host, link) {
    let overlay = host.querySelector(".ms-link-overlay");
    if (!link) {
      overlay?.remove();
      return;
    }
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "ms-link-overlay";
      Object.assign(overlay.style, {
        position: "absolute",
        inset: "3px",
        zIndex: "2500",
        // Above media, below handles
        cursor: "pointer",
        pointerEvents: "auto"
      });
      host.appendChild(overlay);
    }
    overlay.__ms_clickHandler?.();
    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      const onMouseUp = (upEvent) => {
        window.removeEventListener("mouseup", onMouseUp, true);
        const dx = upEvent.clientX - e.clientX;
        const dy = upEvent.clientY - e.clientY;
        if (Math.hypot(dx, dy) < 4) {
          window.open(link, "_blank");
        }
      };
      window.addEventListener("mouseup", onMouseUp, true);
    };
    overlay.addEventListener("mousedown", onMouseDown);
    overlay.__ms_clickHandler = () => overlay.removeEventListener("mousedown", onMouseDown);
  }
  applyCloneSettingsToAll() {
    const root = this.getActiveContainerEl();
    if (!root) return;
    root.querySelectorAll(".ms-host[data-ms-parent-key]").forEach((cloneHost) => {
      cloneHost.dataset.msAnimation = this.cloneAnimation;
      const bgs = cloneHost.querySelectorAll(".ms-media-bg, .ms-local-bg");
      if (bgs.length > 0) {
        bgs.forEach((bg) => {
          bg.style.opacity = String(this.cloneBgOpacity);
        });
      } else if (cloneHost.dataset.msKind === "video" || cloneHost.dataset.msKind === "audio") {
      }
      const controls = cloneHost.querySelector(".ms-clone-controls");
      if (controls) {
        controls.style.backgroundColor = `rgba(0,0,0,${this.cloneControlsOpacity})`;
      }
      this.applyCloneHideDelayCss(this.cloneHideDelay);
      if (cloneHost.dataset.msKind === "audio") {
        cloneHost.dataset.msShowHandles = this.cloneShowAudioHandles ? "true" : "false";
      }
      this.applyAudioHandlesToAll();
    });
  }
  // Единая функция для применения всех стилей, связанных с ручками
  applyAllHandleStyles() {
    this.applyGlobalHandleStyles();
    this.applyAudioHandlesToAll();
  }
  applyModalAnimationStyles() {
    const STYLE_ID = "ms-modal-animation-style";
    let styleEl = document.getElementById(STYLE_ID);
    if (!this.enableModalAnimation) {
      styleEl?.remove();
      return;
    }
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `
      @keyframes ms-modal-bg-fade-in {
        from { opacity: 0; }
        to { opacity: 0.85; }
      }
      .modal-bg {
        animation: ms-modal-bg-fade-in 0.5s ease forwards !important;
      }
      @keyframes ms-modal-scale-in {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      .modal:has(.ms-clone-settings-modal),
      .modal:has(.ms-bgcolor-modal-content),
      .modal:has(.ms-layout-settings-modal),
      .modal:has(.ms-rename-modal) {
        animation: ms-modal-scale-in 0.15s cubic-bezier(0.25, 0.1, 0.25, 1.0);
      }
    `;
  }
  applyGlobalHandleStyles() {
    const STYLE_ID = "ms-global-handle-style";
    let styleEl = document.getElementById(STYLE_ID);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }
    if (this.showHandlesOnHover) {
      styleEl.textContent = ``;
    } else {
      styleEl.textContent = `.ms-handle { opacity: 0 !important; }`;
    }
  }
  injectCss() {
    if (document.getElementById(this.STYLE_ID)) return;
    const css = `

    .ms-host { position:relative; display:block; will-change:transform; }
    .ms-float-layer {
      position: absolute; 
      inset: 0;
      padding: 0; margin: 0; border: 0;
      pointer-events: none; /* \u043A\u043B\u0438\u043A\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0434\u0435\u0442\u044F\u043C */
      z-index: 2000;
      transform: none;
    }
    .markdown-preview-sizer, .cm-sizer {
      /* \u041A\u0420\u0418\u0422\u0418\u0427\u041D\u041E: Sizer \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043E\u043C \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F float-layer */
      position: relative;
      display: block !important;
    }

    .ms-dock {
      position: absolute; z-index: 2001;
      top: 0; bottom: 0;
      width: 320px;             /* \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u043D\u0435\u0441\u0442\u0438 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 */
      pointer-events: none;     /* \u0441\u0430\u043C\u0430 \u043F\u043E\u043B\u043E\u0441\u0430 \u043D\u0435 \u043B\u043E\u0432\u0438\u0442 */
    }
    .ms-dock .ms-host { pointer-events: auto; } /* \u043A\u043B\u043E\u043D\u044B \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B */

    .ms-dock.ms-dock--right { right: 0; }
    .ms-dock.ms-dock--left  { left: 0; }
    .ms-dock.ms-dock--top   { left: 0; right: 0; height: 220px; width: auto; }

    .ms-overlay { position:absolute; inset:0; pointer-events:none; z-index: 2100; }
    .ms-overlay.--drag, .ms-overlay.--dragmove { pointer-events: all; }
    .ms-noselect { user-select: none !important; }
    /* \u0412\u0430\u0436\u043D\u043E: \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043F\u0440\u043E\u043A\u0441\u0438/\u043E\u0432\u0435\u0440\u043B\u0435\u0435\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u044A\u0435\u0434\u0430\u0442\u044C \u043A\u043B\u0438\u043A\u0438 \u0446\u0435\u043B\u0438\u043A\u043E\u043C */
    .ms-overlay { pointer-events: none; }
    .ms-overlay .ms-handle { pointer-events: auto; }

    /* \u041F\u0440\u044F\u0447\u0435\u043C \xAB\u043C\u0435\u0440\u0442\u0432\u044B\u0435\xBB \u043F\u0430\u043D\u0435\u043B\u0438 \u0443 \u041A\u041B\u041E\u041D\u041E\u0412 ( \u0432\u0438\u0437\u0443\u0430\u043B \u043E\u0442 ME/plyr/vjs ) */
        .ms-link-overlay {
      /* This is the clickable overlay for image clone links */
      /* It's visually transparent but captures clicks */
    }
    .ms-host[data-ms-parent-key] .mejs__controls,
    .ms-host[data-ms-parent-key] .plyr__controls,
    .ms-host[data-ms-parent-key] .vjs-control-bar {
      display: none !important;
    }

    /* \u0421\u043A\u0440\u044B\u0432\u0430\u0435\u043C \u0445\u0435\u043D\u0434\u043B\u044B \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 */
    .ms-host:fullscreen .ms-handle {
      display: none !important;
    }

    /* \u041E\u0431\u0440\u0435\u0437\u0430\u0435\u043C \u0432\u0441\u0451, \u0447\u0442\u043E \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0437\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u043A\u043B\u043E\u043D\u0430 (\u0434\u043B\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438 \u0440\u0435\u0441\u0430\u0439\u0437\u0430) */
    .ms-host[data-ms-kind="video"][data-ms-parent-key],
    .ms-host[data-ms-kind="audio"][data-ms-parent-key] {

      border-radius: 8px; /* \u0421\u043E\u0432\u043C\u0435\u0449\u0430\u0435\u043C \u0441\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 \u0441 \u0444\u043E\u043D\u043E\u043C */
    }
    /* \u041E\u0431\u0440\u0435\u0437\u0430\u0435\u043C \u0432\u0438\u0434\u0435\u043E/\u0430\u0443\u0434\u0438\u043E \u0438 \u043F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E clip-path, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0438 \u043D\u0435 \u0432\u044B\u043B\u0435\u0437\u0430\u043B\u0438 \u0437\u0430 \u0441\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u043D\u044B\u0435 \u0443\u0433\u043B\u044B */
    .ms-host[data-ms-parent-key] > video,
    .ms-host[data-ms-parent-key] > audio,
    .ms-host[data-ms-parent-key] .ms-clone-controls {
        clip-path: inset(0 0 0 0 round 8px);
    }
    /* \u0414\u043B\u044F \u0430\u0443\u0434\u0438\u043E-\u043A\u043B\u043E\u043D\u043E\u0432 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u0434\u0430\u0435\u043C \u0432\u044B\u0441\u043E\u0442\u0443, \u0447\u0442\u043E\u0431\u044B overflow \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E */
    .ms-host[data-ms-kind="audio"][data-ms-parent-key] {
      height: 70px;
      padding-bottom: 0 !important; /* \u0423\u0431\u0438\u0440\u0430\u0435\u043C \u043B\u0438\u0448\u043D\u0438\u0439 \u043E\u0442\u0441\u0442\u0443\u043F, \u0435\u0441\u043B\u0438 \u043E\u043D \u0435\u0441\u0442\u044C */
    }

    /* \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u0432\u0438\u0434\u0435\u043E-\u043A\u043B\u043E\u043D\u0430\u0445: \u0412\u0441\u043F\u043B\u044B\u0432\u0430\u043D\u0438\u0435 */
    .ms-host[data-ms-kind="video"][data-ms-parent-key][data-ms-animation="popup"] .ms-clone-controls {

      opacity: 0;
      transform: translateY(5px) scaleY(0.1);
      transform-origin: bottom;
      will-change: transform, opacity;
    }
    .ms-host[data-ms-kind="video"][data-ms-parent-key][data-ms-animation="popup"]:hover .ms-clone-controls {

      opacity: 1;
      transform: translateY(0) scaleY(1);
      transition-delay: 0s;
    }
    
    /* \u041F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C, \u043E\u043D\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0439 */
    .ms-host[data-ms-kind="video"][data-ms-parent-key]:hover .ms-clone-controls:hover {
        opacity: 1;
        transition-delay: 0s;
    }

    /* \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u0432\u0438\u0434\u0435\u043E-\u043A\u043B\u043E\u043D\u0430\u0445: \u041F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435 */
    .ms-host[data-ms-kind="video"][data-ms-parent-key][data-ms-animation="fade"] .ms-clone-controls {
      opacity: 0;
    }
    .ms-host[data-ms-kind="video"][data-ms-parent-key][data-ms-animation="fade"]:hover .ms-clone-controls {
      opacity: 1;
      transition-delay: 0s; /* \u041F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0435\u0437 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0438 */
    }

    /* \u0410\u0432\u0442\u043E\u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 */
    .ms-host[data-ms-kind="video"][data-ms-parent-key]:fullscreen.ms-fs-inactive .ms-clone-controls {
      opacity: 0;
      transition-delay: 0.5s; /* \u041F\u043B\u0430\u0432\u043D\u043E\u0435 \u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F */
    }
    .ms-host[data-ms-kind="video"][data-ms-parent-key][data-ms-animation="popup"]:fullscreen.ms-fs-inactive .ms-clone-controls {
        transform: translateY(100%);
    }
    /* \u0414\u043B\u044F \u0430\u0443\u0434\u0438\u043E-\u043A\u043B\u043E\u043D\u043E\u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0438\u0434\u043D\u0430 */
    .ms-host[data-ms-kind="audio"][data-ms-parent-key] .ms-clone-controls {
      opacity: 1;
    }

    /* \u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0434\u043B\u044F \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u043B\u043E\u043D\u0430 */
    .ms-clone-controls.ms-cc-compact .ms-cc-hide-compact {
      display: none !important;
    }

    /* \u041F\u0440\u043E\u043A\u0441\u0438-\u0437\u043E\u043D\u044B \u043D\u0430\u0434 \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438 \u043F\u0430\u043D\u0435\u043B\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F */
.ms-proxy-ctrl{
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:2147483647;
}
.ms-proxy-btn{ position:absolute; pointer-events:auto; }
/* \u041C\u043E\u0434\u0430\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0441\u0435\u0442\u0430 */
.ms-rename-modal .ms-rename-form { margin-top: 8px; }
.ms-rename-modal .ms-rename-form input {
  width: 100%;
  box-sizing: border-box;
}
  .ms-width-preset-modal-content .modal-button-container { /* <-- \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 */
  position: relative;
  right: 20px;
}
.ms-rename-modal .ms-rename-actions {
  display: flex;
  gap: 8px;
  margin-top: 20px; /* \u0421\u0434\u0432\u0438\u0433\u0430\u0435\u043C \u043A\u043D\u043E\u043F\u043A\u0438 \u0432\u043D\u0438\u0437 */
}
/* \u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u0434\u043B\u044F \u043C\u0435\u0442\u043A\u0438 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u043A\u043B\u043E\u043D\u043E\u0432 */
.ms-clone-settings-modal .setting-item-control span {
  display: inline-block;
  width: 3.5em; /* \u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u043B\u044F "100%" */
  text-align: right;
}
    /* \u0425\u044D\u043D\u0434\u043B\u044B: \u0432\u0438\u0434 \u043A\u0430\u043A \u0432 reading; \u0432 reading \u043D\u0435\u0432\u0438\u0434\u0438\u043C\u044B, \u043D\u043E \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B */
    .ms-handle { position:absolute; width:8px; height:8px; border-radius:2.5px;
      background:var(--interactive-accent); box-shadow:0 0 0 2px rgba(0,0,0,.25);
      display:none; pointer-events:auto; cursor:nwse-resize; touch-action:none;
    }
    .ms-handle--rb { right:0px; bottom:0px; }
    .ms-handle--lb { left:0px; bottom:0px; }
    .ms-handle--rt { right:0px; top:0px; }
    .ms-handle--lt { left:0px; top:0px; }

    .workspace-leaf.mod-active .markdown-source-view .ms-host:hover .ms-handle { display:block; opacity:1; }
    .markdown-reading-view .ms-handle { display:block; opacity:0; } /* \u043D\u0435\u0432\u0438\u0434\u0438\u043C\u044B, \u043D\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u044B */

    .ms-handle--rb, .ms-handle--lt { cursor: nwse-resize; }
    .ms-handle--lb, .ms-handle--rt { cursor: nesw-resize; }


    /* \u041A\u043E\u0433\u0434\u0430 \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u0441\u0442\u043E\u0438\u0442, \u0440\u0443\u0447\u043A\u0438 \u0432\u0435\u0434\u0443\u0442 \u0441\u0435\u0431\u044F \u043A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u043E (\u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438) */
    .ms-host[data-ms-kind="audio"][data-ms-show-handles="true"]:hover .ms-handle { opacity:1 !important; }
    
    /* \u0421\u043A\u0440\u044B\u0432\u0430\u0435\u043C \u0440\u0443\u0447\u043A\u0438 \u0443 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0430\u0443\u0434\u0438\u043E, \u043A\u0430\u043A \u0438 \u0443 \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0435\u0434\u0438\u0430 */
    .ms-host[data-ms-kind="audio"][data-ms-locked="1"] .ms-handle {
      display: none !important;
    }

    /* \u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043C\u0435\u043D\u044E \u2014 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0441\u0435\u0442\u043E\u0432 */
    .menu .menu-item.ms-preset-item { position: relative; padding-right: 30px; }
    .menu .menu-item.ms-preset-item .ms-preset-del {
      position:absolute; right:6px; top:50%; transform:translateY(-50%);
      width:20px; height:20px; border-radius:6px; display:flex; align-items:center; justify-content:center;
      opacity:.6; pointer-events:auto; cursor:pointer;
    }
    .menu .menu-item.ms-preset-item .ms-preset-del:hover { opacity:1; background:var(--background-modifier-hover); }
    .menu .menu-item.ms-preset-item .ms-preset-del::before { content:"\xD7"; font-size:14px; line-height:1; }
    /* \u0434\u0432\u0435 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0443 \u043F\u0443\u043D\u043A\u0442\u0430 \u043C\u0435\u043D\u044E: [\u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448][\u043A\u0440\u0435\u0441\u0442\u0438\u043A] */
.menu .menu-item.ms-preset-item { padding-right: 54px; }

/* \u043C\u0435\u0441\u0442\u043E \u0441\u043F\u0440\u0430\u0432\u0430 \u043F\u043E\u0434 \u270E \u0438 \xD7 */
/* \u044F\u043A\u043E\u0440\u044C/\u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0443 \u0442\u0435\u0431\u044F \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u2014 \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u0430 \u0441\u0438\u0434\u0438\u0442 \u043A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u044B\u0439 host */

/* \u0442\u0430\u0431\u043B\u0438\u0447\u043A\u0430 (\u043C\u0438\u043D\u0438-\u0431\u043B\u043E\u043A\u043D\u043E\u0442) */
.ms-note-host { position:relative; z-index:3000; display:block; }
.ms-note { width:100%; height:100%; display:flex; flex-direction:column;
  background: var(--background-secondary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,.25);
}
.ms-note-top { height:24px; display:flex; align-items:center; justify-content:flex-end;
  padding:0 6px; cursor:grab; background: var(--background-modifier-hover);
  border-top-left-radius: 5px; /* \u0421\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0440\u0445\u043D\u0438\u0445 \u0443\u0433\u043B\u043E\u0432 */
  border-top-right-radius: 5px;
}
.ms-note-top:active { cursor:grabbing; }
.ms-note-close { width:18px; height:18px; border-radius:4px;
  display:flex; align-items:center; justify-content:center;
  cursor:pointer; opacity:.75;
}
.ms-note-close:hover { opacity:1; background: var(--background-modifier-hover); }
.ms-note-close::before { content: "\xD7"; font-weight:700; font-size:14px; line-height:1; }

.ms-note-body { flex:1; padding:8px; overflow:auto; white-space:pre-wrap; outline:none; 
  --note-stroke: 1px;
  --note-stroke-color: #000000;


}
.ms-note-host.ms-note-transparent .ms-note {
  background: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.ms-note-host.ms-note-transparent .ms-note-top {
  background: transparent !important;
}
.ms-note-host.ms-note-transparent .ms-note-close {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
.ms-note-host.ms-note-transparent:hover .ms-note {
  border-color: var(--background-modifier-border) !important;
}
.ms-note-host.ms-note-transparent:hover .ms-note-close {
  opacity: 0.75;
}
  .ms-note-body.ms-note-text-stroked {
  filter:
    drop-shadow(calc(-1*var(--note-stroke) * .7071) calc(var(--note-stroke) * .7071)  0 var(--note-stroke-color))
    drop-shadow(calc(var(--note-stroke) * .7071)   calc(-1*var(--note-stroke) * .7071) 0 var(--note-stroke-color))
    drop-shadow(var(--note-stroke) 0       0 var(--note-stroke-color))
    drop-shadow(0 var(--note-stroke)       0 var(--note-stroke-color));
}
/* \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0443\u0447\u043A\u0438 \u043A\u0430\u043A \u0443 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A */

.workspace-leaf.mod-active .markdown-source-view .ms-note-host:hover .ms-handle { display:block; opacity:1; }
.ms-note-host .ms-overlay { pointer-events:none; }
.ms-note-host .ms-handle { opacity: 0 !important; pointer-events: auto; }
/* \u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0439 \u0441\u043B\u043E\u0439 \u0434\u043B\u044F \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0438\u0445 \u0445\u043E\u0441\u0442\u043E\u0432 (\u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0440\u0430\u0437\u0434\u0443\u0432\u0430\u0435\u0442) */
/* \u0441\u0430\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440-\u044F\u043A\u043E\u0440\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C, \u0435\u0441\u043B\u0438 \u0431\u044B\u043B static */
.markdown-source-view, 
.cm-scroller,
.markdown-reading-view { position: relative; }

/* \u0412\u0441\u0435 ms-host \u0432\u043D\u0443\u0442\u0440\u0438 float-layer \u0441\u043D\u043E\u0432\u0430 \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B */
.ms-float-layer .ms-host { pointer-events: auto; }
/* \u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0445\u043E\u0441\u0442: \u0441\u043E\u0437\u0434\u0430\u0451\u043C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0435\u043A, \u0447\u0442\u043E\u0431\u044B \u043E\u0432\u0435\u0440\u043B\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E \u0431\u044B\u043B \u0441\u0432\u0435\u0440\u0445\u0443 */
.ms-host {
  position: relative;          /* \u0432\u0430\u0436\u043D\u043E \u0434\u043B\u044F z-index */
  isolation: isolate;          /* \u0441\u0432\u043E\u0439 stacking context */
  z-index: 20;                 /* \u0432\u044B\u0448\u0435 \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 */
  pointer-events: auto;
}

/* \u041A\u043E\u0433\u0434\u0430 \xAB\u043E\u0442\u043A\u0440\u0435\u043F\u0438\u043B\u0438\xBB (absolute) \u2014 \u0434\u0430\u0451\u043C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0435\u0449\u0451 \u0432\u044B\u0448\u0435 */
.ms-host[data-ms-detached="1"] {
  z-index: 2500;
}

/* \u0421\u0430\u043C \u043E\u0432\u0435\u0440\u043B\u0435\u0439 (\u0440\u0443\u0447\u043A\u0438/\u0440\u0430\u043C\u043A\u0430/\u0448\u0430\u043F\u043A\u0430) \u2014 \u0441\u0432\u0435\u0440\u0445\u0443 \u043D\u0430\u0434 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u043C \u0445\u043E\u0441\u0442\u0430 */
.ms-overlay {
  position: absolute;
  inset: 0;
  z-index: 2600;
  pointer-events: none;        /* \u0447\u0442\u043E\u0431\u044B \u0442\u0435\u043A\u0441\u0442 \u043A\u043B\u0438\u043A\u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u043B */
}

/* \u041D\u043E \u0440\u0443\u0447\u043A\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043B\u043E\u0432\u0438\u0442\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u044F */
.ms-overlay .ms-handle,
.ms-overlay .ms-header,
.ms-overlay .ms-btn, .ms-clone-controls {
  pointer-events: auto;
}

/* \u0422\u0430\u0431\u043B\u0438\u0447\u043A\u0430: \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043E\u0432\u0435\u0440\u0445 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 */
.ms-note-host { position: absolute; }
.ms-overlay { pointer-events: none; z-index: 300; }
/* \u043A\u043D\u043E\u043F\u043A\u0430 "\u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448" \u2014 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u0430 */
.menu .menu-item.ms-preset-item .ms-preset-edit{
  position:absolute; right:30px; top:50%; transform:translateY(-50%);
  width:20px; height:20px; border-radius:6px; display:flex; align-items:center; justify-content:center;
  opacity:.6; pointer-events:auto; cursor:pointer;
  background-repeat:no-repeat; background-position:center; background-size:16px 16px;
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAydJREFUWIXVl09oHFUcxz+/+bMGnajRg3iRGEpFtBdF7EHQS5KiKO1l2N23GwiBxKIn679DoV6V1J4UEoQlu/uedgX1UpHaWkEk/sP6hwoWrIrgxWqUjQZ22/l56CyI2Ozsv4JfGGbezON9Pr8H82aecAXinNujqgeBHcC3wHPGmFMA3qjh9Xr9aVV9W0QmgXVV3QmctNY+DiCjhovI8yLy/tbW1iMLCwtNa+0EcAzYDcwIQKPRiNrt9kFgBrjucgOKyJvFYvHJXuBp87UwDEtxHF8EqFQq1+dyuTPAj561dqLdbp8GngGuAs5tc/zca+XAKpBvtVq1RqPhA8zPz/8OnALuCIAXgCkgNsa8ngWQFd5sNh9aXFzccs5dFJH9rVaLRqNRjqIo2NjYuBf4Tqy1vwKfGWNmhw1fWlr6C0BVxTn3ErBfVV/1PG9MVfepaj4AblDV70cFBxARVdXHnHMiIo+qKsByqVQ66nU6DAg/kMI/CILg4X/CO1ldXQ1E5Ka0+aIx5ikYwjqQwpdT+INxHG/+u8/Kyko4Pj5+VFX3pfADnWcDCQwKH0hgGPC+BYYF70tgmPCeBfqAH9kO3pOAc64gIsvAerPZ3NMNLiKHjTFPdBs3s4CqltPL26MounM7OHAk60crk0ClUhkD7gc+ARLgHWvt3f8Fz1p5J0GWTrlc7j7galVdEZHPgRPACWvt7Obm5ul+Ku8k0wyo6gyA7/vvGmO+8DxvmnQmoig61k/lnWSaARGZBb4pFAo/WWsnkiTZISJfqeoDwLSIHM5aebVavdX3/feSJNlbLpe/7CpQq9VuBnYBZ62168A9gK+qF4APRcQVi8WXs8ABPM+bAiY9z9sJdBcQkd1c+ne8DfhBVV8RkeNhGJ6M4/iPrODLpatAkiTHfd+f833/43w+f3ZQYM8Cc3NzfwK1YYM7Gfm+4P8hoKoj3aB0E/gt3TZdqUyl5/MAnoi8BUw75/aOmlytVm8RkWeB82EYfgQga2trNwZB8Ckwma5uv4yIPwbcxaU3r2CMeQPSzWm9Xr9WRA4B08A1IxK4ICJnkiQ5VCqVvu7c/BudLKDOrJMMjwAAAABJRU5ErkJggg==);/* <-- \u0441\u044E\u0434\u0430 \u0446\u0435\u043B\u0438\u043A\u043E\u043C \u0432\u0441\u0442\u0430\u0432\u044C data:image/png;base64,... */
}
.menu .menu-item.ms-preset-item .ms-preset-edit:hover { opacity:1; background-color:var(--background-modifier-hover); }
.menu .menu-item.ms-preset-item .ms-preset-del:hover  { opacity:1; background-color:var(--background-modifier-hover); }


    /* \u041C\u043E\u0434\u0430\u043B\u043A\u0430 Set size */
    .ms-imgsz-form .ms-row { display:flex; align-items:center; gap:10px; margin:8px 0; }
    .ms-imgsz-form input[type="number"] { width:120px; }
    `;
    const style = document.createElement("style");
    style.id = this.STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }
};
