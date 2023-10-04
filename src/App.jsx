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
    }, 2000);
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

      <div className="absolute bottom-6 z-[100] text-xl">
        <p>Made with ❤️ by Juan</p>
      </div>  

    </Game>
  );
}

export default App;

