import axios from "../axios.js";

const OtpAPI = {
    sendOTP: async (email) => {
        try {
            const res = await axios.get(`/send-email?email=${email}`);

            if (res && res.status === 0) {
                return true;
            }

            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    verifyOTP: async (otp, email) => {
        try {
            const res = await axios.get(`/verify-otp?otp=${otp}&email=${email}`);

            return res;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
};

export default OtpAPI;
