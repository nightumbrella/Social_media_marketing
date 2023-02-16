import React from "react";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Promote from "./components/promote&question/Promote";
import Testimonial from "./components/testimonials/Testimonial";
import "./index.css";
import Rating from "./rating/Rating";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Category />
      <Rating />
      <Promote />
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default App;
