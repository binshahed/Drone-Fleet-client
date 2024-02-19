import React from "react";
import AboutUs from "../../AboutUs/AboutUs";
import AllProducts from "../../AllProducts/AllProducts";
import Footer from "../../Footer/Footer";
import Review from "../../Review/Review";
import Navigation from "../../Shared/Navigation/Navigation";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import ReasonsToShop from "../ReasonsToShop/ReasonsToShop";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />

      <AllProducts home="home" />
      <ReasonsToShop />
      <AboutUs home="home" />
      <Counter />
      {/* <Review home='home' /> */}
      <Footer />
    </div>
  );
};

export default Home;
