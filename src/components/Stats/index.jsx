/* eslint-disable react/prop-types */

function Stats({ showStats, questions, setShowQuestion, setCurrentQuestionToShow, totalCorrectAnswers }) {
    return(
        <>
        {showStats && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out transform translate-y-0 z-10 select-none bg-white`}>
          <div className="w-10/12 h-fit rounded-lg flex flex-col bg-neutral-100 py-12 drop-shadow-2xl">
            <h1 className="text-center text-blue-600 tracking-widest">STATS</h1>
            <div className="flex flex-col p-12">
              <div className='flex gap-x-12 my-12 flex-wrap'>
                {questions.map((question, idx) => {
                  return <div className='flex flex-col mt-8 justify-center items-center cursor-pointer hover:bg-neutral-300 p-2 transition-colors duration-200 rounded-lg' key={idx} onClick={() => (setShowQuestion(true), setCurrentQuestionToShow(idx))}>
                    <p>{idx + 1}</p>
                    <div className={`w-4 h-4 ${question.isCorrect ? 'bg-green-600' : 'bg-red-600'}`}></div>
                  </div>
                })}
              </div>
              <div className='h-full w-full flex gap-x-12 justify-center items-center'>
                <div>
                  <p className='text-2xl font-bold -tracking-widest'>{totalCorrectAnswers}/{questions.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}

export { Stats }