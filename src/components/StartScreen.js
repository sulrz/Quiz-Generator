import React from "react";

function StartScreen(props) {
    return (
        <main className="StartScreen">
            <h1 className="StartScreen--header">Quiz Generator</h1>
            <p className="StartScreen--description">Description</p>

            {props.quizReady ?
                <button 
                    className="StartScreen--button"
                    onClick={props.clickStartQuiz}
                >
                    Start quiz
                </button>
                :
                <h3>Loading...</h3>
            }
        </main>
    );
}

export default StartScreen;