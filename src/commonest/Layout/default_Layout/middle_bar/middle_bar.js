import React from "react";
import classNames from "classnames/bind";
import {
  BrowserRouter as Routes,
  Router,
  Route,
  NavLink,
  NavNavLink,
} from "react-router-dom";
import Api from "~/API/ProductAPI";
import styles from "./middle_bar.scss";
const Styles = classNames.bind(styles);

function MiddleBar() {
  const [api, setApi] = React.useState({});
  React.useEffect(() => {
    const API = async () => {
      let phone = await Api.getProducts({limit: 1, category: "PH"});
      setApi(phone);
    };
    API().catch(console.error);
  }, []);
  //
  const [laptop, setlaptop] = React.useState({});
  React.useEffect(() => {
    const API = async () => {
      let phone = await Api.getProducts({
        category: "PH",
      });
      setApi(phone);
    };
    API().catch(console.error);
  }, []);
  //
  const [table, settaplet] = React.useState({});
  React.useEffect(() => {
    const API = async () => {
      let phone = await Api.getProducts({
        category: "PH",
      });
      setApi(phone);
    };
    API().catch(console.error);
  }, []);
  return (
    <div className={Styles("horizontal_menu")}>
      <div className={Styles("horizontal_menu_in")}>
        <ul className={Styles("ul_infor")}>
          <li className={Styles("phone")}>
            <NavLink to="/smart_phone">
              <i class="fas fa-mobile-alt phone_hover"></i>
              <span className={Styles("phone_hover")}>Điện thoại</span>
            </NavLink>
            <span className={Styles("infor_phone")}>
              <div className={Styles("infor_phone_left")}>
                <div className={Styles("manufacturer")}>Hãng sản xuất</div>
                <div className={Styles("flex_ul")}>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="/S">
                      <li>Apple (iphone)</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Xiaomi</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Vivo</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Nokia</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Sumsung</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Realme</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Asus</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Oppo</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Honor</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Masstel</li>
                    </NavLink>
                  </ul>
                </div>
                <div className={Styles("manufacturer")}>Đồng hồ thông minh</div>
                <div className={Styles("flex_ul")}>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Apple Watch</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Masstel</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Huewei</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Sumsung</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Xiaomi</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Garmin</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Amzfit</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
              <div className={Styles("infor_phone_center")}>
                <div className={Styles("price")}>Mức giá</div>
                <ul className={Styles("ul_price")}>
                  <NavLink to="">
                    <li>Dưới 2 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 2 - 4 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 4 - 7 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 7 - 13 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Trên 13 triệu</li>
                  </NavLink>
                </ul>
              </div>
              <div className={Styles("infor_phone_right")}>
                <div className={Styles("bestseller")}>Bán chạy nhất</div>
                <div>
                  <ul>
                    {api &&
                      api.length > 0 &&
                      api.map((e, index) => {
                        return (
                          <li className={Styles("img_phone")}>
                            <div>
                              <NavLink to="">
                                <img src={e.images} />
                              </NavLink>
                            </div>
                            <div className={Styles("img_bestseller")}>
                              <p className={Styles("name_black")}>
                                {e.name.split(" ", 2)}
                              </p>
                              <p className={Styles("price_red")}>
                                {Intl.NumberFormat("Vi", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(e.price)}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className={Styles("img_right")}>
                <div className={Styles("img_margin")}>
                  <NavLink to="">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/13/638354842660668434_H4.png"
                      style={{width: "100%", height: "auto"}}
                    />
                  </NavLink>
                </div>
              </div>
            </span>
          </li>
          {/*  */}
          <li className={Styles("laptop_hover")}>
            <NavLink to="/laptop">
              <i class="fas fa-laptop"></i>
              <span className={Styles("hover")}>Laptop</span>
            </NavLink>
            <div className={Styles("infor_laptop")}>
              <div className={Styles("infor_phone_left")}>
                <div className={Styles("manufacturer")}>Hãng sản xuất</div>
                <div className={Styles("flex_ul")}>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Apple (Macbook)</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Lenovo</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Dell</li>
                    </NavLink>
                    <NavLink to="">
                      <li>LG</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Microdoft (Surface)</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Asus</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Acet</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Gigabyte</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Masstel</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>HP</li>
                    </NavLink>
                    <NavLink to="">
                      <li>MSI</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Huawei</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Vaio</li>
                    </NavLink>
                  </ul>
                </div>
                <div className={Styles("manufacturer")}>Phần mềm</div>
                <div className={Styles("flex_ul")}>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Diệt Visus</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Phần mền khác</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Microsoft (Office)</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Windows</li>
                    </NavLink>
                  </ul>
                </div>
                <div className={Styles("manufacturer")}>Máy in</div>
                <div className={Styles("flex_ul")}>
                  <ul className={Styles("manufacturer_ul b")}>
                    <NavLink to="">
                      <li>HP</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Epson</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Canon</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Brother</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
              <div className={Styles("infor_phone_center")}>
                <div className={Styles("price")}>Mức giá</div>
                <ul className={Styles("ul_price")}>
                  <NavLink to="">
                    <li>Dưới 5 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 5 - 10 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 15 - 20 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 20 - 25 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 25 - 30 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Trên 30 triệu</li>
                  </NavLink>
                </ul>
              </div>
              <div className={Styles("infor_phone_right")}>
                <div className={Styles("bestseller")}>Bán chạy nhất</div>
                <div>
                  <ul>
                    <li className={Styles("img_phone")}>
                      <div>
                        <NavLink to="">
                          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069061764088&tbnid=fG_bfULn1CQw0M&vet=12ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fimglearning%2F&docid=RnuGIme1p94BMM&w=1216&h=1216&q=img&ved=2ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa" />
                        </NavLink>
                      </div>
                      <div className={Styles("img_bestseller")}>
                        <span>Laptop</span>
                        <br></br>
                        <span className={Styles("price_red")}>30.000.000</span>
                      </div>
                    </li>
                    <li className={Styles("img_phone")}>
                      <div>
                        <NavLink to="">
                          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069061764088&tbnid=fG_bfULn1CQw0M&vet=12ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fimglearning%2F&docid=RnuGIme1p94BMM&w=1216&h=1216&q=img&ved=2ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa" />
                        </NavLink>
                      </div>
                      <div className={Styles("img_bestseller")}>
                        <span>Laptop</span>
                        <br></br>
                        <span className={Styles("price_red")}>30.000.000</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={Styles("img_right")}>
                <div className={Styles("img_margin")}>
                  <NavLink to="">
                    <img />
                  </NavLink>
                </div>
              </div>
            </div>
          </li>
          <li className={Styles("manufacturer_hover")}>
            <NavLink to="/tablet">
              <i class="fas fa-tablet-alt"></i>
              <span className={Styles("hover")}>Máy Tính Bảng</span>
            </NavLink>
            <div className={Styles("infor_manufacturer")}>
              <div className={Styles("infor_phone_left")}>
                <div className={Styles("manufacturer")}>Hãng sản xuất</div>
                <div className={Styles("flex_ul")}>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Apple (iPad)</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Lenovo</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Coolpad</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Samsung</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Xiaomi</li>
                    </NavLink>
                  </ul>
                  <ul className={Styles("manufacturer_ul")}>
                    <NavLink to="">
                      <li>Masstel</li>
                    </NavLink>
                    <NavLink to="">
                      <li>Oppo</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
              <div className={Styles("infor_phone_center")}>
                <div className={Styles("price")}>Mức giá</div>
                <ul className={Styles("ul_price")}>
                  <NavLink to="">
                    <li>Dưới 2 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 2 - 5 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Từ 5 - 8 triệu</li>
                  </NavLink>
                  <NavLink to="">
                    <li>Trên 8 triệu</li>
                  </NavLink>
                </ul>
              </div>
              <div className={Styles("infor_phone_right")}>
                <div className={Styles("bestseller")}>Bán chạy nhất</div>
                <div>
                  <ul>
                    <li className={Styles("img_phone")}>
                      <div>
                        <NavLink to="">
                          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069061764088&tbnid=fG_bfULn1CQw0M&vet=12ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fimglearning%2F&docid=RnuGIme1p94BMM&w=1216&h=1216&q=img&ved=2ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa" />
                        </NavLink>
                      </div>
                      <div className={Styles("img_bestseller")}>
                        <span>Máy tính bảng</span>
                        <br></br>
                        <span className={Styles("price_red")}>30.000.000</span>
                      </div>
                    </li>
                    <li className={Styles("img_phone")}>
                      <div>
                        <NavLink to="">
                          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069061764088&tbnid=fG_bfULn1CQw0M&vet=12ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fimglearning%2F&docid=RnuGIme1p94BMM&w=1216&h=1216&q=img&ved=2ahUKEwjz6oeGkuiCAxUy-WEKHTd-AIUQMygJegQIARBa" />
                        </NavLink>
                      </div>
                      <div className={Styles("img_bestseller")}>
                        <span>Máy tính bản</span>
                        <br></br>
                        <span className={Styles("price_red")}>30.000.000</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={Styles("img_right")}>
                <div className={Styles("img_margin")}>
                  <NavLink to="">
                    <img />
                  </NavLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="">
              <i class="fab fa-apple"></i>
              <span className={Styles("hover")}>Apple</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <i class="fas fa-desktop"></i>
              <span className={Styles("hover")}>PC-Linh Kiện</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <i class="fas fa-keyboard"></i>
              <span className={Styles("hover")}>Phụ Kiện</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <i class="fas fa-undo"></i>
              <span className={Styles("hover")}>Máy Cũ Giá Rẻ</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <i class="fas fa-laptop-house"></i>
              <span className={Styles("hover")}>Điện Máy Gia Dụng</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <i class="fas fa-sim-card"></i>
              <span className={Styles("hover")}>Sim & Thẻ</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <i class="fas fa-percent"></i>
              <span className={Styles("hover")}>Khuyến Mãi</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MiddleBar;
