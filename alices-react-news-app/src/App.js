import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'
import ErrorMessage from './components/ErrorMessage'
import { Router } from "@reach/router"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/topics/:topic_name" />
        <SingleArticle path="/article/:article_id" />
        <ErrorMessage default errorMessage="Page not found!" />
      </Router>
      <span className="img-description">Background Image Photo by <a href="https://unsplash.com/@waldemarbrandt67w?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Waldemar Brandt</a> on <a href="https://unsplash.com/s/photos/newspaper?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div>
  );
}

export default App;
