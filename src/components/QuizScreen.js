import React from "react";
import { nanoid } from "nanoid"
import Question from "./Question";

function QuizScreen(props) {
    const [isQuizEnd, setIsQuizEnd] = React.useState(false);
    const [correctAnswersAmount, setCorrectAnswersAmount] = React.useState(0);

    function endQuiz() {
        setIsQuizEnd(true);

        let cnt = 0;
        for (let i=0; i<questions.length; i++) {
            const question = questions[i];
            console.log(question.selectedAnswer);
            if (question.question.correct_answer === question.selectedAnswer) {
                cnt++;
            }
        }

        setCorrectAnswersAmount(cnt);
    }
    
    const [questions, setQuestions] = React.useState(getQuestions());
    
    function getQuestions() {
        return props.questions.map(question => (
            {
                question: question,
                id: nanoid(),
                selectedAnswer: ""
            }
        ));
    }

    function selectAnswer(id, answer) {
        setQuestions(prevState => prevState.map(question =>
            question.id === id ?
                {...question, selectedAnswer: answer} : question
        ));
    }

    const questionElements = questions.map(question => {
        return (
            <div
                key={question.id}
            >
                <Question 
                    id={question.id}
                    question={question.question}
                    isQuizEnd={isQuizEnd}
                    selectAnswer={selectAnswer}
                />
                <hr />
            </div>
    )});

    return (
        <main className="QuizScreen">
            {questionElements}

            <button 
                className="QuizScreen--button"
                onClick={endQuiz}
            >
                Check answers</button>

            <p>Correct answers amount: {correctAnswersAmount}</p>
        </main>
    );
}

export default QuizScreen;