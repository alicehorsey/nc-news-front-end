import React, { Component } from 'react';
import { updateVoteForArticle } from "../api"

class Vote extends Component {

    state = {
        vote: 0,
    }

    handleVoteClick = (id, event) => {
        this.setState({ vote: (this.state.vote + +event.target.value) })
        updateVoteForArticle(id, +event.target.value)
    }

    render() {
        const { id, vote } = this.props
        return (
            <div>
                <p>Votes: {vote + this.state.vote}</p>
                <button value={1} onClick={(event) => { this.handleVoteClick(id, event) }} disabled={this.state.vote === 1}>Vote</button>
                <button value={-1} onClick={(event) => { this.handleVoteClick(id, event) }} disabled={this.state.vote === 0}>Undo Vote</button>
            </div >
        );
    }
}

export default Vote;