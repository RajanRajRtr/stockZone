import React from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import {
  RiDoubleQuotesR,
  RiDoubleQuotesL,
  RiSingleQuotesL,
  RiSingleQuotesR,
} from "react-icons/ri";
import avatar from "./../../Images/avatar.png";

const Testimonal = () => {
  return (
    <section className="testimonal background">
      <Container>
        <Row>
          <h1 className="pb-1">Testimonals</h1>
        </Row>
        <Row className="my-4">
          <Col md={4} sm={12}>
            <Card className="gradient-card">
              <Row className="mt-3">
                <Col md={5}>
                  <img
                    src={avatar}
                    style={{
                      width: "100px",
                      display: "flex",
                      float: "inline-end",
                    }}
                  />
                </Col>
                <Col md={7}>
                  <h4>JhonDavid.A</h4>
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                </Col>
              </Row>
              <Row className="my-4">
                <h5>
                  {" "}
                  <RiSingleQuotesL size={16} />
                  Excellent Service And Trustable
                  <RiSingleQuotesR size={16} />
                </h5>
                <p className="p-4">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.y.
                </p>
              </Row>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="gradient-card mb-3">
              <Row className="mt-3">
                <Col md={5}>
                  <img
                    src={avatar}
                    style={{
                      width: "100px",
                      display: "flex",
                      float: "inline-end",
                    }}
                  />
                </Col>
                <Col md={7} className="mt-4">
                  <h4>MICk.S</h4>
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                </Col>
              </Row>
              <Row className="my-4">
                <h5>
                  <RiSingleQuotesL size={16} />
                  We Deal with StockZone Share
                  <RiSingleQuotesR size={16} />
                </h5>
                <p className="p-4">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Row>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="gradient-card">
              <Row className="mt-3">
                <Col md={5}>
                  <img
                    src={avatar}
                    style={{
                      width: "100px",
                      display: "flex",
                      float: "inline-end",
                    }}
                  />
                </Col>
                <Col md={7} className="mt-4">
                  <h4>BOSE.W</h4>
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                  <FaStar color="#ffc107" />
                </Col>
              </Row>
              <Row className="my-4">
                <h5>
                  <RiSingleQuotesL size={16} />
                  Excellent Service
                  <RiSingleQuotesR size={16} />
                </h5>
                <p className="p-4">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonal;
