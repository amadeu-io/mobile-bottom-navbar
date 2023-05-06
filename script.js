const navItems = document.querySelectorAll("li");
const nightSwitch = document.querySelector(".switch");
const nightSlider = document.querySelector(".slider");

navItems.forEach((item, index) => {
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
nightSwitch.addEventListener("click", () => {
  nightSlider.classList.toggle('night-on');
});
