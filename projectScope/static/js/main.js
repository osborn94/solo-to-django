// menu button for mobile 
const menuBtn = document.querySelector('.menuIcon')
const navlinks = document.querySelector('.nav-links')
const line = document.querySelector('.line')
menuBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')
    line.classList.toggle('mobile-menu')
})
// scroll to Blog section
function scrollToClass(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Select all <li> elements within the ex-pro-colls class to uppercase
const listItems = document.querySelectorAll('.colls-one ul li');
// Iterate over each <li> element
listItems.forEach(item => {
    // Change the text content to uppercase
    item.textContent = item.textContent.toUpperCase();
});

// Attach icon to explore departments
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.colls-one ul li');

    listItems.forEach(item => {
        // Create a new <i> element for the icon
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-building-columns';

        icon.style.padding = '10px';
        // Insert the icon before the text in the list item
        item.prepend(icon);
    });
});

// Animation for my image in header section
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the flipping of images
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add flip class when image comes into view
                entry.target.classList.add('flip');
                entry.target.classList.remove('hidden');
            } else {
                // Remove flip class when image goes out of view
                entry.target.classList.remove('flip');
                entry.target.classList.add('hidden');
            }
        });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Trigger when at least 50% of the image is visible
    });

    // Target all images in the grid
    const images = document.querySelectorAll('.image-grid img');
    
    // Observe each image
    images.forEach(image => {
        // Add hidden class initially
        image.classList.add('hidden');
        observer.observe(image);
    });
});



  