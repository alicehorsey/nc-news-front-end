import React, { Component } from 'react';

class CommentsFilterBar extends Component {

    state = {
        dateButton: "Show Oldest First",
        votesButton: "Low-High"
    }

    //date
    handleDateClick = () => {
        if (this.state.dateButton === "Show Oldest First") {
            this.props.changeFilter("asc", "created_at")
            this.setState({ dateButton: "Most Recent" })
        } else {
            this.props.changeFilter("desc", "created_at")
            this.setState({ dateButton: "Show Oldest First" })
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
        const { dateButton, votesButton } = this.state
        return (
            <main className="filter-articles">
                <label>Date:
                    <button className="asc-desc-button" id="dateOrderButton" onClick={this.handleDateClick}>{dateButton}</button>
                </label>
                <label>Votes Count:
                    <button className="votes-button" id="votesOrderButton" onClick={this.handleVotesClick}>{votesButton}</button>
                </label>

            </main>
        );
    }
}

export default CommentsFilterBar
    ;