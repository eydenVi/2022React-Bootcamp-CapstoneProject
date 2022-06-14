import React from "react";
import styled from "styled-components";

import HeaderShoppingCart from "./HeaderShoppingCart";
import Logo from '../logo/Logo';
import SearchField from "./SearchField";
import { device } from "../../utils/constants";


const Styles = styled.div`
  header{
    overflow: hidden;
    background-color: #fcff92;
    padding: 20px 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 99;
    margin-bottom: 2em;
    top: 0;
  }

  .header-home{
    width: 15%;
    display: flex;
    margin-left: 2em;
    flex-direction: row;
    cursor: pointer;
  }

  .header-search{
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 3em;
  }
  
  .shopping-cart{
    display: flex;
    margin-right: 1em;
    align-items: center;
  }
  
  .menu{
    margin-right: 5px;
  }

  .header-title {
    display: flex;
    flex-direction: row;
  }

  .header-logo {
    margin-right: 1em;
  }
  
  .menu-item{
    font-size: 15px;
  }

  .menu-item:hover{
    color: #61dafb;
    cursor: pointer;
  }

  .header-title{
    font-size: 1em;
  }
  
  @media screen and ${device.tablet} {
    .header{
      flex-direction: column;
    }
    .header-search{
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
    }
    .header-home{
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
    }
  }
`

const Header = ({goTo}) => {
  return (
    <Styles>
      <header>
        <div className="header-home">
          <div className="header-title" onClick={() => goTo("home")}>
            <div className="header-logo">
              <Logo width="50px" height="50px" />
            </div>
            <h3 className="header-title">Store</h3>
          </div>
        </div>
        <div className="header-search">
          <div className="menu">
            <span className="menu-item" onClick={() => {goTo("productList")}}>
              Products
            </span>
          </div>
          <div className="shopping-cart">
            <HeaderShoppingCart/>
          </div>
          <SearchField changeSearchField={() => {}}/>
        </div>
      </header>
    </Styles>
  );
};

export default Header;
