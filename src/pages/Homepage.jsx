import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CategoriesSection from "../components/CategoriesSection";
import JustForYou from "../components/JustForYou";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="body container">
        <Categories />
        <CategoriesSection />
        <JustForYou />
      </div>
    </div>
  );
};

export default Homepage;
