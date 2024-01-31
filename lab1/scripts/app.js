document.addEventListener('DOMContentLoaded', (event) => {
    // Navbar Content
    const navbarContent = `
        <div class="container-fluid"> 
            <a class="navbar-brand" href="#">INFT2202 - Lab1</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto"> 
                    <li class="nav-item active"><a class="nav-link" href="./index.html"><i class="fa fa-home"></i> Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="./projects.html"><i class="fa fa-th-large"></i> Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-cogs"></i> Services</a></li> 
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-info-circle"></i> About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-envelope"></i> Contact Us</a></li> 
                </ul>
            </div>
        </div>`;

    // Inject navbar
    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light bg-light';
    navbar.innerHTML = navbarContent;
    document.body.insertBefore(navbar, document.body.firstChild);

    // Check if it's the homepage
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        // Content Article for Home Page
        const articleContent = `
            <h1>Welcome to Our Website!</h1>
            <p>This is our webpage for Lab 1 in INFT2202 - 04</p>`;

        // Inject article
        const article = document.createElement('article');
        article.id = 'welcome-article';
        article.innerHTML = articleContent;
        const contentDiv = document.createElement('div');
        contentDiv.appendChild(article);
        document.body.insertBefore(contentDiv, navbar.nextSibling);

        // Add background class to the body
        $('body').addClass('homepage-background');
    }

    // Check if it's the projects page
    else if (window.location.pathname.includes('projects.html')) {
        // Projects Content
        const projectsContent = `
            <div class="container my-4">
                <h2>My Favorite Projects</h2>
                <div class="row">
                    <!-- Project 1 -->
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="./src/HorseRaceProject.png" alt="Project 1">
                            <div class="card-body">
                                <h5 class="card-title">Horse Race Project</h5>
                                <p class="card-text">In this project we created a virtual horse race in the terminal where each horse would randomly move one, two or zero spaces.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Project 2 -->
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="./src/IceCreamProject.png" alt="Project 2">
                            <div class="card-body">
                                <h5 class="card-title">Ice Cream Shop Project</h5>
                                <p class="card-text">In this project we created a little UI within the terminal for inventory management of an Ice Cream Shop. The user could add or remove flavours along with setting the price.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Project 3 -->
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="./src/RockPaperScissors.png" alt="Project 3">
                            <div class="card-body">
                                <h5 class="card-title">Rock, Paper, Scissors Project</h5>
                                <p class="card-text">In this project we created a rock paper scissors game in the terminal that users could play against an AI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        // Inject projects content
        const projectsContainer = document.createElement('div');
        projectsContainer.innerHTML = projectsContent;
        document.body.appendChild(projectsContainer);
    }
});
