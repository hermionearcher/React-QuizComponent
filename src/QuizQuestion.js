import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incorrectAnswer: false
        }
    }
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
            this.setState({ incorrectAnswer: false })
        } else {
            this.setState({ incorrectAnswer: true })
        }
    }
    
    render() {
        return (
            <main className="quiz-question-main">
                <section>
                    <h1 className="quiz-question-title">{this.props.quiz_question.instruction_text}</h1>
                </section>
                <section className="buttons">
                    <ul className="answer-list">
                        {this.props.quiz_question.answer_options.map((answer_option, index) =>
                            <QuizQuestionButton key={index} button_text={answer_option} incorrect_answer={this.state.incorrectAnswer} clickHandler={this.handleClick.bind(this)}/>
                        )}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right.</p> : null}
            </main>
        )
    }
}

export default QuizQuestion