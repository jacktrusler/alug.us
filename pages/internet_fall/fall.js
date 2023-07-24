const toggle = document.getElementById("theme-toggle");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
}

const cT = document.documentElement.getAttribute("data-theme");
if (cT === "dark") { moon.setAttribute("class", "moon hidden"); }
if (cT === "light") { sun.setAttribute("class", "sun hidden"); }

toggle.onclick = function() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
    moon.setAttribute("class", "moon hidden")
    sun.setAttribute("class", "sun");
  } else {
    sun.setAttribute("class", "sun hidden");
    moon.setAttribute("class", "moon");
  }

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
};
