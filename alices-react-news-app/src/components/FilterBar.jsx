import React, { Component } from 'react';

class FilterBar extends Component {

    state = {
        authorButton: "A-Z",
        dateButton: "Show Oldest First",
        commentButton: "Low-High",
        votesButton: "Low-High"
    }

    //date
    handleAuthorClick = () => {
        if (this.state.authorButton === "A-Z") {
            this.props.changeFilter("asc", "author")
            this.setState({ authorButton: "Z-A" })
        } else {
            this.props.changeFilter("desc", "author")
            this.setState({ authorButton: "A-Z" })
        }
    }
    //author
    handleOrderClick = () => {
        if (this.state.dateButton === "Show Oldest First") {
            this.props.changeFilter("asc", "created_at")
            this.setState({ dateButton: "Most Recent" })
        } else {
            this.props.changeFilter("desc", "created_at")
            this.setState({ dateButton: "Show Oldest First" })
        }
    }
    //comment count
    handleCommentClick = () => {
        if (this.state.commentButton === "Low-High") {
            this.props.changeFilter("asc", "comment_count")
            this.setState({ commentButton: "High-Low" })
        } else {
            this.props.changeFilter("desc", "comment_count")
            this.setState({ commentButton: "Low-High" })
        }
    }
    //votes
    handleVotesClick = () => {
        if (this.state.votesButton === "Low-High") {
            this.props.changeFilter("asc", "votes")
            this.setState({ votesButton: "High-Low" })
        } else {
            this.props.changeFilter("desc", "votes")
            this.setState({ votesButton: "Low-High" })
        }
    }

    render() {
        const { authorButton, dateButton, commentButton, votesButton } = this.state
        return (
            <main className="filter-articles">
                <label>Date:
                    <button className="asc-desc-button" id="dateOrderButton" onClick={this.handleOrderClick}>{dateButton}</button>
                </label>
                <label>Author:
                    <button className="author-button" id="authorOrderButton" onClick={this.handleAuthorClick}>{authorButton}</button>
                </label>
                <label>Comment Count:
                    <button className="comment-button" id="commentOrderButton" onClick={this.handleCommentClick}>{commentButton}</button>
                </label>
                <label>Votes Count:
                    <button className="votes-button" id="votesOrderButton" onClick={this.handleVotesClick}>{votesButton}</button>
                </label>

            </main>
        );
    }
}

export default FilterBar;