import React from "react";
import logo from "../Images/SZ_Logo.png"
import { Col, Container, Row, Carousel, Card } from "react-bootstrap";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import img_aboutUS from "../Images/traing_img2.jpg"

import "./Homepage.css"
const AboutUs = () => {
  return (
    <section className="wrapper background" style={{
      textAlign: "center",
      backgroundColor: "white"
    }}>
      <Container>
        <Row className="py-3" >
          <h1>About StockZone</h1>
          <p className="pb-2">(Recommended For Those Intrested In Dealing With StockZone Shares.) </p>

        </Row>
        <Row className="py-3">
          <Col md={3} sm={12}>
            <img src={logo} alt="logo" />
          </Col>
          <Col md={9} sm={12}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates officiis adipisci nulla, voluptatum sed quidem officia temporibus amet maiores! Explicabo adipisci quod culpa molestias ea ullam dolore facilis velit, at sit debitis soluta mollitia placeat quibusdam praesentium. Mollitia, illum corporis. Accusantium dolor quod assumenda laborum cupiditate, vero dolorum velit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id, illo, neque tempore deserunt quibusdam in deleniti fugit aspernatur corrupti esse nulla quod dolorem itaque modi aut natus? Nemo iusto nobis nesciunt ipsa beatae, illo at error dolores cupiditate, necessitatibus explicabo minima corporis, est iste rerum omnis blanditiis consectetur corrupti!
          </Col>

        </Row>

        <Row className="py-3" >


          <Col md={8}>
            <h1 className="pb-4" >Our Vision & Mission </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, a velit impedit et doloribus, praesentium rem repellat minus distinctio facilis corporis incidunt officiis ullam commodi fuga totam quo dolorum optio? Dignissimos vel voluptates iusto omnis deserunt! Eius eligendi doloremque suscipit labore, temporibus quia ducimus cum doloribus corrupti,<br /><br /> vitae obcaecati! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni deleniti nam fugit laborum. Quae dolores quidem iste architecto. Cum aperiam porro magni consequatur ab, in cupiditate accusantium corrupti maxime explicabo, odio ipsa voluptas neque quae. Earum harum eius modi veritatis veniam! Error veniam provident velit quae facilis obcaecati delectus eius mollitia doloremque rerum, aperiam esse unde, eaque est nam ipsum possimus nesciunt tempore quo dicta deleniti! Eum, fugiat minus itaque cumque nesciunt nulla perspiciatis facere doloribus aspernatur rem ratione quibusdam, odit incidunt, tempora repudiandae. Quia sapiente quod vitae excepturi numquam corrupti, reprehenderit accusamus, aliquid aliquam, atque officiis commodi sed hic?
          </Col>
          <Col md={4}>
            <img src={img_aboutUS} alt="" width="100%" height="80%" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={3} sm={12}>

            <Card className="cardWithShadow">
              <h2>2024</h2>
              <span>Launched</span>
            </Card>
            {/* <canvas id="c"></canvas> */}
          </Col>
          <Col md={3} sm={12}>
            <Card className="cardWithShadow">
              <h2>50 +</h2>
              <span>Team</span>

            </Card>
            {/* <canvas id="c"></canvas> */}
          </Col>
          <Col md={3} sm={12}>
            <Card className="cardWithShadow">
              <h2>500 Cr+</h2>
              <span>Payment Transacted</span>

            </Card >
            {/* <canvas id="c"></canvas> */}
          </Col>
          <Col md={3} sm={12}>
            <Card className="cardWithShadow">
              <h2>100 + </h2>
              <span>Shares Available</span>

            </Card>
            {/* <canvas id="c"></canvas> */}
          </Col>


        </Row>


      </Container>

    </section>
  );
};

export default AboutUs;
