import React, { Component } from 'react';

class AddCommentForm extends Component {
    state = {
        username: this.props.username,// hardcoded username until login functionality is implemented
        body: "",
        displayError: false
    }

    handleChange = (event) => {
        this.setState({ body: event.target.value })
    }

    handleSubmit = (event) => {
        const { body, username } = this.state
        const { addComment } = this.props
        event.preventDefault();
        if (!body.length) {
            this.setState({ displayError: true })
        } else {
            addComment({ body, username })
            this.setState({ body: "" })
        }
    }

    render() {
        const { body, displayError } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="comment-form-box" type="text" onChange={this.handleChange} value={body}></textarea>
                    <button>Post Comment</button>
                </form >
                <p hidden={!displayError}>Unable to submit empty comment</p>
            </div>
        );
    }
}

export default AddCommentForm;
