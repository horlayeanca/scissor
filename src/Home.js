import React from "react";
import Faq from "./components/Faq";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Shortner from "./components/Shortner";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Shortner />
      <Faq />
      <GetStarted />
    </div>
  );
}

export default Home;
