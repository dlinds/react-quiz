import React from 'react'
import StartPage from './components/StartPage'
import QuizView from './components/QuizView'
import blueBlob from './img/blobBlue.png'
import yellowBlob from './img/blobYellow.png'
const App = () => {

  const [begin, setBegin] = React.useState(false)

  return (
    <>
      <img className="yellow-circle" src={yellowBlob} alt="yellow blob" />
      {begin ? <QuizView /> : <StartPage setBegin={() => setBegin(true)} />}
      <img className="blue-circle" src={blueBlob} alt="blue blob" />
    </>
  )
}

export default App
