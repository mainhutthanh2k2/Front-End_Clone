import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import stylee from "./Stylefooter.scss";
const Styles = classNames.bind(stylee);

function Footer() {
  const [a, seta] = useState("");
  const api = () => {
    axios
      .get("http://api.quotable.io/random")
      .then((res) => {
        console.log(res);
        seta(res.data.content);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  return (
    <footer
      style={{
        width: "100%",
        height: "auto",
        margin: "0 auto",
        background: "white",
      }}
    >
      <div style={{ width: "1145px", margin: "15px auto" }}>
        {/* <button onClick={api}>Click</button>
        {a ? <p style={{background: "white", color: "red"}}>{a}</p> : null} */}
        <div
          style={{ background: "orange", width: "auto", height: "3px" }}
        ></div>
        <div style={{ margin: "5px 0 0 50px " }}>
          <p style={{ fontWeight: "700" }}>
            MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI FPT
          </p>
          <p>
            Mua hàng trên FPT luôn là một trải nghiệm ấn tượng. Dù bạn đang có
            nhu cầu mua bất kỳ mặt hàng thời trang nam, thời trang nữ, đồng hồ,
            điện thoại, máy tính & laptop,... thì Shopee cũng sẽ đảm bảo cung
            cấp cho bạn những sản phẩm ưng ý Trong đó có thể kể đến Iphone
            thương hiệu này hiện cũng đã có cửa hàng chính thức trên FPT Mall
            với hàng trăm mặt hàng chính hãng, được cập nhập liên tục. Là một
            kênh bán hàng uy tín, FPT luôn cam kết mang lại cho khách hàng những
            trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin
            về người bán và người mua đều được bảo mật tuyệt đối. Các hoạt động
            giao dịch thanh toán tại FPT luôn được đảm bảo diễn ra nhanh chóng,
            an toàn. Một vấn đề nữa khiến cho các khách hàng luôn quan tâm đó
            chính là mua hàng trên FPT có đảm bảo không.
          </p>
          <p style={{ fontWeight: "700" }}>TOP TỪ KHÓA XU HƯỚNG</p>
          <ul style={{ display: "flex" }}>
            <li style={{ color: "black" }}>
              <NavLink href="">Iphone</NavLink>|
              <NavLink href="">Iphone 14</NavLink>|
              <NavLink href="">Iphone 15</NavLink>|
              <NavLink href="">Iphone 13 Pro Max</NavLink>|
              <NavLink href="">Iphone14 Pro Max</NavLink>|
              <NavLink href="">Iphone15 Plus</NavLink>|
              <NavLink href="">Iphone12 Pro Max</NavLink>|
              <NavLink href="">IphoneXSm </NavLink>|
              <NavLink href="">Iphone13</NavLink>|
              <NavLink href="">Iphone13 Pro</NavLink>
            </li>
          </ul>
        </div>
        <div className="ull">
          <div
            style={{ background: "orange", width: "auto", height: "1px" }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
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
                      backgroundcolor: "black",
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
                <ul style={{ paddingleft: "8px" }}>
                  <li>
                    <img
                      src="	https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                      alt=""
                    />
                  </li>
                  <div
                    style={{
                      background: "black",
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
                      background: "black",
                      width: "auto",
                      height: "1px",
                    }}
                  ></div>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ background: "gray", width: "auto", height: "1px" }}
          ></div>

          <div
            style={{
              background: "rgba(245 245 245)",
              width: "100%",
              height: "auto",
              margintop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexdirection: "row",
                justifycontent: "space-around",
              }}
            >
              <div
                style={{ color: "rgba(0,0,0,.54)", margin: "20px 0 0 50px" }}
              >
                CHÍNH SÁCH BẢO MẬT
              </div>
              <div style={{ color: "rgba(0,0,0,.54)", margin: "20px 0 0 0" }}>
                QUY CHẾ HOẠT ĐỘNG
              </div>
              <div style={{ color: "rgba(0,0,0,.54)", margin: "20px 0 0 0" }}>
                CHÍNH SÁCH VẬN CHUYỂN
              </div>
              <div
                style={{ color: "rgba(0,0,0,.54)", margin: "20px 50px 0 0" }}
              >
                CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexdirection: "row",
                justifycontent: "space-around",
              }}
            >
              <ul style={{ margin: "15px auto" }}>
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
                flexdirection: "row",
                justifycontent: "space-around",
                textalign: "center",
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
    </footer>
  );
}
export default Footer;
