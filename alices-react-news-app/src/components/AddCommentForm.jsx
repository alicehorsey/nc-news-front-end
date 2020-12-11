import React, { Component } from 'react';

class AddCommentForm extends Component {
    state = {
        username: this.props.username,// hardcoded username until login functionality is implemented
        body: ""
    }

    handleChange = (event) => {
        this.setState({ body: event.target.value })
    }

    handleSubmit = (event) => {
        const { body, username } = this.state
        const { addComment } = this.props
        event.preventDefault();
        addComment({ body, username })
        this.setState({ body: "" })
    }

    render() {
        const { body } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea className="comment-form-box" type="text" onChange={this.handleChange} value={body}></textarea>
                <button>Post Comment</button>
            </form >
        );
    }
}

export default AddCommentForm;
