import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shortner from "./components/Shortner";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Hero />
        <Features />
        <Pricing />
        <Shortner />
        <Faq />
        <GetStarted />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
