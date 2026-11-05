document.addEventListener('DOMContentLoaded', () => {
    
    // Select element target references
    const ctaButton = document.getElementById('ctaBtn');
    const serviceCards = document.querySelectorAll('.service-card');

    // 1. Setup Simple Click event logic to simulate functional interactivity
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('CTA Interactive Trigger Working! This template setup coordinates script layers correctly.');
        });
    }

    // 2. Optional: Small subtle dynamic card fade-in effect via Intersection Observer 
    const cardObserverOptions = {
        root: null,
        threshold: 0.15
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);

    // Initialize individual base values cleanly
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        cardObserver.observe(card);
    });
});