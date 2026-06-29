function renderTestimonialsGrid() {
  const container = document.querySelector("[data-testimonials-grid]");
  if (!container) return;
  const lang = getCurrentLang();

  container.innerHTML = testimonialsData.map((t) => {
    const content = t.translations[lang] || t.translations["uz-latin"];
    return `
      <div class="testimonial-card">
        <p class="testimonial-card__quote">${content.quote}</p>
        <div class="testimonial-card__person">
          <span class="testimonial-card__avatar">${t.initials}</span>
          <div>
            <p class="testimonial-card__name">${content.name}</p>
            <p class="testimonial-card__role">${content.role}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderTestimonialsGrid);
document.addEventListener("langchange", renderTestimonialsGrid);