import React from 'react'

const Question = (props) => {
  return (
    <div className="question">
      <h1>How would one say goodbye in Spanish</h1>
      <div className="question--answer-group">
        <input type="button" value="Adios" className="question--answer" />
        <input type="button" value="Goodbye" className="question--answer" />
        <input type="button" value="Hola" className="question--answer" />
        <input type="button" value="Morning" className="question--answer" />
      </div>
      <hr />
    </div>
  )
}

export default Question
