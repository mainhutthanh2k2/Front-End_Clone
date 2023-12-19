import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import {NavLink} from "react-router-dom";
import stylee from "./style_laptop_sell.scss";
const Styles = classNames.bind(stylee);
function Body_laptop() {
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
            src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
          />
        </div>
        <div className={Styles("row_laptop")}>
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
              <span>Laptop</span>
            </p>
            <div className={Styles("telephone_company")}>
              <span>Hãng điện thoại</span>
            </div>
            <div className={Styles("flex_product")}>
              <div className={Styles("smart_phone")}>
                <NavLink to="">
                  <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
                </NavLink>
                <h1>Name product</h1>
                <h2>price</h2>
                <ul>
                  <li>chip</li>
                  <li>man hinh</li>
                  <li>ram</li>
                  <li>bo nho</li>
                </ul>
                <NavLink to="">
                  <div className={Styles("dad_now_buy")}>
                    <button className={Styles("now_buy")}>Mua Ngay</button>
                  </div>
                </NavLink>
              </div>
              <div className={Styles("smart_phone")}>
                <NavLink to="">
                  <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
                </NavLink>
                <h1>Name product</h1>
                <h2>price</h2>
                <ul>
                  <li>chip</li>
                  <li>man hinh</li>
                  <li>ram</li>
                  <li>bo nho</li>
                </ul>
                <NavLink to="">
                  <div className={Styles("dad_now_buy")}>
                    <button className={Styles("now_buy")}>Mua Ngay</button>
                  </div>
                </NavLink>
              </div>
              <div className={Styles("smart_phone")}>
                <NavLink to="">
                  <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
                </NavLink>
                <h1>Name product</h1>
                <h2>price</h2>
                <ul>
                  <li>chip</li>
                  <li>man hinh</li>
                  <li>ram</li>
                  <li>bo nho</li>
                </ul>
                <NavLink to="">
                  <div className={Styles("dad_now_buy")}>
                    <button className={Styles("now_buy")}>Mua Ngay</button>
                  </div>
                </NavLink>
              </div>
              <div className={Styles("smart_phone")}>
                <NavLink to="">
                  <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
                </NavLink>
                <h1>Name product</h1>
                <h2>price</h2>
                <ul>
                  <li>chip</li>
                  <li>man hinh</li>
                  <li>ram</li>
                  <li>bo nho</li>
                </ul>
                <NavLink to="">
                  <div className={Styles("dad_now_buy")}>
                    <button className={Styles("now_buy")}>Mua Ngay</button>
                  </div>
                </NavLink>
              </div>
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
