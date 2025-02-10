const desktopOverlay = document.getElementsByClassName('desktop-overlay')[0];

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'u') {
      event.preventDefault();
      if (desktopOverlay) {
        desktopOverlay.hidden = !desktopOverlay.hidden;
      }
  }
});
