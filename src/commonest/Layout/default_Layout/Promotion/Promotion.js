import classNames from "classnames/bind";
import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Promotion.scss";
import Api_product from "~/API/ProductAPI";
const Styles = classNames.bind(styles);
function Promotion() {
  // className={Styles("Promotion_main")}
  const [product_hot, setProduct_hot] = React.useState({});
  React.useEffect(() => {
    const product_hoot = async () => {
      const dd = await Api_product.getProducts();
      setProduct_hot(dd);
    };
    product_hoot().catch(console.error);
  }, []);

  return (
    <React.Fragment>
      <div className={Styles("Promotion_main")}>
        <div className={Styles("Promotion_img")}>
          <NavLink to="/headerOnly">
            <div className={Styles("imgg")}>
              <img
                src="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/12/18/638384882225847951_H7_1200x100.png"
                style={{width: "100%"}}
              />
            </div>
          </NavLink>
        </div>
        <div className={Styles("Promotion_hot")}>
          <p>
            <i className={Styles("fab fa-gripfire fire")}></i>
            <span>KHUYẾN MÃI HOT </span>
          </p>
          <div className={Styles("img_Promotion")}>
            {product_hot &&
              product_hot.length > 0 &&
              product_hot.map((e, index) => {
                return (
                  <div className={Styles("img_Promotion_children")} key={index}>
                    <NavLink to={`/product/${e._id}`}>
                      <div className={Styles("hover_scale")}>
                        <img src={e.images} />
                      </div>
                      <p>
                        <div>{e.name.split("/", 4)}</div>
                        <div className={Styles("price_productt")}>
                          {Intl.NumberFormat("vi", {
                            style: "currency",
                            currency: "VND",
                          }).format(e.price)}
                        </div>
                      </p>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Promotion;
