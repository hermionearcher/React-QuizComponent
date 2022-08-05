import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         incorrectAnswer: false
    //     }
    //     console.log(this.props)
    //     this.handleClick = this.handleClick.bind(this);

    // }

    handleClick() {
        this.props.clickHandler(this.props.button_text)
        // console.log(this)
    }

    render() {
        return (
            <li className="answer-list-items">
                <button className="answer-button" onClick={this.handleClick.bind(this)}>
                    <p className="button-text">{this.props.button_text}</p>
                    {/* <i class="fa fa-check-circle"></i> */}
{/* 
                    {this.props.quiz_question.answer_options.map((answer_option, index) =>
                        {if ((answer_option === this.props.button_text) && (answer_option === this.props.incorrect_answer)) {
                            <i key={index} className="fa-solid fa-circle-xmark"></i>
                        } else {
                            <i key={index} className="icon-visible fa-solid fa-circle-xmark"></i>
                        }}
                    )} */}
                     {/* {this.props.incorrect_answer ? <i className={this.props.incorrect_answer ? "fa-solid fa-circle-xmark" : "icon-visible fa-solid fa-circle-xmark"}></i> : null} */}
                </button>
            </li>
        )
    }
}

export default QuizQuestionButton