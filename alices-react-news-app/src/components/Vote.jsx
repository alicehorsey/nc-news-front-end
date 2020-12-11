import React, { Component } from 'react';
import { updateVoteForArticle, updateVoteForComment } from "../api"

class Vote extends Component {

    state = {
        vote: 0,
    }

    handleVoteClick = (id, value) => {
        const { name } = this.props
        if (name === "comment") {
            this.setState({ vote: (this.state.vote + value) })
            updateVoteForComment(id, value)
        } else if (name === "article") {
            this.setState({ vote: (this.state.vote + value) })
            updateVoteForArticle(id, value)
        }
    }

    render() {
        const { id, vote } = this.props
        return (
            <div className="vote-button">
                <p>Votes: {vote + this.state.vote}</p>
                <button onClick={() => { this.handleVoteClick(id, 1) }} disabled={this.state.vote === 1}>Vote</button>
                <button onClick={() => { this.handleVoteClick(id, -1) }} disabled={this.state.vote === 0}>Undo Vote</button>
            </div >
        )
    }
}

export default Vote;