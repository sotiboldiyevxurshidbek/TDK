document.addEventListener("DOMContentLoaded", () => {
  populateCourseOptions();
  const form = document.querySelector("[data-admission-form]");
  if (form) form.addEventListener("submit", handleAdmissionSubmit);
});

document.addEventListener("langchange", populateCourseOptions);

function populateCourseOptions() {
  const select = document.querySelector("[data-course-select]");
  if (!select || typeof coursesData === "undefined") return;

  const lang = getCurrentLang();
  const dict = translations[lang] || translations["uz-latin"];

  const options = coursesData.map((c) => {
    const content = c.translations[lang] || c.translations["uz-latin"];
    return `<option value="${c.id}">${content.title}</option>`;
  }).join("");

  select.innerHTML =
    `<option value="" disabled selected>${dict.form_course_placeholder}</option>` +
    options +
    `<option value="other">${dict.form_course_other}</option>`;
}

async function handleAdmissionSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const lang = getCurrentLang();
  const dict = translations[lang] || translations["uz-latin"];
  const statusBox = document.querySelector("[data-form-status]");
  const submitBtn = form.querySelector("[data-form-submit]");

  const firstName = form.firstname.value.trim();
  const lastName = form.lastname.value.trim();
  const rawPhone = form.phone.value.trim();
  const phone = rawPhone.replace(/[\s\-()]/g, "");
  const courseId = form.course.value;
  const message = form.message.value.trim();

  if (!firstName || !lastName || !rawPhone || !courseId) {
    showFormStatus(statusBox, "error", dict.form_validation_required);
    return;
  }

  if (!/^\+?998\d{9}$/.test(phone)) {
    showFormStatus(statusBox, "error", dict.form_validation_phone);
    return;
  }

  const courseTitle = courseId === "other"
    ? dict.form_course_other
    : (coursesData.find((c) => c.id === courseId)?.translations[lang]?.title || courseId);

  const text = [
    "🆕 Yangi ariza — TDK",
    `Ism: ${firstName}`,
    `Familiya: ${lastName}`,
    `Telefon: ${rawPhone}`,
    `Kurs: ${courseTitle}`,
    message ? `Izoh: ${message}` : null
  ].filter(Boolean).join("\n");

  submitBtn.disabled = true;
  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = dict.form_submit_loading;

try {
    const params = new URLSearchParams({ chat_id: TELEGRAM_CHAT_ID, text });
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      body: params
    });

    if (!response.ok) throw new Error("Telegram API error");

    showFormStatus(statusBox, "success", dict.form_success_text);
    form.reset();
    populateCourseOptions();
  } catch (err) {
    showFormStatus(statusBox, "error", dict.form_error_text);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
}

function showFormStatus(box, type, text) {
  if (!box) return;
  box.textContent = text;
  box.className = `form-status form-status--${type}`;
  box.hidden = false;
}