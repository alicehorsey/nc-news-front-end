import React, { Component } from 'react';

class FilterBar extends Component {

    state = {
        authorButton: "A-Z",
        dateButton: "Show Oldest First"
    }

    handleOrderClick = () => {
        if (this.state.dateButton === "Show Oldest First") {
            this.props.changeFilter("asc", "created_at")
            this.setState({ dateButton: "Most Recent" })
        } else {
            this.props.changeFilter("desc", "created_at")
            this.setState({ dateButton: "Show Oldest First" })
        }
    }

    handleAuthorClick = () => {
        if (this.state.authorButton === "A-Z") {
            this.props.changeFilter("asc", "author")
            this.setState({ authorButton: "Z-A" })
        } else {
            this.props.changeFilter("desc", "author")
            this.setState({ authorButton: "A-Z" })
        }
    }


    render() {
        const { authorButton, dateButton } = this.state
        return (
            <main className="filter-articles">
                {/* <h3>Sort By:</h3> */}
                <label>Author:
                    <button className="author-button" id="authorOrderButton" onClick={this.handleAuthorClick}>{authorButton}</button>
                </label>
                <label>Date:
                    <button className="asc-desc-button" id="dateOrderButton" onClick={this.handleOrderClick}>{dateButton}</button>
                </label>

            </main>
        );
    }
}

export default FilterBar;