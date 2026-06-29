document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.querySelector("[data-nav-drawer]");
  if (!toggle || !drawer) return;

  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  drawer.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("click", () => {
      drawer.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});