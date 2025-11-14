import {
  App,
  Plugin,
  MarkdownView,
  TFile,
  Notice,
  Menu,
  FileSystemAdapter,
  Modal,
  normalizePath,
  requestUrl,
  Setting,
  ButtonComponent,
} from "obsidian";

type Dict = Record<string, string>;
const I18N: Record<string, Dict> = {
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
add: "Add…",
addPresetTitle: "Add width preset ‹px›",
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
setSize: "Set size…",
width: "Width",
height: "Height",
keepAR: "Keep aspect ratio",
sbReady: "ML • ready",
sbTitle: "Media Layout: click to rescan",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — plugin active",
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
hideDetachButtonLabel: "Hide «Detach» button",
modalAnimationLabel: "Window animation",
cloneRestoreDelayLabel: "Clone appearance delay",
noteRestoreDelayLabel: "Note box appearance delay",
hideDelayLabel: "Panel hide delay",
changeTextColor: "Change text color",
cloneNearFile: "Clone next to the file",
addStroke: "Add stroke",
addLink: "Add link",
applyToHeader: "Apply to header",
deleteSelected: "Delete selected ({n})",
urlMediaClickToSave: "Click to save to vault",
urlMediaDownloadAndReplace: "Download and replace",
urlMediaDownloading: "Downloading image...",
urlMediaDownloadError: "Download error: {status}",
urlMediaFileSavedLinkFailed: "File saved, but failed to update link",
urlMediaSuccess: "Image saved and link updated",
urlMediaFileSavedPatternNotFound: "File saved, but link not found in text",
urlMediaError: "Error: {error}",
urlMediaUnknownError: "unknown error",
},
  ru: {
    cloneSettingsTitle: "Кастомизация клонов",
    animation: "Анимация",
    animationPopup: "Всплывающая",
    animationFade: "Проявление",
    backgroundOpacity: "Прозрачность фона",
    controlsOpacity: "Прозрачность панели",
    showAudioHandles: "Показывать ручки у аудио",
    presets: "Размеры",
    fit: "Подогнать под контейнер",
    natural: "Натуральный размер",
    add: "Добавить…",
    addPresetTitle: "Добавить пресет ширины ‹px›",
    placeholder: "например: 820",
    ok: "ОК",
    cancel: "Отмена",
    invalid: "Некорректное значение",
    maxReached: "Достигнуто максимальное количество пресетов",
    added: "Добавлен пресет {n}",
    removed: "Удалён пресет {n}",
    openLocation: "Открыть расположение файла",
    fileNotFound: "Файл не найден в ваулте",
    shellDenied: "Нет доступа к shell",
    localOnly: "Доступно только для локальных ваултов",
    restorePos: "Вернуть исходное положение",
    setSize: "Задать размер…",
    width: "Ширина",
    height: "Высота",
    keepAR: "Сохранять пропорции",
    sbReady: "ML • готово",
    sbTitle: "Media Layout: клик — пересканировать",
    cmdPing: "Media Layout: ping",
    pingOk: "ML: OK — плагин активен",
    posPresets: "Сохранить положение клонов",
    resetAll: "Сбросить всё",
    saveLayout: "Сохранить пресет",
    layoutMax: "Достигнуто максимальное количество пресетов",
    saved: "Сохранено",
    layoutN: "Пресет {n}",
    renameTitle: "Введите название",
    addNote: "Добавить табличку",
    copyLayout: "Скопировать данные страницы",
    pasteLayout: "Вставить данные страницы",
    deleteNote: "Удалить табличку",
    detach: "Открепить",
    bgColor: "Изменить цвет фона",
    duplicate: "Клонировать",
    reset: "Сбросить",
    removeBg: "Убрать фон",
    deleteClone: "Удалить",
    lock: "Закрепить",
    unlock: "Разблокировать",
    localOnlyCheckboxLabel: "Только для этого файла",
    makeInvisible: "Сделать невидимым",
    invalidLayoutData: "Неверные данные страницы в буфере обмена.",
    layoutPasted: "Данные страницы и пресеты вставлены.",
    pasteLayoutFailed: "Не удалось вставить данные страницы из буфера обмена.",
    layoutCopied: "Данные страницы скопированы в буфер обмена.",
    makeVisible: "Сделать видимым",
    bringLayerUp: "Поднять слой",
    sendLayerDown: "Опустить слой",
    showHandlesOnHoverLabel: "Показывать ручки при наведении",
    hideDetachButtonLabel: "Скрыть кнопку «открепить»",
    modalAnimationLabel: "Анимация окон",
    cloneRestoreDelayLabel: "Задержка появления клонов",
    noteRestoreDelayLabel: "Задержка появления табличек",
    hideDelayLabel: "Задержка скрытия панели",
    changeTextColor: "Изменить цвет текста",
    cloneNearFile: "Клонировать рядом с файлом",
    addStroke: "Добавить обводку",
    applyToHeader: "Применить для шапки",
    addLink: "Добавить ссылку",
    deleteSelected: "Удалить выделенное ({n})",
    urlMediaClickToSave: "Клик для сохранения в vault",
    urlMediaDownloadAndReplace: "Скачать и заменить",
    urlMediaDownloading: "Скачивание изображения...",
    urlMediaDownloadError: "Ошибка скачивания: {status}",
    urlMediaFileSavedLinkFailed: "Файл сохранен, но не удалось обновить ссылку",
    urlMediaSuccess: "Изображение сохранено и ссылка обновлена",
    urlMediaFileSavedPatternNotFound: "Файл сохранен, но ссылка не найдена в тексте",
    urlMediaError: "Ошибка: {error}",
    urlMediaUnknownError: "неизвестная ошибка",
  },
de: {
cloneSettingsTitle: "Klon-Anpassung",
animation: "Animation",
animationPopup: "Popup",
animationFade: "Einblenden",
backgroundOpacity: "Hintergrund-Deckkraft",
controlsOpacity: "Bedienfeld-Deckkraft",
showAudioHandles: "Audio-Griffe anzeigen",
presets: "Größen",
fit: "An Container anpassen",
natural: "Natürliche Größe",
add: "Hinzufügen…",
addPresetTitle: "Breiten-Preset hinzufügen ‹px›",
placeholder: "z. B. 820",
ok: "OK",
cancel: "Abbrechen",
invalid: "Ungültiger Wert",
maxReached: "Maximale Anzahl an Presets erreicht",
added: "Preset {n} hinzugefügt",
removed: "Preset {n} entfernt",
removeBg: "Hintergrund entfernen",
openLocation: "Dateispeicherort öffnen",
fileNotFound: "Datei im Vault nicht gefunden",
shellDenied: "Kein Shell-Zugriff",
localOnly: "Nur für lokale Vaults verfügbar",
restorePos: "Ausgangsposition wiederherstellen",
setSize: "Größe festlegen…",
width: "Breite",
height: "Höhe",
keepAR: "Seitenverhältnis beibehalten",
sbReady: "ML • bereit",
sbTitle: "Media Layout: Klicken zum Rescan",
cmdPing: "Media Layout: Ping",
pingOk: "ML: OK — Plugin aktiv",
posPresets: "Klonposition beibehalten",
resetAll: "Alles zurücksetzen",
saveLayout: "Preset speichern",
layoutMax: "Maximale Anzahl an Presets erreicht",
saved: "Gespeichert",
layoutN: "Preset {n}",
renameTitle: "Name eingeben",
addNote: "Notiz-Box hinzufügen",
copyLayout: "Seitendaten kopieren",
pasteLayout: "Seitendaten einfügen",
deleteNote: "Notiz-Box löschen",
detach: "Ablösen",
bgColor: "Hintergrundfarbe ändern",
duplicate: "Duplizieren",
reset: "Zurücksetzen",
deleteClone: "löschen",
lock: "Sperren",
unlock: "Entsperren",
localOnlyCheckboxLabel: "Nur für diese Datei",
makeInvisible: "Unsichtbar machen",
invalidLayoutData: "Ungültige Seitendaten in der Zwischenablage.",
layoutPasted: "Seitendaten und Presets eingefügt.",
pasteLayoutFailed: "Seitendaten konnten nicht aus der Zwischenablage eingefügt werden.",
layoutCopied: "Seitendaten in die Zwischenablage kopiert.",
makeVisible: "Sichtbar machen",
bringLayerUp: "Ebene nach oben",
sendLayerDown: "Ebene nach unten",
  showHandlesOnHoverLabel: "Ziehpunkte bei Hover anzeigen",
  hideDetachButtonLabel: "Schaltfläche „Ablösen“ ausblenden",
  modalAnimationLabel: "Modal-Animation",
  cloneRestoreDelayLabel: "Verzögerung für Klon-Einblendung",
  noteRestoreDelayLabel: "Verzögerung für Notizbox-Einblendung",
  hideDelayLabel: "Verzögerung beim Ausblenden des Panels",
  changeTextColor: "Textfarbe ändern",
  cloneNearFile: "Neben der Datei klonen",
  addStroke: "Kontur hinzufügen",
  applyToHeader: "Auf Kopfzeile anwenden",
  addLink: "Link hinzufügen",
  deleteSelected: "Ausgewählte löschen ({n})",
  urlMediaClickToSave: "Klicken um im Vault zu speichern",
  urlMediaDownloadAndReplace: "Herunterladen und ersetzen",
  urlMediaDownloading: "Bild wird heruntergeladen...",
  urlMediaDownloadError: "Download-Fehler: {status}",
  urlMediaFileSavedLinkFailed: "Datei gespeichert, aber Link-Aktualisierung fehlgeschlagen",
  urlMediaSuccess: "Bild gespeichert und Link aktualisiert",
  urlMediaFileSavedPatternNotFound: "Datei gespeichert, aber Link nicht im Text gefunden",
  urlMediaError: "Fehler: {error}",
  urlMediaUnknownError: "unbekannter Fehler",
},
pl: {
cloneSettingsTitle: "Dostosowanie klonów",
animation: "Animacja",
animationPopup: "Wyskakująca",
animationFade: "Wygaszanie",
backgroundOpacity: "Przezroczystość tła",
controlsOpacity: "Przezroczystość panelu",
showAudioHandles: "Pokaż uchwyty audio",
presets: "Rozmiary",
fit: "Dopasuj do kontenera",
natural: "Naturalny rozmiar",
add: "Dodaj…",
addPresetTitle: "Dodaj preset szerokości ‹px›",
placeholder: "np. 820",
ok: "OK",
removeBg: "Usuń tło",
cancel: "Anuluj",
invalid: "Nieprawidłowa wartość",
maxReached: "Osiągnięto maksymalną liczbę presetów",
added: "Dodano preset {n}",
removed: "Usunięto preset {n}",
openLocation: "Otwórz lokalizację pliku",
fileNotFound: "Pliku nie znaleziono w vault",
shellDenied: "Brak dostępu do shell",
localOnly: "Dostępne tylko dla lokalnych vaultów",
restorePos: "Przywróć pozycję",
setSize: "Ustaw rozmiar…",
width: "Szerokość",
height: "Wysokość",
keepAR: "Zachowaj proporcje",
sbReady: "ML • gotowe",
sbTitle: "Media Layout: kliknij, aby przeskanować",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — wtyczka aktywna",
posPresets: "Zapisz pozycje klonów",
resetAll: "Zresetuj wszystko",
saveLayout: "Zapisz preset",
layoutMax: "Osiągnięto maksymalną liczbę presetów",
saved: "Zapisano",
layoutN: "Preset {n}",
renameTitle: "Wpisz nazwę",
addNote: "Dodaj ramkę notatki",
copyLayout: "Kopiuj dane strony",
pasteLayout: "Wklej dane strony",
deleteNote: "Usuń ramkę notatki",
detach: "Odłącz",
bgColor: "Zmień kolor tła",
duplicate: "Duplikuj",
reset: "Resetuj",
deleteClone: "Usuń",
lock: "Zablokuj",
unlock: "Odblokuj",
localOnlyCheckboxLabel: "Tylko dla tego pliku",
makeInvisible: "Uczyń niewidocznym",
invalidLayoutData: "Nieprawidłowe dane strony w schowku.",
layoutPasted: "Wklejono dane strony i presety.",
pasteLayoutFailed: "Nie udało się wkleić danych strony ze schowka.",
layoutCopied: "Skopiowano dane strony do schowka.",
makeVisible: "Uczyń widocznym",
bringLayerUp: "Podnieś warstwę",
sendLayerDown: "Opuść warstwę",
  showHandlesOnHoverLabel: "Pokaż uchwyty po najechaniu",
  hideDetachButtonLabel: "Ukryj przycisk „Odepnij”",
  modalAnimationLabel: "Animacja okien modalnych",
  cloneRestoreDelayLabel: "Opóźnienie pojawiania się klonów",
  noteRestoreDelayLabel: "Opóźnienie pojawiania się okienek notatek",
  hideDelayLabel: "Opóźnienie ukrywania panelu",
  changeTextColor: "Zmień kolor tekstu",
  cloneNearFile: "Klonuj obok pliku",
  addStroke: "Dodaj obrys",
  applyToHeader: "Zastosuj do nagłówka",
  addLink: "Dodaj link",
  deleteSelected: "Usuń zaznaczone ({n})",
  urlMediaClickToSave: "Kliknij aby zapisać do vault",
  urlMediaDownloadAndReplace: "Pobierz i zamień",
  urlMediaDownloading: "Pobieranie obrazu...",
  urlMediaDownloadError: "Błąd pobierania: {status}",
  urlMediaFileSavedLinkFailed: "Plik zapisany, ale nie udało się zaktualizować linku",
  urlMediaSuccess: "Obraz zapisany i link zaktualizowany",
  urlMediaFileSavedPatternNotFound: "Plik zapisany, ale link nie znaleziony w tekście",
  urlMediaError: "Błąd: {error}",
  urlMediaUnknownError: "nieznany błąd",
},
es: {
cloneSettingsTitle: "Personalizar clones",
animation: "Animación",
removeBg: "Eliminar fondo",
animationPopup: "Emergente",
animationFade: "Fundido",
backgroundOpacity: "Opacidad del fondo",
controlsOpacity: "Opacidad del panel",
showAudioHandles: "Mostrar asas de audio",
presets: "Tamaños",
fit: "Ajustar al contenedor",
natural: "Tamaño natural",
add: "Añadir…",
addPresetTitle: "Añadir preset de ancho ‹px›",
placeholder: "p. ej., 820",
ok: "OK",
cancel: "Cancelar",
invalid: "Valor no válido",
maxReached: "Se alcanzó el número máximo de presets",
added: "Preset {n} añadido",
removed: "Preset {n} eliminado",
openLocation: "Abrir ubicación del archivo",
fileNotFound: "Archivo no encontrado en el vault",
shellDenied: "Sin acceso a shell",
localOnly: "Disponible solo para vaults locales",
restorePos: "Restaurar posición original",
setSize: "Establecer tamaño…",
width: "Ancho",
height: "Alto",
keepAR: "Mantener proporción",
sbReady: "ML • listo",
sbTitle: "Media Layout: clic para reescanear",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — complemento activo",
posPresets: "Guardar posiciones de clones",
resetAll: "Restablecer todo",
saveLayout: "Guardar preset",
layoutMax: "Se alcanzó el número máximo de presets",
saved: "Guardado",
layoutN: "Preset {n}",
renameTitle: "Introduce un nombre",
addNote: "Añadir tabla/nota",
copyLayout: "Copiar datos de la página",
pasteLayout: "Pegar datos de la página",
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
invalidLayoutData: "Datos de página no válidos en el portapapeles.",
layoutPasted: "Se pegaron los datos y presets de la página.",
pasteLayoutFailed: "No se pudieron pegar los datos de la página desde el portapapeles.",
layoutCopied: "Datos de la página copiados al portapapeles.",
makeVisible: "Hacer visible",
bringLayerUp: "Subir capa",
sendLayerDown: "Bajar capa",
  showHandlesOnHoverLabel: "Mostrar tiradores al pasar el cursor",
  hideDetachButtonLabel: "Ocultar el botón «Desanclar»",
  modalAnimationLabel: "Animación de la ventana modal",
  cloneRestoreDelayLabel: "Retraso en la aparición de los clones",
  noteRestoreDelayLabel: "Retraso en la aparición de los cuadros de notas",
  hideDelayLabel: "Retraso al ocultar el panel",
  changeTextColor: "Cambiar color del texto",
  cloneNearFile: "Clonar junto al archivo",
  addStroke: "Añadir contorno",
  applyToHeader: "Aplicar al encabezado",
  addLink: "Añadir enlace",
  deleteSelected: "Eliminar seleccionados ({n})",
  urlMediaClickToSave: "Haga clic para guardar en vault",
  urlMediaDownloadAndReplace: "Descargar y reemplazar",
  urlMediaDownloading: "Descargando imagen...",
  urlMediaDownloadError: "Error de descarga: {status}",
  urlMediaFileSavedLinkFailed: "Archivo guardado, pero no se pudo actualizar el enlace",
  urlMediaSuccess: "Imagen guardada y enlace actualizado",
  urlMediaFileSavedPatternNotFound: "Archivo guardado, pero enlace no encontrado en el texto",
  urlMediaError: "Error: {error}",
  urlMediaUnknownError: "error desconocido",
},
fr: {
cloneSettingsTitle: "Personnalisation des clones",
removeBg: "Supprimer l’arrière-plan",
animation: "Animation",
animationPopup: "Popup",
animationFade: "Fondu",
backgroundOpacity: "Opacité du fond",
controlsOpacity: "Opacité du panneau",
showAudioHandles: "Afficher les poignées audio",
presets: "Tailles",
fit: "Ajuster au conteneur",
natural: "Taille naturelle",
add: "Ajouter…",
addPresetTitle: "Ajouter un preset de largeur ‹px›",
placeholder: "ex. : 820",
ok: "OK",
cancel: "Annuler",
invalid: "Valeur invalide",
maxReached: "Nombre maximal de presets atteint",
added: "Preset {n} ajouté",
removed: "Preset {n} supprimé",
openLocation: "Ouvrir l’emplacement du fichier",
fileNotFound: "Fichier introuvable dans le vault",
shellDenied: "Accès au shell refusé",
localOnly: "Disponible uniquement pour les vaults locaux",
restorePos: "Restaurer la position d’origine",
setSize: "Définir la taille…",
width: "Largeur",
height: "Hauteur",
keepAR: "Conserver le ratio",
sbReady: "ML • prêt",
sbTitle: "Media Layout : cliquer pour rescanner",
cmdPing: "Media Layout : ping",
pingOk: "ML : OK — plugin actif",
posPresets: "Enregistrer les positions des clones",
resetAll: "Tout réinitialiser",
saveLayout: "Enregistrer le preset",
layoutMax: "Nombre maximal de presets atteint",
saved: "Enregistré",
layoutN: "Preset {n}",
renameTitle: "Entrez un nom",
addNote: "Ajouter un encart",
copyLayout: "Copier les données de la page",
pasteLayout: "Coller les données de la page",
deleteNote: "Supprimer l’encart",
detach: "Détacher",
bgColor: "Changer la couleur du fond",
duplicate: "Dupliquer",
reset: "Réinitialiser",
deleteClone: "Supprimer le clone",
lock: "Verrouiller",
unlock: "Déverrouiller",
localOnlyCheckboxLabel: "Uniquement pour ce fichier",
makeInvisible: "Rendre invisible",
invalidLayoutData: "Données de page invalides dans le presse-papiers.",
layoutPasted: "Données et presets de page collés.",
pasteLayoutFailed: "Impossible de coller les données de la page depuis le presse-papiers.",
layoutCopied: "Données de page copiées dans le presse-papiers.",
makeVisible: "Rendre visible",
bringLayerUp: "Monter le calque",
sendLayerDown: "Descendre le calque",
  showHandlesOnHoverLabel: "Afficher les poignées au survol",
  hideDetachButtonLabel: "Masquer le bouton « Détacher »",
  modalAnimationLabel: "Animation des fenêtres modales",
  cloneRestoreDelayLabel: "Délai d’apparition des clones",
  noteRestoreDelayLabel: "Délai d’apparition des boîtes de notes",
  hideDelayLabel: "Délai avant masquage du panneau",
  changeTextColor: "Changer la couleur du texte",
  cloneNearFile: "Cloner à côté du fichier",
  addStroke: "Ajouter un contour",
  applyToHeader: "Appliquer à l'en-tête",
  addLink: "Ajouter un lien",
  deleteSelected: "Supprimer les éléments sélectionnés ({n})",
  urlMediaClickToSave: "Cliquez pour enregistrer dans le vault",
  urlMediaDownloadAndReplace: "Télécharger et remplacer",
  urlMediaDownloading: "Téléchargement de l'image...",
  urlMediaDownloadError: "Erreur de téléchargement: {status}",
  urlMediaFileSavedLinkFailed: "Fichier enregistré, mais échec de mise à jour du lien",
  urlMediaSuccess: "Image enregistrée et lien mis à jour",
  urlMediaFileSavedPatternNotFound: "Fichier enregistré, mais lien introuvable dans le texte",
  urlMediaError: "Erreur: {error}",
  urlMediaUnknownError: "erreur inconnue",
},
it: {
cloneSettingsTitle: "Personalizzazione cloni",
removeBg: "Rimuovi sfondo",
animation: "Animazione",
animationPopup: "Popup",
animationFade: "Dissolvenza",
backgroundOpacity: "Opacità sfondo",
controlsOpacity: "Opacità pannello",
showAudioHandles: "Mostra maniglie audio",
presets: "Dimensioni",
fit: "Adatta al contenitore",
natural: "Dimensione naturale",
add: "Aggiungi…",
addPresetTitle: "Aggiungi preset larghezza ‹px›",
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
setSize: "Imposta dimensione…",
width: "Larghezza",
height: "Altezza",
keepAR: "Mantieni proporzioni",
sbReady: "ML • pronto",
sbTitle: "Media Layout: clic per ripetere la scansione",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — plugin attivo",
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
  hideDetachButtonLabel: "Nascondi il pulsante «Sgancia»",
  modalAnimationLabel: "Animazione delle finestre modali",
  cloneRestoreDelayLabel: "Ritardo nella comparsa dei cloni",
  noteRestoreDelayLabel: "Ritardo nella comparsa dei riquadri nota",
  hideDelayLabel: "Ritardo nel nascondere il pannello",
  changeTextColor: "Cambia colore del testo",
  cloneNearFile: "Clona accanto al file",
  addStroke: "Aggiungi contorno",
  applyToHeader: "Applica all'intestazione",
  addLink: "Aggiungi link",
  deleteSelected: "Elimina selezionati ({n})",
  urlMediaClickToSave: "Clicca per salvare nel vault",
  urlMediaDownloadAndReplace: "Scarica e sostituisci",
  urlMediaDownloading: "Download immagine...",
  urlMediaDownloadError: "Errore download: {status}",
  urlMediaFileSavedLinkFailed: "File salvato, ma aggiornamento link fallito",
  urlMediaSuccess: "Immagine salvata e link aggiornato",
  urlMediaFileSavedPatternNotFound: "File salvato, ma link non trovato nel testo",
  urlMediaError: "Errore: {error}",
  urlMediaUnknownError: "errore sconosciuto",
},
be: {
cloneSettingsTitle: "Наладка клонаў",
removeBg: "Выдаліць фон",
animation: "Анімацыя",
animationPopup: "Папап",
animationFade: "З’яўленне",
backgroundOpacity: "Празрыстасць фону",
controlsOpacity: "Празрыстасць панэлі",
showAudioHandles: "Паказваць ручкі аўдыё",
presets: "Памеры",
fit: "Падагнаць да кантэйнера",
natural: "Натуральны памер",
add: "Дадаць…",
addPresetTitle: "Дадаць прэсет шырыні ‹px›",
placeholder: "напрыклад: 820",
ok: "OK",
cancel: "Скасаваць",
invalid: "Няправільнае значэнне",
maxReached: "Дастігнуты максімальны лік прэсетаў",
added: "Дададзены прэсет {n}",
removed: "Выдалены прэсет {n}",
openLocation: "Адкрыць размяшчэнне файла",
fileNotFound: "Файл у сховішчы (vault) не знойдзены",
shellDenied: "Няма доступу да shell",
localOnly: "Даступна толькі для лакальных сховішчаў",
restorePos: "Вярнуць пачатковае становішча",
setSize: "Задаць памер…",
width: "Шырыня",
height: "Вышыня",
keepAR: "Захоўваць прапорцыі",
sbReady: "ML • гатова",
sbTitle: "Media Layout: клік — перасканаваць",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — убудова актыўная",
posPresets: "Захаваць становішчы клонаў",
resetAll: "Скід усіх налад",
saveLayout: "Захаваць прэсет",
layoutMax: "Дастігнуты максімальны лік прэсетаў",
saved: "Захавана",
layoutN: "Прэсет {n}",
renameTitle: "Увядзіце назву",
addNote: "Дадаць таблічку",
copyLayout: "Скапіраваць дадзеныя старонкі",
pasteLayout: "Уставіць дадзеныя старонкі",
deleteNote: "Выдаліць таблічку",
detach: "Адчапіць",
bgColor: "Змяніць колер фону",
duplicate: "Дубляваць",
reset: "Скід",
deleteClone: "Выдаліць",
lock: "Зафіксаваць",
unlock: "Разблакіраваць",
localOnlyCheckboxLabel: "Толькі для гэтага файла",
makeInvisible: "Зрабіць нябачным",
invalidLayoutData: "Няслушныя дадзеныя старонкі ў буферы абмену.",
layoutPasted: "Дадзеныя старонкі і прэсеты ўстаўлены.",
pasteLayoutFailed: "Не ўдалося ўставіць дадзеныя старонкі з буфера абмену.",
layoutCopied: "Дадзеныя старонкі скапіраваны ў буфер абмену.",
makeVisible: "Зрабіць бачным",
bringLayerUp: "Падняць слой",
sendLayerDown: "Апусціць слой",
  showHandlesOnHoverLabel: "Паказваць ручкі пры навядзенні курсора",
  hideDetachButtonLabel: "Схаваць кнопку «адмацаваць»",
  modalAnimationLabel: "Анімацыя мадальных вокнаў",
  cloneRestoreDelayLabel: "Затрымка з’яўлення клонаў",
  noteRestoreDelayLabel: "Затрымка з’яўлення блокаў нататак",
  hideDelayLabel: "Затрымка скрыцця панэлі",
  changeTextColor: "Змяніць колер тэксту",
  cloneNearFile: "Кланіраваць побач з файлам",
  addStroke: "Дадаць абводку",
  applyToHeader: "Прымяніць для шапкі",
  addLink: "Дадаць спасылку",
  deleteSelected: "Выдаліць выбраныя ({n})",
  urlMediaClickToSave: "Клік для захавання ў vault",
  urlMediaDownloadAndReplace: "Спампаваць і замяніць",
  urlMediaDownloading: "Спампоўванне выявы...",
  urlMediaDownloadError: "Памылка спампоўвання: {status}",
  urlMediaFileSavedLinkFailed: "Файл захаваны, але не атрымалася абнавіць спасылку",
  urlMediaSuccess: "Выява захавана і спасылка абноўлена",
  urlMediaFileSavedPatternNotFound: "Файл захаваны, але спасылка не знойдзена ў тэксце",
  urlMediaError: "Памылка: {error}",
  urlMediaUnknownError: "невядомая памылка",
},
uk: {
cloneSettingsTitle: "Налаштування клонів",
removeBg: "Видалити тло",
animation: "Анімація",
animationPopup: "Спливаюча",
animationFade: "Поступова",
backgroundOpacity: "Прозорість фону",
controlsOpacity: "Прозорість панелі",
showAudioHandles: "Показувати ручки у аудіо",
presets: "Розміри",
fit: "Підігнати під контейнер",
natural: "Природний розмір",
add: "Додати…",
addPresetTitle: "Додати пресет ширини ‹px›",
placeholder: "наприклад: 820",
ok: "OK",
cancel: "Скасувати",
invalid: "Невірне значення",
maxReached: "Досягнуто максимум пресетів",
added: "Додано пресет {n}",
removed: "Вилучено пресет {n}",
openLocation: "Відкрити розташування файлу",
fileNotFound: "Файл не знайдено у сховищі (vault)",
shellDenied: "Немає доступу до shell",
localOnly: "Доступно лише для локальних сховищ",
restorePos: "Повернути початкове положення",
setSize: "Задати розмір…",
width: "Ширина",
height: "Висота",
keepAR: "Зберігати пропорції",
sbReady: "ML • готово",
sbTitle: "Media Layout: клік — пересканувати",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — плагін активний",
posPresets: "Зберегти положення клонів",
resetAll: "Скинути все",
saveLayout: "Зберегти пресет",
layoutMax: "Досягнуто максимум пресетів",
saved: "Збережено",
layoutN: "Пресет {n}",
renameTitle: "Введіть назву",
addNote: "Додати табличку",
copyLayout: "Копіювати дані сторінки",
pasteLayout: "Вставити дані сторінки",
deleteNote: "Видалити табличку",
detach: "Відчепити",
bgColor: "Змінити колір фону",
duplicate: "Дублювати",
reset: "Скинути",
deleteClone: "Видалити",
lock: "Закріпити",
unlock: "Розблокувати",
localOnlyCheckboxLabel: "Лише для цього файлу",
makeInvisible: "Зробити невидимим",
invalidLayoutData: "Некоректні дані сторінки в буфері обміну.",
layoutPasted: "Дані сторінки та пресети вставлено.",
pasteLayoutFailed: "Не вдалося вставити дані сторінки з буфера обміну.",
layoutCopied: "Дані сторінки скопійовано в буфер обміну.",
makeVisible: "Зробити видимим",
bringLayerUp: "Підняти шар",
sendLayerDown: "Опустити шар",
  showHandlesOnHoverLabel: "Показувати ручки під час наведення",
  hideDetachButtonLabel: "Приховати кнопку «відкріпити»",
  modalAnimationLabel: "Анімація модальних вікон",
  cloneRestoreDelayLabel: "Затримка появи клонів",
  noteRestoreDelayLabel: "Затримка появи блоків нотаток",
  hideDelayLabel: "Затримка приховування панелі",
  changeTextColor: "Змінити колір тексту",
  cloneNearFile: "Клонувати поруч із файлом",
  addStroke: "Додати обведення",
  applyToHeader: "Застосувати до шапки",
  addLink: "Додати посилання",
  deleteSelected: "Видалити вибрані ({n})",
  urlMediaClickToSave: "Клік для збереження в vault",
  urlMediaDownloadAndReplace: "Завантажити і замінити",
  urlMediaDownloading: "Завантаження зображення...",
  urlMediaDownloadError: "Помилка завантаження: {status}",
  urlMediaFileSavedLinkFailed: "Файл збережено, але не вдалося оновити посилання",
  urlMediaSuccess: "Зображення збережено і посилання оновлено",
  urlMediaFileSavedPatternNotFound: "Файл збережено, але посилання не знайдено в тексті",
  urlMediaError: "Помилка: {error}",
  urlMediaUnknownError: "невідома помилка",
},
uz: {
cloneSettingsTitle: "Klon sozlamalari",
removeBg: "Fonni olib tashlash",
animation: "Animatsiya",
animationPopup: "Popup",
animationFade: "So‘nish",
backgroundOpacity: "Fon shaffofligi",
controlsOpacity: "Panel shaffofligi",
showAudioHandles: "Audio qo‘llarini ko‘rsatish",
presets: "O‘lchamlar",
fit: "Konteynerga moslashtir",
natural: "Tabiiy o‘lcham",
add: "Qo‘shish…",
addPresetTitle: "Kenglik preseti qo‘shish ‹px›",
placeholder: "masalan: 820",
ok: "OK",
cancel: "Bekor qilish",
invalid: "Noto‘g‘ri qiymat",
maxReached: "Presetlar sonining chegarasi",
added: "Preset {n} qo‘shildi",
removed: "Preset {n} o‘chirildi",
openLocation: "Fayl joyini ochish",
fileNotFound: "Fayl vault ichida topilmadi",
shellDenied: "Shell’ga ruxsat yo‘q",
localOnly: "Faqat lokal vaultlar uchun",
restorePos: "Boshlang‘ich joyni tiklash",
setSize: "O‘lchamni o‘rnatish…",
width: "Kenglik",
height: "Balandlik",
keepAR: "Nisbatni saqlash",
sbReady: "ML • tayyor",
sbTitle: "Media Layout: qayta skan qilish uchun bosing",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — plagin faol",
posPresets: "Klon joylashuvlarini saqlash",
resetAll: "Hammasini tiklash",
saveLayout: "Presetni saqlash",
layoutMax: "Presetlar sonining chegarasi",
saved: "Saqlandi",
layoutN: "Preset {n}",
renameTitle: "Nom kiriting",
addNote: "Yorliq qo‘shish",
copyLayout: "Sahifa ma’lumotlarini nusxalash",
pasteLayout: "Sahifa ma’lumotlarini joylash",
deleteNote: "Yorliqni o‘chirish",
detach: "Ajratish",
bgColor: "Fon rangini o‘zgartirish",
duplicate: "Nusxa olish",
reset: "Qayta o‘rnatish",
deleteClone: "Klonni o‘chirish",
lock: "Qulflash",
unlock: "Qulfni ochish",
localOnlyCheckboxLabel: "Faqat ushbu fayl uchun",
makeInvisible: "Ko‘rinmas qilish",
invalidLayoutData: "Buferdagi sahifa ma’lumotlari noto‘g‘ri.",
layoutPasted: "Sahifa ma’lumotlari va presetlar joylandi.",
pasteLayoutFailed: "Sahifa ma’lumotlarini buferdan joylab bo‘lmadi.",
layoutCopied: "Sahifa ma’lumotlari buferga nusxalandi.",
makeVisible: "Ko‘rinadigan qilish",
bringLayerUp: "Qatlamni yuqoriga",
sendLayerDown: "Qatlamni pastga",
  showHandlesOnHoverLabel: "Kursorni olib o‘tganda tutqichlarni ko‘rsatish",
  hideDetachButtonLabel: "“Biriktirishni yechish” tugmasini yashirish",
  modalAnimationLabel: "Modal oynalar animatsiyasi",
  cloneRestoreDelayLabel: "Klonlarning paydo bo‘lish kechikishi",
  noteRestoreDelayLabel: "Eslatma bloklarining paydo bo‘lish kechikishi",
  hideDelayLabel: "Panelni yashirish kechikishi",
  changeTextColor: "Matn rangini o'zgartirish",
  cloneNearFile: "Fayl yoniga klon yaratish",
  addStroke: "Chiziq qo'shish",
  applyToHeader: "Sarlavhaga qo'llash",
  addLink: "Havola qoʻshish",
  deleteSelected: "Tanlanganlarni oʻchirish ({n})",
  urlMediaClickToSave: "Vaultga saqlash uchun bosing",
  urlMediaDownloadAndReplace: "Yuklab olish va almashtirish",
  urlMediaDownloading: "Rasm yuklanmoqda...",
  urlMediaDownloadError: "Yuklash xatosi: {status}",
  urlMediaFileSavedLinkFailed: "Fayl saqlandi, lekin havolani yangilab bo'lmadi",
  urlMediaSuccess: "Rasm saqlandi va havola yangilandi",
  urlMediaFileSavedPatternNotFound: "Fayl saqlandi, lekin matnda havola topilmadi",
  urlMediaError: "Xato: {error}",
  urlMediaUnknownError: "noma'lum xato",
},
vi: {
cloneSettingsTitle: "Tùy chỉnh bản sao",
removeBg: "Xóa nền",
animation: "Hiệu ứng",
animationPopup: "Popup",
animationFade: "Mờ dần",
backgroundOpacity: "Độ mờ nền",
controlsOpacity: "Độ mờ bảng điều khiển",
showAudioHandles: "Hiện tay nắm audio",
presets: "Kích thước",
fit: "Vừa với khung",
natural: "Kích thước gốc",
add: "Thêm…",
addPresetTitle: "Thêm preset chiều rộng ‹px›",
placeholder: "vd: 820",
ok: "OK",
cancel: "Huỷ",
invalid: "Giá trị không hợp lệ",
maxReached: "Đã đạt số lượng preset tối đa",
added: "Đã thêm preset {n}",
removed: "Đã xoá preset {n}",
openLocation: "Mở vị trí tệp",
fileNotFound: "Không tìm thấy tệp trong vault",
shellDenied: "Không có quyền shell",
localOnly: "Chỉ dùng cho vault cục bộ",
restorePos: "Khôi phục vị trí gốc",
setSize: "Đặt kích thước…",
width: "Rộng",
height: "Cao",
keepAR: "Giữ tỉ lệ",
sbReady: "ML • sẵn sàng",
sbTitle: "Media Layout: nhấp để quét lại",
cmdPing: "Media Layout: ping",
pingOk: "ML: OK — plugin hoạt động",
posPresets: "Lưu vị trí của các bản sao",
resetAll: "Đặt lại tất cả",
saveLayout: "Lưu preset",
layoutMax: "Đã đạt số lượng preset tối đa",
saved: "Đã lưu",
layoutN: "Preset {n}",
renameTitle: "Nhập tên",
addNote: "Thêm hộp ghi chú",
copyLayout: "Sao chép dữ liệu trang",
pasteLayout: "Dán dữ liệu trang",
deleteNote: "Xoá hộp ghi chú",
detach: "Tách ra",
bgColor: "Đổi màu nền",
duplicate: "Nhân bản",
reset: "Đặt lại",
deleteClone: "Xoá",
lock: "Khoá",
unlock: "Mở khoá",
localOnlyCheckboxLabel: "Chỉ cho tệp này",
makeInvisible: "Ẩn đi",
invalidLayoutData: "Dữ liệu trang trong clipboard không hợp lệ.",
layoutPasted: "Đã dán dữ liệu và preset của trang.",
pasteLayoutFailed: "Không thể dán dữ liệu trang từ clipboard.",
layoutCopied: "Đã sao chép dữ liệu trang vào clipboard.",
makeVisible: "Hiện lên",
bringLayerUp: "Đưa lớp lên",
sendLayerDown: "Đưa lớp xuống",
  showHandlesOnHoverLabel: "Hiện tay cầm khi rê chuột",
  hideDetachButtonLabel: "Ẩn nút “Gỡ ghim”",
  modalAnimationLabel: "Hiệu ứng cho cửa sổ modal",
  cloneRestoreDelayLabel: "Độ trễ xuất hiện của bản sao",
  noteRestoreDelayLabel: "Độ trễ xuất hiện của hộp ghi chú",
  hideDelayLabel: "Độ trễ ẩn bảng điều khiển",
  changeTextColor: "Đổi màu chữ",
  cloneNearFile: "Nhân bản bên cạnh tệp",
  addStroke: "Thêm viền",
  applyToHeader: "Áp dụng cho tiêu đề",
  addLink: "Thêm liên kết",
  deleteSelected: "Xóa mục đã chọn ({n})",
  urlMediaClickToSave: "Nhấp để lưu vào vault",
  urlMediaDownloadAndReplace: "Tải xuống và thay thế",
  urlMediaDownloading: "Đang tải hình ảnh...",
  urlMediaDownloadError: "Lỗi tải xuống: {status}",
  urlMediaFileSavedLinkFailed: "Tệp đã lưu, nhưng không thể cập nhật liên kết",
  urlMediaSuccess: "Hình ảnh đã lưu và liên kết đã cập nhật",
  urlMediaFileSavedPatternNotFound: "Tệp đã lưu, nhưng không tìm thấy liên kết trong văn bản",
  urlMediaError: "Lỗi: {error}",
  urlMediaUnknownError: "lỗi không xác định",
},
"zh-CN": {
cloneSettingsTitle: "克隆自定义",
removeBg: "移除背景",
animation: "动画",
animationPopup: "弹出",
animationFade: "淡入",
backgroundOpacity: "背景不透明度",
controlsOpacity: "面板不透明度",
showAudioHandles: "显示音频手柄",
presets: "尺寸",
fit: "适配容器",
natural: "原始尺寸",
add: "添加…",
addPresetTitle: "添加宽度预设 ‹px›",
placeholder: "例如：820",
ok: "确定",
cancel: "取消",
invalid: "无效的值",
maxReached: "已达到预设的最大数量",
added: "已添加预设 {n}",
removed: "已删除预设 {n}",
openLocation: "打开文件位置",
fileNotFound: "在 Vault 中未找到文件",
shellDenied: "无权访问 shell",
localOnly: "仅适用于本地 Vault",
restorePos: "恢复初始位置",
setSize: "设置尺寸…",
width: "宽度",
height: "高度",
keepAR: "保持纵横比",
sbReady: "ML • 就绪",
sbTitle: "Media Layout：点击重新扫描",
cmdPing: "Media Layout：ping",
pingOk: "ML：OK — 插件已激活",
posPresets: "保存克隆的位置",
resetAll: "全部重置",
saveLayout: "保存预设",
layoutMax: "已达到预设的最大数量",
saved: "已保存",
layoutN: "预设 {n}",
renameTitle: "输入名称",
addNote: "添加标注框",
copyLayout: "复制页面数据",
pasteLayout: "粘贴页面数据",
deleteNote: "删除标注框",
detach: "分离",
bgColor: "更改背景颜色",
duplicate: "复制",
reset: "重置",
deleteClone: "移走",
lock: "锁定",
unlock: "解锁",
localOnlyCheckboxLabel: "仅对此文件",
makeInvisible: "设为不可见",
invalidLayoutData: "剪贴板中的页面数据无效。",
layoutPasted: "已粘贴页面数据与预设。",
pasteLayoutFailed: "无法从剪贴板粘贴页面数据。",
layoutCopied: "页面数据已复制到剪贴板。",
makeVisible: "设为可见",
bringLayerUp: "上移图层",
sendLayerDown: "下移图层",
  showHandlesOnHoverLabel: "悬停时显示控制手柄",
  hideDetachButtonLabel: "隐藏“取消固定”按钮",
  modalAnimationLabel: "模态窗口动画",
  cloneRestoreDelayLabel: "克隆显示延迟",
  noteRestoreDelayLabel: "便笺框显示延迟",
  hideDelayLabel: "面板隐藏延迟",
  changeTextColor: "更改文本颜色",
  cloneNearFile: "在文件旁边克隆",
  addStroke: "添加描边",
  applyToHeader: "应用于标题",
  addLink: "添加链接",
  deleteSelected: "删除所选 ({n})",
  urlMediaClickToSave: "点击保存到 vault",
  urlMediaDownloadAndReplace: "下载并替换",
  urlMediaDownloading: "正在下载图片...",
  urlMediaDownloadError: "下载错误: {status}",
  urlMediaFileSavedLinkFailed: "文件已保存，但无法更新链接",
  urlMediaSuccess: "图片已保存并更新链接",
  urlMediaFileSavedPatternNotFound: "文件已保存，但在文本中找不到链接",
  urlMediaError: "错误: {error}",
  urlMediaUnknownError: "未知错误",
},
"zh-TW": {
cloneSettingsTitle: "複製項自訂",
removeBg: "移除背景",
animation: "動畫",
animationPopup: "彈出",
animationFade: "淡入",
backgroundOpacity: "背景不透明度",
controlsOpacity: "面板不透明度",
showAudioHandles: "顯示音訊控制點",
presets: "尺寸",
fit: "適配容器",
natural: "原始尺寸",
add: "新增…",
addPresetTitle: "新增寬度預設 ‹px›",
placeholder: "例如：820",
ok: "確定",
cancel: "取消",
invalid: "無效的值",
maxReached: "已達到預設的最大數量",
added: "已新增預設 {n}",
removed: "已刪除預設 {n}",
openLocation: "開啟檔案位置",
fileNotFound: "在 Vault 中找不到檔案",
shellDenied: "無法存取 shell",
localOnly: "僅適用於本機 Vault",
restorePos: "還原初始位置",
setSize: "設定尺寸…",
width: "寬度",
height: "高度",
keepAR: "保持長寬比",
sbReady: "ML • 就緒",
sbTitle: "Media Layout：點擊重新掃描",
cmdPing: "Media Layout：ping",
pingOk: "ML：OK — 外掛已啟用",
posPresets: "保存克隆的位置",
resetAll: "全部重設",
saveLayout: "儲存預設",
layoutMax: "已達到預設的最大數量",
saved: "已儲存",
layoutN: "預設 {n}",
renameTitle: "輸入名稱",
addNote: "新增標註框",
copyLayout: "複製頁面資料",
pasteLayout: "貼上頁面資料",
deleteNote: "刪除標註框",
detach: "分離",
bgColor: "變更背景顏色",
duplicate: "重製",
reset: "重設",
deleteClone: "移走",
lock: "鎖定",
unlock: "解除鎖定",
localOnlyCheckboxLabel: "僅此檔案",
makeInvisible: "設為不可見",
invalidLayoutData: "剪貼簿中的頁面資料無效。",
layoutPasted: "已貼上頁面資料與預設。",
pasteLayoutFailed: "無法從剪貼簿貼上頁面資料。",
layoutCopied: "頁面資料已複製到剪貼簿。",
makeVisible: "設為可見",
bringLayerUp: "上移圖層",
sendLayerDown: "下移圖層",
  showHandlesOnHoverLabel: "滑鼠懸停時顯示控制把手",
  hideDetachButtonLabel: "隱藏「取消釘選」按鈕",
  modalAnimationLabel: "模態視窗動畫",
  cloneRestoreDelayLabel: "複本顯示延遲",
  noteRestoreDelayLabel: "備註方塊顯示延遲",
  hideDelayLabel: "面板隱藏延遲",
  changeTextColor: "變更文字顏色",
  cloneNearFile: "在檔案旁邊克隆",
  addStroke: "新增外框",
  applyToHeader: "套用到標題",
  addLink: "新增連結",
  deleteSelected: "刪除所選 ({n})",
  urlMediaClickToSave: "點擊儲存到 vault",
  urlMediaDownloadAndReplace: "下載並替換",
  urlMediaDownloading: "正在下載圖片...",
  urlMediaDownloadError: "下載錯誤: {status}",
  urlMediaFileSavedLinkFailed: "檔案已儲存，但無法更新連結",
  urlMediaSuccess: "圖片已儲存並更新連結",
  urlMediaFileSavedPatternNotFound: "檔案已儲存，但在文字中找不到連結",
  urlMediaError: "錯誤: {error}",
  urlMediaUnknownError: "未知錯誤",
},
};
function t(app: App, key: keyof typeof I18N.en, vars?: Record<string, string | number>): string {
  const locale = (app as any).getLanguage?.() ?? "en";
  const loc = String(locale).toLowerCase();
  const dict = I18N[loc] ?? I18N[loc.split("-")[0]] ?? I18N.en;
  let s = dict[key] ?? I18N.en[key];
  if (vars) for (const k in vars) s = s.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
  return s;
}

