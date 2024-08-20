// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Col, Container, Row, Button } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   decreaseQty,
//   deleteProduct,
// } from "../app/features/cart/cartSlice";
// import Modal from "react-bootstrap/Modal";

// const Cart = () => {
//   const [phone, setPhone] = useState("");
//   const [show2, setShow2] = useState(false);
//   const { cartList } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const totalPrice = cartList.reduce(
//     (price, item) => price + item.qty * item.price,
//     0
//   );

//   // useEffect(() => {
//   //   window.scrollTo(0, 0);
//   // }, []);

//   const AddCart = async (cartList) => {
//     if (!phone) {
//       alert("Enter Your Phone Number");
//     } else {
//       if (phone) {
//         const data = {
//           cartList: cartList,
//           phone: phone,
//         };
//         try {
//           const response = await axios.post(
//             // USE DYNAMIC API ----- ${process.env.REACT_APP_API_URL}
//             "http://localhost:5007/api/AddCart",
//             data
//           );
//           if (response) {
//             toast.success("Your Order Placed Sucesfullly!");
// localStorage.removeItem("cartList")
// window.location.reload();
//           } else {
//             console.error("Unable to add the cart");
//           }
//         } catch (error) {
//           console.error("Error:", error.response?.data?.message);
//         }
//       } else {
//         toast.error("Something Went Wrong Try Again Later!");
//       }
//       handleClose2();
//     }
//   };

//   const handleClose2 = () => setShow2(false);

//   const handleShow2 = () => setShow2(true);

//   return (
//     <section className="cart-items">
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={12}>
//             {cartList.length === 0 && (
//               <h1 className="no-items product">No Items are add in Cart</h1>
//             )}
//             {cartList.map((item) => {
//               const productQty = item.price * item.qty;
//               return (
//                 <div className="cart-list" key={item.id}>
//                   <Row>
//                     <Col className="image-holder" sm={4} md={3}>

//                       <img src={`http://localhost:5007/${item.imgUrl}`} alt="stock" />
//                     </Col>
//                     <Col sm={8} md={9}>
//                       <Row className="cart-content justify-content-center">
//                         <Col xs={12} sm={9} className="cart-details">
//                           <h3>{item.productName}</h3>
//                           <h4>
//                             ₹{item.price}.00 * {item.qty}
//                             <span>₹{productQty}.00</span>
//                           </h4>
//                         </Col>
//                         <Col xs={12} sm={3} className="cartControl">
//                           <button
//                             className="incCart"
//                             onClick={() =>
//                               dispatch(addToCart({ product: item, num: 1 }))
//                             }
//                           >
//                             <i className="fa-solid fa-plus"></i>
//                           </button>
//                           <button
//                             className="desCart"
//                             onClick={() => dispatch(decreaseQty(item))}
//                           >
//                             <i className="fa-solid fa-minus"></i>
//                           </button>
//                         </Col>
//                       </Row>
//                     </Col>
//                     <button
//                       className="delete"
//                       onClick={() => dispatch(deleteProduct(item))}
//                     >
//                       <ion-icon name="close"></ion-icon>
//                     </button>
//                   </Row>
//                 </div>
//               );
//             })}
//           </Col>
//           <Col md={12}>
//             <div className="cart-total">
//               <h2>Cart Summary</h2>
//               <div className="d_flex">
//                 <h4>Total Price :</h4>
//                 <h3> ₹{totalPrice}.00</h3>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} sm={12}>
//             <Button variant="primary" onClick={handleShow2}>
//               CheckOut
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//       <Modal
//         show={show2}
//         onHide={handleClose2}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-center">
//             User Details
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <label>Enter Your Mobile Number:</label>
//           <input
//             onChange={(e) => {
//               setPhone(e.target.value);
//             }}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={() => AddCart(cartList)}>Submit</Button>
//           <Button onClick={handleClose2}>Cancel</Button>
//         </Modal.Footer>
//       </Modal>
//     </section>
//   );
// };

// export default Cart;

