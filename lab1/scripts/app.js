/**
 * Name: Zulkifli Salami
 * Student ID: 100850581
 * Date Completed: 02/22/2024
 */


// User Class
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}



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
                        <li class="nav-item"><a class="nav-link" href="services.html"><i class="fa fa-cogs"></i> Services</a></li> 
                        <li class="nav-item"><a class="nav-link" href="about.html"><i class="fa fa-info-circle"></i> About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="contactForm.html"><i class="fa fa-envelope"></i> Contact Us</a></li> 
                        <li class="nav-item"><a class="nav-link" href="login.html"><i class="fa fa-sign-in"></i> Login</a></li>
                        <li class="nav-item"><a class="nav-link" href="register.html"><i class="fa fa-user-plus me-1" aria-hidden="true"></i> Sign Up</a></li>
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

/**
 * Creates the contents of the About Us Page
 */
function createAboutUs() {
    var aboutContent = `
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-6">
                    <h2>About Me</h2>
                    <p>I am a seasoned softare developer with years of experience in Full Stack Development.</p>
                    <a href="https://www.linkedin.com/in/zulkifli-salami/" class="btn btn-primary" target="_blank">Linkedln Profile</a>
                </div>
                <div class="col-lg-6">
                    <img src="./src/Zul.jpeg" alt="Zul" class="img-fluid rounded-circle">
                </div>
            </div>
        </div>
    `;

    // Append the about content to the main content area
    $('#main-content').html(aboutContent);
}


/**
 * Creates the contents of the Services Page
 */
function createServicesPage() {
    var servicesContent = `
        <div class="container mt-5">
            <div class="row">
                <!-- Custom Programming -->
                <div class="col-md-4">
                    <div class="card">
                        <img src="./src/customProgramming.jpeg" class="card-img-top" alt="Custom Programming">
                        <div class="card-body">
                            <h5 class="card-title">Custom Programming</h5>
                            <p class="card-text">We offer bespoke software solutions tailored to your business needs, specializing in backend systems, automation, and data analysis.</p>
                        </div>
                    </div>
                </div>
                <!-- Web Design -->
                <div class="col-md-4">
                    <div class="card">
                        <img src="./src/webDesign.jpeg" class="card-img-top" alt="Web Design">
                        <div class="card-body">
                            <h5 class="card-title">Web Design</h5>
                            <p class="card-text">Our team crafts responsive, aesthetically pleasing websites focused on usability, ensuring your visitors enjoy a seamless experience.</p>
                        </div>
                    </div>
                </div>
                <!-- Mobile Development -->
                <div class="col-md-4">
                    <div class="card">
                        <img src="./src/mobiledev.jpeg" class="card-img-top" alt="Mobile Development">
                        <div class="card-body">
                            <h5 class="card-title">Mobile Development</h5>
                            <p class="card-text">We develop high-quality iOS and Android applications that engage your audience and enhance your digital presence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append the services content to the main content area
    $('#main-content').html(servicesContent);
}

/**
 * Prepares the login page with necessary events
 */
function prepareLoginPage() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get the username from the input field
        var username = $('#username').val().trim();

        // Create a new navbar-text element with the username
        var usernameNavItem = $('<span class="navbar-text me-3">').text(username);

        // Find the Contact Us link in the navbar
        var contactUsNavItem = $('.navbar-nav .nav-item').filter(function() {
            return $(this).find('.nav-link').text().trim() === 'Contact Us';
        });

        // Insert the usernameNavItem before the contactUsNavItem
        usernameNavItem.insertAfter(contactUsNavItem);

        // Optionally, clear the form or redirect the user to another page
        $('#username').val('');
        $('#password').val('');
    });
}


// Function to prepare the Register Page functionality
function prepareRegisterPage() {
    // Create and hide the error message div
    var $errorMessage = $('<div id="ErrorMessage" style="display: none;" class="alert alert-danger"></div>');
    $('#main-content').prepend($errorMessage);

    // Event listener for the register form submission
    $('#register-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var firstName = $('#firstName').val().trim();
        var lastName = $('#lastName').val().trim();
        var email = $('#email').val().trim();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        // Clear previous error messages
        $errorMessage.hide().text('');

        // Check if first name and last name are at least 2 characters long
        if (firstName.length < 2 || lastName.length < 2) {
            $errorMessage.text('First Name and Last Name must be at least 2 characters long.').show();
            return;
        }

        // Check if email is valid
        if (email.length < 8 || !email.includes('@')) {
            $errorMessage.text('Email must be at least 8 characters long and contain an "@" symbol.').show();
            return;
        }

        // Check if passwords match and are at least 6 characters long
        if (password !== confirmPassword || password.length < 6) {
            $errorMessage.text('Passwords must match and be at least 6 characters long.').show();
            return;
        }

        // If all checks pass, create a new User instance
        var user = new User(firstName, lastName, email, password);

        // Log the user object to the console
        console.log(user);

        // Clear the form
        $('#register-form')[0].reset();
    });
}


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
        case "about.html":
            // Function to dynamically create the services page, for example
            createAboutUs();
            break;
        case "contactForm.html":
            // Function to dynamically create the services page, for example
            createContactForm();
            break;
        case "login.html":
            // Function to implement login page functionality
            prepareLoginPage();
            break;
        case "register.html":
            // Function to implement register page functionality
            prepareRegisterPage();
            break;
        default:
            // Default case can be used for common functionality across all pages
            // or for handling unknown pages.
            console.log("This is a shared or unknown page.");
            break;
    }
});


