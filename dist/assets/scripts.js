function openMobileMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('is-active');
}

function closeMobileMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('is-active');
}

function toggleMobileMenu() {
    var mobileMenu = document.getElementById('mobile-menu');

    if(mobileMenu.classList.contains('is-active')){
        closeMobileMenu()
    } else {
        openMobileMenu()
    }
}