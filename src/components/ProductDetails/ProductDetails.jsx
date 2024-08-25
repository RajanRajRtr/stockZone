import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";
import Modal from "react-bootstrap/Modal";
import Cart from "../../pages/Cart";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaFilePdf } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
// import PDFViewer from 'pdf-viewer-reactjs'

const ProductDetails = ({ selectedProduct }) => {
  console.log("selectedProduct", selectedProduct);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showpdf, setShowpdf] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [show1, setShow1] = useState(false);

  // const handleClose1 = () => setShow1(false);
  // const toggleShow1 = () => setShow1((s) => !s);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosepdf = () => setShowpdf(false);
  const handleShowpdf = () => setShowpdf(true);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (selectedProduct, quantity) => {
    // toggleShow1()
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
    handleClose();
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_API_URL}/${selectedProduct.imgUrl}`}
              alt="upload"
            />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.product_Name}</h2>
            {/* <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div> */}
            <div className="info">
              <span className="price">₹ {selectedProduct?.price}</span>
              {/* <span>category:{selectedProduct?.category}</span> */}
            </div>
            {/* <p>{selectedProduct?.description}</p> */}
            <p>{selectedProduct?.Description}</p>
            <div className="mb-5">
              <FaYoutube
                size={28}
                className="me-3"
                style={{ cursor: "pointer" }}
                color="red"
                onClick={handleShow}
              />

              <FaFilePdf
                size={23}
                color="blue"
                style={{ cursor: "pointer" }}
                onClick={handleShowpdf}
              />
            </div>
            {/* <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            /> */}
            <Button
              variant="success"
              className="me-4"
              onClick={() => handelAdd(selectedProduct, quantity)}
            >
              Buy
            </Button>
            <Button
              variant="danger"
              onClick={() => handelAdd(selectedProduct, quantity)}
            >
              Sell
            </Button>{" "}
          </Col>
          <Col md={12}>
            <hr />
            <center>
              <h6
                tyle={{
                  backgroundColor: "rgb(27 127 204 / 65%)",
                  color: "white",
                }}
              >
                News
              </h6>
            </center>

            <u>{selectedProduct.News}</u>
          </Col>
        </Row>
        <Modal
          style={{ width: "90%" }}
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-center">Youtube</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <iframe
                width="550"
                height="315"
                src={selectedProduct.videoUrl}
                // title="YouTube video player"
                // frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </>
          </Modal.Body>

          <Modal.Footer>
            {/* <Button onClick={handleClose}>Close</Button> */}
          </Modal.Footer>
        </Modal>
        <Modal
          style={{ width: "90%" }}
          show={showpdf}
          onHide={handleClosepdf}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-center">Pdf </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              {/* <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        /> */}
              <iframe
                src="https://arxiv.org/pdf/quant-ph/0410100.pdf"
                width="550"
                height="315"
              ></iframe>
            </>
          </Modal.Body>
        </Modal>
        {/* <Offcanvas
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
      </Offcanvas> */}
      </Container>
    </section>
  );
};

export default ProductDetails;
