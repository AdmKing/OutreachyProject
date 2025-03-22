document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("banner");
  const select = document.getElementById("bg-select");

  select.addEventListener("change", function() {
      const selectedImage = select.value;
      banner.style.backgroundImage = `url('${selectedImage}')`;
  });
});