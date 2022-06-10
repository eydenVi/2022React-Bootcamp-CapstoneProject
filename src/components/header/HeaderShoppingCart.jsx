import React from 'react';
import styled from "styled-components";

import shoppingCart from "../../icons/shop-cart.svg"

const Styles = styled.a`
  img {
    cursor: pointer;
    font-size: 1.8em;
  }
`

const HeaderShoppingCart = () => {
  return (
    <Styles>
      <img src={shoppingCart} alt="cart" width="30" height="30"/>
    </Styles>
  )
}

export default HeaderShoppingCart;
