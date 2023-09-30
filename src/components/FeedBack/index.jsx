/* eslint-disable react/prop-types */

function FeedBack({ showFeedback }) {
    return(
        <>
            {showFeedback && (
        <div
          className={`${
            showFeedback === 'correct' ? 'bg-green-500' : 'bg-red-500'
          } fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out transform translate-y-0 z-10 select-none ${
            showFeedback ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="text-9xl text-white">
            {showFeedback === 'correct' ? (
              <span>&#10003;</span>
            ) : (
              <span>&#10008;</span>
            )}
          </div>
        </div>
      )} 
        </>
    )
}

export { FeedBack }