import React from "react";

function Answer(props) {

    return (
        <button
            className={props.isSelected ? "Question--answer-selected" : "Question--answer"}
            onClick={props.selectAnswer}
        >
            {props.answer}
        </button>
    );
}

export default Answer;