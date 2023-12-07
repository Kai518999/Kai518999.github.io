// JavaScript for handling dark mode toggle and persistence
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const header = document.querySelector('.header');
const miniCloud = document.querySelector('.mini-cloud');
const slider = document.querySelector('.slider');

const toggleMode = () => {
  body.classList.toggle('night-mode');
  header.classList.toggle('header-night');
  miniCloud.classList.toggle('mini-cloud-night');
  slider.classList.toggle('slider-night');

  // Save dark mode preference to browser storage using a consistent key
  localStorage.setItem('userDarkModePreference', body.classList.contains('night-mode') ? 'true' : 'false');
};

darkModeToggle.addEventListener('click', toggleMode);

// Check and apply stored dark mode preference on page load
if (localStorage.getItem('userDarkModePreference') === 'true') {
  body.classList.add('night-mode');
  header.classList.add('header-night');
  miniCloud.classList.add('mini-cloud-night');
  slider.classList.add('slider-night');
}

//  // JavaScript for handling the mobile menu toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const navigation = document.querySelector('.navigation');

// menuToggle.addEventListener('click', () => {
//   navigation.classList.toggle('open');
// });
// /*Change*/
// function toggleMode() {
//   var body = document.body;
//   var HNavN= document.querySelector(".header")
//   var cloudn=document.querySelector(".mini-cloud")
//   var moon =document.querySelector(".slider")

//   body.classList.toggle("night-mode");
//   HNavN.classList.toggle("header-night");
//   cloudn.classList.toggle("mini-cloud-night");
//   moon.classList.toggle("slider-night")


 
//  // Save dark mode preference to browser storage
//   localStorage.setItem('darkMode', body.classList.contains('night-mode') ? 'true' : 'false');
// };

// darkModeToggle.addEventListener('click', toggleMode);

// // Check and apply stored dark mode preference on page load
// if (localStorage.getItem('darkMode') === 'true') {
//   toggleMode();
// }


// // JavaScript for handling the mobile menu toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const navigation = document.querySelector('.navigation');

// menuToggle.addEventListener('click', () => {
//   navigation.classList.toggle('open');
// });
// /*Change*/
// function toggleMode() {
//   var body = document.body;
//   var HNavN= document.querySelector(".header")
//   var cloudn=document.querySelector(".mini-cloud")
//   var moon =document.querySelector(".slider")

//   body.classList.toggle("night-mode");
//   HNavN.classList.toggle("header-night");
//   cloudn.classList.toggle("mini-cloud-night");
//   moon.classList.toggle("slider-night")
// }
