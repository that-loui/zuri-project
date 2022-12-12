const navToogle = document.querySelector("#navToogle");
const nav = document.querySelector("#nav-links");

navToogle.addEventListener("click", ()  => {
    nav.classList.toggle('nav-open')
} )