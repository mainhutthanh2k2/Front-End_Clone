import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./AdminDirectory.scss";

function AdminDirectory() {
  return (
    <ul className="directory_container">
      <label className="title">Danh mục quản lí</label>
      <NavLink to={"/admin/customer"} className="item">
        Quản lí khách hàng
      </NavLink>
      <NavLink to={"/admin/product"} className="item">
        Quản lí sản phẩm
      </NavLink>
      <NavLink to={"/admin/category"} className="item">
        Quản lí loại sản phẩm
      </NavLink>
    </ul>
  );
}

export default AdminDirectory;
