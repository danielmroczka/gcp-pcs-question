// navigation.js

// 1. Toggling mechanism
document.body.addEventListener('click', function(e) {
    if (e.target.matches('.reveal-solution')) {
        e.preventDefault();
        const container = e.target.closest('.q-card');
        const mainContainer = container.closest('.q-page');
        const sections = mainContainer.querySelectorAll('.q-answer, .ai-analysis-container');
        
        sections.forEach(sec => {
            sec.classList.toggle('d-none');
        });
        
        e.target.textContent = sections[0].classList.contains('d-none') ? 'Show Suggested Answer' : 'Hide Suggested Answer';
    }
});

// 2. Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        const prev = document.querySelector('.q-nav a[href*="Poprzednie"]');
        if (prev) prev.click();
    } else if (e.key === 'ArrowRight') {
        const next = document.querySelector('.q-nav a[href*="Następne"]');
        if (next) next.click();
    }
});

// 3. Robust Swipe navigation for mobile
let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) < minSwipeDistance) return;

    if (swipeDistance < 0) { // Swipe Left (Next)
        const next = document.querySelector('.q-nav a[href*="Następne"]');
        if (next) next.click();
    } else { // Swipe Right (Previous)
        const prev = document.querySelector('.q-nav a[href*="Poprzednie"]');
        if (prev) prev.click();
    }
}
