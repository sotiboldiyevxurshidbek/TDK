document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("[data-gallery-item]");
  const lightbox = document.querySelector("[data-gallery-lightbox]");
  if (!items.length || !lightbox) return;

  const mediaSlot = lightbox.querySelector("[data-gallery-lightbox-media]");
  const captionSlot = lightbox.querySelector("[data-gallery-lightbox-caption]");
  const closeBtn = lightbox.querySelector("[data-gallery-close]");

  function openLightbox(item) {
    mediaSlot.innerHTML = item.querySelector(".gallery-item__media").innerHTML;
    const lang = getCurrentLang();
    const dict = translations[lang] || translations["uz-latin"];
    const key = item.getAttribute("data-i18n-caption");
    captionSlot.textContent = dict[key] || "";
    lightbox.classList.add("is-open");
  }
  function closeLightbox() { lightbox.classList.remove("is-open"); }

  items.forEach((item) => item.addEventListener("click", () => openLightbox(item)));
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
});