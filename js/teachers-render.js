function renderTeachersGrid() {
  const container = document.querySelector("[data-teachers-grid]");
  if (!container) return;
  const lang = getCurrentLang();
  const dict = translations[lang] || translations["uz-latin"];
  const labels = teacherUiLabels[lang] || teacherUiLabels["uz-latin"];

  container.innerHTML = teachersData.map((t) => {
    const content = t.translations[lang] || t.translations["uz-latin"];
    const subject = dict[t.subjectKey] || "";
    return `
      <div class="teacher-card">
        <div class="teacher-card__avatar">${t.initials}</div>
        <h3 class="teacher-card__name">${content.name}</h3>
        <p class="teacher-card__subject">${subject}</p>
        <p class="teacher-card__bio">${content.bio}</p>
        <span class="teacher-card__tag">${labels.experience}</span>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderTeachersGrid);
document.addEventListener("langchange", renderTeachersGrid);