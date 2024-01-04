import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import _ from "lodash";
import ProductAPI from "~/API/ProductAPI";
import {NavLink, useParams} from "react-router-dom";
import stylee from "./style_search.scss";
import "./search_product.js";
const Styles = classNames.bind(stylee);

function Search_product() {
  const [search, setSearch] = React.useState({});
  const search_product = useParams();
  React.useEffect(() => {
    const searchh = async () => {
      await search_productt();
    };
    searchh().catch(console.error);
  });
  const search_productt = async () => {
    const seearch_Product = await ProductAPI.getProduct({
      name: search_product.name,
    });
    setSearch(seearch_Product);
  };
  return (
    <div className="main_search_product" style={{display: "flex"}}>
      <ul style={{width: "1160px", height: "auto", margin: "auto"}}>
        <div className={Styles("img_Promotion")}>
          <div className={Styles("img_Promotion_children")}>
            <div className={Styles("hover_scale")}>
              <img src={search.images} />
            </div>
            <p className={Styles("infor_product")}>
              <NavLink to={`/product/${search._id}`}>
                <div className={Styles("name_productt")}>{search.name}</div>
                <div className={Styles("price_product")}>
                  {Intl.NumberFormat("vi", {
                    style: "currency",
                    currency: "VND",
                  }).format(search.price)}
                </div>
                <div className={Styles("cdt-product__config__param")}>
                  <span></span>
                </div>
              </NavLink>
              <NavLink to="/product" className={Styles("buy_now")}>
                <span className={Styles("span")}>Mua ngay</span>
              </NavLink>
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Search_product;
