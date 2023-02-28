// Grab HTML elements for intro section and start button
const introSec = document.getElementById('intro');
const startEl = document.getElementById('start');

// When start button is clicked, clear the intro section text, start timer, and show questions
startEl.addEventListener("click", function() {
    introSec.innerHTML = '';
    showQuestions();
    setTime();
});

// QUESTIONS
const questions = [
    {
        question: 'Which option would you use to grab the element with the ID "cats"?',
        ansOptions: [
            'window.querySelector("#cats");',
            'document.idSelector("cats");',
            'document.querySelector("#cats");',
            'document.elementSelector("#cats");'
        ],
        ansIndex: 2
    },
    {
        question: 'Which event type would you use if you wanted to take action when a user presses a key on the keyboard?',
        ansOptions: [
            'keypush',
            'keydown',
            'keyup',
            'type'
        ],
        ansIndex: 1
    },
    {
        question: 'The second parameter for setInterval() uses which measurement of time?',
        ansOptions: [
            'seconds',
            'microseconds',
            'minutes',
            'milliseconds',
        ],
        ansIndex: 3
    },
    {
        question: 'Which of the following statements about arrays is false?',
        ansOptions: [
            'Two arrays that contain the same elements in the same order are equal to each other',
            'Arrays have a .forEach() method that can be used to execute the same code on all elements in the array',
            'Arrays begin at index 0',
            'If you try to access an element using an index that does not exist in the array, you will get undefined'
        ],
        ansIndex: 0
    },
    {
        question: 'Given an object with the name "dog" and a key "name", how would you print the value of "name" to the console?',
        ansOptions: [
            'console.log(dog#name);',
            'console.log(dog.name);',
            'console.log(dog:name);',
            'console.log(dog>name);'
        ],
        ansIndex: 1
    }
];

// Grab HTML elements for displaying questions, answers, and correct/incorrect
const questionEl = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const questionResult = document.getElementById('question-result');

let questionIndex = 0;
let secondsLeft = 75;
let score = 0;

// Display questions one at a time
function showQuestions() {
    // Clear previous answer HTML elements
    answersDiv.innerHTML = '';

    // Display question
    questionEl.textContent = questions[questionIndex].question;

    // Create and append answer HTML elements to the answers div
    const answerCount = questions[questionIndex].ansOptions.length;
    for (let i = 0; i < answerCount; i++) {
        let answerEl = document.createElement('p');
        answerEl.textContent = questions[questionIndex].ansOptions[i];
        answerEl.setAttribute('data-answer', i);
        answerEl.setAttribute('class', 'answer');
        answersDiv.appendChild(answerEl);
    }

    answersDiv.addEventListener('click', checkAnswer);
}

// Check whether chosen answer is correct, update time accordingly, progress to next question
function checkAnswer(event) {
    // Create variable for the element the user clicked
    let clickedEl = event.target;

    // If user clicked on an element with class "answer"
    if (clickedEl.matches('.answer')) {
        // Store chosen answer and correct answer in variables
        let correctAns = questions[questionIndex].ansIndex;
        let chosenAns = parseInt(clickedEl.getAttribute('data-answer'));
        // Compare chosen and correct answers, respond accordingly
        if (chosenAns === correctAns) {
            questionResult.textContent = 'Correct!';
        } else {
            questionResult.textContent = 'Incorrect :(';
            // If wrong, subtract 15 seconds or set timer to 0 if < 15 sec left
            if (secondsLeft - 15 < 0) {
                secondsLeft = 0;
            } else {
                secondsLeft -= 15;
            }
        }

        // If not on last question, increase index and show next question, otherwise set score to end quiz
        if (questionIndex < (questions.length - 1)) {
            questionIndex++;
            showQuestions();
        } else {
            score = secondsLeft;
        }
    }
}

// TIMER
// Grab HTML element for timer
const timerEl = document.getElementById('timer');

function setTime() {
    let timerInterval = setInterval(function() {
        // If user finished with seconds remaining or time has run out, end the quiz, otherwise decrement timer
        if (score > 0 || secondsLeft === 0) {
            endQuiz(timerInterval);
        } else {
            secondsLeft--;
        }

        timerEl.textContent = `Time: ${secondsLeft}`;
    }, 1000);
}

// END QUIZ
// Grab HTML elements for questions and quiz end sections
const questionsSec = document.getElementById('questions');
const quizEndSec = document.getElementById('quiz-end');

// Stop the timer, clear out questions section, display quiz end section
function endQuiz(timer) {
    clearInterval(timer);

    questionsSec.innerHTML = '';

    quizEndSec.innerHTML =
        `<p>All done!</p>
        <p>Your final score is ${ score }</p>
        <label for="initials">Enter your initials here:</label>
        <input type="text" id="initials">`;
}