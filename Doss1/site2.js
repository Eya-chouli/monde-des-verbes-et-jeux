// Animation pour la boîte fun
const funBox = document.getElementById('funBox');
const messages = [
    "J'aime te voir apprendre !",
    "Tu es incroyable !",
    "Quel super enfant !",
    "Apprendre c'est amusant !",
    "Tu es un champion !"
];

let currentIndex = 0;

function changeMessage() {
    funBox.style.animation = 'none';
    funBox.offsetHeight; // Trigger reflow
    funBox.style.animation = 'bounce 2s infinite';
    
    funBox.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

setInterval(changeMessage, 3000);

// Animation des formes flottantes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = index * 0.02 + 0.01;
        const newX = x * 20 - 10;
        const newY = y * 20 - 10;
        
        shape.style.transform = `translate(${newX}px, ${newY}px)`;
    });
});

// Interactions avec les nuages
document.getElementById('learnCloud').addEventListener('click', () => {
    alert('Section Apprendre!');
});

document.getElementById('playCloud').addEventListener('click', () => {
    alert('Section Jouer!');
});

document.getElementById('contactCloud').addEventListener('click', () => {
    alert('Section Contact!');
});

// Interaction avec le bouton principal
document.querySelector('.btn').addEventListener('click', () => {
    alert('Super! Aventure commencée!');
});

// Effets de survol pour les nuages
const clouds = document.querySelectorAll('.cloud');
clouds.forEach(cloud => {
    cloud.addEventListener('mouseover', () => {
        cloud.style.transform = 'scale(1.1) translateY(-5px)';
    });
    
    cloud.addEventListener('mouseout', () => {
        cloud.style.transform = 'scale(1) translateY(0)';
    });
});