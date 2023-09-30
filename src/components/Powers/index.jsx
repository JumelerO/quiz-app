/* eslint-disable react/prop-types */

function Powers({ amountPowers, handleHalfPower, setAmountPowers, currentQuestion, phone }) {
    return(
        <>
            <div className='absolute right-0 top-[30%] flex flex-col mr-24'>
                <button className='bg-blue-500 rounded-lg hover:bg-blue-700 mb-12 object-cover h-28 w-28 text-2xl font-bold tracking-widest text-center relative select-none' onClick={() => {
                    amountPowers !== 0 && handleHalfPower()
                    setAmountPowers(0)
                }} disabled={ currentQuestion.isAnswered }>
                50/50
                    <p className='absolute top-0 right-0'>{ amountPowers }</p>
                </button>
                <button className='bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 h-28 w-28 relative text-2xl font-bold tracking-widest text-center select-none' onClick={() => setAmountPowers(0)} disabled={currentQuestion.isAnswered}>
                    <img src={phone} alt="phone"/>
                    <p className='absolute top-0 right-0'>{ amountPowers }</p>
                </button>
            </div>
        </>
    )
}

export { Powers }