import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import GetStarted from "./GetStarted";
import Shortner from "./Shortner";
import Faq from "./Faq";

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      {/*  
       
      <Shortner />
      <Faq />
  <GetStarted /> */}
    </div>
  );
}

export default Home;
