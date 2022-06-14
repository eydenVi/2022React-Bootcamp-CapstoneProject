import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import Products from "../components/products/Products";
import Sidebar from "../components/sidebar/SideBar";
import rawCategories from "../mocks/en-us/product-categories.json";
import rawProducts from "../mocks/en-us/products.json";
import {device} from "../utils/constants";

const Styles = styled.div`
  .product-container {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 100px
  }

  .product-list-container {
    width: 100%
  }

  @media screen and ${device.tablet} {
    .product-container {
      margin-top: 8.6em;
    }

    .side-container {
      width: 40%;
    }

    .product-list-container {
      width: 100%;
    }
  }

  .pagination{
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }

  .pagination a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
  }

  .pagination a.active {
    background-color: #699c31;
    color: white;
  }

  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
`

const ProductList = () => {
  const {results: categoryList} = rawCategories;
  let {results: productList} = rawProducts;
  
  const categoriesData = categoryList.map(cat => cat.data);
  
  const [categoriesState, setCategoriesState] = useState(Object.fromEntries(
    categoriesData.map((cat) => {
      return [cat.name, false]
    })
  ));
  
  const [productsState, setProductsState] = useState([]);
  const [isLoadingState, setIsLoadingState] = useState(true);
  
  useEffect(() => {
    setIsLoadingState(true);
    setTimeout(()=> {
      setProductsState(
        productList.filter( product => {
          const { category: productCategory } = product.data;
          const selectedCategories = [];
      
          Object.entries(categoriesState).forEach( ([key, value]) => {
            if(value) {
              selectedCategories.push(key.toLowerCase());
            }
          })
          if(!selectedCategories.length){ return true }
      
          return selectedCategories.includes(productCategory?.slug)
        })
      )
      setIsLoadingState(false);
    }, 2000)
  }, [categoriesState]);
  
  
  return (
    <Styles>
      <div className="product-container">
        <div className="sidebar-container">
          <Sidebar
            categories={categoriesData}
            categoriesState={categoriesState}
            setCategoriesState={setCategoriesState}
          />
        </div>
        <div className="product-list-container">
          { isLoadingState ? 'Loading...' : <Products products={productsState}/> }
        </div>
      </div>
      <div className="pagination">
        <a href="/#">&laquo;</a>
        <a href="/#" className="active">1</a>
        <a href="/#">2</a>
        <a href="/#">3</a>
        <a href="/#">4</a>
        <a href="/#">5</a>
        <a href="/#">&raquo;</a>
      </div>
    </Styles>
  );
};

export default ProductList;
