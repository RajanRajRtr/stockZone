import { Col, Container, Row, Button } from "react-bootstrap";
import "./slidercard.css";
const SlideCard = ({ title, desc, cover }) => {
  return (
    <div className="box">
      <Row>
        <Col md={7}>
          <h1 style={{ color: "white" }}>
            Experienced In
            <br /> Consult & Business
            <br /> Advice!
          </h1>
          <p style={{ color: "white" }}>
            Gone are the days when users were paying hefty fees to mobile
            service providers to send text messages. Users today require
            unlimited free texts. SendaText is world's firsts steps platform
            that enables free texting to all carriers.
          </p>
          <Button variant="warning">About Us</Button>
        </Col>
        <Col md={5}>{/* <img src={bg} alt="#" /> */}</Col>
      </Row>
    </div>
  );
};

export default SlideCard;
