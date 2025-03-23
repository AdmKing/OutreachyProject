document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("banner");
  const select = document.getElementById("bg-select");

  select.addEventListener("change", function() {
    const selectedImage = select.value;

    if (selectedImage) {
      banner.style.opacity = "0"; // Start fade-out effect
      setTimeout(() => {
          banner.style.backgroundImage = `url('${selectedImage}')`;
          banner.style.opacity = "1"; // Fade-in effect
      }, 300); // Wait a bit before changing the image
    } else {
        banner.style.backgroundImage = ""; // Reset if "Choose..." is selected
    }
  });
});