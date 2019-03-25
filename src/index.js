import "./main.scss";
import { initFormValidation } from "./contact-form-validation";
console.log("init website");

// document.addEventListener("DOMContentLoaded", () => {
//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll(".navbar-burger"),
//     0
//   );

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach(el => {
//       el.addEventListener("click", () => {
//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle("is-active");
//         $target.classList.toggle("is-active");
//       });
//     });
//   }
// });

window.addEventListener("load", function() {
  document.getElementById("hamburger-icon").addEventListener("click", event => {
    document.getElementById("hamburger-icon").classList.toggle("open");
    document.getElementById("menu-items").classList.toggle("hidden");
  });

  //init form handling
  //initFormValidation();
  //TODO test
});
