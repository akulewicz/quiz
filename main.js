const form = document.querySelector('.quiz-form--js');
const resultsWrapper = document.querySelector('.results-wrapper--js');
const pointsBox = document.querySelector('.special--points');
const percentBox = document.querySelector('.special--percent');

const correctAnswers = ['A','B','A','B'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let pointsCounter = 0;
    const maxPoints = correctAnswers.length;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            pointsCounter += 1;
        }
    })
    window.scrollTo(0,0);
    pointsBox.textContent = pointsCounter;
    percentBox.textContent = (pointsCounter/maxPoints)*100 + '%';
    resultsWrapper.style.display = 'flex';




})

