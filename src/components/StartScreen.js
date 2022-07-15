import React from "react";

function StartScreen(props) {
    return (
        <main className="StartScreen">
            <h1 className="StartScreen--header">Random Quiz Generator</h1>
            <p className="StartScreen--description">This website generates a quiz consisting of 5 random questions on different topics</p>

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