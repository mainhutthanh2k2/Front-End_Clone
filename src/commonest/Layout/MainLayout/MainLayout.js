import React from "react";
import Header from "../default_Layout/header";
import MiddleBar from "../default_Layout/middle_bar/middle_bar";

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Header></Header>
      {/* <MiddleBar></MiddleBar> */}
      <div className="container">{children}</div>
    </React.Fragment>
  );
}

export default MainLayout;
