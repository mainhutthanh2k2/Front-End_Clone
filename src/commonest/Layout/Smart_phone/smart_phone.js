import React from "react";
import Header from "~/commonest/Layout/default_Layout/header/index";
import MiddleBar from "~/commonest/Layout/default_Layout/middle_bar/middle_bar";
import Body from "./body_smart_phone/body";
import Footer from "../default_Layout/Footer/footer";
function Laptop({children}) {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <Body></Body>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Laptop;
