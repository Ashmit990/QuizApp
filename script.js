const questionsAnswers = [
    {
        question: `1. What is the correct syntax to output "Hello World" in JavaScript?`,
        a: `print("Hello World");` ,
        b: `echo("Hello World");` ,
        c:`console.log("Hello World");` ,
        d: `document.write("Hello World");` ,
        correct: 'c'
    },
    {
        question: "2. Which company developed JavaScript?",
        a: `Netscape`,
        b: `Microsoft`,
        c: `Mozila`,
        d: `Oracle`,
        correct: 'a'
    },
    {
        question: "3. What is the default value of a variable declared with var but not initialized?",
        a: `null`,
        b: `undefined`,
        c: `0`,
        d: `false`,
        correct: 'b'
    },

    {
        question: "4. How do you declare a variable in JavaScript?",
        a: `let variableName = [];`,
        b: `variableName = var;`,
        c: `declare variableName;`,
        d: `var variableName;`,
        correct: 'd'
    },

    {
        question: "5. Which method is used to add an element to the end of an array?",
        a: `array.push(element);`,
        b: `array.add(element);`,
        c: `array.append(element);`,
        d: `array.insert(element);`,
        correct: 'a'
    },

    {
        question: `6. What will "console.log(typeof NaN);" output?`,
        a: `undefined`,
        b: `object`,
        c: `number`,
        d: `NaN`,
        correct: 'c'
    },

    {
        question: `7. Which function is used to parse a string into an integer?`,
        a: `parseString()`,
        b: `convertToInt()`,
        c: `integer()`,
        d: `parseInt()`,
        correct: 'd'
    },

    {
        question: `8. What is the result of 5 + '5' in JavaScript?`,
        a: `10`,
        b: `55`,
        c: `Error`,
        d: `NaN`,
        correct: 'b'
    },

    {
        question: `9. How do you define a function in JavaScript?`,
        a: `function myFunction() {}`,
        b: `def myFunction() {}`,
        c: `func myFunction() {}`,
        d: `function: myFunction() {}`,
        correct: 'a'
    },

    {
        question: `10. Which of the following is a valid JavaScript event handler?`,
        a: `onClick()`,
        b: `onChange()`,
        c: `onclick()`,
        d: `addEventListener()`,
        correct: 'd'
    },

];

let prasnas = document.querySelector(".questions");
let results = document.querySelector(".quiz");
let uttarasA = document.querySelector(".ans-btns-a");
let uttarasB = document.querySelector(".ans-btns-b");
let uttarasC = document.querySelector(".ans-btns-c");
let uttarasD = document.querySelector(".ans-btns-d");

let btnss = document.querySelectorAll(".ans-btn");
let nextBtn = document.querySelector(".nxt");
let playAgainBtn = document.querySelector(".play-again");

let correctCount = 0;
let incorrectCount = 0;
let currentQuestionIndex = 0;

const loadQuestion = () => {
    const currentQuestion = questionsAnswers[currentQuestionIndex];

    prasnas.innerHTML = currentQuestion.question;
    uttarasA.innerHTML = currentQuestion.a;
    uttarasB.innerHTML = currentQuestion.b;
    uttarasC.innerHTML = currentQuestion.c;
    uttarasD.innerHTML = currentQuestion.d;

    btnss.forEach(btn => {
        btn.disabled = false;  
        btn.style.backgroundColor = ""; 
    });

    nextBtn.classList.add("hide");  
    playAgainBtn.classList.add("hide");  

    btnss.forEach(btn => {
        btn.addEventListener("click", handleAnswerClick);
    });
};

const handleAnswerClick = (e) => {
    const selectedKey = e.target.getAttribute('data-key');
    const correctKey = questionsAnswers[currentQuestionIndex].correct;

    if (selectedKey === correctKey) {
        correctCount++;
        e.target.style.backgroundColor = "green";
    } else {
        incorrectCount++;
        e.target.style.backgroundColor = "red";
        btnss.forEach(button => {
            if (button.getAttribute('data-key') === correctKey) {
                button.style.backgroundColor = "green";
            }
        });
    }

    btnss.forEach(button => {
        button.disabled = true;  
    });

    nextBtn.classList.remove("hide"); 
};

const getResultStatus = () => {
    if (correctCount <= 4) {
        return `You scored ${correctCount}/${questionsAnswers.length}. This quiz was quite challenging.`;
    } else if (correctCount <= 7) {
        return `You scored ${correctCount}/${questionsAnswers.length}. Great job! You have a good understanding of the material.`;
    } else {
        return `Bravo! You scored ${correctCount}/${questionsAnswers.length}. You have an excellent understanding of the material.`;
    }
};

const loadNextQuestion = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsAnswers.length) {
        loadQuestion();
    } else {
        results.innerHTML = getResultStatus();
        nextBtn.classList.add("hide");
        playAgainBtn.classList.remove("hide");
    }
};

const resetQuiz = () => {
    correctCount = 0;
    incorrectCount = 0;
    currentQuestionIndex = 0;
    loadQuestion();
};

nextBtn.addEventListener("click", loadNextQuestion);
playAgainBtn.addEventListener("click", resetQuiz);

loadQuestion();