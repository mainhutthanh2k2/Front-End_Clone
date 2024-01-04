import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames/bind";
import style from "./stylebody.scss";
import API from "~/API/ProductAPI";
const Styles = classNames.bind(style);

function Body() {
  const [product, setproduct] = React.useState({});
  React.useEffect(() => {
    const api = async () => {
      let load_img_product = await API.getProducts();
      while (load_img_product.length <= 7) {
        load_img_product = load_img_product.concat(load_img_product);
      }
      setproduct(load_img_product);
    };
    api().catch(console.error);
  }, []);
  return (
    <React.Fragment>
      <div className={Styles("body_main")}>
        <div>
          <NavLink to="">
            <img
              src="https://fptshop.com.vn/uploads/originals/2021/12/27/637761643214323816_nf_1200x628.png"
              className={Styles("banner_body")}
            />
          </NavLink>
        </div>
        <div className={Styles("flex_banner")}>
          <div className={Styles("flex_banner_left")}>
            <NavLink to="">
              <img
                src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/142455/Originals/B%E1%BA%A3n%20sao%20NF_1200x628%20(2).jpg"
                style={{width: "100%", height: "300px"}}
              />
            </NavLink>
          </div>
          <div className={Styles("flex_banner_right")}>
            <div>
              <NavLink to="">
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/12/20/638386645512481850_H2_385x100@2x.png"
                  style={{width: "100%"}}
                />
              </NavLink>
            </div>
            <div>
              <NavLink to="">
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/12/10/638378410277060004_F-H2_385x100.png"
                  style={{width: "100%"}}
                />
              </NavLink>
            </div>
            <div className={Styles("voucher")}>
              <p style={{marginBottom: "5px"}}>Tin khuyến mãi</p>
              <div className={Styles("flex_voucher")}>
                <NavLink to="">
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/loalty%20(1).png"
                    className={Styles("img_voucher")}
                  />
                </NavLink>
                <span> FPT Shop giảm ngay 250K qua VNPAY-QR</span>
              </div>
              <div className={Styles("flex_voucher")}>
                <NavLink to="">
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/GD.png"
                    className={Styles("img_voucher")}
                  />
                </NavLink>
                <span> Gia dụng chuẩn Nhật mua 1 được 2 </span>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles("product_img")}>
          {product &&
            product.length > 0 &&
            product.map((e, index) => {
              return (
                <div className={Styles("img_product")}>
                  <NavLink to={`/product/${e._id}`}>
                    <div className={Styles("border_radius")}>
                      <img src={e.images} className={Styles("s")} />
                    </div>
                  </NavLink>
                  <p>{e.name.split(" ", 2)}</p>
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Body;
