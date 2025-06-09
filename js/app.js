// 라이트, 다크 모드 토글
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

// nav 위치 active
const $navUl = document.querySelector(".nav_ul");
const $navAbout = document.querySelector(".nav_about");
const $navProject = document.querySelector(".nav_project");
const $navFeedback = document.querySelector(".nav_feedback");
const $section1 = document.getElementById("section1");
const $section2 = document.getElementById("section2");
const $section3 = document.getElementById("section3");
const sectionMargin = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--mt-120"));

const clearNavActive = () => {
    for(li of $navUl.children){
      li.classList.remove("nav_active");
    }
};

window.addEventListener("scroll", () => {
  const sec1 = $section1.getBoundingClientRect();
  const sec2 = $section2.getBoundingClientRect();
  const sec3 = $section3.getBoundingClientRect();

  clearNavActive();

  if(sec1.bottom> 0){
    $navAbout.classList.add("nav_active");
  } else if(sec2.top - sectionMargin < 0 && sec2.bottom > 0){
    $navProject.classList.add("nav_active");
  }  else if(sec3.top - sectionMargin < 0 && sec3.bottom > 0){
    $navFeedback.classList.add("nav_active");
  }
});

// nav 요소 클릭시 해당 위치로
const moveToSection = (sec) => {
    window.scrollTo({
    top : sec.offsetTop,
    behavior : "smooth"
  });
}

$navAbout.addEventListener("click", () => moveToSection($section1));
$navProject.addEventListener("click", () => moveToSection($section2));
$navFeedback.addEventListener("click", () => moveToSection($section3));

// scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade_show");
      observer.unobserve(entry.target);
    }
  });
},{
  threshold : 0.4
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

