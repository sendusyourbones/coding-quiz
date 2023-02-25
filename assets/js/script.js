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
        answerOptions: [
            'window.querySelector("#cats");',
            'document.idSelector("cats");',
            'document.querySelector("#cats");',
            'document.elementSelector("#cats");'
        ],
        inputName: 'el-by-id',
        correctAnswer: 2
    },
    {
        question: 'Which event type would you use if you wanted to take action when a user presses a key on the keyboard?',
        answerOptions: [
            'keypush',
            'keydown',
            'keyup',
            'type'
        ],
        inputName: 'press-key',
        correctAnswer: 1
    },
    {
        question: 'The second parameter for setInterval() uses which measurement of time?',
        answerOptions: [
            'seconds',
            'microseconds',
            'minutes',
            'milliseconds',
        ],
        inputName: 'interval',
        correctAnswer: 3
    },
    {
        question: 'Which of the following statements about arrays is false?',
        answerOptions: [
            'Two arrays that contain the same elements in the same order are equal to each other',
            'Arrays have a .forEach() method that can be used to execute the same code on all elements in the array',
            'Arrays begin at index 0',
            'If you try to access an element using an index that does not exist in the array, you will get undefined'
        ],
        inputName: 'arrays',
        correctAnswer: 0
    },
    {
        question: 'Given an object with the name "dog" and a key "name", how would you print the value of "name" to the console?',
        answerOptions: [
            'console.log(dog#name);',
            'console.log(dog.name);',
            'console.log(dog:name);',
            'console.log(dog>name);'
        ],
        inputName: 'key-value',
        correctAnswer: 1
    }
];

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');

// Build an individual question with answer choices and append to the answers element
function showQuestion() {
    let questionIndex = 0;
    questionEl.textContent = questions[questionIndex].question;

    for (let i = 0; i < 4; i++) {
        let answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'radio');
        answerInput.setAttribute('name', questions[questionIndex].inputName);
        answerInput.setAttribute('id', `option${i}`);
        answersEl.appendChild(answerInput);
        let answerLabel = document.createElement('label');
        answerLabel.textContent = questions[questionIndex].answerOptions[i];
        answerLabel.setAttribute('for', `option${i}`);
        answersEl.appendChild(answerLabel);
    }
}

showQuestion();