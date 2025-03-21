const startBtn = document.querySelector('.Start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const detailedResults = document.querySelector('.detailed-results');
let optionList;

// To store user answers
let userAnswers = [];

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    
    // Reset userAnswers array
    userAnswers = Array(questions.length).fill(null);
    
    showQuestions(0);
    questionCounter(1);
    headerScore();
};

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');
    
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    
    // Reset userAnswers array
    userAnswers = Array(questions.length).fill(null);
    
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
};

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');
    
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    
    // Reset userAnswers array
    userAnswers = Array(questions.length).fill(null);
    
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    } else {
        console.log('question completed');
        showResultBox();
    }
};

function showQuestions(index) {
    optionList = document.querySelector('.option-list');
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }
    
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
    
    // If user already answered this question, highlight their choice
    if (userAnswers[index] !== null) {
        const options = document.querySelectorAll('.option');
        const selectedOption = userAnswers[index];
        const correctAnswer = questions[index].answer;
        
        options.forEach(option => {
            const optionText = option.textContent.trim();
            
            if (optionText === selectedOption) {
                if (selectedOption === correctAnswer) {
                    option.classList.add('correct');
                } else {
                    option.classList.add('wrong');
                }
            } else if (optionText === correctAnswer && selectedOption !== correctAnswer) {
                option.classList.add('correct');
            }
            
            // Disable clicking on options if already answered
            option.style.pointerEvents = 'none';
        });
        
        nextBtn.classList.add('active');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent.trim();
    let correctAnswer = questions[questionCount].answer.trim();
    
    // Store user's answer
    userAnswers[questionCount] = userAnswer;
    
    // Disable clicking on all options after selecting one
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Highlight the user's selection
    if (userAnswer !== correctAnswer) {
        answer.classList.add('wrong');
        console.log('Answer is wrong');
    } else {
        userScore++;
        headerScore();
        console.log('Answer is correct');
    }

    nextBtn.classList.add('active');
}
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore}/${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score: ${userScore} Out Of ${questions.length}`;
    
    // Clear existing detailed results
    detailedResults.innerHTML = '';
    
    // Add detailed results for each question
    for (let i = 0; i < questions.length; i++) {
        const questionResult = document.createElement('div');
        questionResult.className = 'question-result';
        
        const resultStatus = userAnswers[i] === questions[i].answer ? 'correct' : 'wrong';
        
        questionResult.innerHTML = `
            <div class="result-question">
                <span class="question-number">Q${i+1}.</span>
                <span class="question-text">${questions[i].question}</span>
            </div>
            <div class="result-answers">
                <div class="your-answer ${resultStatus}">
                    <span class="answer-label">Your Answer:</span>
                    <span class="answer-text">${userAnswers[i] || 'Not answered'}</span>
                </div>
                <div class="correct-answer">
                    <span class="answer-label">Correct Answer:</span>
                    <span class="answer-text">${questions[i].answer}</span>
                </div>
            </div>
        `;
        
        detailedResults.appendChild(questionResult);
    }
    
    // Circular progress animation
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = 0;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;
    
    circularProgress.style.background = `conic-gradient(#c40094 0deg, rgb(45, 121, 83) 0deg)`;
    
    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgb(45, 121, 83) 0deg)`;
        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}
