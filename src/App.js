import React from 'react'
import StartPage from './components/StartPage'
import QuizView from './components/QuizView'
import blueBlob from './img/blobBlue.png'
import yellowBlob from './img/blobYellow.png'
const App = () => {

  const [view, setView] = React.useState(
    <StartPage
      setView={beginQuiz}
    />
  )

  function beginQuiz() {
    setView(
      <QuizView />
    )
  }

  return (
    <>
      <img className="yellow-circle" src={yellowBlob} alt="yellow blob" />
      {view}
      <img className="blue-circle" src={blueBlob} alt="blue blob" />
    </>
  )
}

export default App
