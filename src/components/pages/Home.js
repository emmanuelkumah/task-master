import React from "react";
import Blog from "../Blog/Blog";
import FeatureSection from "../FeaturesSection/FeatureSection";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
// import Features from "./Features";

function Home() {
  return (
    <div>
      <Hero />
      {/* <FeatureSection /> */}
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
