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

// Helper to find navigation links based on text content
function getNavLink(textPattern) {
    const links = document.querySelectorAll('.q-nav a');
    return Array.from(links).find(link => link.textContent.includes(textPattern));
}

// 2. Keyboard navigation & Shortcuts (Desktop)
document.addEventListener('keydown', function(e) {
    // Avoid triggering when focused on input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    if (e.key === 'ArrowLeft') {
        const prev = getNavLink('Poprzednie');
        if (prev) prev.click();
    } else if (e.key === 'ArrowRight') {
        const next = getNavLink('Następne');
        if (next) next.click();
    } else if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter' || e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 's') {
        // Shortcuts: Space, Enter, 'A', or 'S' keys to show/hide the Suggested Answer
        const btn = document.querySelector('.reveal-solution');
        if (btn) {
            e.preventDefault(); // Prevent scrolling when pressing Space
            btn.click();
        }
    }
});

// 3. Swipe navigation (Mobile - Swipe Left/Right)
document.body.style.touchAction = 'pan-y';

let pointerStartX = 0;
let pointerEndX = 0;
const minSwipeDistance = 50;

document.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'touch') return;
    pointerStartX = e.clientX;
}, { passive: true });

document.addEventListener('pointerup', e => {
    if (e.pointerType !== 'touch') return;
    pointerEndX = e.clientX;
    handleSwipe();
}, { passive: true });

document.addEventListener('pointercancel', e => {
    if (e.pointerType !== 'touch') return;
    pointerStartX = 0;
    pointerEndX = 0;
}, { passive: true });

function handleSwipe() {
    const swipeDistance = pointerEndX - pointerStartX;
    
    pointerStartX = 0;
    pointerEndX = 0;

    if (Math.abs(swipeDistance) < minSwipeDistance) return;

    if (swipeDistance < 0) { // Swipe Left (Next Question)
        const next = getNavLink('Następne');
        if (next) next.click();
    } else { // Swipe Right (Previous Question)
        const prev = getNavLink('Poprzednie');
        if (prev) prev.click();
    }
}
