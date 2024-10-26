// Function to show a specific section based on the section ID
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to toggle the mobile menu
function toggleMobileMenu() {
    const mobileNavLinks = document.getElementById('mobile-nav-links');
    mobileNavLinks.classList.toggle('active');
}

// Hide menu when a link is clicked
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const mobileNavLinks = document.getElementById('mobile-nav-links');
        mobileNavLinks.classList.remove('active'); // Hide the menu
    });
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', function(event) {
    const mobileNavLinks = document.getElementById('mobile-nav-links');
    const isClickInside = mobileNavLinks.contains(event.target) || event.target.closest('.hamburger');
    
    if (!isClickInside) {
        mobileNavLinks.classList.remove('active'); // Hide the menu
    }
});

// Another function to show a section with smooth scroll adjustment
function showSectionWithScroll(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');

    // Scroll adjustment to account for the fixed header
    const headerHeight = document.querySelector('.desktop-nav').offsetHeight;
    window.scrollTo({
        top: sectionToShow.offsetTop - headerHeight,
        behavior: 'smooth'
    });
}
