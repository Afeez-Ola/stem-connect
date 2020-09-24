const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-list');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    });
};

navSlide();
// let menuButton = document.querySelector('.kad-menu-button');

// let navItems = document.querySelector('.kad-nav');
// let barHide = document.querySelector('.kad-menu-bar-two');
// let barLeft = document.querySelector('.kad-menu-bar-one');
// let barRight = document.querySelector('.kad-menu-bar-three');

// menuButton.onclick = openMenu;

// function openMenu() {
//     navItems.classList.toggle('toggle-kad-nav');
//     barHide.classList.toggle('hide-bar-two');
//     barLeft.classList.toggle('cross-bar-one');
//     barRight.classList.toggle('cross-bar-three');
// }

// MENU

// CLOSE

// <
// svg
// class = "w-6 h-6"
// fill = "currentColor"
// viewBox = "0 0 20 20"
// xmlns = "http://www.w3.org/2000/svg" >
//     <
//     path
// fill - rule = "evenodd"
// d = "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// clip - rule = "evenodd" /
//     >
//     <
//     /svg>;