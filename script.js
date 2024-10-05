const giftBox = document.getElementById('gift-box');
const message = document.getElementById('message');
const lid = document.querySelector('.lid');
const confettiContainer = document.getElementById('confetti-container');

giftBox.addEventListener('click', () => {
    giftBox.classList.remove('shake'); // Видаляємо ефект дрижання після кліку
    giftBox.style.animation = 'bounce 1s ease'; // Підстрибування коробки
    lid.style.transform = 'rotateX(-120deg)'; // Анімація відкриття коробки

    setTimeout(() => {
        message.style.display = 'block'; // Показ вітального повідомлення
        releaseConfetti(); // Запуск конфеті
    }, 800); // Час затримки перед показом повідомлення та конфеті
});

function releaseConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Випадкова тривалість падіння
        confettiContainer.appendChild(confetti);
    }
}

function randomColor() {
    const colors = ['#FF6347', '#FFD700', '#ADFF2F', '#00FA9A', '#1E90FF', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
}