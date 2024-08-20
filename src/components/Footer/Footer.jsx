import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import WhatsAppChatButton from "./WhatsAppChatButton";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>
      <div className="App">
      {/* Your application components */}
      <WhatsAppChatButton />
    </div>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>StockZone</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              {/* <li>Our Cares</li> */}
              <li  onClick={()=>navigate("/Terms")} style={{cursor:"pointer"}}>Terms & Conditions</li>
              <li onClick={()=>navigate("/Privacy")} style={{cursor:"pointer"}}>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Quick Links</h2>
            <ul>
              <li onClick={()=>navigate("/SebiGuidelines")} style={{cursor:"pointer"}}>SEBI Gudielines</li>
              <li>PAN Of StockZone</li>
              {/* <li></li> */}
              {/* <li>Help Center </li> */}
              {/* <li>How to Buy </li> */}
              {/* <li>Track Your Order </li> */}
              {/* <li>Corporate & Bulk Purchasing </li> */}
              {/* <li>Returns & Refunds </li> */}
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>L01 Washington Square South, Us, NY 112, United States </li>
              <li>Email: abcd@gmail.com</li>
              <li>Phone: +1 1111 456 780</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
