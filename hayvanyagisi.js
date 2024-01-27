function createAnimalFigures() {
    const animals = ['🐶', '🐱', '🐭', '🐹', '🐰']; // Burada istediğiniz hayvan simgelerini ekleyin
    const numberOfFigures = 100; // Figür sayısını isteğinize göre ayarlayın

    for (let i = 0; i < numberOfFigures; i++) {
        const figure = document.createElement('div');
        figure.classList.add('figure');
        figure.innerHTML = animals[Math.floor(Math.random() * animals.length)]; // Rastgele bir hayvan simgesi seç
        figure.style.left = Math.random() * window.innerWidth + 'px';
        figure.style.animationDuration = Math.random() * 5 + 3 + 's';
        figure.style.opacity = Math.random();
        figure.style.fontSize = Math.random() * 20 + 10 + 'px';
        document.body.appendChild(figure);
    }
}

document.addEventListener('DOMContentLoaded', createAnimalFigures);
