const burgerBtn = document.querySelector('.burger__wrapper');
const burgerIcon = document.querySelector('.burger__icon');
const mobileMenu = document.querySelector('.mobile-menu'); // var for navigation
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
    burgerIcon.classList.toggle('active'); // class active provides burger animation
    mobileMenu.classList.toggle('active'); // navigation should be shown
      
    hasHomeMainActive();
});

// if window width less than 680px mobile nav is hidden
window.addEventListener('resize', function (event) {
    if (window.screen.availWidth > 1155) {
        burgerIcon.classList.remove('active');
        mobileMenu.classList.remove('active');
        homeMain.classList.remove('active');
    }
});