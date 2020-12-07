import React, { Component } from 'react';
import { Link } from '@reach/router'
import { getAllTopics } from '../api';

class Nav extends Component {
    state = {
        topics: [],
    }

    componentDidMount() {
        getAllTopics().then((topics) => {
            this.setState({ topics })
        })
    }

    render() {
        const { topics } = this.state;
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