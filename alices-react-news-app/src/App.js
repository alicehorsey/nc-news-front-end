import './App.css';
import React, { Component } from 'react';
import LoginBar from "./components/LoginBar"
import Nav from './components/Nav'
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'
import ErrorMessage from './components/ErrorMessage'
import { Router } from "@reach/router"

class App extends Component {
  state = {
    isLoggedIn: true,
    username: "jessjelly",
  }

  changeLogInStatus = () => {
    const { isLoggedIn } = this.state
    isLoggedIn ? this.setState({ isLoggedIn: false }) : this.setState({ isLoggedIn: true })

  }

  render() {
    const { username, isLoggedIn } = this.state

    if (isLoggedIn) {
      return (
        <div className="App">
          <LoginBar username={username} logInStatus={this.changeLogInStatus} />
          <Nav />
          <Header />
          <Router>
            <ArticlesList path="/" />
            <ArticlesList path="/topics/:topic_name" />
            <SingleArticle path="/article/:article_id" username={username} />
            <ErrorMessage default errorMessage="Page not found!" />
          </Router>
          <span className="img-description">Background Image Photo by <a href="https://unsplash.com/@waldemarbrandt67w?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Waldemar Brandt</a> on <a href="https://unsplash.com/s/photos/newspaper?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
      );
    } else {
      return (
        <div className="App">
          <LoginBar username={username} logInStatus={this.changeLogInStatus} />
          <Header />
          <h2>Log Out Successful</h2>
          <div className="front-page"></div>
          <span className="img-description">Background Image Photo by <a href="https://unsplash.com/@waldemarbrandt67w?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Waldemar Brandt</a> on <a href="https://unsplash.com/s/photos/newspaper?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
      );
    }




  }

}

export default App;
