import React, { Component } from 'react';
import { Link } from '@reach/router'
import { getAllTopics } from '../api';
import NavBarLoading from "./NavBarLoading"

class Nav extends Component {
    state = {
        topics: [],
        isLoading: true,
        hasError: false,
        errorMessage: ""
    }

    componentDidMount() {
        getAllTopics().then((topics) => {
            this.setState({ topics, isLoading: false })
        })
            .catch((err) => {
                const { response: { status, statusText } } = err
                this.setState({ isLoading: false, hasError: true, errorMessage: `Oh no! Status ${status}, ${statusText}` }
                )
            })
    }

    render() {
        const { topics, isLoading, hasError, errorMessage } = this.state;
        if (isLoading) {
            return <NavBarLoading />
        } else if (hasError) {
            return <h2>{errorMessage}</h2>
        } else {
            return (
                <nav className="nav-bar">
                    {topics.map((topic) => {
                        return <Link className="nav-links" key={topic.slug} to={`/topics/${topic.slug}`}>{topic.slug}
                        </Link>
                    })}
                </nav>
            );
        }
    }
}

export default Nav;