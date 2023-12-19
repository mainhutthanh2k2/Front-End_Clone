import React from "react";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import Api_laptop from "~/API/ProductAPI";
import style from "./Laptopss_sell_well.scss";
const Styles = classNames.bind(style);
function Laptops_sell_well() {
  const [laptop, set_ApiLaptop] = React.useState({});
  React.useEffect(() => {
    const laptop = async () => {
      const Api = await Api_laptop.getProducts({
        category: "LT",
      });
      set_ApiLaptop(Api);
    };
    laptop().catch(console.error);
  }, []);
  return (
    <div className={Styles("Outstanding_laptop")}>
      <Tippy content="thanh" placement="top">
        <div className={Styles("Outstanding_laptop_center")}>
          <img src="https://images.fpt.shop/unsafe/filters:quality(90)…/Originals/2023/11/30/638369392838333568_html.png" />
        </div>
      </Tippy>
      <div className={Styles("Outstanding_phone_product")}>
        <div className={Styles("table_Outstanding_phone")}>
          <p className={Styles("phone_title")}>LAPTOP BÁN CHẠY</p>
          <div className={Styles("img_Promotionn")}>
            {laptop &&
              laptop.length > 0 &&
              laptop.map((e, index) => {
                return (
                  <div className={Styles("img_Promotion_children")} key={index}>
                    <div className={Styles("hover_scale")}>
                      <img src={e.images} />
                    </div>
                    <p className={Styles("infor_product")}>
                      <NavLink to="/product">
                        <div className={Styles("name_productt")}>{e.name}</div>
                        <div className={Styles("price_product")}>
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

export default Laptops_sell_well;
