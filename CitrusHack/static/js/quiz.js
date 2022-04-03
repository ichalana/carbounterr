const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

var correctAnswers = 0;

function buildQuiz(){
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>
                    <br>`
                );
            }
            answers.push(
                `<br>
                 <br>`
            )

output.push(
  `<div class="question"> <b>${currentQuestion.question}</b> </div>
  <div class="answers"> ${answers.join('')} </div>`
);
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;

    questions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    correctAnswers = numCorrect;
    // sendUserName()
    // sendScore()
    // $.post( "/quiz", {
    //   User: document.getElementById("name").value,
    //   Score: numCorrect
    // });
  }
  
  // function sendScore(){
  //   let Score=numCorrect
  //   const request = new XMLHttpRequest()
  //   request.open('POST', '/ProcessUserinfo/${JSON.stringify(Score)}')
  //   request.send(Score)
  // }
//Creating questions for mini quiz
const questions = [
    {
      question: "Is Wasting less food a way to reduce greeenhouse gas emissions?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is a greenhouse gas?",
      answers: {
        a: "CO2",
        b: "CH4",
        c: "Water Vapor",
        d: "All of the Above"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the Greenhouse effect?",
      answers: {
        a: "The name of climate change legislation that was passed by Congress",
        b: "When you paint your house green to become an environmentalist",
        c: "When the gases in our atmosphere trap heat and block it from escaping our planet",
        d: "When you build a green house"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following are consequences asscociated with climate change?",
      answers: {
        a: "The ice sheets are declining, glaciers are in retreat globally, and our oceans are more acidic than ever",
        b: "Surface temperatures are setting new heat records about each year",
        c: "More extreme weather like droughts, heat waves, and hurricanes",
        d: "Global sea levels are rising at an alarmingly fast rate — 17 centimeters (6.7 inches) in the last century alone and going higher",
        e: "All of the above"
      },
      correctAnswer: "e"
    },
    {
      question: "What can you do to help fight climate change?",
      answers: {
        a: "Divest from fossil fuel companies",
        b: "Engage yourself in the science behind climate change",
        c: "Vote for political candidates who will advocate for climate-related legislation and policy improvements",
        d: "All of the Above"
      },
      correctAnswer: "d"
    },
    {
      question: "True or False: The overwhelming majority of scientists agree that climate change  is real and caused by humans",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    }
  ];

  buildQuiz();
  submitButton.addEventListener('click', showResults);

  