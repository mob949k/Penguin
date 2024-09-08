document.addEventListener('DOMContentLoaded', function() {
    let currentPoint = 0;
    const points = document.querySelectorAll('.point');
    const submarine = document.getElementById('submarine');
    const textBox = document.getElementById('text-box');
    const depthCounter = document.getElementById('depth-counter');
    const blinkText = document.getElementById('blink-text'); 
    let isAnimating = false;
    let isQuizActive = false;
    let isModalOpen = false;

    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('close-modal');
    const prevSlide = document.getElementById('prev-slide');
    const nextSlide = document.getElementById('next-slide');

    modal.style.display = "none";

    submarine.style.top = `${points[0].getBoundingClientRect().top - 60}px`;
    submarine.classList.remove('hidden');
    updateDepthCounter(0);
    textBox.classList.remove('hidden');

    function updateDepthCounter(value) {
        depthCounter.innerHTML = ''; 
        const span = document.createElement('span');
        span.textContent = value + " metros"; 
        span.classList.add('digit');
        depthCounter.appendChild(span);
    }

    function moveSubmarine(index) {
        if (!isAnimating && !isQuizActive) {
            isAnimating = true; 
            if (blinkText) {
                blinkText.style.display = 'none';
            }

            const previousPoint = points[currentPoint];
            previousPoint.classList.remove('neon');

            if (index !== undefined) {
                currentPoint = index;
            } else if (currentPoint < points.length - 1) {
                currentPoint++;
            } else {
                currentPoint = 0;
            }

            const point = points[currentPoint];
            const rect = point.getBoundingClientRect();
            submarine.style.top = `${rect.top - 60}px`;

            if (window.innerWidth <= 600) {
                updateDepthCounter(2500 * currentPoint);

                if (currentPoint !== 0) {
                    displaySlide(currentPoint);
                } else {
                    modal.style.display = "none";
                    isModalOpen = false;
                }
            } else {
                updateDepthCounter(2500 * currentPoint);
                updateSlide(currentPoint);
            }

            if (2500 * currentPoint === 10000) {
                showQuizButton(); 
            }

            setTimeout(() => {
                isAnimating = false; 
            }, 800);
        }
    }

    function displaySlide(index) {
        let title = '';
        let text = '';

        if (index === 1) {
            title = "¿Qué es un Elevador Hidráulico?";
            text = "Un elevador hidráulico es como un gran ascensor que se usa para subir y bajar personas o cosas dentro de un edificio. Funciona con un tipo de “empujador” llamado pistón, que se mueve gracias a un líquido especial, parecido al aceite de cocina. Este tipo de elevador es muy fuerte y puede levantar cosas pesadas, por eso se usa mucho en edificios pequeños y en lugares como almacenes.";
        }
        if (index === 2) {
            title = "¿Qué es la Ley de Pascal?";
            text = `
            <p>La Ley de Pascal es una regla que dice que cuando aprietas un líquido dentro de un espacio cerrado, como un tubo o una jeringa, la presión que haces se reparte de igual manera por todo el líquido.</p>
            <center><p><b>Fórmula de la Ley de Pascal</b></p></center>
            <center><p><b><i>F = P × A</i></b></p></center>
            <ul>
            <li><b><i>F</i></b> es la fuerza que se genera.</li>
            <li><b><i>P</i></b> es la presión que se aplica al líquido.</li>
            <li><b><i>A</i></b> es el área sobre la que actúa la presión.</li>
            </ul>`;   
        }
        if (index === 3) {
            title = "Componentes Principales";
            text = `
            <p>Un elevador hidráulico está hecho de varias partes importantes que trabajan juntas:</p>
            <ul>
            <li><b><i>Bomba hidráulica:</i></b> es la fuerza que se genera.</li>
            <li><b><i>Cilindro y Pistón:</i></b> Movimientos verticales.</li>
            <li><b><i>Fluido hidráulico:</i></b> Transmite la presión.</li>
            <li><b><i>Válvulas:</i></b> Controlan el flujo de aceite.</li>
            </ul>`;   
        }
        if (index === 4) {
            title = "En Perspectiva";
            text = "Los elevadores hidráulicos, basados en la Ley de Pascal, son una aplicación efectiva de la física para mover cargas pesadas de manera eficiente en edificios de baja altura. Su capacidad para transmitir presión uniformemente en un fluido les permite levantar grandes pesos con relativamente poca fuerza. Sin embargo, las limitaciones de velocidad y consumo de energía, derivadas de la necesidad de mantener la presión constante en el sistema, pueden ser desventajas importantes en ciertas aplicaciones.";
        }
        
        if (window.innerWidth <= 600 && index !== 0) { 
            modalText.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
            modal.style.display = "flex";
            isModalOpen = true;
        } else if (index !== 0) { 
            textBox.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
            textBox.classList.add('active');
        }

        const point = points[index];
        const rect = point.getBoundingClientRect();
        submarine.style.top = `${rect.top - 60}px`;

        updateDepthCounter(2500 * index);
    }

    function updateSlide(index) {
        displaySlide(index);
    }

    function closeModalAutomatically() {
        if (window.innerWidth <= 600) {
            modal.style.display = "none"; 
            isModalOpen = false;
        }
    }

    closeModal.addEventListener('click', (event) => {
        event.stopPropagation();
        closeModalAutomatically();
    });

    prevSlide.addEventListener('click', () => {
        if (!isAnimating && currentPoint > 1) {
            currentPoint--;
            moveSubmarine(currentPoint);
        }
    });

    nextSlide.addEventListener('click', () => {
        if (!isAnimating && currentPoint < points.length - 1) {
            currentPoint++;
            moveSubmarine(currentPoint);
        } else if (!isAnimating) {
            moveSubmarine(0);
            closeModalAutomatically();
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            event.stopPropagation();
        } else if (!isAnimating && !isModalOpen && window.innerWidth <= 600) {
            moveSubmarine();
        }
    });

    if (window.innerWidth <= 600) {
        points.forEach((point, index) => {
            if (index > 0) {
                point.addEventListener('click', () => {
                    if (!isAnimating && !isModalOpen) {
                        moveSubmarine(index);
                        displaySlide(currentPoint);
                    }
                });
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (!isAnimating && event.code === 'Space' && window.innerWidth > 600 && !isModalOpen) {
            moveSubmarine();
        }
    });

    document.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
            let scrollPos = window.scrollY;
            submarine.style.transform = `translate(-50%, ${scrollPos * 0.5}px)`; 
        });
    });

    function showQuizButton() {
        const quizButton = document.createElement('button');
        quizButton.textContent = 'Start Quiz';
        quizButton.id = 'quiz-button';
        quizButton.classList.add('quiz-button');
        quizButton.onclick = startQuiz;

        quizButton.style.display = 'block';
        document.body.appendChild(quizButton);
    }

    function startQuiz() {
        isQuizActive = true;

        const name = prompt("Por favor, ingresa tu nombre:");
        if (!name) {
            alert("El nombre es requerido para iniciar el quiz.");
            isQuizActive = false;
            return;
        }

        clearInterval(fishInterval);
        const fishContainer = document.getElementById('fish-container');
        if (fishContainer) {
            fishContainer.innerHTML = '';
        }

        let score = 0;
        const questions = [
            {
                question: "¿Cuál es la función principal de un elevador hidráulico?",
                answers: ["Levantar objetos pesados", "Transportar líquidos", "Generar electricidad"],
                correct: 0
            },
            {
                question: "¿En qué principio se basa un sistema hidráulico?",
                answers: ["Principio de Bernoulli", "Principio de Arquímedes", "Ley de Pascal"],
                correct: 2
            },
            {
                question: "¿Qué parte de un elevador hidráulico transmite la presión?",
                answers: ["Pistón", "Fluido", "Válvula"],
                correct: 1
            },
            {
                question: "¿Cuál es una desventaja clave de los sistemas hidráulicos?",
                answers: ["Baja velocidad", "Alta eficiencia", "Baja resistencia"],
                correct: 0
            },
            {
                question: "¿Qué establece la ley de Pascal?",
                answers: ["La presión en un fluido se distribuye por igual", "Los fluidos ejercen fuerza en una dirección", "Cuanto más rápido fluye un fluido, menor es su presión"],
                correct: 0
            }
        ];

        let currentQuestion = 0;

        const quizContainer = document.createElement('div');
        quizContainer.id = 'quiz-container';
        document.body.innerHTML = ''; 
        document.body.appendChild(quizContainer);

        function renderQuestion() {
            quizContainer.innerHTML = `
                <h2>Pregunta ${currentQuestion + 1}/5</h2>
                <p>${questions[currentQuestion].question}</p>
                ${questions[currentQuestion].answers.map((answer, index) => 
                    `<button class="quiz-answer" data-index="${index}">${String.fromCharCode(65 + index)}) ${answer}</button>`
                ).join('')}
            `;

            const answerButtons = quizContainer.querySelectorAll('.quiz-answer');
            answerButtons.forEach(button => {
                button.onclick = () => {
                    if (parseInt(button.getAttribute('data-index')) === questions[currentQuestion].correct) {
                        score++;
                    }
                    currentQuestion++;
                    if (currentQuestion < questions.length) {
                        renderQuestion();
                    } else {
                        showResult();
                    }
                };
            });
        }

        function showResult() {
            quizContainer.innerHTML = `
                <h2>¡Quiz Completado!</h2>
                <p>¡Felicidades, <span class="rainbow-text">${name}</span>! Obtuviste ${score}/5.</p>
                ${score === 5 ? `<p>🎉 ¡Puntuación perfecta! ¡Eres un experto!</p>` : ''}
            `;

            isQuizActive = false;
        }

        renderQuestion();
    }

    function createFish() {
        if (isQuizActive) return;

        const fishContainer = document.getElementById('fish-container');
        if (!fishContainer) return;

        const fish = document.createElement('img');

        const fishNumber = Math.floor(Math.random() * 6) + 1;
        const fromLeft = Math.random() > 0.5;
        fish.src = fromLeft ? `right${fishNumber}.webp` : `left${fishNumber}.webp`;

        fish.classList.add('fish');
        fish.classList.add(fromLeft ? 'left' : 'right');

        const topPosition = Math.random() * 80;
        fish.style.top = `${topPosition}%`;
        fish.style.left = fromLeft ? '0%' : `calc(100% - ${fish.offsetWidth}px)`;

        fishContainer.appendChild(fish);

        let travelDistance;
        let animationDuration = 10000;

        if (window.innerWidth > 600) {
            travelDistance = 320 * (animationDuration / 1000);
        } else {
            travelDistance = 240 * (animationDuration / 1000);
        }

        fish.style.transition = `transform ${animationDuration}ms linear`;

        setTimeout(() => {
            fish.style.transform = fromLeft ? `translateX(${travelDistance}px)` : `translateX(-${travelDistance}px)`;
        }, 100);

        setTimeout(() => {
            fish.remove();
        }, animationDuration + 100);
    }

    const fishInterval = setInterval(createFish, Math.random() * 4000 + 3000);
});
