import React from 'react'

const Question = ({ question, selectAnswer }) => {

  return (
    <div className="question">
      <h1>{question.q}</h1>
      <div className="question--answer-group">
        <input
          type="button"
          value={question.a1}
          className={`question--answer ${question.selected === "a1" ? "question--answer_selected" : null}`}
          onClick={() => selectAnswer(question.id, 'a1')}
        />
        <input
          type="button"
          value={question.a2}
          className={`question--answer ${question.selected === "a2" ? "question--answer_selected" : null}`}
          onClick={() => selectAnswer(question.id, 'a2')}
        />
        <input
          type="button"
          value={question.a3}
          className={`question--answer ${question.selected === "a3" ? "question--answer_selected" : null}`}
          onClick={() => selectAnswer(question.id, 'a3')}
        />
        <input
          type="button"
          value={question.a4}
          className={`question--answer ${question.selected === "a4" ? "question--answer_selected" : null}`}
          onClick={() => selectAnswer(question.id, 'a4')}
        />
      </div>
      <hr />
    </div>
  )
}

export default Question
