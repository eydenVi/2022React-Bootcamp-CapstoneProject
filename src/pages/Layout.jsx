import React, {useState} from "react"

import Content from "./Content";
import Header from "../components/header/Header";
import Home from "./Home"
import ProductList from "./ProductList"

function Layout() {
  
  const [currentPageState, setCurrentPageState] = useState("home");
  
  const pageMapping = {
    "home": <Home goTo={setCurrentPageState}/> ,
    "productList": <ProductList />,
  };
  
  return (
    <div className="App">
      <Header goTo={setCurrentPageState} />
      <Content currentPage={pageMapping[currentPageState]} />
    </div>
  );
}

export default Layout;
