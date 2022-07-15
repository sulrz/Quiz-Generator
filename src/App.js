import React from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';

function App() {
  const [quizReady, setQuizReady] = React.useState(false);
  const [startQuiz, setStartQuiz] = React.useState(false);

  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
        .then(() => setQuizReady(true));
  }, []);

  function clickStartQuiz() {
    setStartQuiz(true);
  }

  return (
    <div className="App">
      {startQuiz ?
        <QuizScreen questions={questions} />
        :
        <StartScreen 
          quizReady={quizReady}
          clickStartQuiz={clickStartQuiz}
        />
      }
    </div>
  );
}

export default App;
