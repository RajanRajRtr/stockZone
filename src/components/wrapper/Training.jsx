import React, { useState } from "react";
import "./Training.css";
import { Col, Container, Row, Carousel, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import training1 from "../../Images/training_img.jpg"
import training2 from "../../Images/traing_img1.jpg"
import training from "../../Images/traing_img2.jpg"
const spanstyle ={
    backgroundColor: "#1154a3",
    color:"white",
    padding:"5px",
    borderRadius:"20px"
}

const Training = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="Training">
      <Container>
        <h1 s>Training Services</h1>
      <div class="Trainingwrap">
      <Row>
        <Col md={4} sm={12}>
        <div class="Trainingbox">
    <div class="Trainingbox-top">
      <img class="Trainingbox-image" src={training1} alt="training logo"/>
      <div class="Trainingtitle-flex">
        <h3 class="Trainingbox-title">Basics of Stock Market</h3>
      </div>
      <p class="Trainingdescription">Duration : 05 Hours<br/>
Skill Layout : Beginner<br/>
Live Market Assistance : Yes<br/>
Mode : Offline / Online<br/>
24*7 Support : Yes</p>    </div>
<h4 class="Traininguser-follow-info">Rs.7,500</h4>

<Button variant="primary" onClick={handleShow} >View Syllabus</Button>
<br/>
<Button variant="success">Pay Now</Button>

  </div>
        </Col>

        <Col md={4} sm={12}>
        <div class="Trainingbox">
    <div class="Trainingbox-top">
      <img class="Trainingbox-image" src={training} alt="training logo"/>
      <div class="Trainingtitle-flex">
        <h3 class="Trainingbox-title">Advanced Technical Analysis</h3>
       
      </div>
      <p class="Trainingdescription"> Duration : 12 Hours<br/>
Skill Layout : Advanced<br/>
Live Market Assistance : Yes<br/>
Mode : Offline / Online<br/>
24*7 Support : Yes</p>
    </div>
    <h4 class="Traininguser-follow-info">Rs.25,000</h4>
    {/* <a href="#" class="Trainingbutton">Follow Mark</a> */}
   <Button variant="primary" onClick={handleShow}>View Syllabus</Button>
   <br/>
<Button variant="success">Pay Now</Button>
  </div>
        </Col>

        <Col md={4} sm={12}>
        <div class="Trainingbox">
    <div class="Trainingbox-top">
      <img class="Trainingbox-image" src={training2} alt="training logo"/>
      <div class="Trainingtitle-flex">
        <h3 class="Trainingbox-title">Intra-hour Speculation</h3>
      
      </div>
      <p class="Trainingdescription"> Duration : 07 Hours<br/>
Skill Layout : Advanced<br/>
Live Market Assistance : Yes<br/>
Mode : Offline / Online<br/>
24*7 Support : Yes</p>    </div>
<h4 class="Traininguser-follow-info">Rs.15,000</h4>

<Button variant="primary" onClick={handleShow}>View Syllabus</Button>
<br/>
<Button variant="success">Pay Now</Button>
  </div>
        </Col>
      </Row>
      
</div>
        
      </Container>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-center">Basic of Stock Marketing</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign: "center"}}>
                    <div>
                        <Row >
                            <h3>4-6 Hours | Beginner Level | Live Market Assistance Overview
                                Overview</h3>
                            <Col md={6}>
                                All companies need money to run their business. Sometimes the profit acquired from selling goods or services is not sufficient to meet the working capital requirements. And so, companies invite normal people like you and me to put some money in their company so that they can run the business efficiently and in return investors get a share of whatever profit they make. Understanding this is the first step towards understanding stock market basics.

                            </Col>
                            <Col md={6}>

                                <img class="Trainingbox-image" src={training1} alt="training logo" width="60%" height="80%" />
                            </Col>
                            <hr />
                            <Col md={12}>
                                <h4>Course Format
                                </h4>
                                <p>During this program, irrepective of whether you are a fresher, experieced in stock market you shall learn basics of stock market with a touch of IPO , how to select sectors for trading or investments , balance sheet, profit and loss statements and cash flow analysis, Financial ratios, Logic behind derivatives, Intraday and delivery trading and risk involved with it, How to use Demat account etc.</p>
                            </Col>
                            </Row>
                            <hr/>
                            <Row style={{textAlign: "center"}}>
                            <Col md={12} >
                                <h4>Course Features

                                </h4>
                                <p>Duration: 4-6 Hours<br />

                                    Skill Layout: Beginner<br />

                                    Live Market Assistance: Yes<br />

                                    24x7 Support: Yes<br />

                                    Mode: Online/Offline/Pre-Recorded<br />

                                    Certificate of Completion: Yes</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row style={{textAlign: "center"}}>
                            <Col md={12} >
                                <h4>WHAT I WILL LEARN ?

                                </h4>
                                <p> Introduction to Stock Market

*IPO<br/>

*Investment & Trading<br/>

*Share Price Movements<br/>

*Types of Indices<br/>

*Equity & Derivatives<br/>

*Fundamental & Technical Analysis<br/>

*Intraday vs Delivery Trading<br/>

*Various tools of Information<br/>

*How to use Demat Account?<br/>

*How to choose a brokerage company<br/>

*Career Opportunities</p>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
    </section>
  );
};

export default Training;
