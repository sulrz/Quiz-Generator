import React from "react";
import Question from "./Question";
import QuizFooter from "./QuizFooter";
import { nanoid } from "nanoid"

function QuizScreen(props) {
    const [isQuizEnd, setIsQuizEnd] = React.useState(false);
    const [correctAnswersAmount, setCorrectAnswersAmount] = React.useState(0);

    function endQuiz() {
        setIsQuizEnd(true);

        setCorrectAnswersAmount(questions
            .filter(question => question.question.correct_answer === question.selectedAnswer)
            .length);
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

            <QuizFooter
                isQuizEnd={isQuizEnd}
                endQuiz={endQuiz}
                questionsAmount={questions.length}
                correctAnswersAmount={correctAnswersAmount}
            />
        </main>
    );
}

export default QuizScreen;