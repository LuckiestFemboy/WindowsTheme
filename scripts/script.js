document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("LD-Mode");

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const existingLink = document.getElementById("dark-mode-style");

      if (existingLink) {
        // Dark mode is active, remove it
        existingLink.remove();
      } else {
        // Dark mode is not active, add it
        const link = document.createElement("link");
        link.id = "dark-mode-style";
        link.rel = "stylesheet";
        link.href = "styles/dark-mode.css"; // Ensure the correct path
        document.head.appendChild(link);
      }
    });
  }
});
