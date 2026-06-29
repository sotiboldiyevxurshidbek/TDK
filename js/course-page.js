function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderCoursePage() {
  const id = getQueryParam("id");
  const lang = getCurrentLang();
  const labels = courseUiLabels[lang] || courseUiLabels["uz-latin"];
  const course = coursesData.find((c) => c.id === id);
  const root = document.querySelector("[data-course-page]");
  if (!root) return;

  if (!course) {
    root.innerHTML = `
      <p class="course-not-found">${labels.notFound}</p>
      <a class="btn btn--primary" href="index.html#courses">${labels.back}</a>`;
    return;
  }

  const content = course.translations[lang] || course.translations["uz-latin"];
  document.title = `${content.title} — TDK`;

  root.innerHTML = `
    <a class="course-back" href="index.html#courses">← ${labels.back}</a>
    <div class="course-hero__icon">${course.icon}</div>
    <h1 class="course-hero__title">${content.title}</h1>
    <p class="course-hero__tagline">${content.tagline}</p>
    <p class="course-hero__description">${content.description}</p>

    <div class="course-meta">
      <div><span>${labels.duration}</span><p>${content.duration}</p></div>
      <div><span>${labels.teacher}</span><p>${content.teacherPlaceholder}</p></div>
    </div>

    <div class="course-block">
      <h2>${labels.audience}</h2>
      <p>${content.audience}</p>
    </div>

    <div class="course-block">
      <h2>${labels.learn}</h2>
      <ul>${content.learn.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="course-block">
      <h2>${labels.benefits}</h2>
      <ul>${content.benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <a class="btn btn--primary course-cta" href="index.html#admission">${labels.register}</a>
  `;
}

document.addEventListener("DOMContentLoaded", renderCoursePage);
document.addEventListener("langchange", renderCoursePage);