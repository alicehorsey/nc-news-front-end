import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import { Router } from "@reach/router"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticlesList path="/topics/:topic_name" />
      </Router>
    </div>
  );
}

export default App;
