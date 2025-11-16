document.addEventListener('DOMContentLoaded', () => {
    // Select the skills section for scroll observation
    const skillsSection = document.getElementById('skills');
    // Select all skill items
    const skillItems = document.querySelectorAll('.skill-item');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the section is visible
    };

    // The function to run when the section enters the viewport
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the skills section is visible, start the animation
                animateSkillBars();
                // Stop observing once the animation has been triggered
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Function to apply the CSS transition (the skill animation)
    function animateSkillBars() {
        skillItems.forEach(item => {
            const level = item.dataset.level; // Get level from HTML data attribute
            const skillLevelBar = item.querySelector('.skill-level');
            
            // Set the width, which triggers the CSS transition: width 1.5s ease-out
            skillLevelBar.style.width = level + '%';
        });
    }

    // Start observing the skills section
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});