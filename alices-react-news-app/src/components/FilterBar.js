import React, { Component } from 'react';

class FilterBar extends Component {

    state = {
        authorButton: "Author Ascending",
        dateButton: "Date Ascending"
    }


    handleOrderClick = ({ target }) => {
        console.log(target.id)
        if (this.state.dateButton === "Date Ascending") {
            this.setState({ dateButton: "Date Descending" })
        } else {
            this.setState({ dateButton: "Date Ascending" })
        }
    }
    handleAuthorClick = ({ target }) => {
        console.log(target.id)
        if (this.state.authorButton === "Author Ascending") {
            this.setState({ authorButton: "Author Descending" })
        } else {
            this.setState({ authorButton: "Author Ascending" })
        }
    }


    render() {
        // const { topicOption } = this.props
        const { authorButton, dateButton } = this.state

        return (
            <main>
                <label className="filter-articles">Sort By:
                    <button className="author-button" id="authorOrderButton" onClick={this.handleAuthorClick}>{authorButton}</button>
                    <button className="asc-desc-button" id="dateOrderButton" onClick={this.handleOrderClick}>{dateButton}</button>
                </label>
            </main>
        );
    }
}

export default FilterBar;