import axios from "../axios.js";
import _ from "lodash";

const CustomerAPI = {
  getUsers: async () => {
    try {
      const res = await axios.get(`/user`);

      if (res.data.status === 0) {
        return res.data.users;
      }

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  addUser: async (user = {}) => {
    try {
      if (_.isEmpty(user)) {
        return false;
      }

      const res = await axios.post(`/user`, [user], {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res?.data?.status === 0) {
        return true;
      }

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  updateUser: async (_id = "", userUpdate = {}) => {
    try {
      if (_.isEmpty(userUpdate) || !_id) {
        return false;
      }

      const data = {
        filter: { _id },
        update: userUpdate,
      };

      const res = await axios.put(`/user`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res?.data?.status === 0) {
        return true;
      }

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  deleteUser: async (_id = "") => {
    try {
      if (!_id) return false;

      const res = await axios.delete(`/user?_id=${_id}`);

      if (res?.data?.status === 0) {
        return true;
      }

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};

export default CustomerAPI;
