// Handle arrows for movie lists
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

// Toggle dark/light mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
);

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

// Navbar link active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

// Logout popup on hover
const profilePictureContainer = document.querySelector('.profile-picture-container');
const logoutPopup = document.querySelector('.logout-popup');

profilePictureContainer.addEventListener('mouseover', () => {
    logoutPopup.style.display = 'block';
});

profilePictureContainer.addEventListener('mouseleave', () => {
    logoutPopup.style.display = 'none';
});

// Logout button click event (optional)
const logoutButton = document.querySelector('.logout-button');

logoutButton.addEventListener('click', () => {
    // Implement logout functionality here
    alert('Logged out');
});

// Sidebar smooth scrolling functionality
document.querySelectorAll('.left-menu-icon-wrapper').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Get the target element's ID from the href attribute
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // If the target element exists, scroll to it smoothly
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});
