/* eslint-disable react/prop-types */

function FeedbackQuestion({ showQuestion, setShowQuestion, arrow, questions, currentQuestionToShow }) {
    return(
        <>
            {showQuestion &&       
                <div className="h-screen w-screen bg-white grid place-items-center absolute z-[100]">
                    <div className="fixed top-0 left-0 m-12 text-3xl w-32 cursor-pointer rounded-full hover:bg-neutral-200 transition-colors duration-200 select-none rotate-180" onClick={() => setShowQuestion(false)}>
                        <img src={arrow} alt='arrowBack'/>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl">
                        <h1 className="font-bold mb-12">{questions[currentQuestionToShow].question}</h1>
                        <div className="grid grid-cols-2 grid-rows-2 gap-6">
                            {questions[currentQuestionToShow].options.map((option, idx) => (
                        <button
                            key={idx}
                            className={`block w-full px-4 py-4 mb-2 rounded ${ option === questions[currentQuestionToShow].correctAnswer ? 'bg-green-500 hover:bg-green-600' : (questions[currentQuestionToShow].questionChoosen === option && questions[currentQuestionToShow].questionChoosen ) ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-600'} text-white cursor-pointer select-none hover:scale-105 transition-all duration-100`}
                        >
                            {option}
                        </button>
                        ))}
                        </div>
                    </div>
                </div>
      }
        </>
    )
}

export { FeedbackQuestion }