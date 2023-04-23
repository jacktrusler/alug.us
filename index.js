const logo = document.getElementById("logo");

const storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
}

const cT = document.documentElement.getAttribute("data-theme");

logo.onclick = function() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
};

if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
}
