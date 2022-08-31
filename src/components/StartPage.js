import React from 'react'

const StartPage = (props) => {
  return (
    <div className="start-page">
      <h4>Quizzical</h4>
      <p>Some description if needed</p>
      <button onClick={props.setView}>Start Quiz</button>
    </div>
  )
}

export default StartPage
