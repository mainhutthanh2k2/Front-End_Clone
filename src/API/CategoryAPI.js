import axios from "../axios.js";
import _ from "lodash";

const CategoryAPI = {
  getCategories: async () => {
    try {
      const res = await axios.get(`/category`);

      if (res.data.status === 0) {
        return res.data.categories;
      }

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  addCategory: async (category = {}) => {
    try {
      if (_.isEmpty(category)) {
        return false;
      }

      const res = await axios.post(`/category`, [category], {
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
  updateCategory: async (_id = "", categoryUpdate = {}) => {
    try {
      if (_.isEmpty(categoryUpdate) || !_id) {
        return false;
      }

      const data = {
        filter: { _id },
        update: categoryUpdate,
      };

      const res = await axios.put(`/category`, data, {
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
  deleteCategory: async (_id = "") => {
    try {
      if (!_id) return false;

      const res = await axios.delete(`/category?_id=${_id}`);

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

export default CategoryAPI;
