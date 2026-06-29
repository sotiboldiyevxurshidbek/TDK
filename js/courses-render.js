function renderCoursesGrid() {
  const container = document.querySelector("[data-courses-grid]");
  if (!container) return;

  const lang = getCurrentLang();
  const labels = courseUiLabels[lang] || courseUiLabels["uz-latin"];

  container.innerHTML = coursesData.map((course) => {
    const content = course.translations[lang] || course.translations["uz-latin"];
    return `
      <a class="course-card" href="course.html?id=${course.id}">
        <span class="course-card__icon">${course.icon}</span>
        <h3 class="course-card__title">${content.title}</h3>
        <p class="course-card__tagline">${content.tagline}</p>
        <span class="course-card__more">${labels.more} →</span>
      </a>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderCoursesGrid);
document.addEventListener("langchange", renderCoursesGrid);