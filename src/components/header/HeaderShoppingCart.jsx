import React from 'react';
import styled from "styled-components";

import shopCart from "../../icons/shop-cart.svg"

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
        <img src={shopCart} alt="shopCart" width="23px" height="23px"/>
      </div>
    </Styles>
  )
}

export default HeaderShoppingCart;