function findContentSizer(root: HTMLElement): HTMLElement | null {
  if (!root) return null;

  let readingSizer = root.querySelector<HTMLElement>(':scope > .markdown-preview-sizer');
  if (readingSizer) return readingSizer;

  readingSizer = root.querySelector<HTMLElement>('.markdown-preview-view > .markdown-preview-sizer');
  if (readingSizer) return readingSizer;

  readingSizer = root.querySelector<HTMLElement>('.markdown-preview-sizer');
  if (readingSizer) return readingSizer;

  const editorSizer = root.querySelector<HTMLElement>('.cm-sizer');
  if (editorSizer) return editorSizer;

  if (root.classList.contains('markdown-preview-sizer') || root.classList.contains('cm-sizer')) {
    return root;
  }

  console.warn('[Media Layout] Could not find content sizer in root:', root);
  return null;
}

type OriginalState = {
  w?: number;
  h?: number;
  x?: number;
  y?: number;
  free?: boolean;
  txt?: string;
  fontSize?: number;
  detached?: boolean;
    bgColor?: string;
    textStrokeColor?: string;
    textStroke?: boolean;
    textColor?: string;
    transparent?: boolean;
  headerColor?: string;
  opacity?: number;
  volume?: number;
  zIndex?: number;
  locked?: boolean;
  rotate?: number;
};

type CloneState = {
  parentKey: string;
  parentAnchor?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  zIndex?: number;
  bgColor?: string;
  opacity?: number;
  locked?: boolean;
  volume?: number;
  order?: number;
  animation?: "popup" | "fade";
  bgOpacity?: number;
  controlsOpacity?: number;
  showAudioHandles?: boolean;
  link?: string;
  dock?: "right" | "left" | "none";
  fileName?: string;
  rotate?: number;
};

type Preset = {
  name: string;
  kind: "size";
  w: number;
  h: number;
  ar?: number;

  extra?: Record<string, any>;
};

type NoteData = {
  originals: Record<string, OriginalState>;
  clones: Record<string, CloneState>;
};

type Persist = {
  notes: Record<string, NoteData>;
  presets: Record<string, Preset>;
  meBgColor?: string;
  cloneAnimation?: "popup" | "fade";
  cloneBgOpacity?: number;
  cloneControlsOpacity?: number;
  cloneHideDelay?: number;
  cloneShowAudioHandles?: boolean;
  enableModalAnimation?: boolean;
  cloneRestoreDelay?: number;
  noteRestoreDelay?: number;
  hideDetachButton?: boolean;
  showHandlesOnHover?: boolean;
  cloneNearFile?: boolean;

};

const MAX_WIDTH_PRESETS  = 15;
const MAX_LAYOUT_PRESETS = 150;
type MediaKind = "video" | "image" | "audio" | "note" | "clone";

type MediaState = OriginalState;
type Store = Record<string, Record<string, MediaState>>;
type Layout = Record<string, MediaState>;
type LayoutDict = Record<string, Layout[]>;
type LayoutNameDict = Record<string, string[]>;

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
const snap = (n: number, grid = 20) => Math.round(n / grid) * grid;

class WidthPresetModal extends Modal {
  private onSubmit: (value: number | null) => void;
  constructor(app: App, onSubmit: (value: number | null) => void) {

    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;

    this.modalEl.addClass("ms-modal-width-355");
    contentEl.addClass("ms-bgcolor-modal-content");
    contentEl.addClass("ms-width-preset-modal-content");
    contentEl.empty();
    contentEl.createEl("h3", { text: t(this.app, "addPresetTitle") });

    let val = "";
    const input = contentEl.createEl("input", {
      type: "number",
      placeholder: t(this.app, "placeholder"),
      attr: { min: "64", max: "8192", step: "1" },
      cls: "ms-input-width-300",
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.closeWithValue();
    });
    input.addEventListener("input", () => (val = input.value));
    input.focus();

    const row = contentEl.createDiv({ cls: "modal-button-container" });
    const ok = row.createEl("button", { text: t(this.app, "ok") });
    const cancel = row.createEl("button", { text: t(this.app, "cancel") });
    ok.addEventListener("click", () => this.closeWithValue());
    cancel.addEventListener("click", () => { this.onSubmit(null); this.close(); });

    this.closeWithValue = () => {
      const n = Number.parseInt(val || input.value, 10);
      if (!Number.isFinite(n) || n < 64 || n > 8192) {
        new Notice(t(this.app, "invalid"));
        return;
      }
      this.onSubmit(n);
      this.close();
    };
  }
  onClose() { this.contentEl.empty(); }
  private closeWithValue!: () => void;
}
class RenamePresetModal extends Modal {
  private onSubmit: (value: string | null) => void;
  private init: string;
  constructor(app: App, init: string, onSubmit: (value: string | null) => void) {

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

    const row  = contentEl.createDiv({ cls: "ms-rename-actions" });
    const ok = row.createEl("button", { text: t(this.app, "ok") });
    const cancel = row.createEl("button", { text: t(this.app, "cancel") });

    const submit = () => { this.onSubmit(inp.value.trim() || null); this.close(); };

    ok.onclick = submit;
    cancel.onclick = () => { this.onSubmit(null); this.close(); };
    inp.onkeydown = (e) => {
      if (e.key === "Enter") submit();
      if (e.key === "Escape") { this.onSubmit(null); this.close(); }
    };

    setTimeout(() => { inp.focus(); inp.select(); }, 0);
  }
  onClose() { this.contentEl.empty(); }
}

class LinkModal extends Modal {
  private onSubmit: (value: string | null) => void;
  private init: string;
  constructor(app: App, init: string, onSubmit: (value: string | null) => void) {
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

    const row  = contentEl.createDiv({ cls: "ms-rename-actions" });
    const ok = row.createEl("button", { text: t(this.app, "ok") });
    const cancel = row.createEl("button", { text: t(this.app, "cancel") });

    const submit = () => { this.onSubmit(inp.value.trim()); this.close(); };

    ok.onclick = submit;
    cancel.onclick = () => { this.onSubmit(null); this.close(); };
    inp.onkeydown = (e) => {
      if (e.key === "Enter") submit();
      if (e.key === "Escape") { this.onSubmit(null); this.close(); }
    };

    setTimeout(() => { inp.focus(); inp.select(); }, 0);
  }
  onClose() { this.contentEl.empty(); }
}

class ImageSizeModal extends Modal {
  private onSubmit: (w: number | null, h: number | null, keepAR: boolean) => void;
  private initW: number;
  private initH: number;
  constructor(app: App, w: number, h: number, onSubmit: (w: number | null, h: number | null, keepAR: boolean) => void) {

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
    const syncFrom = (src: "w" | "h") => {
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
        new Notice(t(this.app, "invalid"));
        return;
      }
      this.onSubmit(w, h, keepCb.checked);
      this.close();
    });
    cancel.addEventListener("click", () => { this.onSubmit(null, null, true); this.close(); });
  }
  onClose() { this.contentEl.empty(); }
}

class BgColorModal extends Modal {
  private value: string;
  private readonly onOk: (result: { hex: string; isLocal?: boolean; removeBg?: boolean; applyToHeader?: boolean; addStroke?: boolean }) => void;
  private readonly t: (key: string) => string;
  private readonly isClone: boolean;
  private readonly isNoteBox: boolean;
  private readonly isTextColor: boolean;
  private readonly initialStrokeState: boolean;

  constructor(app: App, initial: string, onOk: (result: any) => void, t: (k: string) => string, options: { isClone?: boolean; isNoteBox?: boolean; initialStrokeState?: boolean }) {
    super(app);
    this.value = initial || "#242424";
    this.onOk = onOk;
    this.t = t;
    this.isClone = !!options.isClone;
    this.isNoteBox = !!options.isNoteBox;
    this.isTextColor = !!(options as any).isTextColor;
    this.initialStrokeState = !!options.initialStrokeState;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("ms-bgcolor-modal-content");
    contentEl.empty();

    contentEl.createEl("h3", { text: this.isTextColor ? this.t("changeTextColor") : this.t("bgColor") });

    const wrap = contentEl.createDiv({ cls: "ms-bgcolor-wrap" });

    const colorInp = wrap.createEl("input", { type: "color" }) as HTMLInputElement;
    colorInp.value = this.coerceHex(this.value);

    const textInp = wrap.createEl("input", { type: "text" }) as HTMLInputElement;
    textInp.placeholder = "#242424";
    textInp.value = this.coerceHex(this.value);

    colorInp.addEventListener("input", () => { textInp.value = colorInp.value; });
    textInp.addEventListener("input", () => {
      const v = this.coerceHex(textInp.value);
      if (v) colorInp.value = v;
    });

    let localOnlyCb: HTMLInputElement | null = null;
    let applyToHeaderCb: HTMLInputElement | null = null;
    let removeBgCb: HTMLInputElement | null = null;
    let addStrokeCb: HTMLInputElement | null = null;
    const optionsContainer = contentEl.createDiv({ attr: { style: "display: flex; flex-direction: column; align-items: flex-start;" } });

    const createCheckbox = (text: string): [label: HTMLLabelElement, input: HTMLInputElement] => {
      const row = optionsContainer.createEl("label", { cls: "ms-row ms-flex-align-center ms-margin-bottom-8" });
      row.style.cursor = "pointer";
      const cb = row.createEl("input", { type: "checkbox", cls: "ms-margin-right-6" });
      const span = row.createEl("span", { text, cls: "ms-position-relative-bottom-0" });
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
      optionsContainer.addClass("ms-margin-bottom-12");
    }

    const actions = contentEl.createDiv({ cls: "modal-button-container" });
    const okBtn = actions.createEl("button", { text: this.t("ok") });
    const cancelBtn = actions.createEl("button", { text: this.t("cancel") });
    const resetBtn = actions.createEl("button", { text: this.t("reset") });

    actions.insertBefore(resetBtn, cancelBtn);

    resetBtn.addEventListener("click", () => {
      const resetColor = this.isTextColor ? "#FFFFFF" : (this.isNoteBox ? "#262626" : "#242424");
      (colorInp as HTMLInputElement).value = resetColor;
      (textInp  as HTMLInputElement).value = resetColor;
    });
    okBtn.addEventListener("click", () => {
      const v = this.coerceHex(textInp.value) || "#242424";
      this.onOk({
        hex: v,
        isLocal: localOnlyCb?.checked ?? false,
        removeBg: removeBgCb?.checked ?? false,
        applyToHeader: applyToHeaderCb?.checked ?? false,
        addStroke: addStrokeCb?.checked ?? false,
      });
      this.close();
    });
    cancelBtn.addEventListener("click", () => this.close());
  }

  private coerceHex(v: string): string {
    v = (v || "").trim();
    if (!v) return "";
    if (v[0] !== "#") v = "#" + v;
    if (/^#([0-9a-f]{6})$/i.test(v)) return v.toUpperCase();
    return "";
  }
}

class CloneSettingsModal extends Modal {
  private onSubmit: (settings: { animation: "popup" | "fade"; bgOpacity: number; controlsOpacity: number; hideDelay: number; showAudioHandles: boolean } | null) => void;
  private initial: { animation: "popup" | "fade"; bgOpacity: number; controlsOpacity: number; hideDelay: number; showAudioHandles: boolean };

