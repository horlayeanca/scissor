import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shortner from "./components/Shortner";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Hero />
        <Features />
        <Shortner />
      </div>
    </Router>
  );
}

export default App;
