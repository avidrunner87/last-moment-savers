$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.modal').modal();
    formatNavBar();
});

function formatNavBar() {
    if ($(window).width() <= 992) {
        $('.nav-wrapper').removeClass('container');
    } else {
        $('.nav-wrapper').addClass('container');
    }
}

// Change the format nav based on screen size
$(window).on('resize', formatNavBar);
