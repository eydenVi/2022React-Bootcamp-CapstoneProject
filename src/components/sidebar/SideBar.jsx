import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import SideBarCategories from "./SideBarCategories";
import { device } from "../../utils/constants";

const Styles = styled.div`

  .sidebar {
    height: 100%;
    position: fixed;
    z-index: 4;
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }

  .sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidebar a:hover {
    color: #f1f1f1;
  }

  .sidebar .closeBtn {
    position: absolute;
    top: 0;
    right: 2px;
    font-size: 30px;
    margin-left: 50px;
    color: black;
    cursor: pointer;
  }
  
  .sidebar-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .sidebar-header{
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
  }

  .sidebar-categories{
    display: flex;
    flex-direction: column;
    text-align: initial;
    padding-top: 1em;
    padding-left: 3em;
    padding-right: 4em;
  }
  
  @media screen and ${device.tablet} {
    .sidebar {
      padding-top: 38px;
    }

    .sidebar a {
      font-size: 16px;
    }
  }
`

const Sidebar = ({categories, categoriesState, setCategoriesState}) => {
  
  const [sideBarWidth, setSideBarWidth] = useState("33px");
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  
  const handleNavButton = (isOpen) => {
    if(isOpen){
      setIsOpenSideBar(!isOpen);
      setSideBarWidth("33px");
    }
    else {
      setIsOpenSideBar(!isOpen);
      setSideBarWidth("35%");
    }
  }
  
  return (
    <Styles>
      <div className="sidebar" id="sidebarId" style={{ width: sideBarWidth }}>
        <span className="closeBtn" onClick={() => handleNavButton(isOpenSideBar)}>
          <i className="bi bi-list" />
        </span>
        <div className="sidebar-content" style={{ display: isOpenSideBar ? "flex" : "none" }}>
          <div className="sidebar-header">
            <span>Categories</span>
          </div>
          <div className="sidebar-categories">
            <SideBarCategories
              categories={categories}
              categoriesState={categoriesState}
              setCategoriesState={setCategoriesState}
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired,
  categoriesState: PropTypes.object.isRequired,
  setCategoriesState: PropTypes.func.isRequired,
};

export default Sidebar;
