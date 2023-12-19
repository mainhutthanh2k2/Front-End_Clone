import React from "react";
import Header from "~/commonest/Layout/default_Layout/header/index";
// import Hea from "~/commonest/Layout/commonents/Header"
import MiddleBar from "./middle_bar/middle_bar";
import Container_one from "./container_one/body";
import Promotion from "./Promotion/Promotion";
import Outstanding_phone from "./Outstanding_phone/Outstanding_phone";
import Laptops_sell_well from "./Laptops_sell_well/Laptops_sell_welll";
import Table from "./Table_sell/Tablett";
import Footer from "./Footer/footer";
function defaultLayout({ children }) {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <Container_one></Container_one>
      <Promotion></Promotion>
      <Outstanding_phone></Outstanding_phone>
      <Laptops_sell_well></Laptops_sell_well>
      <Table></Table>
      <Footer></Footer>
      {/* <div className="container">{children}</div> */}
    </React.Fragment>
  );
}
export default defaultLayout;
