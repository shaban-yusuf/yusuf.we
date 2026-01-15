// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu ul');
    
    // Add a toggle button for mobile if it doesn't exist, 
    // or just handle the search bar responsiveness
    const searchInput = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query !== "") {
            alert(`Searching for: ${query}`);
            // Logic to filter parts or redirect to search page
        }
    });

    /* --- 2. Smooth Scrolling for Navigation --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* --- 3. Quote Form Handling --- */
    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = quoteForm.querySelector('input[placeholder="Your Name"]').value;
            const service = quoteForm.querySelector('select').value;

            // Simple validation/Success message
            alert(`Thank you, ${name}! Your request for ${service} has been sent. Our Mombasa team will contact you shortly.`);
            quoteForm.reset();
        });
    }

    /* --- 4. Navbar Background Change on Scroll --- */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });
    const slider = document.getElementById("gallery-slider");
const nextButton = document.getElementById("slide-arrow-next");
const prevButton = document.getElementById("slide-arrow-prev");

nextButton.addEventListener("click", () => {
    const itemWidth = slider.querySelector('.gallery-item').clientWidth;
    slider.scrollLeft += itemWidth + 20; // width + gap
});

prevButton.addEventListener("click", () => {
    const itemWidth = slider.querySelector('.gallery-item').clientWidth;
    slider.scrollLeft -= itemWidth + 20;
});

});
