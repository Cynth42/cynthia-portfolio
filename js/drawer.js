// open&close hamburger menu
     const hamburger_menu = document.getElementById('hamburger_menu');
     const drawer = document.getElementById('drawer');

     hamburger_menu.addEventListener('click', function() {
     drawer.classList.toggle('open');
    });
