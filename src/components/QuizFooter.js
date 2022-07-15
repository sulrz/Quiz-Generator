import React from "react";

function QuizFooter(props) {
    const res = `You scored 
                ${props.correctAnswersAmount}/${props.questionsAmount} 
                correct answers`

    function reloadQuiz() {
        window.location.reload(false);
    }

    return (
        <div className="QuizFooter">
            {props.isQuizEnd ?
                <>
                    <h3 className="QuizScreen--text">{res}</h3>

                    <button 
                        className="QuizScreen--button"
                        onClick={reloadQuiz}
                    >
                        Play again</button>
                </>
                :
                <button 
                    className="QuizScreen--button"
                    onClick={props.endQuiz}
                >
                    Check answers</button>
            }

        </div>
    );
}

export default QuizFooter;