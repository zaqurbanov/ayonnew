const menuButton = document.querySelector(".menu-icon");
const responsiveMenu = document.querySelector('.nav-list');
menuButton.addEventListener('click',()=>{
    menuButton.classList.toggle('active');
    responsiveMenu.classList.toggle("active");



})