import React, { useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Col, Container, Row, Button } from "react-bootstrap";
import { InputTextarea } from "primereact/inputtextarea";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AddProduct = ({ handleClose }) => {
  const [productName, setProductName] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [news, setNews] = useState("");
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!productName || !imgFile || !price || !description || !news) {
      toast.error("Please fill all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("imgUrl", imgFile);
    formData.append("videoUrl", videoUrl);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("news", news);
    handleClose();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/createproduct`,
        formData
      );
      if (response.status === 200) {
        toast.success("Product added successfully");
        setProductName("");
        setImgFile("");
        setPrice("");
        setDescription("");
        setNews("");
        setVideoUrl("");
      } else {
        toast.error("Unable to add product");
      }
    } catch (error) {
      toast.error("Something Went Wrong Try Again Later!");
    }
  };

  return (
    <Container>
      <form>
        <Row>
          <Row className="pb-2">
            <Col md={6}>
              <label htmlFor="productName" className="pe-4">
                Product Name:
              </label>
              <InputText
                id="productName"
                className="custom-input"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Col>

            <Col md={6}>
              <label htmlFor="price" className="pe-5">
                Price:
              </label>
              <InputText
                id="price"
                className="custom-input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="py-3">
            <Col md={6}>
              <label htmlFor="imgUrl" className="pe-5">
                Image:
              </label>
              <input
                id="imgUrl"
                type="file"
                className="custom-input1"
                onChange={(e) => setImgFile(e.target.files[0])}
              />
            </Col>
            <Col md={6}>
              <label htmlFor="videoUrl" className="pe-2">
                Video URL:
              </label>
              <InputText
                id="videoUrl"
                className="custom-input"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="px-2 py-4">
            <Col md={6}>
              <label htmlFor="description" className="pe-3">
                Description:
              </label>
              <InputTextarea
                className="custom-input2"
                // style={{ width: "50%" }}
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </Col>
            <Col md={6}>
              <label htmlFor="description" className="pe-3">
                News:
              </label>
              <InputTextarea
                className="custom-input2"
                // style={{ width: "50%" }}
                id="News"
                value={news}
                onChange={(e) => setNews(e.target.value)}
                rows={3}
              />
            </Col>
          </Row>
          <Row className="px-2 py-4">
            <Col>
              <Button
                style={{ display: "flex", float: "inline-end" }}
                onClick={handleAddProduct}
              >
                Add Product
              </Button>
            </Col>
          </Row>
        </Row>
      </form>
    </Container>
  );
};

export default AddProduct;
