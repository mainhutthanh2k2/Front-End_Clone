import React from "react";
import Header from "~/commonest/Layout/default_Layout/header/index";
import MiddleBar from "~/commonest/Layout/default_Layout/middle_bar/middle_bar";
import TabletLayout from "./body_table_layout/body_Tablet_layout";
import Footer from "../default_Layout/Footer/footer";
function Tablet_Layout({children}) {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <TabletLayout></TabletLayout>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Tablet_Layout;
