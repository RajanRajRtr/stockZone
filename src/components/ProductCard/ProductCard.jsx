import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";
// import { StockProducts } from ".././../utils/products";
import Modal from "react-bootstrap/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";
import Cart from "../../pages/Cart";
import axios from "axios";

import { FaFilePdf } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const [showyt, setShowyt] = useState(false);
  const [showpdf, setShowpdf] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [phone, setPhone] = useState("");
  const [data, setData] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const handleCloseyt = () => setShowyt(false);
  const handleShowyt = () => setShowyt(true);
  const handleClosepdf = () => setShowpdf(false);
  const handleShowpdf = () => setShowpdf(true);
  const handleFlip = () => {
    setFlipped(!flipped);
  };
  const selectedProduct = data.filter(
    (item) => parseInt(item.id) === parseInt(productItem.id)
  )[0];

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (show1) {
      document.body.style.width = "76%";
    } else {
      document.body.style.width = "100%";
    }

    return () => {
      document.body.style.width = "100%";
    };
  }, [show1]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      // USE DYNAMIC API ----- ${process.env.REACT_APP_API_URL}
      // .get("http://localhost:5007/api/Product-list")
      .get(`${process.env.REACT_APP_API_URL}/Product-list`)
      .then((res) => {
        setData(res.data);
      });
  };

  // useEffect(() => {
  //   // window.scrollTo(0, 0);
  //   // setSelectedProduct(
  //    const filterdata= data.filter(
  //       (item) => parseInt(item.id) === parseInt(productItem.id)
  //     )
  //     console.log("filterdata",filterdata)
  //   // );
  // }, [data, productItem.id]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose1 = () => setShow1(false);
  const toggleShow1 = () => {
    setShow1(true);
  };
  const handelClick = () => {
    // router(`/shop/${productItem.id}`);
    handleShow();
  };
  const handelSell = (productItem) => {
    handleShow2();
    // handelAdd(productItem);
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
    toggleShow1();
  };

  const handelSubmit = (productItem) => {
    if (phone) {
      handelAdd(productItem);
      toast.success("User Details has been added Sucesfullly!");
    } else {
      toast.error("Something Went Wrong!");
    }
    handleClose2();
  };
  return (
    <>
      <Col md={2} sm={5} xs={10} className="product mtop">
        <>
          <div style={{ textAlign: "center" }} className="mb-1">
            <FaYoutube
              size={28}
              className="me-3"
              style={{ cursor: "pointer" }}
              color="red"
              onClick={handleShowyt}
            />
            <FaFilePdf
              size={23}
              color="blue"
              style={{ cursor: "pointer" }}
              onClick={handleShowpdf}
            />
          </div>
          <div className={`card ${flipped ? "flipped" : ""}`}>
            <div className="card-inner">
              <div
                className="card-front"
                onMouseEnter={handleFlip}
                style={{ paddingTop: "10px" }}
              >
                <img
                  loading="lazy"
                  src={`${process.env.REACT_APP_API_URL}/${productItem.imgUrl}`}
                  alt="Stock Img"
                  style={{ width: "90%", minHeight: "20vh" }}
                />
                <div
                  className="product-details"
                  style={{ textAlign: "center" }}
                >
                  <h3>{productItem.product_Name}</h3>
                  <h4 style={{ textAlign: "center" }}>₹ {productItem.price}</h4>
                </div>
              </div>

              <div className="card-back" onMouseLeave={handleFlip}>
                <div>
                  {/* <div className="my-2">
                        <FaYoutube size={28} className="me-3" style={{ cursor: "pointer" }} color="red" onClick={handleShowyt} />
                        <FaFilePdf size={23} color="blue" style={{ cursor: "pointer" }} onClick={handleShowpdf} />
                    </div> */}
                  {productItem?.Description
                    ? `${productItem.Description.substring(0, 135)}${
                        productItem.Description.length > 50 ? "..." : ""
                      }`
                    : ""}
                </div>
              </div>
            </div>
          </div>

          <div className="button-container">
            <Button variant="success" onClick={() => handelAdd(productItem)}>
              Buy
            </Button>
            &nbsp;
            <Button variant="danger" onClick={() => handelSell(productItem)}>
              Sell
            </Button>
          </div>
        </>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            Stock Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductDetails selectedProduct={selectedProduct} />
        </Modal.Body>
      </Modal>

      <Modal
        show={show2}
        onHide={handleClose2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            User Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="mx-3" style={{ fontWeight: "bold" }}>
            Enter Your Mobile Number:
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handelSubmit(productItem)}>Submit</Button>
          <Button onClick={handleClose2}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      <Offcanvas
        show={show1}
        onHide={handleClose1}
        scroll={true}
        backdrop={false}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>

      <Modal
        style={{ width: "100%" }}
        show={showyt}
        onHide={handleCloseyt}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">Youtube</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="750"
            height="315"
            src={productItem.videoUrl}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>

      <Modal
        style={{ width: "100%" }}
        show={showpdf}
        onHide={handleClosepdf}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">Pdf</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://arxiv.org/pdf/quant-ph/0410100.pdf"
            width="755"
            height="315"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductCard;
