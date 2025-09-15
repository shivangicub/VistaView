// Change background color on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const body = document.body;

    if (scrollY > 100) {
        body.style.backgroundColor = '#f0f4f8';
    } else {
        body.style.backgroundColor = 'white';
    }
});

// Optional: Dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '8px 12px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode CSS via JS
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #1a1a1a !important;
        color: #f0f0f0 !important;
    }
    .dark-mode p, .dark-mode em, .dark-mode strong {
        color: #f0f0f0 !important;
    }
`;
document.head.appendChild(style);
