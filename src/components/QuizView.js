import React from 'react'
import Question from './Question'
const { uuid } = require('uuidv4');

const QuizView = () => {

  const fetchQuestions = async () => {

    const results = await
      fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(results => results.results)

    return results.map(question => {

      const possibleAnswers = [...question.incorrect_answers, question.correct_answer].sort()

      return {
        id: uuid(),
        q: question.question,
        a1: possibleAnswers[0],
        a2: possibleAnswers[1],
        a3: possibleAnswers[2],
        a4: possibleAnswers[3],
        answer: question.correct_answer,
        selected: null
      }
    })
  }

  const [questionAndAnswers, setQuestionAndAnswers] = React.useState([])

  const updateQuestions = async () => {
    const newSetOfQuestions = await fetchQuestions()
    setQuestionAndAnswers(newSetOfQuestions)
  }

  React.useEffect(() => updateQuestions(), [])

  const handleSelectingAnswer = (id, guess) => {
    setQuestionAndAnswers(prevQA => {
      return prevQA.map(qa => (
        qa.id !== id
          ? qa
          : {
            ...qa,
            selected: guess
          })
      )
    })
  }

  return (
    <div className="quiz-view">
      <div>
        {questionAndAnswers.map((question) => (
          <Question
            question={question}
            selectAnswer={handleSelectingAnswer}
            key={question.id}
          />
        ))}
      </div>
    </div>
  )
}

export default QuizView