import { useState } from "react";
import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
  updateCartList, // Assuming there's an action to update the cart list
} from "../app/features/cart/cartSlice";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [phone, setPhone] = useState("");
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const AddCart = async (cartList) => {
    if (!phone) {
      alert("Enter Your Phone Number");
    } else {
      if (phone) {
        const data = {
          cartList: cartList,
          phone: phone,
        };
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/AddCart`,
            data
          );
          if (response) {
            // toast.success("Your Order Placed Sucesfullly!");
            localStorage.removeItem("cartList");

            handleShow3();
          } else {
            console.error("Unable to add the cart");
          }
        } catch (error) {
          console.error("Error:", error.response?.data?.message);
        }
      } else {
        toast.error("Something Went Wrong Try Again Later!");
      }
      handleClose2();
    }
  };

  const handleClose2 = () => setShow2(false);

  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => {
    setShow3(false);
    window.location.reload();
    navigate("/");
  };

  const handleShow3 = () => setShow3(true);
  const handleQtyChange = (index, newQty) => {
    if (newQty < 1) return; // Ensure quantity is at least 1
    const updatedCartList = cartList.map((item, idx) =>
      idx === index ? { ...item, qty: newQty } : item
    );
    dispatch(updateCartList(updatedCartList)); // Assuming there's an action to update the cart list
  };

  return (
    <div className="cart-items" style={{ paddingTop: "5px" }}>
      <Container>
        <Row className="justify-content-center">
          {/* <Col md={12}> */}
          {cartList.length === 0 && (
            <h1 className="no-items product">No Items are add in Cart</h1>
          )}
          {cartList.map((item, index) => {
            const productQty = item.price * item.qty;
            return (
              <div className="cart-list" key={item.id}>
                <Row>
                  <Col className="image-holder" sm={12} md={2}>
                    <img
                      src={`http://localhost:5007/${item.imgUrl}`}
                      alt="stock"
                    />
                  </Col>
                  <Col className="image-holder" sm={12} md={10}>
                    <Row className="cart-content ">
                      <Col xs={12} sm={12} md={12}>
                        <h6>{item.product_Name}</h6>

                        <span style={{ fontSize: "smaller" }}>
                          <span className="ms-3"> Quantity</span> *{" "}
                          <span className="ms-3">Price</span>{" "}
                          <span style={{ marginLeft: "75px" }}>Total</span>
                        </span>
                      </Col>
                      <Col xs={12} sm={12} md={12} className="cart-details">
                        <span>
                          <input
                            type="number"
                            style={{
                              width: "65px",
                              marginLeft: "10px",
                              border: "1px solid #ddd",
                              borderRadius: "4px",
                              padding: "4px",
                              textAlign: "center",
                            }}
                            defaultValue={item.qty}
                            min="1"
                            onChange={(e) =>
                              handleQtyChange(index, Number(e.target.value))
                            }
                          />
                          <input
                            className="mx-2"
                            // type="number"
                            disabled
                            style={{
                              width: "63px",
                              textAlign: "center",
                              border: "1px solid #ddd",
                              borderRadius: "4px",
                              padding: "4px",
                            }}
                            defaultValue={item.price}
                          />
                          =
                          <input
                            // type="number"
                            disabled
                            style={{
                              width: "100px",
                              textAlign: "center",
                              border: "1px solid #ddd",
                              borderRadius: "4px",
                              padding: "4px",
                            }}
                            value={`₹ ${(item.qty * item.price).toFixed(2)}`}
                          />
                          {/* <span className="ms-2">
       =&nbsp; ₹{(item.qty * item.price).toFixed(2)}
      </span> */}
                          {/* <span>Total:</span>
      <span className="ms-2">
        ₹{(item.qty * item.price).toFixed(2)}
      </span> */}
                        </span>
                      </Col>

                      {/* <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col> */}
                    </Row>
                  </Col>
                  {/* <Col sm={8} md={12}> */}

                  {/* </Col> */}
                  <button
                    className="delete"
                    onClick={() => dispatch(deleteProduct(item))}
                  >
                    <ion-icon name="close"></ion-icon>
                  </button>
                </Row>
              </div>
            );
          })}
          {/* </Col> */}
          <Col md={12} sm={12} style={{ textAlign: "center" }}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price :</h4>
                <h3> ₹{totalPrice}.00</h3>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} style={{ textAlign: "center" }}>
            <Button
              className="my-3"
              variant="primary"
              disabled={totalPrice === 0}
              onClick={handleShow2}
            >
              CheckOut
            </Button>
          </Col>
        </Row>
      </Container>
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
          <label style={{ fontWeight: "bold" }}>
            Enter Your Mobile Number:
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => AddCart(cartList)}>Submit</Button>
          <Button onClick={handleClose2}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show3}
        onHide={() => handleClose3()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "green", color: "white" }}
        >
          <Modal.Title id="contained-modal-title-center">
            Order Placed Successfully.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="my-3" style={{ textAlign: "center" }}>
              {" "}
              Our customer care executive will contact shortly{" "}
            </h4>

            <h6 style={{ textAlign: "center" }}>
              {" "}
              Kindly keep the following documents ready:
            </h6>
            <ul style={{ marginLeft: "12%" }}>
              <li>1. Pan Card</li>
              <li>2. Aadhar Card</li>
              <li>3. Cancelled Cheque or 1 month bank statement</li>
              <li>4. CMR Copy( Client Master copy)</li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Cart;
