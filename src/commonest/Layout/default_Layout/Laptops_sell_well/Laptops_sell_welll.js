import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Laptopss_sell_well.scss";
import Taplet_Api from "~/API/ProductAPI";
const Styles = classNames.bind(style);
function Table_sell() {
  const [Taplet, settaplet] = React.useState({});
  React.useEffect(() => {
    const Taplett = async () => {
      let Seen_Taplet = await Taplet_Api.getProducts({
        category: "LT",
      });
      while (Seen_Taplet.length < 5) {
        Seen_Taplet = Seen_Taplet.concat(Seen_Taplet);
      }
      settaplet(Seen_Taplet);
    };
    Taplett().catch(console.error);
  }, []);
  console.log(Taplet);
  return (
    <div className={Styles("Outstanding_Laptop")}>
      <div className={Styles("Outstanding_tablet_center")}>
        <img
          src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/12/1/638369899172790456_F-H5_1200x200.png"
          style={{width: "100%"}}
        />
      </div>
      <div className={Styles("Outstanding_phone_product")}>
        <div className={Styles("table_Outstanding_phone")}>
          <p className={Styles("phone_title")}>LAPTOP BÁN CHẠY</p>
          <div className={Styles("img_Promotion")}>
            {Taplet &&
              Taplet.length > 0 &&
              Taplet.map((e, index) => {
                return (
                  <div className={Styles("img_Promotion_children")} key={index}>
                    <div className={Styles("hover_scale")}>
                      <img src={e.images} />
                    </div>
                    <p className={Styles("infor_product")}>
                      <NavLink to={`/product/${e._id}`}>
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

export default Table_sell;
