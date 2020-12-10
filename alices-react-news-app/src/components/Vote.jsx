import React, { Component } from 'react';
import { updateVoteForArticle, updateVoteForComment } from "../api"

class Vote extends Component {

    state = {
        vote: 0,
    }

    handleVoteClick = (id, event) => {
        const { name } = this.props
        if (name === "comment") {
            this.setState({ vote: (this.state.vote + +event.target.value) })
            updateVoteForComment(id, +event.target.value)
        } else if (name === "article") {
            this.setState({ vote: (this.state.vote + +event.target.value) })
            updateVoteForArticle(id, +event.target.value)
        }
    }

    render() {
        const { id, vote } = this.props
        return (
            <div>
                <p>Votes: {vote + this.state.vote}</p>
                <button value={1} onClick={(event) => { this.handleVoteClick(id, event) }} disabled={this.state.vote === 1}>Vote</button>
                <button value={-1} onClick={(event) => { this.handleVoteClick(id, event) }} disabled={this.state.vote === 0}>Undo Vote</button>
            </div >
        )
    }
}

export default Vote;