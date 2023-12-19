import { useState } from "react";
import OtpInput from "react-otp-input";
import { Button, Modal, Form } from "react-bootstrap";
import { OtpAPI, CustomerAPI, AuthAPI } from "~/API";
import { useSelector, useDispatch } from "react-redux";
import { login, setToken } from "~/store/slice/userSlice";

import img_login from "../../asset/imgs/img-login.png";
import img_otp from "../../asset/imgs/img-otp.png";
import "./LoginModal.scss";

function LoginModal(props) {
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [modalStage, setModalStage] = useState("modalEmail");
    const user = useSelector((state) => state.user.userInfo);
    const accessToken = useSelector((state) => state.user.accessToken);
    const dispatch = useDispatch();

    const { showModal, handleCloseModal } = props;

    const modalStages = ["modalEmail", "modalOTP", "modalUserInfo"];

    const modalContent = {
        modalEmail: (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng Nhập Hoặc Tạo Tài Khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="img" style={{ backgroundImage: `url(${img_login})` }}></div>
                    <p className="text-center" style={{ padding: "0 100px" }}>
                        Nhập email mua hàng để hưởng đặc quyền riêng tại FPT Shop
                    </p>
                    <Form.Control
                        type="email"
                        className="input_txt"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button
                        variant="danger"
                        onClick={async () => {
                            if (handleValidateEmail(email)) {
                                OtpAPI.sendOTP(email) && handleSwitchModal(modalStages[1]);
                            }
                        }}
                    >
                        Tiếp tục
                    </Button>
                </Modal.Footer>
            </>
        ),
        modalOTP: (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Xác Thực OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="img" style={{ backgroundImage: `url(${img_otp})` }}></div>
                    <p className="text-center">Mã OTP đã được gửi đến email: {email || -1}</p>
                    <span className="text_special" onClick={() => {
                        setModalStage(modalStages[0]);
                        setOtp('');
                    }}>
                        <i className="fa-regular fa-pen-to-square"></i>
                        Đổi email nhận mã
                    </span>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={"container_modal"}
                        inputStyle={"otp_input"}
                    />
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button variant="danger" onClick={() => handleConfirmOTP()}>
                        Xác nhận
                    </Button>
                    <span className="text_special" onClick={() => {
                        OtpAPI.sendOTP(email);
                        setOtp('');
                    }}>
                        Gửi lại mã OTP cho tôi
                    </span>
                </Modal.Footer>
            </>
        ),
        modalUserInfo: (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin khách hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="form-group">
                        <Form.Label>Họ tên</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            placeholder="Nhập họ tên"
                        />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            value={phoneNumber}
                            onChange={(e) => {
                                if (+e.target.value || (+e.target.value === 0 && e.target.value.length <= 10))
                                    setPhoneNumber(e.target.value);
                            }}
                            type="text"
                            placeholder="Nhập số điện thoại"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button variant="danger" onClick={() => handleSignUp()}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </>
        ),
    };

    const handleSwitchModal = (stage) => {
        setModalStage(stage);
    };

    const handleConfirmOTP = async () => {
        const res = await OtpAPI.verifyOTP(otp, email);

        if (res.data.status === 0) {
            handleLogin(res.data.user, res.data.accessToken);
            handleCloseModal();
        } else if (res.data.status === 1) {
            handleSwitchModal(modalStages[2]);
        }
    };

    const handleValidateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = (user, accessToken) => {
        dispatch(login(user));
        dispatch(setToken(accessToken));
    };

    const handleSignUp = async () => {
        const data = await AuthAPI.signUp({ email, name: userName, phone_number: phoneNumber });

        if (data) {
            handleLogin(data.user, data.accessToken);
            handleCloseModal();
        }
    };

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered>
                {modalContent[modalStage]}
            </Modal>
        </>
    );
}

export default LoginModal;
