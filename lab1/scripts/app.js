$(document).ready(function() {
    // Navbar setup
    var navbarHtml = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
    '<a class="navbar-brand" href="#">INFT2202 - Lab1</a>' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item active"><a class="nav-link" href="#"><i class="fa fa-home"></i> Home</a></li>' + // Home icon
        '<li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-th-large"></i> Projects</a></li>' + // Projects icon
        '<li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-cogs"></i> Services</a></li>' + // Services icon
        '<li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-info-circle"></i> About Us</a></li>' + // About Us icon
        '<li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-envelope"></i> Contact Us</a></li>' + // Contact Us icon
        '</ul>' +
        '</div>' +
        '</nav>';
    
    // Inject navbar into the navbar-container
    $("#navbar-container").html(navbarHtml);

    // Add background class to the body
    $('body').addClass('homepage-background');
});

