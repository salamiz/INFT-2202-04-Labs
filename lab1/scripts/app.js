$(document).ready(function() {
    var navbarHtml = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand" href="#">INFT2202 - Lab1</a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarNav">' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item active"><a class="nav-link" href="#">Home</a></li>' +
        '<li class="nav-item"><a class="nav-link" href="#">Products</a></li>' + 
        '<li class="nav-item"><a class="nav-link" href="#">Services</a></li>' +
        '<li class="nav-item"><a class="nav-link" href="#">About Us</a></li>' +
        '<li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>' +
        '</ul>' +
        '</div>' +
        '</nav>';
        console.log("jQuery is running");
    $("#navbar-container").html(navbarHtml);
});
