// Get the element
const section = document.getElementById('section');

// Function to check if element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in view
function addAnimation() {
    if (isInViewport(section)) {
        section.querySelector('.animate__animated').classList.add('animate__slideInUp');
        // Remove the event listener to avoid adding animation multiple times
        window.removeEventListener('scroll', addAnimation);
    }
}

// Add event listener to trigger animation on scroll
window.addEventListener('scroll', addAnimation);

// Trigger animation initially if element is already in view
addAnimation();