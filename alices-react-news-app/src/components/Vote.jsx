import React, { Component } from 'react';
import { updateVoteForArticle } from "../api"

class Vote extends Component {

    state = {
        //vote button limit at 10 so when voteCount gets to 10 disable button
        voteUp: false,
        voteDown: false,
        voteRequests: 0
    }

    handleVoteClick = (article_id, event) => {
        console.log(article_id)
        console.log(event.target.id)

        if (event.target.id === "up-vote") {
            this.setState({ voteUp: true, voteRequests: 1 })
            updateVoteForArticle(article_id, 1).then(
                this.setState({ voteUp: false })
            )
        }

    }





    render() {
        console.log(this.props.article_id)
        const { article_id } = this.props
        return (
            <div>
                <button id="up-vote" onClick={(event) => { this.handleVoteClick(article_id, event) }}>Vote</button>
                <button id="down-vote" onClick={(event) => { this.handleVoteClick(article_id, event) }}>Undo Vote</button>
            </div>
        );
    }
}

export default Vote;