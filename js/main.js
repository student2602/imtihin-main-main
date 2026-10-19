const button = document.querySelector(".hamburger")
const nav = document.querySelector(".header__nav")

button.addEventListener("click",function(){
    console.log('bolsildi');
    
    button.classList.toggle('haamburger--open');
    nav.classList.toggle('header__nav--active')
})