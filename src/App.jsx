import { useState } from 'react';
import phone from './assets/phone-call.png'
import arrow from './assets/arrowNext.svg'
import { FeedBack } from './components/FeedBack';
import { NumberQuestion } from './components/NumberQuestion';
import { NextQuestionButton } from './components/NextQuestionButton';
import { Stats } from './components/Stats';
import { Powers } from './components/Powers';
import { Question } from './components/Question';
import { FeedbackQuestion } from './components/FeedbackQuestion';
import { Game } from './components/Game';

function App() {

  // States

  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [amountPowers, setAmountPowers] = useState(1);
  const [showStats, setShowStats] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [currentQuestionToShow, setCurrentQuestionToShow] = useState(null)
  const [questions, setQuestions] = useState([
    {
        "question": "¿Cuál es el océano más profundo del mundo?",
        "options": ["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Ártico"],
        "correctAnswer": "Océano Pacífico",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el país más pequeño del mundo en términos de superficie?",
        "options": ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"],
        "correctAnswer": "Vaticano",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el elemento químico más abundante en el universo?",
        "options": ["Oxígeno", "Hidrógeno", "Helio", "Carbono"],
        "correctAnswer": "Hidrógeno",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿En qué año se llevó a cabo la Revolución Rusa?",
        "options": ["1905", "1917", "1923", "1930"],
        "correctAnswer": "1917",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el símbolo químico del oro?",
        "options": ["Ag", "Fe", "Au", "Hg"],
        "correctAnswer": "Au",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Quién escribió 'Cien años de soledad'?",
        "options": ["Gabriel García Márquez", "Mario Vargas Llosa", "Isabel Allende", "Julio Cortázar"],
        "correctAnswer": "Gabriel García Márquez",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el desierto más grande del mundo?",
        "options": ["Sahara", "Atacama", "Kalahari", "Gobi"],
        "correctAnswer": "Sahara",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
        "options": ["1776", "1789", "1801", "1812"],
        "correctAnswer": "1776",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el metal más denso?",
        "options": ["Plomo", "Oro", "Hierro", "Platino"],
        "correctAnswer": "Osmio",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿En qué continente se encuentra la selva del Amazonas?",
        "options": ["África", "Asia", "Europa", "América del Sur"],
        "correctAnswer": "América del Sur",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Quién pintó 'La última cena'?",
        "options": ["Leonardo da Vinci", "Michelangelo", "Pablo Picasso", "Vincent van Gogh"],
        "correctAnswer": "Leonardo da Vinci",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el gas más abundante en la atmósfera terrestre?",
        "options": ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"],
        "correctAnswer": "Nitrógeno",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿En qué ciudad se encuentra la Torre de Pisa?",
        "options": ["Roma", "Florencia", "Pisa", "Nápoles"],
        "correctAnswer": "Pisa",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el metal utilizado para fabricar pilas alcalinas?",
        "options": ["Plata", "Cobre", "Zinc", "Hierro"],
        "correctAnswer": "Zinc",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿En qué año se fundó Google?",
        "options": ["1995", "1998", "2000", "2004"],
        "correctAnswer": "1998",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el río más largo de América del Norte?",
        "options": ["Mississippi", "Yukón", "Colorado", "Misisipi"],
        "correctAnswer": "Mississippi",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Cuál es el metal más reactivo?",
        "options": ["Hierro", "Potasio", "Sodio", "Litio"],
        "correctAnswer": "Potasio",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿En qué país se encuentra la Gran Barrera de Coral?",
        "options": ["Australia", "Indonesia", "Filipinas", "México"],
        "correctAnswer": "Australia",
        "isCorrect": false,
        "isAnswered": false,
        "questionChoosen": null
    },
    {
        "question": "¿Quién escribió 'El Gran Gatsby'?",
        "options": ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger", "Mark Twain"],
        "correctAnswer": "F. Scott Fitzgerald",
        "isCorrect": false
    }
  ]
)

  const currentQuestion = questions[questionIndex];

  // Functions

  const handleAnswer = answer => {
    if (answer === currentQuestion.correctAnswer) {
      currentQuestion.isCorrect = true
      setCorrectAnswers(correctAnswers + 1);
      setShowFeedback('correct');
    } else {
      currentQuestion.isCorrect = false
      setShowFeedback('incorrect');
    }

    setTimeout(() => {
      setShowFeedback(false);
      currentQuestion.isAnswered = true
    }, 500);
  };

  const handleHalfPower = () => {
      let randomNumber1 = Math.floor(Math.random() * 4);
      let randomNumber2 = Math.floor(Math.random() * 4);
      if(currentQuestion.options[randomNumber1] !== currentQuestion.correctAnswer && currentQuestion.options[randomNumber2] !== currentQuestion.correctAnswer && randomNumber1 !== randomNumber2) {
        const newQuestions = [...questions]
        randomNumber2 = (randomNumber2 !== 0 && randomNumber2 !== 1 && randomNumber1 !== 3) ? randomNumber2 - 1 : randomNumber2
        newQuestions[questionIndex].options.splice(randomNumber1,1)
        newQuestions[questionIndex].options.splice(randomNumber2,1)
        setQuestions(newQuestions)
      } else handleHalfPower()
  }

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      if(questionIndex % 2 !== 0 && questionIndex !== 0) setAmountPowers(1)
    } else {
      questions.forEach(question => {
        question.isCorrect === true && setTotalCorrectAnswers(prevValue => prevValue + 1)
      })
      setShowStats(true)
    }
  }

  // App UI

  return (
    <Game 
      currentQuestion = { currentQuestion }
      questions = { questions }
      arrow = { arrow }
      setShowQuestion = { setShowQuestion }  
    >
      
      <Question 
        handleAnswer = { handleAnswer }
      />

      <Powers 
        amountPowers = { amountPowers }
        handleHalfPower = { handleHalfPower }
        setAmountPowers = { setAmountPowers }
        phone = { phone }
      />

      <NumberQuestion 
        questionIndex = { questionIndex }
      />
            
      <NextQuestionButton 
        handleNextQuestion = { handleNextQuestion }
      />

      <FeedBack 
        showFeedback = { showFeedback }
      />

      <Stats 
        showStats = { showStats } 
        setCurrentQuestionToShow = { setCurrentQuestionToShow }
        totalCorrectAnswers = { totalCorrectAnswers }
      />

      <FeedbackQuestion 
        showQuestion = { showQuestion } 
        currentQuestionToShow = { currentQuestionToShow }
      />

    </Game>
  );
}

export default App;

