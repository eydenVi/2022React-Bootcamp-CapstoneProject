import React from 'react';

import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";

import rawCategories from "../mocks/en-us/product-categories.json";
import rawProducts from "../mocks/en-us/products.json";
import styled from "styled-components";
import Footer from "./Footer";

const Styles = styled.div`
  button {
    width: 15em;
    height: 50px;
    border-radius: 4%;
    font-weight: bold;
    font-size: 1em;
    color: white;
    background-color: #699c31;
    border: 0;
    cursor: pointer;
  }

  button:hover {
    background-color: #516f33;
  }

  h2 {
    font-size: 2.4em;
    font-weight: lighter;
    margin-top: 2em;
  }
`

const Home = ({goTo}) => {
  const { results: categoryList } = rawCategories;
  const { results: productList } = rawProducts;
  
  return (
    <Styles>
      <Slider />
      <Categories categories={categoryList} />
      <h2>Capstone Products</h2>
      <Products products={productList}/>
      <button onClick={() => {goTo("productList")}}>
        View all products...
      </button>
      <Footer />
    </Styles>
  );
};

export default Home;
