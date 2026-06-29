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

// 3. Robust Swipe navigation (Pointer events + touch-action fix)
document.body.style.touchAction = 'pan-y';

let pointerStartX = 0;
let pointerEndX = 0;
const minSwipeDistance = 50;

document.addEventListener('pointerdown', e => {
    pointerStartX = e.clientX;
}, { passive: true });

document.addEventListener('pointerup', e => {
    pointerEndX = e.clientX;
    handleSwipe();
}, { passive: true });

// Handle cases where the browser cancels the pointer gesture (e.g., scroll started)
document.addEventListener('pointercancel', e => {
    pointerStartX = 0;
    pointerEndX = 0;
}, { passive: true });

function handleSwipe() {
    const swipeDistance = pointerEndX - pointerStartX;
    
    // Reset after calculation
    pointerStartX = 0;
    pointerEndX = 0;

    if (Math.abs(swipeDistance) < minSwipeDistance) return;

    if (swipeDistance < 0) { // Swipe Left (Next)
        const next = document.querySelector('.q-nav a[href*="Następne"]');
        if (next) next.click();
    } else { // Swipe Right (Previous)
        const prev = document.querySelector('.q-nav a[href*="Poprzednie"]');
        if (prev) prev.click();
    }
}
