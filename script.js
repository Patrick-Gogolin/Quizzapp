let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3

    },
    {
        "question": "Was bedeutet das HTML Tag ?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3

    },
    {
        "question": "Wie binde ich eine Webseite in eine Webseite ein ?",
        "answer_1": "a",
        "answer_2": "b",
        "answer_3": "c",
        "answer_4": "d",
        "right_answer": 2

    },
    {
        "question": "Wie stelle cih Text am besten Fett dar??",
        "answer_1": "a",
        "answer_2": "b",
        "answer_3": "c",
        "answer_4": "d",
        "right_answer": 1

    },
    {
        "question": "Welches Attribut kann man nicht für Textarea verwenden ?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1

    },
    {
        "question": "Wie wählst du alle Elemente von Typ bla bla aus ?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a-title {...}",
        "right_answer": 1

    },
    {
        "question": "Wie definiert man in Java Script eine Variable ?",
        "answer_1": "let 100 = rate",
        "answer_2": "100 = let rate",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4

    }
];

let rightQuestions = 0;
let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if(gameIsOver()) {
      showEndscreen();

    }
    else {

    updateProgressBar();
    updateToNextQuestion();
}

}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndscreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = "display: none";

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/trophy.png';
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion]; // Stelle 0 im JSON Array questions
    let selectedQuestionsNumber = selection.slice(-1); // letzter Buchstabe aus dem übergebenen Parameter

    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if(rightAnswerSelected(selectedQuestionsNumber, question)) { // Vergleich 
        console.log('rchtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    }
    else {
        console.log('falsch');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionsNumber, question) {
    return selectedQuestionsNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}

function restartGame() {
    document.getElementById('header-image').src = 'img/pencil.jpg';
    document.getElementById('question-body').style = "";
    document.getElementById('endscreen').style = "display: none";
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}