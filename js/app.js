const themeToggle = document.querySelector(".theme_toggle");

const toggleTheme = () => {
  const body = document.body;

  if (body.getAttribute("data-theme") == "dark") {
    body.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️"
  }
}

themeToggle.addEventListener("click", toggleTheme);

