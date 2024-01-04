import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import {NavLink} from "react-router-dom";
import stylee from "./style_Tablet_layout.scss";
import Apiproduct from "~/API/ProductAPI";
const Styles = classNames.bind(stylee);
function Body_laptop() {
  const [product_phone, setProduct_phone] = React.useState({});
  React.useEffect(() => {
    const API_phone = async () => {
      const Tablet = await Apiproduct.getProducts({category: "TL"});

      setProduct_phone(Tablet);
    };
    API_phone().catch(console.error);
  }, []);

  return (
    <React.Fragment>
      <div className={Styles("category-container")}>
        <div style={{}}>
          <NavLink to="/" className={Styles("Home")}>
            Trang chủ/
          </NavLink>
        </div>
        <div className={Styles("banner")}>
          <img
            className={Styles("img_banner")}
            src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/142455/Originals/B%E1%BA%A3n%20sao%20NF_1200x628%20(2).jpg"
            style={{width: "100%", height: "auto"}}
          />
        </div>
        <div className={Styles("row_Tablet")}>
          <div className={Styles("left")}>
            <p>Hãng sản xuẩt</p>
            <ul>
              <li>
                <input type={"checkbox"} />
                Iphone
              </li>
              <li>
                <input type={"checkbox"} />
                Samsung
              </li>
            </ul>
          </div>
          <div className={Styles("right")}>
            <p>
              <span>Table</span>
            </p>
            <div className={Styles("telephone_company")}>
              <span>Hãng điện thoại</span>
            </div>
            <div className={Styles("flex_product")}>
              {product_phone &&
                product_phone.length > 0 &&
                product_phone.map((e, index) => (
                  <div className={Styles("smart_phone")} key={index}>
                    <NavLink to="/product">
                      <img src={e.images} className={Styles("img_edit")} />
                    </NavLink>
                    <h1>{e.name}</h1>
                    <h2 className={Styles("price_productt")}>
                      {Intl.NumberFormat("Vi", {
                        style: "currency",
                        currency: "VND",
                      }).format(e.price)}
                    </h2>
                    <ul>
                      {e.specifications.split(";", 4).map((ee) => (
                        <li>{ee}</li>
                      ))}
                    </ul>

                    <NavLink to="">
                      <div className={Styles("dad_now_buy")}>
                        <button className={Styles("now_buy")}>Mua Ngay</button>
                      </div>
                    </NavLink>
                  </div>
                ))}
              ;
            </div>
            <NavLink to="/">
              <div className={Styles("Seen")}>
                <p>Xem thêm</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body_laptop;
