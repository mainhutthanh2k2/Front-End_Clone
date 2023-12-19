import React from "react";
import Header from "~/commonest/Layout/default_Layout/header/index";
// import MiddleBar from "./middle_bar/middle_bar";
import MiddleBar from "~/commonest/Layout/default_Layout/middle_bar/middle_bar";
import Bodylaptop from "./body_laptop/body_laptop_sell";
import Footer from "../default_Layout/Footer/footer";
function Laptop_Layout({children}) {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <Bodylaptop></Bodylaptop>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Laptop_Layout;
