import React from "react";
import styled from "styled-components";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";


const Body = styled.div`
background-color: #E8FADD;
`;

const Home = () => {
  return (
    <div>
<Body>
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Footer/>
      </Body>
    </div>
  );
};

export default Home;
