 'use strict';

// Open & close hamburger menu
const menu = document.getElementById('menu');
const drawer = document.getElementById('drawer');

menu.addEventListener('click', function() {
  drawer.classList.toggle('open');
});

//Sticky Navigational Bar
const stickyNavbar = document.getElementById("nav")
const sticky = stickyNavbar.offsetTop

window.addEventListener("scroll", function(evt) {
    requestAnimationFrame(function() {
        if (window.pageYOffset >= sticky){
            stickyNavbar.classList.contains('sticky')
        }
        else{
            stickyNavbar.classList.remove('sticky')
        }
    })
})

//Scroll to the top of page
$(".scroll__top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
