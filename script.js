// toggles the night mode classes
function toggleNightMode() {
  nightSlider.classList.toggle("night-switch");
  body.classList.toggle("night-mode");
}

// program starts here

const body = document.querySelector("body");
const navItems = document.querySelectorAll("li");
const nightSwitch = document.querySelector(".switch");
const nightSlider = document.querySelector(".slider");

// navbar click active color
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // remove active class from all links
    navItems.forEach((link) => {
      link.classList.remove("active");
    });

    // add active class to clicked link
    item.classList.add("active");
  });
});

// toggles night switch
nightSwitch.addEventListener("click", toggleNightMode);
