import React from "react";
import Header from "../default_Layout/header";
import MiddleBar from "../default_Layout/middle_bar/middle_bar";
import LayoutProduct from "./product/alon_product";
function Layout_product() {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <LayoutProduct></LayoutProduct>
    </React.Fragment>
  );
}

export default Layout_product;
