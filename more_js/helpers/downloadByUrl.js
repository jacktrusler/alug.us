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

function downloadVimrc() {
  downloadByUrl("https://raw.githubusercontent.com/jacktrusler/dotfiles/main/.vimrc", "vimrc_example");
}
