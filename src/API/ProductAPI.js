import axios from "../axios.js";
import _ from "lodash";

const ProductAPI = {
  getProduct: async (conditionObj = {}) => {
    try {
      let conditionStr = "";

      if (!_.isEmpty(conditionObj)) {
        Object.keys(conditionObj).forEach((key) => {
          conditionStr += key + "=" + conditionObj[key];
        });
      }

      const res = await axios.get(`/product?${conditionStr}&limit=1`);

      if (res?.data?.status === 0) {
        return res.data?.data[0];
      }

      return {};
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  getProducts: async (conditionObj = {}) => {
    try {
      let conditionStr = "";

      if (!_.isEmpty(conditionObj)) {
        Object.keys(conditionObj).forEach((key) => {
          conditionStr += key + "=" + conditionObj[key];
        });
      }

      const res = await axios.get(`/product?${conditionStr}`);

      if (res?.data?.status === 0) {
        return res.data?.data;
      }

      return [];
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  addProducts: async (product = {}) => {
    try {
      if (_.isEmpty(product)) {
        return false;
      }

      const res = await axios.post(`/product`, [product], {
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
  updateProduct: async (_id = "", productUpdate = {}) => {
    try {
      if (_.isEmpty(productUpdate) || !_id) {
        return false;
      }

      const data = {
        filter: { _id },
        update: productUpdate,
      };

      const res = await axios.put(`/product`, data, {
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
  deleteProduct: async (_id = "") => {
    try {
      if (!_id) return false;

      const res = await axios.delete(`/product?_id=${_id}`);

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

export default ProductAPI;
