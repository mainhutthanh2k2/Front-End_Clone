import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";

import AdminDirectory from "~/commonest/directories/AdminDirectory";
import { CategoryAPI } from "~/API";

import "./CategoryManager.scss";

function CategoryManager() {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState({
    _id: "",
    name: "",
    value: "",
  });

  const categoryInfoRequired = ["_id", "name", "value"];

  useEffect(() => {
    getCategories();
  }, []);

  const checkCategory = (category, isCheckId = true) => {
    return categoryInfoRequired.every((field) => {
      if (!isCheckId && field === "_id") {
        return true;
      }
      return category[field] === 0 || category[field];
    });
  };

  const getCategories = async () => {
    setCategories(await CategoryAPI.getCategories());
  };

  const handleAddCategory = async () => {
    const isValid = checkCategory(categorySelected, false);

    if (!isValid) {
      return toast.warn("Dữ liệu nhập trống!");
    }

    const { _id, ...category } = categorySelected;
    const isSuccess = await CategoryAPI.addCategory(category);

    if (isSuccess) {
      toast.success("Thêm loại sản phẩm thành công!");
      getCategories();
    } else toast.error("Thêm loại sản phẩm thất bại");
  };

  const handleUpdateCategory = async () => {
    const isValid = checkCategory(categorySelected);

    if (!isValid) {
      return toast.warn("Dữ liệu nhập trống!");
    }

    const { _id, ...category } = categorySelected;
    const isSuccess = await CategoryAPI.updateCategory(_id, category);

    if (isSuccess) {
      toast.success("Sửa loại sản phẩm thành công!");
      getCategories();
    } else toast.error("Sửa loại sản phẩm thất bại");
  };

  const handleDeleteUser = async () => {
    const { _id } = categorySelected;

    if (!_id) {
      return toast.warn("Chưa chọn loại sản phẩm");
    }

    const isSuccess = await CategoryAPI.deleteCategory(_id);

    if (isSuccess) {
      toast.success("Xóa loại sản phẩm thành công!");
      getCategories();
    } else toast.error("Xóa loại sản phẩm thất bại");
  };

  return (
    <div className="admin-page_container">
      <AdminDirectory></AdminDirectory>
      <div className="crud-category_container">
        <Form className="content-up container row">
          <Form.Group className="mb-3 col-6">
            <Form.Label>Mã loại sản phẩm</Form.Label>
            <Form.Control
              type="text"
              value={categorySelected?.name}
              onChange={(e) => {
                setCategorySelected({
                  ...categorySelected,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Tên loại sản phẩm</Form.Label>
            <Form.Control
              type="text"
              value={categorySelected?.value}
              onChange={(e) => {
                setCategorySelected({
                  ...categorySelected,
                  value: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-12 buttons-group">
            <Button variant="danger" onClick={() => handleAddCategory()}>
              Thêm
            </Button>
            <Button variant="danger" onClick={() => handleUpdateCategory()}>
              Sửa
            </Button>
            <Button variant="danger" onClick={() => handleDeleteUser()}>
              Xóa
            </Button>
          </Form.Group>
        </Form>
        <Table striped bordered hover className="content-down list-categories">
          <thead>
            <tr className="text-center">
              <th style={{ width: "80px" }}>STT</th>
              <th>Mã loại sản phẩm</th>
              <th>Tên loại sản phẩm</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              Array.isArray(categories) &&
              categories.map((category, index) => (
                <tr
                  key={category._id}
                  className="item"
                  onClick={() => setCategorySelected(category)}
                >
                  <td>{++index}</td>
                  <td>{category.name}</td>
                  <td>{category.value}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CategoryManager;
