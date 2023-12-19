import axios from "../axios.js";

const AuthAPI = {
    signUp: async (userData) => {
        try {
            const res = await axios.post(`/sign-up`, [{ ...userData }]);
            console.log({ res });
            if (res.data.status === 0) {
                return res.data;
            }

            return false;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
};

export default AuthAPI;
