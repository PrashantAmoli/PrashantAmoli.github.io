// Nav Elements
const home = document.getElementById('home')
const skills = document.getElementById('skills')
const contact = document.getElementById('contact')

// Responsive Navbar -Burger
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')

burger.addEventListener('click', () => {
  navlist.classList.toggle('vclass')
  navbar.classList.toggle('hnav')
})
