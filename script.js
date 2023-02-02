/**
 * Downloads by Url, necessary to include name and filetype as second and third arguments.
 * @param {string} url - The url to download from.
 * @param {string} name - The name the download will be saved as.
*/
async function downloadByUrl(url, name) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = name;
    link.click();
    link.remove();
  } catch (err) {
    console.log(err);
  }
};

const logo = document.getElementById("logo");

const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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
