// TIMER
const timerEl = document.getElementById('timer');

let secondsLeft = 75;

function setTime() {
    let timerInterval = setInterval(function() {
        timerEl.textContent = `Time: ${secondsLeft}`;
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // Add what should be executed when time reaches 0
        }
    }, 1000);
}

setTime();

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

const questionEl = document.getElementById('question');
const answersDiv = document.getElementById('answers');
let questionIndex = 0;

// Build an individual question with answer choices and append to the answers element
function showQuestion() {
    questionEl.textContent = questions[questionIndex].question;

    for (let i = 0; i < 4; i++) {
        let answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'button');
        answerInput.setAttribute('value', questions[questionIndex].ansOptions[i]);
        answersDiv.appendChild(answerInput);
    }
}

showQuestion();

// Event listener for selecting an answer option
const questionResult = document.getElementById('question-result');
const answerEls = document.querySelectorAll('input');

answerEls.forEach(element => {
    element.addEventListener("click", function() {
        let chosenAns = element.value;
        let correctAnsIndex = questions[questionIndex].ansIndex;
        let correctAns = questions[questionIndex].ansOptions[correctAnsIndex];
        if (chosenAns === correctAns) {
            questionResult.textContent = 'Correct!';
        } else {
            questionResult.textContent = 'Incorrect :(';
        }
    });
});