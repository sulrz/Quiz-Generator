import React from "react";

function Answer(props) {

    let className = "Question--answer";

    if (props.isSelected) {
        className += " selected";
        
        if (props.isQuizEnd) {
            if (!props.isCorrect) 
                className += " wrong";
        }
    }
    
    if (props.isQuizEnd) {
        className += " defaultCursor";
        if (props.isCorrect) 
            className += " correct";
    }

    return (
        <button
            className={className}
            onClick={props.selectAnswer}
        >
            {props.answer}
        </button>
    );
}

export default Answer;