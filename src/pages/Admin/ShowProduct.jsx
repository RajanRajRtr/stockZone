import React, { useState , useEffect } from "react";
import axios from "axios";
import {  Table, } from "antd";
import { Col, Container, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import moment from "moment";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import AddProduct from "./AddProduct";


const ShowProduct = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const columns = [
        {
          title: "Product ID",
          dataIndex: "id",
          key: "product_id",
        },
        {
          title: "Product Name",
          dataIndex: "product_Name",
          key: "product_id",
        },
        // {
        //   title: "Phone Number",
        //   dataIndex: "imgUrl",
        //   key: "name",
        //   // render: (text) => <a>{text}</a>,
        // },
        {
            title: "Description",
            dataIndex: "Description",
            key: "Description",
          },
        {
          title: "Quanity",
          dataIndex: "videoUrl",
          key: "age",
        },
        {
          title: "Price",
          dataIndex: "price",
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
            <Button type="link" danger 
            onClick={() => handleDelete(record._id)}
            >
              Delete
            </Button>
          ),
        },
      ];
    
      useEffect(() => {
        if(show){
          handleClose()
        }
       
        getData();
      }, []);
    
      //getData
      const getData = () => {
        axios
          // USE DYNAMIC API ----- ${process.env.REACT_APP_API_URL}
          .get(`${process.env.REACT_APP_API_URL}/Product-list`)
          .then((res) => {
            setData(res.data);
          });
      };

      const handleDelete = async (id) => {
        try {
          const response = await axios.delete(
            `http://localhost:5007/api/delete-product/${id}`
          );
          if (response.status === 200) {
            toast.success("Product item deleted successfully");
            getData();
          } else {
            toast.error("Unable to delete Product item");
          }
        } catch (error) {
          console.error("Error deleting Product item:", error);
          toast.error("Error deleting Product item");
        }
      };

  return (
    <div className="p-grid p-justify-center">
     
      <Container>
      <Row className="py-4">
          <Col md={3}>
            {" "}
            <Button
              variant="success"
              onClick={
                handleShow
              }
            >
              Add Product
            </Button>
          </Col>
        </Row>
        <Row>
        <Table columns={columns} dataSource={data} rowKey="_id" />
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
         <center> <h3>Add Product</h3>  </center>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <AddProduct/>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => handelSubmit(productItem)}>Submit</Button> */}
          {/* <Button onClick={handleClose2}>Cancel</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowProduct;
