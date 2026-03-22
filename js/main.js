// Hamburger menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollY >= top && scrollY < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Navbar shadow
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Highlight today in opening hours
const dayIndex = new Date().getDay();
const dayMap = [6, 0, 1, 2, 3, 4, 5]; // Sun=6, Mon=0...
const rows = document.querySelectorAll('.godziny-table tr');
if (rows[dayMap[dayIndex]]) {
    rows[dayMap[dayIndex]].classList.add('today');
}
