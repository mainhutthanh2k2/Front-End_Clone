import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";

import AdminDirectory from "~/commonest/directories/AdminDirectory";
import { ProductAPI } from "~/API";

import "./ProductManager.scss";

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({
    _id: "",
    name: "",
    category: "PH",
    price: 0,
    discount: 0,
    images: "",
    inventory: 0,
    total_sold: 0,
    specifications: "",
    description: "",
  });

  const productInfoRequired = [
    "_id",
    "name",
    "category",
    "price",
    "discount",
    "images",
    "inventory",
    "total_sold",
    "specifications",
    "description",
  ];

  useEffect(() => {
    getProducts();
  }, []);

  const checkProduct = (product, isCheckId = true) => {
    return productInfoRequired.every((field) => {
      if (!isCheckId && field === "_id") {
        return true;
      }
      return product[field] === 0 || product[field];
    });
  };

  const getProducts = async () => {
    setProducts(await ProductAPI.getProducts());
  };

  const handleAddProduct = async () => {
    const isValid = checkProduct(productSelected, false);

    if (!isValid) {
      return toast.warn("Dữ liệu nhập trống!");
    }

    const { _id, ...product } = productSelected;
    const isSuccess = await ProductAPI.addProducts(product);

    if (isSuccess) {
      toast.success("Thêm sản phẩm thành công!");
      getProducts();
    } else toast.error("Thêm sản phẩm thất bại");
  };

  const handleUpdateProduct = async () => {
    const isValid = checkProduct(productSelected);

    if (!isValid) {
      return toast.warn("Dữ liệu nhập trống!");
    }

    const { _id, ...product } = productSelected;
    const isSuccess = await ProductAPI.updateProduct(_id, product);

    if (isSuccess) {
      toast.success("Sửa sản phẩm thành công!");
      getProducts();
    } else toast.error("Sửa sản phẩm thất bại");
  };

  const handleDeleteProduct = async () => {
    const { _id } = productSelected;

    if (!_id) {
      return toast.warn("Chưa chọn sản phẩm");
    }

    const isSuccess = await ProductAPI.deleteProduct(_id);

    if (isSuccess) {
      toast.success("Xóa sản phẩm thành công!");
      getProducts();
    } else toast.error("Xóa sản phẩm thất bại");
  };

  return (
    <div className="admin-page_container">
      <AdminDirectory></AdminDirectory>
      <div className="crud-product_container">
        <Form className="content-up container row">
          <Form.Group className="mb-3 col-6">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              value={productSelected?.name}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Hình ảnh</Form.Label>
            <Form.Control
              type="text"
              value={productSelected?.images}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  images: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Loại sản phẩm</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={productSelected?.category}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  category: e.target.value,
                });
              }}
            >
              <option value="PH">Điện thoại</option>
              <option value="LT">Laptop</option>
              <option value="TL">Máy tính bảng</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-3">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="number"
              min={0}
              value={productSelected?.price}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  price: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-3">
            <Form.Label>Giảm giá</Form.Label>
            <Form.Control
              type="number"
              step={0.1}
              max={1}
              min={0}
              value={productSelected?.discount}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  discount: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Tồn kho</Form.Label>
            <Form.Control
              type="number"
              min={0}
              value={productSelected?.inventory}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  inventory: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Tổng bán</Form.Label>
            <Form.Control
              type="number"
              min={0}
              value={productSelected?.total_sold}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  total_sold: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Thông số kĩ thuật</Form.Label>
            <Form.Control
              as="textarea"
              value={productSelected?.specifications}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  specifications: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              value={productSelected?.description}
              onChange={(e) => {
                setProductSelected({
                  ...productSelected,
                  description: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 buttons-group">
            <Button variant="danger" onClick={() => handleAddProduct()}>
              Thêm
            </Button>
            <Button variant="danger" onClick={() => handleUpdateProduct()}>
              Sửa
            </Button>
            <Button variant="danger" onClick={() => handleDeleteProduct()}>
              Xóa
            </Button>
          </Form.Group>
        </Form>
        <Table striped bordered hover className="content-down list-products">
          <thead>
            <tr className="text-center">
              <th style={{ width: "80px" }}>STT</th>
              <th>Tên sản phẩm</th>
              <th style={{ width: "100px" }}>Loại</th>
              <th style={{ width: "200px" }}>Giá</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              Array.isArray(products) &&
              products.map((product, index) => (
                <tr
                  key={product._id}
                  className="item"
                  onClick={() => setProductSelected(product)}
                >
                  <td>{++index}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price?.toLocaleString() + " VND"}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductManager;
