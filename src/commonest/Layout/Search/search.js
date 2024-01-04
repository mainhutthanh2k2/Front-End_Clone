import React from "react";
import Header from "~/commonest/Layout/default_Layout/header/index";
import MiddleBar from "~/commonest/Layout/default_Layout/middle_bar/middle_bar";
import Search from "./search/search_product";
import Footer from "../default_Layout/Footer/footer";
function Searchh() {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <Search></Search>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Searchh;
