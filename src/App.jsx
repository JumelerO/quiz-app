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
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [amountPowers, setAmountPowers] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestionToShow, setCurrentQuestionToShow] = useState(null)
  const [questions, setQuestions] = useState([
    {
      "question": "¿Who plays the role of Dr. Ben Carson in the movie?",
      "options" : [],
      "correctAnswer": "Cuba Gooding Jr. portrays Dr. Ben Carson in the film",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": '¿What is the central theme of "Gifted Hands"?',
      "options": [],
      "correctAnswer": "The central theme of the movie is perseverance and the importance of education",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": '¿Who directed the movie "Gifted Hands"?',
      "options": [],
      "correctAnswer": "Thomas Carter directed the film.",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "What is the real-life profession of Dr. Ben Carson?",
      "options": [],
      "correctAnswer": "Dr. Ben Carson is a renowned neurosurgeon",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What medical condition does the movie primarily focus on?",
      "options": [],
      "correctAnswer": "The movie primarily focuses on the separation of conjoined twins, known as craniopagus twins",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿Where does most of the story take place?",
      "options": [],
      "correctAnswer": "The story primarily takes place at Johns Hopkins Hospital in Baltimore, Maryland",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What challenges did Ben Carson face during his childhood?",
      "options": [],
      "correctAnswer": "Ben Carson faced poverty and struggled with low self-esteem during his childhood",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿Who is Ben Carson's mother in the movie?",
      "options": [],
      "correctAnswer": "Aunjanue Ellis portrays Ben Carson's mother, Sonya Carson",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What significant event in his childhood led Ben Carson to discover his love for reading?",
      "options": [],
      "correctAnswer": "Ben Carson's discovery of a library card and the world of books was a significant event that ignited his love for reading",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What is the nickname given to Ben Carson by his peers in the movie?",
      "options": [],
      "correctAnswer": 'Ben Carson is nicknamed "Dummy" by his peers due to his poor grades',
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿How does Ben Carson overcome his anger and violent temper?",
      "options": [],
      "correctAnswer": "He learns to control his anger through prayer and self-reflection",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What medical procedure does Dr. Carson perform that gains him national recognition?",
      "options": [],
      "correctAnswer": "Dr. Carson gains national recognition for successfully separating conjoined twins",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿Who is Ben Carson's mentor in the movie?",
      "options": [],
      "correctAnswer": "Dr. Cooley, played by Alan Alda, serves as a mentor to Ben Carson",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What role does Ben Carson's wife, Candy, play in his success?",
      "options": [],
      "correctAnswer": "Candy Carson provides emotional support and encouragement to her husband throughout his journey",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿How does Ben Carson's faith play a role in his life and career?",
      "options": [],
      "correctAnswer": "Ben Carson's faith in God is a significant driving force behind his determination and success",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": '¿What is the significance of the title "Gifted Hands"?',
      "options": [],
      "correctAnswer": "The title refers to Dr. Ben Carson's remarkable surgical skills and his ability to heal and save lives",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿How does Dr. Carson approach complex medical cases in the movie?",
      "options": [],
      "correctAnswer": "Dr. Carson approaches complex cases with innovative and unconventional surgical techniques",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What challenges does Dr. Carson face as an African American in the medical field during the 20th century?",
      "options": [],
      "correctAnswer": "Dr. Carson faces racism and skepticism about his abilities as an African American surgeon",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": "¿What message does the movie convey about the importance of education?",
      "options": [],
      "correctAnswer": "The movie emphasizes the transformative power of education and the potential it has to change lives",
      "isCorrect": false,
      "isAnswered": false,
      "questionChoosen": null
    },
    {
      "question": '¿How does "Gifted Hands" inspire its audience?',
      "options": [],
      "correctAnswer": "The movie inspires its audience by showcasing the incredible achievements of Dr. Ben Carson, emphasizing the importance of perseverance, faith, and education in overcoming adversity",
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

