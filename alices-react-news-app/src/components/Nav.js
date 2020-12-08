import React, { Component } from 'react';
import { Link } from '@reach/router'
import { getAllTopics } from '../api';
import NavBarLoading from "./NavBarLoading"

class Nav extends Component {
    state = {
        topics: [],
        isLoading: true
    }

    componentDidMount() {
        getAllTopics().then((topics) => {
            this.setState({ topics, isLoading: false })
        })
    }

    render() {

        const { topics, isLoading } = this.state;
        if (isLoading) return <NavBarLoading />
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

export default Nav;