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

// 3. Pointer events for robust swipe detection (replaces touch events)
let pointerStartX = 0;
let pointerEndX = 0;
const minSwipeDistance = 50;

document.addEventListener('pointerdown', e => {
    pointerStartX = e.clientX;
    // Log for debugging (open console to check)
    console.log("Pointer down at:", pointerStartX);
}, { passive: true });

document.addEventListener('pointerup', e => {
    pointerEndX = e.clientX;
    console.log("Pointer up at:", pointerEndX);
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeDistance = pointerEndX - pointerStartX;
    
    console.log("Swipe attempt, distance:", swipeDistance);
    
    if (Math.abs(swipeDistance) < minSwipeDistance) return;

    if (swipeDistance < 0) { // Swipe Left (Next)
        const next = document.querySelector('.q-nav a[href*="Następne"]');
        if (next) {
            console.log("Navigating to next question");
            next.click();
        }
    } else { // Swipe Right (Previous)
        const prev = document.querySelector('.q-nav a[href*="Poprzednie"]');
        if (prev) {
            console.log("Navigating to previous question");
            prev.click();
        }
    }
}
