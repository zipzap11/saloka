import React from "react";
import Banner from "../Components/Banner";
import bannerImg from "../Assets/banner.svg";
import Features from "../Components/Feature/Features";
import Categories from "../Components/Category/Categories";
import Recommendations from "../Components/Recommendation/Recommendations";
function Home() {
  return (
    <div>
      <Banner content={bannerImg} />
      <Features />
      <Categories />
      <Recommendations />
    </div>
  );
}

export default Home;
