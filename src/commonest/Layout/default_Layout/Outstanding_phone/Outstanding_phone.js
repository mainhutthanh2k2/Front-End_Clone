import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import Apiproduct from "~/API/ProductAPI";
import stylee from "./Outstanding_phone.scss";
import Tippy from "@tippyjs/react";
const Styles = classNames.bind(stylee);
function Outstanding_phone() {
  const [product, setProduct] = React.useState({});
  useEffect(() => {
    const aa = async () => {
      const APi = await Apiproduct.getProducts({
        category: "PH",
      });
      setProduct(APi);
    };
    aa().catch(console.error);
  }, []);
  return (
    <div className={Styles("Outstanding_phone")}>
      <div className={Styles("Outstanding_phone_centerr")}>
        <img src="https://images.fpt.shop/unsafe/filters:quality(90)…/Originals/2023/11/30/638369392838333568_html.png" />
      </div>
      <div className={Styles("Outstanding_phone_product")}>
        <div className={Styles("table_Outstanding_phonee")}>
          <p className={Styles("phone_title")}>ĐIỆN THOẠI NỔI BẬT</p>
          <div className={Styles("img_Promotionn")}>
            {product &&
              product.length > 0 &&
              product.map((e, index) => {
                return (
                  <div className={Styles("img_Promotion_children")}>
                    <div className={Styles("hover_scale")} key={index}>
                      <img src={e.images} />
                    </div>
                    <p className={Styles("infor_product")}>
                      <NavLink to="/product">
                        <div className={Styles("name_productt")}>{e.name}</div>
                        <div className={Styles("price_product")}>
                          {" "}
                          {Intl.NumberFormat("vi", {
                            style: "currency",
                            currency: "VND",
                          }).format(e.price)}
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
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outstanding_phone;