  constructor(app: App, initial: { animation: "popup" | "fade"; bgOpacity: number; controlsOpacity: number; hideDelay: number; showAudioHandles: boolean }, onSubmit: (settings: any) => void) {
    super(app);
    this.initial = { ...initial };
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("ms-clone-settings-modal");

    contentEl.createEl("h3", { text: t(this.app, "cloneSettingsTitle") });

    new Setting(contentEl)
      .setName(t(this.app, "animation"))
      .addButton(btn => {
        btn.setButtonText(this.initial.animation === 'popup' ? t(this.app, "animationPopup") : t(this.app, "animationFade"))
          .onClick(() => {
            this.initial.animation = this.initial.animation === 'popup' ? 'fade' : 'popup';
            btn.setButtonText(this.initial.animation === 'popup' ? t(this.app, "animationPopup") : t(this.app, "animationFade"));
          });
      });

    new Setting(contentEl)
      .setName(t(this.app, "backgroundOpacity"))
      .addSlider(slider => slider
        .setLimits(0, 100, 1)
        .setValue(this.initial.bgOpacity * 100)
        .setDynamicTooltip()
        .onChange(value => {
          this.initial.bgOpacity = value / 100;
        }));

    new Setting(contentEl)
      .setName(t(this.app, "controlsOpacity"))
      .addSlider(slider => slider
        .setLimits(0, 100, 1)
        .setValue(this.initial.controlsOpacity * 100)
        .setDynamicTooltip()
        .onChange(value => {
          this.initial.controlsOpacity = value / 100;
        }));

    new Setting(contentEl)
      .setName(t(this.app, "hideDelayLabel"))
      .addSlider(slider => slider
        .setLimits(0, 100, 1)
        .setValue(this.initial.hideDelay * 10)
        .setDynamicTooltip()
        .onChange(value => {
          this.initial.hideDelay = value / 10;
        }));

    const buttons = contentEl.createDiv({ cls: "modal-button-container" });
    
    new ButtonComponent(buttons)
      .setButtonText(t(this.app, "ok"))
      .setCta()
      .onClick(() => {
        this.onSubmit(this.initial);
        this.close();
      });

    new ButtonComponent(buttons)
      .setButtonText(t(this.app, "reset"))
      .onClick(() => {
        this.initial = { animation: 'popup', bgOpacity: 1.0, controlsOpacity: 0.35, hideDelay: 2.0, showAudioHandles: true };
        this.close();
        const newModal = new CloneSettingsModal(
          this.app,
          this.initial,
          this.onSubmit
        );
        newModal.open();
      });

    new ButtonComponent(buttons)
      .setButtonText(t(this.app, "cancel"))
      .onClick(() => {
        this.onSubmit(null);
        this.close();
      });
  }

  onClose() {
    this.contentEl.empty();
  }
}
class MediaLayoutSettingsModal extends Modal {
  plugin: MediaSize;
  constructor(app: App, plugin: MediaSize) {
    super(app);
    this.plugin = plugin;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("ms-layout-settings-modal");

    const form = contentEl.createDiv({ cls: "modal-form" });

    let handlesOnHoverValue = this.plugin.showHandlesOnHover;
    let hideDetachValue = this.plugin.hideDetachButton;
    let modalAnimationValue = this.plugin.enableModalAnimation;
    let cloneNearFileValue = this.plugin.cloneNearFile;
    let cloneRestoreDelayValue = this.plugin.cloneRestoreDelay;
    let noteRestoreDelayValue = this.plugin.noteRestoreDelay;

    new Setting(contentEl)
      .setName(t(this.app, "showHandlesOnHoverLabel"))
      .addToggle(toggle => toggle
        .setValue(handlesOnHoverValue)
        .onChange(value => {
          handlesOnHoverValue = value;
        }));

    new Setting(contentEl)
      .setName(t(this.app, "hideDetachButtonLabel"))
      .addToggle(toggle => toggle
        .setValue(hideDetachValue)
        .onChange(value => {
          hideDetachValue = value;
        }));

    new Setting(contentEl)
      .setName(t(this.app, "modalAnimationLabel"))
      .addToggle(toggle => toggle
        .setValue(modalAnimationValue)
        .onChange(value => {
          modalAnimationValue = value;
        }));

    new Setting(contentEl)
      .setName(t(this.app, "cloneNearFile"))
      .addToggle(toggle => toggle
        .setValue(cloneNearFileValue)
        .onChange(value => {
          cloneNearFileValue = value;
        }));

    new Setting(contentEl)
      .setName(t(this.app, "cloneRestoreDelayLabel"))
      .addSlider(slider => slider
        .setLimits(0, 1000, 10)
        .setValue(cloneRestoreDelayValue)
        .setDynamicTooltip()
        .onChange(value => {
          cloneRestoreDelayValue = value;
        }));

    new Setting(contentEl)
      .setName(t(this.app, "noteRestoreDelayLabel"))
      .addSlider(slider => slider
        .setLimits(0, 1000, 10)
        .setValue(noteRestoreDelayValue)
        .setDynamicTooltip()
        .onChange(value => {
          noteRestoreDelayValue = value;
        }));

    const buttons = contentEl.createDiv({ cls: "modal-button-container" });
    
    new ButtonComponent(buttons)
      .setButtonText(t(this.app, "ok"))
      .setCta()
      .onClick(async () => {
        this.plugin.showHandlesOnHover = handlesOnHoverValue;

        if (!handlesOnHoverValue) {
          this.plugin.cloneShowAudioHandles = false;
        }
        this.plugin.hideDetachButton = hideDetachValue;
        this.plugin.enableModalAnimation = modalAnimationValue;
        this.plugin.cloneRestoreDelay = cloneRestoreDelayValue;
        this.plugin.cloneNearFile = cloneNearFileValue;
        this.plugin.noteRestoreDelay = noteRestoreDelayValue;
        await this.plugin.persistAll();
        this.plugin.applyCssVariables();
        this.close();
      });

    new ButtonComponent(buttons)
      .setButtonText(t(this.app, "reset"))
      .onClick(async () => {
        this.plugin.showHandlesOnHover = true;
        this.plugin.cloneNearFile = true;
        this.plugin.cloneShowAudioHandles = true;
        this.plugin.hideDetachButton = true;
        this.plugin.enableModalAnimation = true;
        this.plugin.cloneRestoreDelay = 50;
        this.plugin.noteRestoreDelay = 50;
        await this.plugin.persistAll();
        this.plugin.applyCssVariables();
        new Notice("✔⟲");
        this.close();
        new MediaLayoutSettingsModal(this.app, this.plugin).open();
      });

    new ButtonComponent(buttons)
      .setButtonText(t(this.app, "cancel"))
      .onClick(() => {
        this.close();
      });
  }

  onClose() {
    this.contentEl.empty();
  }
}

export default class MediaSize extends Plugin {
  private notes: Record<string, NoteData> = {};
  private presets: Record<string, Preset> = {};
  private store: Store = {};
  private userPresets: number[] = [];
  private observers: MutationObserver[] = [];
  private meBgColor: string = "#242424";
  private cloneAnimation: "popup" | "fade" = "popup";
  private cloneBgOpacity: number = 1.0;
  private cloneControlsOpacity: number = 0.35;
  private cloneHideDelay: number = 2.0;
  public noteRestoreDelay: number = 50;
  public cloneRestoreDelay: number = 50;
  public enableModalAnimation: boolean = true;
  public hideDetachButton: boolean = true;
  public showHandlesOnHover: boolean = true;
  public cloneNearFile: boolean = true;
  public cloneShowAudioHandles: boolean = true;

  private currentNotePath: string | null = null;
  private pendingTimers: Set<number> = new Set();

  private presetTimerId: number | null = null;

  private persistInProgress = false;
  private persistQueue: Promise<void> | null = null;

  private persistDebounceTimer: number | null = null;
  private persistDebounceDelay = 150;
  private maxPersistDelay = 3000;
  private lastPersistTime = 0;
  private hasPendingChanges = false;

  private selectedKeys: Set<string> = new Set();
  private isMarqueeSelecting = false;
  private marqueeStart: { x: number, y: number } | null = null;
  private marqueeWithCtrl = false;

  private scrollRatioX = 0;
  private scrollRatioY = 0;
  private hScrollEl: HTMLElement | null = null;
  private vScrollEl: HTMLElement | null = null;
  private wasLockedBeforeFs = false;

  private debugLog: Array<{ timestamp: string; level: string; message: string; data?: any }> = [];
  private maxDebugLines = 2000;
  private enableDebugMode = false;
  private logFilePath = '';
  private autoSaveLogTimer: number | null = null;

  private backupTimer: number | null = null;
  private lastBackupHash: string = '';

  private computeOriginalAnchor(host: HTMLElement): string {

    const media = host.querySelector<HTMLElement>("video, img, audio");

    const embed = host.closest(".cm-embed-block, .media-embed, .internal-embed") as HTMLElement | null;
    const src =
      (media?.getAttribute("src") || (media as any)?.dataset?.src || "") ||
      (embed?.getAttribute?.("src") || (embed as any)?.dataset?.src || "") ||
      "";

    const root = host.closest(".markdown-reading-view, .markdown-preview-view, .cm-editor") as HTMLElement | null;
    let nth = 0;
    if (src && root) {
      const all = Array.from(root.querySelectorAll<HTMLElement>("video, img, audio")).filter((el) => {
        const s = el.getAttribute("src") || (el as any)?.dataset?.src || "";
        return s === src;
      });
      nth = Math.max(0, all.indexOf(media as any));
    }

    const sig =
      (media?.getAttribute("alt") ||
        media?.getAttribute("title") ||
        (media?.textContent || "").slice(0, 64) ||
        "") as string;
    return `${src || "nosrc"}#${nth}:${sig}`;
  }

  private ensureOriginalAnchor(host: HTMLElement): string {
    let a = host.dataset.msAnchor;
    if (!a) {
      a = this.computeOriginalAnchor(host);
      host.dataset.msAnchor = a;
    }
    return a;
  }

  private buildAnchorIndex(root: HTMLElement): Map<string, string> {
    const map = new Map<string, string>();
    root.querySelectorAll<HTMLElement>(".ms-host[data-ms-key]").forEach((h) => {
      const a = this.ensureOriginalAnchor(h);
      const k = h.dataset.msKey!;
      if (a && k) map.set(a, k);
    });
    return map;
  }

  private assetUrl(relPath: string) {

    const full = normalizePath(`${this.app.vault.configDir}/plugins/${this.manifest.id}/${relPath}`);
    return this.app.vault.adapter.getResourcePath(full);
  }

private ensureFloatLayer(root: HTMLElement): HTMLElement {
  const isReading = !!root.closest('.markdown-reading-view, .markdown-preview-view');

  this.debug('ensureFloatLayer called', {
    isReading,
    rootClass: root.className,
    rootTag: root.tagName
  });

  let sizer = findContentSizer(root.closest('.markdown-source-view, .markdown-reading-view') as HTMLElement);

  this.debug('Found sizer', {
    found: !!sizer,
    sizerClass: sizer?.className,
    sizerTag: sizer?.tagName
  });

  if (!sizer) {
    this.warn('No sizer found, using root as fallback', {});
    sizer = root;
  }

  let layer = sizer.querySelector<HTMLElement>(':scope > .ms-float-layer');
  if (!layer) {
    this.debug('Creating new float-layer in sizer', {});
    layer = document.createElement('div');
    layer.className = 'ms-float-layer';
    layer.style.display = 'block';
    layer.style.visibility = 'visible';
    sizer.appendChild(layer);
    this.debug('Float-layer created and appended', {
      parent: sizer.className,
      layerInDOM: document.contains(layer)
    });
  } else {
    this.debug('Float-layer already exists', {});
  }

  const path = this.getActiveNote()?.path ?? "";
  if (path) {
    (layer as any).dataset.msNote = path;

    layer.querySelectorAll<HTMLElement>('.ms-host[data-ms-note]').forEach(el => {
      const n = (el as any).dataset.msNote || "";
      if (n && n !== path) el.remove();
    });
  }

  this.debug('Float-layer ready', {
    childCount: layer.children.length,
    path
  });

  return layer;
}
  private lastCtxEvt: MouseEvent | null = null;
  private controlsProxy = new WeakMap<HTMLElement, { root: HTMLElement; ro: ResizeObserver }>();
  private layoutPresets: LayoutDict = {};
  private layoutNames: LayoutNameDict = {};

  async onload() {
    const persisted: Persist | any = await this.loadData();

    let dataCorrupted = false;

    if (persisted && typeof persisted === "object") {
      if (persisted.notes) {
        this.notes = persisted.notes ?? {};
        this.presets = persisted.presets ?? {};

        const hasNotes = Object.keys(this.notes).length > 0;
        if (!hasNotes && persisted.userPresets && persisted.userPresets.length > 0) {

          console.error('[Media Layout] WARNING: Loaded data has empty notes but has other data - possible corruption!');
          dataCorrupted = true;
        }
      } else if (persisted.items) {

        console.log("Media-Size: Migrating old data structure.");
        this.notes = {};
        for (const notePath in persisted.items) {
          this.notes[notePath] = {
            originals: persisted.items[notePath],
            clones: {},
          };
        }
        this.presets = {};
        this.store = persisted.items;
      } else {
        this.notes = {};
        this.presets = {};
      }

      if (dataCorrupted) {
        console.warn('[Media Layout] Attempting auto-recovery from latest backup...');
        const backups = await this.listBackups();
        if (backups.length > 0) {
          try {
            const latestBackup = backups[0];
            const content = await this.app.vault.adapter.read(latestBackup.path);
            const backupData = JSON.parse(content);

            if (backupData.notes && Object.keys(backupData.notes).length > 0) {
              this.notes = backupData.notes;
              this.presets = backupData.presets || {};
              console.log(`[Media Layout] ✅ Auto-recovered from backup: ${latestBackup.name}`);
              new Notice(`🔄 Data recovered from backup: ${latestBackup.name}`);
            }
          } catch (e) {
            console.error('[Media Layout] Auto-recovery failed:', e);
          }
        }
      }
      this.meBgColor = persisted.meBgColor ?? "#242424";
      this.userPresets = Array.isArray(persisted.userPresets) ? persisted.userPresets.slice(0, MAX_WIDTH_PRESETS) : [];
      this.layoutPresets = persisted.layoutPresets ?? {};
      this.layoutNames = persisted.layoutNames ?? {};
      this.cloneAnimation = persisted.cloneAnimation ?? "popup";
      this.cloneBgOpacity = persisted.cloneBgOpacity ?? 1.0;
      this.cloneControlsOpacity = persisted.cloneControlsOpacity ?? 0.35;
      this.cloneHideDelay = persisted.cloneHideDelay ?? 2.0;
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
    this.applyCssVariables();

    const ctxHandler = (e: Event) => (this.lastCtxEvt = e as MouseEvent);
    document.addEventListener("contextmenu", ctxHandler, true);
    this.register(() => document.removeEventListener("contextmenu", ctxHandler, true));

        this.registerDomEvent(document, 'mousedown', (e) => {
      if (e.ctrlKey || e.metaKey) this.handleMarqueeStart(e);
    }, { capture: true });
    document.addEventListener('mousedown', this.handleDeselectClick, true);
    this.register(() => document.removeEventListener('mousedown', this.handleDeselectClick, true));

    this.registerMarkdownPostProcessor((el, ctx) => {
        const notePath = ctx?.sourcePath || this.getActiveNote()?.path || "";
        this.processRoot(el, notePath);

    });

    this.app.workspace.onLayoutReady(() => {

        this.schedule(() => {
            this.scanActive();
            const notePath = this.getActiveNote()?.path;
            if (notePath) this.restoreClonesFromStore(notePath); this.applyCloneSettingsToAll();

            const view = this.app.workspace.getActiveViewOfType(MarkdownView);
            if (view) this.app.workspace.trigger("markdown-render", view.contentEl);
        }, 500);
    });

let switchDebounceTimer: number | null = null;
let switchInProgress = false;
let lastSwitchPath: string | null = null;

const scheduleSwitch = (file: TFile | null) => {
  if (switchDebounceTimer) clearTimeout(switchDebounceTimer);

  switchDebounceTimer = window.setTimeout(() => handleFileSwitch(file), 0);
};

const handleFileSwitch = async (file: TFile | null) => {
  const newPath = file?.path ?? this.getActiveNote()?.path ?? null;

  if (switchInProgress) {
    console.warn('[Media Layout] Switch already in progress, ignoring duplicate call');
    return;
  }

  if (newPath === lastSwitchPath && Date.now() - (this as any).lastSwitchTime < 100) {
    console.warn('[Media Layout] Duplicate switch to same file, ignoring');
    return;
  }

  switchInProgress = true;
  (this as any).lastSwitchTime = Date.now();
  lastSwitchPath = newPath;

  try {

    this.cancelScheduled?.();

    await this.flushPersist();

    await this.hardCleanupForSwitch(this.currentNotePath ?? this.getActiveNote()?.path ?? undefined);

    this.currentNotePath = newPath;

    this.scanActive();
  } finally {
    switchInProgress = false;
  }
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
    leaves.forEach(leaf => {
      const file = (leaf.view as any)?.file;
      if (file?.path) {

        this.restoreClonesFromStore(file.path);
        this.realignClonesIfNeeded(file.path);
      }
    });
  }, 150);
}));

this.registerDomEvent(window, "resize", () => {
  this.schedule(() => {
    const notePath = this.getActiveNote()?.path;
    if (!notePath) return;

    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) return;

    const containerEl = view.containerEl;
    const read = containerEl.querySelector(".markdown-reading-view") as HTMLElement | null;
    const isReadingMode = read && getComputedStyle(read).display !== 'none';

    if (isReadingMode) {

      this.restoreClonesFromStore(notePath);
      this.ensureNotesFromStore(notePath);
    }
  }, 50);
});

