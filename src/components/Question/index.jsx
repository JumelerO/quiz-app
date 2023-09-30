/* eslint-disable react/prop-types */

function Question({ currentQuestion, handleAnswer }) {
    return(
        <>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl">
                <h1 className="font-bold mb-12">{currentQuestion.question}</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-6">
                    {currentQuestion.options.map((option, idx) => (
                    <button
                        key={idx}
                        className={`block w-full px-4 py-4 mb-2 rounded ${ currentQuestion.questionChoosen && option === currentQuestion.correctAnswer ? 'bg-green-500 hover:bg-green-600' : (currentQuestion.questionChoosen === option ) ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-600'} text-white cursor-pointer select-none hover:scale-105 transition-all duration-100`}
                        onClick={() => {
                            handleAnswer(option)
                            currentQuestion.questionChoosen = currentQuestion.options[idx]
                        }}
                        disabled={currentQuestion.isAnswered}
                    >
                        {option}
                    </button>
                ))}
                </div>
            </div>
        </>
    )
}

export { Question }