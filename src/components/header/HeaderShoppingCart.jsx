import React from 'react';
import styled from "styled-components";

const Styles = styled.a`
  .shop-cart {
    cursor: pointer;
    font-size: 30px;
    margin-left: 5px;
    margin-right: 5px;
  }
`

const HeaderShoppingCart = () => {
  return (
    <Styles>
      <div className="shop-cart">
        <i className="bi bi-cart" />
      </div>
    </Styles>
  )
}

export default HeaderShoppingCart;
