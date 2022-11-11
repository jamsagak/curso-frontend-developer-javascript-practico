const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDektopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside);



function toggleDektopMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }   
desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
}



function toggleCarritoAside () {
const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
if (!ismobileMenuClosed) {
    mobileMenu.classList.add('inactive');
}

aside.classList.toggle('inactive');

}

    