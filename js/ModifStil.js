// Modify style of navbar elements
window.addEventListener("DOMContentLoaded", () => {
  let menuItems = [...document.querySelectorAll(".menu-items li a")];
  menuItems.forEach(function(item) {
    item.style.color = "white";
    item.style.fontWeight = "bold";
    console.log("Salut frate");
  });

// "Our Services"
var servicesSection = document.querySelector(".services-section");
servicesSection.style.padding = "40px";
servicesSection.style.backgroundColor = "#f2f2f2";

// Modify style for grid elements
var serviceItems = document.querySelectorAll(".service-item");
serviceItems.forEach(function(item) {
  item.style.border = "1px solid #ccc";
  item.style.padding = "20px";
});

})