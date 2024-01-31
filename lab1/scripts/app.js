
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
                <li class="nav-item active"><a class="nav-link" href="#"><i class="fa fa-home"></i> Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-th-large"></i> Products</a></li>
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
      
        // Content Article
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
});

