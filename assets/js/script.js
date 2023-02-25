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

// Grab HTML elements for displaying questions, answers, and correct/incorrect
const questionEl = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const questionResult = document.getElementById('question-result');

let questionIndex = 0;

// Display questions one at a time
function showQuestions() {
    // Clear previous answer HTML elements
    answersDiv.innerHTML = '';

    // Display question
    questionEl.textContent = questions[questionIndex].question;

    // Create and append answer HTML elements to the answers div
    const answerCount = questions[questionIndex].ansOptions.length;
    for (let i = 0; i < answerCount; i++) {
        let answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'button');
        answerInput.setAttribute('value', questions[questionIndex].ansOptions[i]);
        answersDiv.appendChild(answerInput);
    }
    
    // Put all answer options in an array
    const answerEls = document.querySelectorAll('input');
    // Set event listener for click on each answer option
    answerEls.forEach(element => {
        element.addEventListener("click", function() {
            // Store chosen answer and correct answer in variables
            let chosenAns = element.value;
            let correctAnsIndex = questions[questionIndex].ansIndex;
            let correctAns = questions[questionIndex].ansOptions[correctAnsIndex];
            // Compare chosen and correct answers, respond accordingly
            if (chosenAns === correctAns) {
                questionResult.textContent = 'Correct!';
            } else {
                questionResult.textContent = 'Incorrect :(';
                secondsLeft -= 15;
            }
            if (questionIndex < (questions.length - 1)) {
                questionIndex++;
                showQuestions();
            }
        });
    });
}

showQuestions();

