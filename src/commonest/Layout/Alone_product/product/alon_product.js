import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import stylee from "./style_product.scss";
import ProductAPI from "~/API/ProductAPI";
import _ from "lodash";

const Styles = classNames.bind(stylee);

function Alone_product() {
  var $ = document.querySelector.bind(document);
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    const resProduct = await ProductAPI.getProduct({ _id: params.id });
    setProduct(resProduct);
  };

  console.log(product);

  // function seen_product() {
  //   // // sự kiện hiện trang sản phẩm
  //   $(".seen_specifications").onclick = () => {
  //     $(".from_product").style.display = "block";
  //   };
  // }
  // sự kiện tắt bảng sản phẩm
  // $(".X_hover").onclick = () => {
  //   $(".from_product").style.display = "none";
  // };
  return (
    <div className={Styles("s")}>
      <div style={{ width: "400px" }}>
        <ul className={Styles("ss")}>
          <li>
            <input
              type="radio"
              name="seen_iphone"
              id="iphone_white"
              class="none"
            />
            <img
              src="./Source/img/14seri_trang.jpg"
              alt=""
              width="400px"
              style={{ backgroundColor: "#EEEEEE" }}
              class="seen_iphone_white"
            />

            <input
              type="radio"
              name="seen_iphone"
              id="iphone_black"
              class="none"
            />
            <img
              src="./Source/img/14seri_den.jpg"
              alt=""
              width="400px"
              style={{ backgroundColor: "#EEEEEE" }}
              class="seen_iphone_black"
            />

            <input
              type="radio"
              name="seen_iphone"
              id="iphone_purple"
              class="none"
            />
            <img
              src="./Source/img/14seri_tim.jpg"
              alt=""
              width="400px"
              style={{ backgroundColor: "#EEEEEE" }}
              class="seen_iphone_purple"
            />

            <input
              type="radio"
              name="seen_iphone"
              id="iphone_pink"
              class="none"
            />
            <img
              src="./Source/img/iphone13hongNhat.jpg"
              alt=""
              width="400px"
              style={{ backgroundColor: "#EEEEEE" }}
              class="seen_iphone_pink"
            />

            <input
              type="radio"
              name="seen_iphone"
              id="iphone_yellow"
              class="none"
            />
            <img
              src="./Source/img/14seri_vang.jpg"
              alt=""
              width="400px"
              style={{ backgroundColor: "#EEEEEE" }}
              class="seen_iphone_yellow"
            />
          </li>
        </ul>
      </div>
      <div style={{ width: "400px" }}>
        <label for="" stylee="ll">
          Iphone Store
        </label>
        <p style={{ margin: "40px 0px 20px 5p" }}>
          [Sale 12.12] iPhone 13 13 Pro 13 Pro Max - Hàng chính hãng
        </p>
        <p style={{ margin: "40px 0px 20px 5p" }}>
          Thương hiệu: APP | <NavLink href="">Chi tiết cấu hình</NavLink>
        </p>
        <img src="./Source/img/bannersale.png" alt="" width="400px" />
        <label>Trả góp:</label>
        <label for="" style={{ fontSize: "14px" }}>
          Trả góp 0% trong 12 tháng chỉ với{" "}
          <h7 style={{ color: "red" }}>2.082.500</h7> mỗi tháng
        </label>
        <div>
          <label for="">Nhóm màu:</label>
          <input
            type="radio"
            name="img_color"
            id="img_black"
            class="color_img"
          />
          <div class="black_img">Đen</div>
          <input
            type="radio"
            name="img_color"
            id="img_white"
            class="color_img"
          />
          <div class="white_img">Trắng</div>
          <input
            type="radio"
            name="img_color"
            id="img_yellow"
            class="color_img"
          />
          <div class="yellow_img">Vàng</div>
          <input type="radio" name="img_color" id="green" class="color_img" />
          <div class="green">Xanh Lá</div>
          <input type="radio" name="img_color" id="blue" class="color_img" />
          <div class="blue">Xanh Dương</div>
          <ul>
            <li>
              <label for="img_black">
                <img
                  src="./Source/img/iphone13_den.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                  id="img_black"
                  class="img_hover"
                />
              </label>
              <label for="img_white">
                <img
                  src="./Source/img/iphone13_trang.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                  id="img_white"
                  class="img_hover"
                />
              </label>
              <label for="img_yellow">
                <img
                  src="./Source/img/iphone13_vang.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                  id="img_yellow"
                  class="img_hover"
                />
              </label>
              <label for="green">
                <img
                  src="./Source/img/iphone13_xanh.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                  id="green"
                  class="img_hover"
                />
              </label>
              <label for="blue">
                <img
                  src="./Source/img/iphone13_xanh_troi.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                  id="blue"
                  class="img_hover"
                />
              </label>
            </li>
          </ul>

          <div>
            <label for="">Dung lượng lưu trữ:</label>
            <input type="radio" name="data" id="hover_128gb" class="checked" />
            <div class="data_128">128gB</div>
            <input type="radio" name="data" id="hover_256gb" class="checked" />
            <div class="data_256">256gB</div>
            <input type="radio" name="data" id="hover_512gb" class="checked" />
            <div class="data_512">512gB</div>
            <ul style={{ display: "flex" }}>
              <li style={{ margin: "0 2px 0 0" }}>
                <label
                  for="hover_128gb"
                  style={{
                    border: "0.5px rgb(17, 17, 17) solid",
                    padding: "5px",
                  }}
                  id="hover_128gb"
                >
                  128GB
                </label>
              </li>
              <li style={{ margin: "0 2px 0 0" }}>
                <label
                  for="hover_256gb"
                  style={{
                    border: "0.5px rgb(17, 17, 17) solid",
                    padding: "5px",
                  }}
                  id="hover_256gb"
                >
                  256GB
                </label>
              </li>
              <li style={{ margin: "0 2px 0 0" }}>
                <label
                  for="hover_512gb"
                  style={{
                    border: "0.5px rgb(17, 17, 17) solid",
                    padding: "5px",
                  }}
                  id="hover_512gb"
                >
                  512GB
                </label>
              </li>
            </ul>
            <div style={{ textAlign: "center" }}>
              <button
                style={{ border: "none", width: "160px" }}
                classNames={Styles("button_buy")}
              >
                Mua ngay{" "}
              </button>
              <button style={{ border: "none " }} class="button_add_cart">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "400px" }}>
        <table
          className={Styles("border_table")}
          style={{ marginLeft: "16px" }}
        >
          <p className={Styles("sc")}>Thông số kỹ thuật</p>
          <tr>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              Màn hình:
            </td>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              {" "}
              6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels
            </td>
          </tr>
          <tr>
            <td class="edit_tr" style={{ fontWeight: "400" }}>
              Camera sau:
            </td>
            <td class="edit_tr"> 12.0 MP + 12.0 MP</td>
          </tr>
          <tr>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              Camera Selfie:
            </td>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              {" "}
              12.0 MP
            </td>
          </tr>
          <tr>
            <td class="edit_tr">RAM:</td>
            <td class="edit_tr"> 4 GB</td>
          </tr>
          <tr>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              Bộ nhớ:
            </td>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              128 GB
            </td>
          </tr>
          <tr>
            <td class="edit_tr">CPU:</td>
            <td class="edit_tr">Apple A15 Bionic</td>
          </tr>
          <tr>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              Dung lượng pin:
            </td>
            <td class="edit_tr" style={{ backgroundColor: "#EEEEEE" }}>
              3225 mAh
            </td>
          </tr>

          <tr>
            <td
              className={Styles("seen_specifications")}
              colsPan="2"
              style={{ color: "blue", cursor: "pointer" }}
            >
              Xem chi tiết thông số kỹ thuật
            </td>
          </tr>
        </table>
      </div>
      <div class="img_list_anh">
        <div
          style={{ backgroundColor: "gray", width: "400px", height: "1px" }}
        ></div>
        <ul className={Styles("cx")}>
          <li>
            <label for="iphone_white">
              <img
                src="./Source/img/14seri_trang.jpg"
                alt=""
                width="50px"
                height="50px"
                class="img_hover"
                id="iphone_white"
              />
            </label>
          </li>
          <li>
            <label for="iphone_black">
              <img
                src="./Source/img/14seri_den.jpg"
                alt=""
                width="50px"
                height="50px"
                class="img_hover"
                id="iphone_black"
              />
            </label>
          </li>

          <li>
            {" "}
            <label for="iphone_purple">
              <img
                src="./Source/img/14seri_tim.jpg"
                alt=""
                width="50px"
                height="50px"
                class="img_hover"
                id="iphone_purple"
              />
            </label>
          </li>
          <li>
            <label for="iphone_pink">
              <img
                src="./Source/img/iphone15hong.png"
                alt=""
                width="50px"
                height="50px"
                class="img_hover"
                id="iphone_pink"
              />
            </label>
          </li>
          <li>
            <label for="iphone_yellow">
              <img
                src="./Source/img/14seri_vang.jpg"
                alt=""
                width="50px"
                height="50px"
                class="img_hover"
                id="iphone_yellow"
              />
            </label>
          </li>
        </ul>
      </div>
      <div style={{ width: "1200px" }} id="Salient_features">
        <p class="title">Mô tả sản phẩm iPhone seri - Hàng Chính Hãng VN/A</p>
        <p class="title">Iphone seri</p>
        <p class="title">Tính năng nổi bật</p>
        <ul>
          <li class="dot" style={{ listStyle: "disc" }}>
            DYNAMIC ISLAND RA MẮT TRÊN IPHONE 15 — Dynamic Island hiển thị linh
            động các cảnh báo và Hoạt Động Trực Tiếp, nhờ đó bạn sẽ không bỏ lỡ
            thông tin khi đang làm việc khác. Bạn có thể xem ai đang gọi đến,
            kiểm tra tình hình chuyến bay của bạn và hơn thế nữa.
          </li>
          <li class="dot" style={{ listStyle: "disc" }}>
            THIẾT KẾ SÁNG TẠO — iPhone 15 Plus sở hữu thiết kế bằng kính pha màu
            và nhôm bền bỉ. Và có khả năng chống tia nước, chống nước và chống
            bụi.1 Mặt trước Ceramic Shield bền chắc hơn mọi mặt kính điện thoại
            thông minh. Và màn hình Super Retina XDR 6,7” sáng gấp đôi dưới ánh
            mặt trời so với iPhone 14.
          </li>
          <li class="dot" style={{ listStyle: "disc" }}>
            CAMERA CHÍNH 48MP VỚI TELEPHOTO 2X — Camera Chính 48MP chụp ảnh với
            độ phân giải siêu cao. Vậy nên bạn có thể chụp được những bức ảnh
            nổi bật có độ chi tiết ấn tượng dễ dàng hơn bao giờ hết. Camera
            Telephoto với độ thu phóng quang học 2x giúp bạn bố cục ảnh chụp cận
            cảnh hoàn hảo.
          </li>
          <li class="dot" style={{ listStyle: "disc" }}>
            ĐƯỢC THIẾT KẾ ĐỂ TẠO NÊN KHÁC BIỆT — iPhone trang bị các biện pháp
            bảo vệ quyền riêng tư, cho bạn quyền kiểm soát dữ liệu của mình.
            iPhone được làm từ nhiều vật liệu tái chế hơn để giảm thiểu tác động
            tới môi trường. Và được tích hợp những tính năng giúp iPhone dễ sử
            dụng hơn cho tất cả mọi người.
          </li>
        </ul>
        <div>
          <p
            style={{
              color: "#212121",
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "Roboto-Medium",
              lineHeight: "20px",
            }}
          >
            Pháp lý
          </p>
          <p>
            1iPhone 15, iPhone 15 Plus, iPhone 15 Pro và iPhone 15 Pro Max có
            khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua
            kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức
            IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét
            trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và
            chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể
            giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt.
            Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm
            khô máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng. 2Màn
            hình có các góc bo tròn. Khi tính theo hình chữ nhật chuẩn, kích
            thước màn hình theo đường chéo là 6,12 inch (iPhone 15 Pro, iPhone
            15) hoặc 6,69 inch (iPhone 15 Pro Max, iPhone 15 Plus). Diện tích
            hiển thị thực tế nhỏ hơn. 3Thời lượng pin khác nhau tùy theo cách sử
            dụng và cấu hình; truy cập apple.com/vn/batteries để biết thêm thông
            tin. 4iPhone 15 và iPhone 15 Pro có thể phát hiện va chạm ô tô
            nghiêm trọng và gọi trợ giúp. Yêu cầu kết nối mạng di động hoặc Cuộc
            Gọi Wi-Fi.
          </p>
        </div>
        <p class="title" id="related_products">
          Sản phẩm liên quan
        </p>
        <div className={Styles("iphone14_seri")}>
          <div className={Styles("iphone14_seri_pro")}>
            <div className={Styles("card")}></div>
            <div className={Styles("img_iphone_center")}>
              <img src="../thanh/Source/img/14seri_den.jpg" class="img5" />
            </div>
            <NavLink to="">
              <div class="text_iphone">Iphone 14 Pro Max 128GB</div>
            </NavLink>
            <div class="price_buy">
              <h7 class="price" style={{ color: "red", fontWeight: "bold" }}>
                29.990.000
              </h7>

              <h8 class="price_reduction" st>
                -13%
              </h8>
            </div>

            <div class="evaluate">
              <h8 class="evaluate_star" style={{ color: "orange" }}>
                4.8 <i class="fa fa-star" aria-hidden="true"></i>
              </h8>
              <h9 className="total">(187)</h9>
            </div>
          </div>

          <div class="iphone14_seri_pro">
            <div class="img_iphone_center">
              <img src="../thanh/Source/img/14seri_tim.jpg" class="img5" />
            </div>
            <a href="">
              <div class="text_iphone">Iphone 14 Pro Max 256GB</div>
            </a>
            <div class="price_buy">
              <h7 class="price" style={{ color: "red", fontWeight: "bold" }}>
                35.990.000
              </h7>

              <h8 class="price_reduction" st>
                -13%
              </h8>
            </div>

            <div class="evaluate">
              <h8 class="evaluate_star" style={{ color: "orange" }}>
                5.0 <i class="fa fa-star" aria-hidden="true"></i>
              </h8>
              <h9 class="total">(10)</h9>
            </div>
          </div>

          <div class="iphone14_seri_pro">
            <div class="img_iphone_center">
              <img src="../thanh/Source/img/14seri_trang.jpg" class="img5" />
            </div>
            <a href="">
              <div class="text_iphone">Iphone 14 Pro Max 128GB</div>
            </a>
            <div class="price_buy">
              <h7 class="price" style={{ color: "red", fontWeight: "bold" }}>
                29.990.000
              </h7>

              <h8 class="price_reduction" st>
                -13%
              </h8>
            </div>

            <div class="evaluate">
              <h8 class="evaluate_star" style={{ color: "orange" }}>
                4.9 <i class="fa fa-star" aria-hidden="true"></i>
              </h8>
              <h9 class="total">(200)</h9>
            </div>
          </div>

          <div class="iphone14_seri_pro">
            <div class="img_iphone_center">
              <img src="../thanh/Source/img/14seri_vang.jpg" class="img5" />
            </div>
            <a href="">
              <div class="text_iphone">Iphone 14 Pro Max 128GB</div>
            </a>
            <div class="price_buy">
              <h7 class="price" style={{ color: "red", fontWeight: "bold" }}>
                30.990.000
              </h7>

              <h8 class="price_reduction" st>
                -13%
              </h8>
            </div>

            <div class="evaluate">
              <h8 class="evaluate_star" style={{ color: "orange" }}>
                4.8 <i class="fa fa-star" aria-hidden="true"></i>
              </h8>
              <h9 class="total">(57)</h9>
            </div>
          </div>

          <div class="iphone14_seri_pro">
            <div class="img_iphone_center">
              <img src="../thanh/Source/img/14seri_den.jpg" class="img5" />
            </div>
            <NavLink href="">
              <div class="text_iphone">Iphone 14 Pro Max 512GB</div>
            </NavLink>
            <div class="price_buy">
              <h7 class="price" style={{ color: "red", fontWeight: "bold" }}>
                38.990.000
              </h7>

              <h8 class="price_reduction" st>
                -13%
              </h8>
            </div>

            <div class="evaluate">
              <h8 class="evaluate_star" style={{ color: "orange" }}>
                5.0 <i class="fa fa-star" aria-hidden="true"></i>
              </h8>
              <h9 class="total">(10)</h9>
            </div>
          </div>
        </div>
        <div class="ull">
          <div
            style={{ backgroundColor: "orange", width: "auto", height: "1px" }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "15px 0 0 0",
            }}
          >
            <div style={{ fontSize: ".75rem", fontWeight: "700" }}>
              CHĂM SÓC KHÁCH HÀNG
              <ul style={{ paddingLeft: "0" }}>
                <li>Trung Tâm Trợ Giúp</li>
                <li>Vận Chuyển</li>
                <li>Trả Hàng & Hoàn Tiền</li>
                <li>Chăm Sóc Khách Hàng</li>
                <li>Chính Sách Bảo Hành</li>
              </ul>
            </div>
            <div style={{ fontSize: ".75rem", fontWeight: "700" }}>
              Về Iphone Store
              <ul style={{ paddingLeft: "0" }}>
                <li>Giới Thiệu Về Iphone Store Việt Nam</li>
                <li>Tuyển Dụng</li>
                <li>Chính Hãng</li>
                <li>Kênh Người Bán</li>
                <li>Liên Hệ Với Truyền Thông</li>
              </ul>
            </div>
            <div style={{ fontSize: ".75rem", fontWeight: "700" }}>
              THANH TOÁN
              <ul style={{ paddingLeft: "0" }}>
                <li>
                  <img
                    src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492
                            "
                    alt=""
                  />
                  <img
                    src="	https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06
                            "
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    alt=""
                  />
                  <div
                    style={{
                      backgroundColor: "black",
                      width: "auto",
                      height: "1px",
                    }}
                  ></div>
                </li>
                <li>
                  <img
                    src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
                    alt=""
                  />
                  <img
                    src=" https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div style={{ fontSize: ".75rem", fontWeight: "700" }}>
              THEO DÕI CHÚNG TÔI TRÊN
              <div style={{ display: "flex", margin: "5px 0 0 0" }}>
                <img
                  src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                  alt=""
                />
                <ul style={{ paddingLeft: "8px" }}>
                  <li>
                    <img
                      src="	https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                      alt=""
                    />
                  </li>
                  <div
                    style={{
                      backgroundColor: "black",
                      width: "auto",
                      height: "1px",
                    }}
                  ></div>

                  <li>
                    <img
                      src="	https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def
                            "
                      alt=""
                    />
                  </li>
                  <div
                    style={{
                      backgroundColor: "black",
                      width: "auto",
                      height: "1px",
                    }}
                  ></div>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "black", width: "auto", height: "1px" }}
          ></div>

          <div
            style={{
              backgroundColor: "rgba(245 245 245)",
              width: "100%",
              height: "auto",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{ color: "rgba(0,0,0,.54)", margin: "20px 0 0 50px" }}
              >
                CHÍNH SÁCH BẢO MẬT
              </div>
              <div
                style={{ color: "rgba(0,0,0,.54)", margin: "20px 0 0 50px" }}
              >
                QUY CHẾ HOẠT ĐỘNG
              </div>
              <div
                style={{ color: "rgba(0,0,0,.54)", margin: "20px 0 0 50px" }}
              >
                CHÍNH SÁCH VẬN CHUYỂN
              </div>
              <div
                style={{ color: "rgba(0,0,0,.54)", margin: "20px 0 0 50px" }}
              >
                {" "}
                CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <ul>
                <li>
                  <img
                    src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png
                            "
                    style={{ width: "161px", height: "55px" }}
                  />
                  <img
                    src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png
                            "
                    style={{ width: "161px", height: "55px" }}
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <p>
                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu
                Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt
                Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
                liên hệ: 024 73081221 (ext 4678) Mã số doanh nghiệp: 0106773786
                do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015 ©
                2015 - Bản quyền thuộc về Công ty TNHH Shopee
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles("from_product")}>
        <div class="from_product_center">
          <div class="from_product_edit">
            <p
              style={{
                textAlign: "right",
                margin: "6px 10px 0 0",
                fontWeight: "600",
                fontSize: "x-large",
              }}
            >
              <label for="" class="X_hover">
                X
              </label>
            </p>
            <p
              style={{
                fontSize: "24px",
                paddingLeft: "10px",
                lineHeight: "32px",
                fontWeight: "700",
              }}
            >
              Chi tiết thông số kỹ thuật iPhone 13 series
            </p>

            <p
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "whitesmoke",
              }}
            ></p>
            <div class="edit_li">
              <ul
                style={{
                  display: "flex",
                  paddingLeft: "0",
                  justifyContent: "space-evenly",
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0 0",
                }}
              >
                <a href="#seen_infor">
                  <li class="hover_infor">Thông tin hàng hóa</li>
                </a>
                <a href="#infor_commodity">
                  <li class="hover_infor">Thiết kế & Trọng lượng</li>
                </a>
                <a href="#Design_Weight">
                  <li class="hover_infor">Bộ xử lý</li>
                </a>
                <a href="#Processor">
                  <li
                    class="hover_infor"
                    style={{ width: "auto", height: "40px" }}
                  >
                    RAM
                  </li>
                </a>
                <a href="#RAM">
                  <li class="hover_infor">Màn hình</li>
                </a>
                <a href="#Rear_camera">
                  <li class="hover_infor">Lưu trữ</li>
                </a>
                <a href="#storage">
                  <li class="hover_infor">Camera sau</li>
                </a>
                <a href="#Sensor">
                  <li class="hover_infor">Cảm biến</li>
                </a>
                <a href="#Sensor">
                  <li class="hover_infor">Bảo mật</li>
                </a>
                <a href="#Communicate_connect">
                  <li class="hover_infor">Giao tiếp & kết nối</li>
                </a>
                <a href="#Battery_Charging_Information">
                  <li class="hover_infor">Thông tin pin & Sạc</li>
                </a>
                <a href="#Operating_system">
                  <li class="hover_infor">Hệ điều hành</li>
                </a>
                <a href="#Accessories_in_the_box">
                  <li class="hover_infor">Phụ kiện trong hộp</li>
                </a>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "75%", margin: "0" }}>
                <img
                  src="./Source/img/14seri_vang.jpg"
                  alt=""
                  width="100%"
                  height="auto"
                  style={{ marginLeft: "5px" }}
                  class="infor_product"
                />
              </div>
              <div style={{ width: "25%" }}>
                <ul style={{ marginTop: "0" }} class="edit_lii">
                  <li>
                    <img
                      src="./Source/img/iphone13_trang.jpg"
                      alt=""
                      width="80%"
                      height="50%"
                      class="edit_liii"
                    />
                  </li>
                  <li>
                    <img
                      src="./Source/img/iphone13_den.jpg"
                      alt=""
                      width="80%"
                      height="50%"
                      class="edit_liii"
                    />
                  </li>
                  <li>
                    <img
                      src="./Source/img/iphone13_vang.jpg"
                      alt=""
                      width="80%"
                      height="50%"
                      class="edit_liii"
                    />
                  </li>
                  <li>
                    <img
                      src="./Source/img/iphone13_xanh.jpg"
                      alt=""
                      width="80%"
                      height="50%"
                      class="edit_liii"
                    />
                  </li>
                  <li id="seen_infor">
                    <img
                      src="./Source/img/iphone13_xanh_troi.jpg"
                      alt=""
                      width="80%"
                      height="50%"
                      class="edit_liii"
                    />
                  </li>
                  <li id="seen_infor">
                    <img
                      src="./Source/img/iphone13_xanh_troi.jpg"
                      alt=""
                      width="80%"
                      height="50%"
                      class="edit_liii"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div class="commodity_information">
              <p class="commodity_information" id="infor_commodity">
                <label for="">Thông tin hàng hóa</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>Xuất xứ</td>
                      <td style={{ paddingRight: "63px" }}>Trung Quốc</td>
                    </tr>
                    <tr>
                      <td>Thời gian bảo hành</td>
                      <td>12 tháng</td>
                    </tr>
                  </tbody>
                </table>
              </p>
              <p class="commodity_information" id="Design_Weight">
                <label for="">Thiết kế & Trọng lượng</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>Kích thước:</td>
                      <td> 159.9 x 76.7 x 8.25 mm</td>
                    </tr>
                    <tr>
                      <td>Trọng lượng sản phẩm: </td>
                      <td>221 g</td>
                    </tr>
                    <tr>
                      <td>Chuẩn kháng nước/Bụi: </td>
                      <td>
                        <a
                          href="https://fptshop.com.vn/tin-tuc/danh-gia/chuan-ip68-la-gi-khac-biet-gi-so-voi-ip67-57823"
                          style={{ color: "blue" }}
                        >
                          IP68
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Chất liệu </td>
                      <td>Khung máy-Titanium</td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="Processor">
                <label for="">Bộ xử lý</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>Phiên bản CPU</td>
                      <td>Apple A16 </td>
                    </tr>
                    <tr>
                      <td>Loại CPU </td>
                      <td>6 - Core</td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="RAM">
                <label for="">RAM</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>RAM</td>
                      <td>6GB</td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="Screen">
                <label for="">Màn hình</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>Kích thước màn hình</td>
                      <td>6.5 inch</td>
                    </tr>
                    <tr>
                      <td>Loại cảm ứng </td>
                      <td>Điện dung đa điểm</td>
                    </tr>
                    <tr>
                      <td>Độ sáng tối đa</td>
                      <td>2000 nits</td>
                    </tr>
                    <tr>
                      <td>Tỷ lệ tương phản</td>
                      <td>2.000.000:1</td>
                    </tr>
                    <tr>
                      <td>Công nghệ màn hình</td>
                      <td>OLED</td>
                    </tr>
                    <tr>
                      <td>Chuẩn màn hình</td>
                      <td>Super Retina XDR</td>
                    </tr>
                    <tr>
                      <td>Độ phân giải</td>
                      <td>2796 x 1290 Pixels</td>
                    </tr>
                    <tr>
                      <td>Chất liệu mặt kính</td>
                      <td>Phủ Ceramic</td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="storage">
                <label for="">Lưu trữ</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>
                        <div class="data_128">128gB</div>
                      </td>
                      <td>
                        <div class="data_256">128gB</div>
                      </td>
                      <td>
                        <div class="data_512">128gB</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="Rear_camera">
                <label for="">Camera sau</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td style={{ width: "200px" }}>Quay phim</td>
                      <td style={{ display: "flex" }}>
                        <ul>
                          <li>4K 2160p@24fps</li>
                          <li>4K 2160p@30fps</li>
                          <li>FullHD 1080p@25fps</li>
                          <li>FullHD 1080p@60fps</li>
                        </ul>
                        <ul>
                          <li>4K 2160p@25fps</li>
                          <li>4K 2160p@60fps</li>
                          <li>FullHD 1080p@30fps</li>
                          <li>HD 720p@30fps</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}>Tính năng</td>
                      <td style={{ display: "flex" }}>
                        <ul>
                          <li>Ban đêm (Night Mode)</li>
                          <li>Chạm lấy nét</li>
                          <li>Chụp chuyển động</li>
                          <li>Chụp góc rộng (Wide)</li>
                          <li>Flash LED</li>
                          <li>Quay chậm (Slow Motion)</li>
                          <li>Trôi nhanh thời gian (Time Lapse)</li>
                          <li>Ổn định hình ảnh quang học</li>
                        </ul>
                        <ul>
                          <li>Chuyên nghiệp (Pro)</li>
                          <li>Chống rung quang học (OIS)</li>
                          <li>Chụp chân dung</li>
                          <li>Chụp góc siêu rộng (Ultrawide)</li>
                          <li>HDR</li>
                          <li>Toàn cảnh (Panorama)</li>
                          <li>Tự động lấy nét (AF)</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="Sensor">
                <label for="">Cảm biến</label>
                <table
                  class="
                  Sensor"
                >
                  <tbody
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <tr>
                      <td>
                        <ul>
                          <li class="dots">Cảm biến tiệm cận</li>
                          <li class="dots">Cảm biến ánh sáng</li>
                          <li class="dots">Cảm biến gia tốc</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li class="dots">Cảm biến la bàn</li>
                          <li class="dots">Con quay hồi chuyển</li>
                          <li class="dots">Cảm biến kh</li>
                          <li></li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="Security">
                <label for="">Bảo mật</label>
                <table
                  class="
                  Sensor"
                >
                  <tbody
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <tr>
                      <td>
                        <ul>
                          <li class="dots">Mở khóa khuôn mặt</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li class="dots">Mở khóa bằng mật mã</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>
              <p class="commodity_information" id="Communicate_connect">
                <label for="">Giao tiếp & kết nối</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>Số khe SIM</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Loại SIM </td>
                      <td>1 eSIM, 1 Nano SIM</td>
                    </tr>
                    <tr>
                      <td>Bluetooth</td>
                      <td>v5.3</td>
                    </tr>
                    <tr>
                      <td>Cổng giao tiếp</td>
                      <td>
                        <ul>
                          <li>Audio Jack: Type C</li>
                          <li>Cổng sạc: Type C</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Wifi</td>
                      <td>Wifi 6</td>
                    </tr>
                    <tr>
                      <td>GPS</td>
                      <td style={{ display: "flex" }}>
                        <ul>
                          <li>BEIDOU</li>
                          <li>GLONASS</li>
                          <li>QZSS</li>
                        </ul>
                        <ul>
                          <li>GALILEO</li>
                          <li>GPS</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Kết nối khác</td>
                      <td>NFC</td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p
                class="commodity_information"
                id="Battery_Charging_Information"
              >
                <label for="">Thông tin pin & Sạc</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>Loại PIN</td>
                      <td>Lithium-ion</td>
                    </tr>
                    <tr>
                      <td>Công nghệ pin</td>
                      <td style={{ display: "flex" }}>
                        <ul>
                          <li class="dots">Hỗ trợ sạc không dây</li>
                          <li class="dots">Sạc pin nhanh</li>
                        </ul>
                        <ul>
                          <li class="dots">Sạc ngược cho thiết bị khác</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>

              <p class="commodity_information" id="Operating_system">
                <label for="">Hệ điều hành</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>OS</td>
                      <td>iOS</td>
                    </tr>
                    <tr>
                      <td>Version</td>
                      <td>iOS 17</td>
                    </tr>
                  </tbody>
                </table>
              </p>
              <p class="commodity_information" id="Accessories_in_the_box">
                <label for="">Phụ kiện trong hộp</label>
                <table class="s">
                  <tbody>
                    <tr>
                      <td>
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "#e9ecef",
                            textAlign: "center",
                            borderRadius: "50%",
                          }}
                        >
                          <i
                            style={{ marginTop: "15px" }}
                            class="fa fa-book "
                            aria-hidden="true"
                          ></i>
                        </div>
                      </td>
                      <td>iOS</td>
                      <td>
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "#e9ecef",
                            textAlign: "center",
                            borderRadius: "50%",
                          }}
                        >
                          <i
                            style={{ marginTop: "15px" }}
                            class="fa fa-book "
                            aria-hidden="true"
                          ></i>
                        </div>
                      </td>
                      <td>Sách hướng dẫn</td>
                    </tr>

                    <tr>
                      <td>
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "#e9ecef",
                            textAlign: "center",
                            borderRadius: "50%",
                          }}
                        >
                          <i
                            style={{ marginTop: "15px" }}
                            class="fa fa-book "
                            aria-hidden="true"
                          ></i>
                        </div>
                      </td>
                      <td>Cáp USB-C to USB-C</td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alone_product;
