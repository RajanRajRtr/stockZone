import React from "react";
import logo from "../Images/SZ_Logo.png"
import { Col, Container, Row, Carousel, Card } from "react-bootstrap";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Location from "../components/SeachBar/Location"

import "./Homepage.css"
const ContactUs = () => {
  return (
    <section className="wrapper background" style={{
      textAlign: "center",
      backgroundColor: "white"
    }}>
      <Container>
        <Row className="py-3" >
          <h1 className="pb-3" >Contact Us</h1>

        </Row>
      
<Row>
    <Location/>
</Row>
       
        <Row className="my-5">
        <Col md={4} className="my-3">
          <h2><MdLocationOn color="red" />
          </h2>
          <h4>Visit Us</h4>
          <p>L01 Washington Square South, Us, NY 112, United States</p>
        </Col>
        <Col md={4}>
          <h2><IoCall color="green" />
          </h2>
          <h4>Call Us</h4>
          <p>abcd@gmail.com</p>
        </Col>
        <Col md={4}>
          <h2><MdEmail color="blue" />
          </h2>
          <h4>Email Us </h4>
          <p>+1 1111 456 780</p>
        </Col>
      </Row>

      </Container>
     
    </section>
  );
};

export default ContactUs;
