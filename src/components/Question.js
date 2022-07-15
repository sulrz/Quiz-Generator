import React from "react";
import { nanoid } from "nanoid"
import Answer from "./Answer";
var he = require('he');

function Question(props) {
    const question = props.question;
    const incorrect_answers = question.incorrect_answers;
    const answersAmount = incorrect_answers.length + 1;
    const correctAnswerIndex = Math.floor(Math.random() * answersAmount);
    
    const [answers, setAnswers] = React.useState(generateAnswers());
    
    function getAnswer(answer) {
        const id = nanoid();

        return {
            id: id,
            isSelected: false,
            answer: he.decode(answer)
        };
    }

    function generateAnswers() {
        const answersArray = [];

        for (let i=0; i<answersAmount; i++) {
            if (i === correctAnswerIndex) {
                answersArray.push(getAnswer(question.correct_answer));
            }
            if (incorrect_answers[i] != null) {
                answersArray.push(getAnswer(incorrect_answers[i]));
            }
        }

        return answersArray;
    }

    function chooseAnswer(id) {
        props.selectAnswer(props.id, 
            answers.filter(answer => answer.id === id)[0].answer);
        
        setAnswers(prevState => prevState.map(answer => {
            return id === answer.id ? 
            {...answer, isSelected: true} :
            {...answer, isSelected: false}
        }));
    }

    const answerElements = answers.map(answer =>
        <Answer
            key={answer.id}
            isSelected={answer.isSelected}
            selectAnswer={() => chooseAnswer(answer.id)}
            answer={answer.answer}
        />
    );

    return (
        <div className="Question">
            <h3 className="Question--title">{he.decode(question.question)}</h3>

            <div className="Question--answers-container">
                {answerElements}
            </div>
        </div>
    );
}

export default Question;