
/**
 * Add class to the body
 */
$(document).ready(function() {

    // Add background class to the body
    $('body').addClass('homepage-background');
});

/**
 * Changing Products to Projects in the Navbar
 */
function changeProductsToProjects() {
    // Select the navbar items
    $('.navbar-nav .nav-item .nav-link').each(function() {
        var $link = $(this);
        // Check if the text is 'Products'
        if ($link.text().trim() === 'Products') {
            // Find the icon within the link
            var $icon = $link.find('i.fa');
            // Change the icon class 
            $icon.removeClass('fa-th-large').addClass('fa-folder-open');
            // Change the text to 'Projects', keeping the icon
            $link.html($icon[0].outerHTML + ' Projects');
        }
    });
}

// Calling the function after the document is ready
$(document).ready(function() {
    changeProductsToProjects();
});

/**
 * Adding a new item to the navbar
 */
$(document).ready(function() {
    // Create the new list item with an anchor tag
    var newNavItem = $('<li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-users"></i> Human Resources</a></li>');

    // Find the 'About Us' link in the navbar
    var aboutUsNavItem = $('.navbar-nav .nav-item').filter(function() {
        return $(this).find('.nav-link').text().trim() === 'About Us';
    });

    // Insert the new item after the 'About Us' item
    newNavItem.insertAfter(aboutUsNavItem);
});


/**
 * Add fixed navar to the bottom of the page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create the navbar container
    var navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light bg-light fixed-bottom';

    // Create the container inside the navbar
    var container = document.createElement('div');
    container.className = 'container-fluid';

    // Create the copyright statement
    var currentDate = new Date().getFullYear();
    var copyright = document.createElement('span');
    copyright.textContent = `© ${currentDate} Group 15`;

    // Append elements together
    container.appendChild(copyright);
    navbar.appendChild(container);
    document.body.appendChild(navbar);
});

// NavBar toggler for smaller screens
$('.navbar-toggler').click(function() {
    $('#navbarNav').collapse('toggle');
});