let scrollTimeout: number | null = null;
this.registerDomEvent(document, "scroll", (e) => {
  const target = e.target as HTMLElement;

  if (!target || !target.closest || !target.closest('.markdown-reading-view')) return;

  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = window.setTimeout(() => {
    const notePath = this.getActiveNote()?.path;
    if (!notePath) return;

    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) return;

    const containerEl = view.containerEl;
    const read = containerEl.querySelector(".markdown-reading-view") as HTMLElement | null;
    const isReadingMode = read && getComputedStyle(read).display !== 'none';

    if (isReadingMode) {

      const root = this.getAttachRoot();
      if (!root) return;

      const layer = root.querySelector('.ms-float-layer');
      const noteData = this.notes[notePath];

      const hasStoredClones = noteData?.clones && Object.keys(noteData.clones).length > 0;
      const hasStoredNotes = noteData?.originals && Object.values(noteData.originals).some(o => o.txt !== undefined);
      const hasDomClones = layer?.querySelector('[data-ms-parent-key]');
      const hasDomNotes = layer?.querySelector('.ms-note-host');

      if (hasStoredClones && !hasDomClones) {
        this.restoreClonesFromStore(notePath);
      }
      if (hasStoredNotes && !hasDomNotes) {
        this.ensureNotesFromStore(notePath);
      }
    }

    scrollTimeout = null;
  }, 100);
}, true);

    this.registerEvent(
      (this.app.workspace as any).on("editor-menu", (menu: Menu, _editor: any, view: MarkdownView) => {
        const ev = this.lastCtxEvt;
        if (!ev) return;
        const target = ev.target as HTMLElement | null;
        if (!target) return;

        if (this.isMarqueeSelecting || (ev.ctrlKey && target.closest('.ms-host'))) {
            return;
        }
menu.addItem((i) => {
  i.setTitle(t(this.app, "addNote")).setIcon("layout-template");
  i.onClick(async () => {
    const viewRoot = this.getAttachRoot();
    if (!viewRoot) return;

    const notePath = view?.file?.path ?? this.getActiveNote()?.path ?? "";
    const key = this.makeNoteKey();
    const defaultWidth = 260;
    const defaultHeight = 160;

    const vr = viewRoot.getBoundingClientRect();
    const x = (ev.clientX - vr.left + viewRoot.scrollLeft - defaultWidth * 2) | 0;
    const y = (ev.clientY - vr.top + viewRoot.scrollTop - defaultHeight * 1.5) | 0;

    this.createNoteHost(viewRoot, key, x, y, { w: defaultWidth, h: defaultHeight, txt: "", fontSize: 16, focus: true });
    await this.saveState(notePath, key, { w: defaultWidth, h: defaultHeight, x, y, txt: "", fontSize: 16 });
  });
});

const host =
  target.closest<HTMLElement>(".ms-host") ||
  target.closest<HTMLElement>(".internal-embed, .media-embed, .mx-media-embed, img, video, audio");
if (!host) return;

const isClone = !!host.dataset.msParentKey;
const isNote = host.classList.contains("ms-note-host");

const media =
  isNote
    ? (host.querySelector(".ms-note") as HTMLElement | null)
    : ((host.querySelector("video, img, audio") as any) ||
       (["IMG","VIDEO","AUDIO"].includes(host.tagName) ? (host as any) : null));
if (!media && !isNote) return;

const kind: MediaKind =
  isNote ? "note" :
  (media!.tagName === "IMG"   ? "image" :
   media!.tagName === "AUDIO" ? "audio" : "video");

const notePath = view?.file?.path ?? this.getActiveNote()?.path ?? "";
const key = isNote
  ? (host.dataset.msKey ?? this.makeNoteKey())
  : (host.dataset.msKey ?? this.makeEmbedKey(this.getSrcAndBase(host, media!).src));
host.dataset.msKey = key;

const isUrlMedia = !isNote && !isClone && media && (media as any).src && (media as any).src.startsWith('http');

const isTargetSelected = this.selectedKeys.has(key);
if (isTargetSelected && this.selectedKeys.size > 1) {
    this.buildGroupContextMenu(menu, host, key, kind, notePath);
    return;
}

if (isUrlMedia) {
    menu.addItem((i) =>
      i.setTitle(t(this.app, "urlMediaDownloadAndReplace")).setIcon("download").onClick(async () => {
        const url = (media as any).src;
        if (url && url.startsWith('http')) {
          await this.convertUrlMediaToLocal(url, notePath);
        }
      })
    );

    return;
}

if (isClone) {

    if (kind !== 'note') {
        this.addSizePresetsMenu(menu, notePath, key, host, media, kind);
    }

    this.addPositionPresetsMenu(menu, notePath);

  if (kind === "image") {
    menu.addItem((i) =>
      i.setTitle(t(this.app, "setSize")).setIcon("scaling").onClick(async () => {
        this.ensureParentAnchor(host);
        const cur = this.readAbsRect(host);
        new ImageSizeModal(this.app, cur.w || (media as any).clientWidth || 0, cur.h || (media as any).clientHeight || 0,
          async (w, h, keep) => {
            if (w && h) await this.applyAndSaveSize(notePath, key, host, media, kind, { w, h }, keep ? false : true);
          }).open();
      })
    );
  }

  if (kind === "image") {
    menu.addItem((i) =>
      i.setTitle(t(this.app, "addLink")).setIcon("link").onClick(async () => {
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

  menu.addItem((i) =>
    i.setTitle(t(this.app, "openLocation")).setIcon("folder-open").onClick(async () => {
      const notePath2 = view?.file?.path ?? this.getActiveNote()?.path ?? "";
      const { src } = this.getSrcAndBase(host, media);
      const tf = this.resolveTFile(notePath2, src);
      if (!tf) return new Notice(t(this.app, "fileNotFound"));
      const adapter = this.app.vault.adapter;
      if (!(adapter instanceof FileSystemAdapter)) { new Notice(t(this.app, "localOnly")); return; }
      const full = adapter.getFullPath(tf.path);
      try {
        const shell = (window as any).require?.("electron")?.shell;
        if (shell?.showItemInFolder) shell.showItemInFolder(full);
        else this.revealInOS(full);
      } catch { this.revealInOS(full); }
    })
  );

  if (kind === "video" || kind === "audio") {
    menu.addItem((i) => {
      i.setTitle(t(this.app, "bgColor")).setIcon("palette");
      i.onClick(() => {
        const tr = (k: string) => t(this.app, k);
        const initialColor = (this.notes[notePath]?.clones?.[key])?.bgColor || this.meBgColor;
        new BgColorModal(this.app, initialColor, async ({ hex, isLocal, removeBg }) => {
            if (removeBg) {

                host.querySelector('.ms-media-bg')?.remove();
                host.querySelector('.ms-local-bg')?.remove();
                await this.saveState(notePath, key, { bgColor: 'transparent' });
            } else if (isLocal) {

                const localBg = this.ensureLocalBg(host);
                localBg.style.backgroundColor = hex;
                await this.saveState(notePath, key, { bgColor: hex });
            } else {

                await this.setMediaBgColor(hex, false, host, notePath, key);
                host.querySelector('.ms-local-bg')?.remove();
                await this.saveState(notePath, key, { bgColor: undefined });
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

if (kind !== 'note') {
    this.addSizePresetsMenu(menu, notePath, key, host, media, kind);
}

if (kind !== 'note') {
    this.addPositionPresetsMenu(menu, notePath);
}

        if (kind === "image") {
          menu.addItem((i) =>
            i.setTitle(t(this.app, "setSize")).setIcon("scaling").onClick(async () => {
              this.ensureParentAnchor(host);
const cur = this.readAbsRect(host);

              new ImageSizeModal(this.app, cur.w || (media as any).clientWidth || 0, cur.h || (media as any).clientHeight || 0,
                async (w, h, keep) => {
                  if (w && h) await this.applyAndSaveSize(notePath, key, host, media, kind, { w, h }, keep ? false : true);
                }).open();
            })
          );
        }

menu.addItem((i) =>
  i.setTitle(t(this.app, "openLocation")).setIcon("folder-open").onClick(async () => {
    const notePath2 = view?.file?.path ?? this.getActiveNote()?.path ?? "";
    const { src } = this.getSrcAndBase(host, media);
    const tf = this.resolveTFile(notePath2, src);
    if (!tf) return new Notice(t(this.app, "fileNotFound"));

    const adapter = this.app.vault.adapter;
    if (!(adapter instanceof FileSystemAdapter)) {
      new Notice(t(this.app, "localOnly"));
      return;
    }

    const full = adapter.getFullPath(tf.path);
    try {
      const shell = (window as any).require?.("electron")?.shell;
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

      const el = (item as any).dom as HTMLElement | undefined;
      el?.remove();
    });
  });
}

        if (isDetached) {
          menu.addItem((i) =>
            i.setTitle(t(this.app, "restorePos")).setIcon("home").onClick(async () => {
              await this.applyAndSaveSize(notePath, key, host, media, kind, { x: 0, y: 0, w: undefined, h: undefined, reset: true });
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
       x = (ev.clientX - vr.left - defaultWidth + viewRoot.scrollLeft) | 0;
       y = (ev.clientY - vr.top - defaultHeight + viewRoot.scrollTop) | 0;
      } else {
        x = (ev.clientX - vr.left - defaultWidth) | 0;
        y = (ev.clientY - vr.top - defaultHeight)  | 0;
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
      const tr = (k: string) => t(this.app, k);
      new BgColorModal(this.app, this.meBgColor, ({ hex, isLocal }) => this.setMediaBgColor(hex, isLocal, host, notePath, key), tr, { isClone }).open();
    });
  });
}

  if (!isClone && kind !== "note") {

    const firstChild = host.children[0] as HTMLElement | undefined;
    const isVisible = !firstChild || !firstChild.style.opacity || parseFloat(firstChild.style.opacity) > 0;

    menu.addItem((i) => {
      i.setTitle(isVisible ? t(this.app, "makeInvisible") : t(this.app, "makeVisible"))

       .setIcon(isVisible ? "eye-off" : "eye");

      i.onClick(async () => {
        const newOpacity = isVisible ? '0' : '1';

        Array.from(host.children).forEach(child => {
            if (child instanceof HTMLElement && !child.classList.contains('ms-overlay')) {
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
        await this.saveState(notePath, key, { locked: true } as any);
        (item as any).dom?.remove();
      });
    });
  } else {

    menu.addItem((item) => {
      item.setTitle(t(this.app, "unlock")).setIcon("unlock");
      item.onClick(async () => {
        host.dataset.msLocked = "0";
        await this.saveState(notePath, key, { locked: false } as any);
        (item as any).dom?.remove();
      });
    });
  }
}

{
  const noteHost = target.closest<HTMLElement>(".ms-note-host");
  if (noteHost) {
    const key = noteHost.dataset.msKey!;
    const notePath = view?.file?.path ?? this.getActiveNote()?.path ?? "";

    menu.addSeparator();

    menu.addItem((mi) =>
      mi.setTitle(t(this.app, "deleteNote")).onClick(async () => {
        noteHost.remove();
        if (notePath && key) {
          delete this.notes[notePath]?.originals?.[key];
          await this.persistAll();
        }
      })
    );
  }
}
      })
    );

    this.addCommand({
      id: "ping",
      name: t(this.app, "cmdPing"),
      callback: () => new Notice(t(this.app, "pingOk")),
    });
    this.addCommand({
      id: "open-settings",
      name: "Settings",
      callback: () => {
        new MediaLayoutSettingsModal(this.app, this).open();
      },
    });

    this.addCommand({
      id: "export-logs",
      name: "📋 Export debug logs to note",
      callback: async () => {
        await this.exportLogsToNote();
      },
    });

    this.addCommand({
      id: "save-logs",
      name: "💾 Save debug logs to file",
      callback: async () => {
        const path = await this.saveDebugLog();
        new Notice(`💾 Logs saved to: ${path}`);
      },
    });

    this.addCommand({
      id: "clear-logs",
      name: "🗑️ Clear debug logs",
      callback: () => {
        this.clearDebugLog();
      },
    });

    this.addCommand({
      id: "toggle-debug",
      name: "🔍 Toggle debug mode",
      callback: () => {
        this.enableDebugMode = !this.enableDebugMode;
        new Notice(`🔍 Debug mode: ${this.enableDebugMode ? 'ON' : 'OFF'}`);
        this.info('Debug mode toggled', { enabled: this.enableDebugMode });

        if (this.enableDebugMode) {
          this.autoSaveLogTimer = this.registerInterval(window.setInterval(() => {
            this.saveDebugLog();
          }, 30000));
        } else if (this.autoSaveLogTimer !== null) {
          window.clearInterval(this.autoSaveLogTimer);
          this.autoSaveLogTimer = null;
        }
      },
    });

    this.addCommand({
      id: "create-backup",
      name: "💾 Create backup now",
      callback: async () => {
        await this.createBackup();
        new Notice('✅ Backup created successfully');
      },
    });

    this.addCommand({
      id: "restore-backup",
      name: "♻️ Restore from backup",
      callback: async () => {
        const backups = await this.listBackups();
        if (backups.length === 0) {
          new Notice('⚠️ No backups found');
          return;
        }

        const menu = new Menu();
        backups.forEach(backup => {
          const dateStr = backup.date.toLocaleString();
          menu.addItem((item) => {
            item.setTitle(`${dateStr}`)
              .setIcon('clock')
              .onClick(async () => {

                const confirmed = await new Promise<boolean>((resolve) => {
                  const modal = new Modal(this.app);
                  modal.titleEl.setText('Restore from backup?');
                  modal.contentEl.createEl('p', {
                    text: `This will restore data from: ${dateStr}\nCurrent data will be overwritten.`
                  });

                  const btnContainer = modal.contentEl.createDiv({ cls: 'modal-button-container' });
                  const btnRestore = btnContainer.createEl('button', { text: 'Restore' });
                  const btnCancel = btnContainer.createEl('button', { text: 'Cancel' });

                  btnRestore.addEventListener('click', () => {
                    modal.close();
                    resolve(true);
                  });
                  btnCancel.addEventListener('click', () => {
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

        menu.showAtMouseEvent(window.event as MouseEvent);
      },
    });

    this.addCommand({
      id: "list-backups",
      name: "📋 List all backups",
      callback: async () => {
        const backups = await this.listBackups();
        if (backups.length === 0) {
          new Notice('⚠️ No backups found');
          return;
        }

        let message = `Found ${backups.length} backup(s):\n\n`;
        backups.forEach((backup, index) => {
          message += `${index + 1}. ${backup.date.toLocaleString()}\n`;
        });

        new Notice(message, 10000);
        console.log('[Media Layout] Available backups:', backups);
      },
    });

    const sb = this.addStatusBarItem();
    sb.setText(t(this.app, "sbReady"));
    sb.setAttr("title", t(this.app, "sbTitle"));
    sb.addEventListener("click", () => this.scanActive());

    this.backupTimer = this.registerInterval(window.setInterval(() => {
      this.createBackup();
    }, 10 * 60 * 1000));

    this.schedule(() => this.createBackup(), 10000);

    this.register(() => {
      window.removeEventListener('beforeunload', this.emergencyFlush);
    });
    window.addEventListener('beforeunload', this.emergencyFlush);
  }

  private emergencyFlush = () => {

    if (this.persistDebounceTimer !== null) {
      clearTimeout(this.persistDebounceTimer);
      this.persistDebounceTimer = null;
    }

    this.persistAll().catch((err: unknown) => {
      console.error('[Media Layout] Emergency flush failed:', err);
    });
  };

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

    await this.flushPersist();

    await this.persistAll();
    this.observers.forEach((o) => o.disconnect());
    this.observers.length = 0;
  }

  private log(level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR', message: string, data?: any) {
    const timestamp = new Date().toISOString();
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

    if (this.enableDebugMode || level === 'WARN' || level === 'ERROR') {
      const dataStr = data ? ` ${JSON.stringify(data)}` : '';
      const fullMessage = `[Media Layout] [${level}] ${message}${dataStr}`;

      switch (level) {
        case 'ERROR':
          console.error(fullMessage);
          break;
        case 'WARN':
          console.warn(fullMessage);
          break;
        default:
          console.log(fullMessage);
      }
    }
  }

  private debug(message: string, data?: any) {
    this.log('DEBUG', message, data);
  }

  private info(message: string, data?: any) {
    this.log('INFO', message, data);
  }

  private warn(message: string, data?: any) {
    this.log('WARN', message, data);
  }

  private error(message: string, data?: any) {
    this.log('ERROR', message, data);
  }

  private async saveDebugLog() {
    try {
      const logPath = normalizePath(`${this.manifest.dir}/debug.log`);
      const logContent = this.debugLog.map(entry => {
        const dataStr = entry.data ? ` | Data: ${JSON.stringify(entry.data)}` : '';
        return `${entry.timestamp} [${entry.level}] ${entry.message}${dataStr}`;
      }).join('\n');

      await this.app.vault.adapter.write(logPath, logContent);
      this.logFilePath = logPath;
      console.log('[Media Layout] Debug log saved:', logPath, `(${this.debugLog.length} entries)`);
      return logPath;
    } catch (err) {
      console.error('[Media Layout] Failed to save debug log:', err);
      throw err;
    }
  }

  private async exportLogsToNote() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
      const noteName = `Media Layout Debug ${timestamp}.md`;

      let content = `# Media Layout Debug Log\n\n`;
      content += `Generated: ${new Date().toLocaleString()}\n`;
      content += `Total entries: ${this.debugLog.length}\n`;
      content += `Debug mode: ${this.enableDebugMode ? 'ON' : 'OFF'}\n\n`;
      content += `---\n\n`;

      const byLevel = {
        ERROR: this.debugLog.filter(e => e.level === 'ERROR'),
        WARN: this.debugLog.filter(e => e.level === 'WARN'),
        INFO: this.debugLog.filter(e => e.level === 'INFO'),
        DEBUG: this.debugLog.filter(e => e.level === 'DEBUG')
      };

      content += `## Summary\n\n`;
      content += `- Errors: ${byLevel.ERROR.length}\n`;
      content += `- Warnings: ${byLevel.WARN.length}\n`;
      content += `- Info: ${byLevel.INFO.length}\n`;
      content += `- Debug: ${byLevel.DEBUG.length}\n\n`;

      if (byLevel.ERROR.length > 0) {
        content += `## Recent Errors\n\n`;
        byLevel.ERROR.slice(-10).forEach(entry => {
          content += `### ${entry.timestamp}\n`;
          content += `**${entry.message}**\n`;
          if (entry.data) {
            content += `\`\`\`json\n${JSON.stringify(entry.data, null, 2)}\n\`\`\`\n`;
          }
          content += `\n`;
        });
      }

      content += `## Full Log\n\n`;
      content += `\`\`\`\n`;
      this.debugLog.forEach(entry => {
        const dataStr = entry.data ? ` | ${JSON.stringify(entry.data)}` : '';
        content += `${entry.timestamp} [${entry.level}] ${entry.message}${dataStr}\n`;
      });
      content += `\`\`\`\n`;

      await this.app.vault.create(noteName, content);
      new Notice(`✅ Logs exported to: ${noteName}`);

      const file = this.app.vault.getAbstractFileByPath(noteName);
      if (file instanceof TFile) {
        await this.app.workspace.getLeaf(false).openFile(file);
      }
    } catch (err) {
      this.error('Failed to export logs to note', { error: String(err) });
      new Notice('❌ Failed to export logs');
    }
  }

  private clearDebugLog() {
    this.debugLog = [];
    this.info('Debug log cleared');
    new Notice('🗑️ Debug log cleared');
  }

  private simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash = hash & hash;
    }
    return hash.toString();
  }

  private async createBackup() {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) {
        console.warn('[Media Layout] Plugin dir is undefined, cannot create backup');
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
        backupTimestamp: new Date().toISOString()
      };

      const dataStr = JSON.stringify(data);
      const currentHash = this.simpleHash(dataStr);

      if (currentHash === this.lastBackupHash) {
        console.log('[Media Layout] Data unchanged, skipping backup');
        return;
      }

      this.lastBackupHash = currentHash;

      const hasNotes = this.notes && Object.keys(this.notes).length > 0;
      if (!hasNotes) {
        console.warn('[Media Layout] Skipping backup: this.notes is empty');
        return;
      }

      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hour = String(now.getHours()).padStart(2, '0');
      const minute = String(now.getMinutes()).padStart(2, '0');

      const backupFileName = `${day}_${month}_${year}_${hour}꞉${minute}_data_backup.json`;
      const backupPath = normalizePath(`${pluginDir}/${backupFileName}`);

      await this.app.vault.adapter.write(backupPath, JSON.stringify(data, null, 2));

      await this.cleanupOldBackups();

      this.log('INFO', 'Backup created successfully', { fileName: backupFileName });
      console.log(`[Media Layout] Backup created: ${backupFileName}`);
    } catch (e) {
      console.error('[Media Layout] Failed to create backup:', e);
      this.error('Failed to create backup', { error: String(e) });
    }
  }

  private async cleanupOldBackups() {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) return;
      const files = await this.app.vault.adapter.list(pluginDir);

      const backupFiles = files.files
        .filter(f => f.endsWith('_data_backup.json'))
        .map(f => ({
          path: f,
          name: f.split('/').pop() || f
        }))
        .sort((a, b) => b.name.localeCompare(a.name));

      if (backupFiles.length > 4) {
        const toDelete = backupFiles.slice(4);
        for (const file of toDelete) {
          await this.app.vault.adapter.remove(file.path);
          this.log('INFO', 'Old backup removed', { fileName: file.name });
          console.log(`[Media Layout] Old backup removed: ${file.name}`);
        }
      }
    } catch (e) {
      console.error('[Media Layout] Failed to cleanup old backups:', e);
      this.error('Failed to cleanup old backups', { error: String(e) });
    }
  }

  private async listBackups(): Promise<Array<{ path: string; name: string; date: Date }>> {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) return [];
      const files = await this.app.vault.adapter.list(pluginDir);

      const backupFiles = files.files
        .filter(f => f.endsWith('_data_backup.json'))
        .map(f => {
          const name = f.split('/').pop() || f;

          const match = name.match(/^(\d{2})_(\d{2})_(\d{4})_(\d{2})꞉(\d{2})_data_backup\.json$/);
          let date = new Date();
          if (match) {
            const [, day, month, year, hour, minute] = match;
            date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
          }
          return { path: f, name, date };
        })
        .sort((a, b) => b.date.getTime() - a.date.getTime());

      return backupFiles;
    } catch (e) {
      console.error('[Media Layout] Failed to list backups:', e);
      return [];
    }
  }

  private async restoreFromBackup(backupPath: string) {
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
      this.cloneAnimation = data.cloneAnimation || 'popup';
      this.cloneBgOpacity = data.cloneBgOpacity ?? 1.0;
      this.cloneControlsOpacity = data.cloneControlsOpacity ?? 0.35;
      this.cloneHideDelay = data.cloneHideDelay ?? 2.0;
      this.cloneShowAudioHandles = data.cloneShowAudioHandles ?? true;
      this.cloneRestoreDelay = data.cloneRestoreDelay ?? 300;
      this.noteRestoreDelay = data.noteRestoreDelay ?? 200;
      this.enableModalAnimation = data.enableModalAnimation ?? true;

      await this.persistAll();

      const fileName = backupPath.split('/').pop() || backupPath;
      new Notice(`✔️ Data restored from: ${fileName}`);
      this.log('INFO', 'Backup restored successfully', { fileName });

      this.scanActive();
    } catch (e) {
      console.error('[Media Layout] Failed to restore from backup:', e);
      this.error('Failed to restore from backup', { error: String(e) });
      new Notice('❌ Failed to restore from backup');
    }
  }

  private scanActive() {
    this.disconnectObservers();
    const root = this.getActiveContainerEl();
    if (!root) return;
    const notePath = this.getActiveNote()?.path ?? "";
    this.currentNotePath = notePath;
    this.processRoot(root, notePath);

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLElement) {

              const currentPath = this.getActiveNote()?.path ?? "";
              if (currentPath) {
                this.processRoot(node, currentPath);
              }
            }
          });
        }
      }
    });
    mo.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "src"] });
    this.observers.push(mo);

    this.restoreClonesFromStore(notePath);

    this.ensureNotesFromStore(notePath);

    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
     if (view) {

        setTimeout(() => {
            this.app.workspace.trigger("markdown-render", view.contentEl);
        }, 100);
     }
  }
  private disconnectObservers() {
    this.observers.forEach((o) => o.disconnect());
    this.observers.length = 0;
  }

  private processRoot(rootEl: Element, notePath: string) {

    const elementsToProcess = rootEl.matches('.internal-embed, .media-embed, .mx-media-embed, img, video, audio, .ms-note-host')
      ? [rootEl as HTMLElement]
      : Array.from(rootEl.querySelectorAll<HTMLElement>(
      ".internal-embed, .media-embed, .mx-media-embed, img, video, audio, .markdown-reading-view video, .markdown-preview-view video, .ms-note-host"
    ));
    const nodes = elementsToProcess;
    nodes.forEach((hostLike, idx) => {
const isNoteHost = (hostLike as HTMLElement).classList?.contains?.("ms-note-host");

const host = isNoteHost
  ? (hostLike as HTMLElement)
  : (["IMG", "VIDEO", "AUDIO"].includes(hostLike.tagName)
      ? (hostLike.closest<HTMLElement>(".internal-embed, .media-embed, .mx-media-embed") ?? (hostLike as HTMLElement))
      : (hostLike as HTMLElement));

if (!(host instanceof HTMLElement)) return;
if (host.dataset.msInit === "1") return;

const media = isNoteHost
  ? (host.querySelector(".ms-note") as HTMLElement | null)
  : ((host.querySelector("video, img, audio") as any) ??
     (["IMG", "VIDEO", "AUDIO"].includes(host.tagName) ? (host as any) : null));
if (!media) return;

const tag = isNoteHost ? "NOTE" : (media.tagName || "").toUpperCase();
const kind: MediaKind = tag === "NOTE" ? "note" : tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";

host.dataset.msInit = "1";
host.classList.add("ms-host");

const { src, base } = isNoteHost ? { src: "", base: "" } : this.getSrcAndBase(host, media);
const key = isNoteHost ? (host.dataset.msKey ?? this.makeNoteKey()) : this.makeEmbedKey(src);
host.dataset.msKey = key;

      const overlay = this.ensureOverlay(host);
      const handles = this.ensureHandles(overlay, false, kind === "note");
      host.append(overlay);

if (kind === "image") {

  overlay.classList.add("--img");

  const onDown = (e: Event) => {
    const m = e as MouseEvent;
    if (m.button !== 0) return;
    window.getSelection()?.removeAllRanges();

  };
  overlay.addEventListener("pointerdown", onDown, { capture: true });
  overlay.addEventListener("mousedown",   onDown, { capture: true });

  const killAfterUp = (e: Event) => {
    const m = e as MouseEvent;
    if (m.button !== 0) return;
    e.preventDefault();
    (e as any).stopImmediatePropagation?.();

    requestAnimationFrame(() => window.getSelection()?.removeAllRanges());
  };
  overlay.addEventListener("mouseup",   killAfterUp, { capture: true });
  overlay.addEventListener("click",     killAfterUp, { capture: true });
  overlay.addEventListener("dblclick",  killAfterUp, { capture: true });
}

      this.applyKindBaseStyles(host, media, kind);

      const saved = this.loadStateWithFallback(notePath, key, base);

      if (kind === "image" && saved) {
        console.log(`🟢 [RESTORE] Applying saved state for image:`, {
          key,
          savedW: saved.w,
          savedH: saved.h,
          domW: host.getBoundingClientRect().width,
          domH: host.getBoundingClientRect().height
        });
      }

      if (saved) this.applyState(host, media, kind, saved);
      else {

        if (kind !== "image" && kind !== "note") {
          const rect = host.getBoundingClientRect();
          if (rect.width) this.applyState(host, media, kind, { w: Math.round(rect.width) });
        }
      }

      this.mountControlsForHost(host, media as HTMLElement);

      this._attachDragMoveHandler(host, overlay, notePath, key, kind);
      this._attachResizeHandlers(host, overlay, handles, notePath, key, kind, media);
    });
  }

  private async applyAndSaveSize(
    notePath: string,
    key: string,
    host: HTMLElement,
    media: HTMLVideoElement | HTMLImageElement | HTMLAudioElement,
    kind: MediaKind,
    patch: Partial<MediaState> & { reset?: boolean },
    forceFreeForImage?: boolean
  ) {
    const cur = this.readAbsRect(host);
    const next: MediaState = {
      w: patch.w ?? cur.w,
      h: patch.h ?? cur.h,
      x: typeof patch.x === "number" ? patch.x : cur.x || 0,
      y: typeof patch.y === "number" ? patch.y : cur.y || 0,
      free: forceFreeForImage ? true : (host.dataset.msFree === "1"),
    };
    const wasDetached = host.dataset.msDetached === "1";
(next as any).detached = (patch as any)?.detached ?? wasDetached;

    if (kind === "image" && !forceFreeForImage) {
      const ar = this.getAR("image", media);
      if (typeof patch.w === "number" && typeof patch.h !== "number") next.h = Math.round(patch.w / ar);
      if (typeof patch.h === "number" && typeof patch.w !== "number") next.w = Math.round(patch.h * ar);
    }

    if (patch.reset) {

      next.x = 0; next.y = 0; next.w = undefined; next.h = undefined; next.free = false;
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

private async applyLayout(notePath: string, layout: Layout) {
  const root = this.getAttachRoot();
  if (root) {
    for (const [key, st] of Object.entries(layout)) {
      if (!key.includes("::clone::")) continue;

      const existingClone = root.querySelector<HTMLElement>(`[data-ms-key="${CSS.escape(key)}"]`);
      if (existingClone) {

        const media = existingClone.querySelector<HTMLMediaElement | HTMLImageElement>("video, img, audio");
        const tag = media?.tagName?.toUpperCase();
        const kind: MediaKind = tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";
        if (media) {

          this.applyState(existingClone, media, kind, st as MediaState);

          await this.saveState(notePath, key, st, false);
        }
        continue;
      }

      let parentKey = (st as any).parentKey;
      const parentAnchor = (st as any).parentAnchor;
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
const fileNameFromStore = (cloneState as any)?.fileName;
const fileNameFromPreset = (st as any)?.fileName;

let fileName = fileNameFromStore ?? fileNameFromPreset;
if (!fileName && parentKey) {
  const originalHost = this.findHostByKey(parentKey);
  const mediaEl = originalHost?.querySelector("video, audio, img") as HTMLElement | null;
  if (originalHost && mediaEl) {
    const { base } = this.getSrcAndBase(originalHost, mediaEl);
    fileName = base || undefined;
  }
}

      await this.saveState(notePath, key, st, false);
      this.createCloneHost(root, cloneHost, key, parentKey, st.x ?? 0, st.y ?? 0, true, fileName);
    }
  }

  const hosts = this.enumerateHostsInNote(notePath);
  if (!hosts.length) return;

  const toMove: Array<{ host: HTMLElement; x: number; y: number }> = [];
  const noteData = (this.notes[notePath] ??= { originals: {}, clones: {} });
  const originals = (noteData.originals ??= {});
  const clones = (noteData.clones ??= {});

  for (const { host, media, kind, key } of hosts) {
    const st0 = layout[key];
    if (!st0) continue;

    const prev = originals[key] ?? {};

    const st = {
      ...st0,
      detached: st0.detached ?? (host.dataset.msDetached === "1"),
      locked:   st0.locked   ?? (host.dataset.msLocked === "1"),
      x: st0.x ?? 0,
      y: st0.y ?? 0,

      bgColor: (st0 as any).bgColor,
      headerColor: (st0 as any).headerColor,
      transparent: (st0 as any).transparent,

      txt: st0.txt,
      fontSize: st0.fontSize,
      textStrokeColor: (st0 as any).textStrokeColor,
      textStroke: (st0 as any).textStroke,
      textColor: (st0 as any).textColor,
      free: st0.free ?? prev.free ?? false,
      volume: (st0 as any).volume,

    };

    if (!key.includes("::clone::") && kind !== "note") continue;

    if (kind === "note") {

      host.classList.remove("ms-note-transparent");

      if ((st as any).bgColor || (st as any).headerColor) (st as any).transparent = false;

    }

    const hasRotate = (st as any).rotate !== undefined && (st as any).rotate !== 0;
    let w: number, h: number;
    if (st.w !== undefined && st.h !== undefined) {
      w = st.w;
      h = st.h;
    } else if (hasRotate) {

      w = parseFloat(host.style.width) || host.offsetWidth || (media as any)?.clientWidth || 0;
      h = parseFloat(host.style.height) || host.offsetHeight || (media as any)?.clientHeight || 0;
    } else {

      w = host.getBoundingClientRect().width || (media as any)?.clientWidth || 0;
      h = host.getBoundingClientRect().height || (media as any)?.clientHeight || 0;
    }

    if (st.detached) {
      this.ensureParentAnchor(host);
      host.style.position = "absolute";
      host.style.left = "0px";
      host.style.top  = "0px";
      host.dataset.msDetached = "1";
      host.dataset.msLocked   = st.locked ? "1" : "0";

    } else {
      host.dataset.msDetached = "0";
      host.dataset.msLocked   = "0";
      this.reattach(host);
    }

    this.applyBox(host, media as any, kind, w, h, st.free === true);

    const rotateAngle = typeof (st as any).rotate === 'number' ? (st as any).rotate : undefined;
    this.applyTransform(host, st.x || 0, st.y || 0, rotateAngle);

    if (host.dataset.msParentKey) {
        clones[key] = {
            ...(clones[key] || {}),
            parentKey: host.dataset.msParentKey,
            w,
            h,
            x: st.x,
            y: st.y,
            locked: !!st.locked,
            volume: st.volume,
            zIndex: (st as any).zIndex,
            bgColor: (st as any).bgColor,
            opacity: (st as any).opacity,
            rotate: (st as any).rotate,
        };
    } else if (key.includes("::clone::")) {
        clones[key] = {
            ...(clones[key] || {}),
            parentKey: (st as any).parentKey,
            w, h,
            x: st.x,
            y: st.y,
            locked: !!st.locked,
            rotate: (st as any).rotate,
        };
    }
    else {
      originals[key] = {
        ...prev,
        w, h,
        x: st.x, y: st.y,
        free: !!st.free,
        detached: !!st.detached,
        zIndex: (st as any).zIndex,
        opacity: (st as any).opacity,
        transparent: (st as any).transparent,
        bgColor: (st as any).bgColor,
        textStrokeColor: (st as any).textStrokeColor,
        textStroke: (st as any).textStroke,
        textColor: (st as any).textColor,
        headerColor: (st as any).headerColor,
        locked: !!st.locked,
        rotate: (st as any).rotate,
      };
    }

    toMove.push({ host, x: st.x || 0, y: st.y || 0 });

    this.applyState(host, media as any, kind, st);

    this.debug('applyLayout: z-index applied', {
      key,
      zIndexInState: (st as any).zIndex,
      zIndexInDOM: host.style.zIndex,
      isClone: !!host.dataset.msParentKey
    });

    await this.saveState(notePath, key, st, false);
  }

  await new Promise<void>(r => requestAnimationFrame(() => r()));

  for (const { host, x, y } of toMove) this.applyTransform(host, x, y);

  const currentNotePath = this.getActiveNote()?.path;
  if (currentNotePath) {
    const attachRoot = this.getAttachRoot();
    if (attachRoot) {
      const layer = this.ensureFloatLayer(attachRoot);
      for (const [key, st] of Object.entries(layout)) {
        if (key.startsWith("note::")) {
          const exists = layer.querySelector<HTMLElement>(`.ms-note-host[data-ms-key="${CSS.escape(key)}"]`);
          if (!exists) {
            const isTransparent = ((st as any).bgColor || (st as any).headerColor) ? false : (st as any).transparent;

const host = this.createNoteHost(attachRoot, key, st.x ?? 0, st.y ?? 0, {
              w: st.w, h: st.h, txt: st.txt ?? "", fontSize: st.fontSize ?? 16,
              bgColor: (st as any).bgColor,
              headerColor: (st as any).headerColor
            });
                        if ((st as any).transparent) {
                                        host.classList.add("ms-note-transparent");
            }

            if (isTransparent) {
              host.querySelector<HTMLElement>(".ms-note-body")!.style.color = (st as any).textColor;
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
      const isNote = host.dataset.msKind === "note";
      const handles = this.ensureHandles(overlay, false, isNote);
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
  const realign = (host: HTMLElement, x: number, y: number) => {
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

  const observers: ResizeObserver[] = [];
  for (const { host, x, y } of toMove) {
    const ro = new ResizeObserver(() => {
      if (Date.now() > stopAt) return;
      realign(host, x, y);
    });
    ro.observe(host);
    observers.push(ro);

    setTimeout(() => { if (Date.now() <= stopAt) realign(host, x, y); }, 10);
    setTimeout(() => { if (Date.now() <= stopAt) realign(host, x, y); }, 100);
    setTimeout(() => { if (Date.now() <= stopAt) realign(host, x, y); }, 300);
    requestAnimationFrame(() => realign(host, x, y));
  }

  setTimeout(() => observers.forEach(o => o.disconnect()), 600);
}
  private async saveLayoutToState(notePath: string, layout: Layout) {
    for (const [key, st] of Object.entries(layout)) {

      await this.saveState(notePath, key, st);
    }
  }

private applyState(
  host: HTMLElement,
  media: HTMLVideoElement | HTMLImageElement | HTMLAudioElement | null,
  kind: MediaKind,
  st: MediaState
) {
    const isClone = !!host.dataset.msParentKey;

    host.dataset.msKind = kind;

  const hasRotate = (isClone || kind === "note") && typeof (st as any).rotate === 'number' && (st as any).rotate !== 0;
  let w: number, h: number;

  if (st.w !== undefined && st.h !== undefined) {

    w = st.w;
    h = st.h;
  } else if (hasRotate) {

    w = parseFloat(host.style.width) || host.offsetWidth || (media as any)?.clientWidth || 0;
    h = parseFloat(host.style.height) || host.offsetHeight || (media as any)?.clientHeight || 0;
  } else {

    w = host.getBoundingClientRect().width || (media as any)?.clientWidth || 0;
    h = host.getBoundingClientRect().height || (media as any)?.clientHeight || 0;
  }

  if (isClone && (typeof st.w !== 'number' || typeof st.h !== 'number')) {
    this.debug('applyState: Clone has missing size in state, using fallback', {
      key: host.dataset.msKey,
      hasW: typeof st.w === 'number',
      hasH: typeof st.h === 'number',
      fallbackW: w,
      fallbackH: h
    });
  }

this.applyBox(host, media, kind, w, h, st.free === true);

  if (st.detached || isClone || kind === "note") {
    this.ensureParentAnchor(host);
    host.style.position = "absolute";
    host.style.left = "0px";
    host.style.top  = "0px";
    host.dataset.msDetached = "1";

    const rotateAngle = ((isClone || kind === "note") && typeof (st as any).rotate === 'number') ? (st as any).rotate : undefined;
    this.applyTransform(host, st.x || 0, st.y || 0, rotateAngle);

    host.dataset.msLocked = st.locked ? "1" : "0";
  } else {
    host.dataset.msDetached = "0";
    host.dataset.msLocked   = "0";
    if (!isClone) this.reattach(host);
  }

  if (isClone && typeof st.volume === 'number' && media instanceof HTMLMediaElement) {
    media.volume = clamp(st.volume, 0, 1);
    media.muted = st.volume === 0;
  }

  if (isClone && (st as any).bgColor) {
    const localBg = this.ensureLocalBg(host);
    if ((st as any).bgColor === 'transparent') {
        host.querySelector('.ms-media-bg')?.remove();
        localBg.remove();
        return;
    }
    localBg.style.backgroundColor = (st as any).bgColor;
  }

  if ((isClone || st.detached) && typeof (st as any).zIndex === 'number') {
    host.style.zIndex = String((st as any).zIndex);
  }

  if (isClone && kind === 'image' && (st as any).link) {
    this.applyLinkOverlay(host, (st as any).link);
  }

    if (!isClone && typeof (st as any).opacity === 'number') {
      const opacityValue = String((st as any).opacity);
      Array.from(host.children).forEach(child => {
          if (child instanceof HTMLElement && !child.classList.contains('ms-overlay')) {
              child.style.opacity = opacityValue;
          }
      });
  }

  if (kind === "note") {
    const noteBody = host.querySelector<HTMLElement>(".ms-note");

    const textBody = host.querySelector<HTMLElement>(".ms-note-body");
    if (textBody) {
      textBody.textContent = st.txt ?? "";
      textBody.style.fontSize = `${Math.max(10, st.fontSize ?? 16)}px`;
    }
    const noteHeader = host.querySelector<HTMLElement>(".ms-note-top");
    if (noteBody) {
      noteBody.style.backgroundColor = st.bgColor || "";
    }

    const isTransparent = ((st as any).bgColor || (st as any).headerColor) ? false : (st as any).transparent;
    if (noteHeader) {

      const headerColor = (st as any).headerColor;
      noteHeader.style.backgroundColor = headerColor || "";
    }

    if (isTransparent) {
      host.classList.add("ms-note-transparent");
    }

    if (kind === "note") {
      const noteBody = host.querySelector<HTMLElement>(".ms-note-body");
            if (noteBody) {
        const hasStroke = !!(st as any).textStroke;
        noteBody.style.color = (st as any).textColor || "";
        noteBody.classList.toggle("ms-note-text-stroked", hasStroke);
        if (hasStroke) {

          noteBody.style.setProperty('--note-stroke-color', (st as any).textStrokeColor || (st as any).textColor || '#FFFFFF');
        }
      }
    }
  }
}

  private applyBox(
    host: HTMLElement,
    media: HTMLVideoElement | HTMLImageElement | HTMLAudioElement | null,
    kind: MediaKind,
    w: number,
    h?: number,
    freeImage = false
  ) {

    if (kind === "image") {
      console.log(`🟡 [APPLY BOX] Setting image size:`, {
        key: host.dataset.msKey,
        applyW: w,
        applyH: h,
        currentDomW: host.getBoundingClientRect().width,
        free: freeImage
      });
    }

    if (kind === "video") {
      host.style.width = `${Math.round(w)}px`;
      host.style.maxWidth = `${Math.round(w)}px`;

      const isClone = !!host.dataset.msParentKey;
      const hasME = this.isMediaExtendedActive(host);

      const videoAR = (isClone || hasME) ? 16 / 9 : (media ? this.getAR(kind, media as HTMLVideoElement) : 16 / 9);
      (host.style as any).aspectRatio = `${videoAR}`;

      if (isClone) {
        host.style.height = `${Math.round(w / videoAR)}px`;
      }
      if (media) (media as HTMLVideoElement).style.width = "100%";
      if (media) (media as HTMLVideoElement).style.height = "100%";
      if (media) (media as any).style.objectFit = "contain";
      if (media) (media as any).style.objectPosition = "center center";
    } else if (kind === "audio") {
      host.style.width = `${Math.round(w)}px`;
      host.style.maxWidth = `${Math.round(w)}px`;
      if (host.dataset.msParentKey) {
        host.style.height = "70px";
      } else {
        (host.style as any).aspectRatio = "12 / 1";
      }

      if (media) (media as HTMLAudioElement).style.width = "100%";
      if (media) (media as HTMLAudioElement).style.height = "100%";
      } else if (kind === "note") {
  const iw = Math.round(w);
  const ih = Math.max(60, Math.round(typeof h === "number" ? h : 160));
  host.style.width = `${iw}px`;
  host.style.maxWidth = `${iw}px`;
  host.style.height = `${ih}px`;
  (host.style as any).aspectRatio = "auto";
  host.style.display = "block";

    } else {

      if (!media) return;
      const ar = this.getAR("image", media);
      const iw = Math.round(w);
      const ih = Math.max(1, Math.round(typeof h === "number" ? h : iw / ar));

      const isWrapped = host !== media;
      if (isWrapped) {
        host.style.width = `${iw}px`;
        host.style.maxWidth = `${iw}px`;
        host.style.height = `${ih}px`;
        (host.style as any).aspectRatio = "auto";

        if (media) (media as HTMLImageElement).style.width = "100%";
        if (media) (media as HTMLImageElement).style.height = "100%";
        if (media) (media as any).style.objectFit = "fill";
      }
      host.dataset.msFree = freeImage ? "1" : "0";
    }
    host.style.display = "block";
  }

private readAbsRect(host: HTMLElement) {

  const sizer = host.closest('.cm-sizer, .markdown-preview-sizer') as HTMLElement;

  if (!sizer) {
    console.warn('[Media Layout] readAbsRect: No sizer found for', host.dataset.msKey, '- returning zeros');
    return { x: 0, y: 0, w: 0, h: 0 };
  }

  const isClone = !!host.dataset.msParentKey;
  const isNote = host.dataset.msKind === "note";
  const hasRotate = (isClone || isNote) && host.style.transform && host.style.transform.includes('rotate(');

  if (hasRotate) {
    const transformMatch = host.style.transform.match(/translate\(([^,)]+)(?:px)?(?:,\s*|\s+)([^)]+)(?:px)?\)/);
    let x = 0, y = 0;
    if (transformMatch) {
      x = parseFloat(transformMatch[1]) || 0;
      y = parseFloat(transformMatch[2]) || 0;
    }

    const isInFloatLayer = !!host.closest('.ms-float-layer');
    const isReadingMode = !!host.closest('.markdown-reading-view, .markdown-preview-view');
    if (isInFloatLayer && isReadingMode) {
      x = x - 29;
      y = y + 53;
    }

    const w = parseFloat(host.style.width) || host.offsetWidth;
    const h = parseFloat(host.style.height) || host.offsetHeight;

    return { x, y, w, h };
  }

  const hostRect = host.getBoundingClientRect();
  const sizerRect = sizer.getBoundingClientRect();

  const x = hostRect.left - sizerRect.left;
  const y = hostRect.top - sizerRect.top;
  const w = hostRect.width;
  const h = hostRect.height;

  return { x, y, w, h };
}
  private readAbsOrig(host: HTMLElement): { w?: number; h?: number; x?: number; y?: number; free?: boolean } {
    const st = getComputedStyle(host);
    const w = parseFloat(st.width) || undefined;
    const h = parseFloat(st.height) || undefined;
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

  private readVisualRectForSave(host: HTMLElement) {

    const root = this.getHostRoot(host);
    const r = host.getBoundingClientRect();
    if (!root) return { x: r.left, y: r.top, w: r.width, h: r.height };

    const rp = root.getBoundingClientRect();
    const cs = getComputedStyle(root);

    const originLeft = rp.left + (parseFloat(cs.borderLeftWidth) || 0) - root.scrollLeft;
    const originTop  = rp.top  + (parseFloat(cs.borderTopWidth) || 0)  - root.scrollTop;

    return { x: r.left - originLeft, y: r.top - originTop, w: r.width, h: r.height };
  }

  private applyTransform(host: HTMLElement, x: number, y: number, rotate?: number) {

    const isInFloatLayer = !!host.closest('.ms-float-layer');
    const isReadingMode = !!host.closest('.markdown-reading-view, .markdown-preview-view');

    let finalX = x;
    let finalY = y;

    if (isInFloatLayer && isReadingMode) {
      finalX = x + 29;
      finalY = y - 53;
    }

    let rotateValue = '';
    if (typeof rotate === 'number') {

      rotateValue = ` rotate(${rotate}deg)`;
    } else {

      const currentTransform = host.style.transform || '';
      const rotateMatch = currentTransform.match(/rotate\(([^)]+)\)/);
      rotateValue = rotateMatch ? ` ${rotateMatch[0]}` : '';
    }

    host.style.transform = `translate(${finalX}px, ${finalY}px)${rotateValue}`;

    if (this.enableDebugMode && host.dataset.msParentKey) {
      const leafCount = this.app.workspace.getLeavesOfType("markdown").length;
      this.debug('applyTransform to clone', {
        cloneId: host.dataset.msKey,
        x: finalX,
        y: finalY,
        isReadingMode,
        isInFloatLayer,
        originalX: x,
        originalY: y,
        leafCount
      });
    }
  }
private readAppliedRect(host: HTMLElement): { w?: number; h?: number; x?: number; y?: number; free?: boolean } {
return this.readAbsRect(host);
  }

public async saveState(notePath: string, key: string, partial: any, autoPersist: boolean | "immediate" = true) {
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

  const sanitized: any = {};
  for (const [k, v] of Object.entries(partial)) {

    if (k === 'x' || k === 'y' || k === 'w' || k === 'h' || k === 'rotate' || k === 'zIndex' || k === 'opacity' || k === 'volume' || k === 'fontSize') {
      const num = Number(v);

      if (!Number.isFinite(num)) {
        console.warn(`[Media Layout] Invalid ${k} value: ${v}, skipping`);
        continue;
      }

      if ((k === 'w' || k === 'h') && num <= 0) {
        console.warn(`[Media Layout] Invalid ${k} value (must be > 0): ${v}, skipping`);
        continue;
      }

      if ((k === 'opacity' || k === 'volume') && (num < 0 || num > 1)) {
        sanitized[k] = Math.max(0, Math.min(1, num));
        continue;
      }
      sanitized[k] = num;
    }

    else if (k === 'free' || k === 'detached' || k === 'locked' || k === 'transparent' || k === 'textStroke' || k === 'showAudioHandles') {
      sanitized[k] = Boolean(v);
    }

    else if (k === 'txt' || k === 'bgColor' || k === 'headerColor' || k === 'textColor' || k === 'textStrokeColor' || k === 'link' || k === 'fileName' || k === 'animation' || k === 'dock' || k === 'parentKey' || k === 'parentAnchor') {

      if (typeof v === 'string' || v === undefined) {
        sanitized[k] = v;
      } else {
        console.warn(`[Media Layout] Invalid ${k} value (expected string): ${v}, skipping`);
      }
    }

    else if (k === 'bgOpacity' || k === 'controlsOpacity' || k === 'hideDelay' || k === 'order') {
      const num = Number(v);
      if (Number.isFinite(num) && num >= 0) {
        sanitized[k] = num;
      } else {
        console.warn(`[Media Layout] Invalid ${k} value: ${v}, skipping`);
      }
    }

    else {
      sanitized[k] = v;
    }
  }

  bucket[key] = { ...(bucket[key] || {}), ...sanitized };

  if (partial.w !== undefined || partial.h !== undefined) {
    const hostEl = this.getActiveContainerEl()?.querySelector(`[data-ms-key="${CSS.escape(key)}"]`) as HTMLElement | null;
    const kind = hostEl?.dataset.msKind;
    if (kind === "image") {
      console.log(`🔵 [SAVE] Image size change:`, {
        key,
        newW: partial.w,
        newH: partial.h,
        currentInMemory: { w: bucket[key].w, h: bucket[key].h },
        stackTrace: new Error().stack?.split('\n').slice(2, 4).join('\n')
      });
    }
  }

  this.hasPendingChanges = true;

  if (autoPersist === "immediate") {

    await this.persistAll();
  } else if (autoPersist === true) {

    this.persistAllDebounced();
  }

}

  public async persistAll(): Promise<void> {

    if (this.persistInProgress) {
      if (this.persistQueue) {
        await this.persistQueue;
      }

      if (this.hasPendingChanges) {
        return this.persistAll();
      }
      return;
    }

    this.persistInProgress = true;

    const currentPersist = (async () => {
      try {

        if (!this.notes || typeof this.notes !== 'object') {
          console.error('[Media Layout] CRITICAL: this.notes is invalid, aborting save to prevent data loss!', {
            notesType: typeof this.notes,
            notesValue: this.notes
          });
          return;
        }

        const hasNotes = Object.keys(this.notes).length > 0;
        if (!hasNotes && this.lastPersistTime > 0) {
          console.error('[Media Layout] CRITICAL: this.notes is empty but we had data before, aborting save to prevent data loss!');
          return;
        }

        const hadChangesAtStart = this.hasPendingChanges;
        this.hasPendingChanges = false;

        const data = {
          notes: this.notes,
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
        };
        await this.saveData(data);

        this.lastPersistTime = Date.now();

      } catch (error) {
        console.error('[Media Layout] Failed to persist data:', error);

        this.hasPendingChanges = true;
      } finally {
        this.persistInProgress = false;
        this.persistQueue = null;
      }
    })();

    this.persistQueue = currentPersist;
    await currentPersist;

    if (this.hasPendingChanges) {
      return this.persistAll();
    }
  }

  public persistAllDebounced() {

    if (!this.hasPendingChanges) {
      return;
    }

    const now = Date.now();
    const timeSinceLastPersist = now - this.lastPersistTime;

    if (timeSinceLastPersist >= this.maxPersistDelay) {
      if (this.persistDebounceTimer !== null) {
        clearTimeout(this.persistDebounceTimer);
        this.persistDebounceTimer = null;
      }
      this.persistAll().catch((err: unknown) => {
        console.error('[Media Layout] Force persist failed:', err);
      });
      return;
    }

    if (this.persistDebounceTimer !== null) {
      clearTimeout(this.persistDebounceTimer);
    }

    this.persistDebounceTimer = window.setTimeout(() => {
      this.persistDebounceTimer = null;

      if (this.hasPendingChanges) {
        this.persistAll().catch((err: unknown) => {
          console.error('[Media Layout] Debounced persist failed:', err);
        });
      }
    }, this.persistDebounceDelay);
  }

  public async flushPersist() {
    if (this.persistDebounceTimer !== null) {
      clearTimeout(this.persistDebounceTimer);
      this.persistDebounceTimer = null;
    }
    await this.persistAll();
  }

private addUserPreset(n: number) {
  this.userPresets = [n, ...this.userPresets.filter((v) => v !== n)].slice(0, MAX_WIDTH_PRESETS);

  return this.persistAll();
}

private removeUserPreset(n: number) {
  this.userPresets = this.userPresets.filter((v) => v !== n);
  return this.persistAll();
}

  private loadStateWithFallback(notePath: string, key: string, basename: string): OriginalState | undefined {
    const noteData = this.notes[notePath];
    if (!noteData) return undefined;

    const originals = noteData.originals ?? {};
    const byKey = originals[key];
    if (byKey) return byKey;

    if (basename) {
        for (const k of Object.keys(originals)) {

          if (k.startsWith("note::") || k.includes("::clone::")) continue;

          const b = this.extractBaseFromKey(k);
          if (b && b === basename) {
            const stateToMigrate = originals[k]!;

            originals[key] = stateToMigrate;

            this.persistAll();
            console.log(`Media-Size: Migrated state from old key "${k}" to new key "${key}"`);
            return stateToMigrate;
          }
        }
    }
    return undefined;
  }

  private isMediaExtendedActive(host?: HTMLElement): boolean {

    const hasPlugin = (this.app as any).plugins?.enabledPlugins?.has?.("media-extended") ||
                      (this.app as any).plugins?.plugins?.["media-extended"];

    if (host) {
      const hasMEContainer = !!host.closest(".mx-media-embed, .media-embed");
      return hasPlugin && hasMEContainer;
    }

    return !!hasPlugin;
  }

  private getAR(kind: MediaKind, media: HTMLVideoElement | HTMLImageElement | HTMLAudioElement): number {
    if (kind === "image") {
      const img = media as HTMLImageElement;
      const iw = img.naturalWidth || (img as any).clientWidth || 1;
      const ih = img.naturalHeight || (img as any).clientHeight || 1;
      return iw / Math.max(1, ih);
    }
    if (kind === "video") {
      const vid = media as HTMLVideoElement;
      const vw = vid.videoWidth || 1920;
      const vh = vid.videoHeight || 1080;
      return vw / Math.max(1, vh);
    }
    return 9 / 1;
  }

private getAttachRoot(): HTMLElement | null {
  const view = this.app.workspace.getActiveViewOfType(MarkdownView);
  if (!view) return null;

  const src = view.containerEl.querySelector(".markdown-source-view .cm-scroller") as HTMLElement | null;

  const read = view.containerEl.querySelector(".markdown-reading-view") as HTMLElement | null;

  const readVisible = read ? (getComputedStyle(read).display !== 'none') : false;
  return readVisible ? (read || src) : (src || read);
}

private getHostRoot(host: HTMLElement): HTMLElement | null {

  const containerEl = host.closest('.workspace-leaf-content');
  if (!containerEl) return null;

  const src = containerEl.querySelector(".markdown-source-view .cm-scroller") as HTMLElement | null;
  if (src) return src;

  const read = containerEl.querySelector(".markdown-reading-view") as HTMLElement | null;
  if (read) return read;

  return null;
}

private getHostContainerEl(host: HTMLElement): HTMLElement | null {
  return host.closest('.workspace-leaf-content') as HTMLElement | null;
}

private isControlsTarget(el: HTMLElement | null): boolean {
  if (!el) return false;

  return !!el.closest(
    ".ob-video-controls, .media-controls, .mejs__controls, .plyr__controls, .vjs-control-bar, .me-controls, [class*='controls']"
  );
}

private isControlsPoint(host: HTMLElement, x: number, y: number): boolean {

  const sels = [
    ".ob-video-controls", ".media-controls", ".mejs__controls",
    ".plyr__controls", ".vjs-control-bar", ".me-controls",
    "[class*='controls']"
  ];
  let panel: HTMLElement | null = null;
  for (const s of sels) {
    panel = host.querySelector(s) as HTMLElement | null;
    if (panel) break;
  }
  if (!panel) return false;

  const btns = panel.querySelectorAll<HTMLElement>("button, [role='button'], .plyr__control, .vjs-control");
  for (const b of Array.from(btns)) {
    const r = b.getBoundingClientRect();
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true;
  }
  return false;
}

  private extractBaseFromKey(key: string): string | null {
    const parts = key.split("::");
    const fromSrc = parts.find((p) => p.includes("/")) ?? parts[0];
    const lastSlash = Math.max(fromSrc.lastIndexOf("/"), fromSrc.lastIndexOf("\\"));
    return fromSrc.substring(lastSlash + 1) || null;
  }

  private getSrcAndBase(host: HTMLElement, el: HTMLElement): { src: string; base: string } {
    const s = host.getAttribute("src") || host.getAttribute("alt") || el.getAttribute("src") || "";
    const lastSlash = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
    const base = s.substring(lastSlash + 1);
    return { src: s, base };
  }

  private realignClonesIfNeeded(notePath: string) {

    const leaves = this.app.workspace.getLeavesOfType("markdown").filter(leaf => {
      const view = leaf.view;
      return view instanceof MarkdownView && view.file?.path === notePath;
    });

    if (!leaves.length) return;

    const noteData = this.notes[notePath];
    if (!noteData?.clones) return;

    leaves.forEach(leaf => {
      const view = leaf.view;
      if (!(view instanceof MarkdownView)) return;
      const containerEl = view.containerEl;
      if (!containerEl) return;

      for (const [key, st] of Object.entries(noteData.clones)) {
        const host = containerEl.querySelector<HTMLElement>(`[data-ms-key="${CSS.escape(key)}"]`);
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

private findHostByKey(key: string): HTMLElement | null {
    const root = this.getActiveContainerEl();
    if (!root) return null;

    const hosts = root.querySelectorAll<HTMLElement>(`.ms-host[data-ms-key="${CSS.escape(key)}"]`);
    return hosts.length > 0 ? hosts[0] : null;
}
private enumerateHostsInNote(notePath: string) {
  const root = this.getActiveContainerEl();
  if (!root) return [];

  const nodes = root.querySelectorAll<HTMLElement>(
    ".internal-embed, .media-embed, .mx-media-embed, img, video, audio, .ms-note-host"
  );

  const list: Array<{ host: HTMLElement; media: HTMLElement; kind: MediaKind; key: string }> = [];

  nodes.forEach((hostLike) => {

    const isNote = hostLike.classList.contains("ms-note-host");

    const host = isNote
      ? (hostLike as HTMLElement)
      : (["IMG", "VIDEO", "AUDIO"].includes(hostLike.tagName)
          ? (hostLike.closest<HTMLElement>(".internal-embed, .media-embed, .mx-media-embed") ?? (hostLike as HTMLElement))
          : (hostLike as HTMLElement));

    const media = isNote
      ? (host.querySelector(".ms-note") as HTMLElement | null)
      : ((host.querySelector("video, img, audio") as HTMLElement | null) ?? host);
    if (!media) return;

    const tag = isNote ? "NOTE" : (media.tagName || "").toUpperCase();
    const kind: MediaKind =
      tag === "NOTE"  ? "note"  :
      tag === "IMG"   ? "image" :
      tag === "AUDIO" ? "audio" : "video";

    const { src } = isNote ? { src: "" } : this.getSrcAndBase(host, media as HTMLElement);
    let key = host.dataset.msKey;
    if (!key) key = isNote ? this.makeNoteKey() : this.makeEmbedKey(src);
    host.dataset.msKey = key;

    list.push({ host, media: media as HTMLElement, kind, key });
  });

  return list;
}

private addSizePresetsMenu(menu: Menu, notePath: string, key: string, host: HTMLElement, media: HTMLElement, kind: MediaKind) {
    menu.addItem((i) => {
        i.setTitle(t(this.app, "presets")).setIcon("expand");
        const sub = (i as any).setSubmenu();

        this.userPresets.forEach((val) => {
            sub.addItem((si: any) => {
                si.setTitle(String(val)).onClick(async () => {
                    await this.applyAndSaveSize(notePath, key, host, media as any, kind, { w: val });
                });

                const root = (si as any).dom as HTMLElement;
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

        sub.addItem((si: any) =>
            si.setTitle(t(this.app, "fit")).onClick(async () => {
                const parent = host.parentElement ?? host;
                const pw = Math.round(parent.clientWidth || parent.getBoundingClientRect().width);
                await this.applyAndSaveSize(notePath, key, host, media as any, kind, { w: pw });
            })
        );

        if (kind !== "audio") {
            sub.addItem((si: any) =>
                si.setTitle(t(this.app, "natural")).onClick(async () => {
                    if (kind === "image") {
                        const iw = (media as HTMLImageElement).naturalWidth || (media as any).clientWidth || 0;
                        const ih = (media as HTMLImageElement).naturalHeight || (media as any).clientHeight || 0;
                        await this.applyAndSaveSize(notePath, key, host, media as any, kind, { w: iw, h: ih });
                    } else {
                        const v = media as HTMLVideoElement;
                        const w = v.videoWidth > 0 ? v.videoWidth : (media as any).clientWidth || 0;
                        await this.applyAndSaveSize(notePath, key, host, media as any, kind, { w });
                    }
                })
            );
        }

        sub.addSeparator();

        [144, 480, 640, 720, 1280, 1920].forEach((sz) =>
            sub.addItem((si: any) =>  si.setTitle(String(sz)).onClick(async () => {
                await this.applyAndSaveSize(notePath, key, host, media as any, kind, { w: sz });
            }))
        );

        sub.addItem((si: any) =>
            si.setTitle(t(this.app, "add")).setIcon("plus").onClick(async () => {
                if (this.userPresets.length >= MAX_WIDTH_PRESETS) { new Notice("❌ " + t(this.app, "maxReached")); return; }
                new WidthPresetModal(this.app, async (n) => {
                    if (n == null) return;
                    await this.addUserPreset(n);
                    await this.applyAndSaveSize(notePath, key, host, media as any, kind, { w: n });
                    new Notice(t(this.app, "added", { n }));
                }).open();
            })
        );
    });
}

private addPositionPresetsMenu(menu: Menu, notePath: string) {
    menu.addItem((i) => {
        i.setTitle(t(this.app, "posPresets")).setIcon("save");
        const sub = (i as any).setSubmenu();

  sub.addItem((si: any) => {
            si.setTitle(t(this.app, "resetAll")).setIcon("rotate-ccw").onClick(async () => {
                await this.resetAll(notePath);
            });
        });

        sub.addItem((si: any) => {
    si.setTitle(t(this.app, "saveLayout")).setIcon("save").onClick(async (si: any) => {
                const layout = this.collectLayout(notePath);
                const arr = (this.layoutPresets[notePath] ??= []);
                if (arr.length >= MAX_LAYOUT_PRESETS) {
                    new Notice("✖ " + t(this.app, "layoutMax"));
                    return;
                }

                arr.push(JSON.parse(JSON.stringify(layout)));

                const names = (this.layoutNames[notePath] ??= []);
                const baseName = t(this.app, "layoutN", { n: '' }).replace('{n}', '').trim();
                let maxNum = 0;
                names.forEach(name => {
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
            sub.addItem((si: any) => {
                const names = (this.layoutNames[notePath] ??= []);
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
                            console.log('[Media Layout] Preset application cancelled: file changed');
                            this.presetTimerId = null;
                            return;
                        }

                        await this.applyLayout(notePath, layout);
                        this.applyCloneSettingsToAll();

                        await this.persistAll();

                        this.presetTimerId = null;
                    }, 500);

                });

                const root = (si as any).dom as HTMLElement;
                root.classList.add("ms-preset-item");

                const edit = root.createDiv({ cls: "ms-preset-edit" });
                edit.onclick = async (ev) => {
                    ev.stopPropagation();
                    new RenamePresetModal(this.app, names[idx] ?? "", async (val) => {
                        if (val == null) return;
                        names[idx] = val;
                        (si as any).dom.querySelector(".menu-item-title")?.setText(val);
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

        sub.addItem((si: any) => {
            si.setTitle(t(this.app, "copyLayout")).setIcon("copy").onClick(async () => {
                const noteData = this.notes[notePath];
                const presets = this.layoutPresets[notePath];
                const names = this.layoutNames[notePath];

                const hasNoteData = noteData && (Object.keys(noteData.originals).length || Object.keys(noteData.clones).length);
                const hasPresets = presets && presets.length > 0;

                if (!hasNoteData && !hasPresets) {
                    new Notice("No layout data to copy.");
                    return;
                }

                const dataToCopy = {
                    noteData: noteData ?? { originals: {}, clones: {} },
                    presets: presets ?? [],
                    names: names ?? [],
                };

                await navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
                new Notice("✔️ " + t(this.app, "layoutCopied"));
            });
        });

        sub.addItem((si: any) => {
            si.setTitle(t(this.app, "pasteLayout")).setIcon("paste").onClick(async () => {
                try {
                    const text = await navigator.clipboard.readText();
                    const data = JSON.parse(text);

                    if (data && data.noteData && Array.isArray(data.presets) && Array.isArray(data.names)) {
                        this.notes[notePath] = data.noteData;
                        this.layoutPresets[notePath] = data.presets;
                        this.layoutNames[notePath] = data.names;

                        await this.persistAll();
                        new Notice("✔️ " + t(this.app, "layoutPasted"));
                        this.scanActive();
                    } else {
                        new Notice("❌ " + t(this.app, "invalidLayoutData"));
                    }
                } catch (e) {
                    new Notice("❌ " + t(this.app, "pasteLayoutFailed"));
                    console.error("Media-Size paste error:", e);
                }
            });
        });
    });
}

private restoreClonesFromStore(notePath: string) {

  try {
    if (!notePath) return;
    const clones = this.notes[notePath]?.clones;
    if (!clones || !Object.keys(clones).length) return;

  this.debug('restoreClonesFromStore started', {
    notePath,
    cloneCount: Object.keys(clones).length,
    cloneKeys: Object.keys(clones)
  });

  const leaves = this.app.workspace.getLeavesOfType("markdown").filter(leaf => {
    const view = leaf.view;
    return view instanceof MarkdownView && view.file?.path === notePath;
  });

  this.debug('Found leaves for note', {
    notePath,
    leafCount: leaves.length
  });

  if (!leaves.length) return;

  leaves.forEach(leaf => {
    const view = leaf.view;
    if (!(view instanceof MarkdownView)) return;
    const containerEl = view.containerEl;
    if (!containerEl) return;

    const ATTEMPTS = 20;
    let left = ATTEMPTS;

    const tick = () => {

      const src = containerEl.querySelector(".markdown-source-view .cm-scroller") as HTMLElement | null;
      const read = containerEl.querySelector(".markdown-reading-view") as HTMLElement | null;

      const srcVisible = src ? (getComputedStyle(src.parentElement!).display !== 'none') : false;
      const readVisible = read ? (getComputedStyle(read).display !== 'none') : false;

      const root = readVisible ? (read || src) : (src || read);
      const isReadingModeActive = readVisible;

      this.debug('tick - searching for root', {
        notePath,
        hasSrc: !!src,
        hasRead: !!read,
        hasRoot: !!root,
        srcVisible,
        readVisible,
        isReadingModeActive,
        selectedRootClass: root?.className,
        attemptsLeft: left
      });

      if (!root) {
        if (--left > 0) { this.schedule(tick, 50); }
        return;
      }

      this.debug('Root found, calling ensureFloatLayer', {
        notePath,
        rootClass: root.className,
        isReadingModeActive
      });

      const mount = this.ensureFloatLayer(root);
      if (((mount as any).dataset.msNote || "") !== notePath) return;

      this.debug('Layer ready, scheduling clone restore', { notePath });

      this.schedule(async () => {

        const hosts = root.querySelectorAll<HTMLElement>(".ms-host[data-ms-key]");
        if (!hosts.length) {
          this.debug('No hosts found yet, retrying', { notePath, attemptsLeft: left });
          if (--left > 0) { this.schedule(tick, 50); }
          return;
        }

        this.debug('Found hosts, building anchor index', { notePath, hostCount: hosts.length });
        const anchorIndex = this.buildAnchorIndex(root);

        this.debug('Starting PARALLEL clone restoration', { notePath, totalClones: Object.keys(clones).length });

        const clonePromises: Promise<void>[] = [];

        for (const [cloneId, state] of Object.entries(clones)) {
          if (mount.querySelector(`[data-ms-key="${CSS.escape(cloneId)}"]`)) {
            this.debug('Clone already exists, skipping', { cloneId });
            continue;
          }
          const st: any = state;
          let parentKey: string | undefined = st.parentKey;
          const parentAnchor: string | undefined = st.parentAnchor;

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
        this.debug('All clones restored in parallel', { notePath, count: clonePromises.length });

        this.schedule(() => this.applyCloneSettingsToAll(), 150);
      }, this.cloneRestoreDelay);
    };

    this.schedule(tick, 50);
  });
  } catch (error) {
    console.error('[Media Layout] Failed to restore clones from store:', error);
    this.error('Failed to restore clones', { notePath, error: String(error) });
  }
}

private async tryRestoreSingleClone(notePath: string, cloneId: string, state: any, root: HTMLElement): Promise<void> {

  if (!root) return Promise.resolve();

  this.debug('tryRestoreSingleClone started', { cloneId, parentKey: state.parentKey });

  const mount = this.ensureFloatLayer(root);
  if (mount.querySelector(`[data-ms-key="${CSS.escape(cloneId)}"]`)) return Promise.resolve();

  let parentKey: string | undefined = state.parentKey;
  if (!parentKey || !root.querySelector(`.ms-host[data-ms-key="${CSS.escape(parentKey)}"]`)) {
    const a = state.parentAnchor as string | undefined;
    if (a) {
      const idx = this.buildAnchorIndex(root);
      const remap = idx.get(a);
      if (remap) {
        parentKey = state.parentKey = remap;
      }
    }
  }
  if (!parentKey) {
    this.warn('Parent not found for clone', { cloneId, originalParentKey: state.parentKey, parentAnchor: state.parentAnchor });
    return Promise.resolve();
  }

  this.debug('Parent found, creating clone from TFile', { cloneId, parentKey });

  let cloneHost: HTMLElement | null = null;
  let originalHost: HTMLElement | null = null;

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

  const newClonedMedia = (cloneHost.querySelector("video, img, audio") as HTMLMediaElement | HTMLImageElement);
  if (newClonedMedia) {
    const tag = (newClonedMedia.tagName || "").toUpperCase();
    const kind: MediaKind = tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";

    let w = state.w;
    let h = state.h;
    if (typeof w !== 'number' || typeof h !== 'number') {
      const savedCloneState = this.notes[notePath]?.clones?.[cloneId];
      if (savedCloneState) {
        w = savedCloneState.w;
        h = savedCloneState.h;
      }
    }

    const fullState = { ...state, w, h, link: (state as any).link, zIndex: (state as any).zIndex };

    this.debug('tryRestoreSingleClone: applying state', {
      cloneId,
      hasW: typeof fullState.w === 'number',
      hasH: typeof fullState.h === 'number',
      hasZIndex: typeof (fullState as any).zIndex === 'number',
      w: fullState.w,
      h: fullState.h,
      zIndex: (fullState as any).zIndex,
      zIndexFromCloneHost: cloneHost.style.zIndex
    });

    this.applyState(cloneHost, newClonedMedia, kind, fullState as MediaState);

    const actualZIndex = parseInt(cloneHost.style.zIndex || "", 10);
    if (typeof (state as any).zIndex === 'number' && actualZIndex !== (state as any).zIndex) {
      this.warn('tryRestoreSingleClone: z-index mismatch, forcing correct value', {
        cloneId,
        expectedZIndex: (state as any).zIndex,
        actualZIndex,
        fixing: true
      });
      cloneHost.style.zIndex = String((state as any).zIndex);
    }
  }

  return Promise.resolve();
}

private async createHostFromTFile(notePath: string, parentKey: string): Promise<HTMLElement | null> {
    const basename = this.extractBaseFromKey(parentKey);
    if (!basename) return null;

    const files = this.app.vault.getFiles().filter(f => f.basename === basename || f.name === basename);
    const file = files[0];
    if (!file) return null;

    const fileExt = file.extension.toLowerCase();
    const mediaTypes: Record<string, "image" | "video" | "audio"> = {
        'jpg': 'image', 'jpeg': 'image', 'png': 'image', 'gif': 'image', 'webp': 'image', 'svg': 'image',
        'mp4': 'video', 'webm': 'video', 'ogv': 'video', 'mov': 'video', 'mkv': 'video',
        'mp3': 'audio', 'wav': 'audio', 'm4a': 'audio', 'ogg': 'audio', '3gp': 'audio', 'flac': 'audio'
    };
    const kind = mediaTypes[fileExt];
    if (!kind) return null;

    const host = document.createElement('div');

    host.className = 'internal-embed media-embed is-loaded';

    let mediaEl: HTMLImageElement | HTMLVideoElement | HTMLAudioElement;
    const resourcePath = this.app.vault.adapter.getResourcePath(file.path);

    if (kind === 'image') {
        mediaEl = document.createElement('img');
        mediaEl.loading = 'eager';
    } else if (kind === 'video') {
        mediaEl = document.createElement('video');

        mediaEl.preload = 'metadata';
    } else {
        mediaEl = document.createElement('audio');

        mediaEl.preload = 'metadata';
    }

    mediaEl.src = resourcePath;
    host.appendChild(mediaEl);

    return host;
}

private layoutClonesInDock(notePath: string, side: "right"|"left"|"top" = "right") {
  const root = this.getAttachRoot();
  if (!root) return;
  const layer = this.ensureFloatLayer(root);
  const dock = this.ensureDock(root, side);
  const clones = Array.from(layer.querySelectorAll<HTMLElement>('[data-ms-parent-key]'));

  const gridY = 24;
  const pad   = 12;
  let y = pad, x = pad;

  clones.forEach((el, i) => {
    el.style.position = "absolute";
    el.style.left = "0"; el.style.top = "0";
    this.applyTransform(el, x, y);
    y += (el.getBoundingClientRect().height || 120) + gridY;
  });
}
private ensureDock(root: HTMLElement, side: "right"|"left"|"top" = "right"): HTMLElement {
  const layer = this.ensureFloatLayer(root);
  let dock = layer.querySelector<HTMLElement>(`.ms-dock.ms-dock--${side}`);
  if (!dock) {
    dock = document.createElement("div");
    dock.className = `ms-dock ms-dock--${side}`;
    layer.appendChild(dock);
  }
  return dock;
}

private async resetLayoutForActive(side: "right"|"left"|"top" = "right") {
  const notePath = this.getActiveNote()?.path ?? "";
  const root = this.getAttachRoot();
  if (!notePath || !root) return;

  for (const it of this.enumerateHostsInNote(notePath)) {
    const isClone = !!it.host.dataset.msParentKey;
    if (isClone) continue;
    it.host.dataset.msDetached = "0";
    it.host.dataset.msLocked = "0";
    this.reattach(it.host);

    this.applyTransform(it.host as any, 0, 0);
  }

  const layer = this.ensureFloatLayer(root);
  layer.querySelectorAll<HTMLElement>('[data-ms-parent-key]').forEach(el => el.remove());

  this.restoreClonesFromStore(notePath);
  this.layoutClonesInDock(notePath, side);

  await this.persistAll();
}

private collectLayout(notePath: string): Layout {
  const layout: Layout = {};
  const noteData = this.notes[notePath] ?? { originals: {}, clones: {} };
  const originals = noteData.originals ?? {};
  const clones    = noteData.clones ?? {};

  for (const it of this.enumerateHostsInNote(notePath)) {
    const isClone = !!it.host.dataset.msParentKey;
    const isNote  = it.kind === "note";

    if (!isClone && !isNote) continue;

    const r = this.readAbsRect(it.host);
    const prev = isClone ? (clones[it.key] ?? {}) : (originals[it.key] ?? {});

    if (isClone) {

      let fileName: string | undefined =
        (clones[it.key] as any)?.fileName ?? it.host.dataset.msFileName;

      if (!fileName) {
        const mediaEl = it.host.querySelector("img,video,audio") as
          | HTMLImageElement | HTMLVideoElement | HTMLAudioElement | null;
        if (mediaEl) {
          if (this.getSrcAndBase) {
            const { base } = this.getSrcAndBase(it.host, mediaEl);
            fileName = base || undefined;
          } else {
            const src = (mediaEl as any).currentSrc || (mediaEl as any).src || "";
            fileName = src ? src.split("/").pop() : undefined;
          }
        }
      }

      const hasRotate = typeof (clones[it.key] as any)?.rotate === 'number' && (clones[it.key] as any).rotate !== 0;
      const stateW = (clones[it.key] as any)?.w;
      const stateH = (clones[it.key] as any)?.h;
      const finalW = hasRotate && typeof stateW === 'number' ? stateW : r.w;
      const finalH = hasRotate && typeof stateH === 'number' ? stateH : r.h;

      layout[it.key] = {
        ...prev,
        parentKey: it.host.dataset.msParentKey,
        w: finalW, h: finalH, x: Math.round(r.x), y: Math.round(r.y),
        locked:   it.host.dataset.msLocked === "1",
        bgColor:  (clones[it.key] as any)?.bgColor,
        fileName,
        link: (clones[it.key] as any)?.link,
        rotate: (clones[it.key] as any)?.rotate,
      } as any;
    } else {

      const originals = noteData.originals || {};

      const hasRotateNote = typeof (originals[it.key] as any)?.rotate === 'number' && (originals[it.key] as any).rotate !== 0;
      const stateWNote = (originals[it.key] as any)?.w;
      const stateHNote = (originals[it.key] as any)?.h;
      const finalWNote = hasRotateNote && typeof stateWNote === 'number' ? stateWNote : r.w;
      const finalHNote = hasRotateNote && typeof stateHNote === 'number' ? stateHNote : r.h;

      layout[it.key] = {
        ...prev,
        w: finalWNote, h: finalHNote, x: Math.round(r.x), y: Math.round(r.y),
        detached: it.host.dataset.msDetached === "1",
        locked:   it.host.dataset.msLocked   === "1",
        rotate: (originals[it.key] as any)?.rotate,
      };
    }

    const zi = parseInt(it.host.style.zIndex || "", 10);
    if (Number.isFinite(zi)) (layout[it.key] as any).zIndex = zi;

    if (isNote && ((layout[it.key] as any).bgColor || (layout[it.key] as any).headerColor)) {
      delete (layout[it.key] as any).transparent;
    }
  }

  for (const [key, st] of Object.entries(originals)) {
    if (key.startsWith("note::") && !layout[key]) {
      layout[key] = { ...st };
    }
  }

  const currentClones = this.notes[notePath]?.clones ?? {};
  for (const [key, st] of Object.entries(currentClones)) {
    if (!layout[key]) layout[key] = st as any;
  }

  return layout;
}

private ensureNotesFromStore(notePath: string) {
  this.schedule(() => {
    if (!notePath) return;
    const attachRoot = this.getAttachRoot();
    if (!attachRoot) {
      this.warn('ensureNotesFromStore: no attachRoot found', {});
      return;
    }

    this.debug('ensureNotesFromStore starting', {
      notePath,
      attachRootClass: attachRoot.className
    });

    const layer = this.ensureFloatLayer(attachRoot);
    const saved = this.notes[notePath]?.originals ?? {};
    const noteKeys = Object.keys(saved).filter(k => k.startsWith("note::"));

    this.debug('Found notes to restore', {
      notePath,
      noteCount: noteKeys.length,
      noteKeys
    });

    for (const [key, st] of Object.entries(saved)) {
      if (!key.startsWith("note::")) continue;

      const exists = layer.querySelector<HTMLElement>(`.ms-note-host[data-ms-key="${CSS.escape(key)}"]`);
      if (exists) {
        this.debug('Note already exists, skipping', { key });
        continue;
      }

      this.debug('Creating note host', {
        key,
        x: st.x,
        y: st.y
      });

      const x = st.x ?? 0, y = st.y ?? 0;
      const host = this.createNoteHost(attachRoot, key, x, y, {
        w: st.w, h: st.h, txt: st.txt ?? "", fontSize: st.fontSize ?? 16
      });

      const media = host.querySelector(".ms-note") as HTMLElement;
      if (media) this.applyState(host, null, "note", st);
    }
  }, this.noteRestoreDelay);
}

private async resetAll(notePath: string) {
  if (!notePath) return;

  const noteData = this.notes[notePath];
  if (noteData) {

    noteData.clones = {};
    noteData.originals = {};

    const root = this.getActiveContainerEl();
    if (root) {
      root.querySelectorAll<HTMLElement>('[data-ms-parent-key]').forEach(el => el.remove());
    }
  }

  const root = this.getActiveContainerEl();
  if (root) {
    root.querySelectorAll<HTMLElement>('.ms-note-host').forEach(noteHost => {
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
      (it.media as any).style.width = "";
      (it.media as any).style.height = "";
      (it.media as any).style.objectFit = "";
      (it.media as any).style.objectPosition = "";
      (it.media as any).style.display = "";
    }
  }

  await this.persistAll();

  await new Promise<void>(r => setTimeout(r, 50));
  const activeRoot = this.getActiveContainerEl();
  if (activeRoot) {
    this.processRoot(activeRoot, notePath);
    this.applyCloneSettingsToAll();
  }
}

  private makeEmbedKey(src: string): string {
    const last = Math.max(src.lastIndexOf("/"), src.lastIndexOf("\\"));
    const base = last >= 0 ? src.substring(last + 1) : src;
    return base || "media";
  }

  private resolveTFile(notePath: string, linkPath: string): TFile | null {
    if (!linkPath) return null;
    return this.app.metadataCache.getFirstLinkpathDest(linkPath, notePath) ?? null;
  }

  private getActiveNote(): TFile | null {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    return view?.file ?? null;
  }

  private getActiveContainerEl(): HTMLElement | null {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    return view?.containerEl ?? null;
  }

  private isInReadingMode(el?: HTMLElement | null): boolean {
    if (el) {
      return !!el.closest('.markdown-reading-view, .markdown-preview-view');
    }
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) return false;

    return !!view.containerEl.querySelector('.markdown-reading-view');
  }

  private ensureOverlay(host: HTMLElement): HTMLElement {
    const overlay =
      host.querySelector<HTMLElement>(".ms-overlay") ??
      (() => {
        const d = document.createElement("div");
        d.className = "ms-overlay";
        host.appendChild(d);
        return d;
      })();
    return overlay;
  }

  private ensureHandles(overlay: HTMLElement, isClone: boolean = false, isNote: boolean = false): Record<"rb" | "lb" | "rt" | "lt" | "t" | "b" | "l" | "r", HTMLElement> {
    const need = (cls: string) =>
      overlay.querySelector<HTMLElement>(`.${cls.split(" ").join(".")}`) ??
      (() => {
        const h = document.createElement("div");
        h.className = cls;
        overlay.appendChild(h);
        return h;
      })();

    const hRB = need("ms-handle ms-handle--rb");
    const hLB = need("ms-handle ms-handle--lb");
    const hRT = need("ms-handle ms-handle--rt");
    const hLT = need("ms-handle ms-handle--lt");

    const needRotation = isClone || isNote;
    const hT = needRotation ? need("ms-handle ms-handle--t ms-handle--rotate") : null as any;
    const hB = needRotation ? need("ms-handle ms-handle--b ms-handle--rotate") : null as any;
    const hL = needRotation ? need("ms-handle ms-handle--l ms-handle--rotate") : null as any;
    const hR = needRotation ? need("ms-handle ms-handle--r ms-handle--rotate") : null as any;

    return { rb: hRB, lb: hLB, rt: hRT, lt: hLT, t: hT, b: hB, l: hL, r: hR };
  }

  private applyKindBaseStyles(host: HTMLElement, media: any, kind: MediaKind) {
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

      const videoAR = (isClone || hasME) ? 16 / 9 : this.getAR(kind, media as HTMLVideoElement);
      (host.style as any).aspectRatio = `${videoAR}`;
      media.style.width = "100%";
      media.style.height = "100%";
      (media.style as any).objectFit = "contain";
      (media.style as any).objectPosition = "center center";
      media.style.display = "block";
    } else if (kind === "audio") {
      (host.style as any).aspectRatio = "9 / 1";
      media.style.width = "100%";
      media.style.height = "100%";
      media.style.display = "block";
    } else if (kind === "image") {

(host.style as any).aspectRatio = "auto";
media.style.display = "block";

const isWrapped = host !== media;
if (isWrapped) {

  media.style.width = "100%";
  media.style.height = "100%";
  (media as any).style.objectFit = "fill";
}

host.classList.add("cm-ignore");
host.setAttribute("contenteditable", "false");
host.tabIndex = -1;

try { (media as HTMLImageElement).draggable = false; } catch {}
    } else if (kind === "note") {

    }
  }

  private revealInOS(full: string) {
    try {
      const w: any = window as any;
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
    } catch {}
  }

  private async convertUrlMediaToLocal(url: string, notePath: string): Promise<void> {
    try {
      this.info('Starting URL conversion', { url, notePath });
      new Notice(t(this.app, "urlMediaDownloading"));

      this.debug('Fetching URL via requestUrl', { url });
      const response = await requestUrl({ url });
      this.debug('Response received', { status: response.status });

      if (response.status !== 200) {
        new Notice(t(this.app, "urlMediaDownloadError", { status: response.status }));
        this.error('Download failed', { url, status: response.status });
        return;
      }

      const arrayBuffer = response.arrayBuffer;
      const contentType = response.headers['content-type'] || 'image/png';
      this.debug('Data received', { contentType, size: arrayBuffer.byteLength });

      const urlObj = new URL(url);
      let fileName = urlObj.pathname.split('/').pop() || 'image';
      this.debug('Original fileName', { fileName });

      try {
        fileName = decodeURIComponent(fileName);
        this.debug('Decoded fileName', { fileName });
      } catch (e) {
        this.warn('Failed to decode fileName, using as is', { fileName, error: e });
      }

      if (!fileName.includes('.')) {
        const ext = contentType.split('/')[1]?.split(';')[0] || 'png';
        fileName = `${fileName}.${ext}`;
      }

      fileName = fileName.replace(/[\\/:*?"<>|]/g, '_');
      this.debug('Cleaned fileName', { fileName });

      const attachmentFolder = (this.app.vault as any).getConfig("attachmentFolderPath") || "";
      this.debug('Attachment folder setting', { attachmentFolder });

      let savePath: string;
      if (attachmentFolder) {

        const cleanFolder = attachmentFolder.startsWith('/') ? attachmentFolder.slice(1) : attachmentFolder;
        savePath = normalizePath(cleanFolder + '/' + fileName);
      } else {

        const noteDir = notePath.substring(0, notePath.lastIndexOf('/')) || '';
        savePath = normalizePath((noteDir ? noteDir + '/' : '') + fileName);
      }
      this.debug('Save path calculated', { savePath });

      let finalPath = savePath;
      let counter = 1;
      while (await this.app.vault.adapter.exists(finalPath)) {
        const ext = fileName.substring(fileName.lastIndexOf('.'));
        const name = fileName.substring(0, fileName.lastIndexOf('.'));
        finalPath = savePath.replace(fileName, `${name}_${counter}${ext}`);
        counter++;
      }
      this.debug('Final path determined', { finalPath, counter });

      const folderPath = finalPath.substring(0, finalPath.lastIndexOf('/'));
      if (folderPath && !(await this.app.vault.adapter.exists(folderPath))) {
        this.debug('Creating folder', { folderPath });
        await this.app.vault.createFolder(folderPath);
      }

      this.debug('Writing file', { finalPath, size: arrayBuffer.byteLength });
      await this.app.vault.adapter.writeBinary(finalPath, arrayBuffer);
      this.info('File saved successfully', { finalPath });

      const view = this.app.workspace.getActiveViewOfType(MarkdownView);
      if (!view) {
        this.warn('No active MarkdownView found', { notePath });
        new Notice(t(this.app, "urlMediaFileSavedLinkFailed"));
        return;
      }

      const editor = view.editor;
      const content = editor.getValue();
      this.debug('Editor content retrieved', { contentLength: content.length });

      const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`!\\[([^\\]]*)\\]\\(${escapedUrl}\\)`, 'g');
      this.debug('Regex pattern created', { pattern: pattern.source });

      const baseName = finalPath.split('/').pop() || fileName;
      this.debug('Base name for link', { baseName });

      const newContent = content.replace(pattern, `[$1](${url}) ![[${baseName}]]`);

      if (newContent !== content) {
        this.info('Content changed, updating editor', { baseName });
        editor.setValue(newContent);
        new Notice(t(this.app, "urlMediaSuccess"));
      } else {
        this.warn('Content did not change - pattern not found', { url, pattern: pattern.source });
        new Notice(t(this.app, "urlMediaFileSavedPatternNotFound"));
      }

    } catch (error) {
      const errorMsg = (error instanceof Error) ? error.message : String(error);
      const errorStack = (error instanceof Error) ? error.stack : undefined;

      this.error('Error converting URL media', {
        url,
        notePath,
        error: errorMsg,
        stack: errorStack
      });
      new Notice(t(this.app, "urlMediaError", { error: errorMsg || t(this.app, "urlMediaUnknownError") }));
    }
  }

private isControlsProxyHost(host: HTMLElement, x: number, y: number): boolean {
  const wrap = this.controlsProxy.get(host)?.root;
  if (!wrap) return false;
  for (const el of Array.from(wrap.children) as HTMLElement[]) {
    const r = el.getBoundingClientRect();
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true;
  }
  return false;
}

private forwardFrom(
  ev: PointerEvent | MouseEvent,
  target: Element,
  type: 'pointerdown'|'pointerup'|'mousedown'|'mouseup'|'click',
  cx?: number,
  cy?: number,
) {
  const host = (ev.currentTarget as HTMLElement)?.closest(".ms-host") as HTMLElement | null;
  const isClone = !!host?.dataset.msParentKey;
  const media = host?.querySelector('video, audio') as HTMLMediaElement | null;
  const btn = target as HTMLElement;

  if (isClone && type !== "click") return;

  if (!isClone && btn?.isConnected && type === "click") {
    try { btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window })); return; } catch {}
  }

  if (type === "click" && media) {
    const hint = `${btn?.getAttribute("aria-label") || ""} ${btn?.getAttribute("title") || ""} ${btn?.className || ""}`.toLowerCase();

    if (/play|pause|toggle/.test(hint)) {
      media.paused ? media.play().catch(()=>{}) : media.pause();
      media.focus?.();
      return;
    }

    if (/mute/.test(hint)) { media.muted = !media.muted; media.focus?.(); return; }

    if (/full.?screen|fs/.test(hint)) {
      const box = host?.closest<HTMLElement>(".mejs__container") || host;
      if (box && !document.fullscreenElement) (box as any)?.requestFullscreen?.();
      else document.exitFullscreen?.();
      return;
    }

    const sb = btn.closest('.plyr__progress, .vjs-progress-holder, .mejs__time-slider') as HTMLElement | null;
    if (sb && !isNaN(media.duration)) {
      const r = sb.getBoundingClientRect();
      const frac = r.width ? (Math.min(Math.max((ev as MouseEvent).clientX - r.left, 0), r.width) / r.width) : 0;
      media.currentTime = media.duration * frac;
      return;
    }

    const vb = btn.closest('.plyr__volume, .vjs-volume-bar, .mejs__volume, input[type=range][aria-label*="volume" i]') as HTMLElement | null;
    if (vb) {
      const r = vb.getBoundingClientRect();
      const frac = r.width ? (Math.min(Math.max((ev as MouseEvent).clientX - r.left, 0), r.width) / r.width) : 0;
      media.volume = Math.min(1, Math.max(0, frac));
      return;
    }
  }
}

private makeNoteKey() {
  return `note::${Date.now()}::${Math.random().toString(36).slice(2, 8)}`;
}

private ensureParentAnchor(host: HTMLElement): HTMLElement | null {
  const p = host.parentElement as HTMLElement | null;
  if (!p) return null;
  const cs = getComputedStyle(p);
  if (cs.position === "static") {
    p.style.position = "relative";
  }
  return p;
}
private applyAudioHandlesToAll(): void {
  const root = this.getActiveContainerEl();
  if (!root) return;
  root.querySelectorAll<HTMLElement>('.ms-host[data-ms-kind="audio"]').forEach(h => {
    h.dataset.msShowHandles = this.cloneShowAudioHandles ? 'true' : 'false';
  });
}
private ensureLocalBg(host: HTMLElement): HTMLElement {
    let localBg = host.querySelector<HTMLElement>('.ms-local-bg');
    if (!localBg) {
        localBg = document.createElement('div');
        localBg.className = 'ms-local-bg';
        Object.assign(localBg.style, {
            position: 'absolute',
            inset: '0',
            zIndex: '1',
            borderRadius: 'inherit'
        } as CSSStyleDeclaration);
        host.insertBefore(localBg, host.firstChild);
    }
    return localBg;
}

private ensureMediaBg(host: HTMLElement): HTMLElement {
    let mediaBg = host.querySelector<HTMLElement>('.ms-media-bg');
    if (!mediaBg) {
        mediaBg = document.createElement('div');
        mediaBg.className = 'ms-media-bg';
        Object.assign(mediaBg.style, {
            position: "absolute", left: "0", top: "0", width: "100%", height: "100%",
            zIndex: "-1",
            borderRadius: "inherit",
            backgroundColor: this.meBgColor,
        } as CSSStyleDeclaration);
        host.insertBefore(mediaBg, host.firstChild);
    }
    return mediaBg;
}

public applyCssVariables() {
  const root = document.documentElement;
  const color = /^#([0-9a-f]{6})$/i.test(this.meBgColor) ? this.meBgColor : "#242424";
  const delay = Math.max(0, this.cloneHideDelay).toFixed(2);
  
  root.style.setProperty('--ms-media-bg-color', color);
  root.style.setProperty('--ms-clone-hide-delay', `${delay}s`);
  root.style.setProperty('--ms-handles-opacity', this.showHandlesOnHover ? '1' : '0');
  root.style.setProperty('--ms-modal-animation', this.enableModalAnimation ? 'enabled' : 'disabled');
}

private async setMediaBgColor(hex: string, isLocal: boolean, host?: HTMLElement, notePath?: string, key?: string) {
    if (!isLocal) {
        this.meBgColor = /^#([0-9a-f]{6})$/i.test(hex) ? hex.toUpperCase() : "#242424";
        this.applyCssVariables();
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

private async maybeDetach(notePath: string, key: string, host: HTMLElement) {
  if (!notePath || !key) return;
  if (host.dataset.msDetached === "1") return;

  const parent = host.parentElement as HTMLElement | null;
  if (!parent) return;

  const rNow = this.readAbsRect(host);
  const x = Math.round(rNow.x || 0);
  const y = Math.round(rNow.y || 0);

  this.ensureParentAnchor(host);
  host.style.position = "absolute";
  host.style.left = "0px";
  host.style.top  = "0px";
  host.dataset.msDetached = "1";
  this.applyTransform(host, x, y);

  const r = this.readAbsRect(host);
  const currentState = this.loadStateWithFallback(notePath, key, "") ?? {};
  await this.saveState(notePath, key, {
    ...currentState,
    detached: true,
    locked:   host.dataset.msLocked === "1",
  });
}

private reattach(host: HTMLElement) {
  host.dataset.msDetached = "0";
  host.style.position = "relative";
  host.style.left = "";
  host.style.top  = "";
  this.applyTransform(host, 0, 0);

  const p = host.parentElement as HTMLElement | null;
  if (p && p.dataset.msAnchor === "1") {
    p.style.position = "";
    delete p.dataset.msAnchor;
  }
}

private createCleanCloneElement(originalHost: HTMLElement): HTMLElement {
    const mediaToClone = originalHost.querySelector("video, audio, img");

    if (mediaToClone && (mediaToClone.tagName === 'VIDEO' || mediaToClone.tagName === 'AUDIO')) {
        const cloneHost = document.createElement("div");
        cloneHost.className = originalHost.className;
        cloneHost.classList.remove("is-loaded");

        const mediaClone = mediaToClone.cloneNode(true) as HTMLMediaElement;
        mediaClone.removeAttribute("id");
        mediaClone.removeAttribute("data-mx-id");
        cloneHost.appendChild(mediaClone);

        return cloneHost;
    }

    const cloneHost = originalHost.cloneNode(true) as HTMLElement;
    cloneHost.querySelectorAll('.ms-overlay, .ms-proxy-ctrl, .ms-handle, .ms-dock, .ms-clone-controls').forEach(n => n.remove());
    ['msInit','msKind','msFree','msLocked','msDetached','msKey', 'data-mx-id'].forEach(a => delete (cloneHost.dataset as any)[a]);
    cloneHost.removeAttribute("id");
    cloneHost.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

    cloneHost.style.zIndex = "";

    return cloneHost;
}

private createCloneHost(
  container: HTMLElement,
  cloneHost: HTMLElement,
  key: string,
  parentKey: string,
  x: number,
  y: number,
  initialize = true,
  fileName?: string
) {
  cloneHost.dataset.msKey = key;
  cloneHost.dataset.msParentKey = parentKey;
  const notePath = this.getActiveNote()?.path ?? "";
  if (!notePath) return;

  (cloneHost as any).dataset.msNote = notePath;

  if (fileName) {
    cloneHost.dataset.msFileName = fileName;
  }

  const parentHost = container.querySelector<HTMLElement>(`.ms-host[data-ms-key="${CSS.escape(parentKey)}"]`);
  if (parentHost) {
    const anchor = this.ensureOriginalAnchor(parentHost);
    (cloneHost as any).dataset.msParentAnchor = anchor;

    try {
      const note = (this.notes[notePath] ||= { originals: {}, clones: {} });
      const st = (note.clones[key] ||= {

        parentKey: parentKey,
        x: 0, y: 0, w: 0, h: 0
      });
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
    cloneHost.style.zIndex = typeof existingZIndex === 'number' ? String(existingZIndex) : "2900";

    this.debug('createCloneHost: z-index set', {
      key,
      hasExistingZIndex: typeof existingZIndex === 'number',
      zIndex: cloneHost.style.zIndex
    });
    cloneHost.style.transform = "";
    cloneHost.style.willChange = "transform";
    cloneHost.style.pointerEvents = "auto";

  this.debug('Clone host element created', { key, x, y });

  const mount = this.ensureFloatLayer(container);
  mount.appendChild(cloneHost);

  if (this.enableDebugMode) {
    const sizer = mount.parentElement;
    const leafCount = this.app.workspace.getLeavesOfType("markdown").length;

    if (!sizer) {
      this.warn('createCloneHost: NO SIZER FOUND!', {
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
      const hasValidSize = existingState && typeof existingState.w === 'number' && typeof existingState.h === 'number';

      const hasRotate = typeof (existingState as any)?.rotate === 'number' && (existingState as any).rotate !== 0;
      let fallbackW: number, fallbackH: number;

      if (hasRotate) {

        fallbackW = parseFloat(cloneHost.style.width) || cloneHost.offsetWidth || 480;
        fallbackH = parseFloat(cloneHost.style.height) || cloneHost.offsetHeight || 270;
      } else {

        const rect = cloneHost.getBoundingClientRect();
        fallbackW = rect.width || 480;
        fallbackH = rect.height || 270;
      }

      const currentZIndex = parseInt(cloneHost.style.zIndex || "", 10);
      const zIndexToSave = Number.isFinite(currentZIndex) ? currentZIndex : (existingState as any)?.zIndex;

      this.debug('createCloneHost setTimeout: saving z-index', {
        key,
        currentZIndexFromDOM: currentZIndex,
        existingZIndexFromState: (existingState as any)?.zIndex,
        zIndexToSave,
        hasRotate,
        sizeSaved: hasValidSize
      });

      await this.saveState(notePath, key, {
          ...(existingState || {}),
          parentKey: parentKey,
          w: hasValidSize ? existingState.w : fallbackW,
          h: hasValidSize ? existingState.h : fallbackH,
          fileName: cloneHost.dataset.msFileName || (existingState as any)?.fileName,
          x: x,
          y: y,
          link: (existingState as any)?.link,
          zIndex: zIndexToSave,
          detached: true
      });
  }, 100);

  if (!initialize) return;

  const media = (cloneHost.querySelector("video, img, audio") as any) ??
                (["IMG", "VIDEO", "AUDIO"].includes(cloneHost.tagName) ? cloneHost : null);
  if (!media) return;

  if (media instanceof HTMLMediaElement) {
    media.controls = false;
  }

  if (media.tagName === "VIDEO") {

    if (!media.parentElement?.classList.contains('ms-media-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'ms-media-wrapper';
        wrapper.style.position = 'relative';
        wrapper.style.zIndex = '2';
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
        cloneHost.insertBefore(wrapper, media).appendChild(media);
    }
    (media as HTMLVideoElement).style.objectFit = "contain";

    (media as HTMLVideoElement).style.aspectRatio = "16 / 9";
    (media as HTMLVideoElement).style.willChange = "transform";

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
  const kind: MediaKind = tag === "IMG" ? "image" : tag === "AUDIO" ? "audio" : "video";

  const defaultWidth = 480;
  let defaultHeight: number | undefined = undefined;
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
  const handles = this.ensureHandles(overlay, true);

  const savedState = this.notes[notePath]?.clones?.[key];
  if (savedState && (savedState as any).bgColor === 'transparent') {

  } else
  if (kind === "audio" || (kind === "video" && cloneHost.dataset.msParentKey)) {
    const bg = document.createElement("div");
    bg.className = "ms-media-bg";
    Object.assign(bg.style, {
      position: "absolute", left: "0", top: "0", width: "100%", height: "100%",
      zIndex: "-1",
      borderRadius: "inherit",
      backgroundColor: this.meBgColor,
    } as CSSStyleDeclaration);

    if (!media.parentElement?.classList.contains('ms-media-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'ms-media-wrapper';
    }

    if (kind === "audio") {
        bg.style.top = "auto";
        bg.style.bottom = "0";
        bg.style.height = "70px";
    }
    cloneHost.insertBefore(bg, cloneHost.firstChild);
  }

  cloneHost.append(overlay);

  this.mountControlsForHost(cloneHost, media as HTMLElement);

  this._attachDragMoveHandler(cloneHost, overlay, notePath, key, kind);
  this._attachResizeHandlers(cloneHost, overlay, handles, notePath, key, kind, media);

  cloneHost.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const existingMenus = document.querySelectorAll('.menu.media-size-clone-menu');
    existingMenus.forEach(menu => {
        const menuInstance = menu as any;
        if (menuInstance.app && typeof menuInstance.app.workspace.trigger === 'function') {
            menuInstance.hide();
        }
    });

    this.lastCtxEvt = e;
    const menu = new Menu();

    this.app.workspace.trigger("editor-menu", menu, null, this.app.workspace.getActiveViewOfType(MarkdownView));

    menu.showAtMouseEvent(e);
    (menu as any).dom.addClass('media-size-clone-menu');
  });
}

private schedule(fn: () => void, ms: number): number {
  const id = window.setTimeout(() => {
    this.pendingTimers.delete(id);
    try { fn(); } catch (e) { console.error(e); }
  }, ms);
  this.pendingTimers.add(id);
  return id;
}
private cancelScheduled() {
  this.pendingTimers.forEach((id) => clearTimeout(id));
  this.pendingTimers.clear();
}

private async hardCleanupForSwitch(prevNotePath?: string) {
  this.debug('hardCleanupForSwitch started', { prevNotePath });

  this.cancelScheduled?.();

  try { this.disconnectObservers?.(); } catch {}

  if (prevNotePath) {

    const leaves = this.app.workspace.getLeavesOfType("markdown").filter(leaf => {
      const view = leaf.view;
      return view instanceof MarkdownView && view.file?.path === prevNotePath;
    });

    if (leaves.length) {
      const noteData = (this.notes[prevNotePath] ??= { originals: {}, clones: {} });

      leaves.forEach(leaf => {
        const view = leaf.view;
        if (!(view instanceof MarkdownView)) return;
        const containerEl = view.containerEl;
        if (!containerEl) return;

        const src = containerEl.querySelector(".markdown-source-view .cm-scroller") as HTMLElement | null;
        const read = containerEl.querySelector(".markdown-reading-view") as HTMLElement | null;
        const root = src || read;
        if (!root) return;

      const floatLayer = root.querySelector('.ms-float-layer');
      if (floatLayer) {
        floatLayer.querySelectorAll<HTMLElement>('[data-ms-key]').forEach(host => {
          const key = host.dataset.msKey;
          if (!key) return;

          const isClone = !!host.dataset.msParentKey;
          const isNote = host.classList.contains('ms-note-host');

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

      root.querySelectorAll<HTMLElement>('.ms-host[data-ms-detached="1"]').forEach(host => {
        const key = host.dataset.msKey;
        if (!key) return;

        const isClone = !!host.dataset.msParentKey;
        const isNote = host.classList.contains('ms-note-host');
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

      root.querySelectorAll<HTMLElement>('.ms-host:not([data-ms-detached="1"])').forEach(host => {
        const key = host.dataset.msKey;
        if (!key) return;

        const isClone = !!host.dataset.msParentKey;
        const isNote = host.classList.contains('ms-note-host');
        if (isClone || isNote) return;

        try {
          const originals = noteData.originals;

          if (originals[key]) {

            originals[key].free = host.dataset.msFree === "1";

            if (!originals[key].w || !originals[key].h || originals[key].w < 1 || originals[key].h < 1) {

              const domRect = host.getBoundingClientRect();
              if (domRect.width > 0 && domRect.height > 0) {
                originals[key].w = domRect.width;
                originals[key].h = domRect.height;
                console.warn(`[Media Layout] Restored invalid size for ${key} from DOM`);
              }
            }
          }
        } catch (e) {
          console.warn(`[MS] Failed to process in-flow original ${key}:`, e);
        }
      });
      });

      await this.persistAll();
    }
  }

  const allHosts = document.querySelectorAll<HTMLElement>('.ms-host[data-ms-key]');
  allHosts.forEach(host => {
    const proxy = this.controlsProxy.get(host);
    if (proxy) {
      try {
        proxy.ro.disconnect();
        proxy.root.remove();
        this.controlsProxy.delete(host);
      } catch (e) {
        console.warn('[Media Layout] Failed to cleanup controlsProxy:', e);
      }
    }
  });

  const rootToClean = this.getAttachRoot?.();
  rootToClean?.querySelector('.ms-float-layer')?.replaceChildren();

}

private createNoteHost(
  container: HTMLElement,
  key: string,
  x: number,
  y: number,
  st?: { w?: number; h?: number; txt?: string; fontSize?: number; bgColor?:string; headerColor?: string; focus?: boolean; }
) {
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

  const isReadingMode = this.isInReadingMode(container);
  body.setAttribute("contenteditable", isReadingMode ? "false" : "true");
  if (isReadingMode) {
    body.style.cursor = "default";
  }

  const stateForColor = st ?? this.notes[this.getActiveNote()?.path ?? ""]?.originals?.[key];
  if (stateForColor?.bgColor) {
    note.style.backgroundColor = stateForColor.bgColor;
  }
  if (stateForColor?.headerColor) {
    top.style.backgroundColor = stateForColor.headerColor;
  }
  body.textContent = st?.txt ?? "";
  body.style.fontSize = `${Math.max(10, st?.fontSize ?? 16)}px`;
  let saveTimer: any = null;

const flushText = async () => {
  const notePath = (host.dataset.msNote || "") as string;

  if (!notePath) return;
  await this.saveState(notePath, key, {
    txt: body.textContent ?? "",
    fontSize: parseFloat(body.style.fontSize) || 16,
  });
};

const scheduleTextSave = () => {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flushText, 300);
};

if (!isReadingMode) {
  body.addEventListener("input", scheduleTextSave);
  body.addEventListener("blur", () => {
    clearTimeout(saveTimer);
    flushText();
  });
}

  note.append(top, body);
  host.appendChild(note);
  const mount = this.ensureFloatLayer(container);
mount.appendChild(host);

  const overlay = this.ensureOverlay(host);
  this.ensureHandles(overlay, false, true);
  host.append(overlay);

  let sx=0, sy=0, ox=0, oy=0, dragging=false;

  const dragController = new AbortController();

  if (!isReadingMode) {
  top.addEventListener("pointerdown", (e) => {

  if ((e as PointerEvent).button !== 0) return;
  e.preventDefault();
  e.stopPropagation();
  dragging = true;
  const currentRect = this.readAppliedRect(host);
  ox = currentRect.x || 0;
  oy = currentRect.y || 0;
  sx = (e as PointerEvent).clientX; sy = (e as PointerEvent).clientY;
});
  const onMove = (e: PointerEvent) => {
    if (!dragging) return;
    const nx = ox + (e.clientX - sx);
    const ny = oy + (e.clientY - sy);
    this.applyTransform(host, nx, ny);
  };
  const onUp = async () => {
    if (!dragging) return;
    dragging = false;
    const notePath = (host.dataset.msNote || "") as string;
    if (!notePath) return;
    const r = this.readAbsRect(host);
    await this.saveState(notePath, key, { w: r.w, h: r.h, x: r.x, y: r.y, txt: body.textContent ?? "", fontSize: parseFloat(body.style.fontSize) || 16 });
  };
  window.addEventListener("pointermove", onMove, { capture: true, signal: dragController.signal });
  window.addEventListener("pointerup", onUp, { capture: true, signal: dragController.signal });
  }

  if (!isReadingMode) {
  host.addEventListener("wheel", async (e) => {
    if (!e.ctrlKey && !e.shiftKey) return;
    e.preventDefault();
    const cur = parseFloat(body.style.fontSize) || 16;
    const delta = e.shiftKey ? 1 : 10;
    const next = Math.max(8, Math.min(300, cur + (e.deltaY < 0 ? delta : -delta)));
    body.style.fontSize = `${next}px`;
    const notePath = (host.dataset.msNote || "") as string;
    if (notePath) {
      const r = this.readAbsRect(host);
      await this.saveState(notePath, key, { w: r.w, h: r.h, x: r.x, y: r.y, txt: body.textContent ?? "", fontSize: next });
    }
  }, { passive: false });
  }

  if (isReadingMode) {
    close.style.display = "none";
  } else {
  close.onclick = async (ev) => {
    ev.stopPropagation();
    const notePath = (host.dataset.msNote || "") as string;

    dragController.abort();

    host.remove();
    if (notePath) {
      delete this.notes[notePath]?.originals?.[key];
      await this.persistAll();
    }
  };
  }

  const cleanupObserver = new MutationObserver(() => {
    if (!document.contains(host)) {
      dragController.abort();
      cleanupObserver.disconnect();
    }
  });
  if (host.parentElement) {
    cleanupObserver.observe(host.parentElement, { childList: true });
  }

  if (!isReadingMode) {
  host.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const key = host.dataset.msKey;
    if (key && this.selectedKeys.has(key) && this.selectedKeys.size > 1) {
      const menu = new Menu();

      this.app.workspace.trigger("editor-menu", menu, null, this.app.workspace.getActiveViewOfType(MarkdownView));

      menu.showAtMouseEvent(e);
      return;
    }

    const menu = new Menu();

    menu.addItem((mi) => {
      mi.setTitle(t(this.app, "bgColor")).setIcon("palette");
      mi.onClick(() => {
        const tr = (k: string) => t(this.app, k);
        const notePath = host.dataset.msNote;
        if (!notePath || !key) return;
        const currentState = this.notes[notePath]?.originals?.[key] ?? {};
        const initialColor = currentState.bgColor || "#242424";

        new BgColorModal(this.app, initialColor, async (result) => {
          const { hex, removeBg, applyToHeader } = result;
          const noteBody = host.querySelector<HTMLElement>(".ms-note");
          const noteHeader = host.querySelector<HTMLElement>(".ms-note-top");

          if (hex === "#262626" && !applyToHeader) {
            if (noteHeader) noteHeader.style.backgroundColor = "";
            await this.saveState(notePath, key, { headerColor: undefined });
          }
          if (removeBg) {

            host.classList.add("ms-note-transparent");
            await this.saveState(notePath, key, { transparent: true, bgColor: undefined, headerColor: undefined });
          } else {

            host.classList.remove("ms-note-transparent");
            const stateUpdate: Partial<OriginalState> = { transparent: false };
            if (applyToHeader) {
              if (noteHeader) noteHeader.style.backgroundColor = hex;
              stateUpdate.headerColor = hex;
            } else {
              if (noteBody) noteBody.style.backgroundColor = hex;
              stateUpdate.bgColor = hex;
            }
            await this.saveState(notePath, key, stateUpdate);
          }
        }, tr, { isNoteBox: true }).open();
      });
    });
    menu.addItem((mi) => {
      mi.setTitle(t(this.app, "changeTextColor")).setIcon("highlighter");
      mi.onClick(() => {
        const tr = (k: string) => t(this.app, k);
        const notePath = host.dataset.msNote;
        if (!notePath || !key) return;
        const currentState = this.notes[notePath]?.originals?.[key] ?? {};
        const initialColor = currentState.textColor || "#FFFFFF";
        const hasStroke = currentState.textStroke || false;

        const colorToEdit = hasStroke ? (currentState.textStrokeColor || initialColor) : initialColor;
        new BgColorModal(this.app, initialColor, async (result) => {
          const { hex, addStroke } = result;
          const currentFillColor = body.style.color || currentState.textColor || "#FFFFFF";
          body.classList.toggle("ms-note-text-stroked", addStroke);
          if (addStroke) {
            body.style.setProperty('--note-stroke-color', hex);
            await this.saveState(notePath, key, { textStroke: true, textStrokeColor: hex, textColor: currentFillColor });
          } else {
            body.style.color = hex;
            await this.saveState(notePath, key, { textStroke: false, textColor: hex });
          }
        }, tr, { isTextColor: true, initialStrokeState: hasStroke } as any).open();
      });
    });
    menu.addSeparator();
    menu.addItem((item) => {
      item.setTitle(t(this.app, "deleteNote")).setIcon("trash").onClick(async () => {
        const notePath = (host.dataset.msNote || "") as string;
        host.remove();
        if (notePath && key) {
          delete this.notes[notePath]?.originals?.[key];
          await this.persistAll();
        }
      });
    });
    menu.showAtMouseEvent(e);
  });
  }

   if (st?.focus && !isReadingMode) {
    setTimeout(() => body.focus(), 0);
  }

  this.processRoot(this.getActiveContainerEl()!, this.getActiveNote()?.path ?? "");

  return host;
}

  private findScrollableParents(startEl: HTMLElement | null): { hScroll: HTMLElement | null, vScroll: HTMLElement | null } {
    let hScroll: HTMLElement | null = null;
    let vScroll: HTMLElement | null = null;
    let el = startEl;

    while (el && el !== document.body && (!hScroll || !vScroll)) {
      const style = getComputedStyle(el);
      if (!hScroll && (style.overflowX === 'auto' || style.overflowX === 'scroll') && el.scrollWidth > el.clientWidth) {
        hScroll = el;
      }
      if (!vScroll && (style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
        vScroll = el;
      }
      el = el.parentElement;
    }

    return { hScroll: hScroll ?? this.getAttachRoot(), vScroll: vScroll ?? this.getAttachRoot() };
  }

  private _attachDragMoveHandler(host: HTMLElement, overlay: HTMLElement, notePath: string, key: string, kind: MediaKind) {
    const startMove = (e: PointerEvent | MouseEvent) => {

      if (this.isInReadingMode(host)) {
        return;
      }

                  const isClone = !!host.dataset.msParentKey;
      const isNote = kind === 'note';

      if ((e.ctrlKey || e.metaKey) && (isClone || isNote)) {
        this.handleSelectionClick(e, key);
        return;
      }
      const t = e.target as HTMLElement | null;
      if (t?.closest(".ms-clone-controls, .ms-cc-btn, .ms-cc-timeline, .ms-proxy-btn, .ms-proxy-ctrl, .ms-handle, .ms-note-body")) {
        return;
      }
      if ((e as MouseEvent).button !== 0) return;

      if (kind !== "note" && !isClone && host.dataset.msDetached !== "1") return;
      if (host.dataset.msLocked === "1") return;

      const sx = (e as PointerEvent).clientX ?? (e as MouseEvent).clientX ?? 0;
      const sy = (e as PointerEvent).clientY ?? (e as MouseEvent).clientY ?? 0;

      if (this.isControlsTarget(t) || this.isControlsPoint(host, sx, sy) || this.isControlsProxyHost(host, sx, sy)) return;

      const isMovingGroup = this.selectedKeys.has(key) && this.selectedKeys.size > 1;
      const groupElements: { host: HTMLElement, x0: number, y0: number }[] = [];

      if (isMovingGroup) {
        this.selectedKeys.forEach(selectedKey => {
          const el = this.findHostByKey(selectedKey);
          if (el) {
            const elCur = this.readAbsRect(el);
            groupElements.push({ host: el, x0: elCur.x || 0, y0: elCur.y || 0 });
          }
        });
      }

      let moved = false;

      const isDetachedOriginal = !isClone && kind !== 'note' && host.dataset.msDetached === "1";
      const cur = isDetachedOriginal ? this.readAbsOrig(host) : this.readAbsRect(host);
      let x0 = cur.x || 0;
      let y0 = cur.y || 0;

      const controller = new AbortController();

      const onMove = (ev: PointerEvent | MouseEvent) => {
        const dx = ((ev as PointerEvent).clientX ?? (ev as MouseEvent).clientX ?? 0) - sx;
        const dy = ((ev as PointerEvent).clientY ?? (ev as MouseEvent).clientY ?? 0) - sy;

        if (!moved && Math.hypot(dx, dy) < 4) return;

        if (!moved) {
          moved = true;
          overlay.classList.add("--dragmove");
          document.body.classList.add("ms-noselect");
        }
        ev.preventDefault();

        if (isMovingGroup) {
          groupElements.forEach(item => {
            let nx = item.x0 + dx, ny = item.y0 + dy;
            if ((ev as PointerEvent).shiftKey) { nx = snap(nx, 20); ny = snap(ny, 20); }
            this.applyTransform(item.host, nx, ny);
          });
        } else {
          let nx = x0 + dx, ny = y0 + dy;
          if ((ev as PointerEvent).shiftKey) { nx = snap(nx, 20); ny = snap(ny, 20); }
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
            const itemKey = item.host.dataset.msKey!;
            await this.saveState(notePath, itemKey, { x: rect.x || 0, y: rect.y || 0 });
          }
        } else {
        const rect = this.readAbsRect(host);

        const bucket = isClone ? this.notes[notePath]?.clones : this.notes[notePath]?.originals;
        const existingRotate = bucket?.[key]?.rotate;
        const hasRotate = (isClone && typeof existingRotate === 'number') ||
                          (isNote && typeof existingRotate === 'number');
        const stateToSave: Partial<OriginalState> = {
          x: rect.x || 0,
          y: rect.y || 0,
          free: host.dataset.msFree === "1",
          detached: host.dataset.msDetached === "1" || isClone,
          locked: host.dataset.msLocked === "1",
        };

        if (!hasRotate) {
          stateToSave.w = rect.w;
          stateToSave.h = rect.h;
        } else {

          (stateToSave as any).rotate = existingRotate;
        }

        if (kind === 'note') {
          const body = host.querySelector<HTMLElement>('.ms-note-body');
          stateToSave.txt = body?.textContent ?? '';
          stateToSave.fontSize = body ? (parseFloat(body.style.fontSize) || 16) : 16;
        }

        if (isClone && (kind === 'video' || kind === 'audio')) {
          (stateToSave as Partial<CloneState>).fileName = host.dataset.msFileName;
        }
        await this.saveState(notePath, key, stateToSave);
      }};

      window.addEventListener("pointermove", onMove, { capture: true, signal: controller.signal });
      window.addEventListener("pointerup", onUp, { capture: true, signal: controller.signal });
    };

    host.addEventListener("pointerdown", startMove, { capture: true });
  }

  private _attachResizeHandlers(host: HTMLElement, overlay: HTMLElement, handles: Record<"rb" | "lb" | "rt" | "lt" | "t" | "b" | "l" | "r", HTMLElement>, notePath: string, key: string, kind: MediaKind, media: HTMLElement | null) {

    if (this.isInReadingMode(host)) {
      return;
    }

    type Anchor = { h: "left" | "right"; v: "top" | "bottom" };
    const map: Record<string, Anchor> = { lt: { h: "left", v: "top" }, rt: { h: "right", v: "top" }, lb: { h: "left", v: "bottom" }, rb: { h: "right", v: "bottom" } };
    if (this.selectedKeys.size > 1) {
      return;
    }
    (["lt", "rt", "lb", "rb"] as const).forEach((keyH) => {
      const handle = handles[keyH];
      const startDrag = (e: PointerEvent | MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        overlay.classList.add("--drag");
        document.body.classList.add("ms-noselect");

        const startX = (e as PointerEvent).clientX;
        const startY = (e as PointerEvent).clientY;
        const r0 = host.getBoundingClientRect();

        const isClone = !!host.dataset.msParentKey;
        const isDetachedOriginal = !isClone && kind !== 'note' && host.dataset.msDetached === "1";
        const cur = isDetachedOriginal ? this.readAbsOrig(host) : this.readAbsRect(host);
        const startW = cur.w ?? r0.width;
        const startH = cur.h ?? r0.height;
        const startXoff = cur.x || 0;
        const startYoff = cur.y || 0;
        const from = map[keyH];

        const hasME = this.isMediaExtendedActive(host);
        const baseAR = kind === "image" ? (startW / Math.max(1, startH))
          : kind === "video" ? ((isClone || hasME) ? 16 / 9 : (media ? this.getAR(kind, media as HTMLVideoElement) : 16 / 9))
          : kind === "audio" ? 9 / 1
          : 0;

        const controller = new AbortController();

        const rotateAngle = isClone
          ? (this.notes[notePath]?.clones?.[key]?.rotate || 0)
          : (kind === 'note' ? (this.notes[notePath]?.originals?.[key]?.rotate || 0) : 0);
        const hasRotate = rotateAngle !== 0;

        const onMove = (ev: PointerEvent | MouseEvent) => {
          ev.preventDefault();
          let dx = (ev as PointerEvent).clientX - startX;
          let dy = (ev as PointerEvent).clientY - startY;

          if (hasRotate) {
            const angleRad = (rotateAngle * Math.PI) / 180;
            const cos = Math.cos(angleRad);
            const sin = Math.sin(angleRad);

            const rotatedDx = dx * cos + dy * sin;
            const rotatedDy = -dx * sin + dy * cos;
            dx = rotatedDx;
            dy = rotatedDy;
          }

          const alt = (ev as PointerEvent).altKey;
          const shift = (ev as PointerEvent).shiftKey;
          const ctrl = (ev as PointerEvent).ctrlKey || (ev as PointerEvent).metaKey;

          const isDetached = host.dataset.msDetached === "1" || isClone;
          let newW = startW, newH = startH;

          if (isDetached) {
            if (from.h === 'right') newW = startW + dx; else newW = startW - dx;
            if (from.v === 'bottom') newH = startH + dy; else newH = startH - dy;
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
          if (shift) { aw = snap(aw, 20); ah = snap(ah, 20); }

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

            if (hasRotate || alt) {

              newX = startXoff - Math.round((aw - startW) / 2);
              newY = startYoff - Math.round((ah - startH) / 2);
            } else {

              if (from.h === 'left') newX = startXoff + startW - aw;
              if (from.v === 'top' && kind !== 'audio') newY = startYoff + startH - ah;
            }
            if (shift) { newX = snap(newX, 20); newY = snap(newY, 20); }
            this.applyTransform(host, newX, newY);
          }

          this.applyBox(host, media as any, kind, aw, ah, free);
        };

        const onUp = async () => {
          controller.abort();
          overlay.classList.remove("--drag");
          document.body.classList.remove("ms-noselect");

          const bucket = isClone ? this.notes[notePath]?.clones : this.notes[notePath]?.originals;
          const existingRotate = bucket?.[key]?.rotate;
          const hasRotate = (isClone && typeof existingRotate === 'number') ||
                            (isNote && typeof existingRotate === 'number');
          const rect = this.readAbsRect(host);

          let finalW = rect.w;
          let finalH = rect.h;
          if (hasRotate) {

            finalW = parseFloat(host.style.width) || rect.w;
            finalH = parseFloat(host.style.height) || rect.h;
          }

          const stateToSave: Partial<OriginalState> = {
            w: finalW, h: finalH, x: rect.x || 0, y: rect.y || 0,
            free: host.dataset.msFree === "1",
            detached: host.dataset.msDetached === "1" || isClone,
            locked: host.dataset.msLocked === "1",
          };

          if (hasRotate) {
            (stateToSave as any).rotate = existingRotate;
          }

          if (kind === 'note') {
            const body = host.querySelector<HTMLElement>('.ms-note-body');
            stateToSave.txt = body?.textContent ?? '';
            stateToSave.fontSize = body ? (parseFloat(body.style.fontSize) || 16) : 16;
          }

          if (isClone && (kind === 'video' || kind === 'audio')) {
            (stateToSave as Partial<CloneState>).fileName = host.dataset.msFileName;
          }
          await this.saveState(notePath, key, stateToSave);
        };

        if ("pointerId" in e && typeof (handle as any).setPointerCapture === "function") {
          (handle as any).setPointerCapture((e as PointerEvent).pointerId);
        }
        window.addEventListener("pointermove", onMove, { capture: true, signal: controller.signal });
        window.addEventListener("pointerup", onUp, { capture: true, signal: controller.signal });
      };
      handle.addEventListener("pointerdown", startDrag);
    });

    const isClone = !!host.dataset.msParentKey;
    const isNote = kind === "note";
    if ((isClone || isNote) && handles.t && handles.b && handles.l && handles.r) {

      const cursorCache: Record<number, string> = {};

      const getRotationCursor = (effectiveAngle: number): string => {

        const roundedAngle = Math.round(effectiveAngle / 5) * 5;

        if (cursorCache[roundedAngle]) {
          return cursorCache[roundedAngle];
        }

        const baseCursor = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAJeUlEQVR42uybe0xU2R3HPxdYmMOAlJAaFIQuNBlZwfVN6gu7prUWqq21krpGZYtYjcE0uD6jTXzEWOkawVWsGmuqqLFb2sVXs4qOoCtxUxVdtW7Xqosa8IUKHpRhbv/gXvZCh2FAzM5c9pfczJ0753W/8zvf3+Oco9A18gbQACQAAvgXPiKqqr6Wdv21zyTgT4CqgaJq16fAW74CkLtL6WB7bwNzgNlAKTAKICAgAIfDgc1mw2KxcPHiRYBnQH8p5U1vBshisbj9XWln2sQCNmCkBsYIAD8/P5xOJ/369cNms5Genk5MTAyxsbGEhYWRmZnJ3r17AT6UUs4zE0ARQBwwS7taSFJSEkIIpk+fTlRUFMOHDyc4OJiAgIAW5SoqKkhOTgaokFK+7csA6W8WAmwH0pt/CAggJiaGsLAwJk2ahNVqJT09HavVSlBQkNtGDx48qN+W4uOiA3QQSAkPDyc0NJSJEycyZMgQUlNTAbBarR436HQ6KS8vx9CuT4uiWZvPExISKCoqokePHoSHhzcxuKJ0uMHHjx8TFxdHfX09wGFgjpTytq9zkAogpXzlDmtraxk6dCg3b7YwXieAXVLKXb4GkJ/2WQaQn5//yh2GhIRw5coVqqqqmDx5sj6AHwJ/FkLYhRA/97UpBjAJ+EgHKTMzs8s6aGhoYPfu3SxcuJDa2lojeRdLKdf7kpmfBvwFYP369cyb17Xui9PpJD8/n8WLFxsfnwIWSCnP+Yof1AxSTk4Oq1evfi2u/aFDh5g7dy7379/XH3+kkfl9X/Ckfwn8FWDmzJls2bLltQzM6XSyePFiI++VA6VSyvd9IdQYAZQAgVOnTmXHjh2vbYDV1dUMGjSIhw8f6o/swCop5XFvsmKt5TQwGKgtLCzsUtJuLT179qSyshK73U5wcDBACnBMCJHrDVbMz81vl4EfAHV79uxxC1JjYyO5ublcv3690/mVYcOGUV1dzbJly/RHOUKIo0KIN73BzLuTROAsYJ02bRrbtm1zWWjMmDGcP3+eiIgIxo8fT0ZGBgMHDsTf37/Dgzp37hzvvPMODodD99EWSCnLvS3d0RqkciDYFUgVFRWMGjWKly9fYgx2FUUhOTmZgoIC4uPjOzTwuro64uLiePr0qf5ou2bpHN7AQa6mWzLwfPfu3WRlZbX48auvvjLGbW8B2xwOBw0NDZSVlZGYmMiAAQM4ffq0xwO3Wq1UVVUxf/58/VEm8IkQoq83e96JwHNAnTFjhiqlVB88eKBmZWXpqdYdUko9pnsDsAA7gS8A1c/PTx09erR67949VUrp8XXhwgW9fVXzwhP1fl716uqUqw7SZ0DQuHHjGDx4MMXFxVy6dAlggJTyoqtKQogCmlK1AMydO5e1a9cSGBjoUacOh4PQ0FAMseMcKeVlb+EgVyAVA9+Dr1OwQICUsrGtSkKIKGAL8DOdpwoLC0lLS/M4tdK7d28eP34MUAlkSCmPeQMHueKk/kAqsFUDZ6s7cLR0yh0p5QRgEFDicDiYMmUKGRkZvHjxwqOO7969qyfyojVO+uk3beZp56URQvi3B04bGpUDLAfCYmNjKSkpoXfv3h7VXbNmjTFWTJVSHvYmDWoNUmMn6/0RGAocv3XrFvHx8ezfv9+jusuWLWPlypXNLoAQItFrNehVRQgRrnFTOkBKSgpHjx71qO6UKVMoLi7uNHG/LpLuUoAMQM0BsoG+QUFB1NTUeFQvJiZGT510GCSfAkgDKVHTppHQlOP2JFwRQhhdgPeklF94DQd1pWj//hztRQkJCfFIkwx/1EgN4NcezX/TIGVpuSF69eplzBe1KQYgxwohfmtagDSQrgLvag4p0dHRNDQ0uK0TFBTEzp079a/vdoVl8zoOcsEtkUAhTUtHHvVns9m4ffu2zkfpUsq7piHpNkCyaemOkZ72abVa9fDnYynlRNOQdBt/wr+NxB0ZGdluncrKSv12ghAiw3Qc5M66PXnyhNmzZ7stHx4eTkFBgf71PSFEjCk5qA0/6RxgKS8vp3///p76R4ellKmmnGIuNGkHQHJyMnV1dW7LV1VV6bejOmPVfA4gDaR5wD+haTXE3UpKjx49GDhwIEBoZxxInwRIkzlA6Y0bN1iyZInbgmfOnGn2soUQv+sWAEkp/wu8D7Bx40bjzhGXsm/fPv12kqlJ2gUJHwF+IoTg0aNHbsuGhYXpS1N5Usr5piTpNqbap1JKzp4967ag3W43Evb3u4UGaVq0DljoyXgiIiJ4/vw5wDEp5Y+6gwYhpVyke9mGtX2XcufOHaMWxXcLDdK0aDhNu1I6okWfqKr6Y9NrkAbKGV2Lli9f7mmcNlJRlO90Cw3StGgk2u7+9sZlsGj7VFX9tek1SAOlDKiAph0n7uTKlSvNXNSsLYoSpihKpGkB0qQUYPLkyW4LRUVFNd8qirJVUZSzQA1wT1GUE4qi9DXdFNOmmT/g8PPzo7a21u2a/9SpUykqKmoRt1ksFqqrqwGuAf1Np0HaKu9/nE4nN27ccFs2NzeXyMhI8vPzsdvtnD9/ni+//JKUlBSAvsCHZtSg7wJ/AGampaVx4MABt+WfPXtm3FYDwLVr1/QMwLUAs2iOECINmA78Cpq25Jw8ebLdeq3BAThy5EgznwWYBJztwG90J9Bms5GUlMTYsWP13Scet9XY2MiuXc2Hkg6aIZoPAuoDAwNZsWIFI0aMICEhAYvF0u7JyLamXHR0tO4jWcygQVaA4OBgcnJyXrmxq1ev6tuPARw+b8WklI+AspqaGnJzX31zvt1u19fTtqqq2miWdEcq2vnYdevWkZ2d3al2Xr58SZ8+ffS92amqqh42S7rjEFoqddGiReTl5XWqnRcvXhg3w58wWzRfZARpw4YNHY9RSkv1w8hHVFWVZgxWm0FaunQpH3zwQYfqG1K2ZaZMdxg4aQLwD4BVq1axYMGCduvU19cTERGhE/RoVVVLzRrNI6X8GJgATcmz9evbPztcV1dn3PX/mZnTHTpIxUAawIoVK9oFqaSkROefv+v8Y2qADNYtVQepLT9JVVVj/NXiaIMpOcidn5SXl8esWbP+7x0iIyN1E/+mqqo3u4UGtdKkaQDZ2dkcP97yvHB1dbUOzi0jON0GIA2kPcDvAdLS0jh16lQL/0e/bV2v2wCkgbQSWA0wbtw4Nm3axOXLl9m8eXNzKMa3AsAqvj7BqF/lrk4c+ndTgE4AnwMPaTo2+jdVVX/hquD/BgANh4vTAjsODAAAAABJRU5ErkJggg==';

        const svgRotation = roundedAngle - 45 + 90;

        const svgCursor = `<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><g transform='translate(36,36) rotate(${svgRotation}) translate(-9,-9)'><image href='data:image/png;base64,${baseCursor}' x='0' y='0' width='18' height='18'/></g></svg>`;
        const encoded = encodeURIComponent(svgCursor).replace(/'/g, '%27');
        const cursor = `url('data:image/svg+xml;charset=utf-8,${encoded}') 36 36, grabbing`;

        cursorCache[roundedAngle] = cursor;
        return cursor;
      };

      const rotationHandles = [
        { handle: handles.t, name: 't' },
        { handle: handles.b, name: 'b' },
        { handle: handles.l, name: 'l' },
        { handle: handles.r, name: 'r' }
      ];

      rotationHandles.forEach(({ handle, name }) => {
        if (!handle) return;

        let isRotating = false;

        const updateCursorOnHover = (e: MouseEvent) => {

          if (isRotating) return;

          const currentTransform = host.style.transform || '';
          const rotateMatch = currentTransform.match(/rotate\(([^)]+)deg\)/);
          const currentRotate = rotateMatch ? parseFloat(rotateMatch[1]) : 0;

          let baseAngle = 0;
          if (name === 't') baseAngle = 270;
          else if (name === 'r') baseAngle = 0;
          else if (name === 'b') baseAngle = 90;
          else if (name === 'l') baseAngle = 180;

          const effectiveAngle = baseAngle + currentRotate;

          const cursor = getRotationCursor(effectiveAngle);
          handle.style.cursor = cursor;
          (handle as any).style.setProperty('cursor', cursor, 'important');
        };

        handle.addEventListener('mouseenter', updateCursorOnHover);
        handle.addEventListener('mousemove', updateCursorOnHover);

        updateCursorOnHover(new MouseEvent('mousemove'));

        const startRotate = (e: PointerEvent | MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();

          isRotating = true;

          overlay.classList.add("--drag");
          document.body.classList.add("ms-noselect");

          const savedState = this.notes[notePath]?.clones?.[key];
          const realWidth = savedState?.w || parseFloat(host.style.width) || host.offsetWidth;
          const realHeight = savedState?.h || parseFloat(host.style.height) || host.offsetHeight;

          const rect = host.getBoundingClientRect();

          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const currentTransform = host.style.transform || '';
          const rotateMatch = currentTransform.match(/rotate\(([^)]+)deg\)/);
          const startRotate = rotateMatch ? parseFloat(rotateMatch[1]) : 0;

          const startAngle = Math.atan2(
            (e as PointerEvent).clientY - centerY,
            (e as PointerEvent).clientX - centerX
          ) * (180 / Math.PI);

          let baseAngle = 0;
          if (name === 't') baseAngle = 270;
          else if (name === 'r') baseAngle = 0;
          else if (name === 'b') baseAngle = 90;
          else if (name === 'l') baseAngle = 180;

          let cursorUpdateTimer: any = null;
          let currentRotation = startRotate;

          let currentCursor = getRotationCursor(baseAngle + startRotate);

          const controller = new AbortController();

          const onMove = (ev: PointerEvent | MouseEvent) => {
            ev.preventDefault();

            document.body.style.cursor = currentCursor;
            handle.style.cursor = currentCursor;
            (handle as any).style.setProperty('cursor', currentCursor, 'important');

            if (cursorUpdateTimer) {
              clearTimeout(cursorUpdateTimer);
              cursorUpdateTimer = null;
            }

            const currentAngle = Math.atan2(
              (ev as PointerEvent).clientY - centerY,
              (ev as PointerEvent).clientX - centerX
            ) * (180 / Math.PI);

            let deltaAngle = currentAngle - startAngle;

            let newRotate = startRotate + deltaAngle;

            if ((ev as PointerEvent).shiftKey) {
              newRotate = Math.round(newRotate / 15) * 15;
            }

            currentRotation = newRotate;

            const translateMatch = currentTransform.match(/translate\(([^)]+)\)/);
            const translateValue = translateMatch ? translateMatch[1] : '0px, 0px';
            host.style.transform = `translate(${translateValue}) rotate(${newRotate}deg)`;

            cursorUpdateTimer = window.setTimeout(() => {
              const effectiveAngle = baseAngle + currentRotation;
              currentCursor = getRotationCursor(effectiveAngle);
              document.body.style.cursor = currentCursor;
              handle.style.cursor = currentCursor;
              (handle as any).style.setProperty('cursor', currentCursor, 'important');
            }, 50) as any;
          };

          const onUp = async () => {

            if (cursorUpdateTimer) {
              clearTimeout(cursorUpdateTimer);
              cursorUpdateTimer = null;
            }

            isRotating = false;

            controller.abort();
            overlay.classList.remove("--drag");
            document.body.classList.remove("ms-noselect");

            document.body.style.cursor = '';

            const finalTransform = host.style.transform || '';
            const finalRotateMatch = finalTransform.match(/rotate\(([^)]+)deg\)/);
            const finalRotate = finalRotateMatch ? parseFloat(finalRotateMatch[1]) : 0;

            await this.saveState(notePath, key, { rotate: finalRotate });
          };

          if ("pointerId" in e && typeof (handle as any).setPointerCapture === "function") {
            (handle as any).setPointerCapture((e as PointerEvent).pointerId);
          }
          window.addEventListener("pointermove", onMove, { capture: true, signal: controller.signal });
          window.addEventListener("pointerup", onUp, { capture: true, signal: controller.signal });
        };

        handle.addEventListener("pointerdown", startRotate);
      });
    }
  }

private adjustZIndex(host: HTMLElement, direction: 1 | -1) {
  const currentZ = parseInt(host.style.zIndex || '2900', 10);
  const newZ = currentZ + direction;
  host.style.zIndex = String(newZ);

  const notePath = this.getActiveNote()?.path;
  const key = host.dataset.msKey;
  if (notePath && key && host.dataset.msParentKey) {
    this.saveState(notePath, key, { zIndex: newZ });
  }
}

  private handleMarqueeStart(e: MouseEvent) {

    const attachRoot = this.getAttachRoot();
    if (!attachRoot?.contains(e.target as Node) || (e.target as HTMLElement).closest('.ms-handle')) {
      return;
    }

    const host = (e.target as HTMLElement).closest<HTMLElement>('.ms-host');
    if (host && host.dataset.msKey) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    this.marqueeWithCtrl = e.ctrlKey || e.metaKey;

    const startX = e.clientX;
    const startY = e.clientY;
    const onMove = (moveEvent: MouseEvent) => {
      this.isMarqueeSelecting = true;
      if (!this.marqueeStart) {
        this.marqueeStart = { x: startX, y: startY };
      }
      this.ensureMarquee();

      if (this.isMarqueeSelecting) {
        this.updateMarquee(moveEvent.clientX, moveEvent.clientY);
      }
    };

    const onUp = (upEvent: MouseEvent) => {
      window.removeEventListener('pointermove', onMove, true);
      window.removeEventListener('pointerup', onUp, true);

      if (this.isMarqueeSelecting) {
        this.applyMarqueeSelection();
      this.removeMarquee();
      this.isMarqueeSelecting = false;
      this.marqueeStart = null;
      this.marqueeWithCtrl = false;
      }
      this.updateSelectionVisuals();
    };

    window.addEventListener('pointermove', onMove, true);
    window.addEventListener('pointerup', onUp, true);
  }
  private handleSelectionClick(e: MouseEvent | PointerEvent, key: string) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleSelection(key);
    this.updateSelectionVisuals();
  }
  private toggleSelection(key: string) {
    if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key);
    } else {
      this.selectedKeys.add(key);
    }
  }

  private updateSelectionVisuals() {

    this.getActiveContainerEl()?.querySelectorAll('.ms-host').forEach(el => {
      const host = el as HTMLElement;
      const key = host.dataset.msKey;
      if (key && this.selectedKeys.has(key)) {
        host.classList.add('--selected');
      } else {
        host.classList.remove('--selected');
      }
    });

    this.getActiveContainerEl()?.querySelectorAll<HTMLElement>('.ms-overlay').forEach(overlay => {
      const handles = overlay.querySelectorAll('.ms-handle');
      const display = this.selectedKeys.size > 1 ? 'none' : '';
      handles.forEach(h => (h as HTMLElement).style.display = display);
    });
  }

  private handleDeselectClick = (e: MouseEvent) => {
    if (e.button !== 0) return;

    if (e.ctrlKey || e.metaKey) return;

    if ((e.target as HTMLElement).closest('.ms-host, .menu')) return;
    if (this.selectedKeys.size > 0) {
      this.selectedKeys.clear();
      this.updateSelectionVisuals();
    }
  }

  private ensureMarquee(): HTMLElement {
    let marquee = document.getElementById('ms-marquee');
    if (!marquee) {
      marquee = document.createElement('div');
      marquee.id = 'ms-marquee';
      document.body.appendChild(marquee);
    }
    return marquee;
  }

  private updateMarquee(endX: number, endY: number) {
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
      display: 'block'
    });
  }

  private applyMarqueeSelection() {
    const marquee = document.getElementById('ms-marquee');
    if (!marquee) return;
    const marqueeRect = marquee.getBoundingClientRect();

    if (!this.marqueeWithCtrl) {
      this.selectedKeys.clear();
    }

    const hosts = this.getActiveContainerEl()?.querySelectorAll<HTMLElement>('.ms-host');
    hosts?.forEach(host => {

      const isClone = !!host.dataset.msParentKey;
      const isNote = host.classList.contains("ms-note-host");

      if (isClone || isNote) {
        const hostRect = host.getBoundingClientRect();
        if (hostRect.left < marqueeRect.right && hostRect.right > marqueeRect.left &&
            hostRect.top < marqueeRect.bottom && hostRect.bottom > marqueeRect.top) {
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

  private async buildGroupContextMenu(menu: Menu, host: HTMLElement, key: string, kind: MediaKind, notePath: string) {
    menu.addItem((item) => {
      item
        .setTitle(t(this.app, "deleteSelected", { n: this.selectedKeys.size }))
        .setIcon("trash")
        .onClick(async () => {
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
  private removeMarquee() {
    document.getElementById('ms-marquee')?.remove();
  }

private mountControlsForHost(host: HTMLElement, mediaEl: HTMLElement) {
  const isClone = !!host.dataset.msParentKey;

  host.style.pointerEvents = "auto";

  if (isClone) {

    this.hydrateCloneMedia(host);

    host.querySelectorAll<HTMLElement>(".mejs__controls, .plyr__controls, .vjs-control-bar")
      .forEach(el => el.style.display = "none");

    this.mountCloneControls(host, mediaEl);

    this.installClickToggleDebug(host, mediaEl);
  } else {

    this.mountControlsProxy(host, mediaEl);
  }
}

private hydrateCloneMedia(host: HTMLElement) {
  const parentKey = host.dataset.msParentKey;
  if (!parentKey) return;

  const origHost = this.findHostByKey(parentKey);
  const cloned   = host.querySelector("video, audio") as HTMLMediaElement | null;
  const original = origHost?.querySelector("video, audio") as HTMLMediaElement | null;
  if (!cloned || !original) return;

  const src = (original.currentSrc || original.src || "").trim();
  if (!src) return;

  if (cloned.src !== src) {
    cloned.src = src;
    try { cloned.load(); } catch {}
  }
}

private mountControlsProxy(host: HTMLElement, media: HTMLElement) {

  host.querySelectorAll('.ms-proxy-ctrl').forEach(n => n.remove());

  const sels = [
    ".ob-video-controls", ".media-controls", ".mejs__controls",
    ".plyr__controls", ".vjs-control-bar", ".me-controls",
    "[class*='controls']"
  ];
  let panel: HTMLElement | null = null;
  for (const s of sels) {
    panel = host.querySelector(s) as HTMLElement | null;
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

    const btns = panel!.querySelectorAll<HTMLElement>(
      "button, [role='button'], .plyr__control, .vjs-control"
    );

    btns.forEach((btn) => {
      const rb = btn.getBoundingClientRect();

      const proxy = document.createElement("div");
      proxy.className = "ms-proxy-btn";
      proxy.style.position = "absolute";
      proxy.style.pointerEvents = "auto";

      proxy.style.left   = `${rb.left - hostR.left}px`;
      proxy.style.top    = `${rb.top  - hostR.top }px`;
      proxy.style.width  = `${rb.width}px`;
      proxy.style.height = `${rb.height}px`;

      const down = (ev: PointerEvent | MouseEvent) => {

        ev.stopPropagation();

        this.forwardFrom(ev, btn, "pointerdown");
      };
      const up = (ev: PointerEvent | MouseEvent) => {
        ev.stopPropagation();

        this.forwardFrom(ev, btn, "pointerup");
      };
      const isClone = !!host.dataset.msParentKey;

      const clk = (ev: MouseEvent) => {

        ev.stopPropagation();
        ev.preventDefault();

        try {
          btn.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, view:window }));
          (btn as any).click?.();
        } catch {}

        if (isClone && media instanceof HTMLMediaElement) {
          const hint = `${btn.getAttribute("aria-label")||btn.getAttribute("title")||btn.className||""}`.toLowerCase();

          if (/play|pause|toggle/.test(hint)) {
            media.paused ? media.play().catch(()=>{}) : media.pause();
            media.focus?.();
            return;
          }
          if (/mute/.test(hint)) { media.muted = !media.muted; media.focus?.(); return; }

          const tl = btn.closest('.plyr__progress, .vjs-progress-holder, .mejs__total-time, input[type=range]') as HTMLElement | null;
          if (tl && Number.isFinite(media.duration)) {
            const r = tl.getBoundingClientRect();
            const frac = r.width ? (Math.min(Math.max(ev.clientX - r.left, 0), r.width) / r.width) : 0;
            media.currentTime = media.duration * frac;
            return;
          }

          const vb = btn.closest('.plyr__volume, .vjs-volume-bar, .mejs__volume, input[type=range][aria-label*="volume" i]') as HTMLElement | null;
          if (vb) {
            const r = vb.getBoundingClientRect();
            const frac = r.width ? (Math.min(Math.max(ev.clientX - r.left, 0), r.width) / r.width) : 0;
            media.volume = Math.min(1, Math.max(0, frac));
            return;
          }
        }
      };

      proxy.addEventListener("pointerdown", down, { capture: true });
      proxy.addEventListener("pointerup",   up,   { capture: true });
      proxy.addEventListener("mousedown",   down, { capture: true });
      proxy.addEventListener("mouseup",     up,   { capture: true });
      proxy.addEventListener("click",       clk,  { capture: true });

      wrap.appendChild(proxy);
    });
  };

  const ro = new ResizeObserver(() => rebuild());
  ro.observe(host);
  ro.observe(panel);

  this.controlsProxy.set(host, { root: wrap, ro });
  rebuild();
}

private mountCloneControls(host: HTMLElement, mediaEl: HTMLElement) {
  if (!host.dataset.msParentKey) return;
  const media = mediaEl as HTMLMediaElement;
  if (!(media instanceof HTMLMediaElement)) return;
  if (host.querySelector(".ms-clone-controls")) return;

  const isVideo = media.tagName === "VIDEO";
  const root = document.createElement("div");
  root.className = "ms-clone-controls";
  Object.assign(root.style, {
    position: "absolute", left: "8px", right: "8px", bottom: "8px",
    display: "flex", flexDirection: "column", gap: "6px", pointerEvents: "none",
    background: "rgba(0,0,0,.35)", borderRadius: "8px", padding: "6px 8px",
    backdropFilter: "blur(2px)", zIndex: "2147483647",
    userSelect: "none",
  } as CSSStyleDeclaration);

  const stop = (e: Event) => e.stopPropagation();

  root.addEventListener("mousedown", stop, false);
  root.addEventListener("click", stop, false);

  const smartClickHandler = (e: MouseEvent, action: (event: MouseEvent) => void) => {
    const target = e.currentTarget as HTMLElement;

    e.preventDefault();
    e.stopPropagation();

    const onUp = (upEvent: MouseEvent) => {
        window.removeEventListener("mouseup", onUp, true);

        if (upEvent.button === 2) {
            return;
        }

        const dx = upEvent.clientX - e.clientX;
        const dy = upEvent.clientY - e.clientY;
        if (Math.hypot(dx, dy) < 4) {
            action(e);
        }
    };
    window.addEventListener("mouseup", onUp, true);
  };

  let fullscreenHideTimer: any = null;
  const onFsMouseMove = () => {
    if (document.fullscreenElement === host) {
      host.classList.remove("ms-fs-inactive");
      clearTimeout(fullscreenHideTimer);
      fullscreenHideTimer = setTimeout(() => {
        host.classList.add("ms-fs-inactive");
      }, 5000);
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

  const ro = new ResizeObserver(entries => {
    const { width } = entries[0].contentRect;
    root.classList.toggle("ms-cc-compact", width < 240);
  });
  ro.observe(host);

  const timeline = document.createElement("div");
  timeline.className = "ms-cc-timeline";
  Object.assign(timeline.style, {
    position:"relative", width:"100%", height:"6px",
    borderRadius:"3px", background:"rgba(255,255,255,.25)", cursor:"pointer", pointerEvents: "auto"
  } as CSSStyleDeclaration);
  const progress = document.createElement("div");
  progress.className = "ms-cc-progress";
  Object.assign(progress.style, {
    position:"absolute", left:"0", top:"0", bottom:"0", width:"0%",
    background:"rgba(255,255,255,.9)", borderRadius:"3px", pointerEvents: "none"
  } as CSSStyleDeclaration);
  timeline.appendChild(progress);

  const thumb = document.createElement("div");
  thumb.className = "ms-cc-thumb";
  Object.assign(thumb.style, {
    position: "absolute", top: "50%",
    width: "12px", height: "12px",
    background: "#fff", borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    opacity: "0",
    transition: "opacity 0.1s ease-out"
  } as CSSStyleDeclaration);
  timeline.appendChild(thumb);

  const btnBar = document.createElement("div");
  btnBar.className = "ms-cc-btn-bar";
  Object.assign(btnBar.style, { display: "flex", alignItems: "center", gap: "8px", width: "100%" } as CSSStyleDeclaration);

  const makeBtn = (svgIcon: string, title: string) => {
    const b = document.createElement("div");
    b.className = "ms-cc-btn";
    Object.assign(b.style, {
      width:"26px",height:"26px",borderRadius:"6px",
      display:"inline-flex",alignItems:"center",justifyContent:"center", pointerEvents: "auto",
      cursor:"pointer",color:"#fff",background:"rgba(255,255,255,.15)"
    } as CSSStyleDeclaration);
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
    more: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
  };

  const leftGroup = document.createElement("div");
  leftGroup.style.display = "flex"; leftGroup.style.alignItems = "center";

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
  volumeSlider.min = "0"; volumeSlider.max = "1"; volumeSlider.step = "0.05";
  volumeSlider.classList.add("ms-cc-hide-compact");
  Object.assign(volumeSlider.style, { width: "70px", cursor: "pointer", accentColor: "#fff", pointerEvents: "auto" } as CSSStyleDeclaration);
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
    padding: "0 8px",
  } as CSSStyleDeclaration);

  const rightGroup = document.createElement("div");
  rightGroup.style.display = "flex"; rightGroup.style.alignItems = "center";
  rightGroup.style.marginLeft = "auto";

  if (isVideo) {
    let wasLockedBeforeFs = false;

    let scrollRatioX = 0, scrollRatioY = 0, hScrollEl: HTMLElement | null = null, vScrollEl: HTMLElement | null = null;
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
      if (!document.fullscreenElement) host.requestFullscreen().catch(()=>{});
      else document.exitFullscreen().catch(()=>{});
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
      showAudioHandles: this.cloneShowAudioHandles,
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
    const origHost = this.findHostByKey(host.dataset.msParentKey!);
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
    flex: "1 1 auto", minWidth: "0", display: "flex",
    alignItems: "center", justifyContent: "center", pointerEvents: "none",
  } as CSSStyleDeclaration);

  const timeLabel = document.createElement("div");
  timeLabel.className = "ms-cc-time-label";
  Object.assign(timeLabel.style, {
    color: "rgba(255,255,255,.7)", fontSize: "12px",
    whiteSpace: "nowrap", paddingRight: "8px",
  } as CSSStyleDeclaration);
  timeLabel.textContent = "0:00 / 0:00 |";

  centerGroup.append(timeLabel, nameLabel);

  btnBar.append(leftGroup, centerGroup, rightGroup);
  root.append(timeline, btnBar);
  host.appendChild(root);

  const parentKey = host.dataset.msParentKey;
  if (parentKey) {

    const notePath = this.getActiveNote()?.path ?? "";
    const savedState = this.notes[notePath]?.clones?.[host.dataset.msKey!];
    const savedFileName = (savedState as any)?.fileName;

    const formatTime = (seconds: number) => {
        if (!isFinite(seconds)) return "0:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    if (savedFileName) {
        nameLabel.textContent = savedFileName;
        nameLabel.title = savedFileName;
        host.dataset.msFileName = savedFileName;
    } else {
        const originalHost = this.findHostByKey(parentKey);
        if (originalHost) {
            const mediaEl = originalHost.querySelector("video, audio, img");
            if (mediaEl) {
                const { base } = this.getSrcAndBase(originalHost, mediaEl as HTMLElement);
                nameLabel.textContent = base || "Untitled";
                nameLabel.title = base || "Untitled";
                host.dataset.msFileName = base || "Untitled";
            }
        }
    }
  }

  const refresh = (isSeeking = false, formatTime: (s: number) => string) => {
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
        timeLabel.textContent = `${formatTime(media.currentTime)} / ${formatTime(dur)} | `;
    }
  };

  const formatTime = (seconds: number) => {
      if (!isFinite(seconds)) return "0:00";
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
  };
  refresh(false, formatTime);

  btnPlay.addEventListener("mousedown", (e) => smartClickHandler(e, (evt) => {
    if (media.paused) media.play().catch(()=>(void 0));
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
  const seekTo = (x: number) => {
    const r = timeline.getBoundingClientRect();
    const frac = r.width ? Math.min(1, Math.max(0, (x - r.left) / r.width)) : 0;
    if (isFinite(media.duration) && media.duration > 0) {
        media.currentTime = media.duration * frac;
        refresh(true, formatTime);
    }
  };
  timeline.addEventListener("pointerdown", (e: PointerEvent) => {
    e.stopPropagation();
    seeking = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    seekTo(e.clientX);
  }, { capture:true });
  timeline.addEventListener("pointerenter", () => { thumb.style.opacity = "1"; });
  timeline.addEventListener("pointerleave", () => { if (!seeking) thumb.style.opacity = "0"; });
  const onMove = (e: PointerEvent) => { if (seeking) seekTo(e.clientX); };
  const onUp = (e: PointerEvent) => {
    if (seeking) {
      seeking = false;
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
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
  mo.observe(host.parentElement!, { childList: true });
}

private installClickToggleDebug(host: HTMLElement, mediaEl: HTMLElement) {
  const media = mediaEl as HTMLMediaElement;
  if (!(media instanceof HTMLMediaElement)) return;

  const onMouseDown = (e: MouseEvent) => {

    if ((e.target as HTMLElement).closest('.ms-clone-controls')) return;

    if (e.button === 2) {
      return;
    }

    const onMouseUp = (upEvent: MouseEvent) => {
      window.removeEventListener('mouseup', onMouseUp, true);
      const dx = upEvent.clientX - e.clientX;
      const dy = upEvent.clientY - e.clientY;

      if (Math.hypot(dx, dy) < 4) {

        if (media.paused) {
          media.play().catch(err => console.warn("[MS] clone play() rejected:", err));
        } else {
          media.pause();
        }
      }
    };
    window.addEventListener('mouseup', onMouseUp, true);
  };

  host.addEventListener("mousedown", onMouseDown, false);
}
private applyLinkOverlay(host: HTMLElement, link: string | null) {
  let overlay = host.querySelector<HTMLElement>('.ms-link-overlay');

  if (!link) {
    overlay?.remove();
    return;
  }

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'ms-link-overlay';
    Object.assign(overlay.style, {
      position: 'absolute',
      inset: '3px',
      zIndex: '2500',
      cursor: 'pointer',
      pointerEvents: 'auto',
    } as CSSStyleDeclaration);
    host.appendChild(overlay);
  }

  (overlay as any).__ms_clickHandler?.();

  const onMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return;
    const onMouseUp = (upEvent: MouseEvent) => {
      window.removeEventListener('mouseup', onMouseUp, true);
      const dx = upEvent.clientX - e.clientX;
      const dy = upEvent.clientY - e.clientY;
      if (Math.hypot(dx, dy) < 4) {
        window.open(link, '_blank');
      }
    };
    window.addEventListener('mouseup', onMouseUp, true);
  };
  overlay.addEventListener('mousedown', onMouseDown);
  (overlay as any).__ms_clickHandler = () => overlay!.removeEventListener('mousedown', onMouseDown);
}
private applyCloneSettingsToAll() {
  const root = this.getActiveContainerEl();
  if (!root) return;

  root.querySelectorAll<HTMLElement>('.ms-host[data-ms-parent-key]').forEach(cloneHost => {

    cloneHost.dataset.msAnimation = this.cloneAnimation;

    const bgs = cloneHost.querySelectorAll<HTMLElement>('.ms-media-bg, .ms-local-bg');
    if (bgs.length > 0) {
      bgs.forEach(bg => {
        bg.style.opacity = String(this.cloneBgOpacity);
      });
    } else if (cloneHost.dataset.msKind === 'video' || cloneHost.dataset.msKind === 'audio') {

    }

    const controls = cloneHost.querySelector<HTMLElement>('.ms-clone-controls');
    if (controls) {
      controls.style.backgroundColor = `rgba(0,0,0,${this.cloneControlsOpacity})`;
    }

    if (cloneHost.dataset.msKind === 'audio') {
      cloneHost.dataset.msShowHandles = this.cloneShowAudioHandles ? 'true' : 'false';
    }
  });
}
}


