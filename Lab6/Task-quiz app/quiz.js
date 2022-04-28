const questionTitle = document.getElementById('question-title');
const start=document.getElementsByClassName('start');
const container = document.querySelector('.container');
const numberOfCorrectAnswers = document.getElementById(
  'numberOfCorrectAnswers'
);
const btnSubmit = document.getElementById('submit');
const result = document.querySelector('.result');

let correctAnswers = 0;

const questions = [
  {
    question: 'Which one for develop Java applications?',
    answers: ['A.Netbeans IDE', 'B.Visual Studio', 'C.Adobe Illustrator'],
    true: 'A.Netbeans IDE',
  },
  {
    question: 'Which programming language mostly used for frontend development?',
    answers: ['A.HTML', 'B.Java', 'C.Javascript'],
    true: 'C.Javascript',
  },
  {
    question: 'Write once, run everywhere slogan of:',
    answers: ['A.C', 'B.C++', 'C.Java'],
    true: 'C.Java',
  },
];

questions.forEach(question => {
  const questionElement = document.createElement('div');
  questionElement.innerHTML = `<h2>${question.question}</h2>`;
  container.appendChild(questionElement);

  question.answers.forEach((answer, index) => {
    const answerElement = document.createElement('div');
    answerElement.className = 'answer';
    answerElement.innerHTML = `<p>${answer}</p>`;
    questionElement.appendChild(answerElement);

    answerElement.addEventListener('click', () => {
      if (answer === question.true) {
        answerElement.style.color = '#357C3C';
        correctAnswers++;
        return;
      } else {
        answerElement.style.color = '#DA1212';
      }
    });
  });
});

btnSubmit.addEventListener('click', () => {
  numberOfCorrectAnswers.innerText = correctAnswers;
  result.style.display = 'block';
});
