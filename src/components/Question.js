import React from 'react'

const Question = ({ question, selectAnswer }) => {

  // const classCalc = () => {
  // ${(question.correct !== null
  //   && question.answer === question[aNum]
  //   && question.selected === aNum)
  //   ? question.correct === true ? "question--answer_selected-correct" : null
  //   : question.selected === aNum && question.correct === false ? "question--answer_selected-incorrect" : null}`}
  // }

  const answerInputs = () => {
    const answerNumbers = ["a1", "a2", "a3", "a4"]
    return (
      answerNumbers.map(aNum => (
        <input
          key={aNum}
          type="button"
          value={question[aNum]}
          className={`question--answer
          ${question.selected === aNum ? "question--answer_selected" : null}
          ${question.correct !== null && question.answer === question[aNum] ? "question--answer_selected-correct" : null}
          ${question.selected === aNum && question.correct === false ? "question--answer_selected-incorrect" : null}`}
          onClick={() => selectAnswer(question.id, aNum)}
        />
      ))
    )
  }


  return (
    <div className="question">
      <h1>{question.q}</h1>
      <div className="question--answer-group">
        {answerInputs()}
      </div>
      <hr />
    </div>
  )
}

export default Question
