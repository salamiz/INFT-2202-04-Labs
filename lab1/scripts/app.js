/**
 * Load the document and add the welcome text.
 */
$(document).ready(function() {
    createHeader(); // This is common and needed on every page
    changeProductsToProjects();
    addHumanResourcesNavItem();
    // NavBar toggler for smaller screens - common functionality
    $('.navbar-toggler').click(function() {
        $('#navbarNav').collapse('toggle');
    });
    addFixedNavbar();

    // Get the current page name from the URL
    var pageName = window.location.pathname.split("/").pop();

    // Conditional loading of functions based on the page name
    switch (pageName) {
        case "index.html":
            setHomePageBackground();
            addWelcomeText();
            break;
        case "projects.html":
            // Assuming you have a function to dynamically create the projects page
            createProjectsPage();
            break;
        case "services.html":
            // Function to dynamically create the services page, for example
            createServicesPage();
            break;
        case "aboutUs.html":
            // Function to dynamically create the services page, for example
            createAboutUs();
            break;
        case "contactForm.html":
            // Function to dynamically create the services page, for example
            createContactForm();
            break;
        default:
            // Default case can be used for common functionality across all pages
            // or for handling unknown pages.
            console.log("This is a shared or unknown page.");
            break;
    }
});


/**
 * Dynamically creates and inserts the header into the page.
 */
function createHeader() {
    var headerHtml = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid"> 
                <a class="navbar-brand" href="index.html">INFT2202 - Labs</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto"> 
                        <li class="nav-item active"><a class="nav-link" href="index.html"><i class="fa fa-home"></i> Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="projects.html"><i class="fa fa-th-large"></i> Products</a></li>
                        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-cogs"></i> Services</a></li> 
                        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-info-circle"></i> About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="contactForm.html"><i class="fa fa-envelope"></i> Contact Us</a></li> 
                    </ul>
                </div>
            </div>
        </nav>
    `;
    // Insert the header HTML into the navbar-placeholder
    $('#navbar-placeholder').html(headerHtml);
}

/**
 * Set background image for the homepage
 */
function setHomePageBackground() {
    // Assuming 'homepage-background' class has background image set in CSS
    $('#main-content').addClass('homepage-background');
}

/**
 * Add welcome text to the homepage
 */
function addWelcomeText() {
    var welcomeSection = $('<div>', { id: 'welcome-section' });
    var welcomeArticle = $('<article>', { id: 'welcome-article' });
    welcomeArticle.append($('<h1>').text('Welcome to Our Website!'));
    welcomeArticle.append($('<p>').text('This is our webpage for INFT2202 - 04 Labs.'));
    welcomeSection.append(welcomeArticle);
    $('#main-content').append(welcomeSection);
}



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


/**
 * Adding a new item to the navbar
 */
function addHumanResourcesNavItem() {
    // Create the new list item with an anchor tag
    var newNavItem = $('<li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-users"></i> Human Resources</a></li>');

    // Find the 'About Us' link in the navbar
    var aboutUsNavItem = $('.navbar-nav .nav-item').filter(function() {
        return $(this).find('.nav-link').text().trim() === 'About Us';
    });

    // Insert the new item after the 'About Us' item
    newNavItem.insertAfter(aboutUsNavItem);
};


/**
 * Add fixed navar to the bottom of the page
 */
function addFixedNavbar() {
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
};

/**
 * Creates the contents of the Projects Page
 */
function createProjectsPage() {
    // Define an array of project details
    var projects = [
        {
            name: "Horse Race Project",
            description: "Java Project - Simulating a Horse Race",
            imagePath: "src/HorseRaceProject.png"
        },
        {
            name: "Ice Cream Project",
            description: "Java Project - Ice Cream Shop",
            imagePath: "src/IceCreamProject.png"
        },
        {
            name: "Rock Paper Scissors Project",
            description: "Java Project - Rock Paper Scissors Game",
            imagePath: "src/RockPaperScissors.png"
        }
    ];

    // Create a container for the projects
    var projectsContainer = $('<div>', { id: 'projects-container', class: 'container mt-5' });

    projects.forEach(function(project) {
        // Create a card for each project
        var projectCard = $('<div>', { class: 'card', style: 'width: 18rem; float: left; margin-right: 20px;' });
        // Add image
        var projectImage = $('<img>', { class: 'card-img-top', src: project.imagePath, alt: project.name });
        // Create card body
        var cardBody = $('<div>', { class: 'card-body' });
        // Add project name
        var projectName = $('<h5>', { class: 'card-title' }).text(project.name);
        // Add project description
        var projectDescription = $('<p>', { class: 'card-text' }).text(project.description);

        // Assemble the card
        cardBody.append(projectName, projectDescription);
        projectCard.append(projectImage, cardBody);

        // Add the card to the container
        projectsContainer.append(projectCard);
    });

    // Add the projects container to the body (or to a specific element if preferred)
    $('#main-content').append(projectsContainer).addClass('projects-background');
}


/**
 * Creates the contents of the contact Form Page
 */
function createContactForm() {
    var contactFormHtml = `
        <div class="container">
            <h1 class="top-header" style="text-align: center">Contact Form</h1>
            <form id="contact-form" name="contact-form" onsubmit="return validateForm()">
                <p id="generalError"></p>
                
                <div class="form-group col-md-6">
                    <label for="nameInput">Full Name</label>
                    <input type="text" class="form-control" id="nameInput" placeholder="Full Name" required />
                    <p id="nameError"></p>
                </div>
            
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required />
                    <p id="emailError"></p>
                </div>
            
                <div class="form-group col-md-6">
                    <label for="inputPhone5">Phone</label>
                    <input type="tel" class="form-control" id="inputPhone5" placeholder="Phone Number" pattern="[0-9]{10}" required />
                    <p id="phoneError"></p>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputMessage">Message</label>
                    <textarea class="form-control" id="inputMessage" rows="3" placeholder="Your message" required></textarea>
                    <p id="messageError"></p>
                </div>
            
                <div class="form-group">
                    <input id="submit-reg-form" type="submit" value="Send" name="Submit" class="btn btn-primary" />
                    <input type="reset" value="Reset" name="Reset" class="btn btn-outline-primary" />
                </div>
            </form>
        </div>
    `;

    // Append the contact form HTML to the contactFormContainer area
    $('#main-content').html(contactFormHtml);
}
