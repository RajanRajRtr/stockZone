import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { toast } from "react-toastify";

import { Container, Row, Button, Col } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Product ID",
      dataIndex: "product_id",
      key: "product_id",
    },
    {
      title: "Product Name",
      dataIndex: "product_Name",
      key: "product_id",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Quanity",
      dataIndex: "Quantity",
      key: "age",
    },
    {
      title: "Product Price",
      dataIndex: "product_price",
      key: "product_price",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "age",
      render: (createdAt) => moment(createdAt).format("LLL"),
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button type="link" danger onClick={() => handleDelete(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  //getData
  const getData = () => {
    axios
      // USE DYNAMIC API ----- ${process.env.REACT_APP_API_URL}
      .get(`${process.env.REACT_APP_API_URL}/Cart-list`)
      .then((res) => {
        setData(res.data);
      });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5007/api/delete-cart/${id}`
      );
      if (response.status === 200) {
        toast.success("Cart item deleted successfully");
        getData(); // Refresh cart items after deletion
      } else {
        toast.error("Unable to delete cart item");
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
      toast.error("Error deleting cart item");
    }
  };
  return (
    <div>
      <Container>
        <Row>
        <Col md={10}>
          <center>
            {" "}
            <h1 class="mt-5 pb-5 ">User Order Details</h1>
          </center>
          </Col>
          <Col md={2} className="pt-5 mt-2">
            {" "}
            {/* <Button
              variant="info"
             
              onClick={() => {
                navigate("/Admin/viewProduct");
              }}
            >
              Product
            </Button> */}
          </Col>
        </Row>
        <Row >
        
        
        <Table columns={columns} dataSource={data} rowKey="_id" />
        </Row> 
      </Container>
    </div>
  );
};

export default AdminOrders;
