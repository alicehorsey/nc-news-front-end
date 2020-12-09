import React, { Component } from 'react';
import { updateVoteForArticle, updateVoteForComment } from "../api"

class Vote extends Component {

    state = {
        vote: 0,
    }

    handleArticleVoteClick = (id, event) => {
        this.setState({ vote: (this.state.vote + +event.target.value) })
        updateVoteForArticle(id, +event.target.value)
    }

    handleCommentVoteClick = (id, event) => {
        this.setState({ vote: (this.state.vote + +event.target.value) })
        updateVoteForComment(id, +event.target.value)
    }

    render() {
        const { name, id, vote } = this.props
        if (name === "article") {
            return (
                <div>
                    <p>Votes: {vote + this.state.vote}</p>
                    <button value={1} onClick={(event) => { this.handleArticleVoteClick(id, event) }} disabled={this.state.vote === 1}>Vote</button>
                    <button value={-1} onClick={(event) => { this.handleArticleVoteClick(id, event) }} disabled={this.state.vote === 0}>Undo Vote</button>
                </div >
            );
        } else if (name === "comment") {
            return (
                <div>
                    <p>Votes: {vote + this.state.vote}</p>
                    <button value={1} onClick={(event) => { this.handleCommentVoteClick(id, event) }} disabled={this.state.vote === 1}>Vote</button>
                    <button value={-1} onClick={(event) => { this.handleCommentVoteClick(id, event) }} disabled={this.state.vote === 0}>Undo Vote</button>
                </div >
            );
        }


    }
}

export default Vote;