console.log("sanity check!", $);

(function() {
    var hamburgerButton = document.getElementById('hamburger-button');
    var x = document.querySelector('#hamburger-menu .x');
    var menu = document.getElementById('menu');
    var hamburgerMenu = document.getElementById('hamburger-menu');

    hamburgerButton.addEventListener('click', function() {
        hamburgerMenu.classList.add('on');
    });

    x.addEventListener('click', function() {
        hamburgerMenu.classList.remove('on');
    });

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.remove('on');
    });

    menu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
})();

