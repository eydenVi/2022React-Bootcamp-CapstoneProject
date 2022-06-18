import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Product from "./Product";

const Styles = styled.div`
  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2.5em auto 0;
  }
`
const Products = ({products}) => {
  return (
    <Styles>
      <div className="cards-container">
        {products.map(({ data: productInfo }) => {
          return (<Product
            properties={productInfo}
            key={productInfo.sku}
          />)
        })}
      </div>
    </Styles>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
