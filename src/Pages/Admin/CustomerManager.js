import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";

import AdminDirectory from "~/commonest/directories/AdminDirectory";
import { CustomerAPI } from "~/API";

import "./CustomerManager.scss";

function CustomerManager() {
  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState({
    _id: "",
    name: "",
    email: "",
    phone_number: "",
  });

  const customerInfoRequired = ["_id", "name", "email", "phone_number"];

  useEffect(() => {
    getUsers();
  }, []);

  const checkUser = (customer, isCheckId = true) => {
    return customerInfoRequired.every((field) => {
      if (!isCheckId && field === "_id") {
        return true;
      }
      return customer[field] === 0 || customer[field];
    });
  };

  const getUsers = async () => {
    setCustomers(await CustomerAPI.getUsers());
  };

  const handleAddUser = async () => {
    const isValid = checkUser(customerSelected, false);

    if (!isValid) {
      return toast.warn("Dữ liệu nhập trống!");
    }

    const { _id, ...user } = customerSelected;
    const isSuccess = await CustomerAPI.addUser(user);

    if (isSuccess) {
      toast.success("Thêm khách hàng thành công!");
      getUsers();
    } else toast.error("Thêm khách hàng thất bại");
  };

  const handleUpdateUser = async () => {
    const isValid = checkUser(customerSelected);

    if (!isValid) {
      return toast.warn("Dữ liệu nhập trống!");
    }

    const { _id, ...user } = customerSelected;
    const isSuccess = await CustomerAPI.updateUser(_id, user);

    if (isSuccess) {
      toast.success("Sửa khách hàng thành công!");
      getUsers();
    } else toast.error("Sửa khách hàng thất bại");
  };

  const handleDeleteUser = async () => {
    const { _id } = customerSelected;

    if (!_id) {
      return toast.warn("Chưa chọn khách hàng");
    }

    const isSuccess = await CustomerAPI.deleteUser(_id);

    if (isSuccess) {
      toast.success("Xóa khách hàng thành công!");
      getUsers();
    } else toast.error("Xóa khách hàng thất bại");
  };

  return (
    <div className="admin-page_container">
      <AdminDirectory></AdminDirectory>
      <div className="crud-customer_container">
        <Form className="content-up container row">
          <Form.Group className="mb-3 col-6">
            <Form.Label>Tên khách hàng</Form.Label>
            <Form.Control
              type="text"
              value={customerSelected?.name}
              onChange={(e) => {
                setCustomerSelected({
                  ...customerSelected,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={customerSelected?.email}
              onChange={(e) => {
                setCustomerSelected({
                  ...customerSelected,
                  email: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-3">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              value={customerSelected?.phone_number}
              onChange={(e) => {
                setCustomerSelected({
                  ...customerSelected,
                  phone_number: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 buttons-group">
            <Button variant="danger" onClick={() => handleAddUser()}>
              Thêm
            </Button>
            <Button variant="danger" onClick={() => handleUpdateUser()}>
              Sửa
            </Button>
            <Button variant="danger" onClick={() => handleDeleteUser()}>
              Xóa
            </Button>
          </Form.Group>
        </Form>
        <Table striped bordered hover className="content-down list-customers">
          <thead>
            <tr className="text-center">
              <th style={{ width: "80px" }}>STT</th>
              <th>Tên khách hàng</th>
              <th style={{ width: "100px" }}>Email</th>
              <th style={{ width: "200px" }}>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            {customers &&
              Array.isArray(customers) &&
              customers.map((customer, index) => (
                <tr
                  key={customer._id}
                  className="item"
                  onClick={() => setCustomerSelected(customer)}
                >
                  <td>{++index}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone_number}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CustomerManager;
