gsap.from('.logo div', {
    opacity: 0,
    delay: .5,
    rotation: 50, // Full rotation
    scale: 0.5, // Start smaller
    ease: 'back.out(1.7)', // Bouncy easing
    duration: 1.5
});
const menuItems = document.querySelector('.menu-items');
gsap.from(menuItems.children, {
    opacity: 0,
    delay: .5,
    x: 0,
    duration: .7,
    stagger: {
        amount: 1.5
    }
});
gsap.utils.toArray('.star').forEach(star => {
    gsap.fromTo(star, {
        rotation: 350,
        opacity: 0,
        y: 100,
    }, {
        rotation: 100,
        opacity: 1,
        y: 0,
        duration: 2,
        delay: .5,
        scrollTrigger: star,
        ease: 'power4.out'
    })
})
gsap.utils.toArray('.title').forEach(title => {
    gsap.fromTo(title, {
        opacity: 0,
        x: 100,
        skewX: 10
    }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 2,
        delay: .5,
        scrollTrigger: title,
        ease: 'power4.out'
    })
})

// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Define a reusable function for section animations
function animateSection(section) {
    const images = section.querySelectorAll('.image'); // Keep this as querySelectorAll since there might be multiple images
    const title = section.querySelector('.title');
    const paragraph = section.querySelector('.p'); // Assuming there's only one paragraph
    const line = section.querySelector('.line');
    const button = section.querySelector('button');

    // Animation for images
    gsap.fromTo(images,
        { x: -200, opacity: 0, scale: 0.8 },
        {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
                scrub: true,
            }
        }
    );

    // Animation for the title
    if (title) {
        gsap.fromTo(title,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                    scrub: true,
                }
            }
        );
    }

    // Animation for the single paragraph
    if (paragraph) {
        gsap.fromTo(paragraph,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                    scrub: true,
                }
            }
        );
    }

    // Line fade-in with a slight delay
    if (line) {
        gsap.fromTo(line,
            { scaleX: 0, opacity: 0 },
            {
                scaleX: 1,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                    scrub: true,
                }
            }
        );
    }

    // Button animation sliding in from the bottom
    if (button) {
        gsap.fromTo(button,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                    scrub: true,
                }
            }
        );
    }
}

// Apply the animation to all sections
document.querySelectorAll('section').forEach(section => {
    animateSection(section);
});



