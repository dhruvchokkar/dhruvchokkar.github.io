// Select menu toggle button and navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

// Ensure elements exist
if (menuToggle && nav) {
  const toggleMenu = (forceClose = false) => {
    const isOpen = forceClose
      ? false
      : !menuToggle.classList.contains("active");

    // Sync states explicitly
    menuToggle.classList.toggle("active", isOpen);
    nav.classList.toggle("active", isOpen);

    // Accessibility
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Lock scroll when open
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  // Toggle menu on hamburger click
  menuToggle.addEventListener("click", () => {
    toggleMenu();
  });

  // Close menu when a nav link is clicked
  nav.addEventListener("click", (e) => {
    if (e.target.closest(".nav-link")) {
      toggleMenu(true);
    }
  });

  // Close menu on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleMenu(true);
    }
  });
}
