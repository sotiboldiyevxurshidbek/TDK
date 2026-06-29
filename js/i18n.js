const LANG_KEY = "tdk-lang";
const DEFAULT_LANG = "uz-latin";

function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.setAttribute("lang", lang.startsWith("uz") ? "uz" : lang);
  document.documentElement.setAttribute("data-lang", lang);
  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.langOption === lang);
  });
   document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
}


function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations(lang);
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(getCurrentLang());
  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langOption));
  });
});