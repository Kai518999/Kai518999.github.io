// JavaScript for handling the mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
});