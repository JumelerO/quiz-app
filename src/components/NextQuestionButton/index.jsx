/* eslint-disable react/prop-types */

function NextQuestionButton({ currentQuestion, arrow, handleNextQuestion }) {
    return(
        <>
            {currentQuestion.isAnswered && 
            <div className="fixed top-0 right-0 m-12 text-3xl w-32 cursor-pointer rounded-full hover:bg-neutral-200 transition-colors duration-200 select-none" onClick={() => handleNextQuestion()}>
                <img src={arrow} alt='arrowNext'/>
            </div>}
        </>
    )
}

export { NextQuestionButton }