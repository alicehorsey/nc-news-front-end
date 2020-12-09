import React, { Component } from 'react';

class AddCommentForm extends Component {
    state = {
        username: "",
        body: ""
    }

    handleChange = (event) => {
        const { username, body } = this.state
        if (event.target.id === username) {
            this.setState({ username: event.target.value })
        } else if (event.target.id === body) {
            this.setState({ body: event.target.value })
        }


    }


    render() {
        const { username, body } = this.state

        return (
            <form>
                <input type="text" onChange={this.handleChange} value={username} id={username}></input>
                <input type="text" onChange={this.handleChange} value={body} id={body}></input>
                <button>Post Comment</button>
            </form>

        );
    }
}

export default AddCommentForm;

// {
// "username": "username",
// "body": "text"
// }