const contentArea = document.getElementById("contentArea");
const mainImage = document.getElementById("mainImage");
const mainHeading = document.getElementById("mainHeading");

// When the mouse moves over the content area
contentArea.addEventListener("mouseover", function () {
  mainImage.src = "night.svg";
  mainImage.alt = "Nighttime scene";
  mainHeading.textContent = "Good night, moon is out!";
});

// When the mouse moves away from the content area
contentArea.addEventListener("mouseout", function () {
  mainImage.src = "day.svg";
  mainImage.alt = "Daytime scene";
  mainHeading.textContent = "Hover over me!";
});
