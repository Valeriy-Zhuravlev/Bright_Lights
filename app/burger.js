const burgerBtn = document.querySelector('.burger__wrapper');
const burgerIcon = document.querySelector('.burger__icon');
const mobileMenu = document.querySelector('.mobile-menu');
const homeMain = document.querySelector('.home__main');

function hasHomeMainActive() {
    if (burgerIcon.classList.contains('active')) {
        homeMain.classList.add('active');
    }
    else {
        homeMain.classList.remove('active');
    }
}

burgerBtn.addEventListener('click', function () {
    burgerIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');
      
    hasHomeMainActive();
});

window.addEventListener('resize', function (event) {
    if (window.screen.availWidth > 1155) {
        burgerIcon.classList.remove('active');
        mobileMenu.classList.remove('active');
        homeMain.classList.remove('active');
    }
});