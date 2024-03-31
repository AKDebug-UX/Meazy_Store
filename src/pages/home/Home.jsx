import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
