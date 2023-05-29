import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
    <Navigation />
    <Hero />
    </div>
    </Router>
  );
}

export default App;
