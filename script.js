// ===================== Hamburger Menu =====================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ===================== Typing Animation =====================
const typingText = ["interactive websites", "modern web apps", "digital experiences"];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.querySelector('.typing');

function type() {
    if (!typingElement) return;
    const currentText = typingText[i];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, j--);
    } else {
        typingElement.textContent = currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % typingText.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}
type();

// ===================== Horizontal Skill Bars Animation =====================
const bars = document.querySelectorAll(".bar");
let barsAnimated = false; // Track if animation already happened

function animateBars() {
    bars.forEach(bar => {
        const value = bar.getAttribute("data-width"); // Get the final width
        bar.style.width = value;
    });
}

window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const rect = skillsSection.getBoundingClientRect();

    // Animate only when top of section is visible and hasn't animated yet
    if (!barsAnimated && rect.top < window.innerHeight - 100) {
        animateBars();
        barsAnimated = true;
    }
});

