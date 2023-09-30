/* eslint-disable react/prop-types */

function NumberQuestion({ questionIndex }) {
    return(
        <>
            <div className="fixed top-0 left-0 m-12 text-3xl select-none">
                Question N°{questionIndex + 1}
            </div>
        </>
    )
}

export { NumberQuestion }